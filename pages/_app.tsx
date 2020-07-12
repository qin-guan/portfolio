import 'antd/dist/antd.css'
import "../components/Fonts.css"
import "../components/A.css"
import {useEffect} from "react";
import LogRocket from 'logrocket';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    LogRocket.init('qin-guans-workspace/portfolio');
  })
  return <Component {...pageProps} />
}
