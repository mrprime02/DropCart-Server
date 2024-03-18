const jwt = require('jsonwebtoken')

const jwtMiddleware  = (req,res,next)=>{
    try{
        const token = req.headers['authorization'].split(" ")[1]
        if(token){
            const jwtResponse = jwt.verify(token,process.env.JWT_SECRET)
            console.log(jwtResponse);
            req.payload = jwtResponse.userId
            next()
        }else{
            res.status(406).json("Token is not available...")
        }
    }catch(err){
        console.log(err);
        res.status(401).json("Authorization failed!!! Please Login...")
    }
}

module.exports = jwtMiddleware