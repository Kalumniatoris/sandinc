class Sand {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price
    }

}

class Combo {
    constructor(ina, inb, out) {
        this.ina = ina;
        this.inb = inb;
        this.out = out;
    }
}

var sands = [];
var combos = []
var generators = [];

window.onload = function () {
    sands.push(new Sand("----", color(255, 255, 255), 1))
    sands.push(new Sand("basic", color(180, 180, 30), 1))
    sands.push(new Sand("red", color(250, 50, 30), 5))
    sands.push(new Sand("br", color(200, 110, 220), 15))

    combos.push(new Combo("basic", "red", "br"));
    combos.push(new Combo("br", "red", "br"));



    generators.push(new Generator(20, 10, getIdByName("basic"), 100))
    generators.push(new Generator(120, 10, getIdByName("red"), 150))
}


class Generator {

    constructor(x, y, sand, time) {
        this.x = x;
        this.y = y;
        this.sand = sand;
        this.time = time;
      //  this.gen = setInterval(this.generate, this.time);
      this.gen = setInterval(this.generate2, this.time,this.x,this.y,this.sand);
    }

    generate() {
        if (map[this.x][this.y] == 0) {
            map[this.x][this.y] = this.sand;// + 1;
        }
    }

    generate2(x,y,s) {
        if (map[x][y] == 0) {
            map[x][y] = s;// + 1;
        }
    }

    start() {
        this.gen = setInterval(this.generate2, this.time,this.x,this.y,this.sand);
    }
    stop() {
        clearInterval(this.gen)
    }

    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }
}

function checkCombo(a, b) {
    if (a == b) return;
    //p("00")
    //p(a,b)
    na = sands[a].name;
    nb = sands[b].name;

    for (i in combos) {
        s = combos[i]
        //p(s)
        if (s.ina == na && s.inb == nb) {
            //  p(s.out)
            return getIdByName(s.out);
        }
        if (s.ina == nb && s.inb == na) {
            //  p(s.out)
            return getIdByName(s.out);
        }
    }

    return 0;
}

function getIdByName(name) {
    for (var i = 0; i < sands.length; i += 1) {
        if (sands[i].name == name) {
            return i;
        }
    }
    return -1;
}