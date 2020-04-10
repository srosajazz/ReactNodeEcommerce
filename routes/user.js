const express = require('express');
const router = express.Router();

const {
  signup,
  signin,
  signout,
  requireSiginin,
} = require('../controllers/user');

const { userSignupValidator } = require('../validator');

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

// router.get('/hello', requireSiginin, (req, res) => {
//     res.send('Hello, Sergio Rosa!');
// });

module.exports = router;
