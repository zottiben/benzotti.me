import { useState, useEffect, ReactElement } from "react";
import type { NextPage } from "next";
import { Main } from "../components/layout";

export default function Home<NextPage>() {
  return (
    <span className="text-green-500 font-body">
      Home page placeholder content updated
    </span>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};
