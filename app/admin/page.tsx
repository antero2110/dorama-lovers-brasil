
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabase";

export default function AdminPage() {
	const [logado, setLogado] = useState(false);
const [senha, setSenha] = useState("");
  const [titulo, setTitulo] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [ano, setAno] = useState("");
  const [episodios, setEpisodios] = useState("");
  const [genero, setGenero] = useState("");
  const [nota, setNota] = useState("");
  const [comentario, setComentario] = useState("");
  const [capaUrl, setCapaUrl] = useState("");
const [arquivo, setArquivo] = useState<File | null>(null);
const [doramas, setDoramas] = useState<any[]>([]);
function entrar() {
  if (senha === "21232900@Maite") {
    setLogado(true);
  } else {
    alert("Senha incorreta");
  }
}
useEffect(() => {
  carregarDoramas();
}, []);
async function carregarDoramas() {
  const { data } = await supabase
    .from("doramas")
    .select("*")
    .order("id", { ascending: false });
	async function excluirDorama(id: number) {
  const confirmar = confirm(
    "Tem certeza que deseja excluir este dorama?"
  );

  if (!confirmar) return;

  const { error } = await supabase
    .from("doramas")
    .delete()
    .eq("id", id);

  if (error) {
    alert(error.message);
    return;
  }

  carregarDoramas();
}

  setDoramas(data || []);
}
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
carregarDoramas();
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
if (!logado) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">
          🔒 Área Administrativa
        </h1>

        <input
          type="password"
          placeholder="Digite a senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-3 border rounded-xl text-gray-800"
        />

        <button
          onClick={entrar}
          className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-xl"
        >
          Entrar
        </button>

      </div>
    </main>
  );
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
<div className="mt-10">
  <h2 className="text-2xl font-bold text-pink-600 mb-4">
    📚 Doramas Cadastrados
  </h2>

  <div className="space-y-4">
    {doramas.map((dorama) => (
      <div
        key={dorama.id}
        className="border rounded-xl p-4 flex justify-between items-center"
      >
        <div>
          <h3 className="font-bold text-gray-800">
            {dorama.titulo}
          </h3>

          <p className="text-gray-500">
            ⭐ {dorama.nota_ana}/10
          </p>
        </div>

        <button
          onClick={() => excluirDorama(dorama.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
        >
          🗑️ Excluir
        </button>
      </div>
    ))}
  </div>
</div>
      </div>
    </main>
  );
}