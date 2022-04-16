-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name FROM users ORDER BY last_name;



-- Exercise 4
SELECT id, user_id, image_url FROM posts WHERE user_id=26;



-- Exercise 5
SELECT id, image_url, user_id FROM posts WHERE user_id=26 OR user_id=12;



-- Exercise 6
SELECT COUNT(*) FROM posts;



-- Exercise 7
SELECT user_id, COUNT (posts) FROM posts GROUP BY user_id;



-- Exercise 8
SELECT posts.id, posts.image_url, posts.user_id, users.username, users.first_name, users.last_name FROM posts INNER JOIN users ON users.id = posts.user_id WHERE user_id=26 OR user_id=12;



-- Exercise 9
SELECT posts.id, posts.pub_date, following.following_id FROM posts INNER JOIN following ON posts.user_id = following.following_id WHERE following.user_id = 26;



-- Exercise 10




-- Exercise 11
INSERT INTO bookmarks (id, user_id, post_id, timestamp) VALUES (800, 26, 219, now());
INSERT INTO bookmarks (id, user_id, post_id, timestamp) VALUES (801, 26, 220, now());
INSERT INTO bookmarks (id, user_id, post_id, timestamp) VALUES (802, 26, 221, now());



-- Exercise 12
DELETE FROM bookmarks WHERE id=800;
DELETE FROM bookmarks WHERE id=801;
DELETE FROM bookmarks WHERE id=802;



-- Exercise 13
UPDATE users SET email = 'knick2022@gmail.com' where id = 26;



-- Exercise 14
