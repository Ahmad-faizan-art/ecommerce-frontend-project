import React, { useState } from 'react'
const Cart = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName,setLastName]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [tel, setTel] = useState("");
  const [company,setcompany]=useState("")
  const SubmitForm = (e) => {
    e.preventDefault();
     if (password !== Confirmpassword) {
    alert("Password does not match!");
    return;
     }
    alert(FirstName,LastName, email, password,Confirmpassword, tel,company);
  }
  return (
    <>
      <div className="container mt-5">
        <form className="mx-auto" style={{maxWidth:"600px"}} onSubmit={SubmitForm}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-floating mb-4">
                <input type="text" className="form-control" id="firstName" placeholder="First name" value={FirstName} onChange={(e)=>setFirstName(e.target.value)} required />
                <label htmlFor="firstName">First name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating mb-4">
                <input type="text" className="form-control" id="lastName" placeholder="Last name" value={LastName} onChange={(e)=>setLastName(e.target.value)} required />
                <label htmlFor="lastName">Last name</label>
              </div>
            </div>
          </div>
          <div className="form-floating mb-4">
            <input type="email" className="form-control" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email address" required />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-4">
            <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            <label htmlFor="password">Password</label>
          </div>
          <div className="form-floating mb-4">
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" value={Confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} required />
            <label htmlFor="confirmPassword">Confirm password</label>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-floating mb-4">
                <input type="tel" className="form-control" id="phone" placeholder="Phone number" value={tel} onChange={(e)=>setTel(e.target.value)} required />
                <label htmlFor="phone">Phone number</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating mb-4">
                <input type="text" className="form-control" id="company" placeholder="Company" value={company} onChange={(e)=>setcompany(e.target.value)} required />
                <label htmlFor="company">Company</label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary px-4 py-2">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
export default Cart

