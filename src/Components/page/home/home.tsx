import UseTool from '../usetool'
import Intro from '../intro'
// import Resume from '../resume'
import Project from '../project'
import Skill from '../skill/skill'


export default function Home() {
  return (
    <main>
      <Intro />
      <UseTool />
      <Skill />
      <Project />
      {/* <Resume /> */}
    </main>
  )
}
