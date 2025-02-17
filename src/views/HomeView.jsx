import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import Publishing from '../components/Publishing'
import ProjectList from '../components/ProjectList'
import Contact from '../components/Contact'
import Main from '../components/Main'

const HomeView = () => {
  return (
    <>
        <Header />
        <Main>
          <Intro />
          <Skill />
          <Publishing />
          <ProjectList />
          <Contact />
        </Main>
    </>
    
  )
}

export default HomeView