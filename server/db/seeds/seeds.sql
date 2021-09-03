INSERT INTO users (first_name, last_name, email, password, date_of_birth, address, gender, about_me, starsign, vaccinated)
VALUES 
('Jordan', 'Peterson', 'jpete@email.com', 'password', '1992-02-15', 'Toronto', 'Non-Binary', 'I love going out and making new friends!', 'Aquarius', 'Yes'),
('Yuti', 'Reswick', 'itsyuti@email.com', 'password', '1990-05-09', 'Brampton', 'Male', 'I live for the Raptors. Hit me up if you wanna shoot some hoops', 'Taurus', 'Yes'),
('Eva', 'Bell', 'evab@email.com', 'password', '1998-10-23', 'Vancouver', 'Female', 'I love to hike and go on adventures!', 'Scorpio', 'Yes'),
('Adrian', 'Williams', 'awills@email.com', 'password', '1994-03-19', 'Toronto', 'Male', 'Photography is my passion. Always down for a collab', 'Pisces', 'No'),
('Alexa', 'Jones', 'alexajones@email.com', 'password', '1986-09-12', 'Scarborough', 'Undisclosed', 'Always looking for book recommendations! Let me know what you are reading', 'Virgo', 'Yes');

INSERT INTO photos (user_id, photo1_url, photo2_url, photo3_url, photo4_url)
VALUES 
(1, 'https://i.imgur.com/PkPhCXN.jpg', 'https://i.imgur.com/g7KhzFz.jpg', 'https://i.imgur.com/I28EmjM.jpg', 'https://i.imgur.com/ldA2mbz.jpg'),
(2, 'https://i.imgur.com/YO0LKUk.jpg', 'https://i.imgur.com/fBgW4Du.jpg', 'https://i.imgur.com/dC2o99f.jpg','https://i.imgur.com/ldHo18O.jpg'),
(3, 'https://i.imgur.com/zAkOsvd.jpg', 'https://i.imgur.com/vtL4mTg.jpg', 'https://i.imgur.com/AWjRkyr.jpg','https://i.imgur.com/s1es1cH.jpg'),
(4, 'https://i.imgur.com/BB7vcgK.jpg', 'https://i.imgur.com/UIgzJIH.jpg', 'https://i.imgur.com/zkzV4Yk.jpg','https://i.imgur.com/fKKEwdz.jpg'),
(5, 'https://i.imgur.com/msEdEpF.jpg', 'https://i.imgur.com/MVYCtJ6.jpg', 'https://i.imgur.com/oMTz2Ug.jpg','https://i.imgur.com/wvwQRr4.jpg');

INSERT INTO interests (user_id, reading, tv_movies, fitness, hiking, arts_culture, music, gaming, travel, studying, sports, eating_out, going_out)
VALUES 
(1, true, true, false, false, true, true, true, false, true, false, false, true),
(2, false, false, false, false, true, true, false, false, false, true, false, true),
(3, true, false, true, false, true, false, false, false, true, true, false, true),
(4, false, true, false, false, true, true, false, false, true, false, true, true),
(5, true, false, false, true, true, false, true, false, false, true, true, false);

INSERT INTO potential_matches (user1_id, user2_id, best_friend)
VALUES 
(1, 2, false),
(1, 3, false),
(1, 4, false),
(1, 5, false),
(4, 5, true),
(2, 4, false),
(2, 1, true),
(3, 1, false),
(4, 1, true),
(5, 4, true);

INSERT INTO matches (user1_id, user2_id, best_friend)
VALUES 
(1, 2, false),
(1, 3, false),
(1, 4, false);

INSERT INTO messages (match_id, sender_id, receiver_id, message, sent_at)
VALUES
(1, 2, 1, 'I think my other friend and I are watching the Raps tonight. Want to come with us?', '2021-08-19 10:23:54'),
(2, 3, 1, 'I might visit Toronto next week. We can go for a hike!', '2021-08-19 08:30:01'),
(3, 4, 1, 'Let me know when you want to link up and take some pictures xx', '2021-08-22 23:23:54');