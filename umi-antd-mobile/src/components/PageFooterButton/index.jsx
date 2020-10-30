import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Button } from 'antd-mobile'
import styles from './index.less'

function PageFooterButton({
  children,
  flex,
  primary,
  second,
  buttons,
  className,
  grayBackground,
}) {
  const renderSecond = ({ text, ...p }) => (
    <Button type="ghost" {...p}>
      {text}
    </Button>
  )

  const renderPrimary = ({ text, ...p }) => (
    <Button type="primary" {...p}>
      {text}
    </Button>
  )

  return (
    <div
      className={classnames(
        styles.wrapper,
        className,
        grayBackground ? styles.gray : null,
      )}
    >
      {children}
      {(second || primary) && (
        <div
          className={classnames(
            flex ? styles.buttonGroup : styles.noFlexButtonGroup,
          )}
        >
          {second && renderSecond(second)}
          {primary && renderPrimary(primary)}
        </div>
      )}
      {!!(buttons && buttons.length) && (
        <div
          className={classnames(
            flex ? styles.buttonGroup : styles.noFlexButtonGroup,
          )}
        >
          {buttons.map(({ text, ...resetBtnProps }, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Button {...resetBtnProps} key={index}>
              {text}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

PageFooterButton.defaultProps = {
  primary: null,
  second: null,
  grayBackground: false,
  flex: true,
}
PageFooterButton.propTypes = {
  primary: PropTypes.shape({ text: PropTypes.node.isRequired }),
  second: PropTypes.shape({ text: PropTypes.node.isRequired }),
  grayBackground: PropTypes.bool,
  flex: PropTypes.bool,
}

export default PageFooterButton
