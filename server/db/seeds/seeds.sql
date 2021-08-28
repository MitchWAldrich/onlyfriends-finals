INSERT INTO users (first_name, last_name, email, password, date_of_birth, address, gender, about_me, starsign, vaccinated)
VALUES 
('Jordan', 'Peterson', 'jpete@email.com', 'password', '1992-02-15', 'Toronto', 'Non-Binary', 'I love going out and making new friends!', true, true),
('Yuti', 'Reswick', 'itsyuti@email.com', 'password', '1990-05-09', 'Brampton', 'Male', 'I live for the Raptors. Hit me up if you wanna shoot some hoops', false, true),
('Eva', 'Bell', 'evab@email.com', 'password', '1998-10-23', 'Vancouver', 'Female', 'I love to hike and go on adventures!', false, true),
('Adrian', 'Williams', 'awills@email.com', 'password', '1994-03-19', 'Toronto', 'Male', 'Photography is my passion. Always down for a collab', true, false),
('Alexa', 'Jones', 'alexajones@email.com', 'password', '1986-09-12', 'Scarborough', 'Undisclosed', 'Always looking for book recommendations! Let me know what you are reading', false, true);

INSERT INTO photos (user_id, photo1_url, photo2_url, photo3_url, photo4_url)
VALUES 
(1, 'https://i.imgur.com/PkPhCXN.jpg', 'https://i.imgur.com/g7KhzFz.jpg', 'https://i.imgur.com/I28EmjM.jpg', 'https://i.imgur.com/ldA2mbz.jpg'),
(2, 'https://i.imgur.com/YO0LKUk.jpg', 'https://i.imgur.com/fBgW4Du.jpg', 'https://i.imgur.com/dC2o99f.jpg','https://i.imgur.com/ldHo18O.jpg'),
(3, 'https://i.imgur.com/zAkOsvd.jpg', 'https://i.imgur.com/vtL4mTg.jpg', 'https://i.imgur.com/AWjRkyr.jpg','https://i.imgur.com/s1es1cH.jpg'),
(4, 'https://i.imgur.com/BB7vcgK.jpg', 'https://i.imgur.com/UIgzJIH.jpg', 'https://i.imgur.com/zkzV4Yk.jpg','https://i.imgur.com/fKKEwdz.jpg'),
(5, 'https://i.imgur.com/msEdEpF.jpg', 'https://i.imgur.com/MVYCtJ6.jpg', 'https://i.imgur.com/oMTz2Ug.jpg','https://i.imgur.com/wvwQRr4.jpg');

INSERT INTO interests (user_id, books, tv_movies, fitness, hiking, arts_culture, music, gaming, travel, studying, sports, eating_out, going_out, other)
VALUES 
(1, true, true, false, false, true, true, true, false, true, false, false, true, false),
(2, false, false, false, false, true, true, false, false, false, true, false, true, false),
(3, true, false, true, false, true, false, false, false, true, true, false, true, false),
(4, false, true, false, false, true, true, false, false, true, false, true, true, false),
(5, true, false, false, true, true, false, true, false, false, true, true, false, false);

INSERT INTO matches (user1_id, user2_id, best_friend)
VALUES 
(1, 2, false),
(1, 4, false),
(1, 5, false),
(4, 5, true),
(2, 4, false);