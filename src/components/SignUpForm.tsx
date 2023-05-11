import React, { useState } from 'react';

interface InputValues {
  firstName: string;
  [key: string]: string;
  lastName: string;
  email: string;
  number: string;
  company: string;
  industry: string;

}

function Form(){

const [inputs, setInputs] = useState<InputValues>({ firstName: '', lastName: '', email: '', number: '', company: '', industry: ''});

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if(inputs.email == '' || inputs.firstName == '' || inputs.company == '' || inputs.industry == '' || inputs.number == ''){
      e.preventDefault();
      alert('Missing fields')
    }
    else {
      if(validateEmail(inputs.email)){
        e.preventDefault();
        alert(inputs.firstName + ' signed up as: ' + inputs.email  );
        setInputs({ firstName: '', lastName: '', email: '', number: '', company: '', industry: ''})
      }
      else {
        e.preventDefault();
        alert('invalid email address')
      }
    }
    
  };

  return (
    <form onSubmit={handleSubmit} style={{ borderRadius: 20, boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', padding: 20 , right: 0,backgroundColor: 'white',height: 500}}>
        <div className='l1diff' style={{fontSize: 36,fontWeight: 400,padding: 30,alignItems: 'center', justifyContent: 'center',display: 'flex',color: '#333'}}>
            Join The Beta Test Program Now
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
            <input type="text" name="firstName" placeholder="First Name" value={inputs.firstName || ""} onChange={handleChange} style={{ borderRadius: 10, padding: 15, marginRight: 10, width: '48%' ,boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',borderWidth: 0,fontFamily: "Questrial,Sans-serif" }} />
            <input type="text" name="lastName" placeholder="Last Name" value={inputs.lastName || ""} onChange={handleChange} style={{ borderRadius: 10, padding: 15, width: '48%',boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', borderWidth: 0,fontFamily: "Questrial,Sans-serif" }} />
        </div>
        <input type="email" name="email" placeholder="Email" value={inputs.email || ""} onChange={handleChange} style={{ borderRadius: 10, padding: 15, marginBottom: 10, width: '100%',boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',borderWidth: 0,fontFamily: "Questrial,Sans-serif" }} />
        <input type="tel" name="number" placeholder="Contact Number" value={inputs.number || ""} onChange={handleChange} style={{ borderRadius: 10, padding: 15, marginBottom: 15, width: '100%',boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', borderWidth: 0,fontFamily: "Questrial,Sans-serif" ,fontSize: 14}} />
        <input type="text" name="company" placeholder="Company Name" value={inputs.company || ""} onChange={handleChange} style={{ borderRadius: 10, padding: 15, marginBottom: 15, width: '100%' ,boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',borderWidth: 0,fontFamily: "Questrial,Sans-serif" }} />
        <input type="text" name="industry" placeholder="Industry Type" value={inputs.industry || ""} onChange={handleChange} style={{ borderRadius: 10, padding: 15, marginBottom: 15, width: '100%',boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',borderWidth: 0,fontFamily: "Questrial,Sans-serif" }} />
        <button type="submit" style={{ backgroundColor: '#0077FF', color: 'white', borderRadius: 15, padding: 10, width: '30%',borderWidth: 0,cursor: 'pointer'  }}>Sign Up</button>
    </form>
  );
};

export default Form;
