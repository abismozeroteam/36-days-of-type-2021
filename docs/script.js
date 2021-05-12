let letters = 'abcdefghijklmnopqrstuvwxyz0123456789';
letters = letters.split('');

function addNav() {
    for(let letter=0; letter<letters.length; letter++) {
        let letterNode = document.createElement('a');
        let textAnchor = document.createTextNode(letters[letter].toUpperCase());
        let linkID;
        if(letter + 1 < 10) {
            linkID = `day0${letter + 1}`;
        } else {
            linkID = `day${letter + 1}`;
        }
        letterNode.href = `/`;
        letterNode.id = linkID;
        letterNode.appendChild(textAnchor);
        letterNode.setAttribute('aria-label', `Letter ${letters[letter].toUpperCase()} button`);
        letterNode.className = 'glyph-selector';
        document.getElementById('glyphs').appendChild(letterNode);
    }
}

function checkActiveMenu(navElements, currentLetter) {
    for (menuElement of navElements) {
        if (currentLetter.data.search(menuElement.id) > 0) {
            menuElement.className = 'glyph-selector-active';
        } else {
            menuElement.className = 'glyph-selector';
        }
    }
}

addNav();

const navChild = document.getElementById('glyphs').children;
const currentLetter = document.getElementById('current-letter');
checkActiveMenu(navChild, currentLetter);

for (child of navChild) {
    child.addEventListener('click', function(event){
        event.preventDefault();
        currentLetter.data = `./${event.target.id}/index.html`;
        event.target.className = 'glyph-selector-active';
        checkActiveMenu(navChild, currentLetter);
    });
}