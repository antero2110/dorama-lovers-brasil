export default async function Home() {
  const { data: doramas, error } = await supabase
    .from("doramas")
    .select("*");

  console.log("DORAMAS:", doramas);
  console.log("ERRO:", error);

  return (
    <main>
      <pre>
        {JSON.stringify({ doramas, error }, null, 2)}
      </pre>
    </main>
  );
}