import { MenuItem } from "../models/menuItem-type";

export const menuItem: MenuItem[] = [
  {
    icon: 'home',
    label: 'Button',
    route: 'sidenav/components/button',
  },
  {
    icon: 'credit_card',
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
    icon: 'keyboard',
    label: 'Input',
    route: 'sidenav/components/input'
  },
  {
    icon: 'inventory_2',
    label: 'Product',
    route: 'sidenav/data-product',
    childRoutes: [
      {
        icon: 'inventory_2',
        label: 'Search Product',
        route: 'search-product',
      },
      {
        icon: 'inventory_2',
        label: 'Select Product',
        route: 'select-product',
      }
    ]
  },
  {
    icon: 'format_color_text',
    label: 'Typography',
    route: 'sidenav/typography',
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