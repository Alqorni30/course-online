import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextRequest, res: NextResponse) {
  if (req.method !== 'POST') {
    return NextResponse.json({status: 405, message: 'Method Not Allowed'});

  }
  const { email, name, image } = await req.json();

  try {
    // Periksa apakah pengguna sudah terdaftar berdasarkan email
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email as string,
      },
    });

    if (existingUser) {
    return NextResponse.json({status: 400, message: 'Email sudah terdaftar'});

    }

    // Simpan pengguna ke database
    const newUser = await prisma.user.create({
      data: {
        email: email as string,
        name: name as string,
        image: image as string,
      },
    });
    return NextResponse.json({status: 201, message: 'Pendaftaran berhasil', user: newUser });
    
  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json({status: 500,  message: 'Terjadi kesalahan saat mendaftar'});

  } finally {
    await prisma.$disconnect();
  }
}
