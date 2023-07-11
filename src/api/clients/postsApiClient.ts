import axios from 'axios';
import {PaginableData} from 'src/@types/models/PaginableData';
import {PostEntity, PostPagedQuery} from 'src/@types/models/posts';
import {API_PATH} from 'src/constants/common';

const postsApiClient = () => {
  const get = async (params?: PostPagedQuery) => {
    const response = await axios.get<PaginableData<PostEntity>>(
      `${API_PATH}/posts`,
      {
        params,
      }
    );
    return response.data;
  };
  return {
    get,
  };
};

export default postsApiClient;
