<script>
    import {writable} from 'svelte/store';
    import Todo from './Todo.svelte'

    let title = '';
    let todos = writable([]);
    let id = 0;

    function createTodo() {
        if (!title.trim()) {
            return;
        }
        $todos.push({
            id,
            title
        });
        $todos = $todos;
        title = '';
        id += 1;
    }
</script>

<label>
    <input type="text"
           autofocus
           bind:value={title}
           on:keydown={(e) => {e.key === 'Enter' && createTodo()}}/>
</label>
<button on:click={createTodo}>
    Create Todo
</button>

{#each $todos as todo}
    <Todo {todos} {todo}/>
{/each}

<style>

</style>