import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BarChart3, Check,
  Compass, Layers3, Play, Sparkles, Target, Video, WandSparkles,
} from 'lucide-react'

const services = [
  { number: '01', title: 'Social Media Management', description: 'Monthly content planning, publishing, engagement and performance tracking.', icon: Layers3 },
  { number: '02', title: 'Content Strategy', description: 'Data-driven calendars and campaigns aligned with your brand goals.', icon: Target },
  { number: '03', title: 'Creative Copywriting', description: 'Captivating captions, storytelling and conversion-focused copy.', icon: Compass },
  { number: '04', title: 'AI Video Production', description: 'Scroll-stopping promotional videos and product storytelling.', icon: Video },
  { number: '05', title: 'Brand Positioning', description: 'Visual direction and a consistent voice your audience remembers.', icon: BarChart3 },
]

const plans = [
  { name: 'Launch', price: '9,999', items: ['Up to 12 posts/month', 'Content planning and creation', 'Captions and basic copywriting', 'Monthly performance report'] },
  { name: 'Scale', price: '19,999', items: ['Up to 20 posts/month', 'Content strategy and design', 'Copywriting and engagement support', 'AI video up to 2/month', 'Monthly analytics and insights'] },
  { name: 'Elevate', price: '34,999', featured: true, items: ['Up to 30 posts/month', 'Advanced content strategy', 'Creative copy and campaign ideas', 'AI video up to 4/month', 'Community engagement', 'Detailed monthly report'] },
  { name: 'Elite', price: '49,999', items: ['Up to 40 posts/month', 'End-to-end social media management', 'AI video up to 6/month', 'Campaign strategy and execution', 'Priority support and monthly review'] },
]

const projects = [
  { title: 'Velora Skincare', type: 'Social media · Content creation', image: '/assets/campaign-skincare.jpg' },
  { title: 'The Pasta Room', type: 'Campaign · AI video', image: '/assets/campaign-food.jpg' },
  { title: 'Misty Hills Resort', type: 'Social media · Branding', image: '/assets/campaign-hospitality.jpg' },
  { title: 'Brew & Bean', type: 'Content creation · Campaign', image: '/assets/campaign-coffee.jpg' },
]

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: reduced ? 0 : 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function SectionHeading({ eyebrow, children, description }: { eyebrow: string; children: React.ReactNode; description?: string }) {
  return <div className="home-section-heading"><span className="home-eyebrow">{eyebrow}</span><h2>{children}</h2>{description && <p>{description}</p>}<i aria-hidden="true" /></div>
}

export default function Home() {
  return <div className="home-page" id="home">
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero-copy">
        <span className="home-eyebrow">CREATIVE THAT MOVES BRANDS</span>
        <h1 id="home-title">Make Your Brand<br />Impossible to<br />Ignore.</h1>
        <p>Curated social media content, strategic copywriting, AI-generated promotional videos and monthly management packages that build brand visibility and audience attention.</p>
        <div className="home-hero-actions">
          <a className="pill-button pill-button-light" href="#contact">Get a Free Consultation <ArrowUpRight size={19} /></a>
          <a className="watch-link" href="#portfolio"><span><Play size={18} fill="currentColor" /></span> Watch Our Work</a>
        </div>
      </div>
      <img className="home-hero-art" src="/assets/home-hero-visual.jpg" alt="Laptop and smartphone displaying BLACKi creative social campaigns" fetchPriority="high" />
      <a className="hero-scroll" href="#about"><ArrowDown size={17} /> Scroll to explore</a>
    </section>

    <section className="home-about home-section" id="about">
      <div className="home-container about-grid">
        <Reveal className="about-copy"><span className="home-eyebrow">ABOUT BLACKi CREATIVE</span><h2>Creative social media for modern brands.</h2><i className="short-rule" /><p>We help brands show up, stand out and stay relevant through strategic content, compelling storytelling and AI-powered creative production.</p><a className="text-link" href="/about">More about us <ArrowUpRight size={18} /></a></Reveal>
        <Reveal className="about-image-wrap" delay={0.08}><img src="/assets/about-preview.jpg" alt="A warm, creative studio workspace with a laptop and brand details" loading="lazy" /><div className="about-image-note"><span>01 / 05</span><strong>Bold ideas.<br />Lasting impact.</strong></div></Reveal>
      </div>
    </section>

    <section className="home-services home-section" id="services">
      <div className="home-container">
        <div className="services-intro"><Reveal><span className="home-eyebrow">WHAT WE DO</span><h2>Everything your brand needs to grow.</h2></Reveal><Reveal delay={0.08}><p>A complete suite of creative and social media solutions to build visibility, engagement and long-term brand value.</p><a className="text-link" href="/services">Explore our services <ArrowUpRight size={18} /></a></Reveal></div>
        <div className="services-grid">{services.map(({ number, title, description, icon: Icon }, index) => <Reveal key={number} delay={index * 0.045} className="service-card"><div className="service-card-top"><Icon size={30} strokeWidth={1.5} /><span>{number}</span></div><h3>{title}</h3><p>{description}</p></Reveal>)}</div>
      </div>
    </section>

    <section className="home-packages home-section" id="packages">
      <div className="home-container"><SectionHeading eyebrow="MONTHLY PACKAGES" description="Choose a creative partnership that matches your ambitions and grows with your business.">Flexible plans for every brand.</SectionHeading>
        <div className="pricing-grid">{plans.map((plan, index) => <Reveal key={plan.name} delay={index * 0.05} className={`plan-card${plan.featured ? ' plan-featured' : ''}`}>
          {plan.featured && <span className="popular-badge">Most popular</span>}<h3>{plan.name}</h3><div className="plan-price"><strong>₹{plan.price}</strong><span>/month</span></div><ul>{plan.items.map(item => <li key={item}><Check size={18} strokeWidth={2.2} />{item}</li>)}</ul><a href="#contact" className={`plan-link${plan.featured ? ' plan-link-light' : ''}`}>Choose {plan.name} <ArrowUpRight size={16} /></a>
        </Reveal>)}</div><a className="text-link pricing-all" href="/packages">Compare all package details <ArrowRight size={17} /></a>
      </div>
    </section>

    <section className="home-portfolio home-section" id="portfolio">
      <div className="home-container"><div className="portfolio-heading"><div><span className="home-eyebrow">SELECTED WORK</span><h2>Work that builds brands.</h2></div><a className="text-link" href="/portfolio">View all projects <ArrowUpRight size={18} /></a></div>
        <div className="project-grid">{projects.map((project, index) => <Reveal key={project.title} delay={index * 0.06} className="project-card"><a href="/portfolio" aria-label={`View ${project.title} project`}><img src={project.image} alt={`${project.title} campaign creative`} /><div className="project-caption"><div><h3>{project.title}</h3><p>{project.type}</p></div><span><ArrowUpRight size={18} /></span></div></a></Reveal>)}</div>
      </div>
    </section>

    <section className="home-offer" aria-labelledby="offer-title"><div className="offer-curves offer-curves-left" aria-hidden="true" /><div className="offer-curves offer-curves-right" aria-hidden="true" />
      <div className="home-container offer-inner"><Reveal><span className="home-eyebrow">A LITTLE EXTRA FROM US</span><h2 id="offer-title">Get 1 AI Promotional Video Free.</h2><p>Start your next campaign with a bold first impression, on us.</p><a href="#contact" className="pill-button pill-button-light">Claim your free video <ArrowUpRight size={18} /></a></Reveal><div className="offer-stamp"><Sparkles size={28} /><span>YOUR FIRST<br />VIDEO IS ON US</span><WandSparkles size={24} /></div></div>
    </section>

    <section className="home-final-cta"><div className="home-container final-cta-inner"><h2>Let’s build a stronger,<br />more visible brand.</h2><p>From strategy to execution, let’s create content and campaigns that make your brand stand out.</p><a className="pill-button pill-button-light" href="#contact">Start your project <ArrowUpRight size={18} /></a></div><div className="offer-curves offer-curves-right" aria-hidden="true" /></section>
  </div>
}
