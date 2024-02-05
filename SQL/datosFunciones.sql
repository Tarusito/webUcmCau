-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-12-2022 a las 11:28:46
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `centroatencionusuario`
--

--
-- Volcado de datos para la tabla `funciones`
--

INSERT INTO `funciones` (`id`, `categoria`, `nombre`, `perfil_universitario`) VALUES
(1, 'Administración digital', 'Registro electrónico', 'AA'),
(2, 'Administración digital', 'Sede electrónica', 'AA'),
(3, 'Comunicaciones', 'Correo electrónico', 'AA'),
(4, 'Comunicaciones', 'Google Meet ', 'AA'),
(5, 'Comunicaciones', 'Cuenta de Alumno', 'AA'),
(6, 'Web', 'Portal de eventos', 'AA'),
(7, 'Administración digital', 'Certificado digital de personal física', 'Alumno'),
(8, 'Administración digital', 'Registro electrónico', 'Alumno'),
(9, 'Administración digital', 'Sede electrónica', 'Alumno'),
(10, 'Comunicaciones', 'Correo electrónico', 'Alumno'),
(11, 'Comunicaciones', 'Google Meet', 'Alumno'),
(12, 'Comunicaciones', 'Cuenta de Alumno', 'Alumno'),
(13, 'Conectividad', 'Cortafuegos corporativo', 'Alumno'),
(14, 'Conectividad', 'VPN Acceso remoto', 'Alumno'),
(15, 'Conectividad', 'Wifi Eduroam (ssid: eduroam)', 'Alumno'),
(16, 'Docencia', 'Aula Virtual', 'Alumno'),
(17, 'Docencia', 'Moodle: Aula Global', 'Alumno'),
(18, 'Docencia', 'Plataforma de cursos online Privados', 'Alumno'),
(19, 'Web', 'Portal de eventos', 'Alumno'),
(20, 'Administración digital', 'Certificado digital de personal física', 'PAS'),
(21, 'Administración digital', 'Certificado electrónico de empleado público', 'PAS'),
(22, 'Administración digital', 'Registro electrónico ', 'PAS'),
(23, 'Administración digital', 'Sede electrónica', 'PAS'),
(24, 'Administración digital', 'Portafirmas', 'PAS'),
(25, 'Comunicaciones', 'Correo electrónico', 'PAS'),
(26, 'Comunicaciones', 'Google Meet', 'PAS'),
(27, 'Comunicaciones', 'Cuenta de personal', 'PAS'),
(28, 'Comunicaciones', 'Cuenta genérica', 'PAS'),
(29, 'Conectividad', 'Cuenta as la Red SARA', 'PAS'),
(30, 'Conectividad', 'Conexión por cable en despachos', 'PAS'),
(31, 'Conectividad', 'Cortafuegos corporativo', 'PAS'),
(32, 'Conectividad', 'Resolución de nombres de dominio (DNS) ', 'PAS'),
(33, 'Conectividad', 'VPN Acceso remoto', 'PAS'),
(34, 'Conectividad', 'Wifi Eduroam (ssid: eduroam)', 'PAS'),
(35, 'Conectividad', 'Wifi para visitantes (ssid: UCM-Visitantes)', 'PAS'),
(36, 'Docencia', 'Blackboard Collaborate', 'PAS'),
(37, 'Docencia', 'Listados de clase', 'PAS'),
(38, 'Docencia', 'Moodle: Aula Global', 'PAS'),
(39, 'Web', 'Analítica Web', 'PAS'),
(40, 'Web', 'Emisión de certificados SSL', 'PAS'),
(41, 'Web', 'Hosting: alojamiento de páginas web', 'PAS'),
(42, 'Web', 'Portal de eventos', 'PAS'),
(43, 'Web', 'Redirecciones web', 'PAS'),
(44, 'Administración digital', 'Certificado digital de personal física', 'PDI'),
(45, 'Administración digital', 'Certificado electrónico de empleado público', 'PDI'),
(46, 'Administración digital', 'Registro electrónico ', 'PDI'),
(47, 'Administración digital', 'Sede electrónica', 'PDI'),
(48, 'Administración digital', 'Portafirmas', 'PDI'),
(49, 'Comunicaciones', 'Correo electrónico', 'PDI'),
(50, 'Comunicaciones', 'Google Meet', 'PDI'),
(51, 'Comunicaciones', 'Cuenta de personal', 'PDI'),
(52, 'Comunicaciones', 'Cuenta genérica', 'PDI'),
(53, 'Conectividad', 'Conexión por cable en despachos', 'PDI'),
(54, 'Conectividad', 'Cortafuegos corporativo', 'PDI'),
(55, 'Conectividad', 'VPN Acceso remoto', 'PDI'),
(56, 'Conectividad', 'Wifi Eduroam (ssid: eduroam)', 'PDI'),
(57, 'Conectividad', 'Wifi para visitantes (ssid: UCM-Visitantes)', 'PDI'),
(58, 'Docencia', 'Aula Virtual', 'PDI'),
(59, 'Docencia', 'Blackboard Collaborate', 'PDI'),
(60, 'Docencia', 'Listados de clase', 'PDI'),
(61, 'Docencia', 'Moodle: Aula Global', 'PDI'),
(62, 'Docencia', 'Plataforma de cursos online Privados', 'PDI'),
(63, 'Web', 'Analítica Web', 'PDI'),
(64, 'Web', 'Emisión de certificados SSL', 'PDI'),
(65, 'Web', 'Hosting: alojamiento de páginas web', 'PDI'),
(66, 'Web', 'Portal de eventos', 'PDI'),
(67, 'Web', 'Redirecciones web', 'PDI');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
