import { Request, Response } from "express";
import { hashPassword } from "../scripts/hash";
import prisma from '../Db/prisma';
import bcrypt from "bcryptjs";
import { generateToken } from "../scripts/jwt";
import { Role } from "../../generated/prisma";

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, } = req.body;
    const password = String(req.body.password);
     const age = req.body.age ? Number(req.body.age) : undefined
    const profile = req.file?.path;

    if (!name || !email || !password || !profile) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    const hashed = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        age: Number(age),
        password: hashed,
        profile,
      },
    });


    res.status(201).json({
      message: "User registered successfully",
      user: { id: user.id, email: user.email, name: user.name, profile: user.profile },
    
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const email = req.body.email;
    console.log(req.body,"data")
    const password = String(req.body.password);

    if (!email || !password) {
      res.status(400).json({ error: "Email and password required" });
      return;
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.password) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    const token = generateToken({userId:user.id,role:user.role});

    res.json({
      message: "Login successful",
      user: { id: user.id, email: user.email, name: user.name, profile: user.profile },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const resetPasswordWithOtp =async (req: Request, res: Response):Promise<void> =>{
  const {email,password}= req.body;
  if(!email || !password){
    res.status(400).json({ error: 'Email and newpassword are required.' });
     return
  }
  try{
       const user=await prisma.user.findUnique({where:{email}});
       if(!user){res.status(400).json({message:"user not found "})}

       const hashedPassword=await hashPassword(password);

       await prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
      },
    }) 
    res.status(200).json({ message: "Password reset successfully" });

  } catch(e){
     res.status(500).json({ error: 'Server error. Please try again later.' });
     return
  }
}

export const changePassword = async (req: Request, res: Response):Promise<void> => {
  const { email, oldPassword, newPassword } = req.body;
  console.log(req.body)

  if (!email || !oldPassword || !newPassword) {
     res.status(400).json({ error: 'Email, old password, and new password are required.' });
     return
  }

  try {
    // 1. Find the user
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      res.status(404).json({ error: 'User not found.' });
       return
    }

    // 2. Compare old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
     res.status(401).json({ error: 'Old password is incorrect.' });
      return 
    }

    // 3. Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // 4. Update password
    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

     res.status(200).json({ message: 'Password updated successfully.' });
     return
  } catch (err) {
    console.error('Reset password error:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
     return
  }
};
