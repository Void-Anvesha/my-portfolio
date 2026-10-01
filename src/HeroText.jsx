import React from 'react';
import {profile} from './data';
import './hero-text.css';

export default function HeroText(){
  return <><h1>{profile.headline}</h1><p className="hero-description">{profile.description}</p></>;
}
