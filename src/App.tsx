import { useState } from 'react'
import { Button } from '@aleksei-uzin/custom-components-lib'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello React!!!</h1>
      <Button color="info" onClick={() => setCount(count + 1)} variant="outlined">
        count: {count}
      </Button>
    </>
  )
}
