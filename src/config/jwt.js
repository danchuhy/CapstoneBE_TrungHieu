import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const createToken = (data) =>{
    return jwt.sign(data, "NODE38", {expiresIn: "1y"})
}

const checkToken = (token) => {
    return jwt.verify(token, "NODE38", (err, decoded) => {
        if(err) { 
            return {
                statusCode: 401,
                message: "Invalid token"
            }
        }
        // giải mã thành công
        return {
            statusCode: 200,
            data: decoded
        }
    })
}

const isLogin = (req, res, next) => {
    let { token } = req.headers;
    let { userId } = req.params;
    let { nguoi_dung_id } = req.body;

    if (token) {
        let verifyToken = checkToken(token);

        if (verifyToken.statusCode == 401) {
            res.status(401).send("Invalid token");
            return;
        }

        if (verifyToken.data.nguoi_dung_id !== +userId && verifyToken.data.nguoi_dung_id !== +nguoi_dung_id) {
            res.status(401).send("Unauthorized #001");
            return;
        }

        next(); // bypass
    } else {
        res.status(401).send("Unauthorized #002");
        return;
    }
}


export {
    createToken,
    checkToken,
    isLogin,
}
