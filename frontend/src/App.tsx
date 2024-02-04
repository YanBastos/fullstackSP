import { useEffect, useState } from 'react'
import { FiTrash } from 'react-icons/fi'
import { api } from "./services/api"

interface customerPorps {
  id: string;
  name: string;
  email: string;
  status: boolean;
  created_at: string;
}

export default function App() {

  const [customers, setCustomers] = useState<customerPorps[]>([])

  useEffect(() => {
    loadCustomers();
  }, [])

  useEffect(() => {
    loadCustomers()
  }, [])

  async function loadCustomers() {
    const res = await api.get("/customers")
    setCustomers(res.data);
  }

  return (
    <div className="w-full min-h-screen bg-gray-700 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white m-2">Clientes</h1>

        <form className="flex flex-col my-6">
          <label className="font-medium text-white">Nome:</label>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            className="w-full mb-5 p-2 rounded" />

          <label className="font-medium text-white" >Email:</label>
          <input
            type="text"
            placeholder="Digite seu email:"
            className="w-full mb-5 p-2 rounded" />

          <input
            type="submit"
            value="Cadastrar"
            className="cursor-pointer w-full p-2  bg-green-500 font-medium rounded"
          />
        </form>

        <section className="flex flex-col gap-4">
          {customers.map((customer) => (
            <article
              key={customer.id}
              className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200">

              <p><span className="font-medium">Nome: </span>Mateus </p>
              <p><span className="font-medium">Email: </span>test@test</p>
              <p><span className="font-medium">Status: </span>Ativo</p>

              <button className='bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute -right-2 -top-2'>
                <FiTrash size={18} color='fff' />
              </button>
            </article>
          ))}
        </section>

      </main>
    </div>
  )
}