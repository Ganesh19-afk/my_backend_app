/*
  Warnings:

  - You are about to drop the column `images` on the `variant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "variant" DROP COLUMN "images";

-- CreateTable
CREATE TABLE "variantimage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "variantId" INTEGER NOT NULL,

    CONSTRAINT "variantimage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_slug_key" ON "product"("slug");

-- AddForeignKey
ALTER TABLE "variantimage" ADD CONSTRAINT "variantimage_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
