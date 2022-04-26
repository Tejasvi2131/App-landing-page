import React from 'react'

function About(props) {
    return (
       <div id='about'>
           <div className='about-image'>
               <img src={props.image}/>
           </div>
           <div className='about-text'>
             <h2> {props.title} </h2>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ducimus totam consequuntur sit voluptate. Vel laborum praesentium rerum minus sapiente deleniti voluptatum, eligendi, mollitia ipsa at perferendis, distinctio cum repellat!</p>
             <button>{props.button}</button>
           </div>
       </div>
    );
}

export default About;
