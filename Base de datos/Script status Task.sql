
ALTER TABLE `precise`.`task` 
ADD INDEX `fk_status_idx` (`id_status` ASC);

ALTER TABLE `precise`.`task` 
ADD CONSTRAINT `fk_status`
FOREIGN KEY (`id_status`)
REFERENCES `precise`.`status` (`id_status`)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

update task
set id_status = (select id_status from status where status = 'Iniciado')
where task.name like '%epica%';

update task
set id_status = (select id_status from status where status = 'Finalizado')
where task.name like '%proyecto%';

update task
set id_status =  (select id_status from status where status = 'En Desarrollo')
where task.id_status is null;



