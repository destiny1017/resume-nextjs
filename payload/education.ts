import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '정보처리기사',
      subTitle: '19년도 산업기사취득 후 응시기준(산업기사 이후 2년 실무) 충족 하여 기사 취득',
      startedAt: '2021-09',
      //       endedAt: '2021-09',
    },
    {
      title: 'KG ITBANK',
      subTitle: 'Java 웹개발자 양성 교육 및 CS단과과정 총 1100시간 이수',
      startedAt: '2018-09',
      endedAt: '2019-03',
    },
    {
      title: '포항해양과학고등학교',
      subTitle: '해양정보과(항해) 졸업',
      startedAt: '2007-02',
      endedAt: '2009-02',
    },
  ],
};

export default education;
