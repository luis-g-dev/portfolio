import { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contexts/theme-context"

interface ProjectCardProps {
  icon: ReactNode
  title: string
  description: string
  children: ReactNode
  linkHref: string
  className?: string
}

export default function ProjectCard({
  icon,
  title,
  description,
  children,
  linkHref,
  className,
}: ProjectCardProps) {
  const { isCoffee, isCozy } = useTheme()

  const baseBg = isCoffee
    ? "bg-amber-900/40 border-amber-700/50"
    : isCozy
    ? "bg-teal-900/40 border-teal-700/50"
    : "bg-stone-800/70 border-stone-600"

  const headerBg = isCoffee
    ? "bg-amber-800/40"
    : isCozy
    ? "bg-teal-800/40"
    : "bg-stone-700/40"

  const footerBg = isCoffee
    ? "border-amber-700/50 bg-amber-900/60"
    : isCozy
    ? "border-teal-700/50 bg-teal-900/60"
    : "border-stone-600 bg-stone-800/60"

  return (
    <Card className={cn("overflow-hidden backdrop-blur-sm", baseBg, className)}>
      <CardHeader className={cn(headerBg)}>
        <CardTitle className="flex items-center gap-2 text-white">
          {icon}
          {title}
        </CardTitle>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">{children}</CardContent>
      <CardFooter className={cn("border-t flex justify-end", footerBg)}>
        <Link href={linkHref}>
          <Button variant="ghost" size="sm" className="gap-1 text-gray-200 hover:text-white">
            View Project <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}