import React,{useState} from 'react'
const ContactUs = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const SubmitForm=(e)=>{
    e.preventDefault();
    alert(name,email,message);
  }
  return (
    <>
     <div style={{textAlign:"center"}}>
      <b><p>Contact Us</p></b>
      <h1>We'd love to<br/> hear from you</h1><br/>
      <p>If you have any questions, please fill in this contact form, and our team will<br/>reach you back as soon as possible.</p><br/><br/>
      <form onSubmit={SubmitForm}>
         <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} style={{width:"20%"}} required/>&nbsp;&nbsp;&nbsp;
         <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{width:"20%"}} required/>
         <br/><br/>
         <textarea placeholder="Message" value={message} onChange={(e)=>setMessage(e.target. value)} style={{width:"42%"}} required/>
         <br/><br/>
         <button type="submit" className="btn bg-dark text-white">Send Message</button>
      </form>
     </div> 
    </>
  )
}

export default ContactUs
