import { useState } from "react";

type BeerCapFormData = {
  id: string;
  data_consumo: string;
  nome: string;
  cervejaria: string;
  pais: string;
  comentarios: string;
  beerCapColor: string;
};

type Props = {
  idUser: number;
};

export function BeerCapForm({ idUser }: Props) {
  const [formCreateBeer, setForm] = useState<BeerCapFormData>({
    id: "",
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
      const response = await fetch(`http://localhost:3000/beercaps/${idUser}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formCreateBeer),
      });

      const data = await response.json();
      console.log("Salvo:", data);

      alert("Registro salvo com sucesso!");

      // Limpa o form
      setForm({
        id: "",
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
    (field: keyof BeerCapFormData) =>
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
      <input placeholder="ID" value={formCreateBeer.id} onChange={update("id")} />

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
        placeholder="Cor do Beer Cap"
        value={formCreateBeer.beerCapColor}
        onChange={update("beerCapColor")}
      />

      <button type="submit">Salvar</button>
    </form>
  );
}
