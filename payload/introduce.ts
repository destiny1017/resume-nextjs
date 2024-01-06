import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요. 항상 내 서비스에 애정과 자부심을 갖고 개발하는 개발자, 김대호입니다.',
    '저는 5년차 서버 개발자로서, 포털 서비스 회사와 형상관리 솔루션 회사를 거치며 다양한 개발을 경험해왔습니다. SpringBoot와 Python을 활용한 서버 개발에 능하며, 항상 비즈니스의 근본적인 목적을 이해하고 목적에 적합한 설계를 하는 것을 가장 중시합니다.',
    '또한 온갖 장애 상황에도 흔들림 없는 고가용성 시스템을 구축하는 것에 큰 흥미를 느끼며, 테스트 코드 작성을 중시하여 항상 다양한 케이스에 대한 테스트를 꼼꼼히 작성하려고 노력합니다.'
  ],
  sign: 'Daeho',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
