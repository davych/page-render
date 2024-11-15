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
        },
        "feature-toggle": {
          resetButtonHidden: Boolean,
          resetButtonText: 'Reset',
          searchButtonText: 'Search'
        }
      }
    ],
    component: 'Flex',
    props: {
      // props will as props pass to component 
    }
  },
 {
    component: 'Row',
    props: {
      // props will as props pass to component 
    },
    item: {
      component: 'Table',
      props: {
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
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
          }
        ]
      },
      config: {
        rtkQuery: () => {}
      }
    }
  }
]
 
