export const 主体 = document.body;
export const 随机数 = Math.random;
export const 取整 = Math.floor;
export const 遍历 = 'forEach';
export const 塞进去 = 'push';
export const 合起来 = 'reduce';
export const 附加 = 'append';
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
