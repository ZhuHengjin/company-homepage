import { useState } from 'react';
import { FaChartLine, FaShieldAlt, FaUserCog, FaMobileAlt } from 'react-icons/fa';
import lifecycleChart from '../assets/images/lifecycle-chart.png'; // You'll need to add this image
// import buildingImage from '../assets/images/building.jpg'; // You'll need to add this image
// import dataAnalysisImage from '../assets/images/data-analysis.jpg'; // You'll need to add this image

const ProductsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-5">
        {/* 将容器改为 max-w-6xl 并添加 px-4 来减少两边空白 // 修改 */}
        <div className="container-custom text-center max-w-6xl mx-auto px-4">
          {/* 增大标题字体为 text-3xl // 修改 */}
          <h1 className="title text-3xl font-bold">
            产品特征及原理
          </h1>
        </div>
      </section>

      {/* Product Overview Section - White Background */}
      <section className="py-16">
        {/* 将容器改为 max-w-6xl 并添加 px-4 来减少两边空白 // 修改 */}
        <div className="container-custom max-w-6xl mx-auto px-4">
          <div className="text-left">
            {/* 增大标题字体为 text-2xl // 修改 */}
            <h2 className="h2-title text-2xl font-bold mb-4">产品概述</h2>
            {/* 在 p 标签上增加 text-lg leading-relaxed 来增大字体并增加行距 // 修改 */}
            <p className="general-text text-lg leading-relaxed">
              UtilityMax 是针对个人APP为用户提供专业的理财建议工具，用户只需提供必要的日常收入、消费、支出及
              投资情况，UtilityMax能够基于最优决策理论和统计、经济学、机器学习等多种前沿的学科理论与实践经
              验为用户提供财富管理规划。
            </p>
            <p className="general-text text-lg leading-relaxed mt-4">
              UtilityMax 基于终生消费理论，轻松化复杂专业方法，采用便捷手机操作，人性化 直观明晰呈现形式
              方案为用户提供最大化效用的理财方。
            </p>
            <p className="general-text text-lg leading-relaxed mt-4">
              UtilityMax 采用前沿的数学模型，结合历史数据，构成分别匹配不予不同类型的支持机制，方便用户理解并做出
              合理财务决策。
            </p>
            <p className="general-text text-lg leading-relaxed mt-4">
              UtilityMax 尊重及保护用户的隐私，包括收入及投资情况，储蓄及消费模式，投资组合的持仓结构等，为
              客户提供可靠稳健金融理财建议。
            </p>
          </div>
        </div>
      </section>

      {/* Lifecycle Consumption Section - Gray Background */}
      <section className="py-16 bg-gray-50">
        {/* 将容器改为 max-w-6xl 并添加 px-4 来减少两边空白 // 修改 */}
        <div className="container-custom max-w-6xl mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto mb-8">
            {/* 增大标题字体为 text-2xl // 修改 */}
            <h2 className="h2-title text-2xl font-bold">终生平滑消费模型</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              {/* 同样为 p 标签增加了 text-lg leading-relaxed // 修改 */}
              <p className="general-text text-lg leading-relaxed">
                根据 Franco Modigliani 和 Richard Brumberg 在20世纪50年代提出的生命周期假说，人们应该基于一生的预期总收入做出消费、投资等经济决策，而不是当下的收入。Modigliani 也因这一理论获得了1985 年的诺贝尔经济学奖。终身平滑消费 Lifetime Smooth Consumption （LSC）是生命周期假说中的一个重要推论，它表明，人一生的消费应当保持平衡和稳定，从而实现每个阶段的生活水平一致—没有人会希望自己在收入高时挥霍无度，以致于没有任何用于养老、子女教育和生病住院的存款。 
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img 
                  src={lifecycleChart} 
                  alt="生命周期消费模型图表" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-8">
            <p className="general-text text-lg leading-relaxed mt-4">
              假设现在有一个名叫 Henry 的人。Henry 学生时代或许没有收入，但为了保证正常消费，他会选择借贷来支付自己的学费和正常生活。工作后，收入不断上升，通过这一过程，他会偿还学生时代的贷款，直到还清，同时为自己的退休生活而储蓄。退休后，他靠着中年时期的存款和投资生活。正是因为 Henry 合理、 有远见的财富管理，他才可以在退休后保证自己的生活水平和退休前一致—也就是说，他这一生最优的消费水平应该保持在图示的“平滑消费”。
            </p>

            <p className="general-text text-lg leading-relaxed mt-4">
              当然，现实中会影响到人们消费水平的因素有很多，利率、价格水平、养老金、社保、子女教育、资产组合等等。 UtilityMax 会考虑这些因素，结合用户个人的的收入曲线、支出偏好、风险承受偏好、时间偏好、 寿命预期、退休规划等信息，根据生命周期模型，帮助人们进行财富管理和决策规划，最终实现终生平滑消费。
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-4 bg-accent-blue text-white">
        {/* 将容器改为 max-w-6xl 并添加 px-4 来减少两边空白 // 修改 */}
        <div className="container-custom max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src={buildingImage} 
                alt="现代建筑" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div> */}
            <div className="md:w-1/2 md:pl-12">
              {/* 增大字体为 text-xl // 修改 */}
              <blockquote className="text-xl font-light italic mb-4">
                "UtilityMax 不仅关注短期收益，更注重长期财富保值与生活质量的平衡。"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Data Analysis Section - White Background */}
      <section className="py-16">
        {/* 将容器改为 max-w-6xl 并添加 px-4 来减少两边空白 // 修改 */}
        <div className="container-custom max-w-6xl mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto mb-12">
            {/* 增大标题字体为 text-2xl // 修改 */}
            <h2 className="h2-title text-2xl font-bold text-left">蒙特·卡洛模拟</h2>
            <p className="general-text text-lg leading-relaxed text-left">
              蒙特·卡洛模拟是一种基于随机抽样的统计模型，广泛用于金融风险分析与资产配置。UtilityMax 将应用蒙特•卡洛模拟，通过对市场利率、投资回报、通胀变动、寿命预期等变量进行上万次随机模拟，全面评估每种理财策略在不同未来状态下的表现，为用户的理财决策提供理性和全面的建议。
            </p>
          </div>
        </div>
      </section>

      {/* Analysis Example Section - Gray Background */}
      <section className="py-16 bg-gray-50">
        {/* 将容器改为 max-w-6xl 并添加 px-4 来减少两边空白 // 修改 */}
        <div className="container-custom max-w-6xl mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto mb-12">
            {/* 增大标题字体为 text-2xl // 修改 */}
            <h2 className="h2-title text-2xl font-bold text-left">分析案例</h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <p className="general-text text-lg leading-relaxed">
              此案例为蒙特·卡洛模拟的一个简化演示。假设 Henry 考虑了一种投资组合，这个组合包 括了“某政府一年期折价债券”+“某政府三年期息票债券”+“某政府五年期息票债券”+“某
              政府十年期息票债券”+“⻩金”，共五种投资理财产品。为了演示的简化，我们只采用 2024
              年 2 月 14 日至 2025 年 2 月 14 日的一年数据，随后根据经济模型公式和数据进行蒙特
              卡洛模拟。以下为模拟结果的概述和分布情况。 
            </p>
            <p className="general-text text-lg leading-relaxed mt-4">
              我们进行了 1000 次蒙特卡洛模拟，每次随机抽取债券收益率数据和⻩金价格数据，生
              成随机模拟量来计算总收益。结果显示，均值约为 58.7，标准差约为 2088.7，收益范围
              在-6767 到 6931 之间。这说明，模拟得到的总收益在 1000 次重复中平均约为 58.7，
              而结果在均值附近有非常大的波动——一次模拟可能得到的收益和平均值之间通常会
              有几千的差异。主要分布集中在 -2000 到+3000 区域附近，分布峰值在略大于 0 左
              右，左右两侧有一定尾巴，体现出收益的随机性与较大不确定性。因此，这 1000 次随
              机模拟的总体分布是以接近 0 ~ 100 为中心、向两端延伸较多的波动。平均收益稍偏
              正，但由于波动性很大，负收益和正收益的极端情形在模拟中都能出现。意味着，这五
              种投资理财产品的投资组合从平均上会产生正收益，但投资⻛险较大。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
