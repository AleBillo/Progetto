-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Dic 09, 2024 alle 17:57
-- Versione del server: 10.4.32-MariaDB
-- Versione PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `billo_vinils_sql`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `categories`
--

CREATE TABLE `categories` (
  `id_category` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `categories`
--

INSERT INTO `categories` (`id_category`, `category_name`) VALUES
(1, 'Rock'),
(2, 'Rap'),
(3, 'Hip Hop'),
(4, 'Jazz');

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `surname` varchar(100) DEFAULT NULL,
  `amministratore` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`id_user`, `email`, `nickname`, `password`, `name`, `surname`, `amministratore`) VALUES
(1, 'mario.rossi@example.com', 'mario123', 'password1', 'Mario', 'Rossi', 1),
(2, 'giulia.bianchi@example.com', 'giulia456', 'password2', 'Giulia', 'Bianchi', 0),
(3, 'alejandro.smith@example.com', 'alejandro789', 'password3', 'Alejandro', 'Smith', 0),
(4, 'lucia.kowalski@example.com', 'lucia101', 'password4', 'Lucia', 'Kowalski', 0),
(5, 'julia.martin@example.com', 'julia202', 'password5', 'Julia', 'Martin', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `vinyls`
--

CREATE TABLE `vinyls` (
  `id_vinyl` int(11) NOT NULL,
  `vinyl_name` varchar(255) NOT NULL,
  `artist` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `year` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `vinyls`
--

INSERT INTO `vinyls` (`id_vinyl`, `vinyl_name`, `artist`, `price`, `year`, `category_id`, `image_url`) VALUES
(1, 'The Dark Side of the Moon', 'Pink Floyd', 35.50, 1973, 1, 'The_dark_side_of_the_moon.jpg'),
(2, 'To Pimp a Butterfly', 'Kendrick Lamar', 25.99, 2015, 2, 'To_pimp_a_butterfly.jpg'),
(3, 'A Night at the Opera', 'Queen', 30.00, 1975, 1, 'A_night_at_the_opera.jpg'),
(4, 'DAMN.', 'Kendrick Lamar', 26.99, 2017, 2, 'DAMN.jpg'),
(5, 'Kind of Blue', 'Miles Davis', 28.50, 1959, 4, 'Kind_of_blue.jpg'),
(6, 'Ready to Die', 'The Notorious B.I.G.', 29.50, 1994, 2, 'Ready_to_die.jpg'),
(7, 'Abbey Road', 'The Beatles', 29.99, 1969, 1, 'Abbey_road.jpg'),
(8, 'The College Dropout', 'Kanye West', 27.50, 2004, 3, 'The_college_dropout.jpg'),
(9, 'Illmatic', 'Nas', 24.99, 1994, 2, 'Illmatic.jpg'),
(10, 'Take Five', 'Dave Brubeck', 22.00, 1959, 4, 'Take_five.jpg'),
(11, 'DAMN.', 'Kendrick Lamar', 26.99, 2017, 2, 'DAMN.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;