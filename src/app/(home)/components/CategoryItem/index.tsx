import { Badge } from "@/components/ui/badge"
import { Category } from "@prisma/client"
import { 
  HeadphonesIcon, 
  KeyboardIcon, 
  MonitorIcon, 
  MouseIcon, 
  SpeakerIcon, 
  SquareIcon 
} from "lucide-react"

interface CategoryItemProps {
  category: Category
}


const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={18}/>, 
    monitors: <MonitorIcon size={18}/>,
    headphones: <HeadphonesIcon size={18}/>,
    mousepads: <SquareIcon size={18}/>,
    speakers: <SpeakerIcon size={18}/>,
    mouses: <MouseIcon size={18}/>
  }

  return (
    <>
      <Badge className="py-3 flex justify-center items-center gap-2 rounded-lg " variant="outline">
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
        <span className="font-bold text-xs">{category.name}</span>
      </Badge>
    </>
  )
}

export default CategoryItem