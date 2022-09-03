module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // MySQL에는 users 테이블 생성
    // id가 기본적으로 들어있음.
    email: {
      type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
      allowNull: false, // false: 필수 
      unique: true, // 고유한 값
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false, // 필수 
    },
    password: {
      type: DataTypes.STRING(100), // pw는 암호화를 하기 때문에 길게 잡아놈
      allowNull: false, // 필수 
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci' // 한글 저장
  });
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Likers' }); // 사용자와 게시글 안에있는 좋아요의 관계, 중간 테이블 이름 Like
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'followingId' });
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'followerId' });
  };
  return User;
}