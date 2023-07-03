-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tp5
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tp5
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tp5` DEFAULT CHARACTER SET utf8 ;
USE `tp5` ;

-- -----------------------------------------------------
-- Table `tp5`.`medico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp5`.`medico` (
  `matricula` INT NOT NULL,
  `nombre` VARCHAR(30) NULL,
  `apellido` VARCHAR(30) NULL,
  `especialidad` VARCHAR(30) NULL,
  `observaciones` TEXT NULL,
  PRIMARY KEY (`matricula`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tp5`.`paciente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp5`.`paciente` (
  `nss` BIGINT(20) NOT NULL,
  `nombre` VARCHAR(30) NOT NULL,
  `apellido` VARCHAR(30) NOT NULL,
  `domicilio` VARCHAR(50) NULL,
  `codigo_postal` SMALLINT(6) NULL,
  `telefono` VARCHAR(16) NULL,
  `nro_historial_clinico` INT(11) NOT NULL,
  `observaciones` TEXT NULL,
  PRIMARY KEY (`nro_historial_clinico`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tp5`.`ingreso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tp5`.`ingreso` (
  `id_ingreso` INT(11) NOT NULL,
  `fecha_ingreso` DATE NOT NULL,
  `nro_habitacion` SMALLINT(6) NULL,
  `nro_cama` SMALLINT(6) NULL,
  `observaciones` TEXT NULL,
  `nro_historial_paciente` INT(11) NOT NULL,
  `matricula_medico` INT(11) NOT NULL,
  PRIMARY KEY (`id_ingreso`),
  INDEX `matricula_idx` (`matricula_medico` ASC) VISIBLE,
  INDEX `nro_historial_clinico_idx` (`nro_historial_paciente` ASC) VISIBLE,
  CONSTRAINT `matricula`
    FOREIGN KEY (`matricula_medico`)
    REFERENCES `tp5`.`medico` (`matricula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `nro_historial_clinico`
    FOREIGN KEY (`nro_historial_paciente`)
    REFERENCES `tp5`.`paciente` (`nro_historial_clinico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
