import {Button } from "antd"
import React from "react";
import schema from "./page-render/schema"

export function App() {
  return <><Button type="primary">Hello world!</Button> {JSON.stringify(schema)}</>
}