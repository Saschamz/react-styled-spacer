import styled, { css } from 'styled-components/native'
import { SpacerProps } from './Spacer'

const debugStyles = css`
  background: hotpink;
`

interface Measure {
  value: number
  suffix: string
}

const acceptableSuffixes = ['rem', 'em', 'vh', 'vw', 'px']

const createMeasure = (input: number | string): Measure => {
  const value = +input.toString().replace(/\D.+/g, '')
  const suffix = input.toString().replace(/[0-9]/g, '')

  return {
    value,
    suffix: acceptableSuffixes.includes(suffix) ? suffix : 'px',
  }
}

const getDefaultSize = (theme: any) => (theme?.spacers?.debug ? 10 : 0)

const getHeight = (theme: any, h: any) =>
  theme?.spacers?.[h] ?? h ?? theme?.spacers?.default ?? getDefaultSize(theme)

const getWidth = (theme: any, w: any) =>
  theme?.spacers?.[w] ?? w ?? theme?.spacers?.default ?? getDefaultSize(theme)

const getMultiplier = (theme: any) => theme?.spacers?.multiplier ?? 1

const getRoundedValue = (input: number | string, multiplier: number) => {
  const measure = createMeasure(input)
  return `${Math.round(measure.value * multiplier)}${measure.suffix}`
}

export const Space = styled.View<SpacerProps>`
  height: ${({ h, theme }) => getRoundedValue(getHeight(theme, h), getMultiplier(theme))};
  width: ${({ w, theme }) => getRoundedValue(getWidth(theme, w), getMultiplier(theme))};
  ${({ grow }) => grow && `flex-grow: ${grow};`}
  ${({ shrink }) => shrink && `flex-shrink: ${shrink};`}
  ${({ theme }) => theme?.spacers?.debug && debugStyles}
`
