import { a } from "./a";
export const a = {
  name: "b",
  friendName() {
    return a.name;
  },
};
