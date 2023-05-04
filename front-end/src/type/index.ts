export type ChildProps = {
  parentId?: number;
  paidAmount?: number;
};

export type ParentProps = {
  sender?: string;
  receiver?: string;
  totalAmount?: number;
} & ChildProps;

export type ChildrenProps = {
  id?:number;
  parentId?:number;
  paidAmount?:number;
}