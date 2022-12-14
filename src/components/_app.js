import { AnimatePresence } from "framer-motion";
import "styles/globals.css";

const MyApp = ({ Component, pageProps, router }) => (
  <AnimatePresence mode="wait" initial={true} onExitComplete={() => window.scrollTo({ top: 0 })}>
    <Component key={router.asPath} {...pageProps} />
  </AnimatePresence>
);

export default MyApp;
