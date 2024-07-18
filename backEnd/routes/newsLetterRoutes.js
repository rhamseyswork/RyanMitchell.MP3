import express from 'express';
const router = express.Router();
import {
    authNewsLetterProfile,
    logoutNewsLetterProfile,
} from '../controllers/newsLetterController.js';  
import { protect, admin } from '../middleware/authMiddleware.js';

router.post('/signup', authNewsLetterProfile); // POST /api/newsletter/signup
router.post('/logout', logoutNewsLetterProfile); // POST /api/newsletter/logout
// router.get('/profile', protect, getNewsLetterProfile); // GET /api/newsletter/profile
// router.put('/profile', protect, updateNewsLetterProfile); // PUT /api/newsletter/profile
// router.get('/', protect, admin, getNewsLetter); // GET /api/newsletter
// router.get('/:id', protect, admin, getNewsLetterProfileByID); // GET /api/newsletter/:id
// router.delete('/:id', protect, admin, deleteNewsLetterProfile); // DELETE /api/newsletter/:id
// router.put('/:id', protect, admin, updateNewsLetter); // PUT /api/newsletter/:id

export default router;
