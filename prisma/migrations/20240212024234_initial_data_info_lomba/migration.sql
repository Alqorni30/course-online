-- CreateTable
CREATE TABLE `dataInfoLomba` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `Nama` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `deadline` VARCHAR(191) NOT NULL,
    `totalHadiah` VARCHAR(191) NOT NULL,
    `link1` VARCHAR(191) NOT NULL,
    `link2` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `dataInfoLomba_Nama_key`(`Nama`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
