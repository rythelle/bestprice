-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "purchase_date" TIMESTAMPTZ(3) NOT NULL,
    "regular_price" TEXT NOT NULL,
    "promotional_price" TEXT,
    "place_purchase" TEXT NOT NULL,
    "tags" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
