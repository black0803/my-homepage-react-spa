// import static files and dependencies
import './App.css'
import profile from './assets/profile.jpeg'

// import functions
import { useState } from 'react'

// import datas
import { cv } from './data/cv.ts'
import {links} from './data/links.ts'
import {guides} from './data/guides.ts'
import {certs} from './data/cert.ts'

// import components
import {Header} from './components/Header.tsx'
import {Skills} from './components/Skills.tsx'
import {Contacts} from './components/Contact.tsx'
import {Experience} from './components/Experience.tsx'
import {Guides} from './components/Guides.tsx'
import {BlogFeed} from './components/BlogFeed.tsx'
import { Navigation } from './components/Navigation.tsx'
import { Certificates } from './components/Certificates.tsx'

function App() {
  const [state, setState] = useState<Number>(0);
  
  return (
    <div className="portfolio-container">
      <Header name={cv.name} role={cv.role} profileImage={profile} />
      <Navigation setState={setState} />
      {state === 0 && <div><Skills skills={cv.skills} /><Experience experience={cv.experience} /><Certificates certs={certs} /></div>}
      {state === 1 && <Guides guides={guides} />}
      {state === 2 && <BlogFeed />}
      <Contacts items={links} />
    </div>
  )
}

export default App
