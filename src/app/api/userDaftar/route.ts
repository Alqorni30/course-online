import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { UserDaftar } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const body: UserDaftar = await req.json();
    const userDaftar = await prisma.userDaftar.create({
        data:{
            username: body.username,
            email: body.email,
            noWa: body.noWa,
            kategoriId: body.kategoriId,
            paketId: body.paketId,
            image: body.image,
        }
    });
    return NextResponse.json(userDaftar, {status: 201});
}

