import { Link } from 'react-router-dom';

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

        <div className='bottomBar'>
        <p style={{ fontSize: 16, fontFamily: 'sans-serif', color: '#555' }}>© 2023 Prelaunch Pilot Inc.</p>
        </div>
    </>
  );
}

export default BottomNav;
