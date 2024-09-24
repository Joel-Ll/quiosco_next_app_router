import React from 'react';

interface Props {
  children: React.ReactNode
}

export default function Heading({children}: Props) {
  return (
    <h1 className="text-2xl my-10">{children}</h1>
  )
}
