import { useState } from "react";

export default function NumeroSecreto() {
  const [numeroJugador, setNumeroJugador] = useState("");
  const [mensaje, setMensaje] = useState("");

  const generarNumero = Math.floor(Math.random() * 10) + 1;
  const [numeroSecreto, setNumeroSecreto] = useState(generarNumero);

  const numeroInvalido = numeroJugador > 10;

  const verificarNumero = (e) => {
    e.preventDefault();
    const numeroConvertido = Number(numeroJugador);

    if (numeroConvertido === numeroSecreto) {
      setMensaje("¡Felicidades acertaste! 🎉🎉");
      setNumeroSecreto(generarNumero);
      setNumeroJugador("");
    }
    if (numeroConvertido !== numeroSecreto) {
      setMensaje("Opps número errado, intenta de nuevo.");
      setNumeroJugador("");
    }
  };

  return (
    <div className="px-4 bg-color-fondo">
      <div>
        <p>Adivina el número entre 1 y 10.</p>
        <form className="flex gap-2" onSubmit={(e) => verificarNumero(e)}>
          <input
            value={numeroJugador}
            onChange={(e) => setNumeroJugador(e.target.value)}
            type="number"
            name="numero"
            placeholder="Ingresa el número"
            className={`${numeroInvalido ? "border-red-400" : "border-color-secundario"} border-2 p-2 rounded bg-white`}
          />
          <button type="submit" className="px-4 py-2">
            Intentar
          </button>
        </form>
        <strong
          className={`${numeroInvalido ? "text-red-400" : "text-color-secundario"} font-semibold`}
        >
          {numeroInvalido
            ? "El número ingresado no es válido. Debe ser un numero entre 1 y 10."
            : mensaje}
        </strong>
      </div>
    </div>
  );
}
