'use client'
import React from 'react'

import { useLeaf } from '../../../providers/LeafProvider.js'

export const Italic = () => {
  const { attributes, children } = useLeaf()
  return <em {...attributes}>{children}</em>
}
