import React, {useState, useEffect, useContext} from 'react'
import '../styles/LoginPage.scss'
import logo from '../rsc/images/logo.PNG'
import { UserContext } from "../context/UserContext";
import { SUC, FAIL } from '../helpers/globalVars';
import { useNavigate } from "react-router-dom";


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

  const inputsUser = {
    femail: "",
    fpassword: "",
  };

const LoginPage = () => {
    const [formFields, setFormFields] = useState([]);
    const [formFieldsInputs, setFormFieldsInputs] = useState(inputsUser);
    const [errorMessage, setErrorMessage] = useState("");
    const { signIn } = useContext(UserContext);

  useEffect(() => {
    setFormFields(formUser);
    setFormFieldsInputs(formFieldsInputs);
  }, [])
      
  const onChange = (event) => {
    setErrorMessage("");

    setFormFieldsInputs({
      ...formFieldsInputs,
      [event.target.name]: event.target.value,
    });
  };

  const formIsValid = () => {
    let isValid = true;
    console.log("validating")
    Object.entries(formFieldsInputs).forEach(([key, value]) => {
        console.log(value)
      if (value === "") {
        isValid = false;
        setErrorMessage("Please fill out every input form");
      }
    });
    return isValid;
  };

  let navigate = useNavigate();
  const login = async () =>{
      if (formIsValid()) {
        const res = await signIn(formFieldsInputs.femail, formFieldsInputs.fpassword);

        if(res.status == SUC){
            alert("welcome back")
            navigate("/Dashboard");
        }else{
            res.message? setErrorMessage(res.message): setErrorMessage("Something went wrong, please try again")
        }
      }

  }


  return (
    <div className='LoginPage '>
        <div className='login-modal flex-col center-center'>
            <img src={logo} alt="logo" />
            <h1 className='welcome txt'><strong>Welcome back</strong></h1>
            <h4 className='details txt'>Please enter your details.</h4>
            <p className='txt-error'>{errorMessage}</p>
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
                required
              />
            ))}  
            <div className='form-remember flex-row'>
                <div className='check-group flex-row'>
                    <input id="cbox2" type="checkbox"/> &nbsp;
                    <label htmlFor="cbox2">Remember for 30 days</label> &nbsp;
                </div>
                <p className='txt-link'>Forgot password</p>    
            </div>
            <button className='blue-btn' onClick={() => login()}>Sign in</button>
            <div className='form-sign-up flex-row center-center'>
                <p>Don't have an account? </p>&nbsp;<p className='sign-up txt-link'> Sign up</p>
            </div>
        </div>
    </div>
  )
}

export default LoginPage