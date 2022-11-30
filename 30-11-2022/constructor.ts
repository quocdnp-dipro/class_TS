class Person {
    name: string = "Quoc";
    weight: number;
    

    //constructor không cần gán giá trị cho thuộc tính name  vì đã gán giá trị lúc tạo
    constructor(weight: number) {
        this.weight = weight;
    }
}


class Employee {
    name: string;
    salary?: number;

    //constructor không cần truyền và gán giấ trị cho salary vì trường này không bắt buộc phải tồn tại
    constructor(name : string) {
        this.name = name;
    }
    
}