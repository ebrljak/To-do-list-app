window.addEventListener('load', () => {
    const form = document.querySelector("#new-task");
    const input = document.querySelector("#add-task");
    const tasks = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const el_task = document.createElement('div');
        el_task.classList.add('task');

        const el_content = document.createElement('div');
        el_content.classList.add('content');

        el_task.appendChild(el_content);

        const el_input = document.createElement('input');
        el_input.classList.add('text');
        el_input.type = 'text';
        el_input.value = task;
        el_input.setAttribute('readonly', 'readonly');

        el_content.appendChild(el_input);

        const el_delete = document.createElement('button');
        el_delete.classList.add('delete');
        el_delete.innerText = 'Delete';

        el_content.appendChild(el_delete);

        el_task.appendChild(el_content);

        tasks.appendChild(el_task);

        input.value = '';

        el_delete.addEventListener('click', (e) => {
            tasks.removeChild(el_task);
        });
    });
});
