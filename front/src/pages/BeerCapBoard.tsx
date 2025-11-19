import { useState } from "react";
import React from "react";

export interface Beer {
  id: number;
  dataConsumo: string;
  nome: string;
  cervejaria: string;
  pais: string;
  comentarios: string;
  beerCapColor: string;
}

interface BeerCapBoardProps {
  beers: Beer[]; 
}

export default function BeerCapBoardPage ({ beers }: BeerCapBoardProps) {
  const [showForm, setShowForm] = useState(false);

  const totalSlots = 8*5;
  const slots = Array.from({ length: totalSlots }, (_, i) => i + 1);

  // transforma lista em mapa para lookup rápido (id → beer)
  const beerMap = new Map(beers.map(beer => [beer.id, beer]));

  function openForm() {
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
  }

  function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // aqui você vai chamar o service para salvar
    console.log("Salvar informações");
  }

  return (
    <div>
      <header className="centralizar">
        <h1 className="titulo">Memórias</h1>
      </header>

    {/* Quadro */}
    <div
      style={{
        width: "500px",
        padding: "20px",
        border: "2px solid #ccc",
        borderRadius: "12px",
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)", // 8 colunas
        gridGap: "12px",
        background: "#fafafa",
      }}
    >
      {slots.map((slotNumber) => {
        const beer = beerMap.get(slotNumber);

        return (
          <div
            key={slotNumber}
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              backgroundColor: beer ? beer.beerCapColor : "#edebebff",
              border: "2px solid #888",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "0.2s",
            }}
            title={
              beer
                ? `${beer.nome} — ${beer.cervejaria}\n${beer.comentarios}`
                : `Slot ${slotNumber}`
            }
          >
            <span style={{ fontSize: "14px", fontWeight: "bold" }}>
              {slotNumber}
            </span>
          </div>
        );
      })}
    </div>

      {/* FORM POPUP */}
      {showForm && (
        <div className="form-popup" id="beerCapFormDiv">
          <form id="beerCapForm" className="form-container" onSubmit={handleSave}>
            <h1>Informações</h1>

            <label htmlFor="date">Data:</label>
            <input type="date" name="date" required />

            <label htmlFor="beerName">Nome da Cerveja:</label>
            <input
              type="text"
              placeholder="Nome da cerveja"
              name="nome"
              required
            />

            <label htmlFor="comments">Comentários:</label>
            <input
              type="text"
              placeholder="Escreva algo para lembrar desse momento :)"
              name="comments"
              required
            />

            <label htmlFor="beerCapcolor">Cor da tampinha:</label>
            <input
              type="color"
              id="beerCapColor"
              name="beerCapcolor"
              required
            />

            <button id="btnSaveForm" className="btn" type="submit">
              Salvar
            </button>

            <button
              type="button"
              className="btn cancel"
              onClick={closeForm}
            >
              Fechar
            </button>
          </form>
        </div>
      )}

      <footer>
        <p>Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}