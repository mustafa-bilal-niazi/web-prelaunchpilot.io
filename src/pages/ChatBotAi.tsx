import React from 'react';
import {useState,useEffect} from 'react';
import { set1, services_list, question8b, question8bExamples,question4a,question3examples } from '../assets/constants/constants';
import Typed from 'typed.js';
import { useNavigate } from 'react-router-dom';
import { Link,Route } from 'react-router-dom';
import animationData from '../assets/lottie/loadingfiles.json';
import chatbothero from '../assets/lottie/chatbothero.json';
import Lottie from 'lottie-react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { IoMdDoneAll } from 'react-icons/io';

import html2pdf from 'html2pdf.js';
import NavBar from '../components/NavBar';
import ProgressBar from '../components/ProgressBar';
import emailjs from '@emailjs/browser';
import animationData2 from '../assets/lottie/waitingicon.json';
import animationData3 from '../assets/lottie/completeicon.json';
import animationData4 from '../assets/lottie/thinkingicon.json';

export default function ChatBotAi(){

  function generatePDF() {
    const element = document.querySelector('.reportGenerated');
    const opt = {
      margin: [1, 0, 1, 0],
      filename: `PreLauchPilot-${userCompany}-Report.pdf`,
      html2canvas: { scale: 4 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      pagebreak: { before: '.newPage', avoid: ['.MBConten','.MCContent', '.MMContent', '.PFContent', '.VMContent','FailContent','FinalContent'] }
    };
  
    html2pdf().set(opt).from(element).save();
  };
  
  
  function TypingEffect() {
    useEffect(() => {
      const typed = new Typed('.l33', {
        strings: ["Analysing Your Business Potential...","Exploring Business Market...", "Searching For Possible Challenges...", "Divising Market Strategy...", "Setting Up Marketing Approaches...", "Researching Lauch and Scaling...",],
        typeSpeed: 40,
        backSpeed: 60,
        loop: true,
        showCursor: false,
      });
      return () => {
        typed.destroy();
      };
    }, []);
  
    return (
      <div className='l33'></div>
    );
  }

    const [showReportPage, setShowReportPage] = useState(false); //change to false after testing
    const [userCompany,setuserCompany] = useState('ALGORYC')
    const [userName,setuserName] = useState('mustafa bilal')
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
    
    const [selectedItem,setSelectedItem]=useState(false)
    
    // useEffect(() => {
    //   const returnIfSelected = () => {
    //     let x;
      
    //     switch (questionState) {
    //       case 1:
    //         x = answer1;
    //         break;
    //       case 2:
    //         x = answer2;
    //         break;
    //       case 3:
    //         x = answer3;
    //         break;
    //       case 4:
    //         x = answer4;
    //         break;
    //       case 5:
    //         x = answer5;
    //         break;
    //       case 6:
    //         x = answer6;
    //         break;
    //       case 7:
    //         x = answer7;
    //         break;
    //       case 8:
    //         x = answer8;
    //         break;
    //       case 9:
    //         x = answer9;
    //         break;
    //       case 10:
    //         x = answer10;
    //         break;
    //       case 11:
    //         x = answer11;
    //         break;
    //       case 12:
    //         x = answer12;
    //         break;
    //       case 13:
    //         x = answer13;
    //         break;
    //       case 14:
    //         x = answer14;
    //         break;
    //       default:
    //         x = '';
    //     }
    //     setSelectedItem(x !== '');      
    //   };
    //   returnIfSelected()
    // }, [answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11,answer12,answer13,answer14]);

// const checkIfSelected

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

//-----------------------------------------------------------------Question SET AND NEXT/BACK Button functions--------------------------------------------------------------------
// function sendEmail {
//   emailjs.send('PreLaunchPilot.Email', templateID, templateParams, publicKey);

// }


    const questionSet = [
      'Enter your details',
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
      `Are you filling any unmet needs/wants or solving a problem for customers in the "${answer1}" industry?`,
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
        interface Actions {
          [key: number]: () => void;
        }
        const actions: Actions = {
          1: () => {
            getOverview();
            getMarketBenefits();
            getFinalSection();
            setQuestionState(questionState + 1);
          },
          7: () => {
            getMarketingMethods();
            setQuestionState(questionState + 1);
          },
          13: () => {
            setButtonState('Generate report');
            if (answer9 === 'No' && answer12 === 'No') {
              getValueMisalignment();
            }
            setQuestionState(questionState + 1);
          }
        };
        
        if (questionState > 0 && questionState < 16) {
          if (actions.hasOwnProperty(questionState)) {
            actions[questionState]();
          } 
          else if (questionState === 2 || questionState === 5 || questionState === 9 || questionState === 12) {
            if (questionState === 2) {
              getFailureSection();
              if (answer2 === 'No') {
                getMarketChallenges();
              }
              setQuestionState(answer2 === 'Yes' ? questionState + 1 : questionState + 2);

            } 
            if (questionState === 5) {
              setQuestionState(answer5 === 'Yes' ? questionState + 1 : questionState + 2);
            }
            if (questionState === 9) {
              getProductFit();
              setQuestionState(answer9 === 'Yes' ? questionState + 1 : questionState + 2);
            }
            if (questionState === 12) {
              setQuestionState(answer12 === 'Yes' ? questionState + 1 : questionState + 2);
            }
          } 
          else {
            setQuestionState(questionState + 1);
          }
        }
    }

    function setQuestionStateBasedOnAnswer(answer: string) {
      setQuestionState(answer === 'Yes' ? questionState - 1 : questionState - 2);
    }
    
    function backClick() {
      switch (questionState) {
        case 3:
          setAnswer3('');
          setQuestionState(questionState - 1);
          break;
        case 6:
          setAnswer6('');
          setQuestionState(questionState - 1);
          break;
        case 10:
          setAnswer10('');
          setQuestionState(questionState - 1);
          break;
        case 13:
          setAnswer13('');
          setQuestionState(questionState - 1);
          break;
        case 4:
          setQuestionStateBasedOnAnswer(answer2);
          break;
        case 7:
          setQuestionStateBasedOnAnswer(answer5);
          break;
        case 11:
          setQuestionStateBasedOnAnswer(answer9);
          break;
        case 14:
          setButtonState('Next');
          setQuestionStateBasedOnAnswer(answer12);
          break;
        default:
          if (questionState > 0) {
            setQuestionState(questionState - 1);
          }
      }
    }
    

    function toggleOverview(a : string, b: string): void {
      const content = document.getElementById(a) as HTMLElement;
      const arrow = document.getElementById(b) as HTMLButtonElement;
    
      if (content.style.display === 'none') {
        content.style.display = 'block';
        arrow.innerHTML = '&#x25BC;';
      } else {
        content.style.display = 'none';
        arrow.innerHTML = '&#x25B6;';
      }
    }
    

    const calculatePercentage = () => {
      const items = [resIntro,resOverview,marketBenefits,finalSection,failureSection,productFit,valueMisalignment,marketChallenges,marketingMethods];
      const nonEmptyItems = items.filter(item => item !== '');
      const percentage = (nonEmptyItems.length / items.length) * 100;
      return percentage;
    };

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
      if(answer9==='No' || answer12==='No'){
        setValueMisalignment('notapp')
      }
      if(answer2==='Yes'){
        setMarketChallenges('notapp')
      }
      if(resIntro && resOverview && finalSection && failureSection && marketBenefits && valueMisalignment && marketingMethods && marketChallenges) {
        setIsLoading(false);
      }
    }, [resIntro, resOverview,finalSection,failureSection,marketBenefits,marketChallenges,marketingMethods,productFit,valueMisalignment]);

    const [searchTerm, setSearchTerm] = useState('');
    
    const showReport = () => {
      setShowReportPage(true);
    }
    
    const handleSearch = (newSearchQuery: any) => {
      setSearchTerm(newSearchQuery);
    };
    

    return (
        <>
            <NavBar/>

        {!showReportPage && (
          
        <div className="chatscreen">

          <div className="chattext-container">
            <div style={{marginTop: 10,marginBottom: 20,fontSize: 35,fontWeight: 700,fontFamily: 'Montserrat,Sans-serif',display: 'flex'}}>
              <div style={{width: '70%'}}>  Let Me Help You Validate Your Business Idea Instantly!</div>
              <div style={{width: '50%'}}>
                <Lottie animationData={chatbothero}  loop={true}/>
              </div>
            </div>
            
            <div style={{fontSize: 20,fontWeight: 500,fontFamily: 'Montserrat,Sans-serif',marginBottom: 20,padding: 0,textAlign: 'left',display: 'flex'}}>
              Use PreLaunchPilot A.I. to see how your business can succeed, and what to watch out for!
            </div>
            <div style={{fontSize: 15,fontWeight: 500,fontFamily: 'Montserrat,Sans-serif',marginBottom: 5,padding: 5,textAlign: 'left'}}>            
              <BsArrowRightCircleFill size={13} color='#1a597a'/> Your Business Overview
            </div>
            <div style={{fontSize: 15,fontWeight: 500,fontFamily: 'Montserrat,Sans-serif',marginBottom: 5,padding: 5,textAlign: 'left'}}>
              <BsArrowRightCircleFill size={13} color='#1a597a'/> Custom Marketing Analysis
            </div>
            <div style={{fontSize: 15,fontWeight: 500,fontFamily: 'Montserrat,Sans-serif',marginBottom: 5,padding: 5,textAlign: 'left'}}>
              <BsArrowRightCircleFill size={13} color='#1a597a'/> Carefully devised Marketing Strategies
            </div>
            <div style={{fontSize: 15,fontWeight: 500,fontFamily: 'Montserrat,Sans-serif',marginBottom: 5,padding: 5,textAlign: 'left'}}>
              <BsArrowRightCircleFill size={13} color='#1a597a'/> Evaluation for Launch & Scale
            </div>

          </div>

          <div className="chatinput-maincontainer">

            <div className="chatinput-container">
              <div style={{fontSize: 18,fontWeight: 500,fontFamily: 'Montserrat,Sans-serif',padding: '4%',textAlign: 'justify'}}>{questionSet[questionState]}</div>
              {questionState===0 && ( 
              <>
                <p style={{fontSize: 13,fontWeight: 500,fontFamily: 'Montserrat,Sans-serif',marginLeft: '20%',marginBottom: 0,padding: 0,textAlign: 'left'}}>User name</p>
                <input
                  type="text"
                  value={userName}
                  onChange={(event) => setuserName(event.target.value)}
                  style={{
                    fontFamily: 'Montserrat,Sans-serif',
                    width: '60%',
                    border: '2px solid black',
                    borderRadius: '5px',
                    padding: '10px',
                  }}
                />
                <p  style={{fontSize: 13,fontWeight: 500,fontFamily: 'Montserrat,Sans-serif',marginLeft: '20%',marginBottom: 0,padding: 0,textAlign: 'left'}}>Email address</p>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(event) => setuserEmail(event.target.value)}
                  style={{
                    fontFamily: 'Montserrat,Sans-serif',
                    width: '60%',
                    border: '2px solid black',
                    borderRadius: '5px',
                    padding: '10px',
                  }}
                />
                <p  style={{fontSize: 13,fontWeight: 500,fontFamily: 'Montserrat,Sans-serif',marginLeft: '20%',marginBottom: 0,padding: 0,textAlign: 'left'}}>Company name</p>
                <input
                  type="text"
                  value={userCompany}
                  onChange={(event) => setuserCompany(event.target.value)}
                  style={{
                    fontFamily: 'Montserrat,Sans-serif',
                    width: '60%',
                    border: '2px solid black',
                    borderRadius: '5px',
                    padding: '10px',
                  }}
                />
                
              </>
              )}
              {answer2 === "Yes" && questionState === 3 && ( 
                <div style={{textAlign: 'left', marginLeft: '10%',marginBottom: 5}}>
                <input
                  type="text"
                  placeholder='Search Segment'
                  value={searchTerm}
                  style={{
                    fontFamily: 'Montserrat,Sans-serif',
                    width: '50%',
                    border: '2px solid black',
                    borderRadius: '5px',
                    padding: '8px',
                  }}
                  onChange={(event) => handleSearch(event.target.value)}
                />
                </div>
              )}
              {questionState===10 && ( <textarea
                value={answer10}
                onChange={(event) => setAnswer10(event.target.value)}
                className='chatinput'
                style={{    
                  border:  '4px solid #09536a',
                  height: '55%', 
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
                  height: '55%', 
                  width: '80%',
                  overflowY:  'scroll',
                }}
              />)}
              {questionState>0 && questionState!=10 && questionState!=13 &&
              <div className='chatinput' id="question-container" style={{    
                border: questionState !== 2 && questionState !==4 && questionState!==5 && questionState!==6 && questionState!==7 && questionState!==8 && questionState!==9 && questionState!==11 && questionState!==12 && questionState!==15 ? '4px solid #146c94' : '0px',
                height: questionState === 2 || questionState===4 || questionState===5 || questionState===6 || questionState===7 || questionState===8 || questionState===9 || questionState===11 || questionState===12 || questionState===15 ? '55%' : '60%', 
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
                        fontSize: answer1 === category ? 20 : 18,
                        fontWeight: answer1 === category ? 600 : 500,
                        backgroundColor: answer1 === category ? 'rgb(117, 178, 198)' : 'lightblue',
                        color: answer1 === category ? 'whitesmoke' : 'black'
                      }} 
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
                      fontSize: answer2 === category ? 20 : 18,
                      fontWeight: answer2 === category ? 600 : 500,
                      backgroundColor: answer2 === category ? 'rgb(117, 178, 198)' : 'lightblue',
                      color: answer2 === category ? 'white' : 'black'
                    }} 
                      
                    onClick={() => setAnswer2(category)}>
                        {category}
                    </li>
                  )}
                  {answer2 === "Yes" && questionState === 3 && (
                  <>
                    {services_list[answer1]
                      .filter((category) =>
                        category.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((category, index) => (
                        <li
                          key={index}
                          style={{
                            cursor: "pointer",
                            borderRadius: 5,
                            padding: "10px 10px",
                            textAlign: "left",
                            marginBottom: "5px",
                            fontSize: answer3 === category ? 20 : 18,
                            fontWeight: answer3 === category ? 600 : 500,
                            backgroundColor:
                              answer3 === category ? "rgb(117, 178, 198)" : "lightblue",
                            color: answer3 === category ? "white" : "black",
                          }}
                          onClick={() => setAnswer3(category)}
                        >
                          {category}
                        </li>
                      ))}
                  </>
                )}

                    {questionState===4 && (
                      services_list['productType'].map((category, index) =>
                      <li key={index}
                      style={{cursor: 'pointer',
                        borderRadius: 5,
                        padding: '10px 10px',
                        textAlign: 'left',
                        marginBottom: '5px',
                        fontSize: answer4 === category ? 20 : 18,
                        fontWeight: answer4 === category ? 600 : 500,
                        backgroundColor: answer4 === category ? 'rgb(117, 178, 198)' : 'lightblue',
                        color: answer4 === category ? 'white' : 'black'}} 
                        
                      onClick={() => setAnswer4(category)}>
                          {category}
                          <p style={{fontSize: 13,fontWeight: 150,marginTop: 5,marginBottom:5}}>{question3examples[index]}</p>
                      </li>
                    ))}
                    {questionState===5 && services_list['knowSegment'].map((category, index) =>
                      <li key={index} 
                      style={{cursor: 'pointer',
                        borderRadius: 5,
                        padding: '10px 10px',
                        textAlign: 'left',
                        marginBottom: '5px',
                        fontSize: answer5 === category ? 20 : 18,
                        fontWeight: answer5 === category ? 600 : 500,
                        backgroundColor: answer5 === category ? 'rgb(117, 178, 198)' : 'lightblue',
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
                        fontSize: answer6 === category ? 20 : 18,
                        fontWeight: answer6 === category ? 600 : 500,
                        backgroundColor: answer6 === category ? 'rgb(117, 178, 198)' : 'lightblue',
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
                        fontSize: answer7 === category ? 20 : 18,
                        fontWeight: answer7 === category ? 600 : 500,
                        backgroundColor: answer7 === category ? 'rgb(117, 178, 198)' : 'lightblue',
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
                        fontSize: answer8 === category ? 20 : 18,
                        fontWeight: answer8 === category ? 600 : 500,
                        backgroundColor: answer8 === category ? 'rgb(117, 178, 198)' : 'lightblue',
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
                        fontSize: answer9 === category ? 20 : 18,
                          fontWeight: answer9 === category ? 600 : 500,
                        backgroundColor: answer9 === category ? 'rgb(117, 178, 198)' : 'lightblue',
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
                        fontSize: answer11 === category ? 20 : 18,
                          fontWeight: answer11 === category ? 600 : 500,
                        backgroundColor: answer11 === category ? 'rgb(117, 178, 198)' : 'lightblue',
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
                        fontSize: answer12 === category ? 20 : 18,
                        fontWeight: answer12 === category ? 600 : 500,
                        backgroundColor: answer12 === category ? 'rgb(117, 178, 198)' : 'lightblue',
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
                          fontSize: answer14 === category ? 20 : 18,
                          fontWeight: answer14 === category ? 600 : 500,
                          backgroundColor: answer14 === category ? 'rgb(117, 178, 198)' : 'lightblue',
                          color: answer14 === category ? 'white' : 'black'}} 
                          
                        onClick={() => setAnswer14(category)}>
                          {category}
                        <p style={{fontSize: 13,marginTop: 4,fontWeight: 150}}>{question8b[index]}</p>
                        <p style={{fontSize: 13,marginTop: 0,marginBottom: 0,fontWeight: 150}}>{question8bExamples[index]}</p>
                      </li>
                    </>
                    )}

                </ul>
              </div>}
              <div
                style={{
                  marginTop: 10,
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  padding: '0 20',
                }}
                >
                {questionState>0 && 
                  <button type="button" className='chatinputbtn' onClick={backClick}>Back</button>
                }
                {questionState<14 &&                       
                <button type="button" className='chatinputbtn'  onClick={nextClick} 
                // disabled={!selectedItem}
                >Next</button>
                }
                {questionState==14 &&                     
                <button type="button" className='chatinputbtn' onClick={showReport} 
                // disabled={!selectedItem}
                >Generate Report</button>
                } 
              </div>
                    
            </div>
              
          </div>
          
        </div>
        
        )}

        {showReportPage && (
        isLoading ? (
          // Render the loading icon if report not generated yet
          <div style={{textAlign: 'center',justifyContent: 'center',alignContent: 'center',width: '100%',height: 600,marginTop: 60}}>
            <div style={{marginTop: '10px',height: 150,display: 'flex',textAlign: 'center',justifyContent: 'center',alignContent: 'center',marginBottom: 0,padding: 0}}>
                <Lottie animationData={animationData4}  loop={true}/>
              </div>
              <div className='ReportLoadingMaincontainer'>
                {resOverview==='' ? (
                  <div className='ReportLoadingcontainer'>
                    <div style={{width: '40%',paddingLeft: 0,marginLeft: 0,textAlign: 'left'}}>
                      Business Overview 
                    </div>
                    <div style={{width: '20%'}}>
                      <Lottie animationData={animationData}  loop={true}/>
                    </div>
                  </div>
                ) : (
                  <div className='ReportLoadingcontainer'>
                    <div style={{width: '40%',paddingLeft: 0,marginLeft: 0,textAlign: 'left'}}>
                      Business Overview 
                    </div>
                    <div style={{width: '20%'}}>
                      <IoMdDoneAll size={33} color='#62bae3' style={{marginLeft: 50}}/>
                    </div>
                  </div>
                )}

                {marketBenefits ==='' ? (
                  <div className='ReportLoadingcontainer'>
                    <div style={{width: '40%',paddingLeft: 0,marginLeft: 0,textAlign: 'left'}}>
                      Marketing Analysis 
                    </div>
                    <div style={{width: '20%'}}>
                      <Lottie animationData={animationData}  loop={true}/>
                    </div>
                  </div>
                ) : (
                  <div className='ReportLoadingcontainer'>
                    <div style={{width: '40%',paddingLeft: 0,marginLeft: 0,textAlign: 'left'}}>
                      Marketing Analysis 
                    </div>
                    <div style={{width: '20%'}}>
                      <IoMdDoneAll size={33} color='#62bae3'/>
                    </div>
                  </div>
                )}

                {marketingMethods==='' ? (
                  <div className='ReportLoadingcontainer'>
                    <div style={{width: '40%',paddingLeft: 0,marginLeft: 0,textAlign: 'left'}}>
                      Marketing Strategy
                    </div>
                    <div style={{width: '20%'}}>
                      <Lottie animationData={animationData}  loop={true}/>
                    </div>
                  </div>
                ) : (
                  <div className='ReportLoadingcontainer'>
                    <div style={{width: '40%',paddingLeft: 0,marginLeft: 0,textAlign: 'left'}}>
                      Marketing Strategy
                    </div>
                    <div style={{width: '20%'}}>
                      <IoMdDoneAll size={33} color='#62bae3'/>
                    </div>
                  </div>
                )}

                {valueMisalignment==='' ? (
                  <div className='ReportLoadingcontainer'>
                    <div style={{width: '40%',paddingLeft: 0,marginLeft: 0,textAlign: 'left'}}>
                      Value Misalignment
                    </div>
                    <div style={{width: '20%'}}>
                      <Lottie animationData={animationData}  loop={true}/>
                    </div>
                  </div>
                ) : (
                  <div className='ReportLoadingcontainer'>
                    <div style={{width: '40%',paddingLeft: 0,marginLeft: 0,textAlign: 'left'}}>
                      Value Misalignment
                    </div>
                    <div style={{width: '20%'}}>
                      <IoMdDoneAll size={33} color='#62bae3'/>
                    </div>                 
                  </div>
                )}

                {productFit==='' ? (
                  <div className='ReportLoadingcontainer'>
                    <div style={{width: '40%',paddingLeft: 0,marginLeft: 0,textAlign: 'left'}}>
                      Launch & Scale Report
                    </div>
                    <div style={{width: '20%'}}>
                      <Lottie animationData={animationData}  loop={true}/>
                    </div>
                  </div>
                ) : (
                  <div className='ReportLoadingcontainer'>
                    <div style={{width: '40%',paddingLeft: 0,marginLeft: 0,textAlign: 'left'}}>
                    Launch & Scale Report
                    </div>                  
                    <div style={{width: '20%'}}>
                      <IoMdDoneAll size={33} color='#62bae3'/>
                    </div>                  
                  </div>
                )}
              </div>
              
              <div style={{marginRight: '20%',marginLeft: '20%',marginBottom: '50px',display: 'flex'}}>
                <div style={{width: '80%',marginTop: 15}}>
                  <ProgressBar percentage={calculatePercentage()} />
                </div>
                <div className='l333' style={{width: '20%'}}>
                  {calculatePercentage().toFixed(0)}%
                </div>
                
              </div>
              
          </div>
        ) : (
        <div style={{marginTop: 60}}>
          <button type="button" className='btn' style={{right: 10,top: 80,position: 'absolute',padding: 20}} onClick={generatePDF}>Download PDF</button>
          <div id="sidebar" className="sidebar" style={{width: '25%'}}>
            <a href="#business-overview" style={{textDecoration: 'none',color: '#555',}}>
              <h2>Business Overview</h2></a>
            <a href="#O-overview" style={{textDecoration: 'none',color: '#555',}}>
              <h3>Overview</h3></a>
            <a href="#MA-overview" style={{textDecoration: 'none',color: '#555',}}>
              <h2>Marketing Analysis</h2></a>
            <a href="#MB-overview" style={{textDecoration: 'none',color: '#555',}}>
              <h3>Marketing Benefits</h3>   </a>
            <a href="#MC-overview" style={{textDecoration: 'none',color: '#555',}}>
              <h3>Marketing Challenges</h3></a>
            <a href="#MS-overview" style={{textDecoration: 'none',color: '#555',}}>
              <h2>Marketing Strategies</h2></a>
            <a href="#MM-overview" style={{textDecoration: 'none',color: '#555',}}>
              <h3>Marketing Methods</h3></a>
            <a href="#PF-overview" style={{textDecoration: 'none',color: '#555',}}>
              <h3>Product Fit</h3></a>
            <a href="#EC-overview" style={{textDecoration: 'none',color: '#555',}}>
              <h2>Evaluation & Conclusion</h2></a>
            <a href="#VM-overview" style={{textDecoration: 'none',color: '#555',}}>
              <h3>Value Misalignment</h3> </a>
            <a href="#Fail-overview" style={{textDecoration: 'none',color: '#555',}}>
              <h3>Failure Section</h3> </a>
            <a href="#Final-overview" style={{textDecoration: 'none',color: '#555',}}>
              <h3>Final Section</h3> </a>
          </div>
          <div style={{marginLeft: '20%',width: 'auto',marginRight: '15%'}}>
            <div className= 'reportGenerated' style={{marginLeft: '10%', marginRight: '10%', overflow: 'auto',whiteSpace: 'pre-wrap' }}>
            
              <h1 id='business-overview' style={{fontSize: 32,fontWeight: 600,fontFamily: 'sans-serif',background: 'linear-gradient(to right, whitesmoke, white',color: '#555',lineHeight: 1.5,letterSpacing: 1.5,width: '70%'}}>
                Business Overview
              </h1>

              <div className='reportBodyText'>
                {resIntro}
              </div>

              <h2 id='O-overview' className='reportHeader'>
                Overview
                <button id="toggleOverview" type="button"  style={{marginLeft: 10,padding: 0,background: 'white',borderWidth: 0}} onClick={() => toggleOverview('overviewContent','toggleOverview')}>&#x25BC;</button>
              </h2> 
              <div id="overviewContent" className='reportBodyText'>
                {resOverview}
              </div>

              <div className="newPage">
                <h1 id='MA-overview' style={{fontSize: 32,fontWeight: 600,fontFamily: 'sans-serif',background: 'linear-gradient(to right, whitesmoke, white',color: '#555',lineHeight: 1.5,letterSpacing: 1.5,width: '70%'}}>Marketing Analysis</h1>

                <h2 id='MB-overview' className='reportHeader'>
                  Market Benefits
                  <button id="toggleMB" type="button" style={{marginLeft: 10,padding: 0,background: 'white',borderWidth: 0}} onClick={() => toggleOverview('MBContent','toggleMB')}>&#x25BC;</button>
                </h2> 
                <div id ='MBContent' className='reportBodyText'>
                  {marketBenefits}
                </div>
                {marketChallenges!=='notapp' && (
                  <>
                    <h2 id='MC-overview' className='reportHeader'>
                      Marketing Challenges
                      <button id="toggleMC" type="button" style={{marginLeft: 10,padding: 0,background: 'white',borderWidth: 0}} onClick={() => toggleOverview('MCContent','toggleMC')}>&#x25BC;</button>
                    </h2> 
                    <div id='MCContent' className='reportBodyText'>
                        {marketChallenges}
                    </div>
                  </>
                )}
              </div>

              <div className="newPage">
                <h1 id='MS-overview' style={{fontSize: 32,fontWeight: 600,fontFamily: 'sans-serif',background: 'linear-gradient(to right, whitesmoke, white',color: '#555',lineHeight: 1.5,letterSpacing: 1.5,width: '70%'}}>Marketing Strategies</h1>

                <h2 id='MM-overview' className='reportHeader'>
                  Marketing Methods
                  <button id="toggleMM" type="button" style={{marginLeft: 10,padding: 0,background: 'white',borderWidth: 0}} onClick={() => toggleOverview('MMContent','toggleMM')}>&#x25BC;</button>
                </h2> 
                <div id='MMContent' className='reportBodyText'>
                    {marketingMethods}
                </div>
                
                <h2 id='PF-overview' className='reportHeader'>
                  Product Fit
                  <button id="togglePF" type="button" style={{marginLeft: 10,padding: 0,background: 'white',borderWidth: 0}} onClick={() => toggleOverview('PFContent','togglePF')}>&#x25BC;</button>
                </h2> 
                <div id='PFContent' className='reportBodyText'>
                    {productFit}
                </div>
              </div>

              <div className="newPage">
                <h1 id='EC-overview' style={{fontSize: 32,fontWeight: 600,fontFamily: 'sans-serif',background: 'linear-gradient(to right, whitesmoke, white',color: '#555',lineHeight: 1.5,letterSpacing: 1.5,width: '70%'}}>Evaluation & Conclusion</h1>

                {valueMisalignment!='notapp' && (
                  <>
                    <h2 id='VM-overview' className='reportHeader'>
                      Value Misalignment
                      <button id="toggleVM" type="button" style={{marginLeft: 10,padding: 0,background: 'white',borderWidth: 0}} onClick={() => toggleOverview('VMContent','toggleVM')}>&#x25BC;</button>
                    </h2> 
                    <div id='VMContent' className='reportBodyText'>
                        {valueMisalignment}
                    </div>
                  </>
                  )}
                <h2 id='Fail-overview' className='reportHeader'>
                  Failure Section
                  <button id="toggleFail" type="button" style={{marginLeft: 10,padding: 0,background: 'white',borderWidth: 0}} onClick={() => toggleOverview('FailContent','toggleFail')}>&#x25BC;</button>
                </h2> 

                <div id='FailContent' className='reportBodyText'>
                    {failureSection}
                </div>
              </div>

              <div className="newPage">
                <h2 id='Final-overview' className='reportHeader'>
                  Final Section
                  <button id="toggleFinal" type="button" style={{marginLeft: 10,padding: 0,background: 'white',borderWidth: 0}} onClick={() => toggleOverview('FinalContent','toggleFinal')}>&#x25BC;</button>
                </h2> 
                <div id='FinalContent' className='reportBodyText'>
                    {finalSection}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        ))}

      </>    
      )
}