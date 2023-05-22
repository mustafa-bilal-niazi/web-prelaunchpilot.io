import {Link, useMatch, useResolvedPath,useLocation} from 'react-router-dom'
import logoimage from '../assets/images/pilotlogo.png';
// import loginlogo from '../assets/images/loginlogo.png';

export default function NavBar(){

    function CustomLink ({to, children, className, ...props} : {to: string, children: string, className: string}) {
        const resolvedPath= useResolvedPath(to)
        const isActive = useMatch({path: resolvedPath.pathname, end : true})
        return (
            <ul style={{listStyle: 'none'}}>
                <li className={isActive ? 'active' : ''}>
                    <Link to={to} className={className} {...props}> {children}</Link>
                </li>
            </ul>
        )
    }
    const location = useLocation();
    const isChatbotPage = location.pathname === '/bot';
    const navClass = isChatbotPage ? 'nav nav-absolute' : 'nav';

return (
    <nav className={navClass}>
        <div className='navContainer'>
            <Link to='/' className='site-name'>
                <img src={logoimage} width='250px' alt='Pre Launch Pilot Logo' className='logo' />
            </Link>
            <ul style={{listStyle: 'none'}}>
                <CustomLink to='/startBusiness' className=''>Starting a Business</CustomLink>
                <CustomLink to='/impPerformance' className='' >Improve Performance</CustomLink>
                <CustomLink to='/consultOther' className='' >Consulting</CustomLink>
                <CustomLink to='/bot' className='' >ChatBot</CustomLink>
                <CustomLink to='/more' className='' >More</CustomLink>
            </ul>
        </div>
        <CustomLink to='/bot' className='btn'>TRY IT FREE</CustomLink>
    </nav>

)

}