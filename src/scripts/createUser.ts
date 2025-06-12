import prisma from '../Db/prisma';

async function main() {
    const user = await prisma.user.create({
        data :{
            name:"Ganesh",
            age:25,
            email:"ganesh@gmail.com",
            password:'',
            profile:'',
        },
    });

    console.log(user,"user created");
}

main()
  .catch((e)=>{
    console.log("error:",e)
  })
  .finally(()=>{
    prisma.$disconnect();
  })