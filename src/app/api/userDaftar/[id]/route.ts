import { NextResponse } from "next/server";
import type { UserDaftar } from "@prisma/client";
import db from "../../../../libs/db";

export const PATCH = async (req: Request, {params}: {params: {id: string}}) => {
    const body: UserDaftar = await req.json() 
    const userDaftar = await db.userDaftar.update({
        where: {
            id: Number(params.id),
        },
        data:{
            username: body.username,
            email: body.email,
            noWa: body.noWa,
            kategoriId: body.kategoriId,
            paketId: body.paketId,
        }
    });
    return NextResponse.json(userDaftar, {
        status: 200
    });
}
export const DELETE = async (req: Request, {params}: {params: {id: string}}) => {
    const userDaftar = await db.userDaftar.delete({
        where: {
            id: Number(params.id),
        }
    });
    return NextResponse.json(userDaftar, {
        status: 200
    });
}