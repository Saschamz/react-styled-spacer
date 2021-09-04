import styled, { css } from 'styled-components/native'
import { SpacerProps } from './Spacer'

const debugStyles = css`
  background: hotpink;
`

function endsWith(value: string, strings: string[]) {
  return strings.some((s) => value.endsWith(s))
}

function getSuffix(space: string | number) {
  const hasSuffix = endsWith(space.toString(), ['rem', 'em', 'vh', 'vw', 'px'])

  if (hasSuffix) {
    return space
  }

  return `${space}px`
}

export const Space = styled.View<SpacerProps>`
  height: ${({ h, theme }) => getSuffix(theme?.spacers?.[h] || h || 0)};
  width: ${({ w, theme }) => getSuffix(theme?.spacers?.[w] || w || 0)};
  ${({ grow }) => grow && `flex-grow: ${grow};`}
  ${({ shrink }) => shrink && `flex-shrink: ${shrink};`}
  ${({ theme }) => theme?.spacers?.debug && debugStyles}
`
