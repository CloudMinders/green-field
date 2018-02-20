/** ROUTES FOR ACTIONS TRIGGERING EXTERNAL API CALLS **/
const express = require('express')
const router = express.Router()
const { apiController } = require('../controllers/api');

// Receive ISBN from client
// Create book if doesn't exist
// Add book association to user
router.get('/isbn/:isbn', (req, res) => {
  apiController.getBookData(req.params.isbn, res);
});

exports.apiRoutes = router;