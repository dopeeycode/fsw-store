import React from 'react'
import { Card } from './card'
import { Button } from './button'
import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentCircleIcon, ShoppingCartIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './sheet'

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <h1>Menu</h1>
          <div className="mt-2 space-y-2">
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2"
            >
                <LogInIcon size={22} />
                Fazer Login
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2"
            >
                <HomeIcon size={22} />
                Inicio
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2"
            >
                <PercentCircleIcon size={22} />
                Ofertas
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2"
            >
                <ListOrderedIcon size={22} />
                Catálogo
            </Button>
          </div>

        </SheetContent>
      </Sheet>

      <h1 className="font-semibold text-lg">
        <span className="text-primary">FWS</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  )
}

export default Header