import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, description } = body

        if (!name || typeof name !== "string") {
            return NextResponse.json({ success: false, error: "Name is required" }, { status: 400 })
        }

        console.log("📦 Creating project:", { name, description })

        // Simulate returning the created project
        return NextResponse.json({
            success: true,
            project: {
                id: Date.now(), // placeholder ID
                name,
                description: description ?? "",
            },
        })
    } catch (error) {
        console.error("❌ Failed to create project:", error)
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
    }
}