(async function() {
  try {
    await Promise.resolve('oopsie #1')
    await Promise.reject('oopsie #2')
  } catch (err) {
    console.log(err)
  }
  console.log('is this still good?')
})()