import React, { useState } from 'react';
import { Mail, Copy, ArrowUpRight } from 'lucide-react';
import { profile } from './data';
import './email-contact.css';

export default function EmailContact() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus('Email address copied!');
    } catch {
      setStatus('Select the email address above and copy it manually.');
    }
  }

  return <div className="email-contact">
    <button type="button" className="button primary red" aria-expanded={open} aria-controls="email-options" onClick={() => setOpen(!open)}><Mail size={18}/> Email me</button>
    <div id="email-options" className="email-options" hidden={!open}>
      <p className="email-address">{profile.email}</p>
      <p>Send me a message using Gmail or your email app, or copy my address.</p>
      <div className="email-actions">
        <a className="button primary" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`} target="_blank" rel="noreferrer">Compose in Gmail <ArrowUpRight size={16}/></a>
        <button type="button" className="button secondary" onClick={copyEmail}><Copy size={16}/> Copy email</button>
        <a className="email-app-link" href={`mailto:${profile.email}`}>Open email app</a>
      </div>
      <p className="email-status" role="status">{status}</p>
    </div>
  </div>;
}
