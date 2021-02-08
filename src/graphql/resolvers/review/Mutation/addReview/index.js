const addReview = async (_parent, { id, name, rating, reviewContent }) => {
  return await models.Review.create({
    id,
    name,
    rating,
    reviewContent,
  })
}

export { addReview }
