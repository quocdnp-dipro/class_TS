import { IStudent } from "./interface";
class Student implements IStudent{
    username: string;
    age: number;
    address: string;
    math: number;
    physical: number;
    
    

    constructor(username: string, age: number, address: string, math: number, physical: number) {
        this.username = username;
        this.age = age;
        this.address = address;
        this.math = math;
        this.physical = physical;
    }

    display(): void {
        console.log(`Name :${this.username} Age : ${this.age}  Address : ${this.address} Math : ${this.math} physical : ${this.physical}`);
    }
}


// tao doi tuong student --> constructor se khoi tao va gan gia tri cho cac thuoc tinh cua doi tuong
let student = new Student('Doan Ngoc Phu Quoc', 21, 'Quang Nam', 7, 3);
student.display();
