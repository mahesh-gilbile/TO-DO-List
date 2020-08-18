import { User, List, Task } from '../Model/Main.model';

export class StorageServices {

    private users: User[] = [
        new User(
            'Mahesh',
            [
                new List(
                    'List 1',
                    [
                        new Task(
                            true,
                            'Task 1 of List 1 user:-1'
                        ),
                        new Task(
                            true,
                            'Task 2 of List 1 user:-1'
                        ),
                        new Task(
                            true,
                            'Task 3 of List 1 user:-1'
                        ),
                        new Task(
                            true,
                            'Task 4 of List 1 user:-1'
                        )
                    ]
                ),
                new List(
                    'List 2',
                    [
                        new Task(
                            true,
                            'Task 1 of List 2 user:-1'
                        ),
                        new Task(
                            true,
                            'Task 2 of List 2 user:-1'
                        ),
                        new Task(
                            true,
                            'Task 3 of List 2 user:-1'
                        ),
                        new Task(
                            true,
                            'Task 4 of List 2 user:-1'
                        )
                    ]
                ),
                new List(
                    'List 3',
                    [
                        new Task(
                            true,
                            'Task 1 of List 3 user:-1'
                        ),
                        new Task(
                            true,
                            'Task 2 of List 3 user:-1'
                        ),
                        new Task(
                            true,
                            'Task 3 of List 3 user:-1'
                        ),
                        new Task(
                            true,
                            'Task 4 of List 3 user :-1'
                        )
                    ]
                )
            ]
        ),
        new User(
            'Jayesh',
            [
                new List(
                    'List 1',
                    [
                        new Task(
                            true,
                            'Task 1 of List 1 user:-2'
                        ),
                        new Task(
                            true,
                            'Task 2 of List 1 user:-2'
                        ),
                        new Task(
                            true,
                            'Task 3 of List 1 user:-2'
                        ),
                        new Task(
                            true,
                            'Task 4 of List 1 user:-2'
                        )
                    ]
                ),
                new List(
                    'List 2',
                    [
                        new Task(
                            true,
                            'Task 1 of List 2 user:-2'
                        ),
                        new Task(
                            true,
                            'Task 2 of List 2 user:-2'
                        ),
                        new Task(
                            true,
                            'Task 3 of List 2 user:-2'
                        ),
                        new Task(
                            true,
                            'Task 4 of List 2 user:-2'
                        )
                    ]
                ),
                new List(
                    'List 3',
                    [
                        new Task(
                            true,
                            'Task 1 of List 3 user:-2'
                        ),
                        new Task(
                            true,
                            'Task 2 of List 3 user:-2'
                        ),
                        new Task(
                            true,
                            'Task 3 of List 3 user:-2'
                        ),
                        new Task(
                            true,
                            'Task 4 of List 3 user :-2'
                        )
                    ]
                )
            ]
        )
    ]


    getUser(){
        return this.users[1];
    }
}