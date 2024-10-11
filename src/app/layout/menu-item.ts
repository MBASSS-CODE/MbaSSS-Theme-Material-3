import { MenuItem } from "../types/menuItem-type";

export const menuItem: MenuItem[] = [
  {
    icon: 'home',
    label: 'Button',
    route: 'sidenav/components/button',
  },
  {
    icon: 'list',
    label: 'Card',
    route: 'side-nav/components/card'
  },
  {
    icon: 'table',
    label: 'Table',
    route: 'side-nav/components/table',
    childRoutes: [
      {
        icon: 'table',
        label: 'Dynamic Column',
        route: 'dynamyc-column'
      }
    ]
  },
  {
    icon: 'menu',
    label: 'nested',
    route: 'side-nav/page-nested',
    childRoutes: [
      {
        icon: 'menu',
        label: 'nested-first',
        route: 'page-nested-first',
        childRoutes: [
          {
            icon: 'menu',
            label: 'nested-first-first',
            route: 'page-nested-first-first',
          },
          {
            icon: 'menu',
            label: 'nested-first-second',
            route: 'page-nested-first-second',
          },
        ]
      },
      {
        icon: 'menu',
        label: 'nested-second',
        route: 'page-nested-second',
      },
      {
        icon: 'menu',
        label: 'nested-third',
        route: 'page-nested-third',
      },
    ]
  }
]