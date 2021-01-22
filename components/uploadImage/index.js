import React, { useState } from 'react'
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
import PlayLottie from '../../lotties/hello/helper'

export default function UploadImage(postRequestUrl) {
  const [image, setImage] = useState({ preview: '', raw: '' })

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
      mt="16"
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
            // w={['1/2', 'full']}
            // h={['1/2', 'full']}
            p="6"
            cursor="pointer"
            border="4px dashed #29B6F6"
            _hover={{ color: 'gray.500' }}
            borderRadius="xl"
          >
            <PlayLottie
              src="https://assets9.lottiefiles.com/packages/lf20_xeyt1z/Photo.json"
              loop={false}
              style={{ width: '200px', height: '150px' }}
              // background="#3490DC"
              // style={{ borderRadius: '2rem', height: '200px', width: '100%' }}
            />
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
                Upload photo/video
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
