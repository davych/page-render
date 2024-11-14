export default [
  {
    // items are chilren for layout component
    items: [
      {
        component: 'search',
        items: [
          {
            component: 'input',
            id: '',
            formItemProps: {},
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
    component: 'flex',
    props: {
      // props will as props pass to component 
    }
  },
 {
    component: 'flex',
    props: {
      // props will as props pass to component 
    },
    item: {
      component: 'table',
      props: {},
      config: {
        rtkQuery: () => {}
      }
    }
  }
]
 
