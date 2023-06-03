import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("access_token");

  const { access_token } = useParams();

  return (
    <div>
      <h1>ACCESS TOKEN</h1>
      <p> use search parameters {query}</p>
      <p> useParams {access_token}</p>
    </div>
  );
}
