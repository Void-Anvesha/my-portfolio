import React, {useState} from 'react';
import {Sun, Moon} from 'lucide-react';

export default function ThemeToggle(){
  const [theme,setTheme]=useState(()=>document.documentElement.dataset.theme||'dark');
  function toggle(){
    const next=theme==='dark'?'light':'dark';
    document.documentElement.dataset.theme=next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content',next==='light'?'#f5f6f8':'#141414');
    try{localStorage.setItem('anvesha-theme',next);}catch{}
    setTheme(next);
  }
  return <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme==='dark'?'light':'dark'} theme`} title={`Switch to ${theme==='dark'?'light':'dark'} theme`}>{theme==='dark'?<Sun size={19}/>:<Moon size={19}/>}</button>;
}
