"use client";

import { ThemeProvider } from 'next-themes'
import React from 'react'

const Providers = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default Providers
