import express from 'express'
import { Request, Response } from 'express';
import { orderCheckout } from '../controllers/order';
const router = express.Router();

router.post('/checkout', (req: Request, res: Response) => orderCheckout(req, res));

module.exports = router;