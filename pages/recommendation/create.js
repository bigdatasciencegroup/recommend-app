import React, { useRef, useEffect, useState, Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Button,
  useDisclosure,
  Input,
  Box,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  Text,
  Tag,
  Heading,
  Avatar,
  Switch,
  Divider,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AspectRatio,
  AspectRatioProps
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'
import { useReactMediaRecorder, ReactMediaRecorder } from 'react-media-recorder'
import ReactPlayer from 'react-player'

import Layout from '../../components/layout'
import UploadImage from '../../components/uploadImage'
import SolidButton from '../../components/buttons/solidButton'
import OutlineButton from '../../components/buttons/outlineButton'
import CustomHeading from '../../components/heading/customHeading'

export default function Create() {
  const router = useRouter()
  const { id } = router.query
  const { handleSubmit, errors, register, formState } = useForm()
  const [isPrivate, setIsPrivate] = React.useState(false)
  const [confirmPrivacy, setConfirmPrivacy] = React.useState(false)

  const [isOpen, setIsOpen] = useState(false)

  // for react player
  const [url, setUrl] = useState(null)
  const [pip, setPip] = useState(false)
  const [playing, setPlaying] = useState(true)
  const [controls, setControls] = useState(false)
  const [light, setLight] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [muted, setMuted] = useState(false)
  const [played, setPlayed] = useState(0)
  const [loaded, setLoadded] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1.0)
  const [loop, setLoop] = useState(false)
  const [seeking, setSeeking] = useState(null)
  // const [duration, setDuration] = useState(null)

  // load video player
  const load = (url) => {
    url, setPlayed(0)
    setLoadded(0)
    setPip(false)
  }

  // load video player methods
  const handlePlayPause = () => {
    setPlaying(!playing)
  }

  // stop player
  const handleStop = () => {
    setUrl(null)
    setPlaying(false)
  }

  // toogle controls
  const handleToggleControls = () => {
    setControls(!coltrols)
    setUrl(null)
    const url = () => load(url)
    url
  }

  // toggle light
  const handleToggleLight = () => {
    setLight(!light)
  }

  // toogle loop
  const handleToggleLoop = () => {
    setLoop(!loop)
  }

  // change volume level
  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value))
  }

  // mute / unmute
  const handleToggleMuted = () => {
    setMuted(!muted)
  }

  // playback rate
  const handleSetPlaybackRate = (e) => {
    setPlaybackRate(parseFloat(e.target.value))
  }

  // toogle picture-in-picture
  const handleTogglePIP = () => {
    setPip(!pip)
  }

  // play video
  const handlePlay = () => {
    console.log('onPlay')
    setPlaying(true)
  }

  // enable picture-in-picture
  const handleEnablePIP = () => {
    console.log('onEnablePIP')
    setPip(true)
  }

  // diable picture-in-picture
  const handleDisablePIP = () => {
    console.log('onDisablePIP')
    setPip(false)
  }

  // pause video
  const handlePause = () => {
    console.log('onPause')
    setPlaying(false)
  }

  const handleSeekMouseDown = (e) => {
    setSeeking(true)
  }

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value))
  }

  const handleSeekMouseUp = (e) => {
    setSeeking(false)
    player.setTo(parseFloat(e.taget.value))
  }

  const handleProgress = (seeking) => {
    console.log('onProgress', seeking)
    if (seeking) {
      setSeeking(seeking)
    }
  }

  const handleEnded = () => {
    console.log('onEnded')
    setPlaying(playing.loop)
  }

  const handleDuration = (duration) => {
    console.log('onDuration', duration)
    setDuration(duration)
  }

  const handleClickFullscreen = () => {
    screenfull.request(findDOMNode(player))
  }

  const renderLoadButton = (url, label) => {
    return <button onClick={() => load(url)}>{label}</button>
  }

  const open = () => setIsOpen(!isOpen)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef()
  const videoRef = useRef()
  const player = videoRef

  const alertValue = (value) => {
    let i
    i = setTimeout(() => alertValue(value), 3000)

    const alertValue = () => {
      alert(i)
    }

    return i
  }

  const onToggle = (e) => {
    // if (isPrivate === true) {
    //   setIsOpen(false)
    // }
    setIsPrivate(e.target.value)
    alertValue(e.target.value)
    open
  }

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl
  } = useReactMediaRecorder({
    video: true
  })

  const VideoPreview = ({ stream }) => {
    const videoRef = useRef(null)

    useEffect(() => {
      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream
      }
    }, [stream])
    if (!stream) {
      return null
    }
    return <video ref={videoRef} width={500} height={500} autoPlay controls />
  }

  return (
    <>
      <Layout>
        {/* <CustomHeading
          title="Create a Introduction"
          description="Record an introduction video"
        /> */}
        <Tag
          filter="drop-shadow(1 0 0.75rem blue.300)"
          mb="4"
          px="4"
          py="2"
          borderRadius="full"
          color="gray.500"
        >
          Recording Status: <span className="blue-text"> {status} </span>
        </Tag>

        <Box
          w="full"
          postion="fixed"
          top="0"
          left="0"
          borderRadius="xl"
          mb="16"
        >
          {/* {status === 'recording' && (
            <Box rounded="xl">
              <ReactMediaRecorder
                video
                render={({ previewStream }) => {
                  return <VideoPreview stream={previewStream} />
                }}
              />
            </Box>
          )}
        */}

          {/* {status === 'idle' && (
            <Box borderRadius="xl" width={['100vw', '75vw', '50vw']}>
              <ReactPlayer
                ref={videoRef}
                className="react-player"
                width="100%"
                height="100%"
                url={url}
                pip={pip}
                playing={playing}
                controls={controls}
                light={light}
                loop={loop}
                playbackRate={playbackRate}
                volume={volume}
                muted={muted}
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                onPlay={handlePlay}
                onEnablePIP={handleEnablePIP}
                onDisablePIP={handleDisablePIP}
                onPause={handlePause}
                onBuffer={() => console.log('onBuffer')}
                onSeek={(e) => console.log('onSeek', e)}
                onEnded={handleEnded}
                onError={(e) => console.log('onError', e)}
                onProgress={handleProgress}
                onDuration={handleDuration}
              />
            </Box>
          )} */}

          {status === 'recording' ? (
            <Box rounded="xl" width={['100vw', '75vw', '50vw']}>
              <ReactMediaRecorder
                video
                render={({ previewStream }) => {
                  return (
                    <Box>
                      <VideoPreview stream={previewStream} />
                    </Box>
                  )
                }}
              />
            </Box>
          ) : (
            <Box rounded="xl">
              <ReactPlayer
                ref={videoRef}
                className="react-player"
                width="100%"
                height="100%"
                url={url}
                pip={pip}
                playing={playing}
                controls={controls}
                // light={light}
                // loop={loop}
                // playbackRate={playbackRate}
                // volume={volume}
                // muted={muted}
                // onReady={() => console.log('onReady')}
                // onStart={() => console.log('onStart')}
                // onPlay={handlePlay}
                // onEnablePIP={handleEnablePIP}
                // onDisablePIP={handleDisablePIP}
                // onPause={handlePause}
                // onBuffer={() => console.log('onBuffer')}
                // onSeek={(e) => console.log('onSeek', e)}
                // onEnded={handleEnded}
                // onError={(e) => console.log('onError', e)}
                // onProgress={handleProgress}
                // onDuration={handleDuration}
              />
              <table>
                <tbody>
                  <tr>
                    <th>Controls</th>
                    <td>
                      <button onClick={handleStop}>Stop</button>
                      <button onClick={handlePlayPause}>
                        {playing ? 'Pause' : 'Play'}
                      </button>
                      <button onClick={handleClickFullscreen}>
                        Fullscreen
                      </button>
                      {light && (
                        <button onClick={() => player.showPreview}>
                          Show preview
                        </button>
                      )}
                      {ReactPlayer.canEnablePIP(url) && (
                        <button onClick={handleTogglePIP}>
                          {pip ? 'Disable PiP' : 'Enable PiP'}
                        </button>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th>Speed</th>
                    <td>
                      <button onClick={handleSetPlaybackRate} value={1}>
                        1x
                      </button>
                      <button onClick={handleSetPlaybackRate} value={1.5}>
                        1.5x
                      </button>
                      <button onClick={handleSetPlaybackRate} value={2}>
                        2x
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>Seek</th>
                    <td>
                      <input
                        type="range"
                        min={0}
                        max={0.999999}
                        step="any"
                        value={played}
                        onMouseDown={handleSeekMouseDown}
                        onChange={handleSeekChange}
                        onMouseUp={handleSeekMouseUp}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Volume</th>
                    <td>
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step="any"
                        value={volume}
                        onChange={handleVolumeChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label htmlFor="controls">Controls</label>
                    </th>
                    <td>
                      <input
                        id="controls"
                        type="checkbox"
                        checked={controls}
                        onChange={handleToggleControls}
                      />
                      <em>&nbsp; Requires player reload</em>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label htmlFor="muted">Muted</label>
                    </th>
                    <td>
                      <input
                        id="muted"
                        type="checkbox"
                        checked={muted}
                        onChange={handleToggleMuted}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label htmlFor="loop">Loop</label>
                    </th>
                    <td>
                      <input
                        id="loop"
                        type="checkbox"
                        checked={loop}
                        onChange={handleToggleLoop}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label htmlFor="light">Light mode</label>
                    </th>
                    <td>
                      <input
                        id="light"
                        type="checkbox"
                        checked={light}
                        onChange={handleToggleLight}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Played</th>
                    <td>
                      <progress max={1} value={played} />
                    </td>
                  </tr>
                  <tr>
                    <th>Loaded</th>
                    <td>
                      <progress max={1} value={loaded} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
          )}
        </Box>
        <Button
          mb="4"
          p="8"
          // mt="4"
          w="90%"
          bg="red.400"
          color="white"
          _hover={{ bg: 'red.600' }}
          onClick={
            // {(status === 'idle' || 'stopped') ? startRecording : stopRecording}
            status === ('idle' || 'stopped') ? startRecording : stopRecording
          }
        >
          {status === 'recording' ? 'Stop Recording' : 'Start Recording'}
        </Button>

        {/* OLD UI / Backup */}
        {/* <Stack spacing="10" w="full" fontSize="lg">
          <UploadImage postRequestUrl="#" />

          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={errors.name}>
              <FormLabel fontWeight="bold" mt="4" htmlFor="name">
                First name
              </FormLabel>
              <Input
                mb="2"
                name="name"
                placeholder="Bobby Hall Jr"
                fontWeight="500"
                border="2px solid #333"
                boxShadow="xs"
                // onChange={handleNameChange}
                // value={name}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.company}>
              <FormLabel fontWeight="bold" mt="4" htmlFor="company">
                Company
              </FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Tesla"
                fontWeight="500"
                border="2px solid #333"
                boxShadow="xs"
                // onChange={handleEmailChange}
                // value={email}
              />
              <FormErrorMessage>
                {errors.company && errors.company.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!errors.email} isRequired>
              <FormLabel fontWeight="bold" mt="6" htmlFor="name">
                Email
              </FormLabel>
              <Input
                isRequired
                name="email"
                type="email"
                placeholder="bobbyhalljrcs@gmail.com"
                fontWeight="500"
                border="2px solid #333"
                boxShadow="xs"
                // onChange={handleEmailChange}
                // value={email}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!errors.recommendation} isRequired>
              <FormLabel fontWeight="bold" mt="10" htmlFor="recommendation">
                Recommendation
              </FormLabel>
              <Textarea
                isRequired
                size="md"
                h="200px"
                type="textarea"
                name="recommendation"
                fontWeight="500"
                placeholder="Jane has been a pleasure to work with. I would absolutely love to work with her again!"
                border="2px solid #333"
                boxShadow="xs"
                // onChange={handleRecommendationChange}
                // value={recommendation}
              />
              <FormErrorMessage>
                {errors.recommendation && errors.recommendation.message}
              </FormErrorMessage>
            </FormControl>

            <Divider h="2rem" />
            <FormControl mt="6" mb="24" display="flex" alignItems="center">
              <FormLabel
                htmlFor="make-private"
                fontWeight="600"
                fontSize={['md', 'xl', '2xl']}
              >
                Make recommendation private?
              </FormLabel>
              <Switch
                isDisabled={isPrivate ? false : true}
                onClick={() => onToggle}
                // onChange={onToggle}
                value={isPrivate}
                ml="auto"
                pr="2rem"
                size="lg"
                id="make-private"
                colorScheme="green"
              />
            </FormControl>

            {isPrivate ? (
              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      Private Recommendations
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      Private recommendations can only be seen by you and who
                      ever you share them with.
                      <Text mt="2" d="block">
                        Are you sure?
                      </Text>
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme="blue" onClick={onToggle} ml={3}>
                        Make Private
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            ) : (
              ''
            )}

            <SolidButton
              // isLoading={formState.isSubmitting}
              type="submit"
              text="Finish and Review"
              href="/recommendation/[id]"
              as={`/recommendation/${id}`}
            />
          </form>
        </Stack> */}

        <OutlineButton text="Back home" href="/" as="/" />
      </Layout>
    </>
  )
}
