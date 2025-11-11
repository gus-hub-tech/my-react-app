import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('React App Deployment Simulator', () => {
  test('renders simulator title', () => {
    render(<App />);
    const titleElement = screen.getByText(/React App Deployment on Ubuntu with Nginx/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders interactive deployment guide subtitle', () => {
    render(<App />);
    const subtitleElement = screen.getByText(/Interactive deployment guide and simulator/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  test('shows first step by default', () => {
    render(<App />);
    const stepTitle = screen.getByText(/Step 1: Install Node.js and npm/i);
    expect(stepTitle).toBeInTheDocument();
  });

  test('progress bar shows correct initial progress', () => {
    render(<App />);
    const progressCount = screen.getByText(/1\/8/);
    expect(progressCount).toBeInTheDocument();
  });

  test('next button advances to next step', () => {
    render(<App />);
    const nextButton = screen.getByText(/Next →/);
    
    fireEvent.click(nextButton);
    
    const stepTitle = screen.getByText(/Step 2: Install Nginx/i);
    expect(stepTitle).toBeInTheDocument();
  });

  test('previous button is disabled on first step', () => {
    render(<App />);
    const prevButton = screen.getByText(/← Previous/);
    
    expect(prevButton).toHaveClass('disabled');
    expect(prevButton).toBeDisabled();
  });

  test('can navigate to step 3 and modify deployer info', () => {
    render(<App />);
    const nextButton = screen.getByText(/Next →/);
    
    // Navigate to step 4 (index 3) where input fields are
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    
    const stepTitle = screen.getByText(/Step 4: Modify App.js with your details/i);
    expect(stepTitle).toBeInTheDocument();
    
    const nameInput = screen.getByPlaceholderText(/Enter your full name/i);
    const dateInput = screen.getByPlaceholderText(/DD\/MM\/YYYY/i);
    
    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
  });

  test('can input deployer name and date', () => {
    render(<App />);
    const nextButton = screen.getByText(/Next →/);
    
    // Navigate to step 4
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    
    const nameInput = screen.getByPlaceholderText(/Enter your full name/i);
    const dateInput = screen.getByPlaceholderText(/DD\/MM\/YYYY/i);
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(dateInput, { target: { value: '11/11/2025' } });
    
    expect(nameInput.value).toBe('John Doe');
    expect(dateInput.value).toBe('11/11/2025');
  });

  test('shows preview button on final step', () => {
    render(<App />);
    const nextButton = screen.getByText(/Next →/);
    
    // Navigate to last step (step 8)
    for (let i = 0; i < 7; i++) {
      fireEvent.click(nextButton);
    }
    
    const previewButton = screen.getByText(/🎉 Preview Deployed App/i);
    expect(previewButton).toBeInTheDocument();
  });

  test('next button is disabled on last step', () => {
    render(<App />);
    const nextButton = screen.getByText(/Next →/);
    
    // Navigate to last step
    for (let i = 0; i < 7; i++) {
      fireEvent.click(nextButton);
    }
    
    expect(nextButton).toHaveClass('disabled');
    expect(nextButton).toBeDisabled();
  });

  test('shows preview mode when clicking preview button', () => {
    render(<App />);
    const nextButton = screen.getByText(/Next →/);
    
    // Navigate to last step
    for (let i = 0; i < 7; i++) {
      fireEvent.click(nextButton);
    }
    
    const previewButton = screen.getByText(/🎉 Preview Deployed App/i);
    fireEvent.click(previewButton);
    
    // Check if preview content is shown
    const previewTitle = screen.getByText(/Welcome to My React App/i);
    expect(previewTitle).toBeInTheDocument();
    
    const backButton = screen.getByText(/← Back to Deployment Guide/i);
    expect(backButton).toBeInTheDocument();
  });

  test('can return from preview mode to simulator', () => {
    render(<App />);
    const nextButton = screen.getByText(/Next →/);
    
    // Navigate to last step
    for (let i = 0; i < 7; i++) {
      fireEvent.click(nextButton);
    }
    
    const previewButton = screen.getByText(/🎉 Preview Deployed App/i);
    fireEvent.click(previewButton);
    
    const backButton = screen.getByText(/← Back to Deployment Guide/i);
    fireEvent.click(backButton);
    
    // Should be back to simulator
    const simulatorTitle = screen.getByText(/React App Deployment on Ubuntu with Nginx/i);
    expect(simulatorTitle).toBeInTheDocument();
  });

  test('renders DevOps cohort footer', () => {
    render(<App />);
    const footerText = screen.getByText(/DevOps for Beginners Cohort/i);
    expect(footerText).toBeInTheDocument();
  });

  test('step indicators match total number of steps', () => {
    const { container } = render(<App />);
    const stepDots = container.querySelectorAll('.step-dot');
    expect(stepDots.length).toBe(8);
  });

  test('active step indicator updates when navigating', () => {
    const { container } = render(<App />);
    const nextButton = screen.getByText(/Next →/);
    
    // Initially first dot should be active
    let activeDots = container.querySelectorAll('.step-dot.active');
    expect(activeDots.length).toBe(1);
    
    // Navigate to next step
    fireEvent.click(nextButton);
    
    // Now first two dots should be active
    activeDots = container.querySelectorAll('.step-dot.active');
    expect(activeDots.length).toBe(2);
  });
});
