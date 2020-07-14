import React from 'react'

export default function Flex(props: {children?: React.ReactNode}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {props.children}
    </div>
  )
}
