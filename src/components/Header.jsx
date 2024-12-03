export function Header(props) {
    const { todos } = props; //destructing - const of props.todos

    const todosLength = todos.length;
    const todosLengthPural = todosLength != 1;
    const taskOrTasks = todosLengthPural ? "tasks" : "task"

    return (
        <header>
            <h1 className="text-gradient">
                You have {todosLength} open {taskOrTasks}.
            </h1>
        </header>
    );
}
