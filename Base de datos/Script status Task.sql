
ALTER TABLE `precise`.`task` 
ADD INDEX `fk_status_idx` (`id_status` ASC);

ALTER TABLE `precise`.`task` 
ADD CONSTRAINT `fk_status`
FOREIGN KEY (`id_status`)
REFERENCES `precise`.`status` (`id_status`)
ON DELETE NO ACTION
ON UPDATE NO ACTION;