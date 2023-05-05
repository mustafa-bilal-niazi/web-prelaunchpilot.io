import yourImage1 from '../assets/images/pilothero1.png';
import yourImage2 from '../assets/images/pilothero2.png';
import React from 'react';
import { useState } from 'react';

export default function Home(){

const [webKitState,setwebKitState]=useState('step1')
const [webKitState1,setwebKitState1]=useState('Fast Analysis & Diagnosis ( 15 mins )')
const [webKitState2,setwebKitState2]=useState('In Step 1, You will answer basic questions about your industry, business idea, and how much progress you have made with your current plans. Enter your profit and sales goals and the time frame you hope to achieve your goals.')
const [webKitState3,setwebKitState3]=useState('You conclude Step 1 with a preliminary diagnosis report that gives customized critical advice and feedback along with a conditional success probability score based on your answers measured against data points from thousands of similar businesses in your selected industry.')
const [webKitState4,setwebKitState4]=useState('Start My Fast Analysis Now')

function handleClick1(){
    setwebKitState2('In Step 1, You will answer basic questions about your industry, business idea, and how much progress you have made with your current plans. Enter your profit and sales goals and the time frame you hope to achieve your goals.')
    setwebKitState1('Fast Analysis & Diagnosis ( 15 mins )')
    setwebKitState3('You conclude Step 1 with a preliminary diagnosis report that gives customized critical advice and feedback along with a conditional success probability score based on your answers measured against data points from thousands of similar businesses in your selected industry.')
    setwebKitState4('Start My Fast Analysis Now')
}

function handleClick2(){
    setwebKitState2('In Step 2, You will engage in a simulated business launch to diagnose your current plans performance by applying hundreds of real world scenarios to help determine how well you differentiate your offer and capture value. The simulation will also find and conduct proof of concept testing using real people to give unbiased feedback, and surface potential new market segments to help strengthen your go to market plans under current market conditions.')
    setwebKitState1('Performance Simulation ( 2 hours )')
    setwebKitState3('')
    setwebKitState4('Start My Performance Simulation')

}
function handleClick3(){
    setwebKitState1('Report')
    setwebKitState2('In Step 3, We will provide you with a case study report that details the results of your simulated launch measured against the most common industry-specific reasons for business failures. Your report will also include a grade based on your performance and advice on how to improve your new business performance results. ')
    setwebKitState3('')
    setwebKitState4('Start My Simulation')

}

    return (
        <>
            <div style={{
                backgroundImage: `linear-gradient(to right, #89dbff91, rgb(72 173 187 / 31%)),  url(${yourImage1})`,
                backgroundSize: 'cover',
                height: '700px',
                width: '100%',
                display: 'flex',
                paddingLeft: '10%',
            }}>
                <div className='container1'>
                    <div className='l1 '>Save thousands of hours in time and research</div>
                    <div className='l2'>Let Predictive AI Help</div>
                    <div className='l3'>Build Your Business Strategy </div>
                    <button className='l4' type='button'>Find your business goal</button>
                </div>
            </div>

            <div style={{
                display: 'flex',
                padding: '100px 0px 100px 0px',
                position: 'relative',
            }}>
                <div style={{padding: '10px',
                    display: 'flex',
                    position: 'relative',
                    width: '100%',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',
                }}>
                    <img max-width='100%' height='auto' style={{verticalAlign: 'middle', display: 'inline-block'}} src={yourImage2}/>
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
                                <button onClick={() => handleClick1()}>
                                    <span>Step 1</span>
                                </button>
                                <button onClick={() => handleClick2()}>
                                    <span>Step 2</span>
                                </button>
                                <button onClick={() => handleClick3()}>
                                    <span>Step 3</span>
                                </button>
                            </div>
                            <div className='webKitOptionsTextContainer'>
                                <div>
                                </div>
                                <h2>
                                    {webKitState1}
                                </h2>
                                <p>
                                    {webKitState2}
                                </p>
                                <p>
                                    {webKitState3}
                                </p>
                                <button>
                                    {webKitState4}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div style={{padding: '10px',
                    display: 'flex',
                    position: 'relative',
                    width: '100%',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',
                }}>
                    <img max-width='100%' height='auto' style={{verticalAlign: 'middle', display: 'inline-block'}} src={yourImage2}/>
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
            <div style={{
                display: 'flex',
                padding: '100px 0px 100px 0px',
                position: 'relative',
            }}>
                <div style={{padding: '10px',
                    display: 'flex',
                    position: 'relative',
                    width: '100%',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',
                }}>
                    <img max-width='100%' height='auto' style={{verticalAlign: 'middle', display: 'inline-block'}} src={yourImage2}/>
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

        </>
    )
}