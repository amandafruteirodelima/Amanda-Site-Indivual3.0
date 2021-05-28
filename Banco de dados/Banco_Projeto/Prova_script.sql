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



create table Personagem (
idPersonagem int primary key not null auto_increment,
nome varchar(45),
data_nascimento datetime,
descricao varchar(60),
fk_animacao int,
foreign key (fk_animacao) references Animacao(idAnimacao)
)auto_increment = 200;



select*from personagem;





create table Usuario (
idUsuario int primary key not null auto_increment,
nome varchar(50),
login varchar(80),
senha varchar(30),
animacao_preferida varchar(45),
personagem_preferido varchar (45)
)auto_increment = 1;


     

select*from usuario;
delete from usuario where idUsuario = 2;




create table Usuario_AnimacaoPreferida (
idUsuario_AnimacaoPreferida int primary key not null auto_increment,
fk_usuario int,
foreign key (fk_usuario) references Usuario(idUsuario),
fk_animacao int,
foreign key (fk_animacao) references Animacao(idAnimacao)
)auto_increment = 10;


select *from Usuario_AnimacaoPreferida;

