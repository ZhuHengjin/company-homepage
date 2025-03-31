import { Link } from 'react-router-dom';
import frankPic from '../assets/Frank.jpg';
import justinPic from '../assets/Justin.jpg';
import jessicaPic from '../assets/Jessica.jpg';

const AboutPage = () => {
  const teamMembers = [
    {
      name: '吴星耀',
      position: 'CEO, 模型科学家',
      image: justinPic,
    },
    {
      name: '顾语函',
      position: 'COO',
      image: jessicaPic
    },
    {
      name: '朱恒进',
      position: '算法工程师',
      image: justinPic
    },
    {
      name: '范嘉非',
      position: '软件工程师',
      image: frankPic,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title">关于我们</h1>
            <p className="subtitle">
              UntilityMax是一家进行投资算法与研究的公司<br />
              我们的使命是让技术为投资者带来利益。
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="h2-title">我们的故事</h2>
              <p className="general-text">
                UtilityMax成立于2015年，由一群对金融和技术充满热情的专业人士创建，致力于通过创新的金融解决方案，帮助客户实现财务自由。
              </p>
              <p className="general-text">
                多年来，我们不断发展壮大，现已成为行业的领军企业，为全球数千家企业和个人提供高质量的金融咨询服务。
              </p>
              <p className="general-text">
                我们的成功源于对客户的承诺：提供最专业、最透明、最贴心的服务，始终将客户的利益放在首位。
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img 
                  src="https://images.ctfassets.net/kftzwdyauwt9/32cmTSUIF5POX5FMuoHJwO/be8b42b8016957ca28e07274f05f1d3d/stangel-2022-0527.webp?w=3840&q=90&fm=webp"
                  alt="Our story" 
                  className="general-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="h2-title">团队成员</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="general-image"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;