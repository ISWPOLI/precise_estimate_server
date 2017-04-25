DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_remove_feature`(
  IN _id_feature VARCHAR(255)
)
BEGIN

delete from user_task
where id_task in (
select id_task 
from task t
inner join story s on  t.id_story = s.id_story
inner join feature f on  f.id_feature = s.id_feature
where f.id_feature = _id_feature);

delete from task
where id_story in (
select id_story  
from story s 
inner join feature f on  f.id_feature = s.id_feature
where f.id_feature = _id_feature);

delete from story
where id_feature = _id_feature;

delete from feature
where id_feature = _id_feature;

END$$
DELIMITER ;




