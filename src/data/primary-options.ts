import { Option } from "./option";

const options: Option[] = [
  { value: "add", label: "add" },
  { value: "create", label: "create" },
  { value: "delete", label: "delete/remove" },
  { value: "show", label: "show/view" },
  { value: "restore", label: "restore" },
  { value: "clean", label: "clean" },
  { value: "run", label: "run" },
  { value: "publish", label: "publish" },
].sort((x, y) => {
  let result = 0;
  if (x.value < y.value) {
    result = -1;
  }
  if (x.value > y.value) {
    result = 1;
  }
  return result;
});

export const primaryOptions = options;
