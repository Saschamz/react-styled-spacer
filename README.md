# React Styled Spacer

A versatile spacing component used to represent whitespace in your layout for both React and React-Native.

## Installation

```sh
npm i react-styled-spacer
```

## Usage

While not a requirement, configuration is available through the `styled-components` library.

```ts
import Spacer from 'react-styled-spacer'
import { ThemeProvider } from 'styled-components'

const App = () => (
  const spacerConfig = createSpacerConfig({
    debug: false,
    multiplier: 1,
    default: 0
    custom: {
      small: 10,
      medium: 20,
    }
  })

  <ThemeProvider theme={{ ...spacerConfig }}>
    <h1>I have 20px below me</h1>
    {/* Any value can be used, will default to pixels */}
    <Spacer h={20} />
    <p>I have 20px above me</p>
    {/* Works with styled-components theming context */}
    <Spacer h="small" />
    <ul>
      {/* Will space between children if provided */}
      <Spacer h={20}>
        <li>I have 20px below me</li>
        <li>I have 20px below & above me</li>
        <li>I have 20px above me</li>
      </Spacer>
    </ul>
    {/* Will space around children instead if provided spaceAround */}
    <Spacer spaceAround h={20}>
      <p>I have 20 px below and above me</p>
    </Spacer>
  </ThemeProvider>
)
```

## Spacer Props

| Property    | type           | required | default   | description                          |
| ----------- | -------------- | -------- | --------- | ------------------------------------ |
| h           | string, number | false    | 10px      | Specifies spacer height              |
| w           | string, number | false    | 10px      | Specifies spacer width               |
| grow        | string, number | false    | undefined | flex-grow property for flexbox use   |
| shrink      | string, number | false    | undefined | flex-shrink property for flexbox use |
| spaceAround | boolean        | false    | false     | Spaces around its children           |

## createSpacerConfig params

| Property   | type           | required | default | description                                |
| ---------- | -------------- | -------- | ------- | ------------------------------------------ |
| custom     | object         | false    | {}      | Maps the key to represent a value as w/h   |
| debug      | boolean        | false    | false   | Shows spacers                              |
| default    | string, number | false    | 0       | Default value for height and width         |
| multiplier | number         | false    | 1       | Scaling multiplier applied to every spacer |
