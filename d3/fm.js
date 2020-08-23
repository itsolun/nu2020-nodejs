//file read write example
fs.open('myfile.js', 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error('myfile already exists');
        return;
      }
  
      throw err;
    }
  
    writeMyData(fd);
  });
  
  fs.open('myfile.js', 'r', (err, fd) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('myfile does not exist');
      return;
    }

    throw err;
  }

  readMyData(fd);
});