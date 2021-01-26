function parsePromised(json) {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(json));
    } catch(error) {
      reject(error);
    }
  })
}

parsePromised(process.argv[2])
  .then(console.log)
  .catch(console.error)