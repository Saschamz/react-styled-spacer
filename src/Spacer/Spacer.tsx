import React, { FC } from 'react'
import { SpacerProps } from '../types'
import * as S from './styled'

const Spacer: FC<SpacerProps & { children?: any[] }> = ({ children, ...spacerProps }) => {
  const isConfigured = spacerProps.w || spacerProps.h

  if (!isConfigured) {
    return null
  }

  if (children) {
    const spacedChildren = children.reduce((acc, curr, index, arr) => {
      const isLastElement = index === arr.length - 1
      const isOnlyElement = arr.length === 1
      acc.push(curr)
      if (!isLastElement && !isOnlyElement) {
        acc.push(<S.Space key={index.toString()} {...spacerProps} />)
      }
      return acc
    }, [])

    return spacedChildren
  }

  return <S.Space {...spacerProps} />
}

export default Spacer
