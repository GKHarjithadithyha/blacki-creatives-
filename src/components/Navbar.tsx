import { NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const links = [['About', '/about'], ['Services', '/services'], ['Packages', '/packages'], ['Portfolio', '/portfolio'], ['Contact', '/contact']]

export function Navbar() {
  const isHome = useLocation().pathname === '/'
  return <header className={`site-header${isHome ? ' site-header-home' : ''}`}><nav className="site-nav container" aria-label="Main navigation">
    <NavLink className="brand-mark" to="/" aria-label="BLACKi Creative home"><img src="/assets/blacki-logo.png" alt="BLACKi Creative" /></NavLink>
    <div className="nav-links">{isHome && <NavLink to="/" end>Home</NavLink>}{links.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}</div>
    {isHome && <a className="nav-cta" href="#contact">Get a Free Consultation <ArrowUpRight size={17} strokeWidth={2.4} /></a>}
  </nav></header>
}
