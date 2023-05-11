import React from 'react';
import {useState} from 'react';

export default function TryFree(){
  

    const questionSet = [
        'Q1. Which industry does or will your business operate in?',
        'Q2. Do you know which segment of the <Answer Q1>  industry your business does or will operate in?',
        'Q2 (a). Enter your segment here'
      ];


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

    const set2=[
        ['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o']
    ]

    const form = document.getElementById('my-form') as HTMLFormElement;
    const questionContainer = document.getElementById('question-container') as HTMLDivElement;

   

    const [questionState, setQuestionState] = useState(0)
    const [answer1,setAnswer1]=useState('')
    const [answer2,setAnswer2]=useState('')
    const [answer3,setAnswer3]=useState('')

    function nextClick() {
        if(questionState<2){
            setQuestionState(questionState+1)
        }
    }
    const handleItemClick = (item: string) => {
        setAnswer1(item);
      }

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
                <div style={{marginBottom: 30,fontSize: 22,fontWeight: 600,fontFamily: 'Montserrat,Sans-serif',padding: '8%'}}>{questionSet[questionState]}</div>
                    <div className='chatinput' id="question-container" style={{height: '200px', overflowY: 'scroll'}}>
                        {set1 && set1.map((category, index) =>
                        <div key={index} onClick={() => handleItemClick(category)}>
                            {category}
                        </div>
                        )}
                    </div>
                    selected item: {answer1}

                    <button type="button" className='chatinputbtn' onClick={nextClick}>Next</button>
                {/* <textarea className="chatinput" placeholder="Example: Airbnb is an online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in specific locales. Airbnb offers people an easy, relatively stress-free way to earn some income from their property." />
                <div>
                    <button type="button" className='chatinputbtn' onClick={fetchRes}>Next</button>
                </div> */}
            </div>
          </div>
        </div>
      </>    
      )
}