import client from "@/_libs/prisma/client";
import {NextResponse} from "next/server";

export async function POST(req){
    const user = client.user;
    
    const body = await req.json();
    
    const {id, image} = body;
    
    try {
        
        const updateImageProfile = await user.update({
            where: {
                id: id,
            },
            data: {
                avatar: image,
            },
        });

        return NextResponse.json(
            {
                type: "success",
                code: 200,
                message: "You have successfully changed subscription for client\n",
                data: updateImageProfile,
            },
        );
        
    }catch (err){
        return new NextResponse.json({
            type: "error",
            code: 500,
            message: err.message
        })
    }
    
}