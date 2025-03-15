import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              参与塑造金融科技的未来
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              我们提供前沿的金融解决方案，助力企业和个人实现财务目标，共创美好未来。
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/about" className="btn-primary">
                了解更多
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">
                联系我们 →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">关于我们</h2>
              <p className="text-gray-600 mb-6">
                UtilityMax是一家领先的金融咨询公司。我们的使命是确保先进的金融科技能够惠及全人类，提供专业的财务建议，帮助客户做出明智的决策。
              </p>
              <p className="text-gray-600 mb-6">
                我们的团队由金融专家和技术人才组成，致力于通过创新的方式解决复杂的财务挑战，为客户创造持久的价值。
              </p>
              <Link to="/about" className="inline-block text-black font-medium hover:underline">
                查看更多信息 →
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Team working together" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">产品分销</h2>
            <p className="text-gray-600">
              我们提供多种创新的金融产品和服务，满足不同客户的需求。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "财富管理",
                description: "全面的财富管理解决方案，帮助您实现长期财务目标。",
                icon: "💰"
              },
              {
                title: "投资顾问",
                description: "专业的投资顾问团队，为您提供个性化的投资建议。",
                icon: "📈"
              },
              {
                title: "风险管理",
                description: "有效的风险管理策略，保护您的资产安全。",
                icon: "🛡️"
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                className="border p-6 rounded-lg hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-medium mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link to="/products" className="text-black font-medium hover:underline">
                  了解更多 →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Resource Center Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">资源中心</h2>
            <p className="text-gray-600">
              探索我们的金融知识库，获取专业的见解和最新的行业动态。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "金融规划指南",
              "投资策略分析",
              "市场研究报告",
              "风险评估工具"
            ].map((resource, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-medium mb-2">{resource}</h3>
                <Link to="/resources" className="text-sm text-black font-medium hover:underline">
                  查看资源 →
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/resources" className="btn-primary">
              浏览全部资源
            </Link>
          </div>
        </div>
      </section>
      
      {/* Social Responsibility Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Social responsibility" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">社会责任</h2>
              <p className="text-gray-600 mb-6">
                我们深信企业应该为社会创造积极的影响。UtilityMax致力于推动金融普惠、支持社区发展、促进可持续发展。
              </p>
              <p className="text-gray-600 mb-6">
                通过我们的企业社会责任计划，我们积极参与公益活动，为社区提供金融教育，帮助更多人获得金融服务的机会。
              </p>
              <Link to="/responsibility" className="inline-block text-black font-medium hover:underline">
                了解我们的社会责任 →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">联系我们</h2>
            <p className="text-gray-600 mb-8">
              有任何问题或需求？我们的团队随时准备为您提供帮助。
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn-primary">
                联系我们
              </Link>
              <a href="tel:+8600000000" className="text-gray-600 hover:text-black transition-colors">
                +86 000 000 0000
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;