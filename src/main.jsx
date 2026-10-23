import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ChevronLeft, ChevronRight, FileText, Github, Info, Linkedin, Mail, Play } from 'lucide-react';
import { profile, personas, navigation, topPicks, photography } from './data';
import './styles.css';
import './reference.css';
import './pages.css';
import './controls.css';
import './theme.css';
import './hero-background.css';
import './polish.css';
import ThemeToggle from './ThemeToggle';
import DetailPage from './DetailPage';
import PortfolioInteractions from './PortfolioInteractions';

const navItems = navigation;

function Artwork({photo}) {
  const image = photography[photo];
  return <div className={`photo-artwork ${image.screenshot?'project-screenshot':''}`} aria-hidden="true"><img src={`/images/${image.src}.${image.extension||'jpg'}`} alt="" loading="lazy" decoding="async" style={{objectPosition:image.position}}/></div>;
}

function MonsterAvatar({persona,small=false}) {
  return <span className={`monster-avatar ${persona.color} ${small?'small':''}`} aria-hidden="true"><span className="monster-fur"/><span className="monster-eyes"><i/><i/></span><span className="monster-smile"/></span>;
}

function ProfileSelect({onEnter}) {
  const [leaving,setLeaving]=useState(false);
  const timer=useRef();
  useEffect(()=>()=>clearTimeout(timer.current),[]);
  return <div className={`landing ${leaving?'leaving':''}`}><a className="wordmark landing-logo" href="#">ANVESHA RASTOGI</a><div className="landing-theme"><ThemeToggle/></div><div className="landing-center"><h1>Who's Watching?</h1><div className="profile-grid">{personas.map(persona=><button disabled={leaving} className="profile-choice" key={persona.name} onClick={()=>{setLeaving(true);timer.current=setTimeout(()=>onEnter(persona),420);}}><MonsterAvatar persona={persona}/><span className="profile-name">{persona.name}</span></button>)}</div><span className="enter-hint">PICK YOUR PROFILE. MAKE YOURSELF AT HOME.</span></div></div>;
}

function Navbar({onProfile,persona}) {
  const [scrolled,setScrolled]=useState(false);
  const activePath=window.location.pathname.replace(/\/$/,'')||'/';
  useEffect(()=>{const update=()=>setScrolled(window.scrollY>20);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);},[]);
  return <header className={`navbar ${scrolled?'scrolled':''}`}><a href="/" className="wordmark">ANVESHA RASTOGI</a>{isHomePath()&&<span className="nav-availability"><i/> Open to AI/ML roles</span>}<nav aria-label="Main navigation">{navItems.map(item=><a className={activePath===item.path?'active':''} aria-current={activePath===item.path?'page':undefined} href={item.path} key={item.id}>{item.label}</a>)}</nav></header>;
}

function isHomePath() {
  const path=window.location.pathname.replace(/\/$/,'')||'/';
  return path==='/';
}

function Hero() {
  return <section className="hero template-hero mind-hero" id="home">
    <div className="template-stage mind-stage" aria-hidden="true">
      <div className="template-grain"/>
      <div className="template-stars"><i/><i/><i/><i/><i/><i/><i/><i/></div>
      <div className="mind-bird bird-one"/>
      <div className="mind-bird bird-two"/>
      <div className="mind-bird bird-three"/>
      <div className="mind-avatar">
        <div className="mind-thoughts"><i/><i/><i/><i/></div>
        <div className="mind-head">
          <span className="mind-ear left"/>
          <span className="mind-ear right"/>
          <span className="mind-lid"/>
          <span className="mind-opening"/>
          <span className="mind-eye left"/>
          <span className="mind-eye right"/>
          <span className="mind-nose"/>
          <span className="mind-smile"/>
        </div>
        <div className="mind-arm"><span className="mind-hand"><i/><i/><i/><i/></span></div>
        <div className="mind-body"><span>Get in touch</span><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.resume} target="_blank" rel="noreferrer">Resume</a></div>
      </div>
    </div>
    <div className="hero-content template-copy mind-copy">
      <span className="mind-kicker">Inside the mind of</span>
      <h1>Anvesha Rastogi</h1>
      <p className="mind-subtitle">Building AI systems, RAG workflows, and full-stack products that move from notebook experiments into real user experiences.</p>
      <div className="template-actions"><a className="button primary" href={profile.resume} target="_blank" rel="noreferrer"><Play size={20} fill="currentColor"/> Resume</a><a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><Info size={21}/> LinkedIn</a></div>
    </div>
    <div className="template-ruler mind-ruler" aria-hidden="true"><span>Hello</span><span>Models</span><span>Systems</span><span>Work</span><span>Contact</span></div>
  </section>;
}

function TopPicksRow() {
  return <Row title="Selected Work" subtitle="A few parts of my work, learning, and build process." id="portfolio" className="top-picks-row">{topPicks.map(pick=><a className="top-pick" href={pick.path} key={pick.id}><Artwork photo={pick.id}/><span className="pick-label">{pick.title}</span><span className="pick-arrow"><ArrowUpRight size={18}/></span></a>)}</Row>;
}

function Row({title,subtitle,id,children,className=''}) {
  const track=useRef(null);
  const [position,setPosition]=useState({start:true,end:false});
  const update=()=>{const el=track.current;if(el)setPosition({start:el.scrollLeft<5,end:el.scrollLeft+el.clientWidth>=el.scrollWidth-5});};
  useEffect(()=>{update();const observer=new ResizeObserver(update);if(track.current)observer.observe(track.current);return()=>observer.disconnect();},[]);
  return <section id={id} className={`content-row ${className}`}><div className="section-heading"><div><h2>{title}<span className="section-dot">.</span></h2>{subtitle&&<p>{subtitle}</p>}</div><div className="row-controls"><button aria-label={`Scroll ${title} left`} disabled={position.start} onClick={()=>track.current.scrollBy({left:-track.current.clientWidth*.8,behavior:'smooth'})}><ChevronLeft size={19}/></button><button aria-label={`Scroll ${title} right`} disabled={position.end} onClick={()=>track.current.scrollBy({left:track.current.clientWidth*.8,behavior:'smooth'})}><ChevronRight size={19}/></button></div></div><div ref={track} onScroll={update} className="row-track">{children}</div></section>;
}

function Footer() {
  return <footer className="compact-footer"><div className="compact-footer-inner">
    <div className="compact-footer-links">
      <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={14}/></a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn <ArrowUpRight size={14}/></a>
      <a href={profile.resume} target="_blank" rel="noreferrer"><FileText size={18}/> Resume <ArrowUpRight size={14}/></a>
      <a href="/hire-me"><Mail size={18}/> Get in touch <ArrowUpRight size={14}/></a>
    </div>
  </div></footer>;
}

function App() {
  const path=window.location.pathname.replace(/\/$/,'')||'/';
  const isHome=path==='/';
  useEffect(()=>{document.title='Anvesha Rastogi';},[path]);
  const [persona,setPersona]=useState(()=>personas.find(item=>item.name===sessionStorage.getItem('anvesha-persona'))||personas[0]);
  function enter(choice){sessionStorage.setItem('anvesha-persona',choice.name);setPersona(choice);window.scrollTo(0,0);}
  return <><Navbar persona={persona} onProfile={()=>{sessionStorage.removeItem('anvesha-persona');setPersona(personas[0]);}}/><main>{isHome?<><Hero/><div className="collection template-work"><TopPicksRow/></div></>:<DetailPage path={path}/>}</main><Footer/><PortfolioInteractions/></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
