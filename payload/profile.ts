import { faEnvelope, faPhone, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile_kdh.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김대호',
    small: '(Diang)',
  },
  contact: [
    {
      title: 'eogh6428@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '010-8306-1226',
      icon: faPhone,
      //       badge: true,
    },
    {
      title: 'Github',
      link: 'https://github.com/destiny1017',
      icon: faGithub,
    },
    {
      title: 'Blog',
      link: 'https://kdh1226.tistory.com',
      // icon: faRss,
      icon: faBlog,
    },
    {
      link: 'https://www.facebook.com/profile.php?id=100003938973583',
      icon: faFacebook,
    },
  ],
  notice: {
    title: '페이스북 메시지는 확인하지 않으니 문자나 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
