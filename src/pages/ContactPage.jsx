import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log(formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };
  
  const contactInfo = [
    {
      icon: <HiLocationMarker className="w-6 h-6" />,
      title: '地址',
      details: [
        '北京市朝阳区东三环中路1号',
        '环球金融中心A座25层',
      ]
    },
    {
      icon: <HiPhone className="w-6 h-6" />,
      title: '电话',
      details: [
        '+86 10 8888 8888',
        '+86 400 888 8888',
      ]
    },
    {
      icon: <HiMail className="w-6 h-6" />,
      title: '电子邮件',
      details: [
        'info@utilitymax.com',
        'support@utilitymax.com',
      ]
    },
    {
      icon: <HiClock className="w-6 h-6" />,
      title: '工作时间',
      details: [
        '周一至周五: 9:00 - 18:00',
        '周六周日: 休息',
      ]
    },
  ];
  
  const offices = [
    {
      city: '北京',
      address: '朝阳区东三环中路1号环球金融中心A座25层',
      phone: '+86 10 8888 8888',
      email: 'beijing@utilitymax.com',
    },
    {
      city: '上海',
      address: '浦东新区陆家嘴环路1000号恒生银行大厦15层',
      phone: '+86 21 8888 8888',
      email: 'shanghai@utilitymax.com',
    },
    {
      city: '广州',
      address: '天河区珠江新城冼村路12号保利威座大厦18层',
      phone: '+86 20 8888 8888',
      email: 'guangzhou@utilitymax.com',
    },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">联系我们</h1>
            <p className="text-lg text-gray-600">
              有任何问题或需求？我们的团队随时准备为您提供帮助。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">联系信息</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 bg-gray-100 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">关注我们</h3>
                <div className="flex space-x-4">
                  {['微信', '微博', '抖音', 'LinkedIn'].map((platform, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      {platform.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">发送消息</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">感谢您的留言！</h3>
                  <p>我们已收到您的消息，将尽快与您联系。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        电子邮件 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        电话
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        主题 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      消息 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900 transition-colors"
                    >
                      发送消息
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">我们的位置</h2>
            <p className="text-gray-600">
              我们在中国的主要城市设有办事处，欢迎您前来访问。
            </p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-lg mb-12">
            {/* Here you would typically integrate a map service like Google Maps */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">地图将在这里显示</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{office.city}</h3>
                <p className="text-gray-600 mb-2">{office.address}</p>
                <p className="text-gray-600 mb-2">{office.phone}</p>
                <p className="text-gray-600">{office.email}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">常见问题</h2>
            <p className="text-gray-600">
              查看我们的常见问题解答，获取您可能需要的信息。
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: '如何预约咨询服务？',
                answer: '您可以通过本页面的联系表单、电话或电子邮件预约咨询服务。我们的团队将在24小时内与您联系，安排具体时间。'
              },
              {
                question: '你们提供哪些类型的金融咨询服务？',
                answer: '我们提供多种金融咨询服务，包括个人理财规划、投资顾问、风险管理、退休规划等。您可以在"产品分销"页面了解更多详情。'
              },
              {
                question: '咨询服务的收费标准是什么？',
                answer: '我们的收费标准取决于您所需的具体服务类型和复杂程度。您可以在"产品分销"页面查看我们的基本定价方案，或联系我们获取定制报价。'
              },
              {
                question: '如何查看和下载金融资源？',
                answer: '您可以在"资源中心"页面浏览和下载我们提供的各种金融资源，包括指南、报告、工具等。部分资源可能需要注册后才能访问。'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">准备好开始了吗？</h2>
            <p className="text-lg text-gray-600 mb-8">
              联系我们的专家团队，了解我们如何帮助您实现财务目标。
            </p>
            <button className="btn-primary">
              预约咨询
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;