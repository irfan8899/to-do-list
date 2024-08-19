document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const prioritySelect = document.getElementById('priority');
    const submitButton = document.getElementById('submit');
    const todoItems = document.getElementById('todo-items');
    const doneItems = document.getElementById('done-items');
    const deleteAllButton = document.getElementById('delete-all');
    const currentTime = document.getElementById('current-time');

    // Menampilkan waktu saat ini
    function updateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        currentTime.textContent = now.toLocaleDateString('id-ID', options);
    }

    updateTime();

    // Fungsi untuk menambahkan item to-do
    submitButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        const priority = prioritySelect.value;

        if (taskText !== "") {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText} - <strong>${priority.charAt(0).toUpperCase() + priority.slice(1)}</strong></span>
                <input type="checkbox" class="done-checkbox">
            `;
            todoItems.appendChild(listItem);
            taskInput.value = '';
            prioritySelect.selectedIndex = 0;
        } else {
            alert("Silakan masukkan tugas Anda terlebih dahulu.");
        }
    });

    // Fungsi untuk menandai item sebagai selesai
    todoItems.addEventListener('change', function(e) {
        if (e.target.classList.contains('done-checkbox')) {
            const listItem = e.target.parentElement;
            listItem.classList.add('done');
            doneItems.appendChild(listItem);
            e.target.remove();
        }
    });

    // Fungsi untuk menghapus semua to-do
    deleteAllButton.addEventListener('click', function() {
        if (confirm("Apakah Anda yakin ingin menghapus semua to-do list?")) {
            todoItems.innerHTML = '';
            doneItems.innerHTML = '';
        }
    });
});
