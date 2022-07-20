DROP TABLE IF EXISTS `musicians`;
DROP TABLE IF EXISTS `records`;

CREATE TABLE IF NOT EXISTS `musicians` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(200) NOT NULL)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `records` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`image` VARCHAR(250) NULL,
`title` VARCHAR(100) NOT NULL,
`idMusician` INT NOT NULL,
CONSTRAINT `fk_records_musicians`
FOREIGN KEY (`idMusician`)
REFERENCES `musicians` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `musicians` (name)
VALUES(('MUSIQUE AMBIANTE FRANÇAISE - ')),
(('APOLLO NOIR - ')),
(('JOAKIM - ')),
(('GUILLAUME TEYSSIER - ')),
(('MAESTRO - ')),
(('DYE - ')),
(('PRINCIPLES OF GEOMETRY - ')),
(('PRINCIPLES OF GEOMETRY - ')),
(('DYE - ')),
(('GUILLAUME TEYSSIER - ')),
(('DYE - ')),
(('PRINCIPLES OF GEOMETRY - '))
;

INSERT INTO `records` (image, title, idMusician)
VALUES('https://f4.bcbits.com/img/a0118730547_10.jpg', 'VOL. 1', 2),
('https://f4.bcbits.com/img/0009949027_10.jpg', 'A/N', 6),
('https://m.media-amazon.com/images/I/81fMi+y-KfL._SS500_.jpg', 'SAMURAI', 7),
('https://f4.bcbits.com/img/a3908582333_16.jpg', 'PARIS', 3),
('https://f4.bcbits.com/img/a3482024084_16.jpg', 'MOUTAINS OF MADNESS', 5),
('https://f4.bcbits.com/img/a4182643800_10.jpg', 'COCKTAIL CITRON', 4),
('https://f4.bcbits.com/img/a3359291919_10.jpg', '', 1),
('https://f4.bcbits.com/img/a0105650101_10.jpg', 'BTLBTO', 1),
('https://i.discogs.com/6MxxL20ZrGJmXDUNWTJ8vBvs2BhxfzXR5jeAnj3yFRE/rs:fit/g:sm/q:90/h:480/w:480/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNzM1/MzktMTM1NDgwMDI4/NS02MzEzLmpwZWc.jpeg', 'TAKI:183', 4),
('https://f4.bcbits.com/img/a0210532099_10.jpg', 'LA FEMME INVISIBLE', 3),
('https://f4.bcbits.com/img/a4182643800_10.jpg', 'COCKTAIL CITRON', 4),
('https://f4.bcbits.com/img/a3359291919_10.jpg', '', 1);
