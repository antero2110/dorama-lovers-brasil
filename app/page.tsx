import { supabase } from "@/src/lib/supabase";
import BuscaDoramas from "./components/BuscaDoramas";

export default async function Home() {
  const { data: doramas } = await supabase
    .from("doramas")
    .select("*")
    .order("id");

  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-pink-600">
          💖 Dorama Lovers Brasil
        </h1>

        <p className="text-center text-gray-800 mt-4 text-xl">
          Descubra, avalie e acompanhe seus doramas favoritos
        </p>

        <BuscaDoramas doramas={doramas || []} />
      </div>
    </main>
  );
}