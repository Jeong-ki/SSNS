const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User, Post } = require('../models'); // db.User
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /user
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'], // 비밀번호만 빼고 가져오기
        },
        include: [{
          model: Post,
          attributes: ['id'], // id만 가져옴, 데이터 효율을 위해
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
      })
      return res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// signup
router.post('/', isNotLoggedIn, async (req, res, next) => { // POST /user/
  console.log('back user')
  try {
    // 이메일 중복체크
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12); // 10~13의 숫자를 보통 넣어줌
    await User.create({ // create : 테이블 안에 데이터 넣는 것
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send('ok');
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

// login (+middleware 확장, express 기법)
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    // passport login
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ['password'], // 비밀번호만 빼고 가져오기
        },
        include: [{
          model: Post,
        }, {
          model: User,
          as: 'Followings',
        }, {
          model: User,
          as: 'Followers'
        }]
      })
      return res.status(200).json(fullUserWithoutPassword);
    })
  })(req, res, next);
}); // POST /user/login

// logout
router.post('/logout', isLoggedIn, (req, res) => { // POST /user/logout
  req.logout();
  req.session.destory();
  res.send('ok');
})

module.exports = router;