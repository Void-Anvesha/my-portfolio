import { jsPDF } from 'jspdf';
import { profile, projects, experience, skills, education, certifications } from '../src/data.js';
const doc = new jsPDF();
let y = 18;
function line(text, size = 9, color = '#333333') {
  doc.setFontSize(size); doc.setTextColor(color);
  const lines = doc.splitTextToSize(text.replaceAll('→','to').replaceAll('—','-').replaceAll('–','-').replaceAll('’',"'").replaceAll('×','/'), 174);
  if (y + lines.length * size * .43 > 282) { doc.addPage(); y = 18; }
  doc.text(lines, 18, y); y += lines.length * size * .43 + 2;
}
function heading(text) { y += 4; doc.setFont('helvetica','bold'); line(text.toUpperCase(),11,'#c10b17'); doc.setFont('helvetica','normal'); }
doc.setFont('helvetica','bold'); line(profile.name,23,'#171717');
doc.setFont('helvetica','normal'); line(profile.role,11);
line(`${profile.email} | ${profile.phone}`,9); line(profile.github,9);
heading('Profile'); line(profile.description);
heading('Experience');
for(const item of experience){doc.setFont('helvetica','bold');line(`${item.title} - ${item.subtitle}`,10);doc.setFont('helvetica','normal');line(item.category);for(const d of item.details)line(`- ${d}`);}
heading('Selected Projects');
for(const item of projects.slice(0,3)){doc.setFont('helvetica','bold');line(item.subtitle||item.title,10);doc.setFont('helvetica','normal');line(item.tech.join(' | '),8,'#666666');for(const d of item.details)line(`- ${d}`);if(item.github)line(item.github,8);}
heading('Technical Skills');for(const [category,items] of Object.entries(skills))line(`${category}: ${items.join(', ')}`);
heading('Education');for(const item of education){line(`${item.school} | ${item.score} ${item.label}`,10);line(`${item.degree} | ${item.date}`,9);}
heading('Certifications & Achievements');for(const item of certifications)line(`${item.title} - ${item.description} (${item.date})`);
doc.save('public/Anvesha-Rastogi-Resume-Draft.pdf');
