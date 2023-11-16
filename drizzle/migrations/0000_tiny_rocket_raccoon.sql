CREATE TABLE `book` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(255),
	`author` varchar(255),
	CONSTRAINT `book_id` PRIMARY KEY(`id`)
);
