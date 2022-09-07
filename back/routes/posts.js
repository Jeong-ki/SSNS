// limit. offset
const express = require('express');

const { Post, User, Image, Comment } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /posts
  try {
    const posts = await Post.findAll({
      // where: { id: lastId },
      limit: 10, // 10개 가져오기
      order: [
        ['createdAt', 'DESC'], // 게시글 정렬
        [Comment, 'createdAt', 'DESC'], // 댓글 정렬
      ],
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }]
      }, {
        model: User, // 좋아요 누른사람
        as: 'Likers',
        attributes: ['id'],
      }]
    });
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;