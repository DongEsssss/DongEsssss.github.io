import UseTool from '../usetool'
import Intro from '../intro'
import Resume from '../resume'
import Project from '../project'
import Archiving from '../archiving/archiving'

export default function Home() {
  return (
    <main>
      <section>
        <Intro />
        <UseTool />
        <Archiving />
        <Project />
        <Resume />
      </section>
    </main>
  )
}
