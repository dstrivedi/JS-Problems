//class declaration
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

//class expression
const Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

//class expression - the class has its own name
const Rectangle = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}