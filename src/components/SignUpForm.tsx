import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName?: string;
  email: string;
  company: string;
  industry: string;
  number: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    industry: '',
    number: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  

  return (
    <form onSubmit={handleSubmit} style={{ borderRadius: 20, boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', padding: 20 , right: 0,backgroundColor: 'white',height: 500}}>
        <div className='l1diff' style={{fontSize: 36,fontWeight: 400,padding: 30,alignItems: 'center', justifyContent: 'center',display: 'flex',color: '#333'}}>
            Join The Beta Test Program Now
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} style={{ borderRadius: 10, padding: 15, marginRight: 10, width: '48%' ,boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',borderWidth: 0,fontFamily: "Questrial,Sans-serif" }} />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} style={{ borderRadius: 10, padding: 15, width: '48%',boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', borderWidth: 0,fontFamily: "Questrial,Sans-serif" }} />
        </div>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={{ borderRadius: 10, padding: 15, marginBottom: 10, width: '100%',boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',borderWidth: 0,fontFamily: "Questrial,Sans-serif" }} />
        <input type="tel" name="number" placeholder="Contact Number" value={formData.number} onChange={handleChange} style={{ borderRadius: 10, padding: 15, marginBottom: 15, width: '100%',boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', borderWidth: 0,fontFamily: "Questrial,Sans-serif" ,fontSize: 14}} />
        <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} style={{ borderRadius: 10, padding: 15, marginBottom: 15, width: '100%' ,boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',borderWidth: 0,fontFamily: "Questrial,Sans-serif" }} />
        <input type="text" name="industry" placeholder="Industry Type" value={formData.industry} onChange={handleChange} style={{ borderRadius: 10, padding: 15, marginBottom: 15, width: '100%',boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',borderWidth: 0,fontFamily: "Questrial,Sans-serif" }} />
        <button className='button' type="submit" style={{ backgroundColor: '#0077FF', color: 'white', borderRadius: 15, padding: 10, width: '30%',borderWidth: 0, }}>Sign Up</button>
    </form>
  );
};

export default Form;
