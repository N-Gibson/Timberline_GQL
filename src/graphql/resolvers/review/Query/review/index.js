const reviews = async (_parent) => {
  return await models.Review.findAll()
}

export { reviews }
