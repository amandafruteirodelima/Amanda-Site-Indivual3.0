create database amanda;

use amanda;

create table USUARIOS(
ID_USUARIOS int primary key auto_increment,
NOME varchar(60),
LOGIN varchar(70),
SENHA varchar(30),
ANIMACAO_PREFERIDA varchar(40)
) auto_increment = 1000;

select*from USUARIOS;

drop table USUARIOS;