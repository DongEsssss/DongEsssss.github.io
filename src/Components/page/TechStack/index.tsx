import { Icon, Typography } from "@mui/material";
import tech_skill from '../../../asset/data/tech.json';
import version_control from '../../../asset/data/version.json'
import './TechStack.scss';
import { useState, useEffect } from "react";

interface Technology {
  name: string;
  color: string;
  icon: string;
}
interface Version {
  name: string;
  color: string;
  icon: string;
}

const TechStack = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [versioncontrol, setVersionControl] = useState<Version[]>([]);

  useEffect(() => {
    setTechnologies(tech_skill.technologies);
    setVersionControl(version_control.version_control);
  }, []);

  return (
    <section className="tech-section">
      <Typography className="title" fontSize={50} fontWeight={1000}>
        Tech Stack
      </Typography>
      <div className="stack-box">
        <Typography fontSize={25} fontWeight={1000}>
          Front-End
        </Typography>
        <div className="box">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="stackItem" // 일반 클래스 적용
              style={{ backgroundColor: item.color }}
            >
              <Typography variant="body1" width={'200px'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontWeight: 'bold' }}>
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{ width: '40px', height: '40px', marginRight: '10px', color: 'white' }}
                />
                {item.name}
              </Typography>
              <div className="description">
                <hr />
                이렇게 이해했다
              </div>
            </div>
          ))}
        </div>
        <Typography fontSize={20} fontWeight={1000}>
          Version-Control
        </Typography>
        <div className="box">
          {versioncontrol.map((item, index) => (
            <div
              key={index}
              className="stackItem" // 일반 클래스 적용
              style={{ backgroundColor: item.color }}
            >
              <Typography variant="body1" width={'200px'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontWeight: 'bold' }}>
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{ width: '40px', height: '40px', marginRight: '10px', color: 'white' }}
                />
                {item.name}
              </Typography>
              <div className="description">
                <hr />
                이렇게 이해했다
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
