USE mealsharing;

CREATE TABLE `mealsharing`.`reservation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `number_of_guests` INT(45) NULL,
  `meal_id` INT(45) NULL,
  `name` VARCHAR(45) NULL,
  `createdAt` VARCHAR(45) NULL,
  `email` VARCHAR(255) NULL

  PRIMARY KEY (`id`));

  INSERT INTO meal (id, number_of_guests, meal_id, name, createdAt, email)
  VALUES (1, 4, 1, "WA", "2020/01/01 13:00:00"),
        (2, 8, 2, "CA", "2020/02/01 14:00:00"),
        (3, 2, 3, "LA", "2020/02/25 18:34:00"),
        (4, 3, 4, "CO", "2020/02/23 11:12:00"),
        (5, 4, 5, "AT", "2020/03/12 11:22:00");
