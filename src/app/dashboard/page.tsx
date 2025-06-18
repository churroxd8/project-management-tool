import { ProjectCard } from "@/components/project/ProjectCard"
import { CreateProjectDialog } from "@/components/project/CreateProjectDialog"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function DashboardPage() {
  const mockProjects: { name: string; description?: string }[] = [
    { name: "Website Redesign", description: "Client-facing landing page" },
    { name: "Inventory App", description: "Track warehouse stock" },
  ]

  return (
    <main className="p-6 space-y-6 min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      {/* Top Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Projects</h1>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CreateProjectDialog />
        </div>
      </div>

      {/* Project List */}
      {mockProjects.length === 0 ? (
        <div className="text-center text-muted-foreground py-10 border rounded-md">
          You have no projects yet. Click on "Create New Project" to get started.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {mockProjects.map((proj, i) => (
            <ProjectCard key={i} name={proj.name} description={proj.description} />
          ))}
        </div>
      )}
    </main>
  )
}