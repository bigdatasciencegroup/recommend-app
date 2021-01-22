import React, { useState, useRef } from 'react'
import {
  Box,
  Image,
  Tag,
  Avatar,
  AvatarBadge,
  Text,
  Heading,
  Button,
  Divider,
  toast
} from '@chakra-ui/react'
import PlayLottie from '../../lotties/helper'

export default function UploadImage(postRequestUrl) {
  const [image, setImage] = useState({ preview: '', raw: '' })
  const playerRef = useRef()

  let handleUpload

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      })
    }

    const handleUpload = async (e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append('image', image.raw)

      await fetch(`${postRequestUrl || ''}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formData
      })
    }

    handleUpload
  }

  return (
    <Box
      margin="0 auto"
      d="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mt="10"
    >
      <label htmlFor="upload-button">
        {image.preview ? (
          <Box
            d="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Avatar
              cursor="pointer"
              boxShadow="xl"
              w="150px"
              h="150px"
              name="JD"
              src={image.preview}
            />{' '}
            <Tag
              fontSize="md"
              boxShadow="sm"
              letterSpacing=".2"
              bg="gray.100"
              fontWeight="bold"
              py="2"
              px="8"
              color="blue.400"
              borderRadius="full"
              whiteSpace="nowrap"
              textAlign="center"
              my="4"
              variant="outline"
            >
              Change
            </Tag>
          </Box>
        ) : (
          <Box
            bg="gray.100"
            color="gray.400"
            w={['1/4', '1/2']}
            h={['1/4', '1/2']}
            p="6"
            cursor="pointer"
            border="4px dashed #29B6F6"
            _hover={{ color: 'gray.500' }}
            borderRadius="2xl"
          >
            <Box w="100%">
              <PlayLottie
                ref={playerRef}
                src="https://assets9.lottiefiles.com/packages/lf20_xeyt1z/Photo.json"
                loop={false}
                style={{ width: '200px', height: '150px', color: '#333' }}
                // background="#3490DC"
                complete={playerRef.complete && <i className="fas fa-camera" />}
              />
            </Box>
            <span
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}
              // className="fa-3x"
              fill="#a5a5a5"
            >
              {/* <i className="fas fa-camera" /> */}
              <Text
                textAlign="center"
                whiteSpace="nowrap"
                as="h5"
                fontSize="sm"
                // mt="2"
                fontWeight="bold"
              >
                Upload photo or video
              </Text>
            </span>
          </Box>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
    </Box>
  )
}
