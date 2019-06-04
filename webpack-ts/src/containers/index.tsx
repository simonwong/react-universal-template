import * as React from 'react'

import GlobalLoading from '@/component/GlobalLoading'

class IndexApp extends React.Component {
    public render () {
        return (
            <div>
                主页
                <GlobalLoading show />
            </div>
        )
    }
}

export default IndexApp
