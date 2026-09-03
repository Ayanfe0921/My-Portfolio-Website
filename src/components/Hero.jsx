import React from 'react'
import { ArrowDown, ArrowUpRight, Code2 as Github } from 'lucide-react'
import { motion } from 'framer-motion'
import hero from '../assets/hero.jpeg'

const Hero = () => <section id='home' className='hero page-width'>
    <motion.div className='hero-copy'
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}>
        <p className='eyebrow'>Full-stack developer <span className='status-dot' /> Based in Nigeria</p>
        <h1>Thoughtful code.<br /><em>Useful</em> digital worlds.</h1>
        <p className='hero-intro'>Hi, I’m Ayanfeoluwa. I build expressive, dependable products at the intersection of frontend craft, backend logic, and emerging AI.</p>
        <div className='hero-actions'>
            <a className='button button-primary' href='#work'>See my work <ArrowUpRight size={17} />
            </a>
            <a className='text-link' href='https://github.com/Ayanfe0921' target='_blank' rel='noreferrer'><Github size={17} /> GitHub</a>
        </div>
    </motion.div>
    <motion.div className='hero-portrait'
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}>
        <div className='portrait-frame'>
            <img src={hero} alt='Ayanfeoluwa, full-stack developer' />
            <span className='portrait-label'>Open to<br />good work <ArrowUpRight size={18} /></span>
        </div>
        <span className='hero-stamp'>React <b>×</b> JS <b>×</b> AI</span>
    </motion.div>
    <a className='scroll-cue' href='#about'><ArrowDown size={16} /> Scroll to explore</a>
</section>

export default Hero
