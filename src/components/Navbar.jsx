import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [{ name: 'Home', href: '#home' },
{ name: 'About', href: '#about' },
{ name: 'Skills', href: '#skills' },
{ name: 'Work', href: '#work' }]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return <div className='nav-wrap'>
        <motion.nav className='nav-bar'
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}>
            <a href='#home' className='brand'>Ayanfeoluwa<span>.</span></a>
            <div className='nav-links'>{navLinks.map((link) =>
                <a key={link.name} href={link.href} className='nav-link'>{link.name}</a>
            )}
            </div>
            <a href='#contact' className='nav-cta'>Let’s talk <span>↗</span>
            </a>
            <button className='menu-button'
                onClick={() => setIsOpen((open) => !open)}
                aria-label='Toggle menu'>{isOpen ? <X size={22} /> : <Menu size={22} />
                }
            </button>
        </motion.nav>
        <AnimatePresence>{isOpen &&
            <motion.div className='mobile-menu'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}>
                {navLinks.map((link) =>
                    <a key={link.name}
                        href={link.href} className='nav-link'
                        onClick={() => setIsOpen(false)}>
                        {link.name}
                    </a>
                )}
                <a href='#contact' className='nav-cta'
                    onClick={() => setIsOpen(false)}>
                    Let’s talk
                </a>
            </motion.div>}
        </AnimatePresence>
    </div>
}

export default Navbar
