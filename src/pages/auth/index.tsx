import React from "react";

export default function Auth() {
  const params = new URLSearchParams(location.search);

  const token = params.get("access_token");

  return <div>{token}</div>;
}
