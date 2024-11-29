// import {Button } from "antd"
import React, {useRef, useEffect, useState} from "react";
import { Form, Row, Col, Input, Button, Table } from "antd";
import axios from "axios";

const fetchData = (params: any) => axios.get("https://www.episodate.com/api/most-popular", {params}).then((res) => res.data);

export function App() {
  const config: any = {
    "search": {
      "fields": [
        { "name": "name", "label": "Name", "type": "input" },
        { "name": "age", "label": "Age", "type": "input" }
      ],
      "buttons": [
        { "type": "primary", "text": "Search", "onClick": "$handleSearch" },
        { "type": "default", "text": "Reset", "onClick": "$handleReset" }
      ]
    },
    "table": {
      "columns": [
        { "title": "Name", "dataIndex": "name", "key": "name" },
        { "title": "Start date", "dataIndex": "start_date", "key": "start_date" }

      ],
      "fetchData": fetchData
    }
  }
  const formRef = useRef(null);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const loadTableData = async () => {
      setLoading(true);
      try {
        const data = await config.table.fetchData();
        console.log(data)
        setDataSource(data?.tv_shows || []);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTableData();
  }, [config.table.fetchData]);

  return (
    <div>
      <Row justify="space-around">
        <Col span={24}>
          <Form layout="inline" ref={formRef}>
            {config.search.fields.map((field: any) => (
              <Form.Item label={field.label} name={field.name} key={field.name}>
                <Input />
              </Form.Item>
            ))}
            {config.search.buttons.map((button: any) => (
              <Button
                type={button.type}
                key={button.text}
                onClick={button.onClick}
              >
                {button.text}
              </Button>
            ))}
          </Form>
        </Col>
        <Col span={24}>
          <Table
            columns={config.table.columns}
            dataSource={dataSource}
            loading={loading}
          />
        </Col>
      </Row>
    </div>
  );
}