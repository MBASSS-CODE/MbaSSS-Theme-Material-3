import { MenuItem } from "../models/menuItem-type";

export const menuItem: MenuItem[] = [
  {
    icon: 'web_asset',
    label: 'Button',
    route: 'web/components/button',
  },
  {
    icon: 'credit_card',
    label: 'Card',
    route: 'web/components/card'
  },
  {
    icon: 'table',
    label: 'Table',
    route: 'web/components/table',
    childRoutes: [
      {
        icon: 'foundation',
        label: 'Basic Table',
        route: 'basic-table',
      },
      {
        icon: 'dynamic_feed',
        label: 'Dynamic Table',
        route: 'dynamic-table'
      }
    ]
  },
  {
    icon: 'keyboard',
    label: 'Input',
    route: 'web/components/input',
    spacing: true
  },
  {
    icon: 'inventory_2',
    label: 'Product',
    route: 'web/data-product',
    childRoutes: [
      {
        icon: 'search',
        label: 'Search Product',
        route: 'search-product',
      },
      {
        icon: 'playlist_add_check',
        label: 'Select Product',
        route: 'select-product',
      }
    ]
  },
  {
    icon: 'format_color_text',
    label: 'Typography',
    route: 'web/typography',
  },
  {
    icon: 'menu',
    label: 'nested',
    route: 'side-nav/page-nested',
    spacing: true,
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
  },


  {
    icon: 'menu',
    label: 'Menu Nested',
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
  },
  {
    icon: 'Other Menu',
    label: 'nested',
    route: 'side-nav/page-nested'
  }
]