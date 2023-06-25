"use client";

import { FC } from "react";
import useConversation from "../hooks/useConversation";
import EmptyState from "../components/EmptyState";
import clsx from "clsx";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
};

export default page;
