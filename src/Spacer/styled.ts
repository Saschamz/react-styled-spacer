import styled, { css } from 'styled-components/native'
import { SpacerProps } from './Spacer'

const debugStyles = css`
  background: hotpink;
`

const endsWith = (value: string, strings: string[]) => strings.some(s => value.endsWith(s))

const acceptableSuffixes = ['rem', 'em', 'vh', 'vw', 'px']

const getSuffix = (space: string | number) => {
  const hasSuffix = endsWith(space.toString(), acceptableSuffixes)

  if (hasSuffix) {
    return space
  }

  return `${space}px`
}

const getDefaultSize = (theme: any) => (theme?.spacers?.debug ? 10 : 0)

const getHeight = (theme: any, h: any) =>
  theme?.spacers?.[h] ?? h ?? theme?.spacers?.default ?? getDefaultSize(theme)

const getWidth = (theme: any, w: any) =>
  theme?.spacers?.[w] ?? w ?? theme?.spacers?.default ?? getDefaultSize(theme)

const getMultiplier = (theme: any) => theme?.spacers?.multiplier ?? 1

export const Space = styled.View<SpacerProps>`
  height: ${({ h, theme }) => getSuffix(getHeight(theme, h) * getMultiplier(theme))};
  width: ${({ w, theme }) => getSuffix(getWidth(theme, w) * getMultiplier(theme))};
  ${({ grow }) => grow && `flex-grow: ${grow};`}
  ${({ shrink }) => shrink && `flex-shrink: ${shrink};`}
  ${({ theme }) => theme?.spacers?.debug && debugStyles}
`
