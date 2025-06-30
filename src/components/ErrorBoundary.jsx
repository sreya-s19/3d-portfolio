// src/components/ErrorBoundary.jsx

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{ padding: '2rem', color: 'white', textAlign: 'center' }}>
          <h1>Something went wrong inside the 3D Scene.</h1>
          <pre style={{ color: 'red', textAlign: 'left', background: '#222', padding: '1rem', borderRadius: '5px', whiteSpace: 'pre-wrap' }}>
            {this.state.error.toString()}
          </pre>
          <p>This usually happens if an image or 3D model path is incorrect. Check the console (F12) for a 404 error.</p>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;