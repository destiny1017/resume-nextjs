import { faEnvelope, faPhone, faBlog, faLink } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
// import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
    //     {
    //       title: 'Facebook',
    //       link: 'https://www.facebook.com/profile.php?id=100003938973583',
    //       icon: faFacebook,
    //     },
    {
      title: 'Resume-html',
      link: 'https://destiny1017.github.io/resume-nextjs/',
      icon: faLink,
    },
  ],
  notice: {
    title: 'Resume-html을 클릭하면 브라우저에서 좀 더 편하게 보실 수 있습니다.',
    icon: faBell,
  },
};

export default profile;
