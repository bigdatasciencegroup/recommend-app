import React, { useState } from "react";
import { Box, Image, Tag, Avatar, AvatarBadge, Text, Heading, Button, Divider, toast } from '@chakra-ui/react'

export default function UploadImage(postRequestUrl) {
  const [image, setImage] = useState({ preview: "", raw: "" });

    let handleUpload;

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }

    const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
    
        await fetch(`${postRequestUrl || 'https://picsum.photos'}`, {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          body: formData
        });
      };

      handleUpload
  };

  return (
    <Box
        margin='0 auto'
        d='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        mt='1rem'
    >
      <label htmlFor="upload-button">
        {image.preview ? (
        <Box d='flex' justifyContent='center' alignItems='center' flexDirection='column'>
          <Avatar boxShadow='2xl' size="2xl" name="JD" src={image.preview} />{" "}        
          <Tag fontSize='sm' color='gray.700' bg='blue.200' fontWeight='bold' py='2' px='4' borderRadius='full' whiteSpace='nowrap' textAlign='center' my='4'>Change Image</Tag>
        </Box>
        ) : (
          <Box bg='gray.100' color='gray.500' w='10rem' h='9rem' p='4' border='4px dashed #a5a5a5' borderRadius='50%'>
            <span style={{ display: 'flex', justifyContent: 'center', marginTop: '.7rem', alignItems: 'center', flexDirection: 'column' }} className="fa-3x" fill='#a5a5a5'>
              <i className="fas fa-camera"/>
            <Text textAlign='center' whiteSpace='nowrap' as='h5' fontSize='sm' fontWeight='bold'>Upload your photo</Text>
            </span>
          </Box>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
    </Box>
  );
}