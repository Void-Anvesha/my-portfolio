import React, {useEffect, useRef, useState} from 'react';
import {ArrowUpRight, ChevronDown, Github, Maximize2, Play, X} from 'lucide-react';
import {projects, photography, skillDescriptions, projectOverviews} from './data';
import './projects.css';

const filters=['All projects','AI & ML','Developer tools','Previews'];
const tabs=['Overview','How I built it','Tech stack'];
const stackNotes={
  SentenceTransformers:'Turns text into embeddings for semantic similarity and retrieval.',
  LLM:'Generates clinical summaries and reasons over retrieved patient notes.',
  FastAPI:'Serves Python application logic and model predictions through HTTP APIs.',
  'Gemini 1.5 Pro':'Generates personalized interview questions and feedback.',
  Flask:'Connects the interview interface to the Python application and model calls.',
  HTML:'Defines the structure of the web interface.',
  CSS:'Controls the layout and visual presentation of the interface.',
  HuggingFace:'Provides pretrained transformer models and tools for fine-tuning.',
};

function Screenshot({item,photo,onClose}){
  const dialog=useRef(null);
  useEffect(()=>{const element=dialog.current;const trigger=document.activeElement;const overflow=document.body.style.overflow;document.body.style.overflow='hidden';element.showModal();return()=>{element.close();document.body.style.overflow=overflow;trigger?.focus();};},[]);
  return <dialog ref={dialog} className="project-screenshot-dialog" aria-label={`${item.title} screenshot`} onCancel={onClose} onClick={event=>{if(event.target===dialog.current)onClose();}}><div className="screenshot-dialog-bar"><strong>{item.title} &middot; {photo.previewLabel||'Application screenshot'}</strong><button onClick={onClose} aria-label="Close screenshot"><X size={21}/></button></div><img src={`/images/${photo.src}.${photo.extension||'jpg'}`} alt={photo.alt||`${item.title} application screenshot`}/></dialog>;
}

function ProjectCaseStudy({item,index}){
  const [expanded,setExpanded]=useState(index===0);
  const [tab,setTab]=useState(0);
  const [preview,setPreview]=useState(false);
  const photo=photography[item.id];
  const overview=projectOverviews[item.id];
  const hasCaseStudy=Boolean(overview?.sections?.length);
  const availableTabs=item.tech.length>0?tabs:tabs.slice(0,2);
  const panelId=`${item.id}-case-study`;
  const image=<img src={`/images/${photo.src}.${photo.extension||'jpg'}`} alt={photo.screenshot?(photo.alt||`${item.title} application screenshot`):''} loading="lazy" style={{objectPosition:photo.position}}/>;
  function tabKey(event){
    let next=tab;
    if(event.key==='ArrowRight')next=(tab+1)%availableTabs.length;
    else if(event.key==='ArrowLeft')next=(tab+availableTabs.length-1)%availableTabs.length;
    else if(event.key==='Home')next=0;
    else if(event.key==='End')next=tabs.length-1;
    else return;
    event.preventDefault();setTab(next);document.getElementById(`${item.id}-tab-${next}`)?.focus();
  }
  return <article id={item.id} className={`project-detail case-study ${expanded?'is-expanded':''}`}>
    <div className="case-summary">
      <div className={`case-visual ${photo.screenshot?'actual-screenshot':''}`}>
        {photo.screenshot?<button className="case-image-button" onClick={()=>setPreview(true)} aria-label={`Enlarge ${item.title} screenshot`}>{image}<span><Maximize2 size={15}/> {photo.previewLabel||'View screenshot'}</span></button>:image}
        {!photo.screenshot&&<span className="case-image-caption">{hasCaseStudy?'PROJECT COVER':'PROJECT PREVIEW'}</span>}
      </div>
      <div className="case-intro"><div className="case-meta"><span className="eyebrow">PROJECT {String(index+1).padStart(2,'0')} / {item.category}</span></div><h2>{item.subtitle||item.title}</h2><p className="case-summary-text">{overview?.summary||item.details[0]}</p><div className="case-tech-preview">{item.tech.slice(0,4).map(tech=><span key={tech}>{tech}</span>)}{item.tech.length>4&&<span>+{item.tech.length-4} more</span>}</div><div className="case-actions">{hasCaseStudy&&<button className="button primary red case-expand" aria-expanded={expanded} aria-controls={panelId} onClick={()=>setExpanded(!expanded)}>{expanded?'Close case study':'Explore case study'}<ChevronDown size={17}/></button>}{item.github&&<a className="case-repo" href={item.github} target="_blank" rel="noreferrer"><Github size={17}/> Code <ArrowUpRight size={14}/></a>}{item.liveUrl&&<a className="case-repo" href={item.liveUrl} target="_blank" rel="noreferrer"><Play size={15}/> Live app <ArrowUpRight size={14}/></a>}</div></div>
    </div>
    {hasCaseStudy&&expanded&&<div className="case-expanded" id={panelId}>
      <div className="case-tabs" role="tablist" aria-label={`${item.title} case study`}>{availableTabs.map((label,i)=><button role="tab" id={`${item.id}-tab-${i}`} aria-selected={tab===i} aria-controls={`${panelId}-panel`} tabIndex={tab===i?0:-1} onKeyDown={tabKey} onClick={()=>setTab(i)} key={label}>{label}</button>)}</div>
      <div className="case-panel" role="tabpanel" id={`${panelId}-panel`} aria-labelledby={`${item.id}-tab-${tab}`} tabIndex={0}>
        {tab===0&&<div className="case-overview-sections">{overview?.sections.map(section=><section key={section.title}><h3>{section.title}</h3><p>{section.text}</p></section>)}</div>}
        {tab===1&&<ol className="case-steps">{item.details.map((detail,i)=><li key={detail}><span>{String(i+1).padStart(2,'0')}</span><p>{detail}</p></li>)}</ol>}
        {tab===2&&<div className="case-stack">{item.tech.map(tech=><div key={tech}><h3>{tech}</h3><p>{stackNotes[tech]||skillDescriptions[tech]}</p></div>)}</div>}
      </div>
    </div>}
    {preview&&<Screenshot item={item} photo={photo} onClose={()=>setPreview(false)}/>}
  </article>;
}

export default function ProjectExplorer(){
  const [filter,setFilter]=useState('All projects');
  const visible=projects.filter(item=>filter==='All projects'||(filter==='Previews'?item.tech.length===0:filter==='Developer tools'?item.id==='gitbot':['clinsight','career','sentiment'].includes(item.id)));
  return <div className="project-explorer"><div className="project-filter-bar"><div className="project-filters" role="group" aria-label="Filter projects">{filters.map(label=><button key={label} aria-pressed={filter===label} onClick={()=>setFilter(label)}>{label}</button>)}</div></div><div className="project-detail-list">{visible.map(item=><ProjectCaseStudy key={item.id} item={item} index={projects.indexOf(item)}/>)}</div></div>;
}
