module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('Hashtag', { // MySQL에는 users 테이블 생성
    // id가 기본적으로 들어있음.
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci' // mb4: 이모티콘 저장
  });
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  };
  return Hashtag;
}