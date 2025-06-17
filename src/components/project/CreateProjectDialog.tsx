"use client"
import { toast } from "sonner"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function CreateProjectDialog() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [ loading, setLoading ] = useState(false) // Let me think about this one

    const handleCreate = () => {
        toast.success("Project created successfully!")
        // TODO: Send data to backend
        console.log({ name, description })
        setName("")
        setDescription("")
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
                    <Input placeholder="Project name" value={name} onChange={e => setName(e.target.value)} />
                    <Input placeholder="Short description" value={description} onChange={e => setDescription(e.target.value)} />
                    <Button onClick={handleCreate} className="w-full" disabled={loading}>{loading ? "Creating..." : "Create"}</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}