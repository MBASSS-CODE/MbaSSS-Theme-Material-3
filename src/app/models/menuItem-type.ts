export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  childRoutes?: MenuItem[];
  access?: string[];
  spacing?: boolean;
};