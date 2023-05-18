import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/botnavheart.json';
function BottomNav() {
  return (
    <>
        <div className='botNavMainContainer'>
            <div style={{ padding: 10, display: 'flex', width: '33.333%', alignContent: 'flex-start', flexWrap: 'wrap' }}>
                <img src="/src/assets/images/logo_bottomnav_transparent_background.png" style={{ width: '70%' }} alt="logo" />
            </div>

            <div style={{ padding: 10, display: 'flex', width: '33.333%', alignContent: 'flex-start', flexWrap: 'wrap' }}>
                <ul className='bottomNavul'>
                <li>
                    <Link to='/' style={{ color: '#555', textDecoration: 'none' }}>Features</Link>
                </li>
                <li>
                    <Link to='/' style={{ color: '#555', textDecoration: 'none' }}>Pricing</Link>
                </li>
                <li>
                    <Link to='/' style={{ color: '#555', textDecoration: 'none' }}>Support Forum</Link>
                </li>
                <li>
                    <Link to='/' style={{ color: '#555', textDecoration: 'none' }}>Contact</Link>
                </li>
                </ul>
            </div>

            <div style={{ padding: 10, display: 'flex', width: '33.333%', alignContent: 'flex-start', flexWrap: 'wrap' }}>
                <ul className='bottomNavul'>
                    <li>For Frequently Asked Questions Visit our Support Forum</li>
                    <li>For Direct Support:</li>
                    <li>customersupport@prelaunchpilot.com</li>
                    <li>678-693-2254</li>
                </ul>
            </div>
        </div>

        <div className='bottomBar' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{paddingLeft: 20,display: 'flex'}}>
                <a href="http://13.58.206.121/" style={{ textDecoration: 'none',display: 'flex'}}>
                    <p className='bottomNavHyperlinkText'>Prelaunch Pilot, inc.</p>
                </a>
                <p style={{ fontSize: 12, fontFamily: 'sans-serif', color: '#555',marginLeft: 2,}}>© 2023 </p>
            </div>
            <div style={{paddingRight: 20,display: 'flex',fontWeight: 500}}>
                <p style={{ fontSize: 12, fontFamily: 'sans-serif', color: '#555' }}>Crafted with</p>
                <div style={{width: 20,marginTop: 7}}>
                    <Lottie animationData={animationData}  loop={true} />
                </div>
                <p style={{ fontSize: 12, fontFamily: 'sans-serif', color: '#555' }}>by</p>
                <a href="https://algoryc.com" style={{ textDecoration: 'none'}}>
                    <p className='bottomNavHyperlinkText' style={{marginLeft: 2}}>Algoryc</p>
                </a>
                <p style={{ fontSize: 12, fontFamily: 'sans-serif', color: '#555' ,marginLeft: 2}}>in Islamabad</p>
            </div>
        </div>
    </>
  );
}

export default BottomNav;
