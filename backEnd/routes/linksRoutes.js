import express from 'express';
const router = express.Router();
import {
  getLinks,
  getLinksById,
  createLink,
  updateLink,
  deleteLink,
} from '../controllers/linksController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

// Routes for fetching all links and creating a new link
router.route('/')
  .get(getLinks) // GET request to fetch all links
  .post(protect, admin, createLink); // POST request to create a new link

// Routes for fetching, updating, and deleting a link by ID
router.route('/:id')
  .get(getLinksById) // GET request to fetch a link by ID
  .put(protect, admin, updateLink) // PUT request to update a link by ID
  .delete(protect, admin, deleteLink); // DELETE request to delete a link by ID

export default router;
