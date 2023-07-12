import axios from 'axios';
import {PaginableData} from 'src/@types/models/paginableData';
import {PostEntity, PostPagedQuery} from 'src/@types/models/posts';
import {API_PATH} from 'src/constants/common';

export namespace postsApiClient {
  export const get = async (params?: PostPagedQuery) => {
    const response = await axios.get<PaginableData<PostEntity>>(
      `${API_PATH}/posts`,
      {
        params,
      }
    );
    return response.data;
  };
}
