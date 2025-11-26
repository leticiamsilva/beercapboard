import { useState } from "react";
import React from "react";
import { BeerForm } from "./BeerForm";

export interface Beer {
  id: number;
  idBoard: number; 
  posicao: number;
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
  const [showBeerForm, setShowBeerForm] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null); //criando um state pra guardar o slot clicado

  const totalSlots = 8*5;
  const slots = Array.from({ length: totalSlots }, (_, i) => i + 1);

  // transforma lista em mapa para lookup rápido (id → beer)
  const beerMap = new Map(beers.map(beer => [beer.posicao, beer]));

  function handleClickSlot(slot: number) {
    setSelectedSlot(slot);
    setShowBeerForm(true);
  }

  function closeBeerForm() {
    setShowBeerForm(false);
  }

  return (
    <div>
      <header className="centralizar">
        <h1 className="titulo">Memórias</h1>
      </header>

    {/* Quadro */}
    <div
      style={{
        width: "600px",
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
            onClick={() => handleClickSlot(slotNumber)}
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
      {showBeerForm && (
         <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              minWidth: "320px",
              position: "relative",
            }}
          >

            {/* BOTÃO FECHAR */}
            <button
              onClick={() => closeBeerForm()}
              style={{ position: "absolute", 
                top: 10, right: 10, 
               // border: "1px solid black", 
                color:"#000000ff", 
                backgroundColor: "#f9f9f9",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                lineHeight: "1",
                padding: 0,
              }
            }
            > X </button>
          
           <BeerForm posicao={selectedSlot} />
          </div>
        </div>        
      )}

      <footer>
        <p>Todos os direitos reservados. Cheers!</p>
      </footer>
    </div>
  );
}