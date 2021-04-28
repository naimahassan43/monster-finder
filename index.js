/*********Create Elements with DOM*********/
showMonster();

function showMonster() {
    const monster = document.createElement('div');
    monster.className = 'monster';

    const img = document.createElement('img');
    img.src = 'https://robohash.org/6?set=set2';
    img.alt = 'MD. Sakib Khan';

    const name = document.createElement('p');
    name.className = 'name';
    name.innerText = 'MD. Sakib Khan';

    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = 'programmingwithsakib@gmail.com';

    monster.append(img, name, email);

    document.querySelector('.monsters').append(monster);

    console.log(monster);

}

notFound();

function notFound() {
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className = 'p-5 not-found';
    notFoundDiv.style.display = 'none';

    const span = document.createElement('span');
    span.innerText = '404';

    const h1 = document.createElement('h1');
    h1.innerText = '🧟‍♂️ No Monster Found 🧟‍♂️';
    notFoundDiv.append(span, h1);

    document.querySelector('.monsters').append(notFoundDiv);
    console.log(notFoundDiv);

}