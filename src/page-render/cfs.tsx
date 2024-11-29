import { Row, RowProps, Form, FormProps, Button, ButtonProps, Table, TableProps } from "antd";
type RowRenderProps = {
  props: RowProps;
  children: any;
};

function RowRender({ props, children }: RowRenderProps): any {
  return <Row {...props}>{children}</Row>;
}

function SearchRender({ props, fields }: any) {
  return <Form {...props}>{JSON.stringify(fields)}</Form>;
}

function InputRender({ name, label }: any) {
  return name + label;
}

function ButtonRender({ props, children }: any) {
    return <Button {...props}>{children}</Button>;
}

function TableRender({ props }: any) {
  console.log(props);
    return <Table {...props} />;
}

export {
    RowRender as Row,
    SearchRender as Search,
    InputRender as Input,
    ButtonRender as Button,
    TableRender as Table
};
