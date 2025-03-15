import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    {
      name: '张伟',
      position: '首席执行官',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      name: '李娜',
      position: '首席财务官',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    },
    {
      name: '王强',
      position: '技术总监',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      name: '刘芳',
      position: '市场总监',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
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
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">关于我们</h1>
            <p className="text-lg text-gray-600">
              UtilityMax是一家领先的金融咨询公司。我们的使命是确保先进的金融科技能够惠及全人类，提供专业的财务建议，帮助客户做出明智的决策。
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
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold mb-6">我们的故事</h2>
              <p className="text-gray-600 mb-4">
                UtilityMax成立于2015年，由一群对金融和技术充满热情的专业人士创建，致力于通过创新的金融解决方案，帮助客户实现财务自由。
              </p>
              <p className="text-gray-600 mb-4">
                多年来，我们不断发展壮大，现已成为行业的领军企业，为全球数千家企业和个人提供高质量的金融咨询服务。
              </p>
              <p className="text-gray-600">
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
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" 
                  alt="Our story" 
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
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
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">我们的团队</h2>
            <p className="text-gray-600">
              我们拥有一支由金融专家和技术人才组成的精英团队，致力于为客户提供最优质的服务。
            </p>
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
      <section className="py-16 bg-gray-50">
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
      </section>
    </div>
  );
};

export default AboutPage;