-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Dic 06, 2024 alle 10:52
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
-- Database: `billo_vinils_database`
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
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `vinyls`
--

INSERT INTO `vinyls` (`id_vinyl`, `vinyl_name`, `artist`, `price`, `year`, `category_id`) VALUES
(1, 'The Dark Side of the Moon', 'Pink Floyd', 35.50, 1973, 1),
(2, 'To Pimp a Butterfly', 'Kendrick Lamar', 25.99, 2015, 2),
(3, 'A Night at the Opera', 'Queen', 30.00, 1975, 1),
(4, 'DAMN.', 'Kendrick Lamar', 26.99, 2017, 2),
(5, 'Kind of Blue', 'Miles Davis', 28.50, 1959, 4),
(6, 'Ready to Die', 'The Notorious B.I.G.', 29.50, 1994, 2),
(7, 'Abbey Road', 'The Beatles', 29.99, 1969, 1),
(8, 'The College Dropout', 'Kanye West', 27.50, 2004, 3),
(9, 'Illmatic', 'Nas', 24.99, 1994, 2),
(10, 'Take Five', 'Dave Brubeck', 22.00, 1959, 4);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_category`);

--
-- Indici per le tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indici per le tabelle `vinyls`
--
ALTER TABLE `vinyls`
  ADD PRIMARY KEY (`id_vinyl`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `categories`
--
ALTER TABLE `categories`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `vinyls`
--
ALTER TABLE `vinyls`
  MODIFY `id_vinyl` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `vinyls`
--
ALTER TABLE `vinyls`
  ADD CONSTRAINT `vinyls_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id_category`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
