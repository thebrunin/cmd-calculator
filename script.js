const entrada = document.getElementById("entrada");
    const output = document.getElementById("output");
    const modal = document.getElementById("modal");

    function calcularExpressao(expr) {
      const regex = /^[0-9+\-*/().\s]+$/;

      if (!regex.test(expr)) return "❌ Expressão inválida.";

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
    });

    function abrirModal() {
      modal.style.display = "flex";
    }

    function fecharModal() {
      modal.style.display = "none";
    }