import React, { useState } from 'react';
import { BriefcaseBusiness, Database, Gauge, MessageSquare, ChevronDown } from 'lucide-react';
import './professional.css';

const highlights = [
  { label: 'Property prediction', value: '93%', caption: 'model accuracy', icon: Database,
    approach: 'I used Python and Scikit-learn to build a property-prediction model with K-nearest neighbors (KNN) regression. This approach estimates a value using similar records in the dataset. The work covered more than 15,000 property records and five or more models.',
    outcome: 'The modeling work reached a reported accuracy of 93%, giving me practical experience applying regression to a large property dataset.',
    tools: 'Python / Scikit-learn / KNN' },
  { label: 'API performance', value: '25%', caption: 'lower latency', icon: Gauge,
    approach: 'I reworked the FastAPI backend with asynchronous processing and connection pooling. Asynchronous processing lets requests make progress while other operations wait, while pooling reuses connections instead of creating a new one for every operation.',
    outcome: 'Response latency fell from 400 ms to 300 ms, a 100 ms improvement per response and a 25% reduction overall. This work focused on making the backend respond faster.',
    tools: 'Python / FastAPI / Asynchronous processing / Connection pooling' },
  { label: 'Financial chatbot', value: '500+', caption: 'users served', icon: MessageSquare,
    approach: 'I built a financial chatbot using Gemini LLM and added loan-eligibility tools. The project combined a conversational interface with a specific financial task, giving users a way to ask questions and explore loan eligibility.',
    outcome: 'The chatbot served more than 500 users and received a 4.3/5 rating. It gave me experience building an LLM application that people used beyond a development demo.',
    tools: 'Python / Gemini LLM / Loan-eligibility tools' },
];

export default function ExperienceCard({ item }) {
  const [selected, setSelected] = useState(0);
  return <article className="professional-detail experience-interactive">
    <div className="experience-title">
      <span className="experience-icon"><BriefcaseBusiness size={24}/></span>
      <div><span className="eyebrow">{item.category}</span><h3>{item.title} <span>/ {item.subtitle}</span></h3></div>
    </div>
    <div className="experience-internship-overview">
      <h4>About my internship</h4>
      <p className="internship-summary">From April to September 2025, I worked remotely as an AI Intern at AmasQIS.ai, building across three connected areas: machine learning for property prediction, faster backend APIs, and a Gemini-powered financial chatbot.</p>
      <div className="internship-metrics" aria-label="Internship results">
        <div><strong>6 months</strong><span>Remote AI internship</span></div>
        <div><strong>15,000+</strong><span>Property records analyzed</span></div>
        <div><strong>93%</strong><span>Reported model accuracy</span></div>
        <div><strong>400 ms to 300 ms</strong><span>API latency improved by 25%</span></div>
        <div><strong>500+</strong><span>Chatbot users served</span></div>
        <div><strong>4.3/5</strong><span>User rating received</span></div>
      </div>
      <p className="internship-note">I worked on both the intelligence layer and the product layer: training KNN regression models with Python and Scikit-learn, improving FastAPI performance with async processing and connection pooling, and adding loan-eligibility tools to an LLM chatbot people could actually use.</p>
    </div>
    <div className="experience-highlights" role="group" aria-label="Explore work highlights">
      {highlights.map(({ label, value, caption, icon: Icon }, index) => <button type="button" key={label} aria-pressed={selected === index} aria-controls={`${item.id}-highlight`} onClick={() => setSelected(index)}>
        <span className="highlight-label"><Icon size={18}/>{label}</span>
        <strong>{value}</strong><span className="highlight-caption">{caption}</span>
      </button>)}
    </div>
    <div key={selected} className="experience-highlight-detail" id={`${item.id}-highlight`} aria-live="polite" aria-atomic="true">
      <h4>{highlights[selected].label}</h4><p>{item.details[selected]}</p>
      <div className="experience-explanation">
        <div><h5>What I worked on</h5><p>{highlights[selected].approach}</p></div>
        <div><h5>Results & experience</h5><p>{highlights[selected].outcome}</p></div>
      </div>
      <p className="experience-highlight-tools"><strong>Built with</strong> {highlights[selected].tools}</p>
    </div>
    <details className="experience-contributions"><summary>All contributions <ChevronDown size={17}/></summary><ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul></details>
    <div className="experience-tools"><span>Tools I used</span><div className="tags">{item.tech.map(tech => <span key={tech}>{tech}</span>)}</div></div>
  </article>;
}
