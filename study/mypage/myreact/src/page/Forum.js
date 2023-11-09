import React, { useState, useEffect } from 'react';
import { Box, Button, Link, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Prime from '../components/Prime';

const Forum = () => {
  const forumData = [
    { id: 1, title: '첫 번째 글 제목', content: '안녕하세요' },
    { id: 2, title: '두 번째 글 제목', content: '저희는 4조 입니다.' },
    { id: 3, title: '세 번째 글 제목', content: '저희는 이번 조별활동에 있어' },
    { id: 4, title: '네 번째 글 제목', content: 'useParams와 usePagination훅을 배워보고자 했습니다.' },
    { id: 5, title: '다섯 번째 글 제목', content: <Prime /> },
    { id: 6, title: '여섯 번째 글 제목', content: '여섯 번째 글 내용...' },
    { id: 7, title: '일곱 번째 글 제목', content: '일곱 번째 글 내용...' },
    { id: 8, title: '여덟 번째 글 제목', content: '여덟 번째 글 내용...' },
    { id: 9, title: '아홉 번째 글 제목', content: '아홉 번째 글 내용...' },
    { id: 10, title: '열 번째 글 제목', content: '열 번째 글 내용...' },
  ];

  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const slicedData = forumData.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const images = [
    'https://s3.ap-southeast-1.amazonaws.com/we-xpats.com/uploads/article/ko_592_1.jpg',
    'https://images.velog.io/images/fromzoo/post/25badbb6-d09e-4061-88d2-0f91b84d528b/reactLogo.jpeg',
    'https://pozafly.github.io/static/e092969a3269e232f50e03e941f3d22f/c02d0/main.png',
    'https://t1.daumcdn.net/cfile/tistory/992F94385B960B3825',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage();
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentImageIndex]);


  return (
    <Box
      maxW="600px"
      mx="auto"
      mt="4"
      bg="linear-gradient(135deg, #64b5f6, #9575cd, #4db6ac, #f06292)"
      minH="100vh" 
      p="4"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {slicedData.map((post) => (
        <Box
          key={post.id}
          borderWidth="1px"
          p="4"
          my="3"
          borderRadius="md"
          boxShadow="md"
          bg="white"
          width="100%"
        >
          {post.id === 1 ? (
            <Link
              as={RouterLink}
              to="/prime" 
              fontWeight="bold"
              color="blue.600"
              mb="2"
              display="block"
            >
              {post.title}
            </Link>
          ) : (
            <Link
              as={RouterLink}
              to={`/post/${post.id}`}
              fontWeight="bold"
              color="blue.600"
              mb="2"
              display="block"
            >
              {post.title}
            </Link>
          )}
          <p color="gray.600">{post.content}</p>
          <Flex justify="center" mt="3">
            <Box w="100px" h="80px" bgImage={`url(${images[currentImageIndex]})`} bgSize="cover" bgPos="center" />
          </Flex>
        </Box>
      ))}
      <Flex justify="center">
      <Button 
        onClick={previousPage} 
        isDisabled={currentPage === 1} 
        mt="3" 
        mr="3"
        _hover={{
          bg: 'blue.200',
          color: 'white',
        }}
      >
        이전 페이지
      </Button>
      <Button
        onClick={nextPage}
        isDisabled={startIndex + itemsPerPage >= forumData.length}
        mt="3"
        _hover={{
          bg: 'green.200',
          color: 'white',
        }}
      >
        다음 페이지
      </Button>
      </Flex>
    </Box>
  );
};

export default Forum;