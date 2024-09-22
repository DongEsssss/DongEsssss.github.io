import { Box, Typography } from "@mui/material";

import "./career.scss";
import quantumsurf_logo from "../../../asset/image/quantmsurf-logo.png";

const Career = () => {
  return (
    <section>
      <Typography className="title" fontSize={50} fontWeight={1000}>
        CAREER
      </Typography>
      <Box sx={{ marginTop: "50px" }}>
        <div className="career">
          <div className="career-logo">
            <img src={quantumsurf_logo} alt="quantumsurf_logo" />
          </div>
          <div className="career-text">
            <Typography className="company-title">(주) 퀀텀서프</Typography>
            <Typography className="company-date">22.10 - 24.09</Typography>
            <Typography className="company-subtitle">
              SI/ERM 기업으로, 2022년부터 데이터 주권과 신뢰를 보장하는 분산형
              데이터 공유 플랫폼을 서비스를 개발하는 중입니다.
            </Typography>
            <Typography className="company-text" variant="body1">
              <span className="bold">핵심 업무 및 기술 스택 핵심 업무</span>
              <br />
              - 플랫폼 개발 및 유지보수
              <br />
              <br />
              <span className="bold">기술 스택 </span>
              <br />
              - HTML5, CSS3, SASS, Typescript, React, Angular, RESTAPI,
              Javascript
              <br />
              <br />
              <span className="bold">주요성과</span>
              <br />
              - 애자일 방법론을 통해 개선한 웹 디자인 개발로 유저들로부터
              긍정적인 피드백 획득
              <br />
              - 다국어 지원 기능 추가로 인해 외국인 사용자 증가
              <br />
              - 웹 사이트 성능 최적화를 통해 페이지 로딩 시간을 30% 단축
              <br />- 타 팀과의 원활한 커뮤니케이션으로 완성도 높은 양질의
              프로젝트 개발 완료
              <br />
              <br />
              <span className="bold">팀 협업 및 커뮤니케이션 경험</span>
              <br />
              - 협업사 디자이너와 긴밀하게 소통하여 직관적이고 편리한 UI/UX 설계
              및 개발
              <br />
              - Git을 사용한 버전 관리 및 Github, Gitlab을 통한 협업 환경에서
              코드 관리
              <br />- 백엔드에 대한 기본적인 이해를 바탕으로, 프론트엔드와
              백엔드 간의 원활한 조율을 통해 최적화된 웹 개발을 실현
              <br />
              <br />
              <span className="bold">문제 해결 및 유지보수 경험</span>
              <br />- 트래픽 증가로 인한 성능 저하를 코드 리팩토링을 통해
              최적화, 성능 개선
              <br /> - 다양한 버그를 신속하게 해결하고 새로운 기능을 추가하여
              제품 안정성 향상
              <br />- 클린 코드 원칙을 준수하여 유지보수성 높은 코드 작성
            </Typography>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Career;
