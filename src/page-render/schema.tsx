import {useGetPopularMoviesQuery } from '../services'
export default [
  {
    // items are chilren for layout component
    items: [
      {
        component: 'search',
        items: [
          {
            component: 'Input',
            id: '',
            formItemProps: {
              label: 'Name',
              name: 'name'
            },
            componentProps: {}
          },
          {
            component: 'Input',
            id: '',
            formItemProps: {
              label: 'Age',
              name: 'age'
            },
            componentProps: {}
          }
        ],
        props: {
            // search is a form kind component, the props will pass to a Form
            layout: 'inline',
        },
        features: {
          resetButtonHidden: true,
          resetButtonText: 'Reset',
          searchButtonText: 'Search'
        }
      },
      {
        component: 'Button',
        props: {
          type: 'primary',
          children: 'Create',
          onClick: () => {
            // do something
            console.log('create')
          }
        }
      }
    ],
    component: 'Row',
    props: {
      // props will as props pass to component 
      justify: 'space-between',
    }
  },
 {
    component: 'Row',
    props: {
      // props will as props pass to component 
      
    },
    item: {
      component: 'table',
      props: {
        pagination: {
          pageSize: 20,
          showSizeChanger: false,
          showQuickJumper: false,
        },
        style:{width: '100%'},
        columns: [
          {
            // antd table column props
            title: 'Name',
            dataIndex: 'name',
            key: 'name'

          },
          {
            // antd table column props
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
          }
        ]
      },
      features: {
        rtkQuery: useGetPopularMoviesQuery,
        responseTransform: (data: any) => {
          return data?.tv_shows || []
        },
        totoalPageKey: 'pages',
        totalKey: 'total',
      }
    }
  }
]
 
