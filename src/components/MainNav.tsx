import * as React from "react"
import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const MainNav = () => {
  return (
    <NavigationMenu className="text-white">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/reference-cases" className="text-white hover:text-blue-400 bg-transparent flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:text-blue-400">
            Reference cases
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/our-story" className="text-white hover:text-blue-400 bg-transparent flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:text-blue-400">
            About us
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/plans" className="text-white hover:text-blue-400 bg-transparent flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:text-blue-400">
            Plans
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MainNav