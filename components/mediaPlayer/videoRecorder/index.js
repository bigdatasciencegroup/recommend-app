import { useReactMediaRecorder } from 'react-media-recorder'

const VideoRecorder = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl
  } = useReactMediaRecorder({ screen: true })

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video src={mediaBlobUrl} controls muted={true} autoplay loop />
    </div>
  )
}
export default VideoRecorder
