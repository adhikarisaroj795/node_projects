const fs = require('fs');
const { resolve } = require('path');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('i could not find a file');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('could not write the file');
      resolve('sucess');
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/starter/dog.txt`);
    console.log(`Breed:${data}`);

    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    const img = all.map((el) => el.body.message);
    console.log(img);

    await writeFilePro('dog-img-text', img.join('\n'));
    console.log('random dog image saved to file');
  } catch (err) {
    console.log(err);
    throw err;
  }
  return '2 : READY';
};

(async () => {
  try {
    console.log('3: done getting dog pics');
    const x = await getDogPic();
    console.log(x);
    console.log('1: will get dog pics');
  } catch (err) {
    console.log('ERROR');
  }
})();

/*
console.log('1: will get dog pics');

getDogPic()
  .then((x) => {
    console.log(x);
    console.log('3: done getting dog pics');
  })
  .catch((err) => {
    console.log('ERROR');
  });
  */

/* readFilePro(`${__dirname}/starter/dog.txt`)
  .then((data) => {
    console.log(`Breed:${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);

    return writeFilePro('dog-img-text', res.body.message);

    // fs.writeFile('dog-img-text', res.body.message, (err) => {
    //   console.log('random dog image saved to file');
    // });
  })
  .then(() => {
    console.log('random dog image saved to file');
  })
  .catch((err) => {
    console.log(err.message);
  });
  */
