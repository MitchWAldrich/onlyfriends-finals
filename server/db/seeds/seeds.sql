INSERT INTO users (first_name, last_name, email, password, date_of_birth, address, gender, about_me, starsign, vaccinated)
VALUES 
('Jordan', 'Peterson', 'jpete@email.com', 'password', '1992-02-15', 'Toronto', 'Non-Binary', 'I love going out and making new friends!', 'Aquarius', 'Yes'),
('Yuti', 'Reswick', 'itsyuti@email.com', 'password', '1990-05-09', 'Brampton', 'Male', 'I live for the Raptors. Hit me up if you wanna shoot some hoops', 'Taurus', 'Yes'),
('Eva', 'Bell', 'evab@email.com', 'password', '1998-10-23', 'Vancouver', 'Female', 'I love to hike and go on adventures!', 'Scorpio', 'Yes'),
('Adrian', 'Williams', 'awills@email.com', 'password', '1994-03-19', 'Toronto', 'Male', 'Photography is my passion. Always down for a collab', 'Pisces', 'No'),
('Alexa', 'Jones', 'alexajones@email.com', 'password', '1986-09-12', 'Scarborough', 'Undisclosed', 'Always looking for book recommendations! Let me know what you are reading', 'Virgo', 'Yes'),
('Kelly', 'Chu', 'kelly@email.com', 'password', '1998-09-11', 'Toronto', 'Female', 'I only love three things: My dog, the beach, and making friends!', 'Virgo', 'Yes'),
('Natasha', 'McMillan', 'natty@email.com', 'password', '1994-10-07', 'Vancouver', 'Female', 'Florist and aspiring author. Looking for a friend to share ideas with!', 'Libra', 'Yes'),
('Matt', 'Powell', 'mattpow@email.com', 'password', '1993-12-27', 'Oakville', 'Male', 'Overall an easy going guy. Also a geek for Marvel and everything comics related.', 'Capricorn', 'Yes'),
('Trish', 'Sawyer', 'trish@email.com', 'password', '1994-02-11', 'Toronto', 'Female', 'Happiness never goes out of style!', 'Aquarius', 'Yes'),
('Sean', 'Porter', 'seanp@email.com', 'password', '1990-06-14', 'Toronto', 'Male', 'I’m awesome (don’t worry I think you are too).', 'Gemini', 'Yes'),
('Kim', 'Sanchez', 'kimmy@email.com', 'password', '1998-09-01', 'Toronto', 'Female', 'Either reading or travelling.', 'Virgo', 'Yes'),
('Kate', 'Sanchez', 'kate@email.com', 'password', '1999-10-07', 'Mississauga', 'Female', 'Lover of the outdoors, art, and travel.', 'Libra', 'Yes'),
('Mohamed', 'Ali', 'mo@email.com', 'password', '1999-04-19', 'Mississauga', 'Male', 'Always down to make new friends.', 'Aries', 'Yes'),
('TJ', 'Jung', 'tj@email.com', 'password', '1995-02-16', 'Toronto', 'Male', 'Just a guy who loves to code', 'Aquarius', 'Yes'),
('Mona','Waseem', 'mona@email.com', 'password', '1988-07-01', 'Toronto', 'Female', 'An animal activist and an in the works developer!', 'Cancer', 'Yes'),
('Beatrice', 'Kwan', 'beakwan@email.com', 'password', '1994-10-31', 'Toronto', 'Female', 'Looking for friends to go dancing with!', 'Scorpio', 'Yes'),
('Phil', 'Maye', 'phil@email.com', 'password', '1990-05-09', 'Toronto', 'Male', 'I do not want any friends', 'Taurus', 'Yes'),
('Kleir', 'Miranda', 'kleir@email.com', 'password', '1994-02-11', 'Mississauga', 'Female', 'Always looking for new food to try!', 'Aquarius', 'Yes'),
('Rose', 'Gopez', 'rosie@email.com', 'password', '1993-05-09', 'Adelaide', 'Female', 'Who will be my next travel buddy?', 'Taurus', 'Yes'),
('Chris', 'Reyes', 'chrisr@email.com', 'password', '1991-12-27', 'Toronto', 'Male', 'My last picture will make you want to be friends with me.', 'Capricorn', 'Yes');


INSERT INTO photos (user_id, photo1_url, photo2_url, photo3_url, photo4_url)
VALUES 
(1, 'https://i.imgur.com/PkPhCXN.jpg', 'https://i.imgur.com/g7KhzFz.jpg', 'https://i.imgur.com/I28EmjM.jpg', 'https://i.imgur.com/ldA2mbz.jpg'),
(2, 'https://i.imgur.com/YO0LKUk.jpg', 'https://i.imgur.com/fBgW4Du.jpg', 'https://i.imgur.com/dC2o99f.jpg','https://i.imgur.com/ldHo18O.jpg'),
(3, 'https://i.imgur.com/zAkOsvd.jpg', 'https://i.imgur.com/vtL4mTg.jpg', 'https://i.imgur.com/AWjRkyr.jpg','https://i.imgur.com/s1es1cH.jpg'),
(4, 'https://i.imgur.com/BB7vcgK.jpg', 'https://i.imgur.com/UIgzJIH.jpg', 'https://i.imgur.com/zkzV4Yk.jpg','https://i.imgur.com/fKKEwdz.jpg'),
(5, 'https://i.imgur.com/msEdEpF.jpg', 'https://i.imgur.com/MVYCtJ6.jpg', 'https://i.imgur.com/oMTz2Ug.jpg','https://i.imgur.com/wvwQRr4.jpg'),
(6, 'https://images.unsplash.com/photo-1589566856690-fc68ac16845c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80','https://images.unsplash.com/photo-1624759356182-4d147c997ef4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3101&q=80','https://images.unsplash.com/photo-1607735296380-b066a27182a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3064&q=80', 'https://images.unsplash.com/photo-1600361675085-7ad23d454309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=760&q=80'),
(7, 'https://images.pexels.com/photos/8532778/pexels-photo-8532778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/8532756/pexels-photo-8532756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/8532623/pexels-photo-8532623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/8532767/pexels-photo-8532767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(8, 'https://images.pexels.com/photos/4114828/pexels-photo-4114828.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/4114741/pexels-photo-4114741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/4115001/pexels-photo-4115001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/4113955/pexels-photo-4113955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(9, 'https://images.pexels.com/photos/4045541/pexels-photo-4045541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/4046158/pexels-photo-4046158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/4056529/pexels-photo-4056529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/4046314/pexels-photo-4046314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(10, 'https://images.pexels.com/photos/5749820/pexels-photo-5749820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/5749770/pexels-photo-5749770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/5749790/pexels-photo-5749790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/5749089/pexels-photo-5749089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(11, 'https://i.imgur.com/1R5U27H.jpg', 'https://i.imgur.com/K9P3ZwP.jpg', 'https://i.imgur.com/8qG1Fin.png', 'https://i.imgur.com/sWBQR41.jpg'),
(12, 'https://i.imgur.com/lfnqruz.jpg', 'https://i.imgur.com/XY8Rdez.jpg', 'https://i.imgur.com/Ck3Vea6.jpg', 'https://i.imgur.com/dCLzsXR.jpg'),
(13, 'https://i.imgur.com/KAh196M.jpg', 'https://i.imgur.com/KAh196M.jpg', 'https://i.imgur.com/KAh196M.jpg', 'https://i.imgur.com/KAh196M.jpg'),
(14, 'https://i.imgur.com/vRHygPK.jpg?1', 'https://i.imgur.com/vRHygPK.jpg?1', 'https://i.imgur.com/vRHygPK.jpg?1', 'https://i.imgur.com/vRHygPK.jpg?1'),
(15, 'https://i.imgur.com/dZoIHZ2.jpg', 'https://i.imgur.com/cgKTkjf.jpg', 'https://i.imgur.com/DPsxtQC.jpg', 'https://i.imgur.com/l69ux1y.png'),
(16, 'https://i.imgur.com/UEs6lC7.jpg?1', 'https://i.imgur.com/45Obbw6.jpg', 'https://i.imgur.com/TYrS0ap.jpg', 'https://i.imgur.com/dhhYSTw.jpg'), 
(17, 'https://i.imgur.com/XzwdBsh.jpg', 'https://i.imgur.com/45Obbw6.jpg', 'https://i.imgur.com/3OpA5QS.jpg', 'https://i.imgur.com/0YFD3OB.jpg'),
(18, 'https://i.imgur.com/GRr36Oj.jpg', 'https://i.imgur.com/KIHS4k9.jpg', 'https://i.imgur.com/zMCE3xe.jpg', 'https://i.imgur.com/3rLbTnI.jpg'),
(19, 'https://i.imgur.com/ax88gMu.jpg', 'https://i.imgur.com/v5o3R7a.jpg', 'https://i.imgur.com/ZpMCBE9.jpg', 'https://i.imgur.com/qfCUjxF.jpg'),
(20, 'https://i.imgur.com/AJdMtmk.jpg', 'https://i.imgur.com/wtcAy6b.jpg', 'https://i.imgur.com/c1mImcp.jpg', 'https://i.imgur.com/TSa89SG.jpg');


INSERT INTO interests (user_id, reading, tv_movies, fitness, hiking, arts_culture, music, gaming, travel, studying, sports, eating_out, going_out)
VALUES 
(1, true, true, false, false, true, true, true, false, true, false, false, true),
(2, false, false, false, false, true, true, false, false, false, true, false, true),
(3, true, false, true, false, true, false, false, false, true, true, false, true),
(4, false, true, false, false, true, true, false, false, true, false, true, true),
(5, true, false, false, true, true, false, true, false, false, true, true, false),
(6, true, false, true, true, true, true, true, false, true, false, true, false),
(7, true, true, false, false, true, false, false, false, true, false, false, false),
(8, true, true, false, false, false, true, true, false, false, true, false, false),
(9, false, false, true, true, true, false, false, true, false, false, true, true),
(10, true, false, true, true, true, false, false, true, true, true, true, false),
(11, true, false, false, true, true, true, true, true, true, false, true, false),
(12, false, false, false, true, true, false, false, true, false, false, false, true),
(13, true, false, true, true, false, true, false, true, false, true, false, true),
(14, true, true, false, false, false, false, true, false, true, false, false, false),
(15, false, true, false, true, true, true, false, false, false, false, true, true),
(16, true, true, true, true, true, false, false, true, false, false, true, true),
(17, false, true, true, false, true, true, true, false, false, true, false, true),
(18, true, true, false, false, true, true, true, true, false, false, true, false),
(19, true, true, false, false, true, false, false, true, false, false, true, true),
(20, false, false, false, false, true, true, false, true, false, false, true, true);


INSERT INTO potential_matches (user1_id, user2_id, best_friend)
VALUES 
(1, 2, false),
(1, 3, false),
(1, 4, false),
(1, 5, false),
(4, 5, true),
(2, 4, false);


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