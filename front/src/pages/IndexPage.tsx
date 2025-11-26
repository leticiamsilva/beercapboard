import { useState } from "react";
import { getAllBeerResumeByIdBeerCapBoard } from "../services/beercapboard.service";
import  BeerCapBoard  from "./BeerCapBoard";
import type { Beer } from "./BeerCapBoard"; // tipo

export default function IndexPage() {
  const [id, setId] = useState("");
  const [data, setData] = useState<Beer[] | null>(null);

  async function handleLoad() {
    if (!id) return alert("Digite um ID para recuperar seu quadro!");

    //const result = await getOneById(Number(id));
    const result = await getAllBeerResumeByIdBeerCapBoard(Number(id))
    setData(Array.isArray(result) ? result : [result]); //renderizar a pagina do board
  }

  if (data) {
    return <BeerCapBoard beers={data} />;
  }

  return (
    <div style={{ padding: 5 }}>
      <h1>Beercap Board - Quadro Tampinhas de cerveja</h1>

      <input
        type="text"
        placeholder="Digite o ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={handleLoad}>Carregar Board</button>
    </div>
  );
}
