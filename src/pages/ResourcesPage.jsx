import { useState } from 'react';
import { HiSearch, HiDownload, HiOutlineDocumentText, HiOutlineBookOpen, HiOutlinePlay } from 'react-icons/hi';

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('全部');
  
  const filters = ['全部', '指南', '报告', '视频', '工具'];
  
  const resources = [
    {
      id: 1,
      title: '个人投资入门指南',
      type: '指南',
      description: '为初学者提供的投资基础知识，包括投资理念、风险管理和资产配置等内容。',
      date: '2025-02-15',
      icon: <HiOutlineDocumentText className="w-6 h-6" />,
    },
    {
      id: 2,
      title: '2025年一季度市场展望',
      type: '报告',
      description: '分析全球经济形势和市场走势，为投资者提供专业的市场预测和投资建议。',
      date: '2025-03-01',
      icon: <HiOutlineDocumentText className="w-6 h-6" />,
    },
    {
      id: 3,
      title: '如何制定有效的退休规划',
      type: '视频',
      description: '由我们的资深财务顾问讲解退休规划的关键要素和实用策略。',
      date: '2025-01-20',
      icon: <HiOutlinePlay className="w-6 h-6" />,
    },
    {
      id: 4,
      title: '风险承受能力评估工具',
      type: '工具',
      description: '通过一系列问题评估您的风险承受能力，帮助您确定适合的投资组合。',
      date: '2024-12-10',
      icon: <HiDownload className="w-6 h-6" />,
    },
    {
      id: 5,
      title: '家庭财务管理手册',
      type: '指南',
      description: '全面的家庭财务管理指南，包含预算规划、债务管理、储蓄策略等内容。',
      date: '2025-02-28',
      icon: <HiOutlineBookOpen className="w-6 h-6" />,
    },
    {
      id: 6,
      title: '企业现金流管理策略',
      type: '报告',
      description: '针对企业的现金流管理策略，帮助企业优化资金使用效率，提高财务稳健性。',
      date: '2025-01-15',
      icon: <HiOutlineDocumentText className="w-6 h-6" />,
    },
    {
      id: 7,
      title: '投资组合回测分析工具',
      type: '工具',
      description: '通过历史数据回测不同投资组合的表现，帮助投资者优化资产配置。',
      date: '2025-02-05',
      icon: <HiDownload className="w-6 h-6" />,
    },
    {
      id: 8,
      title: '如何应对市场波动',
      type: '视频',
      description: '市场波动时期的投资策略和心理准备，帮助投资者冷静应对市场变化。',
      date: '2025-03-10',
      icon: <HiOutlinePlay className="w-6 h-6" />,
    },
  ];
  
  const filteredResources = resources.filter(resource => {
    const matchesFilter = activeFilter === '全部' || resource.type === activeFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });


  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title">资源中心</h1>
            <p className="subtitle">
              探索我们的金融知识库<br />
              获取专业的见解和最新的行业动态
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Search */}
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <input
                type="text"
                placeholder="搜索资源..."
                className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center space-x-2">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeFilter === filter
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container-custom">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="border rounded-lg p-6 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block p-2 bg-gray-100 rounded-full">
                      {resource.icon}
                    </span>
                    <span className="text-sm text-gray-500">{resource.date}</span>
                  </div>
                  <h3 className="card-title">{resource.title}</h3>
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-xs font-medium rounded">
                      {resource.type}
                    </span>
                  </div>
                  <p className="general-text">{resource.description}</p>
                  <button className="text-black font-medium hover:underline">
                    查看详情 →
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">没有找到匹配的资源，请尝试其他搜索词或筛选条件。</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="h2-title">热门资源</h2>
            <p className="general-text">
              这些是我们最受欢迎的资源，为您提供有价值的金融知识和工具
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '财务健康自测',
                description: '评估您的财务状况，发现潜在问题，获取改进建议。',
                icon: '📊',
                type: '工具'
              },
              {
                title: '2025年投资展望',
                description: '我们的专家团队对2025年全球经济和投资市场的深度分析和预测。',
                icon: '📈',
                type: '报告'
              },
              {
                title: '财务自由之路',
                description: '一套实用的指南，帮助您规划和实现财务自由的目标。',
                icon: '🔑',
                type: '指南'
              }
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md"
              >
                <div className="text-3xl mb-4">{resource.icon}</div>
                <h3 className="card-title">{resource.title}</h3>
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-xs font-medium rounded">
                    {resource.type}
                  </span>
                </div>
                <p className="general-text">{resource.description}</p>
                <button className="text-black font-medium hover:underline">
                  立即访问 →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="h2-title">订阅我们的新闻通讯</h2>
              <p className="general-text">
                定期获取最新的金融见解、市场分析和投资策略
              </p>
            </div>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="email"
                  placeholder="您的电子邮箱"
                  className="flex-grow py-2 px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <button
                  type="submit"
                  className="py-2 px-6 bg-black text-white rounded-full hover:bg-gray-900"
                >
                  订阅
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                我们尊重您的隐私，您可以随时取消订阅。
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;