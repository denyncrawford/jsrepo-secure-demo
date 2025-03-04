export const print = (
  args: {
    value: string | number | boolean;
    length?: number;
    align?: "left" | "right";
  }[]
) => {
  const values = args.map((arg) => {
    const value = arg.value;
    const length = arg.length ?? 0;
    const align = arg.align ?? "left";
    if (typeof value === "string") {
      if (align === "left") {
        return value.padEnd(length);
      } else {
        return value.padStart(length);
      }
    } else if (typeof value === "number") {
      return value.toString().padStart(length);
    } else if (typeof value === "boolean") {
      return value ? "true" : "false";
    } else {
      return "";
    }
  });
  console.log(values.join(" "));
};
