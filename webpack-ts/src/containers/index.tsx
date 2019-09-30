import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import GlobalLoading from '@/components/GlobalLoading'

const IndexApp = () => (
    <div>
        主页
        <GlobalLoading show />
    </div>
)

export default hot(IndexApp)
