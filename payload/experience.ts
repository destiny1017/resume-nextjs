import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'SK커뮤니케이션즈',
      position: 'Nate 개발팀',
      startedAt: '2022-12',
      descriptions: [
        'Nate 고객센터 레거시 개편',
        'Nate 고객센터 운영 및 유지보수',
        'Nate AI챗 기사 요약 서버 개발',
      ],
      skillKeywords: [
        'Java8',
        'Spring Boot',
        'JPA',
        'QueryDSL',
        'MySQL',
        'Python',
        'Elasticsearch',
        'Thymeleaf',
        'HTML/CSS/JS',
        'Nginx',
        'Docker',
        'GitLab',
        'Jenkins',
        'Kubernetes',
      ],
    },
    {
      title: 'AZSoft',
      position: '솔루션 개발팀',
      startedAt: '2019-05',
      endedAt: '2022-06',
      descriptions: [
        '금융권 형상관리 솔루션 커스터마이징',
        'flex기반 레거시 솔루션 HTML전환 개발',
        '고객사 형상관리 장애 대응 및 유지보수',
      ],
      skillKeywords: ['Java8', 'HTML/CSS/JS', 'JQuery', 'Oracle', 'Tomcat', 'Apache Flex'],
    },
  ],
};

export default experience;
