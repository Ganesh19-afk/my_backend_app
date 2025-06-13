"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInvoicePdf = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
const prisma_1 = __importDefault(require("../Db/prisma"));
const generateInvoicePdf = async (orderId) => {
    const order = await prisma_1.default.order.findUnique({
        where: { id: orderId },
        include: {
            user: true,
            orderItems: {
                include: {
                    product: true,
                    variant: true,
                },
            },
            payment: true,
        },
    });
    if (!order) {
        throw new Error('Order not found');
    }
    const doc = new pdfkit_1.default({ margin: 50 });
    const buffers = [];
    doc.on('data', buffers.push.bind(buffers));
    // ========== HEADER ==========
    doc
        .fontSize(22)
        .fillColor('#333333')
        .text('Order Invoice', { align: 'center' })
        .moveDown();
    doc
        .fontSize(16)
        .fillColor('#000000')
        .text('Thank you for your purchase!', { align: 'center' })
        .moveDown(1.5);
    const drawSectionHeader = (label) => {
        const sectionTop = doc.y;
        doc
            .rect(50, sectionTop, 500, 20)
            .fill('#f0f0f0')
            .stroke();
        doc
            .fillColor('#007ACC')
            .fontSize(13)
            .text(label, 55, sectionTop + 5)
            .moveDown(1);
        doc.fillColor('black');
    };
    // ========== PERSONAL DETAILS ==========
    drawSectionHeader('Personal Details');
    doc.fontSize(12);
    doc.text(`Name: ${order.user?.name || 'Guest User'}`);
    doc.text(`Email ID: ${order.user?.email || order.guestemail || '-'}`);
    doc.moveDown();
    // ========== ADDRESS DETAILS ==========
    drawSectionHeader('Address Details');
    doc.text(`Billing address: ${order.billingAddress}`);
    doc.text(`Delivery address: ${order.deliveryAddress}`);
    doc.moveDown();
    // ========== ORDER DETAILS ==========
    drawSectionHeader('Order Summary');
    doc.text(`Order Id: COM-${order.id}-${order.userId || '0000000000'}`);
    doc.text(`Order Date: ${order.createdAt.toLocaleString('en-IN')}`);
    doc.text(`Payment Type: ${order.payment?.paymentType || 'N/A'}`);
    doc.moveDown();
    // ========== TABLE HEADER ==========
    // Save current y position
    const tableTopY = doc.y;
    doc
        .font('Helvetica-Bold')
        .fontSize(12)
        .fillColor('#000000');
    doc.text('Sr No', 50, tableTopY, { width: 50, align: 'left' });
    doc.text('Item', 110, tableTopY, { width: 180, align: 'left' });
    doc.text('Quantity', 300, tableTopY, { width: 100, align: 'left' });
    doc.text('Price (₹)', 420, tableTopY, { width: 80, align: 'left' });
    doc.moveDown(1);
    doc.strokeColor('#CCCCCC').moveTo(50, doc.y).lineTo(550, doc.y).stroke();
    // ========== TABLE ROWS ==========
    doc.font('Helvetica').fillColor('black');
    order.orderItems.forEach((item, index) => {
        const itemName = `${item.product.name} (${item.unitPrice})`;
        const total = item.unitPrice * item.quantity;
        doc
            .fontSize(11)
            .text(`${index + 1}`, 50, doc.y + 5, { width: 50 })
            .text(itemName, 100, doc.y, { width: 200 })
            .text(`${item.quantity}`, 300, doc.y, { width: 100 })
            .text(`${total.toFixed(2)}`, 400, doc.y, { width: 100 });
        doc.moveDown();
    });
    doc
        .moveDown()
        .strokeColor('#CCCCCC')
        .moveTo(50, doc.y)
        .lineTo(550, doc.y)
        .stroke();
    // ========== SUMMARY ==========
    const sgst = (order.tax / 2).toFixed(2);
    const cgst = (order.tax / 2).toFixed(2);
    doc
        .font('Helvetica')
        .fontSize(12)
        .moveDown(2)
        .text(`Subtotal: ₹${order.subTotal.toFixed(2)}`)
        .text(`Discount: ₹${order.discount.toFixed(2)}`)
        .text(`Delivery Charge: ₹${order.deliveryCharge.toFixed(2)}`)
        .text(`SGST (9.0%): ₹${sgst}`)
        .text(`CGST (9.0%): ₹${cgst}`)
        .moveDown();
    doc
        .font('Helvetica-Bold')
        .fontSize(13)
        .fillColor('#D9534F')
        .text(`Total Amount: ₹${order.finalTotal.toFixed(2)}`, { align: 'right' });
    doc.end();
    return new Promise((resolve) => {
        doc.on('end', () => {
            const pdfBuffer = Buffer.concat(buffers);
            resolve(pdfBuffer);
        });
    });
};
exports.generateInvoicePdf = generateInvoicePdf;
