#  npm i jsonwebtoken bcryptjs multer
## npm install --save-dev @types/bcryptjs @types/jsonwebtoken @types/multer

1. add multer middleware 
2. add bcrypt function to convert the plain text password into hashed which will be stored in database in the format of hash.
3. add auth.controller.ts - business logic of registen and login . 
(  *REGISTER* - 1. get & check formdata from req.body. 2.check wheather user already exist. 3.format password in hash format. 4. write function to create user in db )
4. 
