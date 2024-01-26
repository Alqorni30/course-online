import {NextResponse} from "next/server"
import { db } from "@/libs/db"
import {hash} from "bcrypt"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const {email, username, password} = body

        // check if email already exists
        const exitingUserByEmail = await db.user.findUnique({
            where: {
                email: email
            }
        });
        if (exitingUserByEmail) {
            return NextResponse.json({
                user: null, message: "user with this email already exists"
            }, {status: 409})
        }

        // check if username already exists
        const exitingUserByUsername = await db.user.findUnique({
            where: {
                username: username
            }
        });
        if (exitingUserByUsername) {
            return NextResponse.json({
                user: null, message: "user with this username already exists"
            }, {status: 409})
        }

        const hashPassword = await hash(password, 10)
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashPassword
            }
        })

        const {password: newUserPassword, ...rest} = newUser


        return NextResponse.json({
            user: rest,
            message: "user created successfully"
        }, {status: 201})
    }
    catch (error) {
        return NextResponse.json({
            user: null, message: "something went wrong"
        }, {status: 500})
    }
}