import React from 'react';
import { Card, CardContent, Typography, Grid2, Box, Container, Chip } from '@mui/material';
import { posts } from '../data/posts';
import { Header } from './Header';

export const Toppage = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}/${month}/${day}`;
  };

  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ pb: 5 }}>
        <Grid2 container direction="column" spacing={5}>
            {posts.map((post) => (
              <Grid2 key={post.id}>
                <Card
                sx={{
                  boxShadow: 'none',
                  border: '1px solid #e0e0e0',
                  pr: 10
                  }}
                  >
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                      <Typography
                      sx={{
                        fontSize: '13px',
                        color: '#888888'
                        }}
                        >
                          {formatDate(post.createdAt)}
                      </Typography>
                      <Box>
                        {post.categories.map((category, index) => (
                          <Box sx={{ mr: 1, display: 'inline-block' }}>
                            <Chip
                            label={category}
                            key={index}
                            color="primary"
                            variant="outlined"
                            sx={{ borderRadius: 1 }}
                            />
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Typography sx={{ fontSize: '24px' }}>{post.title}</Typography>
                    <Typography
                      sx={{
                        pt: 2,
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                      }}
                    >
                      {post.content}
                      </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
        </Grid2>
      </Container>
      </>
  );
};

export default Toppage;