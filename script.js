const body = document.querySelector('body');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const title = document.querySelector('h1');
const image = document.querySelector('img');

function lightmode() {
    body.classList.remove('bg-black', 'text-white');

    body.classList.add('bg-orange-200', 'text-black');
    title.textContent = 'Siz odamlar olamidasiz';
    image.src = 'https://static.vecteezy.com/system/resources/thumbnails/032/325/111/small_2x/group-of-young-business-people-isolated-on-transparent-background-file-cut-out-3d-cartoon-character-ai-generated-png.png';
}

function darkmode() {
    body.classList.remove('bg-orange-200', 'text-black');
    body.classList.add('bg-black', 'text-white');
    title.textContent = 'Siz zombilar olamidasiz';
    image.src = 'https://static.vecteezy.com/system/resources/thumbnails/017/173/223/small_2x/scary-halloween-zombie-png.png';
}
