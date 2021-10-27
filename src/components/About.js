import { useState } from "react";

function About() {

    const[myStyle,updatemyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    });

    const[btnText,updatebtnText]=useState('Enable Dark Mode')

    const toggleStyle=()=>{
        if(myStyle.color==='black'){
            updatemyStyle({
                color:'white',
                backgroundColor:'black'
            })
            updatebtnText('Enable Light Mode')
        }
        else
        {
            updatemyStyle({
                color:'black',
                backgroundColor:'white'
            })
            updatebtnText('Enable Dark Mode')
        }
    }


    return (
        <div className="container">
            <div className="heading-aboutus">
                <h1>About Us</h1>
            </div>
            <div style={myStyle} className="text-about-container">
                <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <br/>
            <div className="dark-mode-button">
                <button onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
            </div>
        </div>
    )
}

export default About;