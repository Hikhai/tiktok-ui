import * as httpRequest from '~/utils/httpRequest';
const suggestedService = async (page = 1, per_page = '5') => {
  try {
    const res = await httpRequest.get('users/suggested', {
      params: {
        page,
        per_page,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default suggestedService;

// https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=5
