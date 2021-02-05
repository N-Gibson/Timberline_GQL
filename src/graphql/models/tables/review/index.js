const review = (sequelize, DataTypes) => {
  const Review = sequelize.define('review', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    rating: {
      type: DataTypes.NUMBER,
      unique: false,
      allowNull: false,
    },
    reviewContent: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
  })
}

export default Review
