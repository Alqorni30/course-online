/*
  Warnings:

  - You are about to drop the column `discpersen` on the `datakelas` table. All the data in the column will be lost.
  - You are about to drop the column `hargaAsli` on the `datakelas` table. All the data in the column will be lost.
  - You are about to drop the column `hargaDisc` on the `datakelas` table. All the data in the column will be lost.
  - Added the required column `discpersenBasic` to the `dataKelas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discpersenPremium` to the `dataKelas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hargaAsliBasic` to the `dataKelas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hargaAsliPremium` to the `dataKelas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hargaDiscBasic` to the `dataKelas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hargaDiscPremium` to the `dataKelas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jamKelas` to the `dataKelas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal` to the `dataKelas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `datakelas` DROP COLUMN `discpersen`,
    DROP COLUMN `hargaAsli`,
    DROP COLUMN `hargaDisc`,
    ADD COLUMN `discpersenBasic` INTEGER NOT NULL,
    ADD COLUMN `discpersenPremium` INTEGER NOT NULL,
    ADD COLUMN `hargaAsliBasic` INTEGER NOT NULL,
    ADD COLUMN `hargaAsliPremium` INTEGER NOT NULL,
    ADD COLUMN `hargaDiscBasic` INTEGER NOT NULL,
    ADD COLUMN `hargaDiscPremium` INTEGER NOT NULL,
    ADD COLUMN `jamKelas` VARCHAR(191) NOT NULL,
    ADD COLUMN `tanggal` VARCHAR(191) NOT NULL;
