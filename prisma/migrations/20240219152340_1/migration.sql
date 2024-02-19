/*
  Warnings:

  - You are about to drop the column `paketId` on the `userdaftar` table. All the data in the column will be lost.
  - You are about to drop the `paket` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `userdaftar` DROP FOREIGN KEY `UserDaftar_paketId_fkey`;

-- AlterTable
ALTER TABLE `userdaftar` DROP COLUMN `paketId`;

-- DropTable
DROP TABLE `paket`;
