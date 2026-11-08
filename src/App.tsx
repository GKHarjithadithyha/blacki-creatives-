import { lazy, Suspense } from 'react'
import { AnimatePresence } from 'motion/react'
import { useLocation, useRoutes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { PageTransition } from './components/PageTransition'
import { useSmoothScroll } from './hooks/useSmoothScroll'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Packages = lazy(() => import('./pages/Packages'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Contact = lazy(() => import('./pages/Contact'))

export default function App() {
  const location = useLocation()
  const page = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/services', element: <Services /> },
    { path: '/packages', element: <Packages /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/contact', element: <Contact /> },
    { path: '*', element: <Home /> },
  ])
  useSmoothScroll()
  return <>
    <Navbar />
    <main><Suspense fallback={<div className="route-loading" aria-label="Loading page" />}>
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={location.pathname}>{page}</PageTransition>
      </AnimatePresence>
    </Suspense></main>
    <Footer />
  </>
}
