import { useState } from 'react';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('全部');
  
  const categories = ['全部', '财富管理', '投资顾问', '风险管理', '金融规划'];
  
  const products = [
    {
      id: 1,
      name: '个人财富管理',
      category: '财富管理',
      description: '为个人客户提供全面的财富管理服务，包括资产配置、投资组合管理、退休规划等。',
      icon: '💰',
    },
    {
      id: 2,
      name: '企业财务咨询',
      category: '财富管理',
      description: '为企业提供财务战略规划、资本结构优化、并购顾问等专业服务。',
      icon: '🏢',
    },
    {
      id: 3,
      name: '投资组合分析',
      category: '投资顾问',
      description: '通过先进的算法和专业的分析，帮助客户优化投资组合，提高投资回报。',
      icon: '📊',
    },
    {
      id: 4,
      name: '市场趋势研究',
      category: '投资顾问',
      description: '提供深入的市场研究和趋势分析，帮助客户把握投资机会。',
      icon: '📈',
    },
    {
      id: 5,
      name: '风险评估服务',
      category: '风险管理',
      description: '全面评估客户的风险状况，提供定制化的风险管理解决方案。',
      icon: '⚠️',
    },
    {
      id: 6,
      name: '保险解决方案',
      category: '风险管理',
      description: '设计和实施全面的保险策略，保护客户的资产和利益。',
      icon: '🛡️',
    },
    {
      id: 7,
      name: '退休规划',
      category: '金融规划',
      description: '帮助客户制定科学的退休计划，确保退休生活的财务安全。',
      icon: '👴',
    },
    {
      id: 8,
      name: '教育基金规划',
      category: '金融规划',
      description: '为客户的子女教育需求提供专业的财务规划和建议。',
      icon: '🎓',
    },
  ];
  
  const filteredProducts = activeCategory === '全部' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title">产品分销</h1>
            <p className="subtitle">
              我们提供多种创新的金融产品和服务<br />
              满足不同客户的需求和目标
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center space-x-2 space-y-2 md:space-y-0">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-6 hover:shadow-lg"
              >
                <div className="text-3xl mb-4">{product.icon}</div>
                <h3 className="card-title">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <p className="general-text">{product.description}</p>
                <button className="text-black font-medium hover:underline">
                  了解更多 →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="h2-title">我们的服务流程</h2>
            <p className="general-text">
              我们的服务流程简单高效，确保为您提供最佳的金融解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: '需求分析',
                description: '我们深入了解您的财务状况和目标，确定您的具体需求。'
              },
              {
                step: '02',
                title: '方案设计',
                description: '基于您的需求，我们的专家团队为您设计定制化的解决方案。'
              },
              {
                step: '03',
                title: '方案实施',
                description: '在您的认可下，我们帮助您实施解决方案，并提供全程指导。'
              },
              {
                step: '04',
                title: '持续跟进',
                description: '我们定期跟进和评估方案效果，根据市场变化和您的需求调整优化。'
              }
            ].map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="card-title">{step.title}</h3>
                <p className="general-text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="h2-title">定价方案</h2>
            <p className="general-text">
              我们提供灵活的定价方案，满足不同客户的需求和预算
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: '基础版',
                price: '¥1,999',
                period: '/月',
                features: [
                  '基础财务咨询',
                  '每月市场报告',
                  '电话和邮件支持',
                  '基础投资建议'
                ],
                cta: '立即开始'
              },
              {
                name: '专业版',
                price: '¥4,999',
                period: '/月',
                features: [
                  '全面财务咨询',
                  '每周市场报告',
                  '专属客户经理',
                  '定制投资方案',
                  '风险管理服务'
                ],
                cta: '立即开始',
                featured: true
              },
              {
                name: '企业版',
                price: '询价',
                period: '',
                features: [
                  '全方位财务顾问',
                  '实时市场分析',
                  '高级风险管理',
                  '并购顾问服务',
                  '24/7专属支持团队',
                  '定制报告和分析'
                ],
                cta: '联系我们'
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`border rounded-lg p-6 ${
                  plan.featured ? 'border-black shadow-lg' : ''
                }`}
              >
                {plan.featured && (
                  <div className="bg-black text-white text-xs uppercase font-bold py-1 px-2 rounded-full inline-block mb-4">
                    推荐
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg 
                        className="w-4 h-4 mr-2 text-green-500" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 px-4 rounded ${
                  plan.featured 
                    ? 'bg-black text-white hover:bg-gray-900' 
                    : 'border border-black text-black hover:bg-black hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;