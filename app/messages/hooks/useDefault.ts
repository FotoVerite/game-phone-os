const useDefaults = <T>(context: __WebpackModuleApi.RequireContext): T[] => {
  const ret = [] as T[];
  context.keys().forEach((key) => {
    const module = context(key);

    if ("default" in module) {
      const defaultExport = module.default;
      ret.push(defaultExport);
    } else {
      console.log(`Module at ${key} does not have a default export.`);
    }
  });
  return ret;
};

export default useDefaults;
