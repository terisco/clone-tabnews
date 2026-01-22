import database from "infra/database.js";

async function status(request, response) {
  // Adicionado async
  const result = await database.query("SELECT 1 + 1 AS sum;"); // Corrigido AS
  console.log(result.rows); // Corrigido rows

  response.status(200).json({ chave: "sao acima da media" });
}

export default status;
