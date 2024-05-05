function attachEventListeners() {
    let games_ul = document.getElementById('games-ul');
    if (!games_ul) {
        console.log("Games UL not found");
        return;
    }

    games_ul.querySelectorAll('li').forEach(game => {
        let img = game.querySelector('a img');
        let name = game.querySelector('p');

        img.addEventListener('click', (event) => {
            localStorage.setItem('game-title', name.innerText);
        });
    });
}

let observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            attachEventListeners();
            return;
        }
    }
});

if (window.location.pathname.endsWith('game.html')) {
    document.title = localStorage.getItem('game-title');

    let game_title = document.getElementById('game-title');
    let game_name = game_title.innerText.split(' ').join('');

    game_title.innerText = localStorage.getItem('game-title');

    let game_info = document.getElementById('game-info');
    game_info.innerText = localStorage.getItem('game-title');

    let game_icon = document.getElementById('game-icon');
    game_icon.src = `games/${game_title.innerText.split(' ').join('')}/icon.png`;

    let embededGame = document.getElementById('embededGame');
    let canvas = document.getElementsByClassName("#canvas")[0];

    fetch('games.json')
        .then(response => response.json())
        .then(data => {
            let link = data.link;
            embededGame.src = `games/${game_name}/index.html`;
            embededGame.style.width = canvas.style.width;
            embededGame.style.height = canvas.style.height;
        });
};


let games_ul = document.getElementById('games-ul');
if (games_ul) {
    observer.observe(games_ul, { childList: true });
} else {
    console.log("Games UL not found");
}

attachEventListeners();
