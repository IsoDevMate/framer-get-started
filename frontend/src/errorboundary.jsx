import  { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {

    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className='p-10 m-3 flex justify-center align-baseline'>Something went wrong.</h1>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;