import profile from './assets/profile.jpeg'
import './App.css'
import { cv } from './data/cv.ts'
import {links} from './data/links.ts'
import {guides} from './data/guides.ts'

import {Header} from './components/Header.tsx'
import {Skills} from './components/Skills.tsx'
import {Contacts} from './components/Contact.tsx'
import {Experience} from './components/Experience.tsx'
import {Guides} from './components/Guides.tsx'
import {BlogFeed} from './components/BlogFeed.tsx'

function App() {

  return (
    <div className="portfolio-container">
      <Header name={cv.name} role={cv.role} profileImage={profile} />
      <Skills skills={cv.skills} />
      <Experience experience={cv.experience} />
      <Guides guides={guides} />
      <BlogFeed />
      <Contacts items={links} />
    </div>
  )
}

export default App
