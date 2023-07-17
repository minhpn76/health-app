import {Container, Box} from '@mui/material';
import Recommend from './components/Recommend';
import Posts from './components/Posts';
import {useState} from 'react';
import {PostType} from 'src/@types/models/posts';
import {usePostsQuery} from 'src/hooks/posts/usePostQueries';

let pageNumber = 1;

const ColumnPage = () => {
  const [postType, setPostType] = useState<PostType>();
  const {
    data: posts,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = usePostsQuery({postType});

  const handleLoadMore = async () => {
    pageNumber += 1;
    await fetchNextPage({pageParam: pageNumber});
  };

  const handleChangePostType = (type: PostType) => {
    setPostType(type);
  };

  return (
    <Container maxWidth="lg" sx={{py: 6}}>
      <Recommend onChangePostType={handleChangePostType} />
      <Box my={5}>
        <Posts
          isLoading={isLoading || isFetchingNextPage}
          onLoadMore={handleLoadMore}
          hasNextPage={hasNextPage}
          data={posts}
        />
      </Box>
    </Container>
  );
};

export default ColumnPage;
