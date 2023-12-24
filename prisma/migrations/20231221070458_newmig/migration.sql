/*
  Warnings:

  - You are about to alter the column `first_name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `last_name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `age` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Int` to `SmallInt`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `first_name` VARCHAR(50) NOT NULL,
    MODIFY `last_name` VARCHAR(50) NOT NULL,
    MODIFY `age` SMALLINT NOT NULL,
    MODIFY `grade` FLOAT NOT NULL;
