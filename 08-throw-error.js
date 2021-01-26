function attachTitle(string) {
  return 'DR. ' + string;
}

var fulfilled = new Promise((fulfill, reject) => {
  fulfill('MANHATTAN');
})

fulfilled
  .then(attachTitle)
  .then(console.log)