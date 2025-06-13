import { Request, Response } from 'express';
import { generateInvoicePdf } from '../scripts/invoicegenertor';

export const responseTest = async (req: Request, res: Response) => {
 res.status(200).json({message:"response got "})

};
