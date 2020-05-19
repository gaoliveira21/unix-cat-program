const fs = require('fs');

const path = process.argv[2];

try {
  if(fs.lstatSync(path).isDirectory()){
    console.log(`${path}: Is a directory`);
    return;
  }

  fs.existsSync(path);
} catch (error) {
  console.log(`${path}: No such file or directory`);
  return;
}

fs.readFile(path, (err, data) => {
  if (err) console.log(err);

  console.log(data.toString('utf8'));
});

