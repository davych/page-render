import React from 'react';
import { Form, Input, Button } from 'antd';
import * as antd from 'antd';

interface FormItem {
    component: string;
    id: string;
    formItemProps: any;
    componentProps: any;
}

interface SearchFormProps {
    items: FormItem[];
}

const componentMap: { [key: string]: any } = {
    input: Input,
    // Add other components here as needed
};

const SearchForm: React.FC<SearchFormProps> = ({ items }) => {
    console.log('items:', items);
    const [form] = Form.useForm();

    const renderFormItem = (item: FormItem) => {
        const Component = (antd as any)[item.component];
        if (!Component) return null;

        return (
            <Form.Item key={item.id} {...item.formItemProps}>
                <Component {...item.componentProps} />
            </Form.Item>
        );
    };

    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return (
        <Form form={form} onFinish={onFinish}>
            {items.map(renderFormItem)}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Search
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SearchForm;