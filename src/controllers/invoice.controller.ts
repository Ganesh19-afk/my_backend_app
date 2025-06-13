import { Request, Response } from 'express';
import { generateInvoicePdf } from '../scripts/invoicegenertor';

export const getInvoicePdf = async (req: Request, res: Response) => {
  const orderId = parseInt(req.params.orderId);

  if (isNaN(orderId)) {
     res.status(400).json({ message: 'Invalid Order ID' });
     return
  }

  try {
    const pdfBuffer = await generateInvoicePdf(orderId);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename=invoice-${orderId}.pdf`);
    res.send(pdfBuffer);
  } catch (err: any) {
    console.error('Invoice generation failed:', err.message);
    res.status(500).json({ message: err.message || 'Error generating invoice' });
  }
};
