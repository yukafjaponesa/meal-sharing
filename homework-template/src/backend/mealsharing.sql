CREATE DATABASE mealsharing;
USE mealsharing;

CREATE TABLE `mealsharing`.`meal` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `maxNumberOfGuests` INT(45) NULL,
  `description` VARCHAR(45) NULL,
  `createdAt` VARCHAR(45) NULL,
  `price` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

  INSERT INTO meal (id, title, maxNumberOfGuests, description, createdAt, price)
  VALUES (1, "Indian food in the summer", 5, "A nice night out eating delicious indian food", "2019/12/7 14:34", 67),
  	(2, "Italian food with best ingredients", 10, "All ingredients from Italy freshly cooked", "2019/12/15 15:30", 65),
  	(3, "Japanese food by Japanese chef", 4, "A trip to Japan", "2019/11/13 10:00", 100),
    (4, "Danish smoere brot", 6, "Taste the Danish cusine", "2019/12/8 09:26", 70),
    (5, "Spanish tapas", 8, "Fiesta con tus amigos", "2019/12/9 16:08", 85);
