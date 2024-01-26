export interface SidebarItemType {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  path: string;
  text: string;
  authOnly?: boolean;
}
