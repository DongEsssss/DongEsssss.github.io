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
              - UI/UX 설계 및 개발
              <br />
              <br />
              <span className="bold">기술 스택 </span>
              <br />
              - HTML5, CSS3, SASS, Typescript, React, Angular, REST API,
              Javascript
              <br />
              <br />
              <span className="bold">주요성과</span>
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
              <br />- 다양한 버그를 신속하게 해결하고 새로운 기능을 추가하여
              제품 안정성 향상
              <br />- 클린 코드 원칙을 준수하여 유지보수성 높은 코드 작성
              <br />
              <br />
              <Typography fontSize={20} fontWeight={"bold"} mb={1}>
                프로젝트: B사 프로젝트 (버스 데이터 실시간 모니터링)
              </Typography>
              - 프로젝트 기간: 2022.10 ~ 2023.05 (약 6개월)
              <br />
              - 역할: 퍼블리싱
              <br />
              - 팀 구성: 4명
              <br />
              - 기술 스택: HTML5, SCSS, Typescript, Angular
              <br />
              - 프로젝트 개요: B 프로젝트는 운행 중인 버스의 데이터를 실시간으로
              받아 차량의 속도, 타이어 공기압 등의 운행중인 차량의 정보를
              모니터링할 수 있는 시스템을 구축하는 것을 목표로 했습니다.
              <br />
              - 기여 사항:
              <br />
              &emsp;a. UI/UX 설계: 협업사 디자이너와 긴밀히 협력하여 사용자
              중심의 UI/UX를 설계하고, 실시간 데이터를 효과적으로 시각화할 수
              있는 인터페이스를 구현했습니다.
              <br />
              &emsp;b. 반응형 웹 디자인 구현: SCSS와 CSS를 활용하여 다양한
              디바이스에서 최적화된 사용자 경험을 제공할 수 있는 반응형 웹
              디자인을 구현했습니다.
              <br />
              &emsp;c. NPM 이해도 상향: 프로젝트의 의존성 충돌 문제를 해결하고
              최신 버전의 라이브러리를 안전하게 사용하여 코드 안정성을
              확보했습니다.
              <br />
              <br />
              <Typography fontSize={20} fontWeight={"bold"} mb={1}>
                프로젝트: Q 프로젝트 (플랫폼 개발)
              </Typography>
              - 프로젝트 기간: 2023.07 ~ 2023.10
              <br />
              - 역할: 퍼블리싱
              <br />
              - 팀 구성: 4명
              <br />
              - 기술 스택: HTML5, SCSS, Typescript, React, REST API
              <br />
              - 프로젝트 개요: Q 프로젝트는 클라우드 기반의 실시간 데이터 공유
              플랫폼으로, 데이터를 쉽게 공유하고 관리할 수 있는 서비스입니다.
              <br />
              - 기여 사항:
              <br />
              &emsp;a. React 기반 컴포넌트 설계 및 개발: 모듈화된 컴포넌트를
              설계하고 개발해 재사용성과 유지 보수성을 높였습니다.
              <br />
              &emsp;b. Typescript 도입 및 활용: 정적 타입을 사용해 잠재적인
              버그를 사전에 방지했습니다.
              <br />
              &emsp;c. REST API와의 효율적인 연동: 실시간 데이터를 사용자
              인터페이스에 빠르게 반영할 수 있도록 데이터 처리 로직을
              최적화했습니다.
              <br />
              &emsp;d. 반응형 웹 디자인 구현: SCSS를 사용하여 다양한 해상도의
              디바이스에서 최적화된 사용자 경험을 제공했습니다.
              <br />
              <br />
              <Typography fontSize={20} fontWeight={"bold"} mb={1}>
                프로젝트: Storybook 개발
              </Typography>
              - 프로젝트 기간: 2024.02 ~ 2024.05
              <br />
              - 역할: 퍼블리싱
              <br />
              - 팀 구성: 1명
              <br />
              - 기술 스택: HTML5, SCSS, Typescript, React
              <br />
              - 프로젝트 개요: 내부 개발 효율성을 높이고 유지 보수 비용을
              절감하기 위해 자체 Storybook을 개발하였습니다.
              <br />
              - 기여 사항:
              <br />
              &emsp;a. 주도적 디자인 리드: UI 컴포넌트의 일관성을 유지하고,
              디자인 시스템 구축을 주도하여 개발 및 유지보수 작업을
              효율화했습니다.
              <br />
              &emsp;b. 반응형 웹 디자인 구현: 다양한 디바이스에 최적화된 UI를
              개발했습니다.
              <br />
              <br />
              <Typography fontSize={20} fontWeight={"bold"}>
                프로젝트: Q 프로젝트 서브 개발 (소프트웨어 개발)
              </Typography>
              - 프로젝트 기간: 2024.06 ~ 2024.09
              <br />
              - 역할: 퍼블리싱
              <br />
              - 팀 구성: 4명
              <br />
              - 기술 스택: HTML5, SCSS, Typescript, React, REST API
              <br />
              - 프로젝트 개요: Q 프로젝트 : Q 프로젝트의 서비스를 이용할 수 있는
              소프트웨어 개발
              <br />
              - 기여 사항:
              <br />
              &emsp;a. 마켓플레이스 소프트웨어 개발: 회사 내부에서 효율적인
              데이터 공유가 가능하도록 퍼블리싱 작업을 수행했습니다.
              <br />
              &emsp;b. REST API 연동 최적화: 실시간 데이터 처리 및 업데이트
              기능을 구현했습니다.
              <br />
              &emsp;c. UI/UX 개선: 사용자들이 간편하게 데이터를 관리할 수 있도록
              직관적인 UI/UX를 설계했습니다.
              <br />
              &emsp;d. 코드 모듈화 및 유지보수성 강화: 컴포넌트를 모듈화하여
              코드의 유지보수성을 높이고, 확장성을 고려한 구조로 설계했습니다.
            </Typography>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Career;
