import React from 'react'
import About from './About'
import Award from './Award'
import Clients from './Clients'
import Contact from './Contact'
import Download from './Download'
import Header from './Header'
import Manage from './Manage'
import Question from './Question'
import Sponsore from './Sponsore'

const Content = () => {
  return (
    <>
    <Header/>
    <Award/>
    <About/>
    <Manage/>
    <Download/>
    <Clients/>
    <Question/>
    <Sponsore/>
    <Contact/>
    </>
  )
}

export default Content