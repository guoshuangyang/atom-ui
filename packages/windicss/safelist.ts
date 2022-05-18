/**
 * safeList
 * @returns {Array}
 */

// 颜色类
const types = ["bg", "text", "border"];
const colors = ["primary", "success", "warning", "info", "danger", "default"];
function range(types, colors) {
  const result = [];
  types.forEach((type) => {
    colors.forEach((color) => {
      result.push(`${type}-${color}`);
    });
  });
  return result;
}

// 字体大小类
// const fontSize = ['xs', 'sm', 'base', 'lg', 'xl']
// const fontSizes = fontSize.map(item => `text-${item}`)
export const safeList = [
  ...range(types, colors),
  //  ...fontSizes
];

export function mergeSafeList(array) {
  return [...safeList, ...array];
}

export default safeList;
