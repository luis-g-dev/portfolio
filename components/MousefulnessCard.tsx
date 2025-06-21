import { ReactNode } from "react"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface MousefulnessCardProps {
  icon: ReactNode
  title: string
  description: string
  linkHref: string
}

export default function MousefulnessCard({ icon, title, description, linkHref }: MousefulnessCardProps) {
  const { isCoffee, isCozy } = useTheme()

  const cardBgClass = isCoffee ? "bg-amber-900/40 border-amber-700/50" : isCozy ? "bg-teal-900/40 border-teal-700/50" : "bg-stone-800/40 border-stone-600/50"
  const hoverTextClass = isCoffee ? "group-hover:text-amber-400" : isCozy ? "group-hover:text-teal-400" : "group-hover:text-gray-400"
  const wrapperClass ="backdrop-blur-sm cursor-pointer transition-transform transform hover:scale-105 group"
  const titleBaseClass ="flex items-center gap-2 text-white transition-colors"

  return (
    <a href={linkHref}>
      <Card className={cn(wrapperClass, cardBgClass)}>
        <CardHeader>
          <CardTitle className={cn(titleBaseClass, hoverTextClass)}>
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <p>{description}</p>
        </CardContent>
      </Card>
    </a>
  )
}
