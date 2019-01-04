/* eslint-disable no-extend-native */
Array.prototype.遍历 = Array.prototype.forEach;
Array.prototype.塞进去 = Array.prototype.push;
Array.prototype.合起来 = Array.prototype.reduce;
HTMLElement.prototype.附加 = HTMLElement.prototype.append;
export const 主体 = document.body;
export const 随机数 = Math.random;
export const 取整 = Math.floor;
export const 长度 = 'length';
export const 样式 = 'style';
export const 运动时间属性 = 'transitionDuration';
export const 变换属性 = 'transform';
export const 平移 = 'translate';
export const 初始值 = 'initial';
export const 像素 = 'px';
export const 格子大小 = 40;

export function 延迟(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
