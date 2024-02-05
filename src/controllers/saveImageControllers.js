import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
const conn = initModels(sequelize);

const isSavedImage = async (req, res) => {
    try {
        let {imageId} = req.params;
        let {nguoi_dung_id} = req.body;
        let data = await conn.luu_anh.findOne({
            where: {
                hinh_id: imageId,
                nguoi_dung_id,
            }
        })
        if(data) {
            res.send(true);
        } else {
            res.send(false);
        }
    } catch (error) {
        res.send(`BE error: ${error}`)
    }
}

const getSavedImageListByUser = async (req, res) => {
    try {
        let {userId} = req.params;
        let data = await conn.luu_anh.findAll({
            where: {
                nguoi_dung_id: userId,
            }
        })
        res.send(data);
    } catch (error) {
        res.send(`BE error: ${error}`)
    }
}

export {
    isSavedImage,
    getSavedImageListByUser,
}