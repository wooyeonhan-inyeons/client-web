import React from "react";
import { useParams } from "react-router-dom";

export default function Auth() {
  const { token } = useParams();
  return <div>{token}</div>;
}
