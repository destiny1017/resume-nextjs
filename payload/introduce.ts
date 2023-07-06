import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '언제나 ‘이게 최선일까?’를 고민하고 비효율을 가만히 방치하지 못하는 개발자로서, 항상 스스로 개선점을 찾아내고 해결책을 찾아내며 지속적인 서비스 품질의 향상을 위해 노력합니다.',
    '고졸/학원 출신이라는 편견을 깨고자 항상 공부를 게을리하지 않으며 맡은 모든 일에 프로의식을 가지고 임합니다.',
  ],
  sign: 'Daeho',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
