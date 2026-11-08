import { Link } from 'react-router-dom'
import { ArrowUpRight, Camera, Mail, MapPin, Phone, Play } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export function Footer() {
  const isHome = useLocation().pathname === '/'
  if (isHome) return <footer className="site-footer home-footer" id="contact">
    <div className="home-footer-main container">
      <Link to="/" className="footer-brand"><img src="/assets/blacki-logo.png" alt="BLACKi Creative" /></Link>
      <p className="footer-intro">A creative social media studio for bold, visible and memorable brands.</p>
      <a href="mailto:hello@blackicreative.in"><Mail size={19} /> hello@blackicreative.in</a>
      <a href="tel:+919876543210"><Phone size={19} /> +91 98765 43210</a>
      <span><MapPin size={19} /> Bengaluru, India</span>
      <div className="footer-socials" aria-label="Social media">
        <a href="https://instagram.com" aria-label="Instagram"><Camera /></a>
        <a href="https://youtube.com" aria-label="YouTube"><Play /></a>
        <a href="https://linkedin.com" aria-label="LinkedIn"><span>in</span></a>
        <a href="https://pinterest.com" aria-label="Pinterest"><span>p</span></a>
      </div>
    </div>
    <div className="container footer-legal"><span>© 2025 BLACKi Creative. All rights reserved.</span><a href="#home">Back to top <ArrowUpRight size={15} /></a></div>
  </footer>
  return <footer className="site-footer"><div className="container footer-inner">
    <Link to="/" className="footer-brand"><img src="/assets/blacki-logo.png" alt="BLACKi Creative" /></Link>
    <span>Independent creative studio</span>
  </div></footer>
}
