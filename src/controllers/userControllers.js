import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import bcrypt from 'bcrypt'; // thư viện mã hóa password

const conn = initModels(sequelize);

// const uploadSingleAvatar = (req, res) => {
//     res.send(req.file);
// }

// const uploadMultipleAvatar = (req, res) =>{
//     res.send(req.files)
// }

const getUserDetail = async (req, res) => {
    try{
        let {userId} = req.params;
        let data = await conn.nguoi_dung.findOne({
            where: {
                nguoi_dung_id: userId
            }
        })
        res.send(data);
    }catch(error) {
        res.send(`BE error: ${error}`)
    }
};

const updateUserDetail = async (req, res) => {
    try{
        let {userId} = req.params;
        let {email, mat_khau, ho_ten, tuoi, anh_dai_dien} = req.body;
        let encodePassword = bcrypt.hashSync(mat_khau, 10);
        let data = await conn.nguoi_dung.update({
            email,
            mat_khau: encodePassword,
            ho_ten,
            tuoi,
            anh_dai_dien,
        }, {
            where: {
                nguoi_dung_id: userId
            }
        })
        res.send(data);
    }catch(error) {
        res.send(`BE error: ${error}`)
    }
}

export {
    // uploadSingleAvatar,
    // uploadMultipleAvatar,
    getUserDetail,
    updateUserDetail
}