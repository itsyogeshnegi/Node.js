const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// Define Routes
router.get('/users', userController.getAllUsers);
// router.get('/users', (req, res) => {
//     res.send('Users route is working');
// });


module.exports = router;
