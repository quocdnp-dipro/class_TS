interface List<Q>{
    length: number;
    [index : number] : Q
}

//number
const listNumber: List<number> = [1, 2, 3, 4]

//string
const listString: List<string> = ['a', 'b', 'c']

//person 
interface People{
    name: string,
    id : number
}

const listPerson: List<People>  = [{name: 'Quoc', id: 122}]