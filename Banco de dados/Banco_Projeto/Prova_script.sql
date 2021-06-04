create database projeto_individual;

use projeto_individual;




create table Animacao (
idAnimacao int primary key not null auto_increment,
nome varchar(45),
tipo varchar(20),
diretor varchar(50),
ano_lancamento varchar(4) 

)auto_increment = 100;


select*from Animacao;

insert into Animacao values (NULL,'Detroit Become Human','3D','David Cage','2018'),
(NULL,'Meu Amigo Totoro','2D clássico','Hayao Miyazaki','1995'),
(NULL,'Given','2D/3D','Hikaru Yamaguchi','2020'),
(NULL,'Kimetsu no Yaiba','2D/3D','Haruo Sotozaki','2020'),
(NULL,'Paranorman','Stop Motion','Chris Butler e Sam Fell','2012');


create table Personagem (
idPersonagem int primary key not null auto_increment,
nome varchar(45),
ano_nascimento varchar(4),
descricao varchar(20)
)auto_increment = 200;

insert into Personagem values (NULL, 'Connor-DBH','2038', 'RK800 android'),
(NULL, 'Kara-DBH','2038', 'AX400 android'),
(NULL, 'Markus-DBH','2038', 'RK200 android'),
(NULL, 'Hank-DBH','1995', 'Subtenente Humano'),
(NULL, 'Kamski-DBH','2038', 'RK200 android'),
(NULL, 'Totoro','????', 'Espírito da Floresta'),
(NULL, 'Mei-MAT','1992', 'Irmã mais nova'),
(NULL, 'Satsuki-MAT','1990', 'Irmã mais velha'),
(NULL, 'Catbus-MAT','????', 'Espírito'),
(NULL, 'Kanta','1990', 'Humano da Vila'),
(NULL, 'Mafuyu-Given','2003', 'vocalista'),
(NULL, 'Uenoyama-Given','2002', 'guitarrista'),
(NULL, 'Haruki-Given','1998', 'baixista'),
(NULL, 'Akihiko-Given','2000', 'baterista'),
(NULL, 'Ugetsu-Given','1999', 'violinista'),
(NULL, 'Tanjiro-KNY','2005', 'Matador de demônios'),
(NULL, 'Nezuko-KNY','2006', 'demônio'),
(NULL, 'Zenitsu-KNY','2004', 'Matador de demônios'),
(NULL, 'Inosuke-KNY','2004', 'Matador de demônios'),
(NULL, 'Giyu-KNY','2002', 'Pilar da água'),
(NULL, 'Norman-Paranorman','2001', 'estudante'),
(NULL, 'Neil-Paranorman','2002', 'estudante'),
(NULL, 'Aggie-Paranorman','2001', 'estudante'),
(NULL, 'Courtney-Paranorman','1997', 'trabalhadora'),
(NULL, 'Mitch-Paranorman','1992', 'trabalhadora');


select*from personagem;



create table Usuario (
idUsuario int primary key not null auto_increment,
nome varchar(50),
login varchar(80),
senha varchar(30),
fk_animacao int,
foreign key (fk_animacao) references Animacao(idAnimacao),
fk_personagem int,
foreign key (fk_personagem) references Personagem(idPersonagem)
)auto_increment = 1;


select*from usuario;



create table Personagem_Animacao (
idUsuario_Personagem_Animacao int primary key not null auto_increment,
fk_personagem int,
foreign key (fk_personagem) references Personagem(idPersonagem),
fk_animacao int,
foreign key (fk_animacao) references Animacao(idAnimacao)
)auto_increment = 10;

select *from Personagem_Animacao ;

