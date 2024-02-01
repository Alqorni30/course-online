import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { dataKelas } from "@prisma/client";
const prisma = new PrismaClient();

export const PATCH = async (req: Request, {params}: {params: {id: string}}) => {
    const body: dataKelas = await req.json() 
    const dataKelas = await prisma.dataKelas.update({
        where: {
            id: Number(params.id),
        },
        data:{
            nama: body.nama,
            hargaAsli: body.hargaAsli,
            hargaDisc: body.hargaDisc,
            discpersen: body.discpersen
        }
    });
    return NextResponse.json(dataKelas, {
        status: 200
    });
}
export const DELETE = async (req: Request, {params}: {params: {id: string}}) => {
    const dataKelas = await prisma.dataKelas.delete({
        where: {
            id: Number(params.id),
        }
    });
    return NextResponse.json(dataKelas, {
        status: 200
    });
}