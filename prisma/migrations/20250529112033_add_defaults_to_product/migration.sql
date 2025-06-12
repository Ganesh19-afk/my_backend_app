-- AlterTable
ALTER TABLE "product" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_new_arrival" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "stock" INTEGER NOT NULL DEFAULT 2,
ADD COLUMN     "tag" TEXT[];

-- CreateTable
CREATE TABLE "variant" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "specification" JSONB NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "images" TEXT[],
    "productId" INTEGER NOT NULL,

    CONSTRAINT "variant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "variant" ADD CONSTRAINT "variant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
