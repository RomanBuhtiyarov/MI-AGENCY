"use client"

import {useSession} from "next-auth/react";

export default async function getCurrentGoogleUser(){
    try {
        const session = await useSession();
        
        return session;
        
    }catch (e)  {
        return null;
    }
}