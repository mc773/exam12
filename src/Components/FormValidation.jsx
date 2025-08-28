import React, { useState } from 'react';

function FormValidation() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Ism to'ldirilishi shart";
    if (!form.email) {
      newErrors.email = "Email kiritilishi shart";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email formati noto‘g‘ri";
    }

    if (!form.password) {
      newErrors.password = "Parol to‘ldirilishi kerak";
    } else if (form.password.length < 6) {
      newErrors.password = "Parol kamida 6 belgidan iborat bo‘lishi kerak";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form yuborildi!');
      setForm({ name: '', email: '', password: '' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Ro‘yxatdan o‘tish</h2>

        <div className="mb-4">
          <input
            name="name"
            placeholder="Ism"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <input
            type="password"
            name="password"
            placeholder="Parol"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
}

export default FormValidation;
