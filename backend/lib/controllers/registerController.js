// const {validationResult} = require('express-validator');
// const bcrypt = require('bcryptjs');
// const conn = require('../dbConnection').promise();

// exports.register = async(req,res,next) => {
//     const errors = validationResult(req);

//     if(!errors.isEmpty()){
//         return res.status(422).json({ errors: errors.array() });
//     }

//     try{

//         const [row] = await conn.execute(
//             "SELECT `email` FROM `users` WHERE `email`=?",
//             [req.body.email]
//           );

//         if (row.length > 0) {
//             return res.status(201).json({
//                 message: "The E-mail already in use",
//             });
//         }

//         const hashPass = await bcrypt.hash(req.body.password, 12);

//         const [rows] = await conn.execute('INSERT INTO `users`(`name`,`email`,`password`,`first_name`,`last_name`,`phone_number`,`state`,`district`,`pincode`) VALUES(?,?,?,?,?,?,?,?,?)',[
//             req.body.name,
//             req.body.email,
//             hashPass,
//             req.body.first_name,
//             req.body.last_name,
//             req.body.phone_number,
//             req.body.state,
//             req.body.district,
//             req.body.pincode,
            
//         ]);

//         if (rows.affectedRows === 1) {
//             return res.status(201).json({
//                 message: "The user has been successfully inserted.",
//             });
//         }
        
//     }catch(err){
//         next(err);
//     }
// }