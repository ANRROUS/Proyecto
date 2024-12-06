import { useForm } from 'react-hook-form';
import { useAuth } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import loginImgae from '../assets/images/loginimg.jpg';

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { singin, errors: singinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    singin(data);
  })

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated])


  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center bg-gradient-to-r from-indigo-400 to-indigo-600">
      <div className="flex max-w-4xl w-full bg-zinc-900 rounded-lg shadow-lg overflow-hidden">
        {/* izquierda*/}
        <div className="flex flex-col justify-center w-1/2 p-12 transform transition duration-300 hover:scale-105">
          {singinErrors.map((error, i) => (
            <div className="bg-red-600 text-white p-2 rounded mb-2" key={i}>
              {error}
            </div>
          ))}
          <h1 className="text-3xl font-bold text-white mb-6">Iniciar Sesión</h1>

          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <input
                type="email"
                {...register('email', { required: true })}
                className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2 focus:ring-2 focus:ring-indigo-500 outline-none transition duration-200"
                placeholder="Correo electrónico"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">El correo es requerido</p>
              )}
            </div>

            <div className="mb-6">
              <input
                type="password"
                {...register('password', { required: true })}
                className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2 focus:ring-2 focus:ring-indigo-500 outline-none transition duration-200"
                placeholder="Contraseña"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">La contraseña es requerida</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-md shadow-md transition duration-200 transform hover:scale-105"
            >
              Iniciar Sesión
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-4 text-center">
            ¿No tienes una cuenta?
            <Link to="/register" className="text-sky-500 hover:underline ml-1">
              Regístrate
            </Link>
          </p>
        </div>

        {/* derecha */}
        <div className="w-1/2">
          <img
            src={loginImgae}
            alt="Imagen ilustrativa"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );


}

export default LoginPage
