import React, { useState } from 'react';
import { BrainCircuit, Sparkles, Code2, Database, BookOpen } from 'lucide-react';
import { skills, skillCategories, skillDescriptions } from './data';

const icons={brain:BrainCircuit,sparkles:Sparkles,code:Code2,database:Database,book:BookOpen};

export default function SkillsGrid(){
  const [query, setQuery] = useState('');
  const matches = name => name.toLowerCase().includes(query.trim().toLowerCase());
  const count = Object.values(skills).flat().filter(matches).length;
  return <div className="technical-skills"><div className="skill-search-bar"><label htmlFor="skill-search">Explore my skills</label><input id="skill-search" type="search" placeholder="Search Python, RAG, databases..." value={query} onChange={event => setQuery(event.target.value)}/></div>{count === 0 && <p className="skill-search-empty">No matching skills. Try another technology.</p>}{skillCategories.filter(category => skills[category.key].some(matches)).map(category=>{
    const Icon=icons[category.icon];
    return <section className="technical-category" key={category.key} aria-labelledby={`category-${category.icon}`}>
      <h2 id={`category-${category.icon}`}>{category.title}</h2>
      <div className="technical-card-grid">{skills[category.key].filter(matches).map(name=><article className="technical-card" key={name}>
        <Icon size={33} strokeWidth={1.7} aria-hidden="true"/>
        <h3>{name}</h3><p>{skillDescriptions[name]}</p>
      </article>)}</div>
    </section>;
  })}</div>;
}
