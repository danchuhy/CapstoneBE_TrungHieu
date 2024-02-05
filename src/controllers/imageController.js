import sequelize from "../models/connect.js";
import { Op } from "sequelize";
 
import initModels from "../models/init-models.js";
const conn = initModels(sequelize);


const getImageList = async (req, res) => {
    try {
        let data = await conn.hinh_anh.findAll();
        res.send(data);
    } catch (error) {
        res.send(`BE error: ${error}`)
    }
}

const getImageListByFilter = async (req, res) => {
    try {
        const { ten_hinh } = req.query;
        let data = await conn.hinh_anh.findAll({
            where: {
                ten_hinh: {
                    [Op.like]: `%${ten_hinh}%`
                }
            }
        });
        res.send(data);
    } catch (error) {
        res.send(`BE error: ${error}`);
    }
}

const getImageDetail = async (req, res) => {
    try {
        let {imageId} = req.params;
        let data = await conn.hinh_anh.findOne({
            where: {
                hinh_id: imageId
            }
        })
        res.send(data);
    } catch (error) {
        res.send(`BE error: ${error}`)
    }
}

const getImageListCreatedByUser = async (req, res) => {
    try {
        let {userId} = req.params;
        let data = await conn.hinh_anh.findAll({
            where: {
                nguoi_dung_id: userId
            }
        })
        res.send(data);
    } catch (error) {
        res.send(`BE error: ${error}`)
    }
}

const createImage = async (req, res) => {
    try {
        let {nguoi_dung_id, ten_hinh, mo_ta, duong_dan} = req.body;
        let data = await conn.hinh_anh.create({
            nguoi_dung_id,
            ten_hinh,
            mo_ta,
            duong_dan,
        })
        res.send(data);
    } catch (error) {
        res.send(`BE error: ${error}`)
    }
}


const deleteImage = async (req, res) => {
    try {
        let {imageId} = req.params;
        let {nguoi_dung_id} = req.body;

        // Check if there are any comments for the image
        let comments = await conn.binh_luan.findAll({
            where: {
                hinh_id: imageId,
            }
        });

        // Check if there are any saved image for the image
        let savedImages = await conn.luu_anh.findAll({
            where: {
                hinh_id: imageId,
            }
        });

        // If there are comments, delete them
        if (comments.length > 0) {
            await conn.binh_luan.destroy({
                where: {
                    hinh_id: imageId,
                }
            });
        }

         // If there are saved image, delete them
         if (savedImages.length > 0) {
            await conn.luu_anh.destroy({
                where: {
                    hinh_id: imageId,
                }
            });
        }

        // Then delete the image
        let data = await conn.hinh_anh.destroy({
            where: {
                hinh_id: imageId,
            }
        })

        res.send(data);
    } catch (error) {
        res.send(`BE error: ${error}`)
    }
}


export { 
    getImageList, 
    getImageListByFilter,
    getImageDetail,
    getImageListCreatedByUser, 
    deleteImage,
    createImage,
}