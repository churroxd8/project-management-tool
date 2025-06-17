import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
    name: string
    description?: string
}

export function ProjectCard({ name, description }: ProjectCardProps) {
    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-sm text-muted-foreground mt-1">
                    {description || "No description"}
                </p>
            </CardContent>
        </Card>
    )
}