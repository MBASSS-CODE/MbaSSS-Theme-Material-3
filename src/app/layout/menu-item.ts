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
    route: 'sidenav/components/card'
  },
  {
    icon: 'table',
    label: 'Table',
    route: 'sidenav/components/table',
    childRoutes: [
      {
        icon: 'table',
        label: 'Basic Table',
        route: 'basic-table',
      },
      {
        icon: 'table',
        label: 'Dynamic Table',
        route: 'dynamic-table'
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