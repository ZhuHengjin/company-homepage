import { useNavigate } from 'react-router-dom';

// Create a simple placeholder page template
const PlaceholderPage = ({ title, description, returnPath = '/' }) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-lg mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-8">{description}</p>
        <button 
          onClick={() => navigate(returnPath)}
          className="btn-primary"
        >
          返回
        </button>
      </div>
    </div>
  );
};

// Export individual pages that use the template
export const LoginPage = () => (
  <PlaceholderPage 
    title="登录页面" 
    description="这是登录页面的占位符。在实际应用中，这里将包含登录表单和相关功能。" 
  />
);

export const NotFoundPage = () => (
  <PlaceholderPage 
    title="页面未找到" 
    description="抱歉，您请求的页面不存在或已被移除。" 
  />
);

// Add more placeholder pages as needed for other routes