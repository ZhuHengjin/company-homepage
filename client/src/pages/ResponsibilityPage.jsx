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
      <section className="pt-16 pb-5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title">社会责任</h1>
            <p className="subtitle">
              我们深信企业应该为社会创造积极的影响<br />
              致力于推动金融普惠、支持社区发展、促进可持续发展
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="h2-title">我们的方法</h2>
              <p className="general-text">
                在UtilityMax，社会责任不仅仅是一项政策，更是我们企业文化和经营理念的核心。我们相信，作为一家金融服务机构，我们有责任利用自己的专业知识和资源，为构建更加公平、包容和可持续的社会做出贡献。
              </p>
              <p className="general-text">
                我们的社会责任战略基于三大支柱：金融普惠、环境可持续性和社区投资。通过这些方向的努力，我们致力于创造长期的社会价值，同时也为公司的可持续发展奠定基础。
              </p>
              <p className="general-text">
                我们鼓励员工积极参与社会责任活动，并将社会责任考量融入我们的业务决策和日常运营中。
              </p>
            </div>
            <div className="relative">
              <div className="img-container">
                <img 
                  src="https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Our approach to social responsibility" 
                  className="general-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="h2-title">关键举措</h2>
            <p className="general-text">
              探索我们为创造积极社会影响而开展的主要举措
            </p>
          </div>
          
          <div className="space-y-16">
            {initiatives.map((initiative, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="card-title">{initiative.title}</h3>
                  <p className="general-text">{initiative.description}</p>
                  <button className="text-black font-medium hover:underline">
                    了解更多 →
                  </button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="img-container">
                    <img 
                      src={initiative.image} 
                      alt={initiative.title} 
                      className="general-image"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="h2-title">我们的影响</h2>
            <p className="general-text">
              数字展示了我们在社会责任方面所取得的成就
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="h2-title">合作伙伴</h2>
            <p className="general-text">
              我们与各种组织合作，共同推进社会责任项目
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-20"
              >
                <div className="text-center text-gray-400">合作伙伴 {index + 1}</div>
              </div>
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
                <h2 className="h2-title">可持续发展报告</h2>
                <p className="general-text">
                  我们每年发布可持续发展报告，详细介绍我们在环境、社会和治理方面的表现和进展。
                </p>
                <button className="btn-primary">
                  下载最新报告
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg shadow-sm text-center"
                  >
                    <div className="text-sm text-gray-600">2022 + {index}</div>
                    <div className="text-lg font-medium mt-2">年度报告</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsibilityPage;