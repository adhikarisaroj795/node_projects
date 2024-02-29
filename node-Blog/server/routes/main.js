const express = require('express');
const router = express.Router();
const post = require('../models/Post');
const slugify = require('slugify');

/*
 *GET /
 *HOME
 */

router.get('', async (req, res) => {
  try {
    const locals = {
      title: 'nodeJs Blog',
      description: 'simple Blog created with NodeJs, express & MongoDb',
    };
    let perPage = 6;
    let page = req.query.page || 1;

    const data = await post
      .aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await post.countDocuments();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);
    res.render('index', {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get('/about', (req, res) => {
  res.render('about');
});

// router.get('', async (req, res) => {
//   const locals = {
//     title: 'nodeJs Blog',
//     description: 'simple Blog created with NodeJs, express & MongoDb',
//   };
//   try {
//     const data = await post.find();
//     res.render('index', { locals, data });
//   } catch (error) {
//     console.log('error');
//   }
// });

// router.get('/about', (req, res) => {
//   res.render('about');
// });

// function insertPostData() {
//   post.insertMany([
//     {
//       title: 'Building a Blog',
//       body: 'this is the body text',
//     },
//     {
//       title: 'Building a Blog',
//       body: 'this is the body text',
//     },
//     {
//       title: 'Building a Blog',
//       body: 'this is the body text',
//     },
//     {
//       title: 'Building a Blog',
//       body: 'this is the body text',
//     },
//     {
//       title: 'Building a Blog',
//       body: 'this is the body text',
//     },
//     {
//       title: 'Building a Blog',
//       body: 'this is the body text',
//     },
//     {
//       title: 'Building a Blog',
//       body: 'this is the body text',
//     },
//   ]);
// }

// insertPostData();

/* 
 *GET / 
 Post : id
 */
router.get('/post/:id', async (req, res) => {
  try {
    const locals = {
      title: 'nodeJs Blog',
      description: 'simple Blog created with NodeJs, express & MongoDb',
    };

    let slug = req.params.id;

    const data = await post.findById({ _id: slug });
    res.render('post', { locals, data });
  } catch (error) {
    console.log('error');
  }
});

/* 
 *POST / 
 Post - searchTerm
 */

router.post('/search', async (req, res) => {
  try {
    const locals = {
      title: 'search',
      description: 'simple Blog created with NodeJs, express & MongoDb',
    };

    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, '');

    const data = await post.find({
      $or: [
        {
          title: { $regex: new RegExp(searchNoSpecialChar, 'i') },
        },
        {
          body: { $regex: new RegExp(searchNoSpecialChar, 'i') },
        },
      ],
    });

    res.render('Search', { data, locals });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
