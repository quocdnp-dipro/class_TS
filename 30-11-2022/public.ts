class Car {
    protected name: string;
    private color: string;
    public isNew: boolean = true;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }
    //getter
    public get _name() {
        return this.name;
    }

    //setter
    public set _name(name: string) {
        if (!name) {
            throw new Error("The name is invalid");
        }
        this.name = name;
    }

    display(): void {}
}


//tính kế thừa inheritance
class Car2 extends Car {
    weight: number;

    constructor(name: string, color: string, weight: number) {
        super(name, color); // tương đương 2 lệnh với this.name = name;  this.color = color;
        
        this.weight = weight;
    }

    display(): void {
        console.log(this.name); // protected có thể truy cập trong class con kế thừa từ class cha
    }
}

let car = new Car("BMW", "white");
let car2 = new Car2("Rolls Royce", "Black", 1200);
console.log(car2.display());
console.log(car.isNew); // allow : cho phép truy cập ngoài class
console.log(car.color); // error : không cho phép truy cập ngoài class Car
