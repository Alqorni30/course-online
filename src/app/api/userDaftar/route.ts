import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { UserDaftar } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const body: UserDaftar = await req.json();
    const UserDaftar = await prisma.userDaftar.create({
        data:{
            username: body.username,
            email: body.email,
            nomorWa: body.nomorWa,
            kategoriId: body.kategoriId
        }
    });
    return NextResponse.json(UserDaftar, {status: 201});
}

