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
    config: {
        items: FormItem[];
        props?: any;
        [key: string]: any;
    },
    onFinish: (values: any) => void;
   
}

const SearchForm: React.FC<SearchFormProps> = ({ config,onFinish }) => {
    const { items, props } = config;
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

    return (
        <Form form={form} onFinish={onFinish} {...props}>
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