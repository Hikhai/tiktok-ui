import * as httpRequest from '~/utils/httpRequest';
const followingService = async (page) => {
  try {
    const res = await httpRequest.get('me/followings', {
      params: {
        page,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default followingService;

// https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=5
