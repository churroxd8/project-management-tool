"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const root = document.documentElement
        if (dark) {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }
    }, [dark])

    return (
        <Button variant="ghost" size="icon" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5" />}
        </Button>
    )
}