// pages/_app.js
import '../styles/global.css';
import '../styles/index.css';
import '../styles/portfolio.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
