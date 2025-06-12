import { z } from 'zod';

export const createAddressSchema = z.object({
  userId: z.number(),
  street: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  postalCode: z.string().min(1),
  country: z.string().min(1),
  addressType: z.enum(['BILLING', 'DELIVERY']),
});


export const updateAddressSchema = z.object({
  street: z.string().min(1).optional(),
  city: z.string().min(1).optional(),
  state: z.string().min(1).optional(),
  postalCode: z.string().min(1).optional(),
  country: z.string().min(1).optional(),
  addressType: z.enum(['BILLING', 'DELIVERY']).optional(),
});

export type CreateAddressInput = z.infer<typeof createAddressSchema>;
