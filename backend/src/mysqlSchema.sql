CREATE TABLE `students` (
	`student_id` INT PRIMARY KEY AUTO_INCREMENT,
	`full_name` VARCHAR(255) NOT NULL,
	`email` VARCHAR(50) NOT NULL,
	`phone_no` INT(10) NOT NULL,
	`profile_info` VARCHAR(500) NOT NULL,
	`guardian_phone` INT(10) NOT NULL,
	`password` VARCHAR(255) NOT NULL,
	`gender` ENUM("Male","Female") NOT NULL,
	`national_id` INT(15) NOT NULL,
	`profile_img` VARCHAR(255),
	`is_admin` BOOLEAN,
	`created_at` VARCHAR(255) NOT NULL
);
