import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, description } = body

        if (!name || typeof name !== "string") {
            return NextResponse.json({ success: false, error: "Name is required" }, { status: 400 })
        }

        const project = await prisma.project.create({
            data: {
                name,
                description,
            },
        })

        return NextResponse.json({ success: true, project })
    } catch (error) {
        console.error("❌ Error creating project:", error)
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
    }
}