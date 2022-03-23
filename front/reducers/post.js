export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '배트맨',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://avatars.githubusercontent.com/u/68384429?v=4',
    }, {
      src: 'https://avatars.githubusercontent.com/u/101045256?s=180&v=4',
    }, {
      src: 'https://avatars.githubusercontent.com/u/87898975?s=200&v=4',
    }],
    Comments: [{
      User: {
        nickname: '수퍼맨',
      },
      content: '오 첫글이당',
    }, {
      User: {
        nickname: '짱구',
      },
      content: '좋구먼유',
    }]
  }],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
}
const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '정기수',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts]
      }
    default:
      return state;
  }
};

export default reducer;