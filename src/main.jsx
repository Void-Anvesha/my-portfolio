import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ChevronLeft, ChevronRight, Info, Play } from 'lucide-react';
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
import HeroText from './HeroText';

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
  return <header className={`navbar ${scrolled?'scrolled':''}`}><a href="/" className="wordmark">ANVESHA RASTOGI</a><nav aria-label="Main navigation">{navItems.map(item=><a className={activePath===item.path?'active':''} aria-current={activePath===item.path?'page':undefined} href={item.path} key={item.id}>{item.label}</a>)}</nav><div className="nav-right"><ThemeToggle/><button className="mini-profile" onClick={onProfile} aria-label={`Switch profile, current profile ${persona.name}`}><MonsterAvatar persona={persona} small/></button></div></header>;
}

function Hero() {
  return <section className="hero" id="home"><div className="screen-scene" aria-hidden="true"><div className="screen-window"><div className="screen-toolbar"><i/><i/><i/><span>anvesha / workspace</span></div><div className="screen-code"><span className="code-comment"># meet the developer</span><br/><span className="code-purple">class</span> AnveshaRastogi:<br/><br/>&nbsp;&nbsp; name = <span className="code-green">"{profile.name}"</span><br/>&nbsp;&nbsp; education = <span className="code-green">"{profile.education}"</span><br/>&nbsp;&nbsp; focus = <span className="code-green">"AI/ML &amp; Generative AI"</span><br/><br/>&nbsp;&nbsp; languages = [<span className="code-green">"Python", "C++", "JavaScript"</span>]<br/>&nbsp;&nbsp; interests = [<span className="code-green">"LLMs", "RAG", "Full-stack"</span>]<br/><br/>&nbsp;&nbsp; <span className="code-purple">def</span> build(self):<br/>&nbsp;&nbsp;&nbsp;&nbsp; <span className="code-purple">return</span> <span className="code-green">"Ideas people can use"</span><br/><br/><span className="code-comment"># learning through building</span></div><div className="screen-status"><span/> about_me.py <span>Python &nbsp; UTF-8</span></div></div><div className="screen-glow"/></div><div className="hero-shade"/><div className="hero-content"><HeroText/><div className="hero-actions"><a className="button primary" href={profile.resume} target="_blank" rel="noreferrer"><Play size={20} fill="currentColor"/> Resume</a><a className="button primary" href={profile.linkedin} target="_blank" rel="noreferrer"><Info size={21}/> LinkedIn</a></div></div></section>;
}

function TopPicksRow() {
  return <Row title="Explore My Portfolio" className="top-picks-row">{topPicks.map(pick=><a className="top-pick" href={pick.path} key={pick.id}><Artwork photo={pick.id}/><span className="pick-label">{pick.title}</span><span className="pick-arrow"><ArrowUpRight size={18}/></span></a>)}</Row>;
}

function Row({title,subtitle,id,children,className=''}) {
  const track=useRef(null);
  const [position,setPosition]=useState({start:true,end:false});
  const update=()=>{const el=track.current;if(el)setPosition({start:el.scrollLeft<5,end:el.scrollLeft+el.clientWidth>=el.scrollWidth-5});};
  useEffect(()=>{update();const observer=new ResizeObserver(update);if(track.current)observer.observe(track.current);return()=>observer.disconnect();},[]);
  return <section id={id} className={`content-row ${className}`}><div className="section-heading"><div><h2>{title}<span className="section-dot">.</span></h2>{subtitle&&<p>{subtitle}</p>}</div><div className="row-controls"><button aria-label={`Scroll ${title} left`} disabled={position.start} onClick={()=>track.current.scrollBy({left:-track.current.clientWidth*.8,behavior:'smooth'})}><ChevronLeft size={19}/></button><button aria-label={`Scroll ${title} right`} disabled={position.end} onClick={()=>track.current.scrollBy({left:track.current.clientWidth*.8,behavior:'smooth'})}><ChevronRight size={19}/></button></div></div><div ref={track} onScroll={update} className="row-track">{children}</div></section>;
}

function Footer() {
  return <footer className="compact-footer"><div className="compact-footer-inner"><a className="wordmark" href="/">ANVESHA</a><span>© 2026 Anvesha Rastogi. Built with React.</span><div className="compact-footer-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a><a href="/hire-me">Get in touch <ArrowUpRight size={13}/></a></div></div></footer>;
}

function App() {
  const path=window.location.pathname.replace(/\/$/,'')||'/';
  const isHome=path==='/';
  useEffect(()=>{const label=navigation.find(item=>item.path===path)?.label||path.slice(1);document.title=isHome?'Anvesha | A Developer Original':`${label.charAt(0).toUpperCase()+label.slice(1)} | Anvesha Rastogi`;},[path,isHome]);
  const [persona,setPersona]=useState(()=>personas.find(item=>item.name===sessionStorage.getItem('anvesha-persona'))||(isHome?null:personas[0]));
  function enter(choice){sessionStorage.setItem('anvesha-persona',choice.name);setPersona(choice);window.scrollTo(0,0);}
  if(!persona)return <ProfileSelect onEnter={enter}/>;
  return <><Navbar persona={persona} onProfile={()=>{sessionStorage.removeItem('anvesha-persona');setPersona(null);}}/><main>{isHome?<><Hero/><div className="collection"><TopPicksRow/></div></>:<DetailPage path={path}/>}</main><Footer/><PortfolioInteractions/></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
