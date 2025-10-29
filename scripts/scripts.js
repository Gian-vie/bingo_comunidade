const board = document.getElementById("bingo-board");
const resetButton = document.getElementById("resetButton");

// Alterado: Lógica de geração da tabela
for (let i = 0; i < 8; i++) {
  // 8 linhas (0 a 7)
  const row = document.createElement("tr");

  for (let j = 0; j < 5; j++) {
    // 5 letras (B, I, N, G, O)

    // --- Célula 1 (Esquerda: 1-8, 16-23, ...) ---
    const cell1 = document.createElement("td");
    const number1 = i + 1 + j * 15;

    cell1.textContent = number1;
    cell1.dataset.number = number1;
    // Alterado: Ajustado padding e fonte para caber
    cell1.className =
      "text-center text-lg sm:text-4xl font-bold text-gray-800 p-1 sm:p-2 border border-gray-300 border-l border-l-gray-900 cursor-pointer transition-all duration-200 hover:bg-gray-200 select-none";

    cell1.addEventListener("click", () => {
      cell1.classList.toggle("marked");
    });

    row.appendChild(cell1);

    // --- Célula 2 (Direita: 9-15, 24-30, ...) ---
    const cell2 = document.createElement("td");
    if (i < 7) {
      // As primeiras 7 linhas (i=0 a 6) recebem números
      const number2 = i + 1 + 8 + j * 15; // (9-15) + (j*15)

      cell2.textContent = number2;
      cell2.dataset.number = number2;
      cell2.className =
        "text-center text-lg sm:text-4xl font-bold text-gray-800 p-1 sm:p-2 border border-gray-300 border-r border-r-gray-900 cursor-pointer transition-all duration-200 hover:bg-gray-200 select-none";

      cell2.addEventListener("click", () => {
        cell2.classList.toggle("marked");
      });
    } else {
      // A última linha (i=7) fica em branco
      cell2.textContent = "";
      cell2.className =
        "text-center text-lg sm:text-xl p-2 sm:p-3 border border-gray-300 border-r border-r-gray-900 bg-gray-50"; // Célula vazia, não clicável
    }

    row.appendChild(cell2);
  }
  board.appendChild(row);
}

// Adiciona evento ao botão de limpar
resetButton.addEventListener("click", () => {
  // Alterado: Seleciona apenas células que têm números
  const allCells = document.querySelectorAll("#bingo-board td[data-number]");
  allCells.forEach((cell) => {
    cell.classList.remove("marked");
  });
});
