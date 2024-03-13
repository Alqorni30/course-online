import { NextResponse } from "next/server";
import type { dataInfoLomba } from "@prisma/client";
import db from "../../../libs/db";

export const POST = async (req: Request) => {
    const body: dataInfoLomba = await req.json();
    const dataInfoLomba = await db.dataInfoLomba.create({
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
    return NextResponse.json(dataInfoLomba, {status: 201});
}

