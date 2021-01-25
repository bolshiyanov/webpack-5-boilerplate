export const example = function () {
  return (
    "Современный шаблон webpack 5 с использованием Babel " +
    "с горячим сервером для разработки и eslint c правилами Google."
  );
};
console.log('module.js')

async function start () {
    return await Promise.resolve('asinc working with babel/polyfill')
}

start().then(console.log)
