import React, { useEffect, useState } from 'react'
import { ArrowUpRight, Code2 as Github, Mail, MapPin, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import './contact.css'

const projects = [
    { number: '01', title: 'Premium agency-grade landing page', type: 'Product interface', description: 'A practical front-end premium agency-grade landing page designed for modern SaaS products.', tags: ['React', 'UI systems', 'Responsive'], image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85', link: 'https://github.com/Ayanfe0921/a-premium-agency-grade-landing-page-for-a-modern-saas-product.git' },
    { number: '02', title: 'Modern personal portfolio website', type: 'Web application', description: 'A practical front-end modern personal portfolio website showcasing skills, projects, and contact info.', tags: ['JavaScript', 'UX', 'Frontend'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85', link: 'https://github.com/Ayanfe0921/a-modern-personal-portfolio-website-showcasing-skills-projects-and-contact-information-.git' },
    { number: '03', title: 'Code Easily', type: 'Open source project', description: 'A practical project built around making the path from an idea to working code feel more approachable.', tags: ['React', 'AI skills', 'Open source'], image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85', link: 'https://github.com/Ayanfe0921/Code-Easily.git' },
]

const App = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
    useEffect(() => {
        const handleMouseMove = (event) => setMousePosition({ x: event.clientX, y: event.clientY })
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return <div className='site-shell'>
        <div className='cursor-glow'
            style={{ left: mousePosition.x, top: mousePosition.y }} />
        <Navbar />
        <main>
            <Hero />
            <section id='about' className='about-section page-width'>
                <div className='section-kicker'>
                    <span>01</span> About the developer
                </div>
                <div className='about-copy'>
                    <p className='eyebrow'><Sparkles size={15} /> Building with intention</p>
                    <h2>Digital products with a human pulse.</h2>
                    <p className='body-copy'>Ayanfeoluwa is a mid-level full-stack developer and an inspired young tech professional with a deep passion for turning thoughtful ideas into useful digital experiences. He works across React, JavaScript, software engineering, and AI-powered tools to build products that feel as good as they function.</p>
                    <p className='body-copy'>With certificates across React, JavaScript, and software engineering, he brings a curious mindset, reliable craft, and a habit of always looking for the smarter way forward.</p>
                </div>
            </section>
            <Skills />
            <section id='work'
                className='work-section page-width'>
                <div className='section-heading'>
                    <div className='section-kicker'>
                        <span>03</span>
                        Selected work
                    </div>
                    <h2>Small details.<br /><em>Real momentum.</em>
                    </h2>
                </div>
                <div className='project-list'>
                    {projects.map((project) =>
                        <motion.a className='project-card'
                            href={project.link}
                            target='_blank'
                            rel='noreferrer'
                            key={project.number}
                            whileHover={{ y: -6 }}>
                            <div className='project-image-wrap'>
                                <img src={project.image}
                                    alt={project.title} />
                                <span className='project-number'>
                                    {project.number}
                                </span>
                                <span className='project-arrow'><ArrowUpRight size={22} />
                                </span>
                            </div>
                            <div className='project-info'>
                                <p className='project-type'>
                                    {project.type}
                                </p>
                                <h3>
                                    {project.title}
                                </h3>
                                <p className='body-copy'>
                                    {project.description}
                                </p>
                                <div className='tag-row'>
                                    {project.tags.map((tag) =>
                                        <span
                                            key={tag}>
                                            {tag}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.a>
                    )}
                </div>
            </section>
            <section
                id='contact'
                className='contact-section page-width'>
                <div className='section-kicker'>
                    <span>04</span>
                    Start a conversation
                </div>
                <div className='contact-panel'>
                    <div className='contact-intro'>
                        <p className='eyebrow'>Have a good idea?
                        </p>
                        <h2>Let’s make it<br /><em>useful.</em></h2>
                        <p className='body-copy'>Tell me a little about what you are building, what is getting in the way, and where you want to go next.</p>
                    </div>
                    <form className='contact-form'
                        action='https://formsubmit.co/ayanfeoluwaolababatunde@gmail.com'
                        method='POST'>
                        <input type='hidden' name='_subject' value='New portfolio message' />
                        <input type='hidden' name='_template' value='table' />
                        <input type='hidden' name='_captcha' value='false' />
                        <input type='hidden' name='_next' value={`${window.location.origin}/#contact`} />

                        <div className='field'>
                            <label htmlFor='name'>Your name</label>
                            <input id='name' name='name' type='text' placeholder='Jane Smith' required />
                        </div>

                        <div className='field'>
                            <label htmlFor='email'>Email address</label>
                            <input id='email' name='_replyto' type='email' placeholder='jane@company.com' required />
                        </div>

                        <div className='field'>
                            <label htmlFor='number'>Phone number</label>
                            <input id='number' name='number' type='text' placeholder='+234 000 000 0000' required />
                        </div>

                        <div className='field message-field'>
                            <label htmlFor='message'>Your message</label>
                            <textarea id='message' name='message' rows='5' placeholder='Tell me about your project...' required />
                        </div>

                        <div className='submit-row'>
                            <button className='button button-primary' type='submit'>Send message <Mail size={17} /></button>
                            <a className='contact-direct-email' href='mailto:ayanfeoluwaolababatunde@gmail.com'>Or email directly <ArrowUpRight size={15} /></a>
                        </div>
                    </form>
                </div>
                <div className='footer-row'>
                    <span>© 2026 Ayanfeoluwa</span>
                    <span><MapPin size={14} /> Available for thoughtful collaborations</span>
                    <a href='https://github.com/Ayanfe0921'
                        target='_blank'
                        rel='noreferrer'><Github size={15} /> GitHub
                    </a>
                </div>
            </section>
        </main>
    </div>
}

export default App
