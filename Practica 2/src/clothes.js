export class clothes { //Clase que contiene los atributos de la prenda
    constructor(id, name, price, description, img, sizes, colors) {
        this.id
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = img;
        this.sizes = sizes;
        this.colors = colors;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.description;
    }

    getImg() {
        return this.img;
    }

    getSizes() {
        return this.sizes;
    }

    getColors() {
        return this.colors;
    }

}

export default clothes; 