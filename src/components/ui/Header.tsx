import React from 'react'
import { Card } from './card'
import { Button } from './button'
import { MenuIcon, ShoppingCartIcon } from 'lucide-react'
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
          <h1>Fodasi</h1>
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