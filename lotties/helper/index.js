import React, { useRef } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player'

const PlayLottie = ({
  src,
  hover,
  width = '300px',
  height = '300px',
  controls = false,
  loop,
  background,
  style,
  complete
}) => {
  const playerRef = useRef()
  return (
    <Player
      ref={playerRef}
      autoplay
      renderer="svg"
      loop={loop}
      hover={hover}
      background={background}
      src={src}
      style={style}
      complete={complete}
    >
      <Controls visible={controls} buttons={['play', 'debug']} />
    </Player>
  )
}

export default PlayLottie
