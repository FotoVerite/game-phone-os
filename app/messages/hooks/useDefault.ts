export default function useDefaults<T>(
  context: __WebpackModuleApi.RequireContext
) {
  const ret = [] as T[];
  const errorsRet = [] as string[];
  context.keys().forEach((key) => {
    const module = context(key);

    if ("default" in module) {
      const defaultExport = module.default;
      ret.push(defaultExport);
    } else {
      errorsRet.push(key);
      console.log(`Module at ${key} does not have a default export.`);
    }
  });
  return [ret, errorsRet] as const;
}
