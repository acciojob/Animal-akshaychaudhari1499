//your JS code here. If required.
let imgcont=document.getElementById('img');
let animals=[camel,
cheetah,
elephant,
gorilla,
koala,
lion,
polar_bear,
tiger,
wolf]
animals.map(animal=>{
document.write(animal)

// url=`https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/${animal}.jpg`
// imgcont.innerHTML+=`<img src=${url}'`	

})