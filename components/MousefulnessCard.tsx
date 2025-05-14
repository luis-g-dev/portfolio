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

  const cardBgClass = isCoffee
    ? "bg-amber-900/40 border-amber-700/50"
    : isCozy
    ? "bg-teal-900/40 border-teal-700/50"
    : "bg-stone-800/70 border-stone-600"

  const cardWrapperClass =
    "backdrop-blur-sm cursor-pointer transition-transform transform hover:scale-105 group"

  const cardHoverTextColor = isCoffee
    ? "group-hover:text-amber-400"
    : isCozy
    ? "group-hover:text-teal-400"
    : "group-hover:text-sky-400"

  const cardTitleBaseClass =
    "flex items-center gap-2 text-white transition-colors"

  const cardContentTextClass = "text-gray-300"

  return (
    <a href={linkHref} className="block">
      <Card className={cn(cardWrapperClass, cardBgClass)}>
        <CardHeader>
          <CardTitle
            className={cn(cardTitleBaseClass, cardHoverTextColor)}
          >
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className={cardContentTextClass}>
          <p>{description}</p>
        </CardContent>
      </Card>
    </a>
  )
}
