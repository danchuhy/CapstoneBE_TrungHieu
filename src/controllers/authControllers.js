import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import bcrypt from 'bcrypt'; // thư viện mã hóa password
import { createToken } from "../config/jwt.js"

const conn = initModels(sequelize);

const login = async (req, res)=>{
    try {
        let {email, mat_khau} = req.body;

        let data = await conn.nguoi_dung.findOne({
            where: {
                email: email
            }
        })

        if(data) {
            let checkPassword = bcrypt.compareSync(mat_khau, data.mat_khau)
            if(checkPassword){
                let payload = {
                    nguoi_dung_id: data.nguoi_dung_id
                }
                let token = createToken(payload);
                res.status(200).send(token);
            } else {
                res.status(400).send("Password incorrect!");
            }
        } else {
            res.status(404).send("login fail");
        }

    } catch(error) {
        res.send(`Error: ${error}`);
    }
}

const signUp = async (req, res) => {
    try {
        let {ho_ten, email, mat_khau, tuoi, anh_dai_dien} = req.body;
        // kiểm tra user đã tồn tại trong DB
        let data = await conn.nguoi_dung.findOne({
            where: {
                email: email
            }
        })
    
        // trường hợp 1: nếu có -> báo lỗi user đã tồn tại
        if(data) {
            res.status(400).send("User is existed!")
        } else {
            // mã hóa password trước khi create user
            // hashSync cos 2 params
            // param 1: password nhận từ request
            // param 2: số lần mã hóa password
            // lưu ý: 1 khi mà đã mã hóa password -> ko thể giải mã
            // phải dùng function có sẵn của bcrypt để compare
            let encodePassword = bcrypt.hashSync(mat_khau, 10);
            let newUser = {
                ho_ten,
                email, 
                mat_khau: encodePassword,
                tuoi,
                anh_dai_dien
            }

            await conn.nguoi_dung.create(newUser);
            res.status(201).send("User is created");
        }
          
        // trường hợp 2: nếu chưa có -> tạo user
        res.status(201).send("Sign up successfull");
    }catch (error) {
        res.status(500).send(`Error: ${error}`);
    }
}

export {
    login,
    signUp,
}