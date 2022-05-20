const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const spread = () => {
  const { spring, summer, autumn, winter } = yearSeasons;
  const months = [...spring, ...summer, ...autumn, ...winter];
  return months;
}

console.log(spread());