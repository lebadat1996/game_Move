function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };

    this.moveRight = function () {
        this.left += 20;
        console.log('ok: ' + this.left);
    };
    this.moveLeft = function () {
        this.left -= 20;
        console.log('ok: ' + this.left);
    };
    this.moveDown = function () {
        this.top += 20;
        console.log('ok: ' + this.left);
    };
    this.moveUp = function () {
        this.top -=20;
        console.log("ok" + this.top);
    }


}

let hero = new Hero('pikachu/girl.jpg', 20, 30, 150);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top < 50) {
        hero.moveRight();
    } else if (hero.top < window.innerHeight - hero.size && hero.left >= window.innerWidth -hero.size ) {
        hero.moveDown();
    } else if (hero.left > 30 ){
        hero.moveLeft();
    } else {
        hero.moveUp();
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 20)
}

start();