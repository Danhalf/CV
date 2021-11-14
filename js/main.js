const squares = document.querySelector('.graph__squares');
const technologies = document.querySelectorAll('.technologies__item');

technologies.forEach(tech => {
  const list = document.createElement('ul');
  list.classList.add(tech.textContent.toLowerCase())
  squares.append(list);
})

const listFilled = (selector, count) => {
    for (let i = 1; i < 20; i++) {
      const level = i <= count ?  Math.floor(1 + Math.random() * 3) :  0;
      const parrent = document.querySelector(selector)
      const li = document.createElement('li')
      parrent.append(li)
      li.setAttribute('data-level', 0)
      setTimeout(()=> {
       li.setAttribute('data-level', level)
      }, Math.random() * 2000)

    }
}

listFilled('.html', 18)
listFilled('.css', 17)
listFilled('.js', 16)
listFilled('.php', 7)
listFilled('.vue', 15)
listFilled('.react', 13)
listFilled('.cms', 10)


