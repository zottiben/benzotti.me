import { useState, useEffect, ReactElement } from "react";
import type { NextPage } from "next";
import { Main } from "../components/layout";
import Head from "next/head";

export default function Home<NextPage>() {
  return (
    <>
      <Head>
        <title>Ben Zotti - Software Engineer</title>
      </Head>
      <div className="flex flex-col text-green-500 font-body mt-8">
        <div className="flex flex-col pb-4">
          <span>→ Ben Zotti</span>
          <span>→ Software Engineer</span>
        </div>
        <span>
          → 📧{" "}
          <a href="mailto:hello@benzotti.me" target="_blank" rel="noreferrer">
            hello@benzotti.me
          </a>
        </span>
        <span>
          → 👾{" "}
          <a
            href="https://github.com/zottiben"
            target="_blank"
            rel="noreferrer"
          >
            github.com/zottiben
          </a>
        </span>
        <span>
          → 🐘{" "}
          <a
            href="https://mastodon.social/@nasilemak"
            target="_blank"
            rel="noreferrer"
          >
            @nasilemak
          </a>
        </span>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};
