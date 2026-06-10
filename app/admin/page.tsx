"use client";

import { useState } from "react";
import { supabase } from "@/src/lib/supabase";

export default function AdminPage() {
  const [titulo, setTitulo] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [ano, setAno] = useState("");
  const [episodios, setEpisodios] = useState("");
  const [genero, setGenero] = useState("");
  const [nota, setNota] = useState("");
  const [comentario, setComentario] = useState("");
  const [capaUrl, setCapaUrl] = useState("");
const [arquivo, setArquivo] = useState<File | null>(null);
async function cadastrarDorama(e: React.FormEvent) {
  e.preventDefault();

  let urlImagem = capaUrl;

  if (arquivo) {
    const nomeArquivo = `${Date.now()}-${arquivo.name}`;

    const { error: uploadError } = await supabase.storage
      .from("capas")
      .upload(nomeArquivo, arquivo);

    if (uploadError) {
      alert("Erro upload: " + uploadError.message);
      return;
    }

    const { data } = supabase.storage
      .from("capas")
      .getPublicUrl(nomeArquivo);

    urlImagem = data.publicUrl;
  }

  const { error } = await supabase.from("doramas").insert({
    titulo,
    sinopse,
    ano: Number(ano),
    episodios: Number(episodios),
    genero,
    nota_ana: Number(nota),
    comentario_ana: comentario,
    capa_url: urlImagem,
  });

  if (error) {
    alert("Erro: " + error.message);
    return;
  }

  alert("Dorama cadastrado com sucesso!");

  setTitulo("");
  setSinopse("");
  setAno("");
  setEpisodios("");
  setGenero("");
  setNota("");
  setComentario("");
  setCapaUrl("");
  setArquivo(null);
}

  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl">

        <h1 className="text-4xl font-bold text-pink-600 mb-6">
          ➕ Cadastrar Dorama
        </h1>

        <form onSubmit={cadastrarDorama} className="space-y-4">

          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título"
			required
            className="w-full p-3 border rounded-xl text-gray-800"
          />

          <textarea
            value={sinopse}
            onChange={(e) => setSinopse(e.target.value)}
            placeholder="Sinopse"
			required
            className="w-full p-3 border rounded-xl text-gray-800"
          />

          <input
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            placeholder="Ano"
			required
            className="w-full p-3 border rounded-xl text-gray-800"
          />

          <input
            value={episodios}
            onChange={(e) => setEpisodios(e.target.value)}
            placeholder="Episódios"
			required
            className="w-full p-3 border rounded-xl text-gray-800"
          />

          <input
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            placeholder="Gênero"
			required
            className="w-full p-3 border rounded-xl text-gray-800"
          />

          <input
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            placeholder="Nota"
			required
            className="w-full p-3 border rounded-xl text-gray-800"
          />

          <input
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Comentário"
			required
            className="w-full p-3 border rounded-xl text-gray-800"
          />

<div>
  <label className="block mb-2 font-medium text-gray-700">
    📷 Capa do Dorama
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={(e) =>
      setArquivo(e.target.files?.[0] || null)
    }
    className="w-full p-3 border rounded-xl text-gray-800"
  />
</div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-xl"
          >
            Cadastrar Dorama
          </button>

        </form>

      </div>
    </main>
  );
}