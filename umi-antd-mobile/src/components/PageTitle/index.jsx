import React from 'react'

import styles from './index.less'

function PageTitle({ children }) {
  return <div className={styles.title}>{children}</div>
}

export default PageTitle
