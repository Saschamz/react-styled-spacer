export interface SpacerConfig {
  debug?: boolean
  multiplier?: number
  default?: number
}

export interface CreateSpacerConfigParams extends SpacerConfig {
  custom?: Record<string, string | number>
}

const createSpacerConfig = ({ custom = {}, ...config }: CreateSpacerConfigParams) => ({
  spacers: {
    ...config,
    ...custom,
  },
})

export default createSpacerConfig
