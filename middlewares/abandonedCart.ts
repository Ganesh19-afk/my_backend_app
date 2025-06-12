import cron from 'node-cron';
import { sendAbandonedCartEmail } from './abandonedMail';
import prisma from '../src/Db/prisma';

// Cron job to check abandoned carts every hour
cron.schedule('0 * * * *', async () => {
  try {
    console.log('Running abandoned cart cleanup job');

    // Get carts where `updatedAt` is older than 24 hours (abandoned carts)
    const abandonedCarts = await prisma.cart.findMany({
      where: {
        updatedAt: {
          lt: new Date(new Date().getTime() - 1 * 60 * 60 * 1000), // 24 hours ago
        },
      },
      include: {
        user: true,   // Include user details for emailing
        items: {      // Include cart items for the email
          include: {
            product: true,  // Include product details (like name, price, image)
            variant: true,  // Optionally include variant details (like size, color)
          },
        },
      },
    });

    // Loop through each abandoned cart and send a reminder email if the user exists
    for (const cart of abandonedCarts) {
      if (cart.user) {
        // Prepare the products array to pass to the email function
        const products = cart.items.map(item => ({
          name: item.product?.name,
          imageUrl: item.product?.image || 'default-image-url.jpg', // Use a default image if not provided
          price: item.product?.price,
          quantity: item.quantity,
        }));

        // Send an email to the user about their abandoned cart
        console.log(`Sending reminder to user: ${cart.user.email}`);
        await sendAbandonedCartEmail(cart.user.email, products);  // Send email with product details
      }
    }
  } catch (error) {
    console.error('Error running abandoned cart job:', error);
  }
});
