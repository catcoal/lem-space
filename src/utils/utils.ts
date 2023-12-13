// 获取css的变量
export const GetCssRootVar = (varName: string): string => {
  const rootStyle = getComputedStyle(document.documentElement);
  const cssVar = rootStyle.getPropertyValue(varName).trim();
  return cssVar;
};
