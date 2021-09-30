// Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
// Доска должна быть верно разлинована на черные и белые ячейки. Строки должны
// нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

function createChessDesc() {
    const desk = document.createElement("DIV");
    for (let i = 0; i < 10; i++) {
        const row = document.createElement("DIV");
        row.style.display = "inline-block";
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("DIV");

            if (i == 0 || j == 0 || i == 9 || j == 9) {
                cell.style.cssText = "background-color: white; width: 50px; height: 50px; text-transform: uppercase; border: 1px solid white;";
                if (j == 0 || j == 9) {

                    cell.textContent = String.fromCharCode(96 + i);
                }
                else if (i == 0 || i == 9) {
                    cell.textContent = 9 - j;
                }
                if (i == 0 && j == 0 || i == 9 && j == 0 || i == 0 && j == 9 || i == 9 && j == 9) {
                    cell.style.color = "white";
                }
                cell.style.textAlign = "center";
                cell.style.fontSize = "20pt";
                if (j == 0 || i == 9) {
                    cell.style.transform = "rotate(180deg)";
                }
            }

            else if (i % 2 == j % 2) {
                cell.style.cssText = "background-color: white; width: 50px; height: 50px; border: 1px solid black;";
            }
            else {
                cell.style.cssText = "background-color: black; width: 50px; height: 50px; border: 1px solid black;";
            }
            row.appendChild(cell);
        }
        desk.appendChild(row);
    }
    document.body.appendChild(desk);
}

createChessDesc();
