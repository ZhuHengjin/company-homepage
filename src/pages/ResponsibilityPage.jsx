import { motion } from 'framer-motion';

const ResponsibilityPage = () => {
  const initiatives = [
    {
      title: '金融普惠计划',
      description: '我们致力于为弱势群体提供金融服务，通过金融教育和无障碍服务，帮助更多人获得金融机会。',
      image: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: '环境可持续发展',
      description: '我们积极推动绿色金融，支持环保项目，并在日常运营中践行环保理念，减少碳足迹。',
      image: 'https://images.unsplash.com/photo-1623314675487-5dce599e3c53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: '社区投资项目',
      description: '我们通过各种方式支持社区发展，包括志愿服务、慈善捐赠和社区项目投资。',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
  ];
  
  const stats = [
    { value: '100+', label: '受益社区' },
    { value: '¥1000万+', label: '慈善捐款' },
    { value: '5000+', label: '志愿服务小时' },
    { value: '50+', label: '公益项目' },
  ];
  
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">社会责任</h1>
            <p className="text-lg text-gray-600">
              我们深信企业应该为社会创造积极的影响。UtilityMax致力于推动金融普惠、支持社区发展、促进可持续发展。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">我们的方法</h2>
              <p className="text-gray-600 mb-4">
                在UtilityMax，社会责任不仅仅是一项政策，更是我们企业文化和经营理念的核心。我们相信，作为一家金融服务机构，我们有责任利用自己的专业知识和资源，为构建更加公平、包容和可持续的社会做出贡献。
              </p>
              <p className="text-gray-600 mb-4">
                我们的社会责任战略基于三大支柱：金融普惠、环境可持续性和社区投资。通过这些方向的努力，我们致力于创造长期的社会价值，同时也为公司的可持续发展奠定基础。
              </p>
              <p className="text-gray-600">
                我们鼓励员工积极参与社会责任活动，并将社会责任考量融入我们的业务决策和日常运营中。
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Our approach to social responsibility" 
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">关键举措</h2>
            <p className="text-gray-600">
              探索我们为创造积极社会影响而开展的主要举措。
            </p>
          </div>
          
          <div className="space-y-16">
            {initiatives.map((initiative, index) => (
              <motion.div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl font-bold mb-4">{initiative.title}</h3>
                  <p className="text-gray-600 mb-6">{initiative.description}</p>
                  <button className="text-black font-medium hover:underline">
                    了解更多 →
                  </button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <img 
                      src={initiative.image} 
                      alt={initiative.title} 
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">我们的影响</h2>
            <p className="text-gray-600">
              数字展示了我们在社会责任方面所取得的成就。
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">合作伙伴</h2>
            <p className="text-gray-600">
              我们与各种组织合作，共同推进社会责任项目。
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-center text-gray-400">合作伙伴 {index + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Report Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">可持续发展报告</h2>
                <p className="text-gray-600 mb-6">
                  我们每年发布可持续发展报告，详细介绍我们在环境、社会和治理方面的表现和进展。
                </p>
                <button className="btn-primary">
                  下载最新报告
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-sm text-gray-600">2022 + {index}</div>
                    <div className="text-lg font-medium mt-2">年度报告</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">加入我们的努力</h2>
            <p className="text-lg text-gray-600 mb-8">
              我们邀请您与我们一起，为创造更加可持续和包容的未来而努力。了解如何参与我们的社会责任项目。
            </p>
            <button className="btn-primary">
              联系我们
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsibilityPage;