import { NextResponse } from "next/server";
import { dataTesti } from "@prisma/client";
import db from "../../../libs/db";

export const POST = async (req: Request) => {
    const body: dataTesti = await req.json();
    const dataTesti = await db.dataTesti.create({
        data:{
            image: body.image,
            nama: body.nama,
            job: body.job,
            testi: body.testi
        }
    });
    return NextResponse.json(dataTesti, {status: 201});
}

