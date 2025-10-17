declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'

declare module '*.{png,jpg,jpeg,gif}' {
  const content: string
  export default content
}

declare module '*.svg' {
  import * as React from 'react'
  const ReactComponent: React.FunctionComponent<
    React.PropsWithChildren<React.SVGProps<SVGSVGElement>>
  >
  export default ReactComponent
}

declare module '*.svg?url' {
  const content: string
  export default content
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
