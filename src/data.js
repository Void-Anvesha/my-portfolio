export const profile = {
  name: 'Anvesha Rastogi', role: 'AI/ML Engineer & Full-Stack Developer',
  subtitle: 'AI/ML Engineer | Generative AI & Full-Stack Developer',
  education: 'B.Tech CSE (AIML), VIT', cgpa: '9.28',
  description: 'Hi, I’m Anvesha, a CS (AI & ML) student at VIT. I build apps with LLMs and RAG, including a clinical assistant that cuts patient-review time and a financial chatbot used by 500+ people. I like taking an idea past the notebook and into something people can actually use.',
  email: 'anvesharastogi1717@gmail.com', phone: '+91 6387408282',
  github: 'https://github.com/Void-Anvesha', linkedin: 'https://www.linkedin.com/in/anvesha-rastogi-905535311', leetcode: 'https://leetcode.com/u/void-Anvesha',
  resume: '/Anvesha-Rastogi-Resume.pdf',
  headline: 'AI/ML Engineer & Generative AI Developer',
  pitch: 'I’m looking for AI/ML, generative AI, and full-stack roles where I can build things people use. I’ve worked on retrieval pipelines, model training, and APIs — and I’m happy to get into the details. If that sounds like your team, let’s talk.',
};
export const personas = [
  {name:'Recruiter',color:'blue'}, {name:'Developer',color:'grey'},
  {name:'Stalker',color:'red'}, {name:'Adventurer',color:'yellow'},
];
export const navigation = [{label:'Home',id:'home',path:'/'},{label:'Professional',id:'experience',path:'/professional'},{label:'Skills',id:'skills',path:'/skills'},{label:'Projects',id:'projects',path:'/projects'},{label:'Hire Me',id:'contact',path:'/hire-me'}];
// Real editorial photographs, not screenshots of these projects or endorsements.
// Source URLs are recorded in public/images/CREDITS.md.
export const photography = {
  skills: {src:'skills-hardware',position:'center'},
  projects: {src:'projects-collaboration',position:'center'},
  certifications: {src:'certifications-graduation',position:'center 45%'},
  experience: {src:'experience-planning',position:'center'},
  contact: {src:'contact-handshake',position:'center'},
  clinsight: {src:'clinsight-screen',extension:'png',position:'center top',screenshot:true},
  career: {src:'career-screen',extension:'png',position:'center top',screenshot:true,alt:'Career Mentor AI interview platform homepage'},
  sentiment: {src:'moodify-screen',extension:'png',position:'center top',screenshot:true,alt:'Moodify sentiment analysis homepage'},
  gitbot: {src:'gitbot-screen',extension:'png',position:'center top',screenshot:true,alt:'GitBOT repository analysis and GitHub command help interface'},
  pantry: {src:'pantry-screen',extension:'png',position:'center top',screenshot:true,alt:'Pantry AI ShopVoice dashboard with voice shopping, cart, meal bundles, and suggestions'},
  store: {src:'store-intelligence-preview',extension:'png',position:'center top',screenshot:true,alt:'Store Intelligence dashboard redesign with retail metrics and a conversion funnel',previewLabel:'Dashboard design preview'},
  amasqis: {src:'team',position:'center 40%'},
};
export const topPicks = [
  {title:'Skills',id:'skills',path:'/skills',icon:'code',theme:'gitbot'},
  {title:'Experience',id:'experience',path:'/professional',icon:'terminal',theme:'clinical'},
  {title:'Certifications',id:'certifications',path:'/certifications',icon:'award',theme:'sentiment'},
  {title:'Projects',id:'projects',path:'/projects',icon:'boxes',theme:'career'},
  {title:'Contact Me',id:'contact',path:'/hire-me',icon:'mail',theme:'experience'},
];
export const projects = [
  { id:'clinsight', title:'ClinSight AI', eyebrow:'INTELLIGENCE THAT CARES', category:'Healthcare × Generative AI', theme:'clinical', icon:'activity', tagline:'Less time reviewing. More time caring.', tech:['Python','RAG','FAISS','SentenceTransformers','LLM','FastAPI'], github:'https://github.com/Void-Anvesha/ClinSight-AI', liveUrl:'https://clinsightai.vercel.app/', metric:'70% less review time', details:['I built a multi-agent clinical AI system generating 60-second pre-consultation briefs, reducing review time by 70%.','I built a RAG-FAISS pipeline with Sentence Transformers for semantic search, delivering a 60% efficiency gain.','I used LLM-based clinical reasoning to summarize patient insights.'] },
  { id:'career', title:'Career Mentor', eyebrow:'YOUR NEXT CHAPTER STARTS HERE', category:'Career Tech × Generative AI', theme:'career', icon:'orbit', tagline:'A smarter way to prepare for what’s next.', tech:['Python','Gemini 1.5 Pro','Flask','LLM','HTML','CSS'], github:'https://github.com/Void-Anvesha/Career-Mentor', metric:'4 technical domains', details:['I built an AI-powered mock interview platform with personalized technical questions across four domains.','I adapted interview difficulty across three proficiency levels.','I added LLM feedback to identify skill gaps and recommend learning resources.'] },
  { id:'sentiment', title:'Moodify', subtitle:'Moodify — E-commerce Review Sentiment Analysis', eyebrow:'EVERY REVIEW TELLS A STORY', category:'Natural Language Processing', theme:'sentiment', icon:'chart', tagline:'Understanding the sentiment behind the sentence.', tech:['Python','BERT','PyTorch','HuggingFace','FastAPI'], github:'https://github.com/Void-Anvesha/Sentimental-Analysis', liveUrl:'https://moodify2-o.vercel.app/', metric:'94% accuracy', details:['I fine-tuned a five-class BERT classifier on more than 50,000 reviews, achieving 94% accuracy.','I shipped a FastAPI NLP application with real-time and batch prediction through a Vercel frontend.','I used GPU-accelerated training on Google Colab.'] },
  { id:'gitbot', title:'GitBOT', eyebrow:'MEET YOUR CODE COMPANION', category:'Developer Tools × AI', theme:'gitbot', icon:'git', tagline:'A little guidance for your next commit.', tech:['Python'], github:'https://github.com/Void-Anvesha/GITBOT-CHATBOT', liveUrl:'https://gitbot-chatbot.vercel.app/', metric:'Developer tools', details:['I built GitBOT to help developers learn and use Git and GitHub.','It answers context-aware Git questions and helps you explore repositories.'], source:'https://github.com/Void-Anvesha' },
  { id:'pantry', title:'Pantry AI', eyebrow:'A FRESH PERSPECTIVE', category:'Project preview', theme:'pantry', icon:'leaf', tagline:'I’m putting the project notes together.', tech:[], github:'https://github.com/Void-Anvesha/Pantry-AI', liveUrl:'https://shopvoice-delta.vercel.app/', metric:'Preview', details:['ShopVoice is a voice-shopping assistant with shopping lists, a cart, meal bundles, and product search. The dashboard supports browser speech recognition and an optional Vapi AI integration.'] },
  { id:'store', title:'Store Intelligence', eyebrow:'CONNECTING THE DOTS', category:'Project preview', theme:'store', icon:'boxes', tagline:'I’m putting the project notes together.', tech:[], github:'https://github.com/Void-Anvesha/Store-Intelligence', metric:'Preview', details:['A retail analytics dashboard preview with store metrics and a conversion funnel.'] },
];
export const experience = [{ id:'amasqis', title:'AI Intern', subtitle:'AmasQIS.ai', eyebrow:'THE REAL-WORLD SEASON', category:'Remote, India · Apr – Sep 2025', theme:'experience', icon:'sparkles', tagline:'During my AI internship at AmasQIS.ai, I worked on property prediction, backend performance, and a financial chatbot. My work combined machine learning with API development and generative AI, from building regression models to improving response times and adding loan-eligibility tools to a conversational application.', tech:['Python','Gemini LLM','FastAPI','Scikit-learn','KNN'], metric:'25% lower latency', details:['I built KNN regression for 15,000+ property records, reaching 93% accuracy across five or more models.','I reworked FastAPI using asynchronous processing and connection pooling, reducing latency by 25% from 400 ms to 300 ms.','I built a Gemini LLM financial chatbot with loan-eligibility tools, serving 500+ users with a 4.3/5 rating.'] }];
export const projectOverviews = {
  clinsight: {
    summary: 'I built ClinSight AI to help doctors review patient information before a consultation. It brings retrieval, semantic search, and LLM-based reasoning together in a multi-agent system that produces a 60-second pre-consultation brief.',
    sections: [
      {title:'What it does',text:'The assistant turns patient records into a concise brief that surfaces relevant information before an appointment. The aim is to give doctors useful context without requiring them to read through every note first.'},
      {title:'How it works',text:'I use SentenceTransformers to represent patient notes as embeddings and FAISS to find relevant information through semantic search. A retrieval-augmented generation (RAG) pipeline supplies that context to an LLM, which summarizes the notes and reasons over the patient insights. Python and FastAPI support the application backend.'},
      {title:'What I achieved',text:'The project generates 60-second pre-consultation briefs and reduced review time by 70%. The RAG and FAISS retrieval pipeline delivered a 60% efficiency gain in decision support.'},
    ],
  },
  career: {
    summary: 'I built Career Mentor as an AI mock-interview platform for practicing technical questions across four domains. It adapts the difficulty to the candidate’s proficiency and uses LLM feedback to turn each practice session into specific next steps.',
    sections: [
      {title:'What it does',text:'The platform provides personalized technical questions and coding challenges across four domains. Instead of giving everyone the same question list, it supports three proficiency levels so candidates can practice at a suitable difficulty.'},
      {title:'How it works',text:'The application combines a Python and Flask backend with Gemini 1.5 Pro for question generation and feedback. An HTML and CSS interface presents the interview experience. The difficulty adapts across three levels based on how the candidate is doing.'},
      {title:'What the feedback includes',text:'After practice, LLM-generated feedback identifies skill gaps and recommends learning resources. This connects interview preparation with a clearer plan for what to work on next.'},
    ],
  },
  sentiment: {
    summary: 'I built an end-to-end sentiment analysis application for product reviews, from fine-tuning BERT to serving predictions through an API. It classifies reviews into five sentiment classes and supports both individual reviews and batch prediction.',
    sections: [
      {title:'What it does',text:'The application analyzes the language in e-commerce reviews and assigns a sentiment class. Five-class classification gives a more detailed view of customer opinions than a simple positive-or-negative label.'},
      {title:'How it works',text:'I fine-tuned BERT on more than 50,000 product reviews using PyTorch and HuggingFace, with GPU-accelerated training on Google Colab. A FastAPI backend serves the model, while a Vercel-hosted frontend provides access to real-time and batch predictions.'},
      {title:'What I achieved',text:'The fine-tuned classifier achieved 94% accuracy. I also took the model beyond the training notebook by deploying an application that can process one review at a time or multiple reviews together.'},
    ],
  },
  gitbot: {
    summary: 'I built GitBOT as a conversational assistant for learning and using Git and GitHub. It answers context-aware Git questions and helps users explore repositories, making it easier to ask for guidance while working with code.',
    sections: [
      {title:'What it does',text:'GitBOT helps developers, beginners, and other GitHub users ask questions about Git workflows and repositories through a conversational interface.'},
      {title:'How it helps',text:'Its focus is context-aware Git guidance and interactive repository exploration. Users can ask questions as they work through a codebase rather than relying only on a static list of commands.'},
      {title:'Implementation',text:'Python is the confirmed implementation language. The linked repository contains the source; a more detailed architecture walkthrough will be added once the remaining stack details are verified.'},
    ],
  },
  pantry: {
    summary: 'ShopVoice is a voice-shopping assistant for managing shopping lists, cart items, meal bundles, and product search. It pairs a dashboard-style interface with browser speech recognition and an optional Vapi AI integration.',
    sections: [
      {title:'What it does',text:'The app lets shoppers search for products, manage shopping lists, build a cart, and explore meal bundles from one dashboard.'},
      {title:'Voice experience',text:'ShopVoice supports browser speech recognition so users can interact with the shopping flow by voice, with optional Vapi AI support for a more conversational setup.'},
      {title:'Interface focus',text:'The dashboard keeps shopping actions visible together, making it easier to move between product search, saved lists, cart updates, and suggestions.'},
    ],
  },
};
export const skills = {
  'Languages':['C++','Python','JavaScript'],
  'Generative AI':['LLMs','RAG','Agentic AI','FAISS','LangChain','MCP'],
  'ML & AI':['TensorFlow','Scikit-learn','PyTorch','Pandas','NumPy','OpenCV','Keras','NLP','Matplotlib','BERT'],
  'Databases':['MySQL','MongoDB','Firebase'],
  'Coursework':['DSA','OOP','DBMS','Operating Systems','Computer Networks','ML & AI'],
};
export const skillDescriptions = {
  TensorFlow: 'A framework for building and training machine learning models, from simple predictors to deep neural networks.',
  'Scikit-learn': 'Python tools for regression, classification, clustering, and model evaluation. I used it for property-price prediction.',
  PyTorch: 'A deep learning framework for training neural networks. I used it to fine-tune BERT for review sentiment analysis.',
  Pandas: 'Python tools for working with tables: cleaning missing values, combining datasets, and exploring patterns before modeling.',
  NumPy: 'Fast arrays and numerical operations in Python, useful for preparing data and doing the math behind machine learning.',
  OpenCV: 'A computer vision library for processing images and video, including resizing, filtering, and extracting visual features.',
  Keras: 'A high-level API for defining neural-network layers and training models with less boilerplate.',
  NLP: 'Natural language processing turns text into useful signals, such as sentiment, topics, or information extracted from documents.',
  Matplotlib: 'A Python plotting library for exploring datasets and visualizing trends, training curves, and model results.',
  BERT: 'A transformer model that learns context from text. I fine-tuned it to classify product reviews into five sentiment classes.',
  LLMs: 'Language models that generate and interpret text. I use them for clinical summaries, interview feedback, and chatbots.',
  RAG: 'Retrieval-augmented generation finds relevant documents before an LLM answers. I used it to ground ClinSight AI in patient records.',
  'Agentic AI': 'AI workflows that break tasks into steps and coordinate tools or specialized agents. ClinSight AI uses a multi-agent approach.',
  FAISS: 'A library for finding similar vectors quickly. In ClinSight AI, it helps retrieve relevant records through semantic search.',
  LangChain: 'Tools for connecting language models with prompts, document retrieval, and external tools in an application.',
  MCP: 'Model Context Protocol provides a common way for AI applications to connect with external tools and data sources.',
  'C++': 'A compiled language with direct control over memory and performance. Part of my toolkit for algorithms and data structures.',
  Python: 'My main language for machine learning, data processing, and backend APIs, from training models to serving predictions.',
  JavaScript: 'The language behind interactive web pages, including UI events, browser logic, and requests to backend services.',
  MySQL: 'A relational database that organizes data into tables and uses SQL for queries, joins, and transactions.',
  MongoDB: 'A document database that stores flexible, JSON-like records for applications with evolving data structures.',
  Firebase: 'Backend services for web and mobile apps, including authentication, hosted databases, and real-time data updates.',
  DSA: 'Data structures and algorithms: choosing how to organize data and solve problems efficiently.',
  OOP: 'Object-oriented programming groups related data and behavior into classes, making larger programs easier to organize.',
  DBMS: 'Database fundamentals, including schemas, normalization, indexing, and transactions that keep stored data consistent.',
  'Operating Systems': 'How computers manage processes, memory, files, and concurrent work underneath an application.',
  'Computer Networks': 'How devices communicate, covering protocols, routing, and the requests that connect clients with servers.',
  'ML & AI': 'The foundations of learning from data, evaluating models, and choosing methods for prediction and decision-making.',
};
export const skillCategories = [
  {key:'ML & AI',title:'AI & Data Science',icon:'brain'},
  {key:'Generative AI',title:'Generative AI',icon:'sparkles'},
  {key:'Languages',title:'Programming Languages',icon:'code'},
  {key:'Databases',title:'Databases & Backend Services',icon:'database'},
  {key:'Coursework',title:'Computer Science Foundations',icon:'book'},
];
export const certifications = [
  {title:'Flipkart GRiD 8.0',description:'Semi-Finalist · Software Development Challenge',date:'Aug 2026',type:'achievement',brand:'flipkart',issuer:'FLIPKART',badge:'Semi-Finalist'},
  {title:'GirlScript Summer of Code',description:'Campus Ambassador & Open-Source Contributor',date:'May 2026',type:'achievement',brand:'girlscript',issuer:'GIRLSCRIPT',badge:'Open Source'},
  {title:'ET-AI Hackathon',description:'Semi-Finalist · AI Innovation Track',date:'Apr 2026',type:'achievement',brand:'etai',issuer:'ET-AI HACKATHON 2026',badge:'Semi-Finalist'},
  {title:'Google IT Support',description:'Google · Professional Certificate',date:'Nov 2025',type:'certificate',brand:'google',issuer:'GOOGLE',badge:'Professional Certificate'},
  {title:'Oracle Cloud Infrastructure',description:'2025 Generative AI Professional',date:'Oct 2025',type:'certificate',brand:'oracle',issuer:'ORACLE',badge:'Generative AI'},
  {title:'Fibonacci SOIT Hackathon',description:'Finalist · Coding Thinker',date:'Jan 2025',type:'achievement',brand:'fibonacci',issuer:'CODING THINKER',badge:'Finalist'},
];
export const education = [
  {school:'Vellore Institute of Technology',degree:'B.Tech · Computer Science & Engineering (AI & ML)',date:'Jul 2023 – Jun 2027 · Expected',score:'9.28',label:'CGPA'},
  {school:'Maharishi Vidya Mandir',degree:'CBSE · Senior Secondary',date:'Apr 2021 – Mar 2023',score:'92.80%',label:'SCORE'},
];
