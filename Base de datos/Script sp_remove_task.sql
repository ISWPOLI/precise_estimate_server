DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_remove_task`(
  IN _id_task VARCHAR(255)
)
BEGIN

delete from user_task
where id_task = _id_task;

delete from task
where id_task = _id_task;

END$$
DELIMITER ;