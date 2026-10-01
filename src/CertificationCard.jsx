import React from 'react';
import { Award, Trophy, Code2, CalendarDays } from 'lucide-react';

export default function CertificationCard({item,compact=false}) {
  const Icon=item.type==='certificate'?Award:item.brand==='girlscript'?Code2:Trophy;
  return <article className={`credential-card credential-${item.brand} ${compact?'credential-compact':''}`}>
    <div className="credential-top"><span className="credential-icon"><Icon size={26} strokeWidth={1.7} aria-hidden="true"/></span><span className="credential-kind">{item.type==='certificate'?'CERTIFICATION':'ACHIEVEMENT'}</span></div>
    <span className="credential-issuer">{item.issuer}</span>
    {compact?<h3>{item.title}</h3>:<h2>{item.title}</h2>}
    <p>{item.description}</p>
    <div className="credential-bottom"><span className="credential-badge">{item.badge}</span><span className="credential-date"><CalendarDays size={13} aria-hidden="true"/>{item.date}</span></div>
  </article>;
}
