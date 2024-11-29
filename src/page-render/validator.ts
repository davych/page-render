import * as yup from 'yup';
import * as antd from 'antd';
/**
 * schema 定义过度复杂 方案1 poc 放弃
 */
type ComponentNames = keyof typeof antd;
type ComponentNamesWithSearchTable = ComponentNames | 'search' | 'table';
const componentKeys = [...Object.keys(antd), 'search', 'table'] as ComponentNames[];

const itemSchema = yup.object().shape({
    component: yup.mixed<ComponentNamesWithSearchTable>().oneOf(componentKeys).required(),
    props: yup.object().shape({
        pagination: yup.object().shape({
            pageSize: yup.number().required(),
            showSizeChanger: yup.boolean(),
            showQuickJumper: yup.boolean()
        }),
        style: yup.object(),
        columns: yup.array().of(
            yup.object().shape({
                title: yup.string().required(),
                dataIndex: yup.string().required(),
                key: yup.string().required()
            })
        )
    }),
    features: yup.object().shape({
        rtkQuery: yup.mixed().required(),
        responseTransform: yup.mixed().required(),
        totoalPageKey: yup.string().required(),
        totalKey: yup.string().required()
    })
});

const validatorSchema = yup.object().shape({
    items: yup.array().of(
        yup.object().shape({
            component: yup.string().required(),
            items: yup.array().of(
                yup.object().shape({
                    component: yup.string().required(),
                    id: yup.string().nullable(),
                    formItemProps: yup.object().shape({
                        label: yup.string().required(),
                        name: yup.string().required()
                    }),
                    componentProps: yup.object()
                })
            ),
            props: yup.object().shape({
                layout: yup.string().oneOf(['inline', 'horizontal', 'vertical']).required()
            }),
            features: yup.object().shape({
                resetButtonHidden: yup.boolean(),
                resetButtonText: yup.string(),
                searchButtonText: yup.string()
            })
        })
    ).optional(),
    component: yup.string().required(),
    props: yup.object().shape({
        justify: yup.string().oneOf(['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'])
    }),
    item: yup.object().shape({
        component: yup.string().required(),
        props: yup.object().shape({
            pagination: yup.object().shape({
                pageSize: yup.number().required(),
                showSizeChanger: yup.boolean(),
                showQuickJumper: yup.boolean()
            }),
            style: yup.object(),
            columns: yup.array().of(
                yup.object().shape({
                    title: yup.string().required(),
                    dataIndex: yup.string().required(),
                    key: yup.string().required()
                })
            )
        }),
        features: yup.object().shape({
            rtkQuery: yup.mixed().required(),
            responseTransform: yup.mixed().required(),
            totoalPageKey: yup.string().required(),
            totalKey: yup.string().required()
        })
    })
});

export default validatorSchema;