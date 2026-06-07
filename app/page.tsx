import { supabase } from "@/src/lib/supabase";
import BuscaDoramas from "./components/BuscaDoramas";

export default async function Home() {
  const { data: doramas, error } = await supabase
    .from("doramas")
    .select("*");

  return (
    <main>
      <pre>
        {JSON.stringify(
          {
            quantidade: doramas?.length,
            doramas,
            error,
          },
          null,
          2
        )}
      </pre>
    </main>
  );
}