import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { HiXMark } from 'react-icons/all';
import Typed from 'typed.js';
import Lottie from 'lottie-react';
import animationData1 from '../assets/lottie/analysis2.json';
import animationData2 from '../assets/lottie/grafico2.json';
import animationData3 from '../assets/lottie/analysis.json';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination,Navigation,Autoplay} from 'swiper';
import NavBar from '../components/NavBar';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import slide_image1 from '../assets/slideImages/abc-gold-media-Custom.png'
import slide_image2 from '../assets/slideImages/cbs-logo-png-Custom.png'
import slide_image3 from '../assets/slideImages/cdnlogo.com_nbc-Custom.png'
import slide_image4 from '../assets/slideImages/cnn-png-Custom.png'
import slide_image5 from '../assets/slideImages/forbes-logo-png_-Custom.png'
import slide_image6 from '../assets/slideImages/fox-logo-png-Custom.png'
import slide_image7 from '../assets/slideImages/medtronic-logo-png-Custom.png'
import slide_image8 from '../assets/slideImages/mit-Custom.png'
import slide_image9 from '../assets/slideImages/msn-logo-Custom.png'


export default function Home(){

    function TypingEffect() {
        useEffect(() => {
          const typed = new Typed('.l3', {
            strings: ["Launch Your Product or Service", "Build Your Business Strategy"],
            typeSpeed: 80,
            backSpeed: 100,
            loop: true,
            showCursor: false,
          });
      
          return () => {
            typed.destroy();
          };
        }, []);
      
        return (
          <div className='l3'></div>
        );
      }

    const [animationData, setAnimationData] = useState(animationData1);

    const [webKitState1,setwebKitState1]=useState('Fast Analysis & Diagnosis')
    const [webKitState1Time,setwebKitState1Time]=useState(' ( 15 mins )')
    const [webKitState2,setwebKitState2]=useState('In Step 1, You will answer basic questions about your industry, business idea, and how much progress you have made with your current plans. Enter your profit and sales goals and the time frame you hope to achieve your goals.')
    const [webKitState3,setwebKitState3]=useState('You conclude Step 1 with a preliminary diagnosis report that gives customized critical advice and feedback along with a conditional success probability score based on your answers measured against data points from thousands of similar businesses in your selected industry.')
    const [webKitState4,setwebKitState4]=useState('Start My Fast Analysis Now')

    function handleClick1(){
        setwebKitState2('In Step 1, You will answer basic questions about your industry, business idea, and how much progress you have made with your current plans. Enter your profit and sales goals and the time frame you hope to achieve your goals.')
        setAnimationData(animationData1)
        setwebKitState1('Fast Analysis & Diagnosis')
        setwebKitState1Time(' ( 15 mins )')
        setwebKitState3('You conclude Step 1 with a preliminary diagnosis report that gives customized critical advice and feedback along with a conditional success probability score based on your answers measured against data points from thousands of similar businesses in your selected industry.')
        setwebKitState4('Start My Fast Analysis Now')
    }

    function handleClick2(){
        setwebKitState2('In Step 2, You will engage in a simulated business launch to diagnose your current plans performance by applying hundreds of real world scenarios to help determine how well you differentiate your offer and capture value. The simulation will also find and conduct proof of concept testing using real people to give unbiased feedback, and surface potential new market segments to help strengthen your go to market plans under current market conditions.')
        setAnimationData(animationData2)
        setwebKitState1('Performance Simulation')
        setwebKitState1Time(' ( 2 hours )')
        setwebKitState3('')
        setwebKitState4('Start My Performance Simulation')
    }

    function handleClick3(){
        setwebKitState1('Report')
        setAnimationData(animationData3)
        setwebKitState1Time('')
        setwebKitState2('In Step 3, We will provide you with a case study report that details the results of your simulated launch measured against the most common industry-specific reasons for business failures. Your report will also include a grade based on your performance and advice on how to improve your new business performance results. ')
        setwebKitState3('')
        setwebKitState4('Start My Simulation')

    }

    return (
        <>
            <NavBar/>

            <img src="/src/assets/images/pilothero1.png" style= {{width: '65%',right: 0,position: 'absolute'}}/>
            <div 
                style={{
                backgroundImage: 'linear-gradient(to right, rgb(136 253 246 / 57%), rgb(85 184 229 / 42%))',
                backgroundSize: 'cover', 
                height: '600px',
                width: 'auto',
                display: 'flex',
                paddingLeft: '12%',
                position: 'relative',
                }}>
                
                <div className='container1'>
                    <div className='l1 '>Save Thousands of Hours in Time and Research</div>
                    <div className='l2'>Let Predictive AI Help</div>
                    <TypingEffect/>
                    <div style={{marginTop: 20}}>
                    <Link to="/bot" className='l4' style={{marginTop: 20}}>
                        Enter Your Business Goal
                    </Link>
                    </div>                    
                </div>
                <div className='svgelement-container' style={{ position: 'absolute', bottom: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" opacity="0.33" fill="#fff" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                        <path className="elementor-shape-fill" opacity="0.66" fill="#fff" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                        <path className="elementor-shape-fill" fill="#fff" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                    </svg>               
                </div>
            </div>
            <div style={{marginTop: 100,width: '100%', backgroundColor: 'white',paddingLeft: '10%',paddingRight: '10%'}}>
                <Swiper
                    effect={'fade'}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false
                      }}
                    centeredSlides={true}
                    slidesPerView={4}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide >
                        <img src={slide_image1} style={{filter: "grayscale(100%)"}} ></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image2} style={{filter: "grayscale(100%)"}}></img>
                    </SwiperSlide><SwiperSlide>
                        <img src={slide_image3} style={{filter: "grayscale(100%)"}}></img>
                    </SwiperSlide><SwiperSlide>
                        <img src={slide_image4} style={{filter: "grayscale(100%)"}}></img>
                    </SwiperSlide><SwiperSlide>
                        <img src={slide_image5} style={{filter: "grayscale(100%)"}}></img>
                    </SwiperSlide><SwiperSlide>
                        <img src={slide_image6} style={{filter: "grayscale(100%)"}}></img>
                    </SwiperSlide><SwiperSlide>
                        <img src={slide_image7} style={{filter: "grayscale(100%)"}}></img>
                    </SwiperSlide><SwiperSlide>
                        <img src={slide_image8} style={{filter: "grayscale(100%)"}}></img>
                    </SwiperSlide><SwiperSlide>
                        <img src={slide_image9} style={{filter: "grayscale(100%)"}}></img>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div 
                style={{
                display: 'flex',
                padding: '100px 0px 100px 0px',
                position: 'relative',
                }}>
                <div style={{padding: '10px',
                    display: 'flex',
                    position: 'relative',
                    width: '100%',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    }}>
                    <img width='75%' height='auto' style={{verticalAlign: 'middle', display: 'inline-block', alignSelf: 'center'}} src="/src/assets/images/pilothero2.png"/>
                </div>
                <div className='textContainer'>
                    <div className='l12'>
                        What We Do
                    </div>
                    <p className='l11'>
                        Prelaunch Pilot uses predictive artificial intelligence to simulate new product or service launches using real-world scenarios to help find and identify new potential customers and untapped market segments. With Prelaunch Pilot, companies can use data to help quickly prove their concepts, test their assumptions, and confirm a market fit before they spend too much time and resources on low-performing business ideas.
                    </p>
                </div>
            </div>

            <div className='container2'>

                <div className='midTextContainer'>
                    <h2 className='midText'> How It Works </h2>
                </div>

                <div className='mainkitcontainer'>
                    <div className='webKitContainer'>
                        <div style={{display: 'flex'}}>
                            <div className='webKitOptions'>
                                <ul className='stepsUL'>
                                    <button className={`stepbtn ${webKitState1 === 'Fast Analysis & Diagnosis' ? 'selected' : ''}`} onClick={() => handleClick1()}>
                                        <span>Step 1</span>
                                    </button>
                                    <button className={`stepbtn ${webKitState1 === 'Performance Simulation' ? 'selected' : ''}`} onClick={() => handleClick2()}>
                                        <span>Step 2</span>
                                    </button>
                                    <button className={`stepbtn ${webKitState1 === 'Report' ? 'selected' : ''}`} onClick={() => handleClick3()}>
                                        <span>Step 3</span>
                                    </button>
                                </ul>
                            </div>
                            <div className='webKitOptionTextContainer'>
                                <div style={{width: 150}}>
                                    <Lottie animationData={animationData}  loop={true} />
                                </div>
                                <div>
                                    <div style={{fontFamily: 'Montserrat,Sans-serif',fontSize: 36, color: '#146c94', fontWeight: 600, marginTop: 30}}>
                                        {webKitState1}
                                    </div>
                                    <div  style={{fontFamily: 'Questrial,sans-serif',fontSize: 16, color: '#146c94', fontWeight: 500}}>
                                        {webKitState1Time}
                                    </div>
                                </div>
                                <p style={{fontFamily: 'Questrial,sans-serif',fontSize: 20, color: 'black',textAlign: 'justify'}}>
                                    {webKitState2}
                                </p>
                                <p style={{fontFamily: 'Questrial,sans-serif',fontSize: 20, color: 'black',fontWeight: 600,fontStyle: 'italic', textAlign: 'justify'}}>
                                    {webKitState3}
                                </p>
                                <button className='l4' type='button'>{webKitState4}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='maincontainerSecrets'>

                <div className='svgelement-container2' style={{ position: 'absolute', top: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" opacity="1" fill="#fff" 
                            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
                            c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
                            c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z">
                        </path>
                    </svg>       
                </div>
                <div className='containerSecretsTextAndImage'>
                    <div className='secretTextMainContainer'>
                        <div className='secretHeading'>
                            <h1>
                                No Need To Give Up Your Secret Sauce
                            </h1>
                        </div>
                        <div className='secretText'>
                            <ul style={{padding: 0,margin: 0}}>
                                <div style={{display: 'flex', paddingBottom: 15}}>
                                    <div style={{width: '20%'}}>
                                        <HiXMark color="#146c94" size={40} style={{marginTop: 10,marginRight: 10}} />
                                    </div>
                                    <li style={{listStyle: 'none',width: '100%'}}>
                                        <span style={{color: '#555'}}>We never ask for any of your proprietary information or trade secrets.</span>
                                    </li>
                                </div>
                                <div style={{display: 'flex', paddingBottom: 15}}>
                                     <div style={{width: '20%'}}>
                                        <HiXMark color="#146c94" size={40} style={{marginTop: 10,marginRight: 10}} />
                                    </div>
                                    <li style={{listStyle: 'none',width: '100%'}}>
                                        <span style={{color: '#555'}}>We never share your results or your information. You own your data.</span>
                                    </li>
                                </div>
                                <div style={{display: 'flex', paddingBottom: 15}}>
                                    <div style={{width: '20%'}}>
                                        <HiXMark color="#146c94" size={40} style={{marginTop: 10,marginRight: 10}} />
                                    </div>                                    
                                    <li style={{listStyle: 'none',width: '100%'}}>
                                        <span style={{color: '#555'}}>We never give up on your goals! You can pause - leave to tweak your plans - and log back into your simulation anytime later!</span>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div style={{padding: '10px',
                        display: 'flex',
                        position: 'relative',
                        width: '100%',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <img width='75%' height='auto' style={{verticalAlign: 'middle', display: 'inline-block', alignSelf: 'center'}} src="/src/assets/images/securitylogo.png"></img>
                    </div>
                </div>
                <div className='svgelement-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" opacity="1" fill="#fff" 
                            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                            c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                            c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z">
                        </path>
                    </svg>       
                </div>
            </div>

            <div className='maincontainerPricingPlan'>
                <div className='midTextContainer'>
                    <h2 className='midText'> Our Pricing Plans </h2>
                </div>
                <div className='containerPricingPlans'>
                     <p style={{position: 'absolute', backgroundColor: '#19A7CE', color: 'white', paddingTop: 15,paddingBottom: 15,paddingLeft: 25,paddingRight: 25, borderRadius: 4,top: -40,marginLeft: '7%'}}>
                        <span style={{textAlign: 'center', fontFamily: 'Questrial, sans-serif', fontWeight: 500,fontSize: 15}}>
                            Great Starting Point
                        </span>
                    </p>
                    <div className='plancontainer'>
                        
                        <h1 style={{textAlign: 'center',fontSize: '1.5rem',fontFamily: 'Questrial, sans-serif',fontWeight: 800,}}>
                            Assessment Lite
                        </h1>
                        <h2 style={{textAlign: 'center',fontFamily: 'Questrial, sans-serif',}}>
                            <span >$</span>
                            <span style={{fontSize: 100,fontWeight: 600}}>0</span>
                        </h2>
                        <div style={{textAlign: 'center',fontSize: '1.5rem',fontFamily: 'Questrial, sans-serif',fontWeight: 500,}}>
                            Average finish time: 10 minutes
                        </div>
                        <div style={{textAlign: 'center',fontFamily: 'Questrial, sans-serif',fontWeight: 400,marginTop: 60}}>
                            valid for one week
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                            <button className='l4' type='button' style={{fontSize: 14,padding: 30,paddingTop: 15,paddingBottom:15}}>Start My Simulation Now</button>
                        </div>
                        <div>
                            <p style={{fontFamily: 'Questrial, sans-serif',marginTop: 60,fontSize: 20,fontWeight: 600,}}>Lite:</p>
                            <ul className='ulforpricingtext'>
                                
                                <li>
                                   Go To Market Simulation
                                </li>
                                <li>
                                    3 Pages of High Level Results, Advice, and Market Data
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className='plancontainer'>
                        <h1 style={{textAlign: 'center',fontSize: '1.5rem',fontFamily: 'Questrial, sans-serif',fontWeight: 800,}}>
                            Basic Simulation
                        </h1>
                        <h2 style={{textAlign: 'center',fontFamily: 'Questrial, sans-serif',}}>
                            <span >$</span>
                            <span style={{fontSize: 100,fontWeight: 600}}>0</span>
                        </h2>
                        <div style={{textAlign: 'center',fontSize: '1.5rem',fontFamily: 'Questrial, sans-serif',fontWeight: 500,}}>
                            Average finish time: 30 minutes
                        </div>
                        <div style={{textAlign: 'center',fontFamily: 'Questrial, sans-serif',fontWeight: 400,marginTop: 60}}>
                            valid for one week
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                            <button className='l4' type='button'  style={{fontSize: 14,padding: 30,paddingTop: 15,paddingBottom:15}}>Start My Simulation Now</button>
                        </div>
                        <div>
                        <p style={{fontFamily: 'Questrial, sans-serif',marginTop: 60,fontSize: 20,fontWeight: 600,}}>Phase 1:</p>
                            <ul className='ulforpricingtext'>
                                <li>
                                    Basic Go To Market Simulation
                                </li>
                                <li>
                                    6 Pages of Deep Dive Results, Advice, and Market Data
                                </li>
                                <li>
                                    1 Day Proof of Concept Test
                                </li>
                                <li>
                                    60 Person Feedback Capture
                                </li>
                                <li>
                                    Basic Customer Acquisition Cost Analysis
                                </li>
                                <li>
                                    Basic Features Improvement Analysis
                                </li>
                                <li>
                                    15 minutes of Expert Business Consultation By Phone
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className='plancontainer'>
                        <h1 style={{textAlign: 'center',fontSize: '1.5rem',fontFamily: 'Questrial, sans-serif',fontWeight: 800,}}>
                            Full Simulation
                        </h1>
                        <h2 style={{textAlign: 'center',fontFamily: 'Questrial, sans-serif',}}>
                            <span >$</span>
                            <span style={{fontSize: 100,fontWeight: 600}}>0</span>
                        </h2>
                        <div style={{textAlign: 'center',fontSize: '1.5rem',fontFamily: 'Questrial, sans-serif',fontWeight: 500,}}>
                            Average finish time: 30 minutes
                        </div>
                        <div style={{textAlign: 'center',fontFamily: 'Questrial, sans-serif',fontWeight: 400,marginTop: 60}}>
                            valid for one week
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                            <button className='l4' type='button'  style={{fontSize: 14,padding: 30,paddingTop: 15,paddingBottom:15}}>Start My Simulation Now</button>
                        </div>
                        <div>
                            <p style={{fontFamily: 'Questrial, sans-serif',marginTop: 60,fontSize: 20,fontWeight: 600,}}>Phase 1:</p>

                            <ul className='ulforpricingtext'>
                                <li>
                                    Full Go To Market Simulation
                                </li>
                                <li>
                                    6 Pages of Deep Dive Results, Advice, and Market Data
                                </li>

                            </ul>
                            <p style={{fontFamily: 'Questrial, sans-serif',fontSize: 20,fontWeight: 600,}}>Phase 2:</p>
                            <ul className='ulforpricingtext'>
                                <li>
                                    1 Week Proof of Concept Test
                                </li>
                                <li>
                                    120 Person Feedback Capture
                                </li>
                                <li>
                                    In Depth Customer Acquisition Cost Analysis
                                </li>
                                <li>
                                    In Depth Features Improvement Analysis
                                </li>
                                <li>
                                    4 Hours of Expert Business Consultation By Phone
                                </li>

                            </ul>
                            <p style={{fontFamily: 'Questrial, sans-serif',fontSize: 20,fontWeight: 600,}}>Phase 3:</p>
                            <ul className='ulforpricingtext'>
                                <li>
                                    Profit and Loss Projections
                                </li>
                                <li>
                                    5 Year Estimated Income Statement
                                </li>
                                <li>
                                    Full Encompassing Case Study - Lessons Learned & Insights
                                </li>
                                <li>
                                    Porter's Five Forces Model - Specific to Your Industry
                                </li>
                                <li>
                                    Advise on How To Raise Capital
                                </li>
                                <li>
                                    Cost of Good Sold and Cost Control Analysis
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}