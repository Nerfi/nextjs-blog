//  CSS to be loaded by every page
import "../styles/globals.css";

export default function App({Component, pageProps}) {
    return <Component {...pageProps}/>
}