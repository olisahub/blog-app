// import React, { useState } from "react";
// import "./LoginForm.css";
// import image from "./img/soya.jpg";

// function LoginForm() {
//   const [values, setvalues] = useState({
//     username: "",
//     password: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [valid, setValid] = useState(false);

//   const handleusernameInputChange = (event) => {
//     setvalues({ ...values, username: event.target.value });
//   };

//   const handlepasswordInputChange = (event) => {
//     setvalues({ ...values, password: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (values.username && values.password) {
//       setValid(true);
//     }
//     setSubmitted(true);
//   };

//   return (
//     <div
//       className="background"
//       style={{
//         backgroundImage: `url(${image})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         height: 1500,
//         width: 2000,
//       }}
//     >
     
//       <div className="form-container">
//       <h3 className="headc">Enter Your Details</h3>
//         <form
//           disabled={submitted}
//           className="register-form"
//           onSubmit={handleSubmit}
//         >
//          
//           <div className="input-container">
//             <label className="form-label">Username</label>
//             <input
//              type="text"
//               name="username"
//               className="form-input"
//               placeholder="Enter your username"
//             />
//             {submitted && !values.username ? (
//               <span>please enter username</span>
//             ) : null}
//           </div>

//           <div className="input-container">
//             <label className="form-label">Password</label>
//             <input
//               onChange={handlepasswordInputChange}
//               value={values.password}
//               id="password"
//               type="password"
//               name="password"
//               className="form-input"
//               placeholder="Enter your password"
//             />
//             {submitted && !values.password ? (
//               <span>please enter password</span>
//             ) : null}
//           </div>
//           <div>
//           <button className="form-input-btn" type="submit">
//             Sign up
//           </button>
//           </div>
//           <span className="form-input-login">
//             Already have an account? Login <a href="#">Here</a>
//           </span>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default LoginForm;

import React, { useState } from "react";
import "./LoginForm.css";
import Base from './img/roses.jpg';


function LoginForm() {
  const [values, setValues] = useState({
    username:"",
    password:"",
    
  });
  const handleusernameInputChange = (event) => {
    setValues({...values, username: event.target.value})
  }
  const handlepasswordInputChange = (event) => {
    setValues({...values, password: event.target.value})
  }
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (event) => {
    event. preventDefault ();
    if (values.username && values.password) {setValid(true);}
    setSubmitted(true);
  }
  const [valid, setValid] = useState(false)
    
    return(
    <div className="container">
      <div className="leftside">
       {submitted && valid ? <div className="success-message">Success! Thank you for registering </div> : null} 
        <div>
          <h2 className="welche-pg textCenter">WELCOME TO la Blog</h2>
        </div>
        <div>
          <h3 className="info-pg">Firstly explore our world</h3>
          <p className="long-gist textCenter">Please how do we help</p>
        </div>
        <hr className="horizontal-line"></hr>
        <h4 className="signin-below"> Kindly Signin below </h4>
        <div className="card-screen">
          <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label className="form-label">Username</label>
            <input
            onChange={handleusernameInputChange}
            value={values.username}
             type="text"
              name="username"
              className="form-input"
              placeholder="Enter your username"
            />
            {submitted && !values.username ? <span className="alert">Username required</span> : null}
            </div>
            <div className="input-container">
             <label className="form-label">Password</label>
             <input
             onChange={handlepasswordInputChange}
             value={values.password}
               id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
            />
            {submitted && !values.username ? <span className="alert">Password required</span> : null}
            
            </div>
            <div>
         <button className="form-input-btn" type="submit">
           Sign in
          </button>
          </div>
          

          </form>
        </div>
        
      </div>
      
      
        <div className="rightside" style={{background: `url(${Base})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",objectFit:"cover"}}>

        </div>

      
    </div>
  );
}
export default LoginForm;

      
