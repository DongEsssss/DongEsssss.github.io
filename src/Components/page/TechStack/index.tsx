import { Box, Typography } from "@mui/material"
import tech_skill from '../../../asset/data/tech.json'
import './TechStack.scss'
import { useState, useEffect } from "react";

interface Technology {
  name: string;
  color: string;
}

const TechStack = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    setTechnologies(tech_skill.technologies);
  }, []);
  return (
    <section className="tech-section">
      <Typography className='title' fontSize={50} fontWeight={1000}>Tech Stack</Typography>
      <div className="stack-box">
        <div className="box">
          <Typography fontSize={20} fontWeight={1000}>Front-End</Typography>
          {technologies.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: item.color }}
            >
              {item.name}
              <div className={styles.description}>
                이렇게 이해했다
              </div>
            </div>
          ))}
        </div>
        <div className="box">
          <Typography fontSize={20} fontWeight={1000}>Version-Control</Typography>
          <div className="skill">
            Git
            GitHub
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
