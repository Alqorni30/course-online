import { NextResponse } from "next/server";
import type { dataKelas } from "@prisma/client";
import db from "../../../libs/db";
export const POST = async (req: Request) => {
    const body: dataKelas = await req.json();
    const dataKelas = await db.dataKelas.create({
        data:{
            nama : body.nama,
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
    return NextResponse.json(dataKelas, {status: 201});
}

