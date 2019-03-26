-- MySQL Script generated by MySQL Workbench
-- Tue Mar 26 16:26:05 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Country`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Country` (
  `country_id` INT NOT NULL AUTO_INCREMENT,
  `country` VARCHAR(45) GENERATED ALWAYS AS (),
  `date_created` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `last_update` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  PRIMARY KEY (`country_id`),
  UNIQUE INDEX `country_id_UNIQUE` (`country_id` ASC) VISIBLE,
  UNIQUE INDEX `country_UNIQUE` (`country` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`City`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`City` (
  `city_id` INT NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL COMMENT 'the citys name',
  `fk_country_id` INT GENERATED ALWAYS AS () VIRTUAL COMMENT 'is a pointer to the country',
  `date_created` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `last_update` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  PRIMARY KEY (`city_id`),
  UNIQUE INDEX `city_UNIQUE` (`city` ASC) VISIBLE,
  UNIQUE INDEX `city_id_UNIQUE` (`city_id` ASC) VISIBLE,
  INDEX `country_id_idx` (`fk_country_id` ASC) VISIBLE,
  CONSTRAINT `fk_country_id`
    FOREIGN KEY (`fk_country_id`)
    REFERENCES `mydb`.`Country` (`country_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Address` (
  `address_id` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the writen out address',
  `address2` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL COMMENT 'if there is a second address for the user ',
  `district` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the district that the user was in',
  `postal_code` INT GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the zip code ',
  `fk_city_id` INT GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the ppointer to the city of the address',
  `date_created` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `last_update` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  PRIMARY KEY (`address_id`),
  UNIQUE INDEX `address_id_UNIQUE` (`address_id` ASC) VISIBLE,
  INDEX `city_id_idx` (`fk_city_id` ASC) VISIBLE,
  CONSTRAINT `fk_city_id`
    FOREIGN KEY (`fk_city_id`)
    REFERENCES `mydb`.`City` (`city_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Office`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Office` (
  `office_id` INT NOT NULL AUTO_INCREMENT,
  `office` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the name of the office',
  `phone_number` INT GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the phone number to call this office',
  `equipment_contact` VARCHAR(45) NOT NULL,
  `fk_address_id` INT GENERATED ALWAYS AS () VIRTUAL COMMENT 'is a pointer to the address of the office',
  `date_created` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `last_update` TIMESTAMP GENERATED ALWAYS AS (),
  PRIMARY KEY (`office_id`),
  UNIQUE INDEX `office_id_UNIQUE` (`office_id` ASC) VISIBLE,
  UNIQUE INDEX `phone_number_UNIQUE` (`phone_number` ASC) VISIBLE,
  INDEX `address_id_idx` (`fk_address_id` ASC) VISIBLE,
  UNIQUE INDEX `equipment_contact_UNIQUE` (`equipment_contact` ASC) VISIBLE,
  CONSTRAINT `fk_address_id`
    FOREIGN KEY (`fk_address_id`)
    REFERENCES `mydb`.`Address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Room` (
  `room_id` INT NOT NULL AUTO_INCREMENT,
  `room` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the name of the room ',
  `floor` INT GENERATED ALWAYS AS () VIRTUAL,
  `status` INT GENERATED ALWAYS AS () VIRTUAL,
  `fk_office_id` INT GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the office that the room is on',
  `date_created` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `last_update` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  PRIMARY KEY (`room_id`),
  UNIQUE INDEX `Room_id_UNIQUE` (`room_id` ASC) VISIBLE,
  INDEX `office_id_idx` (`fk_office_id` ASC) VISIBLE,
  CONSTRAINT `fk_office_id`
    FOREIGN KEY (`fk_office_id`)
    REFERENCES `mydb`.`Office` (`office_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Employee` (
  `employee_id` INT ZEROFILL NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL COMMENT 'the first name of employee',
  `last_name` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the last name of the employee',
  `phone_number` INT GENERATED ALWAYS AS () VIRTUAL,
  `work_phone_number` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the work phone number of the employee ',
  `email` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the email of emplyee',
  `username` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL COMMENT 'the username for employee to log into database',
  `password` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL COMMENT 'password for employee to login',
  `active` TINYINT GENERATED ALWAYS AS () VIRTUAL COMMENT 'is either 1 or 0\nif it is 1 then the employee is still woring in the company\nif it is 0 then they are no longer working with company',
  `fk_address_id` INT GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the address of the home of the employee',
  `fk_room_id` INT GENERATED ALWAYS AS ()  COMMENT 'is the location of where the employee works',
  `date_created` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `last_update` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  PRIMARY KEY (`employee_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  INDEX `address_id_idx` (`fk_address_id` ASC) VISIBLE,
  INDEX `room_id_idx` (`fk_room_id` ASC) VISIBLE,
  UNIQUE INDEX `phone_number_UNIQUE` (`phone_number` ASC) VISIBLE,
  UNIQUE INDEX `work_phone_number_UNIQUE` (`work_phone_number` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  CONSTRAINT `fk_address_id`
    FOREIGN KEY (`fk_address_id`)
    REFERENCES `mydb`.`Address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_room_id`
    FOREIGN KEY (`fk_room_id`)
    REFERENCES `mydb`.`Room` (`room_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Vendor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Vendor` (
  `vendor_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the name of the vendor ',
  `phone` INT GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the phone number to call the vendor',
  `email` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the email to email the vendor',
  `fk_address_id` INT GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the pointer to address of the vedor',
  `date_created` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `last_update` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  PRIMARY KEY (`vendor_id`),
  UNIQUE INDEX `vendor_id_UNIQUE` (`vendor_id` ASC) VISIBLE,
  UNIQUE INDEX `phone_UNIQUE` (`phone` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `address_id_idx` (`fk_address_id` ASC) VISIBLE,
  CONSTRAINT `fk_address_id`
    FOREIGN KEY (`fk_address_id`)
    REFERENCES `mydb`.`Address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Type` (
  `type_id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) GENERATED ALWAYS AS () VIRTUAL,
  `date_created` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `last_update` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  PRIMARY KEY (`type_id`),
  UNIQUE INDEX `type_id_UNIQUE` (`type_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Lease`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Lease` (
  `lease_id` INT NOT NULL AUTO_INCREMENT,
  `start_date` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `end_date` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `date_created` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `last_update` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  PRIMARY KEY (`lease_id`),
  UNIQUE INDEX `lease_id_UNIQUE` (`lease_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Equipment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Equipment` (
  `equipment_id` INT NOT NULL,
  `fk_vendor_id` INT GENERATED ALWAYS AS () VIRTUAL COMMENT 'is the id of company that Equipment was bought from',
  `fk_type_id` INT GENERATED ALWAYS AS () VIRTUAL,
  `fk_lease_id` INT GENERATED ALWAYS AS () VIRTUAL,
  `active` TINYINT GENERATED ALWAYS AS () VIRTUAL COMMENT '1 for active 0 for not active.',
  `warranty_end_date` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL COMMENT 'if this is null date is past or warranty is past',
  `date_created` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `last_update` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  PRIMARY KEY (`equipment_id`),
  UNIQUE INDEX `equipment_id_UNIQUE` (`equipment_id` ASC) VISIBLE,
  INDEX `vendor_id_idx` (`fk_vendor_id` ASC) VISIBLE,
  INDEX `type_id_idx` (`fk_type_id` ASC) VISIBLE,
  INDEX `lease_id_idx` (`fk_lease_id` ASC) VISIBLE,
  CONSTRAINT `vendor_id`
    FOREIGN KEY (`fk_vendor_id`)
    REFERENCES `mydb`.`Vendor` (`vendor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `type_id`
    FOREIGN KEY (`fk_type_id`)
    REFERENCES `mydb`.`Type` (`type_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `lease_id`
    FOREIGN KEY (`fk_lease_id`)
    REFERENCES `mydb`.`Lease` (`lease_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Inventory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Inventory` (
  `inventory_id` INT NOT NULL AUTO_INCREMENT,
  `fk_equipment_id` INT GENERATED ALWAYS AS () VIRTUAL COMMENT 'points to the equipment though the ID',
  `fk_employee_id` INT GENERATED ALWAYS AS () VIRTUAL COMMENT 'points to the employee that is useing the equipment\nif null no one is useing it',
  `fk_room_id` INT GENERATED ALWAYS AS () VIRTUAL,
  `date_created` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `last_update` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  PRIMARY KEY (`inventory_id`),
  UNIQUE INDEX `inventory_id_UNIQUE` (`inventory_id` ASC) VISIBLE,
  UNIQUE INDEX `equipment_id_UNIQUE` (`fk_equipment_id` ASC) VISIBLE,
  INDEX `employee_id_idx` (`fk_employee_id` ASC) VISIBLE,
  INDEX `room_id_idx` (`fk_room_id` ASC) VISIBLE,
  CONSTRAINT `fk_equipment_id`
    FOREIGN KEY (`fk_equipment_id`)
    REFERENCES `mydb`.`Equipment` (`equipment_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_employee_id`
    FOREIGN KEY (`fk_employee_id`)
    REFERENCES `mydb`.`Employee` (`employee_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_room_id`
    FOREIGN KEY (`fk_room_id`)
    REFERENCES `mydb`.`Room` (`room_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Reservation` (
  `reservation_id` INT NOT NULL AUTO_INCREMENT,
  `start_time` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `end_time` TIMESTAMP GENERATED ALWAYS AS (),
  `fk_employee_id` INT GENERATED ALWAYS AS () VIRTUAL,
  `fk_inventory_id` INT GENERATED ALWAYS AS () VIRTUAL,
  `date_created` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  `last_update` TIMESTAMP GENERATED ALWAYS AS () VIRTUAL,
  PRIMARY KEY (`reservation_id`),
  UNIQUE INDEX `reservation_id_UNIQUE` (`reservation_id` ASC) VISIBLE,
  INDEX `employee_id_idx` (`fk_employee_id` ASC) VISIBLE,
  INDEX `inventory_id_idx` (`fk_inventory_id` ASC) VISIBLE,
  CONSTRAINT `employee_id`
    FOREIGN KEY (`fk_employee_id`)
    REFERENCES `mydb`.`Employee` (`employee_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `inventory_id`
    FOREIGN KEY (`fk_inventory_id`)
    REFERENCES `mydb`.`Inventory` (`inventory_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `mydb`;

DELIMITER $$
USE `mydb`$$
CREATE DEFINER = CURRENT_USER TRIGGER `mydb`.`Reservation_BEFORE_INSERT` BEFORE INSERT ON `Reservation` FOR EACH ROW
BEGIN

END
$$

USE `mydb`$$
CREATE DEFINER = CURRENT_USER TRIGGER `mydb`.`Reservation_AFTER_INSERT` AFTER INSERT ON `Reservation` FOR EACH ROW
BEGIN

END
$$


DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
