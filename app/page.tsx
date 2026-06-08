import { supabase } from "@/src/lib/supabase";

export default async function Home() {
  const { data: doramas, error } = await supabase
    .from("doramas")
    .select("*");

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>Dorama Lovers Brasil</h1>

      {doramas?.map((dorama) => (
        <div
          key={dorama.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h2>{dorama.titulo}</h2>
          <p>{dorama.sinopse}</p>
          <p>Ano: {dorama.ano}</p>
          <p>Episódios: {dorama.episodios}</p>
          <p>Gênero: {dorama.genero}</p>
        </div>
      ))}
    </main>
  );
}