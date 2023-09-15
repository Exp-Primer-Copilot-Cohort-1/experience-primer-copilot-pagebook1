// Create a web server

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle request and response
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.post('/create', commentController.comment_create_post);
router.get('/:id/delete', commentController.comment_delete_get);
router.post('/:id/delete', commentController.comment_delete_post);
router.get('/:id/update', commentController.comment_update_get);
router.post('/:id/update', commentController.comment_update_post);
router.get('/:id', commentController.comment_detail);

// Export module
module.exports = router;
