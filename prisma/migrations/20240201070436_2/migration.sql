/*
  Warnings:

  - Added the required column `discpersen` to the `dataKelas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `datakelas` ADD COLUMN `discpersen` INTEGER NOT NULL;
