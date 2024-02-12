/*
  Warnings:

  - You are about to drop the column `Nama` on the `datainfolomba` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nama]` on the table `dataInfoLomba` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nama` to the `dataInfoLomba` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `dataInfoLomba_Nama_key` ON `datainfolomba`;

-- AlterTable
ALTER TABLE `datainfolomba` DROP COLUMN `Nama`,
    ADD COLUMN `nama` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `dataInfoLomba_nama_key` ON `dataInfoLomba`(`nama`);
