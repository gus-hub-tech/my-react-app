# 🚀 Complete Developer Guide: Deploy React App on Ubuntu with Nginx

## 📋 Table of Contents
1. [Project Overview](#-project-overview)
2. [Prerequisites](#-prerequisites)
3. [Project Structure](#-project-structure)
4. [Step-by-Step Implementation](#-step-by-step-implementation)
5. [Understanding the Code](#-understanding-the-code)
6. [Deployment Process](#-deployment-process)
7. [Troubleshooting](#-troubleshooting)
8. [Best Practices](#-best-practices)
9. [Extended Learning](#-extended-learning)

---

## 🎯 Project Overview

This project teaches you how to:
- Create a React application from scratch
- Set up an Ubuntu server environment
- Configure Nginx as a web server
- Deploy a React app to production
- Make your app accessible via public IP

**What You'll Build:**
A personalized interactive react web application that displays your name, deployment date, and links to DevOps learning resources, deployed on a live Ubuntu server with Nginx.

---

## 🔧 Prerequisites

### Knowledge Requirements:
- Basic understanding of JavaScript and React
- Familiarity with Linux command line
- Basic knowledge of web servers (helpful but not required)

### System Requirements:
- Ubuntu 20.04+ VM or server
- Internet connection
- SSH access to your server
- Domain name or public IP (for external access)

### Tools You'll Need:
- Text editor (nano, vim, or VS Code with SSH extension)
- Terminal/Command prompt
- Web browser for testing

---

## 📁 Project Structure

```
my-react-app/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # PWA configuration
│   ├── favicon.ico         # Website icon
│   ├── logo192.png         # App logo (192px)
│   ├── logo512.png         # App logo (512px)
│   └── robots.txt          # Search engine instructions
├── src/
│   ├── App.js              # Main React component (YOU'LL MODIFY THIS)
│   ├── App.css             # App styles
│   ├── App.test.js         # Basic tests
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
│   ├── logo.svg            # React logo
│   ├── reportWebVitals.js  # Performance monitoring
│   ├── setupTests.js       # Test configuration
│   └── tests/
│       └── App.test.js     # Additional tests
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
└── README.md               # Deployment instructions
```

---

## 🛠 Step-by-Step Implementation

### Phase 1: Server Setup

#### Step 1: Prepare Your Ubuntu Server

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install essential tools
sudo apt install -y curl wget git
```

#### Step 2: Install Node.js and npm

```bash
# Install Node.js (LTS version recommended)
sudo apt install -y nodejs npm

# Verify installation
node -v    # Should show v18.x.x or higher
npm -v     # Should show 8.x.x or higher
```

**💡 Pro Tip:** If you need a newer Node.js version, use NodeSource repository:
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Step 3: Install and Configure Nginx

```bash
# Install Nginx
sudo apt install -y nginx

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx

# Allow HTTP traffic through firewall
sudo ufw allow 'Nginx Full'
```

**🔍 Test Nginx Installation:**
Visit `http://your-server-ip` in your browser. You should see the Nginx welcome page.

---

### Phase 2: Create React Application

#### Step 4: Set Up the React Project

```bash
# Navigate to your preferred directory
cd /home/ubuntu

# Clone the repository (or create new React app)
git clone https://github.com/gus-hub-tech/my-react-app.git
cd my-react-app

# Alternative: Create new React app
# npx create-react-app my-react-app
# cd my-react-app
```

#### Step 5: Understand the Core Files

**public/index.html** - The HTML template:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="DevOps React Deployment Demo" />
    <title>My DevOps React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

**src/index.js** - React entry point:
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring (optional)
reportWebVitals();
```

---

### Phase 3: Customize Your Application

#### Step 6: Modify App.js (This is where you personalize!)

```bash
# Open the App.js file
nano src/App.js
```

**Customized content version:**

```javascript
<<<<<<< HEAD
import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      {/* Main Header */}
      <h1>Welcome to My React App</h1>
      <p>This app is running on Nginx!</p>

      {/* CUSTOMIZE THIS SECTION - Replace with your details */}
      <h2>
        Deployed by: <strong>YOUR_FULL_NAME_HERE</strong>
      </h2>
      <p>
        Date: <strong>DD/MM/YYYY</strong>
      </p>

      <hr style={{ margin: "20px 0" }} />

      {/* Learning Resources Section */}
      <p>
        P.S. This project is part of my DevOps learning journey, proudly built
        and created by <strong>Gustav V. Kiewiets</strong> — Cloud Computing
        Specialist, AWS Certified Linux Systems Administrator & DevOps Engineer.
      </p>

      <p>
        View my Website!{" "}
        <a
          href="https://gus-hub.co.za"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Playlist
        </a>
        .
      </p>

      <p>
        Connect with Gustav on{" "}
        <a
          href="https://www.linkedin.com/in/gus88"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
}

export default App;
=======
import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [deployerName, setDeployerName] = useState('Your Full Name');
  const [deploymentDate, setDeploymentDate] = useState('DD/MM/YYYY');
  const [showPreview, setShowPreview] = useState(false);

  const steps = [
    "Install Node.js and npm",
    "Install Nginx",
    "Clone React App from GitHub",
    "Modify App.js with your details",
    "Install Dependencies & Build",
    "Deploy to Nginx",
    "Configure Nginx",
    "Access via Public IP"
  ];

>>>>>>> 169b10f (Modify readme.md files)
```

**🎯 Action Required:** 
- Replace `YOUR_FULL_NAME_HERE` with your actual name
- Replace `DD/MM/YYYY` with today's date
- Save the file (Ctrl+X, then Y, then Enter in nano)

#### Step 7: Optional - Add Custom Styling

Create or modify `src/App.css` for better styling:

```css
<<<<<<< HEAD
.App {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.deployment-info {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.resources-section {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
  border-left: 4px solid #007bff;
}

a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
=======
/* ========================================
   REACT DEPLOYMENT SIMULATOR STYLES
   ======================================== */

/* ========================================
   GLOBAL RESET AND FONTS
   ======================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ========================================
   MAIN SIMULATOR LAYOUT
   ======================================== */
.simulator-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
>>>>>>> 169b10f (Modify readme.md files)
}
```

---

### Phase 4: Test and Build

#### Step 8: Test Your Application Locally

```bash
# Install dependencies
npm install

# Start development server
npm start
```

**🌐 Access your app:** Visit `http://localhost:3000` (if testing locally) or `http://your-server-ip:3000`

**✅ Verify:** 
- Your name appears correctly
- Date is displayed
- All links work properly
- No console errors

#### Step 9: Build for Production

```bash
# Stop development server (Ctrl+C)
# Build the production version
npm run build
```

**📦 What happens during build:**
- Creates optimized, minified files
- Bundles all JavaScript and CSS
- Generates a `build/` folder with static files
- Ready for deployment!

---

### Phase 5: Deploy to Nginx

#### Step 10: Deploy Build Files

```bash
# Remove default Nginx files
sudo rm -rf /var/www/html/*

# Copy your React build files
sudo cp -r build/* /var/www/html/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
```

#### Step 11: Configure Nginx for React

React apps use client-side routing, so we need to configure Nginx properly:

```bash
# Backup original config
sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.backup

# Create new configuration
sudo tee /etc/nginx/sites-available/default > /dev/null <<EOF
server {
    listen 80;
    server_name _;
    
    root /var/www/html;
    index index.html;
    
    # Handle React Router (client-side routing)
    location / {
        try_files \$uri \$uri/ /index.html;
    }
    
    # Handle API requests (if you add them later)
    location /api/ {
        # Proxy to backend if needed
        # proxy_pass http://localhost:3001;
    }
    
    # Optimize static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
EOF
```

#### Step 12: Test and Restart Nginx

```bash
# Test Nginx configuration
sudo nginx -t

# If test passes, restart Nginx
sudo systemctl restart nginx

# Check status
sudo systemctl status nginx
```

---

### Phase 6: Go Live!

#### Step 13: Find Your Public IP

```bash
# Get your server's public IP
curl ifconfig.me
# or
curl ipinfo.io/ip
```

#### Step 14: Access Your Live App

🎉 **Visit your app:** `http://YOUR_PUBLIC_IP`

**📸 Take a screenshot** - You've successfully deployed a React app!

---

## 🧠 Understanding the Code

### React Component Structure

```javascript
// App.js breakdown
import React from "react";  // Import React library

function App() {           // Functional component
  return (                 // JSX return statement
    <div>                  // JSX elements
      {/* Your content */}
    </div>
  );
}

export default App;        // Export for use in other files
```

### Key Concepts Explained:

1. **JSX**: JavaScript XML - lets you write HTML-like code in JavaScript
2. **Components**: Reusable pieces of UI
3. **Props**: Data passed between components
4. **State**: Component data that can change
5. **Build Process**: Transforms your code into optimized static files

### Nginx Configuration Explained:

```nginx
server {
    listen 80;                    # Listen on port 80 (HTTP)
    root /var/www/html;           # Document root directory
    index index.html;             # Default file to serve
    
    location / {
        try_files $uri $uri/ /index.html;  # SPA routing fallback
    }
}
```

---

## 🔧 Troubleshooting

### Common Issues and Solutions:

#### 1. "Cannot access site from public IP"
```bash
# Check if Nginx is running
sudo systemctl status nginx

# Check firewall settings
sudo ufw status
sudo ufw allow 80/tcp

# Verify your public IP
curl ifconfig.me
```

#### 2. "404 Not Found on page refresh"
This happens when Nginx doesn't handle React Router properly:
```bash
# Ensure your Nginx config includes:
try_files $uri $uri/ /index.html;
```

#### 3. "npm install fails"
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 4. "Permission denied errors"
```bash
# Fix file permissions
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
```

#### 5. "Build fails with memory issues"
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

---

## 📚 Best Practices

### 1. Code Organization
```
src/
├── components/    # Reusable components
├── pages/         # Page components
├── styles/        # CSS files
├── utils/         # Helper functions
└── assets/        # Images, fonts, etc.
```

### 2. Environment Variables
Create `.env` file for configuration:
```bash
REACT_APP_API_URL=https://api.example.com
REACT_APP_VERSION=1.0.0
```

### 3. Security Considerations
```bash
# Keep system updated
sudo apt update && sudo apt upgrade

# Use SSL certificates (Let's Encrypt)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### 4. Performance Optimization
```javascript
// Use React.memo for component optimization
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});

// Lazy load components
const LazyComponent = React.lazy(() => import('./MyComponent'));
```

---

## 🚀 Extended Learning

### Next Steps to Enhance My Project:

#### 1. Add More React Features
```javascript
// Add state management
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Fetch data when component mounts
    fetchData();
  }, []);
  
  // Your component logic
}
```

#### 2. Add API Integration
```javascript
// Fetch data from an API
const fetchUserData = async () => {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
```

#### 3. Add Routing
```bash
# Install React Router
npm install react-router-dom
```

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

#### 4. Set Up CI/CD Pipeline
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to server
        # Add deployment steps
```

#### 5. Add Testing
```javascript
// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const heading = screen.getByText(/Welcome to My React App/i);
  expect(heading).toBeInTheDocument();
});

test('displays deployment info', () => {
  render(<App />);
  const deployInfo = screen.getByText(/Deployed by:/i);
  expect(deployInfo).toBeInTheDocument();
});
```

#### 6. Add Monitoring
```bash
# Install PM2 for process management
npm install -g pm2

# Create ecosystem file
pm2 init
```

---

## 📖 Additional Resources

### Learning Materials:
- [React Official Documentation](https://react.dev)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Ubuntu Server Guide](https://ubuntu.com/server/docs)
- [DevOps Roadmap](https://roadmap.sh/devops)

### Useful Commands Reference:
```bash
# React Development
npm start          # Start development server
npm test           # Run tests
npm run build      # Build for production
npm install <pkg>  # Install new package

# Nginx Management
sudo systemctl start nginx     # Start Nginx
sudo systemctl stop nginx      # Stop Nginx
sudo systemctl restart nginx   # Restart Nginx
sudo systemctl reload nginx    # Reload configuration
sudo nginx -t                  # Test configuration

# System Management
sudo systemctl status <service>  # Check service status
sudo ufw allow <port>           # Open firewall port
sudo journalctl -u nginx        # View Nginx logs
tail -f /var/log/nginx/error.log # Monitor error logs
```

---

## 🎯 Assessment Checklist

Before submitting your project, ensure:

- [ ] React app builds without errors
- [ ] Your name and date are displayed correctly
- [ ] App is accessible via public IP
- [ ] All links work properly
- [ ] Nginx is properly configured
- [ ] Page refresh doesn't break the app
- [ ] Mobile-friendly responsive design
- [ ] No console errors in browser
- [ ] Security headers are configured
- [ ] Documentation is complete

---

## 🤝 Contributing

Want to improve this guide? Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b improve-docs`)
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📝 License

This project is part of the my DevOps learning journey by **Gustav V. Kiewiets**.

---

**🎉 Congratulations!** You've successfully learned how to deploy a React application on Ubuntu with Nginx. This is a fundamental DevOps skill that you can apply to many real-world projects.

**Next Challenge:** Try deploying a React app with a backend API, or set up SSL certificates for HTTPS!

---

*Happy Coding! 🚀*

