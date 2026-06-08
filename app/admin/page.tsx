export default function AdminPage() {
  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl">

        <h1 className="text-4xl font-bold text-pink-600 mb-6">
          ➕ Cadastrar Dorama
        </h1>

        <form className="space-y-4">

          <input
            placeholder="Título"
            className="w-full p-3 border rounded-xl text-gray-800 placeholder:text-gray-400"
          />

<textarea
  placeholder="Sinopse"
  className="w-full p-3 border rounded-xl text-gray-800 placeholder:text-gray-400"
/>

          <input
            placeholder="Ano"
            className="w-full p-3 border rounded-xl text-gray-800 placeholder:text-gray-400"
          />

          <input
            placeholder="Episódios"
            className="w-full p-3 border rounded-xl text-gray-800 placeholder:text-gray-400"
          />

          <input
            placeholder="Gênero"
            className="w-full p-3 border rounded-xl text-gray-800 placeholder:text-gray-400"
          />

          <input
            placeholder="Nota"
            className="w-full p-3 border rounded-xl text-gray-800 placeholder:text-gray-400"
          />

          <input
            placeholder="Comentário"
            className="w-full p-3 border rounded-xl text-gray-800 placeholder:text-gray-400"
          />

          <input
            placeholder="URL da capa"
            className="w-full p-3 border rounded-xl text-gray-800 placeholder:text-gray-400"
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-4 rounded-xl"
          >
            Cadastrar Dorama
          </button>

        </form>

      </div>
    </main>
  );
}