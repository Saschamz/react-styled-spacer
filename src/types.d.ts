export interface SpacerConfig {
  debug?: boolean
  multiplier?: number
  default?: number
}

export interface CreateSpacerConfigParams extends SpacerConfig {
  custom: Record<string, string | number>
}

export interface SpacerProps {
  /** width */
  w?: number | string
  /** height */
  h?: number | string
  /** flex-grow */
  grow?: number | string
  /** flex-shrink */
  shrink?: number | string
}
