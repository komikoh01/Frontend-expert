import React, { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  description: string;
};

function FirstForm() {
  const [form, setForm] = useState<FormValues>({
    name: "",
    email: "",
    description: "",
  });
  const [error, setError] = useState<{
    name?: String;
    email?: string;
    description?: string;
  }>({});

  return (
    <form className=" flex flex-col bg-indigo-800 px-8 py-3 rounded-2xl gap-7">
      <div className=" flex flex-col gap-2 justify-center items-center">
        <label htmlFor="nombre">Nombre</label>
        <input
          value={form.name}
          type="text"
          name="nombre"
          id="nombre"
          className=" focus:border-t-red-500 border-2 border-red-500"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            {
                const size = e.target.value.trim().length
                setForm((prev) => ({ ...prev, name: e.target.value }))
                setError(prev => ({...prev, name: size === 1 ? "El nombre debe tener mas de 1 caracter": undefined}))
            }
          }
        />
        <p className=" text-red-500 font-semibold text-lg">{error.name}</p>
      </div>

      <div className=" flex flex-col gap-2 justify-center items-center">
        <label htmlFor="email">Email</label>
        <input
          value={form.email}
          type="email"
          name="email"
          id="email"
          className=" focus:border-t-indigo-500"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      
      <div className=" flex flex-col gap-2 justify-center items-center">
        <label htmlFor="descripcion">Description</label>
        <textarea
          value={form.description}
          name="descripcion"
          id="descripcion"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setForm((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </div>
    </form>
  );
}

export default FirstForm;
