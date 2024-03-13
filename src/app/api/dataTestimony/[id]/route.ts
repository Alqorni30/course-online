import { NextResponse } from "next/server";
import type { dataTesti } from "@prisma/client";
import db from "../../../../libs/db";
export const PATCH = async (req: Request, {params}: {params: {id: string}}) => {
    const body: dataTesti = await req.json() 
    const dataTesti = await db.dataTesti.update({
        where: {
            id: Number(params.id),
        },
        data:{
            image: body.image,
            nama: body.nama,
            job: body.job,
            testi: body.testi
        }
    });
    return NextResponse.json(dataTesti, {
        status: 200
    });
}
export const DELETE = async (req: Request, {params}: {params: {id: string}}) => {
    const dataTesti = await db.dataTesti.delete({
        where: {
            id: Number(params.id),
        }
    });
    return NextResponse.json(dataTesti, {
        status: 200
    });
}