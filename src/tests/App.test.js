import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('React App Deployment Simulator - Integration Tests', () => {
  test('renders simulator with correct title', () => {
    render(<App />);
    const heading = screen.getByText(/React App Deployment on Ubuntu with Nginx/i);
    expect(heading).toBeInTheDocument();
  });

  test('displays first deployment step', () => {
    render(<App />);
    const stepText = screen.getByText(/Install Node.js and npm/i);
    expect(stepText).toBeInTheDocument();
  });

  test('progress indicator shows step 1 of 8', () => {
    render(<App />);
    const progress = screen.getByText(/1\/8/);
    expect(progress).toBeInTheDocument();
  });

  test('navigation buttons work correctly', () => {
    render(<App />);
    
    // Previous button should be disabled initially
    const prevButton = screen.getByText(/← Previous/);
    expect(prevButton).toBeDisabled();
    
    // Next button should be enabled
    const nextButton = screen.getByText(/Next →/);
    expect(nextButton).not.toBeDisabled();
  });

  test('complete deployment flow navigation', () => {
    render(<App />);
    const nextButton = screen.getByText(/Next →/);
    
    // Navigate through all steps
    const steps = [
      /Install Node.js and npm/i,
      /Install Nginx/i,
      /Clone React App from GitHub/i,
      /Modify App.js with your details/i,
      /Install Dependencies & Build/i,
      /Deploy to Nginx/i,
      /Configure Nginx/i,
      /Access via Public IP/i
    ];
    
    steps.forEach((stepPattern, index) => {
      const stepElement = screen.getByText(stepPattern);
      expect(stepElement).toBeInTheDocument();
      
      if (index < steps.length - 1) {
        fireEvent.click(nextButton);
      }
    });
  });

  test('preview mode displays deployed app content', () => {
    render(<App />);
    const nextButton = screen.getByText(/Next →/);
    
    // Navigate to last step
    for (let i = 0; i < 7; i++) {
      fireEvent.click(nextButton);
    }
    
    // Click preview button
    const previewButton = screen.getByText(/Preview Deployed App/i);
    fireEvent.click(previewButton);
    
    // Verify preview content
    expect(screen.getByText(/Welcome to My React App/i)).toBeInTheDocument();
    expect(screen.getByText(/This app is running on Nginx!/i)).toBeInTheDocument();
  });

  test('custom deployer information persists in preview', () => {
    render(<App />);
    const nextButton = screen.getByText(/Next →/);
    
    // Navigate to step 4 (modify details)
    for (let i = 0; i < 3; i++) {
      fireEvent.click(nextButton);
    }
    
    // Enter custom information
    const nameInput = screen.getByPlaceholderText(/Enter your full name/i);
    const dateInput = screen.getByPlaceholderText(/DD\/MM\/YYYY/i);
    
    fireEvent.change(nameInput, { target: { value: 'Jane Smith' } });
    fireEvent.change(dateInput, { target: { value: '15/12/2025' } });
    
    // Navigate to last step and preview
    for (let i = 0; i < 4; i++) {
      fireEvent.click(nextButton);
    }
    
    const previewButton = screen.getByText(/Preview Deployed App/i);
    fireEvent.click(previewButton);
    
    // Verify custom data appears in preview
    expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
    expect(screen.getByText(/15\/12\/2025/i)).toBeInTheDocument();
  });

  test('renders Pravin Mishra attribution in preview', () => {
    render(<App />);
    const nextButton = screen.getByText(/Next →/);
    
    // Navigate to preview
    for (let i = 0; i < 7; i++) {
      fireEvent.click(nextButton);
    }
    
    fireEvent.click(screen.getByText(/Preview Deployed App/i));
    
    // Check for attribution
    expect(screen.getByText(/Pravin Mishra/i)).toBeInTheDocument();
  });

  test('footer renders DevOps cohort information', () => {
    render(<App />);
    const footer = screen.getByText(/DevOps for Beginners Cohort/i);
    expect(footer).toBeInTheDocument();
  });
});
