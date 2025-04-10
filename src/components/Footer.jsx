import { Link } from 'react-router-dom';
import { FaTwitter, FaYoutube, FaLinkedin, FaGithub, FaInstagram, FaWeixin } from 'react-icons/fa';
import XiaohongshuIcon from '../assets/icons/XiaohongshuIcon';

// Custom WeChat Official Account icon
const WeChatOfficialIcon = () => (
  <div className="relative inline-flex items-center justify-center">
    <FaWeixin size="1.25em" />
    <span className="absolute -top-1 -right-1 bg-accent-blue rounded-full w-2 h-2"></span>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: '研究',
      links: [
        { name: '研究指数', path: '/research/index' },
        { name: '研究概览', path: '/research/overview' },
        { name: '研究驻场', path: '/research/residency' },
        { name: '最新进展', path: '/research/advancements' },
      ]
    },
    {
      title: 'UtilityMax',
      links: [
        { name: '探索UtilityMax', path: '/utilitymax/explore' },
        { name: '团队', path: '/utilitymax/team' },
        { name: '企业版', path: '/utilitymax/enterprise' },
        { name: '教育版', path: '/utilitymax/education' },
        { name: '定价', path: '/utilitymax/pricing' },
      ]
    },
    {
      title: '公司',
      links: [
        { name: '关于我们', path: '/about' },
        { name: '公司章程', path: '/about/charter' },
        { name: '职业机会', path: '/careers' },
        { name: '品牌', path: '/brand' },
      ]
    },
    {
      title: '条款和政策',
      links: [
        { name: '使用条款', path: '/terms' },
        { name: '隐私政策', path: '/privacy' },
        { name: '安全', path: '/security' },
        { name: '其他政策', path: '/policies' },
      ]
    },
  ];
  
  const socialLinks = [
    { icon: <FaTwitter size="1.25em" />, path: 'https://twitter.com' },
    { icon: <FaYoutube size="1.25em" />, path: 'https://youtube.com' },
    { icon: <FaLinkedin size="1.25em" />, path: 'https://linkedin.com' },
    { icon: <FaGithub size="1.25em" />, path: 'https://github.com' },
    { icon: <FaInstagram size="1.25em" />, path: 'https://instagram.com' },
    { icon: <XiaohongshuIcon size="1.25em" className="transform translate-y-[-1px]" />, path: 'https://www.xiaohongshu.com/user/profile/6537211f000000000400aad5', title: '小红书' },
    { icon: <WeChatOfficialIcon />, path: '#', title: '微信公众号' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container-custom">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-medium text-sm text-gray-800 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.path}
                      className="text-sm text-gray-500 hover:text-black transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
        
        <div className="pt-8 border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-gray-500">
              UtilityMax © {currentYear}
            </p>
          </div>
          
          <div className="flex space-x-6 items-center">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                className="text-gray-400 hover:text-accent-blue transition-colors text-xl"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;