import { supabase } from "@/src/lib/supabase";

export default async function DoramaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: dorama } = await supabase
    .from("doramas")
    .select("*")
    .eq("id", id)
    .single();

  if (!dorama) {
    return <h1>Dorama não encontrado</h1>;
  }

  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="flex gap-8">

            <img
              src={dorama.capa_url}
              alt={dorama.titulo}
              className="w-80 rounded-2xl shadow-lg"
            />

            <div>

              <h1 className="text-5xl font-bold text-pink-600">
                {dorama.titulo}
              </h1>

              <div className="mt-6 text-lg text-gray-800">
                <p>
                  <strong>📅 Ano:</strong> {dorama.ano}
                </p>

                <p>
                  <strong>🎬 Episódios:</strong> {dorama.episodios}
                </p>

                <p>
                  <strong>🎭 Gênero:</strong> {dorama.genero}
                </p>
              </div>

              <div className="mt-6 text-yellow-500 text-4xl">
                ⭐⭐⭐⭐⭐
              </div>

              <div className="mt-4 text-xl text-gray-800">
                <strong>Nota da Ana:</strong> {dorama.nota_ana}/10
              </div>

              <div className="mt-3 italic text-gray-700">
                "{dorama.comentario_ana}"
              </div>

            </div>

          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-bold text-pink-500">
              📖 Sinopse
            </h2>

            <p className="mt-4 text-lg text-gray-800">
              {dorama.sinopse}
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}