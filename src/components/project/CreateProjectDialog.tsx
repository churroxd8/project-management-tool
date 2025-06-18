"use client"

import { toast } from "sonner"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function CreateProjectDialog() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const handleCreate = async () => {
        if (!name.trim()) {
            toast.error("Project name is required")
            return
        }

        setLoading(true)

        try {
            const res = await fetch("/api/projects", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, description }),
            })

            if (!res.ok) throw new Error("Failed to create project")
            
            const data = await res.json()
            toast.success("Project created!")

            // Reset form
            setName("")
            setDescription("")
        } catch (error) {
            console.error(error)
            toast.error("Something went wrong.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create New Project</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Project</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <Input placeholder="Project name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <Input placeholder="Short description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <Button onClick={handleCreate} className="w-full" disabled={loading}>{loading ? "Creating..." : "Create"}</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}