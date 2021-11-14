const squares = document.querySelector('.graph__squares');
const technologies = document.querySelectorAll('.technologies__item');

technologies.forEach(tech => {
  const list = document.createElement('ul');
  list.classList.add(tech.textContent.toLowerCase())
  squares.append(list);
})

const listFilled = (selector, count) => {
    for (let i = 1; i < 20; i++) {
      let level;
      i <= count ? level = Math.floor(1 + Math.random() * 2) : level = 0;
      const parrent = document.querySelector(selector)
      parrent.insertAdjacentHTML('beforeend', `<li data-level="${ level }"></li>`);
    }
}

listFilled('.html', 18)
listFilled('.css', 17)
listFilled('.js', 16)
listFilled('.php', 7)
listFilled('.vue', 15)
listFilled('.react', 13)
listFilled('.cms', 10)


// const addSquares = (delay) => setTimeout(() => {
//   let level
//   level = Math.floor(1 + Math.random() * 2);
//   squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
// }, 50 * delay)
//
// for (let i = 1; i < 70; i++) {
//   addSquares(i)
// }
