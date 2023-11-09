import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Prime from '../components/Prime';

const PostDetails = () => {
  const { postId } = useParams();
  // API 또는 DB에서 postId에 해당하는 글 데이터를 가져와야 함

  // 임시 가상 데이터 예시
  const postData = [
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

  return (
    <Box>
      <Heading as="h2" mb="4">
          <Link
            as={RouterLink}
            to={`/postData/${postData.id}`}
            fontWeight="bold"
            color="blue.600"
            mb="2"
            display="block"
          >
            {postData.title}
          </Link>
      </Heading>
      <Text>{postData.content}</Text>
    </Box>
  );
};

export default PostDetails;