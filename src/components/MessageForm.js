import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import {BiSend} from 'react-icons/bi'

export default function MessageForm() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEST_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };




  return (
    <div id="message-form-div">
        
 
        <form id="message-form" ref={form} onSubmit={(e) => sendEmail(e)}>

            <label>Name</label>
            <br />
            <input type="text" name="user_name" />
            <br/>

            <label>Email</label>
            <br />
            <input id="message-email" type="email" name="user_email"></input>
            <br />


            <label>Message</label>
            <br />
            <textarea id="message-input" name="message"></textarea>
            <br />

            
            <button id="send-message" >Send Message <BiSend id="send-icon" /></button>
     
        </form>

    </div>
  )
}
