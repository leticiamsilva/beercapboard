const API_URL_CRUD = "http://localhost:3000/beercapboard";

export async function getOneById(id: number) {
  const res = await fetch(`${API_URL_CRUD}/getOneById/${id}`);
  return res.json();
}

export async function getAllByUserId(idUser: number) {
  const res = await fetch(`${API_URL_CRUD}/getAllByUserId/${idUser}`);
  return res.json();
}