import React from "react";
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Workk from "./assets/work.jpg";

const Work = ()=>{
    const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm( 'service_c3gre01','template_x37p36l', form.current, 'wM15FAcxBSrQ0wzuZ')
      .then(
        () => {
          alert('Message successfully sent! We will get in touch with you as soon as possible. Cheers!!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again!!')
        }
      )
    }
    return(
        <>
        <hr className="line"/>

        <div className="work-parent">

      <div>
        <img src={Workk} className="work-img" />
      </div>

          <div className="contact-form">
            <h1 className="work-heading">Let's <span className="caste">work</span> together. Get in touch using the form below.</h1>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        </>
    );
}
export default Work;
