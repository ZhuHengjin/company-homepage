import { useState } from 'react';
import { FaChartLine, FaShieldAlt, FaUserCog, FaMobileAlt } from 'react-icons/fa';
import lifecycleChart from '../assets/images/lifecycle-chart.pdf'; // You'll need to add this image
// import buildingImage from '../assets/images/building.jpg'; // You'll need to add this image
// import dataAnalysisImage from '../assets/images/data-analysis.jpg'; // You'll need to add this image

const ProductsPage = () => {
  

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-5">
        <div className="container-custom text-center">
            <h1 className="title">
              产品特征及原理
            </h1>
        </div>
      </section>

      {/* Product Overview Section - White Background */}
      <section className="py-16">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-left">
            <h2 className="h2-title">产品概述</h2>
            <p className="general-text">
              UtilityMax 是针对个人APP为用户提供专业的理财建议工具，用户只需提供必要的日常收入、消费、支出及
              投资情况，UtilityMax能够基于最优决策理论和统计、经济学、机器学习等多种前沿的学科理论与实践经
              验为用户提供财富管理规划。
            </p>
            <p className="general-text mt-4">
              UtilityMax 基于终生消费理论，轻松化复杂专业方法，采用便捷手机操作，人性化 直观明晰呈现形式
              方案为用户提供最大化效用的理财方。
            </p>
            <p className="general-text mt-4">
              UtilityMax 采用前沿的数学模型，结合历史数据，构成分别匹配不予不同类型的支持机制，方便用户理解并做出
              合理财务决策。
            </p>
            <p className="general-text mt-4">
              UtilityMax 尊重及保护用户的隐私，包括收入及投资情况，储蓄及消费模式，投资组合的持仓结构等，为
              客户提供可靠稳健金融理财建议。
            </p>
          </div>
        </div>
      </section>

      {/* Lifecycle Consumption Section - Gray Background */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="h2-title">终生平滑消费模型</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
            <div className="lg:w-1/2">
              <p className="general-text">
                根据 Franco Modigliani 和 Richard Brumberg 在 20 世纪 50 年代提出的生命周期假说（Lifecycle 
                Hypothesis），人在一生中的收入和消费在不同生命阶段会有系统性变化。Modigliani 理论一项获得了 1985 
                年诺贝尔经济学奖，平滑生命周期 Lifetime Smooth Consumption (LSC)是生命周期假说中的一个重要
                理论，人一生消费趋近于收入的期望值。此中，收入周期分为三个阶段：一个是人生初期的
                借款，人一生中期的"收入高峰"偿还负债并存储，主要在养老期间的储蓄开支。
              </p>
              <p className="general-text mt-4">
                我们忠于 Franco Modigliani 和 Henry 学派的代表性观点，当门了解到生命周期，整合储蓄观察或
                支付日常开销事项来存储，上学时，他人不同工作，贷款为一种偿，帮你做好平时的积极行动，家庭比
                例，利润为优于日常生活需期，抓紧，家庭善中平平时期的有益的标准，正如我们 Henry 所言
                有以切的据真可靠，基本沿线会贴合用户平生连贯不同阶段需—致—方案重要，如果一直想你的最
                重要平均保收体对应一个"平滑消费"。
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img 
                  src={lifecycleChart} 
                  alt="生命周期消费模型图表" 
                  className="w-full h-auto"
                />
                <div className="text-xs text-gray-500 mt-2 text-center">
                  Income = 收入, Borrow = 借贷, Save/Pay off Debts = 储蓄/偿还债务, 
                  Supplement from Savings = 从储蓄中补充, Student = 学生阶段, 
                  Working = 工作阶段, Retirement = 退休阶段
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <p className="general-text">
              当然，随生你会期望吉日人消费需平中收保有由效多，和率，句得来者，养老金，且信心，子女教育，初产期住
              等等，UtilityMax 会考虑这次性，帮助用户个人的组心成就、支出预算，把这参考续仔，持续前行，
              有合格用，组结收吸零结包，配额生金即期望贮，拥造入回最好组理理你决读取现，能经女好牛乎通讯
              典。
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-4 bg-accent-blue text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            {/* <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src={buildingImage} 
                alt="现代建筑" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div> */}
            <div className="md:w-1/2 md:pl-12">
              <blockquote className="text-xl font-light italic mb-4">
                "UtilityMax 不仅关注短期收益，更注重长期财富保值与生活质量的平衡。"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Data Analysis Section - White Background */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="h2-title text-left">蒙特·卡洛模拟</h2>
            <p className="general-text text-left">
            蒙特·卡洛模拟是一种基于随机抽样的统计模型，广泛用于金融风险分析与资产配置。UtilityMax 将应用蒙特•卡洛模拟，通过对市场利率、投资回报、通胀变动、寿命预期等变量进行上万次随机模拟，全面评估每种理财策略在不同未来状态下的表现，为用户的理财决策提供理性和全面的建议。
            </p>
          </div>
        </div>
      </section>

      {/* Analysis Example Section - Gray Background */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="h2-title text-left">分析案例</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="general-text">
              此案例为蒙特·卡洛模拟的一个简化演示。假设 Henry 考虑了一种投资组合，这个组合包 括了“某政府一年期折价债券”+“某政府三年期息票债券”+“某政府五年期息票债券”+“某 政府十年期息票债券”+“⻩金”，共五种投资理财产品。为了演示的简化，我们只采用 2024 年 2 月 14 日至 2025 年 2 月 14 日的一年数据，随后根据经济模型公式和数据进行蒙特 卡洛模拟。以下为模拟结果的概述和分布情况。 
            </p>
            <p className="general-text mt-4">
              我们进行了 1000 次蒙特卡洛模拟，每次随机抽取债券收益率数据和⻩金价格数据，生 成随机模拟量来计算总收益。结果显示，均值约为 58.7，标准差约为 2088.7，收益范围 在-6767 到 6931 之间。这说明，模拟得到的总收益在 1000 次重复中平均约为 58.7， 而结果在均值附近有非常大的波动——一次模拟可能得到的收益和平均值之间通常会 有几千的差异。主要分布集中在 -2000 到+3000 区域附近，分布峰值在略大于 0 左 右，左右两侧有一定尾巴，体现出收益的随机性与较大不确定性。因此，这 1000 次随 机模拟的总体分布是以接近 0 ~ 100 为中心、向两端延伸较多的波动。平均收益稍偏 正，但由于波动性很大，负收益和正收益的极端情形在模拟中都能出现。意味着，这五 种投资理财产品的投资组合从平均上会产生正收益，但投资⻛险较大。
            </p>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default ProductsPage;