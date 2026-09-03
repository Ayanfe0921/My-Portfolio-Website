import React from 'react'
import { Braces, Database, Layers3, Sparkles } from 'lucide-react'

const skills = [{ icon: Braces, title: 'Frontend craft', text: 'React, JavaScript, accessible interfaces, and responsive systems that stay fast.' },
{ icon: Database, title: 'Full-stack thinking', text: 'Clean architecture, APIs, data flows, and the details that keep products dependable.' },
{ icon: Sparkles, title: 'AI-assisted building', text: 'Curious experiments and practical AI skills that turn ambitious ideas into momentum.' },
{ icon: Layers3, title: 'Product perspective', text: 'A sharp eye for structure, interaction, and the small moments people remember.' }]

const Skills = () =>
    <section id='skills'
        className='skills-section page-width'>
        <div className='section-kicker'>
            <span>02</span> The toolkit
        </div>
        <div className='skills-heading'>
            <h2>More than<br /><em>just syntax.</em></h2>
            <p className='body-copy'>The best work happens when engineering judgment and visual curiosity are in the same room.</p>
        </div>
        <div className='skills-grid'>
            {skills.map(({ icon: Icon, title, text }) =>
                <article className='skill-item'
                    key={title}>
                    <Icon size={22} strokeWidth={1.5} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                </article>
            )}
        </div>
    </section>

export default Skills
