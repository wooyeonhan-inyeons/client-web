import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("access_token");

  return (
    <div>
      <h1>ACCESS TOKEN</h1>
      <p>{query}</p>
    </div>
  );
}
