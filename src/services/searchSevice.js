import * as httpRequest from '~/utils/httpRequest';
export const search = async (q, type = 'less') => {
  try {
    const res = await httpRequest.get('/users/search', {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=5
