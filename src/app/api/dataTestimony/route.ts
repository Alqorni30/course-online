import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { dataTesti } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const body: dataTesti = await req.json();
    const dataTesti = await prisma.dataTesti.create({
        data:{
            image: body.image,
            nama: body.nama,
            job: body.job,
            testi: body.testi

        }
    });
    return NextResponse.json(dataTesti, {status: 201});
}

