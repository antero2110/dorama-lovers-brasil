import Link from "next/link";
import { supabase } from "@/src/lib/supabase";

export default async function Home() {
  const { data: doramas } = await supabase
    .from("doramas")
    .select("*");

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100">
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-6xl font-bold text-pink-600">
          ❤️ Dorama Lovers Brasil
        </h1>

        <p className="text-gray-600 mt-4 text-xl">
          Descubra, avalie e acompanhe seus doramas favoritos
        </p>
      </div>

      {/* Busca */}
      <div className="max-w-4xl mx-auto px-4 mb-10">
<input
  type="text"
  placeholder="🔍 Pesquisar dorama..."
  className="w-full p-4 rounded-2xl border-2 border-pink-200 shadow-md focus:outline-none focus:border-pink-500 text-gray-800 placeholder:text-gray-400"
 />
      </div>
<div className="max-w-7xl mx-auto px-4 mb-8">
  <h2 className="text-3xl font-bold text-pink-600">
    🌸 Doramas Cadastrados
  </h2>

  <p className="text-gray-500 mt-2">
    Confira as avaliações da Ana e descubra novos doramas.
  </p>
</div>
      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
{doramas?.map((dorama) => (
  <Link
    key={dorama.id}
    href={`/dorama/${dorama.id}`}
    className="block"
  >
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 hover:-translate-y-3 hover:shadow-pink-300 hover:shadow-2xl transition-all duration-300 w-72 cursor-pointer border border-pink-100">
            <img
              src={dorama.capa_url}
              alt={dorama.titulo}
              className="w-full h-96 object-cover hover:scale-105 transition duration-500 cursor-pointer"
            />

            <div className="p-4">
              <h2 className="font-bold text-xl text-gray-800 line-clamp-2">
                {dorama.titulo}
              </h2>
<p className="text-gray-500 text-sm mt-2 h-16 overflow-hidden">
  {dorama.sinopse}
</p>

              <div className="flex items-center mt-2">
                <span className="text-yellow-500 font-bold">
                  ⭐ {dorama.nota_ana}/10
                </span>
              </div>

<div className="mt-2">
  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
    {dorama.genero}
  </span>
</div>

              <p className="text-gray-500 text-sm mt-3">
                📅 {dorama.ano}
              </p>

            </div>
    </div>
  </Link>
))}
      </div>
    </main>
  );
}