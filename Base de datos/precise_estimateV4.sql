-- MySQL Script generated by MySQL Workbench
-- 04/06/17 18:55:44
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema precise
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `precise` ;

-- -----------------------------------------------------
-- Schema precise
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `precise` DEFAULT CHARACTER SET utf8 ;
SHOW WARNINGS;
USE `precise` ;

-- -----------------------------------------------------
-- Table `client`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `client` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `client` (
  `id_client` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `type_document_id` INT NULL,
  `document_id` INT NULL,
  `web_site` VARCHAR(45) NULL,
  PRIMARY KEY (`id_client`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `status` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `status` (
  `status` VARCHAR(45) NULL DEFAULT NULL,
  `id_status` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_status`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SHOW WARNINGS;
CREATE INDEX `status_idx` ON `status` (`id_status` ASC);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `project` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `project` (
  `id_project` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `type` VARCHAR(45) NULL,
  `date_start` VARCHAR(45) NULL,
  `date_end` VARCHAR(45) NULL,
  `value_estimate_total` VARCHAR(45) NULL,
  `time_estimate_total` VARCHAR(45) NULL,
  `id_status` INT(11) NOT NULL,
  PRIMARY KEY (`id_project`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SHOW WARNINGS;
CREATE INDEX `fk_project_status_idx` ON `project` (`id_status` ASC);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `client_project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `client_project` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `client_project` (
  `id_client_project` INT(11) NOT NULL AUTO_INCREMENT,
  `id_project` INT(11) NOT NULL,
  `id_client` INT(11) NOT NULL,
  PRIMARY KEY (`id_client_project`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SHOW WARNINGS;
CREATE INDEX `client_idx` ON `client_project` (`id_client` ASC);

SHOW WARNINGS;
CREATE INDEX `project_idx` ON `client_project` (`id_project` ASC);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `rol`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `rol` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `rol` (
  `id_rol` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id_rol`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `epic`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `epic` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `epic` (
  `id_epic` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_epic`))
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `epic_idx` ON `epic` (`id_epic` ASC);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `feature`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `feature` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `feature` (
  `id_feature` INT NOT NULL AUTO_INCREMENT,
  `id_epic` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_feature`))
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `feature_idx` ON `feature` (`id_feature` ASC);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `story`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `story` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `story` (
  `id_story` INT NOT NULL AUTO_INCREMENT,
  `id_feature` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_story`))
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `story_idx` ON `story` (`id_story` ASC);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `task` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `task` (
  `id_task` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `decription` VARCHAR(45) NULL DEFAULT NULL,
  `time` TIME NULL,
  `fase` VARCHAR(45) NULL,
  `date_start` DATE NULL,
  `date_end` DATE NULL,
  `id_story` INT NOT NULL,
  PRIMARY KEY (`id_task`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SHOW WARNINGS;
CREATE INDEX `task_idx` ON `task` (`id_task` ASC);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `project_epic`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `project_epic` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `project_epic` (
  `id_project_epic` INT(11) NOT NULL AUTO_INCREMENT,
  `id_project` INT(11) NOT NULL,
  `id_epic` INT(11) NOT NULL,
  PRIMARY KEY (`id_project_epic`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SHOW WARNINGS;
CREATE INDEX `project_idx` ON `project_epic` (`id_project` ASC);

SHOW WARNINGS;
CREATE INDEX `epic_idx` ON `project_epic` (`id_epic` ASC);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `profile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `profile` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `profile` (
  `id_profile` INT NOT NULL AUTO_INCREMENT,
  `name_profile` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_profile`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `user` (
  `id_user` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `email` VARCHAR(255) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `password` VARCHAR(255) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `recovery` VARCHAR(45) NULL,
  `id_profile` INT NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `user_data_parameter`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_data_parameter` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `user_data_parameter` (
  `id_user_data_parameter` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id_user_data_parameter`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `user_data`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_data` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `user_data` (
  `id_user_data` INT(11) NOT NULL AUTO_INCREMENT,
  `id_user` INT(11) NOT NULL,
  `id_user_data_parameter` INT(11) NOT NULL,
  `value` VARCHAR(255) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id_user_data`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `user_project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_project` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `user_project` (
  `id_user_project` INT(11) NOT NULL AUTO_INCREMENT,
  `id_user` INT NOT NULL,
  `id_project` INT NOT NULL,
  PRIMARY KEY (`id_user_project`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SHOW WARNINGS;
CREATE INDEX `fk_user_project_user_idx` ON `user_project` (`id_user` ASC);

SHOW WARNINGS;
CREATE INDEX `fk_user_project_project_idx` ON `user_project` (`id_project` ASC);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `user_rol`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_rol` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `user_rol` (
  `id_user_rol` INT(11) NOT NULL AUTO_INCREMENT,
  `id_user` INT(11) NOT NULL,
  `id_rol` INT(11) NOT NULL,
  PRIMARY KEY (`id_user_rol`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `user_task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_task` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `user_task` (
  `id_user_task` INT(11) NOT NULL AUTO_INCREMENT,
  `id_user` INT(11) NOT NULL,
  `id_task` INT(11) NOT NULL,
  PRIMARY KEY (`id_user_task`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SHOW WARNINGS;
CREATE INDEX `user_idx` ON `user_task` (`id_user` ASC);

SHOW WARNINGS;
CREATE INDEX `task_idx` ON `user_task` (`id_task` ASC);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `ability`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ability` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `ability` (
  `id_ability` INT NOT NULL AUTO_INCREMENT,
  `name_ability` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_ability`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `user_ability`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_ability` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `user_ability` (
  `id_user_ability` INT NOT NULL AUTO_INCREMENT,
  `id_ability` INT NOT NULL,
  `id_user` INT NOT NULL,
  `value_ability` FLOAT NULL,
  PRIMARY KEY (`id_user_ability`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `rol_ability`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `rol_ability` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `rol_ability` (
  `id_rol_ability` INT NOT NULL AUTO_INCREMENT,
  `id_rol` INT NOT NULL,
  `id_ability` INT NOT NULL,
  `value_ability` FLOAT NULL,
  PRIMARY KEY (`id_rol_ability`))
ENGINE = InnoDB;

SHOW WARNINGS;
USE `precise` ;

-- -----------------------------------------------------
-- View `vw_project_epic`
-- -----------------------------------------------------
DROP VIEW IF EXISTS `vw_project_epic` ;
SHOW WARNINGS;
USE `precise`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_project_epic` AS select `e`.`id_epic` AS `id_epic`,`p`.`name` AS `name_project`,`e`.`name` AS `name_epic` from ((`project` `p` join `project_epic` `pe` on((`p`.`id_project` = `pe`.`id_project`))) join `epic` `e` on((`pe`.`id_epic` = `e`.`id_epic`)));
SHOW WARNINGS;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;