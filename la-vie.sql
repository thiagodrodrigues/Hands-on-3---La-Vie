CREATE DATABASE lavie;
USE lavie;
CREATE TABLE psicologos(
idPsicologo INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
senha VARCHAR(255) NOT NULL,
apresentacao VARCHAR(255) NOT NULL,
status TINYINT(1),
createdAt DATETIME,
updatedAt DATETIME
);
CREATE TABLE pacientes(
idPaciente INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
data_nascimento DATE,
status TINYINT(1),
createdAt DATETIME,
updatedAt DATETIME
);
CREATE TABLE atendimentos(
idAtendimento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
data_atendimento DATE NOT NULL,
observacao TEXT,
paciente_id INT NOT NULL,
psicologo_id INT NOT NULL,
createdAt DATETIME,
updatedAt DATETIME,
constraint fk_paciente_id foreign key(paciente_id) references pacientes(idPaciente),
constraint fk_psicologo_id foreign key(psicologo_id) references psicologos(idPsicologo)
);