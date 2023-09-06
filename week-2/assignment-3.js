function calculate(data) {
  let totalDiscounted = 0
  data.products.forEach(product => {
    totalDiscounted += product.price * (1 - data.discount)
  })
  return totalDiscounted
}