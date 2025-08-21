import React from 'react'

type OpenGraphImageProps = {
  title: string
  fontSize?: number
}

export const OpenGraphImage: React.FC<OpenGraphImageProps> = ({ title, fontSize = 128 }) => (
  <div
    style={{
      fontSize,
      background: 'black',
      color: 'white',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {title}
  </div>
)
