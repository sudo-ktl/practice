const str = document.querySelector('.animate-title');
let arry =[]
str.innerHTML.split('').forEach(v => {
  if(v != '\n' && v != ' ') {
    arry.push(v)
  }
})

console.log(arry)
let element = ''
arry.forEach(v => {
  console.log(`<span class="char">${v}</span>`)
  element += `<span class="char">${v}</span>`
})

console.log(element)

str.innerHTML = element