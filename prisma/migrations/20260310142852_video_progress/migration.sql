-- CreateTable
CREATE TABLE "VideoProgress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "timestamp" REAL NOT NULL,
    "duration" REAL NOT NULL,
    "seriesHandle" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "VideoProgress_shop_customerId_videoId_key" ON "VideoProgress"("shop", "customerId", "videoId");
