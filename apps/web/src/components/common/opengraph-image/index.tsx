import React from 'react'

type OpenGraphImageProps = {
  title: string
  fontSize?: number
  fontFamily?: string
}

export const OpenGraphImage: React.FC<OpenGraphImageProps> = ({
  title,
  fontSize = 128,
  fontFamily,
}) => (
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
      fontFamily,
    }}
  >
    {title}
  </div>
)
