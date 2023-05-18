import React from 'react';
import {useState,useEffect} from 'react';
import { set1, services_list, question8b, question8bExamples,question4a,question3examples } from './constants';
import ReportPage from './ReportPage';
import { useNavigate } from 'react-router-dom';
import { Link,Route } from 'react-router-dom';
import animationData from '../assets/lottie/loadingfiles.json';
import Lottie from 'lottie-react';


export default function TryFree(){

    const [showReportPage, setShowReportPage] = useState(false);
    const [userEmail,setuserEmail] = useState('mustafa@gmail.com')
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
    const [answer12,setAnswer12]=useState('')
    const [answer13,setAnswer13]=useState('')
    const [answer14,setAnswer14]=useState('')
    const [resOverview, setResOverview] = useState('');
    const [resIntro, setResIntro] = useState('');
    const [marketBenefits,setMarketBenefits]=useState('');
    const [marketChallenges,setMarketChallenges]=useState('');
    const [productFit,setProductFit]=useState('');
    const [valueMisalignment,setValueMisalignment]=useState('');
    const [marketingMethods,setMarketingMethods]=useState('');
    const [failureSection,setFailureSection]=useState('');
    const [finalSection,setFinalSection]=useState('');
    const [buttonState,setButtonState]=useState('Next')


//------------------------------------------------------------API Functions---------------------------------------------------------------

    const getOverview = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/overview?industry=${answer1}`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        setResOverview(responseData.overview);
        setResIntro(responseData.intro);
      }
      catch (err) {
        console.error(err);
      }
    };

    const getMarketBenefits = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/market_benefits?industry=${answer1}`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData)
        setMarketBenefits(responseData['market-fit']);
      }
      catch (err) {
        console.error(err);
      }
    };

    
    const getMarketChallenges = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/market_challenges?industry=${answer1}&answer_q2=${answer2}`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        setMarketChallenges(responseData['market-challenges']);
      }
      catch (err) {
        console.error(err);
      }
    };

    const getProductFit = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/product_fit?industry=${answer1}&answer_q3=${answer4}&answer_q4=${answer5}&answer_q5=${answer7}&answer_q6=${answer8}&answer_q7=${answer9}`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        setProductFit(responseData['product-fit']);
      }
      catch (err) {
        console.error(err);
      }
    };

    const getValueMisalignment = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/value_misalignment?industry=${answer1}&answer_q3=${answer4}&answer_q7=${answer9}&answer_q8=${answer12}&answer_q8a=${answer13}&answer_q8b=${answer14}`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        setValueMisalignment(responseData['misalignment']);
      }
      catch (err) {
        console.error(err);
      }
    };

    const getMarketingMethods = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/marketing_methods?industry=${answer1}&answer_q5=${answer7}`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        setMarketingMethods(responseData['marketing-methods']);
      }
      catch (err) {
        console.error(err);
      }
    };

    const getFailureSection = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/failure_section?industry=${answer1}&answer_q2=${answer2}`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData)
        setFailureSection(responseData['failure-reasons']);
        console.log('Failure Section: '+ failureSection)
      }
      catch (err) {
        console.error(err);
      }
    };

    const getFinalSection = async () => {
      try {
        const response = await fetch(`http://185.132.176.176/final_section`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData)
        setFinalSection(responseData['final']);
        console.log('Final Section'+ finalSection)
      }
      catch (err) {
        console.error(err);
      }
    };

    const questionSet = [
      'Enter your Email Address',
      'Which industry does or will your business operate in?',
      `Do you know which segment of the "${answer1}" industry your business does or will operate in?`,
      'Enter your segment here',
      'What will your business be selling?',
      `Are you already selling your ${answer4} to paying customers?`,
      `Proximity: Where Are the customers who have already paid for your ${answer4} located?`,
      `Where are you planning to begin selling your ${answer4}?`,
      `Have you estimated the total market share and revenue potential you can reasonably expect to gain from selling your ${answer4} in this market?`,
      'Can you say that your product(s) or service(s) are different or better than everyone else?',
      'Describe (in a way that is easy to understand) what makes you different here:',
      `Have people offered to pay you for your ${answer4} after hearing about or seeing your  ${answer4} through an advertisement?`,
      `Are you filling any unmet needs/wants or solving a problem for customers in your segment of the "${answer1}" industry?`,
      'Describe (In a way that is easy to understand) what unmet need (or want) you are filling or what problem you are solving for customers here:',
      `What's the value customers will receive from your ${answer4}:`,
      "Generating Report.."
    ];

    const nextClick=async()=> {
        if(questionState===0){
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(userEmail)) {
            alert()
          }
          else {
            setQuestionState(questionState + 1);
          }
          
        }
        if(questionState>0 && questionState<16 && questionState!==2 && questionState!==5 && questionState!==9 && questionState!==12){
          if(questionState===1){
            getOverview()
            getMarketBenefits()
          };
          if(questionState===7){
            getMarketingMethods()
          };
          if(questionState===13){
            setButtonState('Generate report')
            if(answer9==='Yes' || answer12==='Yes'){
              getValueMisalignment()
            }
          };
          if(questionState===14){
            getFinalSection()
          };
          setQuestionState(questionState+1)
        }
        
        else if (questionState===2 || questionState===5  || questionState===9 || questionState===12){
          if(questionState===2){
            if(answer2==='Yes'){
              getMarketChallenges()
            }
            getFailureSection()
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
            getProductFit()
            if(answer9==='Yes'){
              setQuestionState(questionState+1)
            }
            if(answer9==='No'){
              setQuestionState(questionState+2)
            }
          }
          if(questionState===12){
            if(answer12==='Yes'){
              setQuestionState(questionState+1)
            }
            if(answer12==='No'){
              setQuestionState(questionState+2)
            }
          }
          
        }
    }

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
      if(questionState==13){
        setAnswer13('')
      }
      // if(questionState==15){
      //   hideReport()
      // }
      if(questionState>0 && questionState!==4 && questionState!==7 && questionState!==11 && questionState!==14){
          setQuestionState(questionState-1)
      }
      else if (questionState===4 || questionState===7  || questionState===11 || questionState===14){
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
        if(questionState===14){
          setButtonState('Next')

          if(answer12==='Yes'){
            setQuestionState(questionState-1)
          }
          if(answer12==='No'){
            setQuestionState(questionState-2)
          }
        }
      }
    }

    useEffect(() => {
      console.log('intro: ' +resIntro)
      console.log('Overview: ' +resOverview)
      console.log('Market Challenges: ' +marketChallenges)
      console.log('Market Benefits: ' +marketBenefits)
      console.log('Product Fit: ' +productFit)
      console.log('value misalignment: ' +valueMisalignment)
      console.log('Marketing methods: ' +marketingMethods)
      console.log('Failure Section: ' +failureSection)
      console.log('Final Section: ' +finalSection)
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
      console.log('Q7 b '+answer11);
      console.log('Q8: '+answer12);
      console.log('Q8a '+answer13);
      console.log('Q8b '+answer14);

    }, [answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11,answer12,answer13,answer14,resIntro,resOverview,marketBenefits,finalSection,failureSection,productFit,valueMisalignment,marketChallenges,marketingMethods]); // log the value of all answers every time any changes
    
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      if (resIntro && resOverview && failureSection) {
        setIsLoading(false);
      }
    }, [resIntro, resOverview, failureSection]);
    

    const [searchTerm, setSearchTerm] = useState('');
    
    const showReport = () => {
      setShowReportPage(true);
    }
    const hideReport = () => {
      setShowReportPage(false);
    }

    return (
        <>{!showReportPage && (
        <div className="chatscreen">

          <div className="chattext-container">
            <h1 style={{marginTop: 10,marginBottom: 20,fontSize: 35,fontWeight: 700,fontFamily: 'Montserrat,Sans-serif'}}>Validate Your Business Idea In Seconds</h1>
          </div>

          <div className="chatinput-maincontainer">

            <div className="chatinput-container">
                <div style={{fontSize: 18,fontWeight: 500,fontFamily: 'Montserrat,Sans-serif',padding: '4%',textAlign: 'center'}}>{questionSet[questionState]}</div>
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
                      border:  '4px solid #09536a',
                      height: '200px', 
                      width: '80%',
                      overflowY:  'scroll',
                    }}
                  />)}
                  {questionState===13 && ( <textarea
                    value={answer13}
                    onChange={(event) => setAnswer13(event.target.value)}
                    className='chatinput'
                    style={{  
                      border:  '4px solid #09536a',
                      height: '200px', 
                      width: '80%',
                      overflowY:  'scroll',
                    }}
                  />)}
                  {questionState>0 && questionState!=10 && questionState!=13 &&
                    <div className='chatinput' id="question-container" style={{    
                      border: questionState !== 2 && questionState !==4 && questionState!==5 && questionState!==6 && questionState!==7 && questionState!==8 && questionState!==9 && questionState!==11 && questionState!==12 && questionState!==15 ? '4px solid rgba(39, 223, 211, 0.85)' : '0px',
                      height: questionState === 2 || questionState===4 || questionState===5 || questionState===6 || questionState===7 || questionState===8 || questionState===9 || questionState===11 || questionState===12 || questionState===15 ? 'auto' : '250px', 
                      overflowY: questionState!==2 && questionState !== 4 && questionState!==5 && questionState!==6 && questionState!==7 && questionState!==8 && questionState!==9 && questionState!==11 && questionState!==12 && questionState!==15 ? 'scroll' : 'hidden',marginLeft: '10%', marginRight: '10%'}}>
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
                        {answer2==="Yes" && questionState===3 && 
                        <input
                        style={{borderWidth: '1px solid'}}
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={event => setSearchTerm(event.target.value)}
                      /> &&
                      services_list[answer1].map((category, index) =>                        
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
                              <p style={{fontSize: 13,fontWeight: 150,marginTop: 5,marginBottom:5}}>{question3examples[index]}</p>
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
                              <span style={{fontSize: 13,marginLeft: 6}}>{question4a[index]}</span>

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
                              <span style={{fontSize: 13,marginLeft: 6}}>{question4a[index]}</span>

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
                        {questionState===12 && services_list['knowSegment'].map((category, index) =>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer12 === category ? '#09536a' : 'lightblue',
                            color: answer12 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer12(category)}>
                              {category}
                          </li>
                        )}
                        {questionState===14 && services_list['productValue'].map((category, index) =>
                        <>
                          <li key={index} 
                          style={{cursor: 'pointer',
                            borderRadius: 5,
                            padding: '10px 10px',
                            textAlign: 'left',
                            marginBottom: '5px',
                            backgroundColor: answer14 === category ? '#09536a' : 'lightblue',
                            color: answer14 === category ? 'white' : 'black'}} 
                            
                          onClick={() => setAnswer14(category)}>
                              {category}
                              <p style={{fontSize: 13,marginTop: 4,fontWeight: 150}}>{question8b[index]}</p>
                              <p style={{fontSize: 13,marginTop: 0,marginBottom: 0,fontWeight: 150}}>{question8bExamples[index]}</p>

                          </li>
                          <div style={{textAlign: 'left',paddingLeft: 10,}}>
                          </div>
                        </>
                        )}

                      </ul>
                    </div>}
                    <div style={{justifyContent: 'space-between'}}>
                      {questionState>0 && 
                        <button type="button" className='chatinputbtn' onClick={backClick}>Back</button>
                      }
                      {questionState<14 &&                       
                      <button type="button" className='chatinputbtn' onClick={nextClick}>Next</button>
                      } 
                      {questionState==14 &&                     
                      <button type="button" className='chatinputbtn' onClick={showReport}>Generate Report</button>
                      } 
                    </div>
                    
              </div>
              
          </div>
          
        </div>)}

        {showReportPage && (
        isLoading ? (
          // Render the loading icon or placeholder content
          <>
            <div style={{textAlign: 'center'}}>Loading...</div>
            <Lottie animationData={animationData}  loop={true}/>
            </>
        ) : (
        <>
          {/* <button type="button" className='chatinputbtn' onClick={backClick}>Back</button> */}
          <div style={{marginLeft: '10%', marginRight: '10%', overflow: 'auto',whiteSpace: 'pre-wrap' }}>
            <h1>Report</h1>
            {resIntro}
            <h2>Overview: </h2>{resOverview}
            <h2>Market Benefits </h2>{marketBenefits}
            <h2>Marketing challenges </h2>{marketChallenges}
            <h2>Product Fit </h2> {productFit}
            <h2>Value misalignment </h2> {valueMisalignment}
            <h2>Marketing methods </h2> {marketingMethods}
            <h2>Failure Section </h2> {failureSection}
            <h2>Final Section </h2> {finalSection}
          </div>
       </>))}
      </>    
      )
}