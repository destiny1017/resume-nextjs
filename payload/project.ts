import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Nate AI Chat 고도화 프로젝트',
      startedAt: '2023-09',
      endedAt: '2023-12',
      where: 'SK Communications',
      descriptions: [
        {
          content:
            'ChatGPT활용 서비스인 Nate AI챗에 네이트 뉴스를 연동하기 위한 API서버 구축 프로젝트',
        },
        { content: '프로젝트 메인 개발자로 전체 시스템 설계 및 구성 진행' },
        {
          content:
            '약 2만개 가량의 일일 뉴스 데이터 가공 및 적재를 위한 Python/ChromaDB 배치 서버 개발',
        },
        { content: '사용자 질의와 연관된 기사를 제공해주기 위한 Python/fastAPI API서버 개발' },
        { content: 'ChromaDB의 버그 이슈로 ChromaDB -> Elasticsearch로 전환 작업 진행' },
        { content: 'Elasticseach 클러스터 구성 및 개발 서버에서의 Split Brain 문제 해결' },
        {
          content:
            'nGrinder를 통한 부하 테스트를 진행하며 API 성능 개선 진행, Avg TPS 7 -> 23으로 개선',
        },
        {
          content:
            '배치서버 대량 처리 성능 이슈로 인한 로직 개선, 최초 로직 대비 10배 이상의 속도 향상',
        },
        { content: 'Gitlab, Jenkins, Rancher를 통한 CI 파이프라인 구축' },
        {
          content:
            '뉴스 DB서버 특성상 L4 VIP 사용 불가하여 애플리케이션 내에서 자체 DB 이중화 로직 개발',
        },
        { content: 'Redis를 활용한 배치서버 이중화 로직 개발' },
      ],
    },
    {
      title: 'Nate고객센터 레거시 개편 및 운영',
      startedAt: '2023-01',
      endedAt: '2023-09',
      where: 'SK Communications',
      descriptions: [
        { content: '고객센터 외부 상담 솔루션 클라우드 전환에 따른 레거시 개편 프로젝트' },
        { content: 'JSP, ASP 혼용된 레거시 코드 -> SpringBoot/JPA/Thymeleaf 코드로 전환 개발' },
        { content: '고객센터 PC Web 개발 및 고객센터 관리 어드민 시스템 개발' },
        { content: '고객센터와 외부 상담 솔루션 API 연동 개발' },
        {
          content:
            '복잡하게 분산되어 있던 각 도메인과 서버들을 통합, 서버 대수 절반 수준으로 줄여 비용 절감',
        },
        { content: '어드민 서버 보안 향상을 위해 모든 request에 대한 접근 제어 기능 개발' },
        { content: 'Junit5 단위, 통합테스트 코드 작성, CI 프로세스에 적용하여 테스트 자동화 구축' },
        { content: 'Cypress e2e 테스트 코드 작성' },
        { content: 'Prometheus, Grafana를 활용한 고객센터 모니터링 및 알람 시스템 구축' },
        { content: '오픈 이후 서비스 담당자로서 운영하며 다양한 이슈 처리' },

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
      title: '형상관리 레거시 시스템 HTML전환 및 고도화',
      startedAt: '2019-05',
      endedAt: '2022-06',
      where: 'AZSoft',
      descriptions: [
        { content: '다양한 금융권 기업의 형상관리 고도화 프로젝트 진행' },
        { content: 'Apache Flex기반의 레거시 코드를 HTML/JS로 전환 작업 수행' },
        { content: '다양한 타사 시스템과의 연계 API개발' },
        { content: '일평균 3000건 이상 신청되는 배포 시스템 모니터링 및 결함 조치' },
        {
          content:
            '대량 신청 시의 처리속도 개선을 위해 비효율적인 구간을 찾아 로직 개선, TPS 10 -> 30 가량의 성능향상',
        },
        {
          content:
            '매번 수작업으로하던 코드 전환 작업을 정규표현식을 활용하여 전환 시간을 크게 단축',
        },
        { content: '오픈소스 라이브러리의 여러 코드를 커스텀하여 솔루션에 적합한 기능으로 개선' },
        { content: '신규 입사자를 위해 업무에 대한 다양한 문서 작성 및 교육진행' },
      ],
    },
    {
      title: '심리테스트 제작&수행 사이트 구축 개인 프로젝트',
      startedAt: '2022-08',
      endedAt: '2022-10',
      where: '1인 사이드프로젝트',
      descriptions: [
        { content: 'AWS EC2, RDS를 통해 클라우드 서버, DB구축' },
        { content: 'Nginx를 통해 Reverse Proxy적용' },
        { content: 'AWS Route53 통해 DNS적용(가비아 도메인 구매)' },
        { content: 'Certbot 인증서를 통해 SSL인증 적용' },
        { content: 'EC2 인스턴스 내 Swap Memory적용하여 시스템 업데이트로인한 메모리 부족 대비' },
        { content: 'Jacoco 코드 커버리지 적용, 라인 커버리지 80%↑ 상시 유지' },
        { content: 'Spring Security를 통한 Oauth2 로그인 구현' },
        {
          content:
            '심리테스트 제작 컨텐츠 관리 백오피스, 테스트수행 고객서비스 Back/Front 전체 개발',
        },
        { content: '운영중 비용 문제로 EC2(t2.micro) -> RaspberryPi 개인 서버로 전환' },
      ],
    },
  ],
};

export default project;
