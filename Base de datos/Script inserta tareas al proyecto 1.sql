insert into task (name, description, time, id_story)
values ('Servicio creacion Epica','Crear el servicio para crear un epica con sus respectivos atributos',4,1), 
('Servicio creacion Caracteristica','Crear el servicio para crear un caracteristica con sus respectivos atributos',4,1),
('Servicio creacion Historia','Crear el servicio para crear un historia con sus respectivos atributos',4,1),
('Servicio creacion Tarea','Crear el servicio para crear un tarea con sus respectivos atributos',4,1),
('Servicio formulario Epica','Crear el formulario para crear un epica con sus respectivos atributos',8,1), 
('Servicio formulario Caracteristica','Crear el formulario para crear un caracteristica con sus respectivos atributos',8,1), 
('Servicio formulario Historia','Crear el formulario para crear un historia con sus respectivos atributos',8,1), 
('Servicio formulario Tarea','Crear el formulario para crear un tarea con sus respectivos atributos',8,1);


insert into user_task (id_user, id_task)
values (1,1), 
(2,2),
(3,3),
(4,4),
(1,5), 
(2,6),
(3,7),
(4,8),
(2,9),
(4,10);