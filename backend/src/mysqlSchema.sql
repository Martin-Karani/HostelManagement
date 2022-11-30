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
	`booked_room` INT ,
	`profile_img` VARCHAR(255),
	`is_admin` BOOLEAN DEFAULT 0,
	`created_at` VARCHAR(255) NOT NULL,
	`messages`  INT 
)

CREATE TABLE `messages`(
	`message_id`  INT PRIMARY KEY AUTO_INCREMENT,
	`message` VARCHAR(255) NOT NULL,
	`from_id` VARCHAR(255) NOT NULL,
	`to_id` VARCHAR(255) NOT NULL,
	`created_at` VARCHAR(255) NOT NULL
)

CREATE TABLE `rooms` (
	`room_id` INT PRIMARY KEY AUTO_INCREMENT,
	`hostel_name` ENUM("A-hostel","B-hostel","C-hostel",'D-hostel','E-hostel', 'F-hostel'),
	`room_no` INT NOT NULL UNIQUE,
	`booked` BOOLEAN DEFAULT 0
)

CREATE TABLE `complains`(
	`complain_id` INT PRIMARY KEY AUTO_INCREMENT,
	`from_id` INT,
	`complain` VARCHAR(255) NOT NULL,
	`created_at` VARCHAR(255) NOT NULL
)

CREATE TABLE `notice`(
	`notice_id` INT PRIMARY KEY AUTO_INCREMENT,
	`notice_title` VARCHAR(255) NOT NULL,
	`notice_details` VARCHAR(255) NOT NULL,
	`created_at` VARCHAR(255) NOT NULL
)
-- CREATE TABLE `notifications`(
-- 	`notice_id` INT PRIMARY KEY AUTO_INCREMENT,
-- 	`notice_title` VARCHAR(255) NOT NULL,
-- 	`notice_details` VARCHAR(255) NOT NULL,
-- 	`created_at` VARCHAR(255) NOT NULL
-- )


INSERT INTO 
	rooms(hostel_name, room_no)
VALUES
	('A-hostel',1),
	('A-hostel',2),
	('A-hostel',3),
	('A-hostel',4),
	('A-hostel',5),
	('B-hostel',100),
	('B-hostel',102),
	('B-hostel',103),
	('B-hostel',104),
	('B-hostel',105),
	('C-hostel',201),
	('C-hostel',202),
	('C-hostel',203),
	('C-hostel',204),
	('C-hostel',205),
	('D-hostel',301),
	('D-hostel',302),
	('D-hostel',303),
	('D-hostel',304),
	('D-hostel',305),
	('E-hostel',401),
	('E-hostel',402),
	('E-hostel',403),
	('E-hostel',404),
	('E-hostel',405),
	('F-hostel',501),
	('F-hostel',502),
	('F-hostel',503),
	('F-hostel',504),
	('F-hostel',505);