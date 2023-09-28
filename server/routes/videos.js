import express from 'express';
import { verifyToken } from '../verifyToken.js';
import {
  addVideo,
  addView,
  deleteVideo,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
} from '../controllers/video.js';

const router = express.Router();

// create a video
router.post('/', verifyToken, addVideo);

// update a video
router.put('/:id', verifyToken, updateVideo);

// delete a video
router.delete('/:id', verifyToken, deleteVideo);

// get a video
router.get('/find/:id', getVideo);

// wiew a video
router.put('/view/:id', addView);

// trend video
router.get('/trend', trend);

// random video
router.get('/random', random);

// subscribe channels videos
router.get('/sub', verifyToken, sub);

// subscribe channels videos
router.get('/tags', getByTag);

// subscribe channels videos
router.get('/search', search);

export default router;
