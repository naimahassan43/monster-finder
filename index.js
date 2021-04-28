import { monsters } from './monsters.js';
console.log(monsters);

for (let monster of monsters) {
    showMonster(monster);
}


function showMonster(monster) {
    const monsterDiv = document.createElement('div');
    monsterDiv.className = 'monster';

    const img = document.createElement('img');
    img.src = `https://robohash.org/${monster.id}?set=set2`;
    img.alt = monster.name;

    const name = document.createElement('p');
    name.className = 'name';
    name.innerText = monster.name;

    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = monster.email;

    monsterDiv.append(img, name, email);

    document.querySelector('.monsters').append(monsterDiv);

    console.log(monsterDiv);

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

document.querySelector('#search-monster').addEventListener('keyup', function(e) {
    const keyword = e.target.value.toLowerCase();

    const monsters = document.querySelectorAll('.monster');

    for (let monster of monsters) {


        const name = monster.children[1].innerText.toLowerCase();
        const email = monster.children[2].innerText.toLowerCase();



        if (name.includes(keyword) || email.includes(keyword)) {
            monster.style.display = 'block';
        } else {
            monster.style.display = 'none';
        }
    }
});