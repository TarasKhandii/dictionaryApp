import axios from 'axios';

export const getDictionaryWord = (words: string) => {
  return axios({
    method: 'get',
    url: '/entries/en/',
    params: {words},
  });
};
