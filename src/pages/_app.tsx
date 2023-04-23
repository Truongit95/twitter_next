import "@/styles/globals.css";

import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import Layout from "../../components/Layout";
import LoginModel from "../../components/models/LoginModel";
import RegisterModal from "../../components/models/RegisterModal";
import EditModal from "../../components/models/EditModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <EditModal />
      <LoginModel />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
