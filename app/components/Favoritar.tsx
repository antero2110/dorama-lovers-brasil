"use client";

import { supabase } from "@/src/lib/supabase";

export default function Favoritar({
  doramaId,
}: {
  doramaId: number;
}) {
  async function favoritar() {
    const { error } = await supabase
      .from("favoritos")
      .insert({
        dorama_id: doramaId,
      });

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    alert("❤️ Favoritado com sucesso!");
  }

  return (
    <button
      onClick={favoritar}
      className="bg-pink-500 text-white px-5 py-3 rounded-xl hover:bg-pink-600"
    >
      ❤️ Favoritar
    </button>
  );
}
