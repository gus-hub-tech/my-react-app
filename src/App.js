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

  const handleNameChange = (e) => {
    setDeployerName(e.target.value || 'Your Full Name');
  };

  const handleDateChange = (e) => {
    setDeploymentDate(e.target.value || 'DD/MM/YYYY');
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  if (showPreview) {
    return (
      <div className="preview-container">
        <div className="preview-content">
          <div className="preview-app">
            <h1 className="preview-title">Welcome to My React App</h1>
            <p className="preview-subtitle">This app is running on Nginx!</p>

            <div className="preview-deployment-info">
              <h2 className="preview-deployer">
                Deployed by: <strong>{deployerName}</strong>
              </h2>
              <p className="preview-date">
                Date: <strong>{deploymentDate}</strong>
              </p>
            </div>

            <hr className="preview-divider" />

            <div className="preview-resources">
              <p className="preview-intro">
                P.S. This post is part of the FREE DevOps for Beginners Cohort run by
                <strong> Pravin Mishra</strong>.
              </p>
              <p className="preview-link">
                You can start your DevOps journey for free from his{" "}
                <a
                  href="https://www.youtube.com/playlist?list=PLVOdqXbCs7bX88JeUZmK4fKTq2hJ5VS89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preview-youtube-link"
                >
                  YouTube Playlist
                </a>.
              </p>
              <p className="preview-link">
                Connect with Pravin on{" "}
                <a
                  href="https://www.linkedin.com/in/pravin-mishra-aws-trainer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preview-linkedin-link"
                >
                  LinkedIn
                </a>.
              </p>
            </div>
          </div>
          
          <button onClick={togglePreview} className="back-button">
            ← Back to Deployment Guide
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="simulator-container">
      <div className="simulator-content">
        <div className="simulator-header">
          <h1 className="simulator-title">React App Deployment on Ubuntu with Nginx</h1>
          <p className="simulator-subtitle">Interactive deployment guide and simulator</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-header">
            <span className="progress-label">Progress</span>
            <span className="progress-count">{currentStep + 1}/{steps.length}</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Current Step */}
        <div className="step-container">
          <h2 className="step-title">
            Step {currentStep + 1}: {steps[currentStep]}
          </h2>
          
          <div className="step-content">
            {currentStep === 0 && (
              <div>
                <p>Install Node.js and npm on your Ubuntu VM:</p>
                <code className="code-block">
                  sudo apt update<br/>
                  sudo apt install -y nodejs npm
                </code>
              </div>
            )}
            
            {currentStep === 1 && (
              <div>
                <p>Install and start Nginx web server:</p>
                <code className="code-block">
                  sudo apt install -y nginx<br/>
                  sudo systemctl start nginx<br/>
                  sudo systemctl enable nginx
                </code>
              </div>
            )}
            
            {currentStep === 2 && (
              <div>
                <p>Clone the React application repository:</p>
                <code className="code-block">
                  git clone https://github.com/gus-hub-tech/my-react-app.git<br/>
                  cd my-react-app
                </code>
              </div>
            )}
            
            {currentStep === 3 && (
              <div>
                <p>Customize the App.js file with your details:</p>
                <div className="input-container">
                  <label className="input-label">Your Full Name:</label>
                  <input
                    type="text"
                    value={deployerName === 'Your Full Name' ? '' : deployerName}
                    onChange={handleNameChange}
                    placeholder="Enter your full name"
                    className="input-field"
                  />
                  <label className="input-label">Deployment Date:</label>
                  <input
                    type="text"
                    value={deploymentDate === 'DD/MM/YYYY' ? '' : deploymentDate}
                    onChange={handleDateChange}
                    placeholder="DD/MM/YYYY"
                    className="input-field"
                  />
                </div>
              </div>
            )}
            
            {currentStep === 4 && (
              <div>
                <p>Install dependencies and build the application:</p>
                <code className="code-block">
                  npm install<br/>
                  npm run build
                </code>
              </div>
            )}
            
            {currentStep === 5 && (
              <div>
                <p>Deploy build files to Nginx directory:</p>
                <code className="code-block">
                  sudo rm -rf /var/www/html/*<br/>
                  sudo cp -r build/* /var/www/html/<br/>
                  sudo chown -R www-data:www-data /var/www/html
                </code>
              </div>
            )}
            
            {currentStep === 6 && (
              <div>
                <p>Configure Nginx for React SPA routing:</p>
                <code className="code-block">
                  # Configure Nginx server block<br/>
                  sudo systemctl restart nginx
                </code>
              </div>
            )}
            
            {currentStep === 7 && (
              <div>
                <p>Your React app is now live! Access it via your public IP:</p>
                <code className="code-block">
                  curl ifconfig.me  # Get your public IP<br/>
                  http://your-public-ip
                </code>
                <button onClick={togglePreview} className="preview-button">
                  🎉 Preview Deployed App
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="navigation">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`nav-button prev-button ${currentStep === 0 ? 'disabled' : ''}`}
          >
            ← Previous
          </button>

          <div className="step-indicators">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`step-dot ${index <= currentStep ? 'active' : ''}`}
                onClick={() => setCurrentStep(index)}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`nav-button next-button ${currentStep === steps.length - 1 ? 'disabled' : ''}`}
          >
            Next →
          </button>
        </div>

        {/* Footer */}
        <div className="simulator-footer">
          <p className="footer-content">
            🚀 <strong>DevOps for Beginners Cohort</strong> by Pravin Mishra
          </p>
          <p className="footer-description">
            Learn DevOps fundamentals through hands-on projects like this React deployment
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
