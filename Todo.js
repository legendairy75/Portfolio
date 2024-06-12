const Todo = [];

val = 0;

let inp = prompt('input command');

while (inp !== 'q') {

    inp = prompt('input command');

    if (inp === 'new') {
        New = prompt('input new item')
        Todo.push(New);
        console.log(`New task ${New}.`);
        console.log('*********');
        //console.log(Todo);
        continue;
    }

    else if (inp === 'list') {

        for (const List of Todo) {
            //val += 1;
            console.log(Todo.indexOf(List) + ': ' + List);

            //console.log(val + ':' +List);
        }
        console.log('*********');
        // console.log(Todo);
        // prompt(Todo);

    }

    else if (inp === 'delete') {

        Del = parseInt(prompt('input index'));

        Todo.splice(Del, 1);

        for (const List of Todo) {
            //val += 1;
            console.log(Todo.indexOf(List) + ': ' + List);

            //console.log(val + ':' +List);
        }
        console.log('*********');

    };
}