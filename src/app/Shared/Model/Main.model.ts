export class Task{
    constructor(public check:boolean , public name:string) { }
}

export class List{
    constructor(public name:string , public task:Task[]) { }
}

export class User{
    constructor(public user_id:string , public list:List[]) { }
}