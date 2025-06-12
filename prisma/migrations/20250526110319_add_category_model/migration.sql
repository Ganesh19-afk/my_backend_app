/*
  Warnings:

  - You are about to drop the column `otp` on the `user` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `product` table without a default value. This is not possible if the table is not empty.
  - Made the column `password` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profile` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "product" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "otp",
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "profile" SET NOT NULL;

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
