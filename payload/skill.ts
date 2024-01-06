import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'Spring Boot',
      level: 3,
    },
    {
      title: 'JPA',
      level: 3,
    },
    {
      title: 'JUnit5',
      level: 3,
    },
    {
      title: 'QueryDSL',
      level: 2,
    },
    {
      title: 'Docker',
      level: 2,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'Elasticsearch',
      level: 2,
    },
    {
      title: 'AWS',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'Oracle',
      level: 2,
    },
    {
      title: 'Redis',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Thymeleaf',
      level: 3,
    },
    {
      title: 'Javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'IntelliJ',
    },
    {
      title: 'PyCharm',
    },
    {
      title: 'Git',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'Rancher',
    },
    {
      title: 'Nginx',
    },
    {
      title: 'Ubuntu',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
