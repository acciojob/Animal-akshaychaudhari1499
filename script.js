//your JS code here. If required.
container=document.getElementById('container');
let animals=[camel,
cheetah,
elephant,
gorilla,
koala,
lion,
polar_bear,
tiger,
wolf]
animals.forEach(animal=>{
img=document.createElement('div')
img.innerHTML=`<img src='https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/`${animal}`.jpg' alt='${animal}'`	
container.appendChild(img)

})