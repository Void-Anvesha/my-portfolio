import React, { useEffect, useRef, useState } from 'react';
import { Search, X, ArrowUp, Volume2, VolumeX } from 'lucide-react';
import { navigation } from './data';
import './interactions.css';

const destinations = [...navigation, {label:'Certifications',path:'/certifications'}];
export default function PortfolioInteractions() {
  const dialog = useRef(null);
  const trigger = useRef(null);
  const progress = useRef(null);
  const audio = useRef(null);
  const ambience = useRef(null);
  const [query, setQuery] = useState('');
  const [showTop, setShowTop] = useState(false);
  const [soundOn, setSoundOn] = useState(() => localStorage.getItem('portfolio-sound') === 'on');
  function sound(kind = 'tap', force = false) {
    if (!soundOn && !force) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audio.current) audio.current = new AudioContext();
    const context = audio.current;
    if (context.state === 'suspended') context.resume();
    const now = context.currentTime;
    const gain = context.createGain();
    const oscillator = context.createOscillator();
    const notes = {
      tap: [392, 523],
      open: [262, 392, 659],
      close: [523, 330],
      hover: [740],
      success: [523, 659, 784],
      dream: [196, 247, 330, 494],
      orbit: [330, 415, 554],
    }[kind] || [392];
    gain.connect(context.destination);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(kind === 'open' || kind === 'dream' ? 0.055 : 0.03, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2 + notes.length * 0.035);
    oscillator.type = kind === 'hover' ? 'triangle' : 'sine';
    oscillator.connect(gain);
    notes.forEach((note, index) => oscillator.frequency.setValueAtTime(note, now + index * 0.045));
    oscillator.start(now);
    oscillator.stop(now + 0.24 + notes.length * 0.035);
  }
  function startAmbience() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext || ambience.current) return;
    if (!audio.current) audio.current = new AudioContext();
    const context = audio.current;
    if (context.state === 'suspended') context.resume();
    const master = context.createGain();
    const filter = context.createBiquadFilter();
    const low = context.createOscillator();
    const high = context.createOscillator();
    const pulse = context.createOscillator();
    const pulseGain = context.createGain();
    master.gain.setValueAtTime(0.0001, context.currentTime);
    master.gain.exponentialRampToValueAtTime(0.012, context.currentTime + 1.2);
    filter.type = 'lowpass';
    filter.frequency.value = 420;
    low.type = 'sine';
    high.type = 'triangle';
    pulse.type = 'sine';
    low.frequency.value = 65.41;
    high.frequency.value = 130.82;
    pulse.frequency.value = 0.08;
    pulseGain.gain.value = 0.0035;
    pulse.connect(pulseGain);
    pulseGain.connect(master.gain);
    low.connect(filter);
    high.connect(filter);
    filter.connect(master);
    master.connect(context.destination);
    low.start();
    high.start();
    pulse.start();
    ambience.current = {context, master, nodes:[low, high, pulse]};
  }
  function stopAmbience() {
    if (!ambience.current) return;
    const {context, master, nodes} = ambience.current;
    master.gain.cancelScheduledValues(context.currentTime);
    master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), context.currentTime);
    master.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.35);
    nodes.forEach(node => {
      try { node.stop(context.currentTime + 0.4); } catch {}
    });
    ambience.current = null;
  }
  function open() { sound('open'); setQuery(''); dialog.current.showModal(); }
  function close() { sound('close'); dialog.current.close(); }
  useEffect(() => localStorage.setItem('portfolio-sound', soundOn ? 'on' : 'off'), [soundOn]);
  useEffect(() => {
    if (soundOn) startAmbience();
    else stopAmbience();
    return stopAmbience;
  }, [soundOn]);
  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
    const seen = new WeakSet();
    const active = new Set();
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      if (motion.matches) return;
      const delay = Number(entry.target.dataset.revealDelay || 0);
      const animation = entry.target.animate([{opacity:.18,filter:'blur(8px)',transform:'translateY(32px) scale(.982)'},{opacity:1,filter:'blur(0)',transform:'translateY(0) scale(1)'}], {duration:720,delay,easing:'cubic-bezier(.16,1,.3,1)'});
      active.add(animation);
      animation.onfinish = () => active.delete(animation);
    }), {threshold:.08});
    const selectors = '.page-heading,.hero-content,.page-section>h2,.top-pick,.project-filter-bar,.project-filters button,.professional-detail,.recruiter-snapshot,.snapshot-metrics>div,.experience-workbench,.experience-highlights button,.experience-highlight-detail,.internship-story-grid>section,.internship-metrics>div,.education-card,.github-activity-section,.github-activity-chart,.skill-search-bar,.technical-category,.technical-category>h2,.technical-card,.credential-card,.case-study,.case-tabs button,.case-panel,.page-callout,.compact-footer-links a';
    function discover() {
      Array.from(document.querySelectorAll(selectors)).forEach((el, index) => {
        if (!seen.has(el)) {
          el.dataset.revealDelay = String(Math.min(index % 9 * 55, 330));
          seen.add(el);
          observer.observe(el);
        }
      });
    }
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
    function click(event) {
      const interactive = event.target.closest('button,a,.top-pick,.case-image-button,.mind-orbit,.dream-character,.paper-plane,.template-tools span,.ai-satellite,.mind-card,.name-frame,.mind-avatar');
      if (interactive?.closest('.portfolio-shortcuts,.quick-navigation-header')) return;
      if (interactive) sound(interactive.matches('.dream-scroll,.mind-orbit,.dream-character,.paper-plane,.template-tools span,.ai-satellite,.mind-card,.name-frame,.mind-avatar') ? 'dream' : interactive.matches('a[href],.case-expand,.profile-choice') ? 'success' : 'tap');
    }
    function hover(event) {
      if (motion.matches || !finePointer.matches) return;
      if (event.target.closest('.mind-orbit,.template-tools span,.ai-satellite')) sound('orbit');
      else if (event.target.closest('.dream-character,.dream-scroll,.paper-plane,.mind-card,.name-frame,.mind-avatar')) sound('dream');
      else if (event.target.closest('.top-pick,.technical-card,.credential-card,.project-detail,.education-card,.button')) sound('hover');
    }
    function keys(event) { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {event.preventDefault(); if (dialog.current.open) close(); else open();} }
    function reduce() {if(motion.matches) {active.forEach(animation => animation.cancel());active.clear();}}
    motion.addEventListener('change', reduce);
    window.addEventListener('scroll',scroll,{passive:true});
    document.addEventListener('pointermove',pointer,{passive:true});
    document.addEventListener('click',click);
    document.addEventListener('pointerenter',hover,true);
    document.addEventListener('keydown',keys);
    scroll();
    return () => { observer.disconnect();mutations.disconnect();active.forEach(animation => animation.cancel());cancelAnimationFrame(frame);motion.removeEventListener('change',reduce);window.removeEventListener('scroll',scroll);document.removeEventListener('pointermove',pointer);document.removeEventListener('click',click);document.removeEventListener('pointerenter',hover,true);document.removeEventListener('keydown',keys); };
  }, [soundOn]);
  return <>
    <div className="ambient-effects" aria-hidden="true"><i/><i/><i/><i/></div>
    <div className="reading-progress" ref={progress} aria-hidden="true"/>
    <dialog className="quick-navigation" ref={dialog} aria-labelledby="quick-navigation-title" onClose={() => trigger.current?.focus()} onClick={event => {if(event.target === dialog.current) close();}}>
      <div className="quick-navigation-header"><h2 id="quick-navigation-title">Explore my portfolio</h2><button aria-label="Close quick navigation" onClick={close}><X size={20}/></button></div>
      <label className="quick-search"><Search size={19}/><input autoFocus aria-label="Find a page" placeholder="Find a page..." value={query} onChange={event => setQuery(event.target.value)}/></label>
      <nav aria-label="Quick navigation pages">{destinations.filter(item => item.label.toLowerCase().includes(query.toLowerCase())).map((item,index) => <a href={item.path} key={item.path}><span>{item.label}</span><span aria-hidden="true">0{index+1}</span></a>)}</nav>
      {!destinations.some(item => item.label.toLowerCase().includes(query.toLowerCase())) && <p>No matching pages. Try skills, projects, or hire me.</p>}
      <small>Choose a page to explore · Esc to close</small>
    </dialog>
  </>;
}
