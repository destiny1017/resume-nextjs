import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요. 항상 내 서비스에 애정과 자부심을 갖고 개발하는 개발자, 김대호입니다.',
    '저는 국내 3위 포털사이트인 Nate 개발팀에서 백엔드 개발자로 업무를 수행하고 있습니다.\n현재 팀에서 고객센터 레거시 개편 프로젝트와 AI Chat 프로젝트를 성공적으로 진행시킨 경험이 있으며, 최근에는 신규 파트에서 레거시한 개발 문화를 청산하고 최신 트렌드에 적합한 역동적인 개발문화 정착을 위한 다양한 업무를 수행중입니다.',
    '"적당히 이 정도만 하면 됐지"하는 문화보다, 단 1%의 품질 향상을 위해서 끊임 없는 연구와 도전을 아끼지 않는 문화를 추구하는 조직에서 함께 시너지를 내며 동반 성장할 수 있기를 바랍니다 :)',
  ],
  sign: 'Daeho',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
