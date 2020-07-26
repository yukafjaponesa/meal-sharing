USE mealsharing;

CREATE TABLE `mealsharing`.`review` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numberOfStars` INT(45) NULL,
  `content` VARCHAR(45) NULL,
  `meal_id` INT(45) NULL,
  `createdAt` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

  INSERT INTO review (id, numberOfStars, content, meal_id,  createdAt)
  VALUES (1, 3, "Best meal ever", 1, "2020/01/01 13:00:00"),
        (2, 3, "Italian is always good", 2, "2020/02/01 14:00:00"),
        (3, 5, "Taste the real Japanese food", 3, "2020/02/25 18:34:00"),
        (4, 3, "Smoked salmon is the best choice", 4, "2020/02/23 11:12:00"),
        (5, 4, "Que rico!", 5, "2020/03/12 11:22:00")
