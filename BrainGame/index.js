let cardsArray = [
    {
        'name': 'CSS',
        'img': 'http://thapatechnical.online/logos/css.png',
    },
    {
        'name': 'HTML',
         'img' : "url(brainhtml.png)"
    },
    {
        'name': 'jQuery',
        'img': 'http://thapatechnical.online/logos/jquery.png',
    },
    {
        'name': 'JS',
        'img': 'http://thapatechnical.online/logos/js.png',
    },
    {
        'name': 'Node',
        'img': 'http://thapatechnical.online/logos/nodejs.png',
    },
    {
        'name': 'Python',
        'img': 'http://thapatechnical.online/logos/python.png',
    }
];

const parentDiv = document.getElementById("card-section");

let doubleDiv = cardsArray.concat(cardsArray);

for(let i=0; i<doubleDiv.length; i++){

    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = doubleDiv[i].name;
    childDiv.style.backgroundImage = `url(${doubleDiv[i].img})`

    parentDiv.append(childDiv);

}