export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  childRoutes?: MenuItem[]
};