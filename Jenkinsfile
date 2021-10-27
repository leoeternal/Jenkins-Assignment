pipeline {
    agent any
    tools {nodejs "node"}
    environment {
    registry = "leoeternal79/jenkinreactapp"
    dockerImage = ''
    registryCredential = 'DockerHub'
  }
    stages{
        stage("fetching"){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/leoeternal/Jenkins-Assignment']]])
            }
        }
        stage("build"){
            steps{
                sh "npm install"
            }
        }
        stage('image') {
      steps {
        script {
          dockerImage = docker.build registry
          docker.withRegistry('', registryCredential) {
            dockerImage.push()
          }
          }
      }
        }
          stage('run') {
      steps {
        script {
          dockerImage = docker.image('leoeternal79/jenkinsapp')
          dockerImage.run("-p 3000:3000 --rm --name jenkinsreactapp_container")
        }
      }
    }
    }
    
}