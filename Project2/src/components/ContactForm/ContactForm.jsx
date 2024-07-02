import React, { useState } from 'react'
import classes from "./ContactForm.module.css";
import { Button } from '../Button/Button';
import { FaPhone } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
export const ContactForm = () => {

  const [name,setName] = useState("nitya")
  const [email,setEmail] = useState("nityap332gmail.com")
  const [text,setText] = useState("hello")

  const onSubmit =(event)=>{
  
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log("name",event.target[0].value);
    console.log("email",event.target[1].value);
    console.log("text",event.target[2].value);

  }
  return (
   <section className={classes.container}>
    <div className={classes.contact_form}>
      <div className={classes.top_button}>
      <Button text ="VIA SUPPORT CHAT" icon ={<BiMessageDetail  fontSize="24px"/>} />
      <Button text ="VIA CALL" icon ={<FaPhone  fontSize="24px"/>} />
      </div>
      <Button isOutLine = {true} text ="VIA EMAIL FROM" icon ={<MdEmail  fontSize="24px"/>} />
      
      <form  onSubmit={onSubmit}>
        <div className={classes.form_control}>
        <label htmlFor="name">Name</label> 
        <input type="text" name ="name" />
        </div>
        <div className={classes.form_control}>
        <label htmlFor="email">Email</label> 
        <input type="email" name ="email" />
        </div> 
        <div className={classes.form_control}>
        <label htmlFor="text">Text</label> 
        <textarea name="text" id="text" rows="8"/>
        </div>
        <div className={classes.submit_btn}>
        <Button  text ="SUBMIT BUTTON" />
        </div>
       
        <div>{name + " " + email + " " + text}</div>  
      </form>
    </div>
    <div className={classes.contact_image}>
      <img src="/images/contact.svg" alt="contact_img" />
    </div>

   </section>
  )
}
