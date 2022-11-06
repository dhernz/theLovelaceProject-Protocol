import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { utils } from "@worldcoin/id";
import { WidgetProps } from "@worldcoin/id";
import { useEffect } from "react";
import React from "react";

const WorldIDWidget = dynamic<WidgetProps>(() => import("@worldcoin/id").then((mod) => mod.WorldIDWidget), { ssr: false });

const widgetProps: WidgetProps = {
  actionId: "wid_staging_bfe4290947ce4edc99f9eb9ff0e41d32",
  signal: "user-id-1",
  enableTelemetry: true,
  appName: "ConfCon",
  signalDescription: "Get your ticket to ConfCon 2023",
  theme: "dark",
  onSuccess: (result) => console.log(result),
  onError: ({ code, detail }) => console.log({ code, detail }),
  onInitSuccess: () => console.log("Init successful"),
  onInitError: (error) => console.log("Error while initialization World ID", error),
};

const Home: NextPage = () => {
  useEffect(() => {
    console.log("Random Number from utils: ", utils.randomNumber(1, 100));
  }, []);

  return (
    <div>
        <WorldIDWidget {...widgetProps} />
    </div>
  );
};

export default Home;