-- CreateEnum
CREATE TYPE "Type" AS ENUM ('LT', 'ML', 'KG', 'MG');

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "type" "Type",
    "value_type" DOUBLE PRECISION,
    "unit" BOOLEAN NOT NULL DEFAULT true,
    "category" TEXT NOT NULL,
    "purchase_date" TIMESTAMPTZ(3) NOT NULL,
    "price" TEXT NOT NULL,
    "place_purchase" TEXT NOT NULL,
    "tags" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
