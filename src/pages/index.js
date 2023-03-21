import React from "react";
import { Redirect } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home() {
  const docusaurus = useDocusaurusContext();
  return <Redirect to={`/${docusaurus.siteConfig.baseUrl}blog`} />;
}
