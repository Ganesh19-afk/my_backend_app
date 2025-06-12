"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAbandonedCartEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
// Create a transport object using Gmail's SMTP server
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAILTRAP_USER, // your email address
        pass: process.env.MAILTRAP_PASS, // your email password or app password for Gmail
    },
});
// Function to send an abandoned cart email
const sendAbandonedCartEmail = async (email, products) => {
    // Start constructing the email body using HTML
    let productHtml = '';
    // Loop through products and create HTML for each item
    products.forEach(product => {
        const imageUrl = `${process.env.IMAGE_URL}${product.imageUrl}`;
        console.log(imageUrl);
        productHtml += `
      <tr>
        <td style="padding: 10px;">
          <img src=${imageUrl} alt="${product.name}" style="width: 100px; height: 100px; object-fit: cover;" />
        </td>
        <td style="padding: 10px;">
          <p style="font-size: 16px; font-weight: bold;">${product.name}</p>
          <p style="font-size: 14px; color: #555;">Price: $${product.price}</p>
          <p style="font-size: 14px; color: #555;">Quantity: ${product.quantity}</p>
        </td>
      </tr>
    `;
    });
    // Full HTML email template
    const htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
          <h2 style="text-align: center; color: #333;">Your cart is waiting for you!</h2>
          <p style="text-align: center; color: #555; font-size: 16px;">We noticed that you left some items in your cart. Don't worry, they're still available!</p>
          
          <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
            <thead>
              <tr>
                <th style="text-align: left; padding: 10px; background-color: #f4f4f4; color: #333;">Product</th>
                <th style="text-align: left; padding: 10px; background-color: #f4f4f4; color: #333;">Details</th>
              </tr>
            </thead>
            <tbody>
              ${productHtml}
            </tbody>
          </table>

          <div style="text-align: center; margin-top: 20px;">
            <a href="https://your-website.com/cart" style="text-decoration: none; background-color: #4CAF50; color: white; padding: 10px 20px; border-radius: 5px; font-size: 16px;">Go to Cart</a>
          </div>

          <p style="text-align: center; color: #777; font-size: 14px; margin-top: 30px;">If you need any assistance, feel free to contact us.</p>
        </div>
      </body>
    </html>
  `;
    // Mail options with HTML content
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your cart is waiting for you!',
        html: htmlContent,
    };
    // Sending the email
    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to: ${email}`);
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
};
exports.sendAbandonedCartEmail = sendAbandonedCartEmail;
