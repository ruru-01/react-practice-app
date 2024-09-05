import React from 'react'
import { Card, Typography, Box, Container, Chip, CardMedia } from '@mui/material';
import { posts } from '../data/posts';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

export const Detail = () => {
  const { id } = useParams();

  // idに対応する投稿を検索
  const post = posts.find((post) => post.id === Number(id));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}/${month}/${day}`;
  };

  return (
    <Container maxWidth="md" sx={{ pb: 5 }}>
      <Card>
        <CardMedia
          component="img"
          image={post.thumbnailUrl}
          alt={post.title}
        />
      </Card>
      <Box sx={{ padding: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '13px', color: '#888888' }}>
            {formatDate(post.createdAt)}
          </Typography>
          <Box>
            {post.categories.map((category, index) => (
              <Box key={index} sx={{ mr: 1, display: 'inline-block' }}>
                <Chip
                  label={category}
                  color="primary"
                  variant="outlined"
                  sx={{ borderRadius: 1 }}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Typography sx={{ fontSize: '24px', padding: '15px 0' }}>
          {post.title}
        </Typography>
        <Typography sx={{ fontSize: '16px' }}>
          {parse(post.content)}
        </Typography>
      </Box>
    </Container>
  );
};