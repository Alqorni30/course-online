
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Inisialisasi Prisma Client
const prisma = new PrismaClient();
// Handler untuk endpoint API
export const GET = async function(req: NextRequest, res: NextResponse) {
    try {
      // Ambil data testimonial dari database
      const testimonials = await prisma.dataTesti.findMany({
        select: {
          id: true,
          image: true,
          nama: true,
          job: true,
          testi: true,
        },
      });
      // Kirim data testimonial sebagai respons
      return NextResponse.json(testimonials, {status: 200});

    } catch (error) {
      console.error('Error fetching testimonials: ', error);
      return NextResponse.json({ error: 'Error fetching testimonials' }, { status: 500 });
    }
}
