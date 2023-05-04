import { ParentProps } from "../type";

export const handleSort = (obj: any, sortedArr: Array<ParentProps>) => {
  sortedArr.sort((a: any, b: any) =>
    a[obj.key] > b[obj.key] ? obj.dir : -1 * obj.dir
  );
};
