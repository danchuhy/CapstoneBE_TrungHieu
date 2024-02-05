-- -------------------------------------------------------------
-- TablePlus 5.8.2(528)
--
-- https://tableplus.com/
--
-- Database: Capstone_BE_v01
-- Generation Time: 2024-02-05 11:30:09.2850
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `binh_luan` (
  `binh_luan_id` int NOT NULL AUTO_INCREMENT,
  `nguoi_dung_id` int DEFAULT NULL,
  `hinh_id` int DEFAULT NULL,
  `ngay_binh_luan` date DEFAULT NULL,
  `noi_dung` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`binh_luan_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `binh_luan_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`),
  CONSTRAINT `binh_luan_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `hinh_anh` (
  `hinh_id` int NOT NULL AUTO_INCREMENT,
  `ten_hinh` varchar(255) DEFAULT NULL,
  `duong_dan` varchar(255) DEFAULT NULL,
  `mo_ta` varchar(1000) DEFAULT NULL,
  `nguoi_dung_id` int DEFAULT NULL,
  PRIMARY KEY (`hinh_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  CONSTRAINT `hinh_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `luu_anh` (
  `luu_anh_id` int NOT NULL AUTO_INCREMENT,
  `hinh_id` int DEFAULT NULL,
  `nguoi_dung_id` int DEFAULT NULL,
  `ngay_luu` date DEFAULT NULL,
  PRIMARY KEY (`luu_anh_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `luu_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`),
  CONSTRAINT `luu_anh_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `nguoi_dung` (
  `nguoi_dung_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `mat_khau` varchar(1000) DEFAULT NULL,
  `ho_ten` varchar(50) DEFAULT NULL,
  `tuoi` int DEFAULT NULL,
  `anh_dai_dien` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(3, 3, 2, '2024-01-18', 'Bình luận 1 cho hình 2'),
(4, 4, 2, '2024-01-18', 'Bình luận 2 cho hình 2'),
(5, 5, 3, '2024-01-18', 'Bình luận 1 cho hình 3'),
(6, 1, 4, '2024-01-18', 'Bình luận 1 cho hình 4'),
(7, 2, 4, '2024-01-18', 'Bình luận 2 cho hình 4'),
(8, 3, 5, '2024-01-18', 'Bình luận 1 cho hình 5'),
(9, 4, 5, '2024-01-18', 'Bình luận 2 cho hình 5'),
(10, 5, 6, '2024-01-18', 'Bình luận 1 cho hình 6'),
(11, 1, 7, '2024-01-18', 'Bình luận 1 cho hình 7'),
(12, 2, 7, '2024-01-18', 'Bình luận 2 cho hình 7'),
(13, 3, 7, '2024-01-18', 'Bình luận 3 cho hình 7'),
(14, 6, 3, NULL, 'Cool');

INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(2, 'Hình 2', 'images/hinh2.jpg', 'Mô tả hình 2', 2),
(3, 'Hình 3', 'images/hinh3.jpg', 'Mô tả hình 3', 3),
(4, 'Hình 4', 'images/hinh4.jpg', 'Mô tả hình 4', 4),
(5, 'Hình 5', 'images/hinh5.jpg', 'Mô tả hình 5', 5),
(6, 'Hình 6', 'images/hinh6.jpg', 'Mô tả hình 6', 1),
(7, 'Hình 7', 'images/hinh7.jpg', 'Mô tả hình 7', 2);

INSERT INTO `luu_anh` (`luu_anh_id`, `hinh_id`, `nguoi_dung_id`, `ngay_luu`) VALUES
(2, 2, 3, '2024-01-18'),
(3, 3, 4, '2024-01-18'),
(4, 4, 5, '2024-01-18'),
(5, 5, 6, '2024-01-18'),
(6, 6, 2, '2024-01-18'),
(7, 7, 3, '2024-01-18'),
(9, 2, 5, '2024-01-18'),
(10, 3, 1, '2024-01-18'),
(11, 4, 2, '2024-01-18'),
(12, 5, 3, '2024-01-18'),
(13, 6, 4, '2024-01-18'),
(14, 7, 5, '2024-01-18'),
(16, 2, 6, '2024-01-18'),
(17, 3, 3, '2024-01-18'),
(18, 4, 4, '2024-01-18'),
(19, 5, 5, '2024-01-18'),
(20, 6, 1, '2024-01-18');

INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(1, 'user1@example.com', 'password1', 'Người Dùng 1', 25, 'avatar1.jpg'),
(2, 'user2@example.com', 'password2', 'Người Dùng 2', 30, 'avatar2.jpg'),
(3, 'user3@example.com', 'password3', 'Người Dùng 3', 22, 'avatar3.jpg'),
(4, 'user4@example.com', 'password4', 'Người Dùng 4', 28, 'avatar4.jpg'),
(5, 'user5@example.com', 'password5', 'Người Dùng 5', 35, 'avatar5.jpg'),
(6, 'hieu.dt.04061@gmail.com', '$2b$10$ywry4jjTHwrCmBV79v13de8/cbPlMhrQuS5pg5Niyz1O5CHPPfMDe', 'Dang Trung Hieu 1', 20, 'avatar_011.jpq');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;