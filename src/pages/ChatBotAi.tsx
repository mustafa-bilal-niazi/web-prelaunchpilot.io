import React from 'react';
import {useState,useEffect} from 'react';

export default function TryFree(){
  

    const set1 : string[] =[
        'Advisory and Financial Services',
        'Technology',
        'Online Retail',
        'Specialist Engineering, Infrastructure and Contractors',
        'Consumer Goods and Services',
        'Industrial Machinery, Gas and Chemicals',
        'Life Sciences',
        'Accommodation and Food Services',
        'Administration, Business Support and Waste Management Services',
        'Educational Services',
        'Arts, Entertainment and Recreation',
        'Wholesale Trade',
        'Retail Trade',
        'Healthcare and Social Assistance',
        'Transportation and Warehousing',
        'Construction',
        'Professional, Scientific and Technical Services',
        'Manufacturing'
    ]

    type Services_list = {
      [key: string]: string[];
    };

    const services_list: Services_list = {
      'productSaleRegion': ['Local','Regional','National','Global'],
      'productType' : ['Product', 'Services','Subscription'],
      'knowSegment': ['Yes', 'No'],
      'Advisory and Financial Services':[
        'AD&D Insurance', 'Agricultural Banks', 'Agricultural Insurance', 'Aircraft Rental Services', 
        'Airline Catering Services', 'Armored Transportation Services', 'Audio & Visual Equipment Rental',
        'Audit Services', 'Auto Extended Warranty Providers', 'Automobile Insurance', 
        'Background Check Services', 'Bankruptcy Lawyers & Attorneys', 'Batting Cages', 
        'Benefit Administration Services', 'Boat Rentals', 'Bond Management', 'Business Brokers', 
        'Business Concierge Services', 'Business Financing', 'Business Information Resellers', 
        'Business Insurance', 'Business Lawyers & Attorneys', 'Business Process Outsourcing Services', 
        'Business Valuation Firms', 'Card Reward Program Services', 'Casting Agencies', 
        'Check Cashing & Payday Loan Services', 'Child Adoption Agencies', 'Claims Adjusting', 
        'Commercial Aircraft Leasing', 'Commercial Auto Insurance', 'Commercial Construction Insurance', 
        'Company Research Services', 'Construction Machinery Rentals', 'Consumer Lawyers & Attorneys', 
        'Contractors\' Insurance', 'Corporate Law Firms', 'Credit Repair Services', 
        'Criminal Lawyers & Attorneys', 'Cryptocurrency Exchanges', 'Customer Care Centers', 
        'Customs Brokers', 'Cyber Liability Insurance', 'Data Center Colocation Services', 
        'Debt Relief Services', 'Dental Insurance', 'Disability Insurance', 
        'Distribution and Logistics Consulting Services', 'Document Management Services', 
        'eDiscovery Consulting Services', 'eDiscovery Software Publishing', 'eTrading Software Developers', 
        'Education Consultants', 'Employee Assistance Program Services', 'Employee Relocation Services', 
        'Employment Law Firms', 'Energy & Utility Consulting Services', 'Entertainment Insurance', 
        'Entertainment Lawyers & Attorneys', 'Estate Lawyers & Attorneys', 'Estate Liquidation Services', 
        'Executive Search Recruiters', 'Expert Networks', 'Expert Witness Consulting Services', 
        'Family Law & Divorce Lawyers & Attorneys', 'Financial Data Service Providers', 'Fleet Car Leasing', 
        'Foreclosure Lawyers & Attorneys', 'Foreign Currency Exchange Services', 'Forensic Accounting Services', 
        'Franchise Resale Brokers & Consultants', 'Group Purchasing Organizations', 'Health & Medical Reinsurance', 
        'Healthcare Consultants', 'Healthcare Lawyers & Attorneys', 'Hedge Funds', 'High Frequency Trading', 
        'HMO Providers', 'Home Furniture Rental', 'Home Medical Equipment Rentals', 'Home Warranty Providers', 
        'Homeowners\' Insurance', 'Identity Theft Insurance', 'Immigration Lawyers & Attorneys', 
        'Installment Lenders', 'Insurance Claims Processing Software', 'Insurance Lawyers & Attorneys', 
        'Intermodal Container Leasing', 'International Law Firms', 'International Trade Financing', 
        'Invoice Factoring', 'Jet Ski Rental', 'Kayak Rental', 'Labor Relations Lawyers & Attorneys', 
        'Libraries & Archives', 'Long Term Care Insurance', 'Marketing Consultants', 'Mediation Services', 
        'Medical Billing Services', 'Medical Claims Processing Services', 'Medical Equipment Rental', 
        'Medical Group Practice Management', 'Medical Malpractice Insurance', 'Medical Patient Financing', 
        'Merchant Banking Services', 'Model Agencies', 'Money Transferring Services', 
        'Motion Picture & Theatrical Equipment Rental', 'Mutual Fund Management', 
        'Nondestructive Testing Services', 'Office Furniture Rental', 'Oil, Gas & Mining Consultants', 'Online Insurance Brokers',  
        'Online Legal Services',  'Online Mortgage Brokers',  'Online Payment Processors',  'Online Stock Brokerages',  
        'Pallet & Skid Rental',  'Party Bus Rentals',  'Pawn Shops',  'PeertoPeer Lending Platforms',  'Pension Fund Management',  
        'Personal Finance & Money Management Software Developers',  'Personal Injury Lawyers & Attorneys',  
        'Pharmaceutical Contract Management Consulting',  'Pharmaceuticals Packing & Labeling Services',  'Portable Toilet Rental',
        'Prepaid Credit & Debit Card Providers',  'Private Banking Services',  'Product Returns Management Services',  
        'Product Warranty Insurance',  'Professional Organizations',  'Property & Casualty Reinsurance',  'Public Opinion Research',
        'Railroad Car Rental & Leasing',  'Real Estate Law Firms',  'Regional Banks',  "Renters' Insurance",  'Repossession Services',
        'Reverse Mortgages Providers',  'Risk Management, Insurance Advisory & Consulting',  'RV & Camper Van Rental',  
        'Serviced Office Leasing',  'Settlement Funding Companies',  'Shared Office Spaces',  'Stenographic Services',  
        'Stock Price & Rating Research',  'Subprime Auto Loans',  'Supply Chain Management Services',  'Tax Lawyers and Attorneys',
        'ThirdParty Data Entry Services',  'ThirdParty Logistics',  'Title Insurance',  'Trademark & Patent Lawyers & Attorneys',
        'Transcription Services',  'Travel Insurance',  'Trial Consultants',  'Typing Services',  'Vision Insurance',  
        'Weather Forecasting Services',  'Workers\' Compensation Insurance'],
      'Technology':[
        '3D Printer Manufacturing', '3D Printing & Rapid Prototyping Services', 
        'Activated Carbon Manufacturing', 'Adult & Pornographic Websites', 'Air Purification Equipment Manufacturing', 
        'ATM Manufacturing', 'Audio and Visual Equipment Repair Services', 'Augmented Reality Software', 
        'Bare Printed Circuit Board Manufacturing', 'Battery Recycling', 'Binoculars Manufacturing', 'Biomass Power', 
        'Biometrics Scan Software', 'Bioplastics Manufacturing', 'Building Lighting Control System Manufacturing', 
        'Business Intelligence Software', 'CAD Software Developers', 'Capacitor Manufacturing', 'Cell Phone Recycling', 
        'Chatbot Software', 'Cloud Security Software', 'Collaboration & Project Management Software', 'Colocation Facilities', 
        'ComputerAided Design Software Developers', 'Conferencing Service Providers', 'Consumer Drone Manufacturing', 
        'Contact Tracing Systems', 'Contactless Payment Systems', 'Cooking Oil Recycling', 'Court Reporting Services',
        'CRM System Providers', 'Cryotherapy', 'Dark Fiber Network Operators', 'Data Backup Software', 'Data Loss Prevention Software',
        'Data Recovery Services', 'Digital Advertising Agencies', 'Digital Forensic Services', 'Document Digitization Services', 
        'EBook Publishing', 'Ecigarette Manufacturing', 'Educational Software', 'Electric Vehicle Charging Stations', 
        'Electricity & Signal Testing Instrument Manufacturing', 'Electronic Access Control System Manufacturing', 
        'Electronic Article Surveillance Product Manufacturing', 'Electronic Design Automation Software Developers', 
        'Electronic Goods Recycling', 'Endpoint Security Software', 'Enterprise Resource Planning Software Developers', 
        'Ethanol Fuel Production', 'ETL & ELT Data Management Software', 'Facial Recognition Software', 'Fantasy Sports Services',
        'FiberOptic Cable Manufacturing', 'Field Service Management Software', 'Film Animation Services', 'Fire & Smoke Alarm Manufacturing',
        'Fleet Telematics Systems', 'Flyboarding Equipment Manufacturing', 'Fraud Detection Software Developers', 
        'Gas Detection Device Manufacturing', 'Geothermal Electricity Plant Operation', 'Headphone Manufacturing', 
        'Home Automation Services', 'HR & Payroll Software', 'Hybrid & Electric Vehicle Manufacturing', 'Identity Management Software', 
        'Identity Theft Protection Services', 'Internet Hosting Services', 'Internet Radio Broadcasting', 'IT Security Consulting',
        'Language Learning Software Developers', 'Learning Management Software', 'LED Manufacturing', 'Lithium Battery Manufacturing',
        'Metal Detector Manufacturing', 'Microprocessor Chip Manufacturing', 'Microscope Manufacturing', 'Music Streaming Services',
        'Night Vision Equipment Manufacturing', 'Nonferrous Metal Recycling', 'Online Payment Processing Software Developers', 
        'Online Recruitment Sites', 'Online Survey Software', 'Optical Character Recognition Software', 
        'Optical CharacterRecognition Software Developers', 'Ordnance Manufacturing', 'Oscilloscope Manufacturing', 
        'Point of Sale Software Developers', 'Power Circuit Breaker Manufacturing', 'Precision Agriculture Systems & Services',
        'Pressure Sensor Manufacturing', 'RealTime Traffic Information Providers', 'Respiratory Protection Equipment Manufacturing',
        'Safe & Vault Manufacturing', 'Scale & Balance Manufacturing', 'Scrap Metal Recycling',
        'SeismicMonitoring Equipment Manufacturing', 'SEO & Internet Marketing Consultants', 'Smart Lighting Manufacturing', 
        'Smart Meter Manufacturing', 'Smart Speaker Manufacturing', 'Smart Thermostat Manufacturing', 'Smartphone App Developers', 
        'Social Network Game Development', 'Social Networking Sites', 'Software Testing Services', 'Solar Farm Developers', 
        'Solar Panel Installation', 'Sonar Device Manufacturing', 'Speech & Voice Recognition Software Developers', 
        'Storage Area Network Software Development', 'Tax Preparation Software Developers', 'Thermostat Manufacturing', 
        'Tire & Rubber Recycling', 'Traffic Light Manufacturing', 'Ultrasonic Cleaning Equipment Manufacturing', 'Urinal Manufacturing', 
        'Variable Message Signage Manufacturing', 'Video Conferencing Software Developers', 'Video Games Software Developers', 
        'Video Games Software Publishing',"Video Management Platform Software","Virtual Data Rooms","Virtual Reality Software",
        "WastetoEnergy Plant Operation","Wearable Device Manufacturing","Web Design Services","Web Domain Name Sales",
        "Website Creation Software Developers","Wind Turbine Installation","Wire Connector Manufacturing",
        "Wireless Internet Service Providers in the US"],
      'Online Retail': ['a','b','c','d','e'],
      'Specialist Engineering, Infrastructure and Contractors': ['a','b','c','d','e'],
      'Consumer Goods and Services': ['a','b','c','d','e'],
      'Industrial Machinery, Gas and Chemicals': ['a','b','c','d','e'],
      'Life Sciences': ['a','b','c','d','e'],
      'Accommodation and Food Services': ['a','b','c','d','e'],
      'Administration, Business Support and Waste Management Services': ['a','b','c','d','e'],
      'Educational Services': ['a','b','c','d','e'],
      'Arts, Entertainment and Recreation': ['a','b','c','d','e'],
      'Wholesale Trade': ['a','b','c','d','e'],
      'Retail Trade': ['a','b','c','d','e'],
      'Healthcare and Social Assistance': ['a','b','c','d','e'],
      'Transportation and Warehousing': ['a','b','c','d','e'],
      'Construction': ['a','b','c','d','e'],
      'Professional, Scientific and Technical Services': ['a','b','c','d','e'],
      'Manufacturing': ['a','b','c','d','e'],


      }

      interface IService {
        category: string;
        items: string[];
      }
      
      interface IServiceList {
        services: IService[];
      }
      
      interface Props {
        answer1: string;
      }
      
    const [userEmail,setuserEmail] = useState('m@m.com')
    const [questionState, setQuestionState] = useState(0)
    const [answer1,setAnswer1]=useState('')
    const [answer2,setAnswer2]=useState('')
    const [answer3,setAnswer3]=useState('')
    const [answer4,setAnswer4]=useState('')
    const [answer5,setAnswer5]=useState('')
    const [answer6,setAnswer6]=useState('')
    const [answer7,setAnswer7]=useState('')
    const [answer8,setAnswer8]=useState('')
    const [answer9,setAnswer9]=useState('')
    const [answer10,setAnswer10]=useState('')
    const [answer11,setAnswer11]=useState('')
    const [isEmailValid, setIsEmailValid] = useState(true);


    const questionSet = [
      'Enter your Email Address',
      'Q1. Which industry does or will your business operate in?',
      `Q2. Do you know which segment of the "${answer1}" industry your business does or will operate in?`,
      'Q2 (a). Enter your segment here',
      'Q3. What will your business be selling?',
      `Q4. Are you already selling your ${answer4} to paying customers?`,
      `Q4 (a). Proximity: Where Are the customers who have already paid for your ${answer4} located? \n Local (your city) Regional (your state or region) National (your country) Global (other countries)?`,
      `Q5. Where are you planning to begin selling your ${answer4}? \n Local (your city) Regional (your state or region) National (your country) Global (other countries)`,
      `Q6. Have you estimated the total market share and revenue potential you can reasonably expect to gain from selling your ${answer4} in this market?`,
      'Q7. Can you say that your product(s) or service(s) are different or better than everyone else?',
      '7a. Describe (in a way that is easy to understand) what makes you different here:',
      `Q8. Have people offered to pay you for your ${answer4} after hearing about or seeing your  ${answer4} through an advertisement?`,
    ];

    function nextClick() {
        if(questionState===0){
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(userEmail)) {
            setIsEmailValid(false);
          }
          else {
            setIsEmailValid(true);
            setQuestionState(questionState + 1);
          }
          
        }
        if(questionState>0 && questionState<11 && questionState!==2 && questionState!==5 && questionState!==9){
            setQuestionState(questionState+1)
        }
        else if (questionState===2 || questionState===5  || questionState===9){
          if(questionState===2){
            if(answer2==='Yes'){
              setQuestionState(questionState+1)
            }
            if(answer2==='No'){
              setQuestionState(questionState+2)
            }
          }
          if(questionState===5){
            if(answer5==='Yes'){
              setQuestionState(questionState+1)
            }
            if(answer5==='No'){
              setQuestionState(questionState+2)
            }
          }
          if(questionState===9){
            if(answer9==='Yes'){
              setQuestionState(questionState+1)
            }
            if(answer9==='No'){
              setQuestionState(questionState+2)
            }
          }
          
        }
    }

    const checkEmail = () => {
      // Check if email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userEmail)) {
        setIsEmailValid(false);
        return;
      }
  
      // Proceed to next question
      setIsEmailValid(true);
      setQuestionState(questionState + 1);
    };
  
  

    function backClick() {
      if(questionState==3){
        setAnswer3('')
      }
      if(questionState==6){
        setAnswer6('')
      }
      if(questionState==10){
        setAnswer10('')
      }
      if(questionState>0 && questionState!==4 && questionState!==7 && questionState!==11){
          setQuestionState(questionState-1)
      }
      else if (questionState===4 || questionState===7  || questionState===11){
        if(questionState===4){
          if(answer2==='Yes'){
            setQuestionState(questionState-1)
          }
          if(answer2==='No'){
            setQuestionState(questionState-2)
          }
        }
        if(questionState===7){
          if(answer5==='Yes'){
            setQuestionState(questionState-1)
          }
          if(answer5==='No'){
            setQuestionState(questionState-2)
          }
        }
        if(questionState===11){
          if(answer9==='Yes'){
            setQuestionState(questionState-1)
          }
          if(answer9==='No'){
            setQuestionState(questionState-2)
          }
        }
      }
    }

    useEffect(() => {
      console.log('Q1: '+answer1);
      console.log('Q2: '+answer2);
      console.log('Q2 a: '+answer3);
      console.log('Q3: '+answer4);
      console.log('Q4: '+answer5);
      console.log('Q4 a: '+answer6);
      console.log('Q5: '+answer7);
      console.log('Q6: '+answer8);
      console.log('Q7: '+answer9);
      console.log('Q7 a: '+answer10);
      console.log('Q8: '+answer11);

    }, [answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11]); // log the value of all answers every time any changes
    
    return (
        <>
        <div className="chatscreen">
          <div className="chattext-container">
            <h1 style={{marginTop: 10,marginBottom: 20,fontSize: 55,fontWeight: 700,fontFamily: 'Montserrat,Sans-serif'}}>Validate Your Business Idea In Seconds</h1>
            <p style={{marginTop: 10,marginBottom: 10,fontSize: 22,fontWeight: 400,fontFamily: 'Montserrat,Sans-serif'}}>Use A.I. to instantly see how your business can succeed, and what to watch out for</p>
            <p style={{fontSize: 16,fontWeight: 600,fontFamily: 'Montserrat,Sans-serif'}}>⚖️ Validate your business</p>
            <p style={{fontSize: 16,fontWeight: 600,fontFamily: 'Montserrat,Sans-serif', }}>📈 Market research</p>
            <p style={{fontSize: 16,fontWeight: 600,fontFamily: 'Montserrat,Sans-serif'}}>🚀 Launch and scale</p>
            <p style={{fontSize: 16,fontWeight: 600,fontFamily: 'Montserrat,Sans-serif'}}>💸 Raise capital</p>
          </div>
          <div className="chatinput-maincontainer">
            <div className="chatinput-container">
                <div style={{fontSize: 20,fontWeight: 600,fontFamily: 'Montserrat,Sans-serif',padding: '4%',textAlign: 'left'}}>{questionSet[questionState]}</div>
                  {questionState===0 && ( <input
                    type="email"
                    value={userEmail}
                    onChange={(event) => setuserEmail(event.target.value)}
                    style={{
                      width: '80%',
                      border: '1px solid black',
                      borderRadius: '5px',
                      padding: '10px',
                    }}
                  />)}
                  {questionState===10 && ( <textarea
                    value={answer10}
                    onChange={(event) => setAnswer10(event.target.value)}
                    className='chatinput'
                    style={{    
                      border:  '4px solid rgba(39, 223, 211, 0.85)',
                      height: '200px', 
                      overflowY:  'scroll',marginLeft: '10%', marginRight: '10%'
                  }}/>)}

                    {questionState>0 && questionState!=10 && 
                    <div className='chatinput' id="question-container" style={{    
                      border: questionState !== 2 && questionState!==5 && questionState!==8 && questionState!==9 && questionState!==11 ? '4px solid rgba(39, 223, 211, 0.85)' : '0px',
                      height: questionState === 2 || questionState===5 || questionState===8 || questionState===9 || questionState===11 ? '100px' : '200px', 
                      overflowY: questionState!==2 && questionState!==5 && questionState!==8 && questionState!==9 && questionState!==11? 'scroll' : 'hidden',marginLeft: '10%', marginRight: '10%'}}>
                      <ul className='ulforchatoptionstext'>
                        
                        {questionState===1 && set1.map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            borderColor: 'black',
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer1 === category ? '#09536a' : 'lightblue',
                            color: answer1 === category ? 'white' : 'black'}} 
                          onClick={() => setAnswer1(category)}>
                              {category}
                          </li>
                        )}
                        
                        {questionState===2 && services_list['knowSegment'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer2 === category ? '#09536a' : 'lightblue',
                            color: answer2 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer2(category)}>
                              {category}
                          </li>
                        )}
                        {answer2==="Yes" && questionState===3 && services_list[answer1].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer3 === category ? '#09536a' : 'lightblue',
                            color: answer3 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer3(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===4 && services_list['productType'].map((category, index) =>
                          <li key={index}
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer4 === category ? '#09536a' : 'lightblue',
                            color: answer4 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer4(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===5 && services_list['knowSegment'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer5 === category ? '#09536a' : 'lightblue',
                            color: answer5 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer5(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===6 && services_list['productSaleRegion'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer6 === category ? '#09536a' : 'lightblue',
                            color: answer6 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer6(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===7 && services_list['productSaleRegion'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer7 === category ? '#09536a' : 'lightblue',
                            color: answer7 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer7(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===8 && services_list['knowSegment'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer8 === category ? '#09536a' : 'lightblue',
                            color: answer8 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer8(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===9 && services_list['knowSegment'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer9 === category ? '#09536a' : 'lightblue',
                            color: answer9 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer9(category)}>
                              {category}
                          </li>
                        )}
                        
                        {questionState===11 && services_list['knowSegment'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer11 === category ? '#09536a' : 'lightblue',
                            color: answer11 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer11(category)}>
                              {category}
                          </li>
                        )}
                      </ul>
                    </div>}
                    <div>
                    {questionState>0 && 
                      <button type="button" className='chatinputbtn' onClick={backClick}>Back</button>
                    } 
                    <button type="button" className='chatinputbtn' onClick={nextClick}>Next</button>
                    </div>
            </div>
          </div>
        </div>
      </>    
      )
}