
import { Row, Search, Input, Button } from './cfs'

export default [
    Row({
        props: {},
        children: [
            Search({
                props: {},
                fields: [
                    Input({ name: 'name', label: 'name' }),
                    Input({ name: 'age', label: 'age' }),
                ]
            }),
            Button({
                props: {},
                children: '新增'
            })
        ]
    })
]