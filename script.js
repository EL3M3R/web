let reasons = [
    "Eres única",
    "Me haces reír",
    "Eres inteligente",
    // ... (200 razones)
];

// Elementos del DOM
const reasonsList = document.getElementById("reasons-list");
const editButton = document.getElementById("edit-button");

// Función para renderizar la lista de razones
function renderReasons() {
    reasonsList.innerHTML = "";
    reasons.forEach((reason, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${reason}`;
        reasonsList.appendChild(li);
    });
}

// Función para editar la lista de razones
function editReasons() {
    // Abrir una ventana de diálogo para editar la lista de razones
    const editWindow = window.open("", "Editar razones", "width=400,height=300");
    editWindow.document.write(`
        <h1>Editar razones</h1>
        <textarea id="reasons-textarea" style="width: 100%; height: 200px;">${reasons.join("\n")}</textarea>
        <button id="save-button">Guardar</button>
    `);

    // Agregar evento de clic al botón de guardar
    editWindow.document.getElementById("save-button").addEventListener("click", () => {
        const newReasons = editWindow.document.getElementById("reasons-textarea").value.split("\n");
        reasons = newReasons;
        renderReasons();
        editWindow.close();
    });
}

// Agregar evento de clic al botón de editar
editButton.addEventListener("click", editReasons);

// Renderizar la lista de razones inicialmente
renderReasons();
