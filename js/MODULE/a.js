import { b } from "./b";
export const a = {
  name: "a",
  friendName() {
    return b.name;
  },
};
export const aa = {
  name: "aa",
};
//或者 export{a,aa}
