const setRounded = (rounded?: Rounded): string => {
  return `${
    rounded === "md"
      ? "rounded-md"
      : rounded === "lg"
      ? "rounded-lg"
      : rounded === "full"
      ? "rounded-full"
      : "rounded-[3px]"
  }`;
};

export default setRounded;
