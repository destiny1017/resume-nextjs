import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Nate 고객센터 레거시 개편',
      startedAt: '2023-01',
      where: 'SK Communications',
      descriptions: [
        {
          content:
            '복잡하게 분산되어 있던 각 도메인과 서버들을 통합, 서버 대수 절반 수준으로 줄여 비용 절감',
        },
        { content: '고객센터 PC버전 및 컨텐츠 관리 백오피스 전담 개발' },
        { content: '테스트코드 도입, 모든 비즈니스 로직에 대한 테스트 작성' },
        { content: '어드민 서버 Spring Interceptor활용 모든 request에 대한 접근 제어 기능 도입' },
        { content: 'Circuit Breaker Pattern 활용한 외부 API 장애 대응 시스템 개발' },
        //         {
        //           content: 'Add Foo Feature in 2019',
        //           weight: 'MEDIUM',
        //           descriptions: [
        //             { content: 'Integer ut libero eu libero mattis rutrum at at urna' },
        //             { content: 'Integer non turpis ante' },
        //           ],
        //         },
        //         {
        //           content: 'Launched Bar Service in 2018',
        //           weight: 'MEDIUM',
        //           descriptions: [
        //             { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
        //             {
        //               content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
        //             },
        //           ],
        //         },
      ],
    },
    {
      title: '심리테스트 제작&수행 사이트',
      startedAt: '2022-07',
      endedAt: '2022-09',
      where: '1인 사이드프로젝트',
      descriptions: [
        { content: 'AWS EC2, RDS를 통해 클라우드 서버, DB구축' },
        { content: 'Nginx를 통해 Reverse Proxy적용' },
        { content: 'Certbot 인증서를 통해 SSL인증 적용' },
        { content: 'EC2 인스턴스 내 Swap Memory적용하여 시스템 업데이트로인한 메모리 부족 대비' },
        { content: 'Jacoco 코드 커버리지 적용, 라인 커버리지 80%↑ 상시 유지' },
        { content: 'Spring Security를 통한 Oauth2 로그인 구현' },
        {
          content:
            '심리테스트 제작 컨텐츠 관리 백오피스, 테스트수행 고객서비스 Back/Front 전체 개발',
        },
      ],
    },
    {
      title: 'ShinhanLife IT통합 차세대 프로젝트',
      startedAt: '2020-09',
      endedAt: '2021-05',
      where: 'AZSoft',
      descriptions: [
        { content: '신한생명&오렌지라이프 전산 시스템 통합 프로젝트' },
        { content: '일평균 3000건 이상 신청되는 배포 시스템 모니터링 및 결함 조치' },
        {
          content:
            '대량 배포 시의 속도 개선을 위해 로직 개선, 초당 처리건수 약 10건 -> 30건 가량의 성능향상',
        },
        { content: '다양한 타사 시스템과의 연계 API개발' },
        {
          content:
            '형상관리 프로세스 관련 변경사항 및 화면 UI 변경 등 100여가지 이상의 추가 요구사항 개발',
        },
        { content: '각 업무 시스템별로 eCAMS를 통한 CI/CD 프로세스 적용 및 관리' },
      ],
    },
    {
      title: '형상관리 솔루션 HTML전환 및 고도화',
      startedAt: '2020-05',
      endedAt: '2022-06',
      where: 'AZSoft',
      descriptions: [
        { content: 'Apache Flex기반의 프로젝트를 Servlet/HTML/JS기반으로 전환' },
        { content: '고객사와 지속적으로 커뮤니케이션 하며 요구사항 정의 및 개발/테스트 수행' },
        { content: '개발 및 운영 서버 어플리케이션 배포 및 운영 업무 수행' },
        {
          content:
            '매번 수작업으로하던 코드 전환 작업을 정규표현식을 활용하여 전환하여 전환 시간을 크게 단축',
        },
        { content: 'ax5Grid OpenSource Library 코드를 자사 솔루션에 맞는 기능으로 커스텀' },
      ],
    },
  ],
};

export default project;
