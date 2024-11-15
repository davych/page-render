// import {Button } from "antd"
import React from "react";
import schemas from "./page-render/schema"
import * as antd from "antd"
import SearchForm from "./page-render/Search"

export function App() {
  const renderItem = (item: any) => {
    if (!item) {
      return null
    }
    const componnetName = item.component
    if(componnetName === 'search') {
      return <SearchForm items={item.items} />
    }
    const Component = (antd as any)[componnetName]
    return <Component {...item.props} />
  }
  const layouts = schemas.map((schema, index) => {
    // get component from schema
    const componnetName = schema.component
    // get props from schema
    const props = schema.props
    // get items from schema
    const items = schema.items
    // get item from schema
    const item = schema.item
    const Component = (antd as any)[componnetName]
    return (
      <Component {...props} key={index}>
          {renderItem(item)}
          {items && items.map((item: any, index: number) => renderItem(item))}
      </Component>
    )
  })
  console.log(antd)
  return layouts
}