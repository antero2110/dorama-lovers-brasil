import { supabase } from "@/src/lib/supabase";

export default async function Home() {
  const { data: doramas } = await supabase
    .from("doramas")
    .select("*");

  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <h1 className="text-5xl font-bold text-pink-600 text-center mb-8">
        ❤️ Dorama Lovers Brasil
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {doramas?.map((dorama) => (
          <div
            key={dorama.id}
            className="bg-white rounded-2xl shadow-lg p-4"
          >
            <img
              src={dorama.capa_url}
              alt={dorama.titulo}
              className="w-full h-80 object-cover rounded-xl"
            />

            <h2 className="text-xl font-bold mt-3">
              {dorama.titulo}
            </h2>

            <p className="text-yellow-500">
              ⭐ {dorama.nota_ana}/10
            </p>

            <p className="text-gray-600">
              {dorama.genero}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}