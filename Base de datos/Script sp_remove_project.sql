DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_remove_project`(
  IN _id_project VARCHAR(255)
)
BEGIN

delete from user_task
where id_task in (
select t.id_task 
from task t
inner join story s on  t.id_story = s.id_story
inner join feature f on  f.id_feature = s.id_feature
inner join epic e on  e.id_epic = f.id_epic
inner join project_epic pe on  pe.id_epic = e.id_epic
where pe.id_project = _id_project);

delete from task
where id_story in (
select s.id_story  
from story s 
inner join feature f on  f.id_feature = s.id_feature
inner join epic e on  e.id_epic = f.id_epic
inner join project_epic pe on  pe.id_epic = e.id_epic
where pe.id_project = _id_project);

delete from story
where id_feature in (
select f.id_feature  
from feature f
inner join epic e on  e.id_epic = f.id_epic
inner join project_epic pe on  pe.id_epic = e.id_epic
where pe.id_project = _id_project);

delete from feature
where id_epic in (
select e.id_epic  
from epic e 
inner join project_epic pe on  pe.id_epic = e.id_epic
where pe.id_project = _id_project);


DROP TABLE IF EXISTS `tmp_epic` ;

CREATE TEMPORARY TABLE tmp_epic AS
(select id_epic 
from project_epic
where id_project = _id_project);

delete from project_epic
where id_project = _id_project;

delete from epic
where id_epic in (select id_epic from tmp_epic);

delete from project
where id_project = _id_project;

DROP TABLE IF EXISTS `tmp_epic` ;

END$$
DELIMITER ;

