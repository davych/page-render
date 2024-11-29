import React, { useEffect } from 'react';
import { Table as AntdTable } from 'antd';

type TableProps = {
    config: {
        features: any;
        props: any;
    },
    query: any;
}

const Table: React.FC<TableProps> = ({ config, query: searchQuery = {} }) => {
    const { features } = config;
    const rtkQuery = features.rtkQuery;
    const [query, setQuery] = React.useState({ page: 1, pageSize: 20 });
    const responseTransform = features.responseTransform;
    const { data, isFetching, isSuccess } = rtkQuery({...query, ...searchQuery}, {
        refetchOnMountOrArgChange: true,
    });
    const pagination = config.props.pagination
    const [list, setList] = React.useState([]);
    const total = data?.[features.totalKey] || 0;

    pagination.total = total;
    pagination.showTotal = (total: number) => `Total ${total} items`;
    pagination.onChange = (page: number, pageSize: number) => {
        setQuery({ page, pageSize: 20 });
    }
    
    useEffect(() => {
        if (isSuccess && !isFetching) {
                setList(responseTransform(data));
        }
    }
    ,[isSuccess, isFetching, setList]);

    return (
        <AntdTable dataSource={list} {...config.props} pagination={pagination} loading={isFetching} />
    );
};

export default Table;