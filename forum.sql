
USE Forums1;
show tables; 
/*CREATE TABLE tags
	(
    tag_id TINYINT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(256) NOT NULL
    );
    
CREATE TABLE professions
	(
    profession_id TINYINT AUTO_INCREMENT PRIMARY KEY,
    profession_name VARCHAR(50) NOT NULL
    );

CREATE TABLE users
	(
	user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(256) NOT NULL UNIQUE,
    user_email VARCHAR(64) NOT NULL UNIQUE,
    user_password CHAR(33) NOT NULL,
    profession_id TINYINT DEFAULT 1,
    FOREIGN KEY (profession_id) REFERENCES professions (profession_id)
    );
    
CREATE TABLE posts
	(
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    last_edit_time DATETIME NOT NULL,
    tag_id TINYINT,
    title VARCHAR(256) NOT NULL,
    votes INT DEFAULT 0 NOT NULL,
    is_commented TINYINT(1) DEFAULT 0,
	poster_id INT NOT NULL,
    poster_name VARCHAR(256) NOT NULL,
    profession_id TINYINT DEFAULT 1,
    body TEXT NOT NULL,
    accepted_answer_id INT,
    edit_status TINYINT DEFAULT 0,
    comment_count INT(6) DEFAULT 0,
    post_status TINYINT DEFAULT 0,
    FOREIGN KEY (tag_id) REFERENCES tags (tag_id),
    FOREIGN KEY (poster_id) REFERENCES users (user_id),
    FOREIGN KEY (poster_name) REFERENCES users (user_name),
	FOREIGN KEY (profession_id) REFERENCES professions (profession_id)
    );

CREATE TABLE postbase 
	(
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (post_id, user_id),
    FOREIGN KEY (post_id) REFERENCES posts (post_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
    );

CREATE TABLE post_votes
	(
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    vote TINYINT(2) NOT NULL,
    PRIMARY KEY (user_id, post_id),
    FOREIGN KEY (post_id) REFERENCES posts (post_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
    );

CREATE TABLE comments
	(
    post_id INT NOT NULL,
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
	votes INT DEFAULT 0 NOT NULL,
    is_replied TINYINT(1) DEFAULT 0,
    poster_id INT NOT NULL,
    poster_name VARCHAR(256) NOT NULL,
    profession_id TINYINT DEFAULT 1,
    body TEXT NOT NULL,
    last_edit_time DATETIME NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts (post_id),
    FOREIGN KEY (poster_id) REFERENCES users (user_id),
    FOREIGN KEY (poster_name) REFERENCES users (user_name),
    FOREIGN KEY (profession_id) REFERENCES professions (profession_id)
    );
    
CREATE TABLE comment_votes
	(
    user_id INT NOT NULL,
    comment_id INT NOT NULL,
    vote TINYINT(2) NOT NULL,
    PRIMARY KEY (user_id, comment_id),
    FOREIGN KEY (comment_id) REFERENCES comments (comment_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
    );
    
CREATE TABLE replies
	(
    comment_id INT NOT NULL,
    reply_id INT AUTO_INCREMENT PRIMARY KEY,
    poster_id INT NOT NULL,
    poster_name VARCHAR(256) NOT NULL,
    profession_id TINYINT DEFAULT 1,
    body TINYTEXT NOT NULL,
    last_edit_time DATETIME NOT NULL,
    FOREIGN KEY (comment_id) REFERENCES comments (comment_id),
    FOREIGN KEY (poster_id) REFERENCES users (user_id),
    FOREIGN KEY (poster_name) REFERENCES users (user_name),
    FOREIGN KEY (profession_id) REFERENCES professions (profession_id)
    );
    
ALTER TABLE posts
ADD FOREIGN KEY (accepted_answer_id) REFERENCES comments (comment_id);
INSERT INTO professions (profession_id, profession_name) VALUES(1,"not a doctor");
INSERT INTO professions (profession_id, profession_name) VALUES(2,"doctor"); */
select * from users ;
