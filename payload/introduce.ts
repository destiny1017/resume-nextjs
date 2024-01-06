import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요. 항상 내 서비스에 애정과 자부심을 갖고 개발하는 개발자, 김대호입니다.',
    '저는 5년차 서버 개발자로서, 포털 서비스 회사와 형상관리 솔루션 회사를 거치며 다양한 개발을 경험해왔습니다. SpringBoot와 Python을 활용한 서버 개발에 능하며, 항상 비즈니스의 근본적인 목적을 이해하고 목적에 적합한 설계를 하는 것을 가장 중시합니다.',
    '또한 온갖 장애 상황에도 흔들림 없는 고가용성 시스템을 구축하는 것에 큰 흥미를 느끼며, 상당히 꼼꼼한 성격으로 남들이 그냥 지나치는 사소한 문제점들도 곧잘 발견해내는 편입니다. 그리고 그만큼 테스트 코드 작성 역시 중시하여 항상 다양한 케이스에 대한 테스트를 꼼꼼히 작성하려고 노력합니다.',
    '저는 다른 것보다 내 전문 분야에서의 인정 받는 것에서 큰 기쁨을 느껴 내가 담당한 업무에서 최고의 결과를 내기 위해 항상 진심으로 일하며, 퇴근 후나 주말에도 항상 학습을 게을리하지 않으려 노력합니다. "적당히 이 정도만 하면 됐지"하는 문화보다, 단 1%의 품질 향상을 위해서 끊임 없는 연구와 도전을 아끼지 않는 조직에서 함께 일하고 싶습니다 :)',
  ],
  sign: 'Daeho',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
