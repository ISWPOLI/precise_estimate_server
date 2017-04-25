DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_remove_epic`(
  IN _id_epic VARCHAR(255)
)
BEGIN

delete from user_task
where id_task in (
select t.id_task 
from task t
inner join story s on  t.id_story = s.id_story
inner join feature f on  f.id_feature = s.id_feature
inner join epic e on  e.id_epic = f.id_epic
where e.id_epic = _id_epic);

delete from task
where id_story in (
select s.id_story  
from story s 
inner join feature f on  f.id_feature = s.id_feature
inner join epic e on  e.id_epic = f.id_epic
where e.id_epic = _id_epic);

delete from story
where id_feature in (
select f.id_feature  
from feature f
inner join epic e on  e.id_epic = f.id_epic
where e.id_epic = _id_epic);


delete from feature
where id_epic = _id_epic;

delete from project_epic
where id_epic = _id_epic;

delete from epic
where id_epic = _id_epic;

END$$
DELIMITER ;
