import { Request, Response } from "express";
import prisma from "../../prisma/prismaClient";

export const createUser = async(req:Request,res:Response) =>{
    try{
        const{name,age,email,password,profile}=req.body;

        const user = await prisma.user.create({
            data:{name,age,email,password,profile},
        })

        res.status(200).json(user)
    }
    catch(e){
        res.status(400).json({error:e})
    }
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};
