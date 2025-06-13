"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvoicePdf = void 0;
const invoicegenertor_1 = require("../scripts/invoicegenertor");
const getInvoicePdf = async (req, res) => {
    const orderId = parseInt(req.params.orderId);
    if (isNaN(orderId)) {
        res.status(400).json({ message: 'Invalid Order ID' });
        return;
    }
    try {
        const pdfBuffer = await (0, invoicegenertor_1.generateInvoicePdf)(orderId);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `inline; filename=invoice-${orderId}.pdf`);
        res.send(pdfBuffer);
    }
    catch (err) {
        console.error('Invoice generation failed:', err.message);
        res.status(500).json({ message: err.message || 'Error generating invoice' });
    }
};
exports.getInvoicePdf = getInvoicePdf;
