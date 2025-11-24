import { useState } from "react";
import { createBeer } from "../services/beercapboard.service";

type BeerFormData = {
  id: string;
  idBoard: number;
  posicao: number | null;
  data_consumo: string;
  nome: string;
  cervejaria: string;
  pais: string;
  comentarios: string;
  beerCapColor: string;
};

type Props = {
    posicao: number| null;
};

export function BeerForm( props: Props) {
  const [formCreateBeer, setForm] = useState<BeerFormData>({
    id: "",
    idBoard: 1, //TODO passar o idUser de uma pagina pra outra
    posicao: props.posicao,
    data_consumo: "",
    nome: "",
    cervejaria: "",
    pais: "",
    comentarios: "",
    beerCapColor: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
        const data = await createBeer(formCreateBeer);

        console.log("Salvo:", data);

        alert("Registro salvo com sucesso!");

      // Limpa o form
      setForm({
        id: "",
        posicao: Props.posicao,
        data_consumo: "",
        nome: "",
        cervejaria: "",
        pais: "",
        comentarios: "",
        beerCapColor: "",
      });
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar.");
    }
  }

  // helper para atualizar campos
  const update =
    (field: keyof BeerFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...formCreateBeer, [field]: e.target.value });
    };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "300px",
      }}
    >
      <input  placeholder={String(props.posicao ?? "")} value={formCreateBeer.posicao ?? ""}  onChange={update("posicao")} />

      <input
        placeholder="Data de Consumo"
        value={formCreateBeer.data_consumo}
        onChange={update("data_consumo")}
      />

      <input placeholder="Nome" value={formCreateBeer.nome} onChange={update("nome")} />

      <input
        placeholder="Cervejaria"
        value={formCreateBeer.cervejaria}
        onChange={update("cervejaria")}
      />

      <input placeholder="País" value={formCreateBeer.pais} onChange={update("pais")} />

      <textarea
        placeholder="Comentários"
        value={formCreateBeer.comentarios}
        onChange={update("comentarios")}
      />

      <input
        type="color"
        placeholder="Cor do Beer Cap"
        value={formCreateBeer.beerCapColor}
        onChange={update("beerCapColor")}
      />

      <button type="submit">Salvar</button>
    </form>
  );
}
