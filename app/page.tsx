import { supabase } from "@/src/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("doramas")
    .select("*");

  return (
    <pre>
      {JSON.stringify(
        {
          url: process.env.NEXT_PUBLIC_SUPABASE_URL,
          data,
          error,
        },
        null,
        2
      )}
    </pre>
  );
}