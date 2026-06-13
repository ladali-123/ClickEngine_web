import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    // You can also log the error to an external service here
    // console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-xl bg-white shadow-lg rounded-lg p-6 border">
            <h2 className="text-xl font-bold mb-2 text-red-600">Something went wrong</h2>
            <pre className="text-sm text-slate-700 whitespace-pre-wrap">{String(this.state.error)}</pre>
            <details className="mt-3 text-xs text-slate-500">
              {this.state.info?.componentStack}
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
