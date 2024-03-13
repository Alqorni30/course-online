import { NextResponse } from "next/server";
import type { dataKelas } from "@prisma/client";
import db from "../../../../libs/db";

export const PATCH = async (req: Request, {params}: {params: {id: string}}) => {
    const body: dataKelas = await req.json() 
    const dataKelas = await db.dataKelas.update({
        where: {
            id: Number(params.id),
        },
        data:{
            nama: body.nama,
            tanggal : body.tanggal,
            jamKelas : body.jamKelas,
            hargaAsliBasic : body.hargaAsliBasic,
            hargaAsliPremium : body.hargaAsliPremium,
            hargaDiscBasic : body.hargaDiscBasic,
            hargaDiscPremium : body.hargaDiscPremium,
            discpersenBasic : body.discpersenBasic,
            discpersenPremium : body.discpersenPremium
        }
    });
    return NextResponse.json(dataKelas, {
        status: 200
    });
}
export const DELETE = async (req: Request, {params}: {params: {id: string}}) => {
    const dataKelas = await db.dataKelas.delete({
        where: {
            id: Number(params.id),
        }
    });
    return NextResponse.json(dataKelas, {
        status: 200
    });
}