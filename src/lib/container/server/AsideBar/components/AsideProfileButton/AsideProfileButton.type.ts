export type AsideProfileActionType = "home" | "search" | "write";

export interface AsideProfileButtonProps {
  action: AsideProfileActionType;
  Icon: React.ReactNode;
  path: string;
}
