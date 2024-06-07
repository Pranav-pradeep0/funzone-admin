// export const mediaQuery800px = useMediaQuery("(min-width:800px)");

export const checkStateChanges = (object1, object2) => {
  const keys1 = Object.keys(object1);

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const areObjects = isObject(value1) && isObject(value2);

    if (
      (areObjects && !deepEqual(value1, value2)) ||
      (!areObjects && value1 !== value2)
    ) {
      return false;
    }
  }

  return true;
};
