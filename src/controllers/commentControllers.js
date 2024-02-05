import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
const conn = initModels(sequelize);

const getCommentListByImage = async (req, res) => {
    try {
        let {imageId} = req.params;
        let data = await conn.binh_luan.findAll({
            where: {
                hinh_id: imageId
            }
        })
        res.send(data);
    } catch (error) {
        res.send(`BE error: ${error}`)
    }
}

const createComment = async (req, res) => {
    try {
        let {userId} = req.params;
        let {hinh_id, noi_dung} = req.body;
        let data = await conn.binh_luan.create({
            nguoi_dung_id: userId,
            hinh_id,
            noi_dung,
        })
        res.send(data);
    } catch (error) {
        res.send(`BE error: ${error}`)
    }
}

const updateComment = async (req, res) => {
    try {
        let {commentId} = req.params;
        let {noi_dung} = req.body;
        let data = await conn.binh_luan.update({
            noi_dung,
        }, {
            where: {
                binh_luan_id: commentId
            }
        })
        res.send(data);
    } catch (error) {
        res.send(`BE error: ${error}`)
    }
}

export {
    getCommentListByImage,
    createComment,
}
