insert into ability (name_ability)
values ('Desarrollo'),
('Proactividad'),
('Disciplina'),
('Paciencia'),
('Empatia')
#select * from ability
#delete from ability
#ALTER TABLE ability AUTO_INCREMENT = 1


insert into rol (name)
values ('Scrum Master'),
('Tester'),
('Developer'),
('DBA')
#select * from rol
#delete from rol 
#ALTER TABLE rol AUTO_INCREMENT = 1

#ALTER TABLE `precise`.`profile` ADD UNIQUE INDEX `profile_unique` (`name_profile` ASC)
insert into profile (name_profile)
values('Admin'),
('Visor Global'),
('Visor Proyectos'),
('Usuario'),
('Monitor')
#select * from profile
#delete from profile 
#ALTER TABLE profile AUTO_INCREMENT = 1

#ALTER TABLE `precise`.`status` ADD UNIQUE INDEX `status_unique` (`status` ASC)
insert into status (status)
values ('Iniciado'),
('Finalizado'),
('En desarrollo'),
('Activo'),
('inactivo')
#select * from status
#delete from status 
#ALTER TABLE status AUTO_INCREMENT = 1


#ALTER TABLE `precise`.`user` ADD UNIQUE INDEX `user_unique` (`email` ASC)
insert into user (name, email, password, id_profile)
values ('Felipe Cano','felipecanol@gmail.com','123','1')
#select * from user
#delete from status 
#ALTER TABLE status AUTO_INCREMENT = 1

#ALTER TABLE `precise`.`project` ADD UNIQUE INDEX `project_unique` (`email` ASC)
insert into project (name, type, date_start,date_end, value_estimate_total, time_estimate_total, id_status)
values ('Precise', 'Basados en Web', '2017-02-01','2017-05-01', 800000, 1200, 3)
#select * from project
#delete from status 
#ALTER TABLE status AUTO_INCREMENT = 1

#inserta epica
call sp_project_epic ('Gestion negocio',1)
#select * from epic
#select * from project_epic

#Inserta feature
insert into feature (name, id_epic)
values ('Admin Proyectos', 1)
#select * from feature


#Inserta Story
insert into story (name, id_feature)
values ('Crear Proyecto', 1)
#select * from story

#Inserta Task
insert into task(name, description, id_story)
values('Servicio creacion proyecto', 'Crear el servicio para crear un proyecto con sus respectivos atributos',1),
('Formulario creacion proyecto', 'Crear el formulario para crear un proyecto con sus respectivos atributos',1)
#select * from task
