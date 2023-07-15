export const LOCAL_STORAGE_KEY = {
  TOKEN_PAYLOAD: 'token',
  //mock
  KEY_TOKEN: '_mock_token',
  KEY_USERS: '_mock_users',
  KEY_POSTS: '_mock_posts',
  KEY_MEAL_HISTORY: '_mock_meal_history',
  KEY_MY_DIARY: '_mock_my_diary',
  KEY_MY_EXERCISE: '_mock_my_exercise',
  KEY_BODY_RECORD: '_mock_body_records',
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const API_PATH = `${import.meta.env.VITE_APP_URI || ''}/api/v1`;

export const TIME_DELAY = 3000;
