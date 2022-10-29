import { memo, ReactNode } from "react";
import Head from "next/head";

interface PageProps {
  children: ReactNode[] | ReactNode;
}

interface MainLayoutProps extends PageProps {
  headerButtons?: JSX.Element[];
}

export const Main = ({ children, headerButtons }: MainLayoutProps) => {
  return (
    <>
      {/* <Head>
        <title>BenZotti.me</title>
        <meta name="description" content="Personal website for benzotti.me" />
      </Head> */}
      <main className="flex overflow-hidden flex-row h-screen w-full bg-black">
        <div className="container mx-auto px-4">{children}</div>
      </main>
    </>
  );
};
