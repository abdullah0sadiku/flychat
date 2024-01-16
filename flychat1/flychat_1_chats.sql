-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: flychat_1
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chats`
--

DROP TABLE IF EXISTS `chats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chats` (
  `chat_id` int NOT NULL AUTO_INCREMENT,
  `sender_id` int DEFAULT NULL,
  `receiver_id` int DEFAULT NULL,
  `message` text,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`chat_id`),
  KEY `chat_id` (`chat_id`),
  KEY `sender_id` (`sender_id`),
  KEY `receiver_id` (`receiver_id`),
  CONSTRAINT `chats_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `chats_ibfk_4` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chats`
--

LOCK TABLES `chats` WRITE;
/*!40000 ALTER TABLE `chats` DISABLE KEYS */;
INSERT INTO `chats` VALUES (64,27,5,'Ku je be dullo','2024-01-13 23:11:48'),(65,27,5,'hello','2024-01-13 23:13:26'),(66,27,6,'ssss','2024-01-13 23:13:31'),(67,27,15,'vejsi','2024-01-13 23:13:38'),(68,5,27,'yo yo','2024-01-13 23:19:21'),(69,27,5,'qe me dullen','2024-01-13 23:20:42'),(70,5,27,'qka po bon','2024-01-13 23:22:16'),(71,27,5,'sen tybe ','2024-01-13 23:22:33'),(72,5,27,'lllllllllllll','2024-01-13 23:27:40'),(73,27,5,'a','2024-01-13 23:43:44'),(74,27,5,'a','2024-01-13 23:43:45'),(75,27,5,'a','2024-01-13 23:43:47'),(76,27,5,'a','2024-01-13 23:43:49'),(77,27,5,'a','2024-01-13 23:47:06'),(78,29,5,'Selam alejkum abdullah jam liridoni','2024-01-14 00:06:24'),(79,5,29,'oho alejkum selam liridon a je mir','2024-01-14 00:07:00'),(80,29,5,'mir elhamdulilah ','2024-01-14 00:07:32'),(81,5,27,'qka ki be','2024-01-14 00:12:24'),(82,5,15,'selam uvejs','2024-01-14 00:30:47'),(83,5,29,'Hallet dertet ','2024-01-14 20:13:33'),(84,5,27,'kkkkkkkkkkkkkk','2024-01-14 22:15:58'),(85,5,27,'ku je majmun','2024-01-14 22:17:08');
/*!40000 ALTER TABLE `chats` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-15 18:02:53
