// Error boundaries are React components that catch JavaScript errors in their child component tree during rendering, 
// lifecycle methods, and event handlers.They provide a way to gracefully handle errors and prevent the entire 
// application from crashing.

// Here's an example that illustrates the usage of error boundaries:

import React, { Component } from 'react';

// Error boundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or send it to an error tracking service
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again.</h1>;
    }
    return this.props.children;
  }
}

// Component that may throw an error
function MyComponent() {
  const randomValue = Math.random();

  if (randomValue < 0.5) {
    throw new Error('Error in MyComponent');
  }

  return <div>{randomValue}</div>;
}

// Parent component that uses the error boundary
function App() {
  return (
    <div>
      <h1>Error Boundary Example</h1>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </div>
  );
}
// In this example, the ErrorBoundary component is created as a class component. 
// It implements the componentDidCatch lifecycle method, which is called when an error is thrown in its child components.
// The getDerivedStateFromError static method is used to update the state when an error occurs.

// The ErrorBoundary component renders the child components if no error has occurred. However, if an error is caught, 
// it renders an error message instead.

// The MyComponent is a functional component that may throw an error conditionally.

// The App component renders the ErrorBoundary component and wraps the MyComponent component with it. 
// This ensures that any errors thrown by MyComponent are caught by the error boundary and handled gracefully.

// When an error is thrown in MyComponent, the ErrorBoundary component will catch it, 
// update its state, and display the error message instead of the faulty component.
// The error can also be logged or sent to an error tracking service in the componentDidCatch method.

// Error boundaries are useful for handling unexpected errors and preventing the entire React component 
// tree from crashing.They provide a fallback UI and allow the application to continue functioning instead of abruptly stopping.

!!!Unverified information!!!
/**
 * Error boundaries cannot be functional components. Error boundaries in React must be implemented as class components. 
 * This is because error boundaries rely on the lifecycle methods, specifically`componentDidCatch` and`getDerivedStateFromError`, 
 * which are not available in functional components.
 * 
 * The `componentDidCatch` lifecycle method is called when an error is thrown in the component tree below the error boundary. 
 * It allows the error boundary to handle the error and update its state accordingly.Additionally, the`getDerivedStateFromError` 
 * static method is used to update the state of the error boundary when an error occurs.
 * 
 * These lifecycle methods are only available in class components, not in functional components. 
 * Therefore, to implement error boundaries in React, you must use a class component.
 * 
 * However, functional components can still be used within an error boundary component tree. 
 * If an error occurs in a functional component, it will be caught by the nearest error boundary 
 * component higher up in the hierarchy, even if the error boundary itself is a class component.
*/