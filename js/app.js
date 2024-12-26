const elBody = document.body
const elDiv = document.createElement('div')
const elImg = document.createElement('img')
const elSpan = document.createElement('span')
let elP1 = document.createElement('p')
let elH3 = document.createElement('h3')
let elP2 = document.createElement('p')


elBody.style.height = '100vh'
elBody.style.background = 'yellow'
elBody.style.display = 'flex'
elBody.style.alignItems ='center'
elBody.style.justifyContent ='center'
elBody.style.overflow='hidden'


elDiv.style.boxShadow = ' 0px 5px 5px 0px black'
elDiv.style.width = '260px'
elDiv.style.height = '370px'
elDiv.style.backgroundColor = 'white'
elDiv.style.padding ='15px'
elDiv.style.borderRadius = '10px'
elDiv.style.border = '2px solid black'
elDiv.style.margin = ' 0 auto'




elImg.src = './img/bg0.webp'

elImg.style.width = '250px'
elImg.style.height = '150px'
elImg.style.borderRadius = '10px'
elImg.style.marginBottom ='20px'

elSpan.style.padding ='8px 10px'
elSpan.style.backgroundColor ='yellow'
elSpan.style.color='black'
elSpan.style.marginBottom ='20px'

elSpan.textContent = 'Learning'


elP1.textContent = 'Publicated 21Dec 2023'
elP1.style.marginBottom ='20px'

elH3.textContent = 'HTML & CSS foundations'
elH3.style.marginBottom = '20px'

elP2.textContent = '    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nihil quibusdam, officia earum deserunt voluptates.'
elP2.style.with = '250px'



elBody.append(elDiv)
elDiv.append(elImg)
elDiv.append(elSpan)
elDiv.append(elP1)
elDiv.append(elH3)
elDiv.append(elP2)
