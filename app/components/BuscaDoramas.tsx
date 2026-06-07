"use client";
import Favoritar from "./Favoritar";
import { useState } from "react";
import Link from "next/link";

export default function BuscaDoramas({
  doramas,
}: {
  doramas: any[];
}) {
  const [busca, setBusca] = useState("");

  const filtrados = doramas.filter((dorama) =>
    dorama.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="🔍 Pesquisar dorama..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full mt-8 p-4 rounded-2xl border-2 border-pink-200 focus:border-pink-500 outline-none shadow-sm bg-white"
      />

      <div className="mt-10 grid gap-6">
        {filtrados.map((dorama) => (
          <div
            key={dorama.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex gap-6"
          >
            <img
              src={dorama.capa_url}
              alt={dorama.titulo}
              className="w-64 h-96 object-cover rounded-2xl shadow-xl hover:scale-105 transition"
            />

            <div className="flex-1">
              <h2 className="text-4xl font-bold text-pink-500">
                {dorama.titulo}
              </h2>

              <p className="mt-3 text-lg text-gray-800">
                {dorama.sinopse}
              </p>

              <div className="mt-4 bg-pink-50 p-4 rounded-xl">
                <p className="text-gray-700">
                  <span className="font-bold text-pink-500">
                    📅 Ano:
                  </span>{" "}
                  {dorama.ano}
                </p>

                <p className="text-gray-700">
                  <span className="font-bold text-pink-500">
                    🎬 Episódios:
                  </span>{" "}
                  {dorama.episodios}
                </p>

                <p className="text-gray-700">
                  <span className="font-bold text-pink-500">
                    🎭 Gênero:
                  </span>{" "}
                  {dorama.genero}
                </p>
              </div>

              <div className="mt-4 text-yellow-500 text-4xl">
                ⭐⭐⭐⭐⭐
              </div>

              <div className="mt-4 inline-block bg-yellow-100 px-4 py-2 rounded-xl">
                <strong className="text-yellow-700">
                  ⭐ Nota da Ana:
                </strong>{" "}
                {dorama.nota_ana}/10
              </div>

              <div className="mt-3 italic text-gray-700 text-lg">
                "{dorama.comentario_ana}"
              </div>

              <div className="mt-4 flex gap-4 text-sm text-gray-600">
                <span>❤️ 245 favoritos</span>
                <span>👁️ 1.2k visualizações</span>
              </div>

              <div className="mt-6 flex gap-3">
<Favoritar doramaId={dorama.id} />

                <Link
                  href={`/dorama/${dorama.id}`}
                  className="bg-purple-500 text-white px-5 py-3 rounded-xl shadow-md hover:bg-purple-600 transition"
                >
                  📖 Ver detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}

        {filtrados.length === 0 && (
          <div className="bg-white p-8 rounded-2xl text-center shadow">
            <p className="text-gray-500 text-lg">
              Nenhum dorama encontrado 😢
            </p>
          </div>
        )}
      </div>
    </>
  );
}