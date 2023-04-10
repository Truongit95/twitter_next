import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../../components/Layout";
import LoginModel from "../../components/models/LoginModel";
import RegisterModal from "../../components/models/RegisterModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
   <>
   <RegisterModal/>
   <LoginModel/>
    <Layout>
       <Component {...pageProps} />
    </Layout>
   </>
  );
}
