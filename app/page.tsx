'use client'

import Main from '@/app/components'
import { NextUIProvider } from '@nextui-org/react'
import type { FC } from 'react'
import React from 'react'

const App: FC = () => {
  return (
    <NextUIProvider>
      <Main />
    </NextUIProvider>
  )
}

export default React.memo(App)
