import React from 'react'
import UseTool from '../usetool'
import Intro from '../intro'
import Resume from '../resume'
import Project from '../project'

export default function Home() {
  return (
    <main>
      <section>
        <Intro />
        <UseTool />
        <Project />
        <Resume />
      </section>
    </main>
  )
}
