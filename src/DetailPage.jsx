import React from 'react';
import SkillsGrid from './SkillsGrid';
import ExperienceCard from './ExperienceCard';
import EmailContact from './EmailContact';
import ProjectExplorer from './ProjectExplorer';
import CertificationCard from './CertificationCard';
import { ArrowUpRight, Github, GraduationCap, Phone, Linkedin, Award } from 'lucide-react';
import { profile, experience, certifications, education } from './data';

const pages = {
  '/professional': ['Professional', 'My work so far', 'The models, APIs, and conversations I have worked on — plus the education behind them.'],
  '/skills': ['Skills', 'Technical Skills', 'The technologies I work with, what they do, and where I use them.'],
  '/projects': ['Projects', 'From idea to application', 'A closer look at what I built, how it works, and the results.'],
  '/hire-me': ['Hire Me', 'Let’s work together', profile.pitch],
  '/certifications': ['Certifications', 'Learning along the way', 'Certificates, hackathons, and open-source milestones.'],
};

function GitHubActivity(){
  return <section className="page-section github-activity-section" aria-labelledby="github-activity-title">
    <div className="github-activity-heading">
      <div><span className="eyebrow">OPEN SOURCE / CONSISTENCY</span><h2 id="github-activity-title">GitHub Activity</h2></div>
      <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/> View GitHub <ArrowUpRight size={16}/></a>
    </div>
    <a className="github-activity-chart" href={profile.github} target="_blank" rel="noreferrer" aria-label="Open Anvesha Rastogi's GitHub profile">
      <img src="https://ghchart.rshah.org/e50914/Void-Anvesha" alt="Anvesha Rastogi GitHub contribution chart" loading="lazy"/>
    </a>
  </section>;
}

export default function DetailPage({path}) {
  const page = pages[path];
  if(!page)return <section className={`detail-page ${path==='/skills'?'skills-detail-page':''}`} id="home"><div className="page-heading"><h1>Page not found</h1><p>This page isn’t in the collection.</p><a className="button primary" href="/">Back to Home</a></div></section>;
  return <section className={`detail-page ${path==='/skills'?'skills-detail-page':''}`} id="home">
    <a className="page-back" href="/">← Back to Home</a>
    <header className="page-heading">{path!=='/projects'&&<span className="eyebrow">{page[0]} / ANVESHA RASTOGI</span>}<h1>{page[1]}<span className="section-dot">.</span></h1><p>{page[2]}</p></header>
    {path==='/professional'&&<>
      <section className="page-section"><h2>Experience</h2>{experience.map(item=><ExperienceCard item={item} key={item.id}/>)}</section>
      <GitHubActivity/>
      <section className="page-section professional-education"><h2>Education</h2><div className="education-grid">{education.map(item=><article className="education-card" key={item.school}><GraduationCap/><div><span className="eyebrow">{item.date}</span><h3>{item.school}</h3><p>{item.degree}</p></div><div className="education-score"><strong>{item.score}</strong><span>{item.label}</span></div></article>)}</div></section>
      <a className="button secondary" href="/certifications">Certifications & achievements <ArrowUpRight size={17}/></a>
    </>}
    {path==='/skills'&&<><SkillsGrid/><aside className="page-callout"><h2>See these tools at work</h2><p>I used RAG and FAISS in ClinSight AI, Gemini in Career Mentor, and BERT for review classification.</p><a className="button primary" href="/projects">Explore my projects <ArrowUpRight size={17}/></a></aside></>}
    {path==='/projects'&&<ProjectExplorer/>}
    {path==='/hire-me'&&<div className="hire-page-grid"><article className="page-callout"><h2>Have a role in mind?</h2><p>Tell me about your team, the problem you’re working on, and where I could help.</p><EmailContact/><a className="button secondary contact-button" href={`tel:${profile.phone.replaceAll(' ','')}`}><Phone size={18}/> Contact number: {profile.phone}</a></article><article className="page-callout"><h2>A little more context</h2><p>{profile.education} · {profile.cgpa} CGPA<br/>Expected graduation: June 2027</p><a className="button primary red" href={profile.resume} target="_blank" rel="noreferrer">View my resume</a><a className="button secondary contact-button" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a></article></div>}
    {path==='/certifications'&&<div className="certifications-page-grid">{certifications.map(item=><CertificationCard item={item} key={item.title}/>)}</div>}
  </section>;
}
