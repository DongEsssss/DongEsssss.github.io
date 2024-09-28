import { Divider, Typography } from "@mui/material";
import tech_skill from "../../../asset/data/tech.json";
import version_control from "../../../asset/data/version.json";
import database_control from "../../../asset/data/database.json";
import tool_control from "../../../asset/data/usetool.json";
import "./TechStack.scss";
import { useState, useEffect } from "react";
import { Database, Technology, UseTool, Version } from "../../../type/@types";

const TechStack = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [versioncontrol, setVersionControl] = useState<Version[]>([]);
  const [databasecontrol, setDatabaseControl] = useState<Database[]>([]);
  const [usetool, setUseTool] = useState<UseTool[]>([]);

  useEffect(() => {
    setTechnologies(tech_skill.technologies);
    setVersionControl(version_control.version_control);
    setDatabaseControl(database_control.database_control);
    setUseTool(tool_control.tool);
  }, []);

  return (
    <section className="tech-section">
      <Typography className="title" fontSize={50} fontWeight={1000}>
        Tech Stack
      </Typography>
      <div className="stack-box">
        <Typography fontSize={30} fontWeight={1000}>
          Front-End
        </Typography>
        <div className="box">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="stackItem" // 일반 클래스 적용
              style={{ backgroundColor: item.color }}
            >
              <Typography
                variant="body1"
                width={"200px"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  fontWeight: "bold",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                    color: "white",
                  }}
                />
                {item.name}
              </Typography>
              <div className="description">
                <Divider
                  sx={{ margin: "10px 0px", backgroundColor: "black" }}
                />
                <Typography variant="body2" fontWeight={600}>
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <Typography fontSize={30} fontWeight={1000}>
          DataBase
        </Typography>
        <div className="box">
          {databasecontrol.map((item, index) => (
            <div
              key={index}
              className="stackItem" // 일반 클래스 적용
              style={{ backgroundColor: item.color }}
            >
              <Typography
                variant="body1"
                width={"200px"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  fontWeight: "bold",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                    color: "white",
                  }}
                />
                {item.name}
              </Typography>
              <div className="description">
                <Divider
                  sx={{ margin: "10px 0px", backgroundColor: "black" }}
                />
                <Typography variant="body2" fontWeight={600}>
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        <Typography fontSize={30} fontWeight={1000}>
          Version-Control
        </Typography>
        <div className="box">
          {versioncontrol.map((item, index) => (
            <div
              key={index}
              className="stackItem" // 일반 클래스 적용
              style={{ backgroundColor: item.color }}
            >
              <Typography
                variant="body1"
                width={"200px"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  fontWeight: "bold",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                    color: "white",
                  }}
                />
                {item.name}
              </Typography>
              <div className="description">
                <Divider
                  sx={{ margin: "10px 0px", backgroundColor: "black" }}
                />
                <Typography variant="body2" fontWeight={600}>
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <Typography fontSize={30} fontWeight={1000}>
          Tool
        </Typography>
        <div className="box">
          {usetool.map((item, index) => (
            <div
              key={index}
              className="stackItem" // 일반 클래스 적용
              style={{ backgroundColor: item.color }}
            >
              <Typography
                variant="body1"
                width={"200px"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  fontWeight: "bold",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                    color: "white",
                  }}
                />
                {item.name}
              </Typography>
              <div className="description">
                <Divider
                  sx={{ margin: "10px 0px", backgroundColor: "black" }}
                />
                <Typography variant="body2" fontWeight={600}>
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
