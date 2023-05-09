import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import logoimage from '../assets/images/pilotlogo.png';
import loginlogo from '../assets/images/loginlogo.png';


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

return (
    <nav className="nav">
        <div className='navContainer'>
            <Link to='/' className='site-name'>
                <img src={logoimage} width='250px' alt='Pre Launch Pilot Logo' className='logo' />
            </Link>
            <ul style={{listStyle: 'none'}}>
                <CustomLink to='/startBusiness' className=''>Starting a Business</CustomLink>
                <CustomLink to='/impPerformance' className='' >Improve Performance</CustomLink>
                <CustomLink to='/consultOther' className='' >Consulting for Others</CustomLink>
                <CustomLink to='/more' className='' >More</CustomLink>
            </ul>
        </div>
        <div className='loginSection'>
            <img src={loginlogo} style={{ width: '50px', height: 'auto'}} />
            <CustomLink to='/login' className='navMarker' >Login</CustomLink>
        </div>
        <CustomLink to='/tryFree' className='btn'>TRY IT FREE</CustomLink>
    </nav>

)

}