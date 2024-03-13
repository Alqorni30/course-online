
import { NextResponse } from "next/server";
import type { dataInfoLomba } from "@prisma/client";
import db from "../../../../libs/db";

export const PATCH = async (req: Request, {params}: {params: {id: string}}) => {
    const body: dataInfoLomba = await req.json() 
    const dataInfoLomba = await db.dataInfoLomba.update({
        where: {
            id: Number(params.id),
        },
        data:{
            image: body.image,
            kategori: body.kategori,
            nama: body.nama,
            desc: body.desc,
            deadline: body.deadline,
            totalHadiah: body.totalHadiah,
            link1: body.link1,
            link2: body.link2
        }
    });
    return NextResponse.json(dataInfoLomba, {
        status: 200
    });
}
export const DELETE = async (req: Request, {params}: {params: {id: string}}) => {
    const dataInfoLomba = await db.dataInfoLomba.delete({
        where: {
            id: Number(params.id),
        }
    });
    return NextResponse.json(dataInfoLomba, {
        status: 200
    });
}