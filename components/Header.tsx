import { cn } from "@/lib/utils";
import { MousePointer } from "lucide-react";
import { useTheme } from "@/contexts/theme-context"

export default function Header() {
    const { isCoffee, isCozy } = useTheme()

    return (
        <header className="container mx-auto pt-12 pb-6 px-4">
            <div className="flex flex-col items-center text-center space-y-4">
            <div
                className={cn(
                "flex items-center justify-center w-16 h-16 rounded-full mb-2 backdrop-blur-sm",
                isCoffee ? "bg-amber-500/20" : isCozy ? "bg-teal-500/20" : "bg-primary/20",
                )}
            >
                <MousePointer className={cn("h-8 w-8", isCoffee ? "text-amber-400" : isCozy ? "text-teal-400" : "text-primary")} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">mousefulness</h1>
            <p className="text-xl text-green-500 max-w-2xl">
                /* /ˈmaʊsfəlnəs/ <span className="italic">noun</span> - The art of input flow state */<br/> 
                <span className="text-gray-300">&lt;<span className="text-blue-500">input</span>&gt;</span>
                <span className="text-white"> flow </span>
                <span className="text-gray-300">&lt;<span className="text-blue-500">input</span>&gt;</span>
            </p>
            </div>
        </header>
    )
}

