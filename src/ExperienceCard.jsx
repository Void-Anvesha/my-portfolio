import React, { useState } from 'react';
import { BriefcaseBusiness, CalendarDays, Database, Gauge, MessageSquare, Star, Users, ChevronDown } from 'lucide-react';
import './professional.css';

const highlights = [
  {
    label: 'Property prediction',
    value: 'KNN regression',
    caption: 'predicting property values',
    icon: Database,
    approach: 'I prepared property data, handled missing values, and trained regression models that could be evaluated against measurable results.',
    outcome: 'The work strengthened my ability to compare model performance and select an approach based on evidence rather than assumptions.',
    tools: 'Python / Scikit-learn / KNN',
  },
  {
    label: 'API performance',
    value: 'Async FastAPI',
    caption: 'reducing response latency',
    icon: Gauge,
    approach: 'I improved FastAPI services with asynchronous request handling and connection pooling to reduce avoidable backend waiting time.',
    outcome: 'This gave me practical experience with backend performance work, especially the importance of measuring latency before and after each change.',
    tools: 'Python / FastAPI / Async processing / Connection pooling',
  },
  {
    label: 'Financial chatbot',
    value: 'Gemini + tools',
    caption: 'loan-eligibility workflow',
    icon: MessageSquare,
    approach: 'I developed a Gemini-powered financial chatbot and integrated loan-eligibility tooling so users could move from general questions to a specific financial workflow.',
    outcome: 'The project improved my understanding of how prompt design, tool integration, and user feedback shape a deployed LLM application.',
    tools: 'Python / Gemini LLM / Loan-eligibility tools',
  },
];

const metrics = [
  { value: '6 months', label: 'Remote AI internship', icon: CalendarDays },
  { value: '15,000+', label: 'Property records analyzed', icon: Database },
  { value: '93%', label: 'Reported model accuracy', icon: Gauge },
  { value: '400 ms to 300 ms', label: 'API latency improved by 25%', icon: Gauge },
  { value: '500+', label: 'Chatbot users served', icon: Users },
  { value: '4.3/5', label: 'User rating received', icon: Star },
];

const storyBeats = [
  { title: 'Modeling', text: 'Prepared property data, trained regression models, and evaluated results across multiple approaches.' },
  { title: 'Backend', text: 'Optimized FastAPI services with asynchronous processing and more efficient connection handling.' },
  { title: 'LLM product', text: 'Built chatbot functionality around loan eligibility and practical financial user queries.' },
];

export default function ExperienceCard({ item }) {
  const [selected, setSelected] = useState(0);
  const activeHighlight = highlights[selected];

  return <article className="professional-detail experience-interactive">
    <div className="experience-title">
      <span className="experience-icon"><BriefcaseBusiness size={24}/></span>
      <div><span className="eyebrow">{item.category}</span><h3>{item.title} <span>/ {item.subtitle}</span></h3></div>
    </div>

    <div className="experience-internship-overview">
      <p className="internship-summary">From April to September 2025, I worked remotely as an AI Intern at AmasQIS.ai, contributing to machine learning, backend optimization, and generative AI development. My work included property-prediction modeling, FastAPI performance improvements, and a Gemini-powered financial chatbot with loan-eligibility functionality.</p>
      <div className="internship-metrics" aria-label="Internship results">
        {metrics.map(({ value, label, icon: Icon }) => <div key={label}>
          <span className="metric-icon" aria-hidden="true"><Icon size={17}/></span>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>)}
      </div>
      <div className="internship-story-grid" aria-label="Internship focus areas">
        {storyBeats.map(beat => <section key={beat.title}>
          <h5>{beat.title}</h5>
          <p>{beat.text}</p>
        </section>)}
      </div>
      <p className="internship-note">This internship strengthened my understanding of how model development, backend performance, and product usability work together in applied AI systems.</p>
    </div>

    <div className="experience-highlights" role="group" aria-label="Explore work highlights">
      {highlights.map(({ label, value, caption, icon: Icon }, index) => <button type="button" key={label} aria-pressed={selected === index} aria-controls={`${item.id}-highlight`} onClick={() => setSelected(index)}>
        <span className="highlight-label"><Icon size={18}/>{label}</span>
        <strong>{value}</strong>
        <span className="highlight-caption">{caption}</span>
      </button>)}
    </div>

    <div key={selected} className="experience-highlight-detail" id={`${item.id}-highlight`} aria-live="polite" aria-atomic="true">
      <div className="highlight-detail-heading">
        <h4>{activeHighlight.label}</h4>
        <span>{activeHighlight.caption}</span>
      </div>
      <p>{item.details[selected]}</p>
      <div className="experience-explanation">
        <div><h5>What I worked on</h5><p>{activeHighlight.approach}</p></div>
        <div><h5>Outcome</h5><p>{activeHighlight.outcome}</p></div>
      </div>
      <p className="experience-highlight-tools"><strong>Built with</strong> {activeHighlight.tools}</p>
    </div>

    <details className="experience-contributions"><summary>All contributions <ChevronDown size={17}/></summary><ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul></details>
    <div className="experience-tools"><span>Tools I used</span><div className="tags">{item.tech.map(tech => <span key={tech}>{tech}</span>)}</div></div>
  </article>;
}
