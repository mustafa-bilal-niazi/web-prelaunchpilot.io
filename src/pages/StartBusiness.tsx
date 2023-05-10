import SignupForm from "../components/SignUpForm"

export default function StartBusiness(){
    return (
        <>
            <div 
                style={{
                backgroundImage: 'linear-gradient(to right, rgb(136 253 246 / 57%), rgb(85 184 229 / 42%))',
                backgroundSize: 'cover', 
                height: '800px',
                width: 'auto',
                display: 'flex',
                paddingLeft: '10%',
                position: 'relative',
                }}>
                
                <div className='container1'>
                    <div className='l1diff' style={{fontSize: 36,fontWeight: 600,color: '#333'}}>Be The First To Try All Simulations Free</div>
                    <div className='l1diff'style={{fontSize: 22,fontWeight: 400,color: '#333',paddingTop: 30}}>We are currently accepting applications to test our AI models and provide feedback.</div>
                    <div className='l1diff'style={{fontSize: 22,fontWeight: 400,color: '#333',paddingTop: 30}}>If you are planning to launch, invest in or improve the sales performance of an existing product or service, we want to help you be successful!</div>
                    <div className='l1diff' style={{fontSize: 18,paddingTop: 30}}>Just fill in the form to sign up and you will be contacted by our team members.Just fill in the form to sign up and you will be contacted by our team members.</div>
                </div>
                <div style={{width: '40%', paddingLeft: 40,marginTop: '2%'}}>
                    <SignupForm/>
                </div>
                <div className='svgelement-container' style={{ position: 'absolute', bottom: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" opacity="0.33" fill="#fff" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                        <path className="elementor-shape-fill" fill="#fff" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                    </svg>               
                </div>
                
            </div>

            
        </>
    )
}