<script>
    export let todos;
    export let todo;

    let isEdit = false;
    let title = '';

    function onEdit() {
        isEdit = true;
        title = todo.title;
    }

    function offEdit() {
        isEdit = false;
    }

    function updateTodo() {
        todo.title = title;
        offEdit();
    }

    function deleteTodo() {
        $todos = $todos.filter(t => t.id !== todo.id);
    }
</script>

{#if isEdit}
    <div>
        <label>
            <input type="text"
                   autofocus
                   bind:value={title}
                   on:keydown={(e) => {e.key === 'Enter' && updateTodo()}}/>
        </label>
        <button on:click={updateTodo}>
            Ok
        </button>
        <button on:click={offEdit}>
            Cancel
        </button>
    </div>

{:else}
<div>
    {todo.title}
    <button on:click={onEdit}>
        Edit
    </button>
    <button on:click={deleteTodo}>
        Delete
    </button>
</div>
{/if}
