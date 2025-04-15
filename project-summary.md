# UtilityMax Website

这是一个基于React、Vite和Tailwind CSS构建的金融咨询公司网站，采用OpenAI风格的极简设计。

## 项目特点

- **现代设计**：采用OpenAI风格的黑白极简主题
- **响应式布局**：完美适配桌面和移动设备
- **动画效果**：使用Framer Motion实现平滑过渡动画
- **路由系统**：使用React Router实现多页面导航
- **中文界面**：所有UI文本均使用中文展示

## 技术栈

- **Vite**：快速的前端构建工具
- **React**：用户界面库
- **React Router**：页面路由
- **Tailwind CSS**：实用优先的CSS框架
- **Framer Motion**：动画库
- **React Icons**：图标库

## 项目结构

```
utilitymax-website/
├── public/             # 静态资源
├── src/                # 源代码
│   ├── components/     # 可复用组件
│   │   ├── Footer.jsx  # 页脚组件
│   │   ├── MobileMenu.jsx # 移动端菜单组件
│   │   └── Navbar.jsx  # 导航栏组件
│   ├── pages/          # 页面组件
│   │   ├── AboutPage.jsx # 关于我们页面
│   │   ├── ContactPage.jsx # 联系我们页面
│   │   ├── HomePage.jsx # 首页
│   │   ├── PlaceholderPages.jsx # 占位页面
│   │   ├── ProductsPage.jsx # 产品介绍页面
│   │   ├── ResourcesPage.jsx # 资源中心页面
│   │   └── ResponsibilityPage.jsx # 社会责任页面
│   ├── App.jsx         # 应用主组件
│   ├── main.jsx        # 应用入口
│   └── index.css       # 全局样式
├── index.html          # HTML模板
├── package.json        # 项目依赖
├── tailwind.config.js  # Tailwind配置
└── vite.config.js      # Vite配置
```

## 页面列表

1. **首页** (`/`): 展示公司概况和主要服务
2. **关于我们** (`/about`): 公司简介、使命和团队介绍
3. **产品介绍** (`/products`): 产品和服务介绍
4. **资源中心** (`/resources`): 金融知识和资源
5. **社会责任** (`/responsibility`): 企业社会责任
6. **联系我们** (`/contact`): 联系方式和表单

## 如何运行

### 安装依赖

```bash
# 导航到项目目录
cd utilitymax-website

# 安装依赖
npm install
```

### 开发模式

```bash
# 启动开发服务器
npm run dev
```

访问 `http://localhost:5173` 查看网站。

### 构建项目

```bash
# 构建生产版本
npm run build
```

构建后的文件将保存在 `dist` 目录中。

### 预览生产版本

```bash
# 预览生产构建
npm run preview
```

## 自定义

### 修改颜色主题

编辑 `tailwind.config.js` 文件中的颜色配置：

```javascript
theme: {
  extend: {
    colors: {
      'primary': '#000000', // 修改主色
      'secondary': '#ffffff', // 修改次要色
      'accent': '#f0f0f0', // 修改强调色
    },
  },
},
```

### 添加新页面

1. 在 `src/pages` 目录下创建新的页面组件
2. 在 `App.jsx` 中添加相应的路由配置
3. 在 `Navbar.jsx` 和 `MobileMenu.jsx` 中添加导航链接

## 部署建议

- **静态托管**：可部署到Netlify、Vercel或GitHub Pages
- **CDN加速**：使用CDN提高全球访问速度
- **图片优化**：使用WebP格式并实现懒加载
- **监控分析**：集成Google Analytics或百度统计
