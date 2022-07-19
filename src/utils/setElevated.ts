const setElevated = (elevated?: boolean): string => {
  return `${elevated ? "drop-shadow-md" : ""} `;
};

export default setElevated;
