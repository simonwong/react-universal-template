import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as ArrowRight } from '@/assets/arrow-right.svg'

import styles from './index.less'

const ICON_MAP = {
  arrowRight: ArrowRight,
}

const CoIcon = ({ type, style, className, props }) => {
  if (ICON_MAP[type]) {
    const Icon = ICON_MAP[type]
    return (
      <Icon style={style} className={`${styles.svg} ${className}`} {...props} />
    )
  }
  return null
}

CoIcon.propTypes = {
  type: PropTypes.oneOf(Object.keys(ICON_MAP)).isRequired,
}

export default CoIcon
