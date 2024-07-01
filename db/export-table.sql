CREATE DATABASE  IF NOT EXISTS `sushiSensai_backend`
USE `sushiSensai_backend`;

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE categorias (
    Categoria_ID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL
);

DROP TABLE IF EXISTS `productoSushi`;
CREATE TABLE productoSushi (
    ID_Producto INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Descripción TEXT,
    Precio DECIMAL(10, 2) NOT NULL,
    Categoría_ID VARCHAR(50),
    Ingredientes TEXT,
    Disponible BOOLEAN DEFAULT TRUE,
    Fecha_Creación TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Fecha_Actualización TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

LOCK TABLES `categorias' WRITE;

INSERT INTO categorias (Nombre)
VALUES 
('Entrada'),
('Roll vegetariano'),
('Roll caliente'),
('Onigiri'),
('Ramen'),
('Salsa');

UNLOCK TABLES;


LOCK TABLES `productoSushi' WRITE;

INSERT INTO productoSushi (Nombre, Descripción, Precio, Categoría_ID, Ingredientes, Disponible)
VALUES 
('Arrollados primavera', 'Crujientes arrollados rellenos de vegetales frescos.', 6000.00, 1, 'Repollo, Zanahoria, Fideos de Arroz, Alga', TRUE),
('Rukkora-Yasai (Roll Vegano)', 'Rollo vegano con rúcula y vegetales frescos.', 8500.00, 2, 'Rúcula, Pepino, Zanahoria, Aguacate, Arroz, Alga', TRUE),
('Rabas', 'Calamares rebozados y fritos.', 12000.00, 1, 'Calamar, Harina, Limón', TRUE),
('Dumplings', 'Empanadillas rellenas de carne de cerdo.', 7500.00, 1, 'Carne de Cerdo, Jengibre, Cebolla Verde, Salsa de Soja', TRUE),
('California Tako-Roll', 'Rollo de sushi con pulpo y aguacate.', 10000.00, 3, 'Pulpo, Aguacate, Pepino, Arroz, Alga', TRUE),
('Mango Sushi-Roll', 'Rollo de sushi con mango fresco y salmón.', 11000.00, 3, 'Mango, Salmón, Aguacate, Arroz, Alga', TRUE),
('California Chizu-Roll', 'Rollo de sushi con queso crema y aguacate.', 9500.00, 3, 'Queso Crema, Aguacate, Pepino, Arroz, Alga', TRUE),
('California Crispy-Roll', 'Rollo de sushi crujiente con cangrejo y pepino.', 11500.00, 3, 'Cangrejo, Pepino, Mayonesa, Arroz, Alga, Tempura', TRUE),
('Dragon Roll (Avocado Sushi)', 'Rollo de sushi con anguila y aguacate.', 13000.00, 3, 'Anguila, Aguacate, Pepino, Arroz, Alga', TRUE),
('Salmón Roll', 'Rollo de sushi con salmón fresco.', 10000.00, 3, 'Salmón, Aguacate, Arroz, Alga', TRUE),
('Pepino Roll', 'Rollo de sushi simple con pepino.', 7000.00, 2, 'Pepino, Arroz, Alga', TRUE),
('Toki Maki-Roll', 'Rollo de sushi especial con tempura de camarón.', 14000.00, 3, 'Tempura de Camarón, Aguacate, Arroz, Alga', TRUE),
('Sashimi Salmon', 'Láminas finas de salmón fresco.', 15000.00, 1, 'Salmón', TRUE),
('Osaka Ebi-Roll', 'Rollo de sushi con camarones tempura y aguacate.', 12000.00, 3, 'Camarones Tempura, Aguacate, Pepino, Arroz, Alga', TRUE),
('Ramen de Cerdo', 'Ramen tradicional con carne de cerdo.', 13500.00, 5, 'Cerdo, Fideos Ramen, Huevo, Caldo de Cerdo, Cebolla Verde', TRUE),
('Temaki Roll', 'Cono de sushi con pescado fresco y vegetales.', 9000.00, 3, 'Atún, Aguacate, Pepino, Arroz, Alga', TRUE),
('Onigiri Relleno de Camarones', 'Bola de arroz rellena de camarones.', 5500.00, 4, 'Arroz, Camarones, Alga, Sésamo', TRUE),
('Plátano Roll', 'Rollo de sushi dulce con plátano y crema.', 8000.00, 2, 'Plátano, Crema, Arroz, Alga', TRUE),
('Kit de Salsas', 'Selección de salsas para acompañar.', 3000.00, 6, 'Wasabi, Salsa de Soja, Salsa Teriyaki', TRUE);

UNLOCK TABLES;