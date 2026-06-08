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

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {doramas?.map((dorama) => (
          <div
            key={dorama.id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 w-72"
          >
            <img
              src={dorama.capa_url}
              alt={dorama.titulo}
              className="w-full h-96 object-cover hover:scale-105 transition duration-500 cursor-pointer"
            />

            <div className="p-4">
              <h2 className="font-bold text-xl text-gray-800 line-clamp-2">
                {dorama.titulo}
              </h2>
			  <p className="text-gray-500 text-sm mt-2 line-clamp-3">
  {dorama.sinopse}
</p>

              <div className="flex items-center mt-2">
                <span className="text-yellow-500 font-bold">
                  ⭐ {dorama.nota_ana}/10
                </span>
              </div>

              <p className="text-pink-500 font-medium mt-2">
                💖 {dorama.genero}
              </p>

              <p className="text-gray-500 text-sm mt-3">
                📅 {dorama.ano}
              </p>

<Link
  href={`/dorama/${dorama.id}`}
  className="block w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl transition text-center"
>
  Ver detalhes
</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}