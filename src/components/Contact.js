import React from 'react'
import MessageForm from './MessageForm'

export default function Contact() {
  return (
    <div id="contact-div">
        <h1>Contact Me</h1>
        <br />

        <div id="contact-items-wrapper">

          <div className="contact-item">
            <MessageForm />
            <br/>
          </div>
          
          <div id="contact-item-two" className="contact-item">

           
            <div id="contact-green-bar"></div>
            
            
            <div id="contact-text">
              <h3>Or contact me directly at</h3>
              <h3>dusty@rehorningtexas.com</h3>
              <h3> or </h3>
              <h3>(832) 287-9207</h3>
            </div>

          </div>
          
          
        </div>


<footer style={{height: 90}}></footer>

        </div>
  )
}
