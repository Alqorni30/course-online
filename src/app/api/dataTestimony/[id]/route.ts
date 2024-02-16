import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { dataTesti } from "@prisma/client";
const prisma = new PrismaClient();

export const PATCH = async (req: Request, {params}: {params: {id: string}}) => {
    const body: dataTesti = await req.json() 
    const dataTesti = await prisma.dataTesti.update({
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
    const dataTesti = await prisma.dataTesti.delete({
        where: {
            id: Number(params.id),
        }
    });
    return NextResponse.json(dataTesti, {
        status: 200
    });
}