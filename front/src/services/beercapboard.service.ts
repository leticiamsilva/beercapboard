import { useState } from "react";

const API_URL_CRUD = "http://localhost:3000/beercapboard";

export async function getOneById(id: number) {
  const res = await fetch(`${API_URL_CRUD}/getOneById/${id}`);
  return res.json();
}

export async function getAllByUserId(idUser: number) {
  const res = await fetch(`${API_URL_CRUD}/getAllByUserId/${idUser}`);
  return res.json();
}

export async function createBeer(idUser: number, dataCreateBeer: any) {
  const res = await fetch(`${API_URL_CRUD}/createBeer/${idUser}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
     body: JSON.stringify(dataCreateBeer)
  });

  if (!res.ok) {
    throw new Error("Erro ao criar registro");
  }

  return await res.json();
}

