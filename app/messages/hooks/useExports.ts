export default function useExports<T>(
  context: __WebpackModuleApi.RequireContext
) {
  const ret = [] as T[];
  const errorsRet = [] as string[];
  context.keys().forEach((key) => {
    const module = context(key);
    const exportKeys = Object.keys(module);
    if (exportKeys.length > 0) {
      for (const exportKey of exportKeys) {
        if (module[exportKey].hasOwnProperty("full_name"))
          ret.push(module[exportKey]);
      }
    } else {
      errorsRet.push(key);
      console.log(`Module at ${key} does not have any exports.`);
    }
  });
  return [ret, errorsRet] as const;
}
