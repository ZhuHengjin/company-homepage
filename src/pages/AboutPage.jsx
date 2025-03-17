import { motion } from 'framer-motion';
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-5">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="title">关于我们</h1>
            <p className="subtitle">
              UntilityMax是一家进行投资算法与研究的公司<br />
              我们的使命是让技术为投资者带来利益。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.42, 0, 0.58, 1]}}
            >
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
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img 
                  src= "https://images.ctfassets.net/kftzwdyauwt9/32cmTSUIF5POX5FMuoHJwO/be8b42b8016957ca28e07274f05f1d3d/stangel-2022-0527.webp?w=3840&q=90&fm=webp"
                  alt="Our story" 
                  className="general-image"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">我们的使命</h2>
            <p className="text-lg text-gray-600 mb-8">
              我们的使命是通过创新的金融科技和专业的咨询服务，帮助每个人实现财务自由和安全，推动金融普惠，让金融服务惠及更多人。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "创新",
                  description: "不断探索和应用前沿技术，提供创新的金融解决方案。"
                },
                {
                  title: "专业",
                  description: "依托深厚的专业知识和丰富的行业经验，为客户提供最专业的建议。"
                },
                {
                  title: "诚信",
                  description: "以诚信为本，建立透明、公正的合作关系，赢得客户的信任。"
                }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="h2-title">团队成员</h2>
            {/* <p className="general-text">
              我们拥有一支由金融专家和技术人才组成的精英团队，致力于为客户提供最优质的服务。
            </p> */}
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">加入我们的团队</h2>
            <p className="text-lg text-gray-600 mb-8">
              我们始终在寻找优秀的人才加入我们的团队。如果你对金融和技术充满热情，并希望在一个充满活力的环境中工作，欢迎加入我们！
            </p>
            <Link to="/careers" className="btn-primary">
              查看职位空缺
            </Link>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;