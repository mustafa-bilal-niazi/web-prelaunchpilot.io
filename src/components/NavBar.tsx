import {Link, useMatch, useResolvedPath} from 'react-router-dom'

export default function NavBar(){

    function CustomLink ({to, children, ...props} : {to: string, children: string}) {
        const resolvedPath= useResolvedPath(to)
        const isActive = useMatch({path: resolvedPath.pathname, end : true})
        return (
            <li className={isActive ? 'active' : ''}>
                <Link to={to} {...props}> {children}</Link>
            </li>
        )
    }

return (
    <nav className="nav">
        <Link to='/' className='site-name'>Pre Launch Pilot.io</Link>
        <ul>
            <CustomLink to='/startBusiness'>Starting a business</CustomLink>
            <CustomLink to='/impPerformance'>Improve performance</CustomLink>
            <CustomLink to='/consultOther'>Consulting for others</CustomLink>
            <CustomLink to='/more'>More</CustomLink>
            <CustomLink to='/login'>Login</CustomLink>
            <CustomLink to='/tryFree'>Try it free</CustomLink>

        </ul>
    </nav>

)

}