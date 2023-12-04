import express from 'express';
import CompoundController from "../controllers/index.js";

const router = express.Router();

router.get('/compounds', CompoundController.getAll);
router.get('/compounds/:id', CompoundController.getById);
router.post('/compounds', CompoundController.createCompound);
router.put('/compounds/:id', CompoundController.updateCompound);
router.delete('/compounds/:id', CompoundController.deleteCompound);

export default router;