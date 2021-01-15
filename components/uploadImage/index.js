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
              w="200px"
              h="200px"
              name="JD"
              src={image.preview}
            />{' '}
            <Tag
              fontSize="md"
              color="white"
              boxShadow="md"
              letterSpacing=".2"
              bg="blue.300"
              fontWeight="bold"
              py="2"
              px="8"
              borderRadius="full"
              whiteSpace="nowrap"
              textAlign="center"
              my="4"
            >
              Change
            </Tag>
          </Box>
        ) : (
          <Box
            bg="gray.100"
            color="gray.400"
            w={['1/2', 'full']}
            h={['1/2', 'full']}
            p="6"
            cursor="pointer"
            border="4px dashed #29B6F6"
            _hover={{ color: 'gray.500' }}
            borderRadius="xl"
          >
            <span
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}
              className="fa-3x"
              fill="#a5a5a5"
            >
              <i className="fas fa-camera" />
              <Text
                textAlign="center"
                whiteSpace="nowrap"
                as="h5"
                fontSize="sm"
                mt="2"
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
