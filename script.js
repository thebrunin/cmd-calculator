const entrada = document.getElementById("entrada");
const output = document.getElementById("output");
const modal = document.getElementById("modal");

const inputs = [];
let inputIndex = 0;

function calcularExpressao(expr) {
    const regex = /^[0-9+\-*/().\s]+$/;

    if (!regex.test(expr)) return "❌ Expressão inválida.";

    inputs.push(expr);
    inputIndex = inputs.length;

    try {
        return `📌 Resultado: ${eval(expr)}`;
    } catch {
        return "❌ Erro ao calcular.";
    }
}

function executarExpressao() {
    const expr = entrada.value.trim();

    if (expr.length > 0) {
        const resultado = calcularExpressao(expr);
        
        output.innerText += `> ${expr}\n${resultado}\n\n`;
        entrada.value = "";
        output.scrollTop = output.scrollHeight;
    }
}

entrada.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        executarExpressao();
    }

    if (e.key === "Delete") {
        output.innerText = "";
        entrada.value = "";
    }

    if (e.key === "ArrowUp") {
        inputAnterior();
    }

    if (e.key === "ArrowDown") {
        inputPosterior();
    }
});

function inputAnterior() {
    if(inputIndex > 0)
        entrada.value = inputs[--inputIndex];
}

function inputPosterior() {
    if(inputIndex < (inputs.length - 1))
        entrada.value = inputs[++inputIndex];
}

function abrirModal() {
    modal.style.display = "flex";
}

function fecharModal() {
    modal.style.display = "none";
}