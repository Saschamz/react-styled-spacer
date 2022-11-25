import { CreateSpacerConfigParams } from '../types'

const createSpacerConfig = ({ custom = {}, ...config }: CreateSpacerConfigParams) => ({
  spacers: {
    ...config,
    ...custom,
  },
})

export default createSpacerConfig
