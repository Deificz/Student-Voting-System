INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');

INSERT INTO candidate_role(role_name) VALUES("President");
INSERT INTO candidate_role(role_name) VALUES("Vice President");
INSERT INTO candidate_role(role_name) VALUES("Secretary");
INSERT INTO candidate_role(role_name) VALUES("Treasurer");

INSERT INTO candidate(name, introduction, party_list, candidate_role_id) VALUES("Mandy Llagas", "Boto nyo ko please! Libreng iphone pag nanalo!", "Party Party", 1);
INSERT INTO candidate(name, introduction, party_list, candidate_role_id) VALUES("Aeron Lazo", "Boto nyo ko mga idolo! Gagawin nating 20 pesos ang bigas!", "Party Party", 2);
INSERT INTO candidate(name, introduction,  party_list, candidate_role_id) VALUES("Michael Saltarin", "Boto nyo ko para goods! ", "Party Party", 3);
INSERT INTO candidate(name, introduction, party_list, candidate_role_id) VALUES("Ced Opina", "Boto nyo ko para life is good mga idolo", "Life of the Party", 3);

INSERT INTO candidate_awards(candidate_id, awards) VALUES (1, "Best in Math");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (1, "Best in Science");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (1, "Pogi ng Taon 2021");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (1, "Pogi ng Taon 2022");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (1, "Pogi ng Taon 2023");

INSERT INTO candidate_awards(candidate_id, awards) VALUES (2, "Tulak ng Muntinlupa 2022");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (2, "Tulak ng Muntinlupa 2023");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (2, "Talamak na Snatcher 2020");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (2, "Ginulay ang Munggo");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (2, "Best in Computer");

INSERT INTO candidate_awards(candidate_id, awards) VALUES (3, "Fuckboy ng Taon");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (3, "Mister Pogi ng Mandaluyong 2022");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (3, "Mister Fuckboy ng Manda 2020");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (3, "Idol ng taon");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (3, "Best in Computer Shop");

INSERT INTO candidate_awards(candidate_id, awards) VALUES (4, "Fuckboy of the Year 2022");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (4, "Mister Pogi ng Caloocan 2022");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (4, "Drummer of the Year 2019");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (4, "Best in Pagpalo 2020");
INSERT INTO candidate_awards(candidate_id, awards) VALUES (4, "Bimby of the Year 2022");


INSERT INTO candidate_platforms(candidate_id, platforms) VALUES (1, "Required lahat magbayad monthly ng 50 pesos!");
INSERT INTO candidate_platforms(candidate_id, platforms) VALUES (1, "Gagawin nating 20 pesos ang bigas!");
INSERT INTO candidate_platforms(candidate_id, platforms) VALUES (1, "Magpapatayo ako ng bahay para sa pamilya ko syempre gamit pera nyo!");

INSERT INTO candidate_platforms(candidate_id, platforms) VALUES (2, "Gugulayin natin ang munggo");
INSERT INTO candidate_platforms(candidate_id, platforms) VALUES (2, "Papatayo ako computer shop para makalaro kami ng pamilya ko!");
INSERT INTO candidate_platforms(candidate_id, platforms) VALUES (2, "Iuutos ko na required na ang monthly na 100 pesos pambili ko ng kotse!");

INSERT INTO candidate_platforms(candidate_id, platforms) VALUES (3, "Di ka pwede lumabas ng naka shorts lang");
INSERT INTO candidate_platforms(candidate_id, platforms) VALUES (3, "Mag-uupdate ka sakin kung lalabas ka at kung sino kasama mo!");
INSERT INTO candidate_platforms(candidate_id, platforms) VALUES (3, "Wag ka magpapalipas ng gutom!");

INSERT INTO candidate_platforms(candidate_id, platforms) VALUES (4, "Libre lahat basta may bayad");
INSERT INTO candidate_platforms(candidate_id, platforms) VALUES (4, "Kikiss nyo ko kada kita nyo sakin sa labas!");
INSERT INTO candidate_platforms(candidate_id, platforms) VALUES (4, "Hindi pwedeng wala akong kotse papasok sa school kaya mag-ambagan kayo!");