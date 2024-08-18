import Start from '../start'
import Intro from '../modal/intro';
// import Resume from '../resume'
import Project from '../project'
import TechStack from '../TechStack'
import AboutME from '../aboutme';
import Contact from '../contact';



export default function Home() {
  // const scrollContainerRef = useRef<HTMLDivElement>(null);

  // const handleWheel = (e: WheelEvent) => {
  //   e.preventDefault();
  //   if (scrollContainerRef.current) {
  //     const { scrollTop } = scrollContainerRef.current;
  //     const delta = e.deltaY > 0 ? 1 : -1;
  //     const pageHeight = window.innerHeight;
  //     const newScrollPosition = scrollTop + delta * pageHeight;

  //     scrollContainerRef.current.scrollTo({
  //       top: newScrollPosition,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;
  //   if (scrollContainer) {
  //     scrollContainer.addEventListener('wheel', handleWheel);
  //   }
  //   return () => {
  //     if (scrollContainer) {
  //       scrollContainer.removeEventListener('wheel', handleWheel);
  //     }
  //   };
  // }, []);
  return (
    <main>
      <div className="scroll-container">
        <div className="snap-section first-snap" >
          <Start />
        </div>
        <div className="snap-section second-snap" >
          <AboutME />
        </div>
        <div className="snap-section thrid-snap" >
          <TechStack />
        </div>
        <div className="snap-section fourth-snap" >
          <Project />
        </div>
        <div className="snap-section fifth-snap" >
          <Contact />
        </div>
      </div >
    </main >
  )
}
