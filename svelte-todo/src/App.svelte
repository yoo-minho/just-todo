<script>
    import {onMount} from "svelte";
    import {writable} from 'svelte/store';
    import Todo from './Todo.svelte'

    let title = '';
    let todos = writable([]);
    let id = 0;
    let ref;

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

    onMount(() => {
        ref.focus();
    })
</script>

<label>
    <input type="text"
           bind:value={title}
           bind:this={ref}
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