# React Styled Spacer

A versatile spacing component used to represent whitespace in your layout for both React and React-Native.

## Installation

```sh
npm i react-styled-spacer
```

## Usage

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
    <div>
      <h1>Lorem ipsum</h1>
      {/* Any value can be used, will default to pixels */}
      <Spacer h={20} />
      <p>Lorem ipsum</p>
      {/* Works with styled-components theming context */}
      <Spacer h="small" />
      <ul>
        {/* Will space between children if provided */}
        <Spacer h={20}>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </Spacer>
      </ul>
    </div>
  </ThemeProvider>
)
```

## Spacer Props

| Property | type           | required | description                          |
| -------- | -------------- | -------- | ------------------------------------ |
| h        | string, number | false    | Specifies spacer height              |
| w        | string, number | false    | Specifies spacer width               |
| grow     | string, number | false    | flex-grow property for flexbox use   |
| shrink   | string, number | false    | flex-shrink property for flexbox use |

## createSpacerConfig params

| Property   | type           | required | default | description                                |
| ---------- | -------------- | -------- | ------- | ------------------------------------------ |
| custom     | object         | false    | {}      | Maps the key to represent a value as w/h   |
| debug      | boolean        | false    | false   | Shows spacers                              |
| default    | string, number | false    | 0       | Default value for height and width         |
| multiplier | number         | false    | 1       | Scaling multiplier applied to every spacer |
