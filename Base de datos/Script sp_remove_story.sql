DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_remove_story`(
  IN _id_story VARCHAR(255)
)
BEGIN

delete from user_task
where id_task in (select id_task from task where id_story = _id_story);

delete from task
where id_story = _id_story;

delete from story
where id_story = _id_story;

END$$
DELIMITER ;
