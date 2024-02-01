import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { dataKelas } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const body: dataKelas = await req.json();
    const dataKelas = await prisma.dataKelas.create({
        data:{
            nama : body.nama,
            hargaAsli : body.hargaAsli,
            hargaDisc : body.hargaDisc,
            discpersen : body.discpersen
        }
    });
    return NextResponse.json(dataKelas, {status: 201});
}

