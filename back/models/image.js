module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', { // MySQL에는 users 테이블 생성
    // id가 기본적으로 들어있음.
    src: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
}