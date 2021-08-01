import express from 'express'
import { Request, Response } from 'express';
import { shopItemList } from '../controllers/shop';
const router = express.Router();

router.post('/items', (req: Request, res: Response) => shopItemList(req, res));

module.exports = router;