/*
  Warnings:

  - Added the required column `paketId` to the `UserDaftar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `userdaftar` ADD COLUMN `paketId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Paket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserDaftar` ADD CONSTRAINT `UserDaftar_paketId_fkey` FOREIGN KEY (`paketId`) REFERENCES `Paket`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
