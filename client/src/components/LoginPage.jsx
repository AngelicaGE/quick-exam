import React, {useState, useEffect} from 'react'
import '../styles/LoginPage.scss'
import logo from '../rsc/images/logo.PNG'

const formUser = [
    {
      name: "femail",
      type: "email",
      placeholder: "Enter your email"
    },
    {
      name: "fpassword",
      type: "password",
      placeholder: "******"
    }
  ];

const LoginPage = () => {
    const [formFields, setFormFields] = useState([]);
    const [formFieldsInputs, setFormFieldsInputs] = useState([]);
    const [errorMessage, setErrorMessage] = useState(
        "Please fill out every input form"
      );

  useEffect(() => {
    setFormFields(formUser);
    setFormFieldsInputs(formFieldsInputs);
  }, [])
      
  const onChange = (event) => {
    setFormFieldsInputs({
      ...formFieldsInputs,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='LoginPage '>
        <div className='login-modal flex-col center-center'>
            <img src={logo} alt="logo" />
            <h1 className='welcome txt'><strong>Welcome back</strong></h1>
            <h4 className='details txt'>Please enter your details.</h4>
            {formFields.map((input) => (
              <input
                className="form-group input"
                key={input.name} 
                type={input.type}
                value={
                  formFieldsInputs[input.name]
                    ? formFieldsInputs[input.name]
                    : ""
                }
                onChange={onChange}
                name={input.name}
                placeholder={input.placeholder}
              />
            ))}  
            <div className='form-remember flex-row'>
                <div className='check-group flex-row'>
                    <input type="checkbox"/> &nbsp;
                    <label for="cbox2">Remember for 30 days</label> &nbsp;
                </div>
                <p className='txt-link'>Forgot password</p>    
            </div>
            <button className='blue-btn'>Sign in</button>
            <div className='form-sign-up flex-row center-center'>
                <p>Don't have an account? </p>&nbsp;<p className='sign-up txt-link'> Sign up</p>
            </div>
        </div>
    </div>
  )
}

export default LoginPage