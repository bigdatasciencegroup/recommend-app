import React, { useRef } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player'

const PlayLottie = ({
  src,
  width = '300px',
  height = '300px',
  controls = false,
  loop,
  background,
  style
}) => {
  const playerRef = useRef()
  return (
    <Player
      ref={playerRef}
      autoplay
      renderer="svg"
      loop={loop}
      background={background}
      src={`${src}`}
      style={style}
    >
      <Controls visible={controls} buttons={['play', 'debug']} />
    </Player>
  )
}

export default PlayLottie
