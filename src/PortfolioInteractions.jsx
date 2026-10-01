import React, { useEffect, useRef, useState } from 'react';
import { Search, X, ArrowUp } from 'lucide-react';
import { navigation } from './data';
import './interactions.css';

const destinations = [...navigation, {label:'Certifications',path:'/certifications'}];
export default function PortfolioInteractions() {
  const dialog = useRef(null);
  const trigger = useRef(null);
  const progress = useRef(null);
  const [query, setQuery] = useState('');
  const [showTop, setShowTop] = useState(false);
  function open() { setQuery(''); dialog.current.showModal(); }
  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
    const seen = new WeakSet();
    const active = new Set();
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      if (motion.matches) return;
      const animation = entry.target.animate([{opacity:.3,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}], {duration:650,easing:'cubic-bezier(.2,.7,.2,1)'});
      active.add(animation);
      animation.onfinish = () => active.delete(animation);
    }), {threshold:.08});
    const selectors = '.page-heading,.hero-content,.top-pick,.professional-detail,.education-card,.technical-card,.credential-card,.case-study,.page-callout';
    function discover() { document.querySelectorAll(selectors).forEach(el => { if (!seen.has(el)) {seen.add(el);observer.observe(el);} }); }
    discover();
    const mutations = new MutationObserver(discover);
    mutations.observe(document.querySelector('main'), {childList:true,subtree:true});
    let frame = 0;
    function scroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - innerHeight;
        progress.current.style.transform = `scaleX(${height > 0 ? scrollY / height : 0})`;
        setShowTop(scrollY > 500); frame = 0;
      });
    }
    function pointer(event) {
      if (motion.matches || !finePointer.matches) return;
      const card = event.target.closest('.technical-card,.credential-card,.page-callout,.experience-highlights button,.education-card');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--light-x', `${event.clientX-rect.left}px`);
      card.style.setProperty('--light-y', `${event.clientY-rect.top}px`);
    }
    function keys(event) { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {event.preventDefault(); if (dialog.current.open) dialog.current.close(); else open();} }
    function reduce() {if(motion.matches) {active.forEach(animation => animation.cancel());active.clear();}}
    motion.addEventListener('change', reduce);
    window.addEventListener('scroll',scroll,{passive:true});
    document.addEventListener('pointermove',pointer,{passive:true});
    document.addEventListener('keydown',keys);
    scroll();
    return () => { observer.disconnect();mutations.disconnect();active.forEach(animation => animation.cancel());cancelAnimationFrame(frame);motion.removeEventListener('change',reduce);window.removeEventListener('scroll',scroll);document.removeEventListener('pointermove',pointer);document.removeEventListener('keydown',keys); };
  }, []);
  return <>
    <div className="reading-progress" ref={progress} aria-hidden="true"/>
    <div className="portfolio-shortcuts"><button ref={trigger} onClick={open} aria-label="Quick navigation"><Search size={17}/><span>Explore</span><kbd>Ctrl K</kbd></button>{showTop && <button aria-label="Back to top" onClick={() => window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}><ArrowUp size={18}/></button>}</div>
    <dialog className="quick-navigation" ref={dialog} aria-labelledby="quick-navigation-title" onClose={() => trigger.current?.focus()} onClick={event => {if(event.target === dialog.current) dialog.current.close();}}>
      <div className="quick-navigation-header"><h2 id="quick-navigation-title">Explore my portfolio</h2><button aria-label="Close quick navigation" onClick={() => dialog.current.close()}><X size={20}/></button></div>
      <label className="quick-search"><Search size={19}/><input autoFocus aria-label="Find a page" placeholder="Find a page..." value={query} onChange={event => setQuery(event.target.value)}/></label>
      <nav aria-label="Quick navigation pages">{destinations.filter(item => item.label.toLowerCase().includes(query.toLowerCase())).map((item,index) => <a href={item.path} key={item.path}><span>{item.label}</span><span aria-hidden="true">0{index+1}</span></a>)}</nav>
      {!destinations.some(item => item.label.toLowerCase().includes(query.toLowerCase())) && <p>No matching pages. Try skills, projects, or hire me.</p>}
      <small>Choose a page to explore · Esc to close</small>
    </dialog>
  </>;
}
