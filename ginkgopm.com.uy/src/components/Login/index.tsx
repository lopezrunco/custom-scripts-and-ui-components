import React, { useState } from "react";

interface LoginProps {
  onPasswordCorrect: () => void;
}

const Login: React.FC<LoginProps> = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const galleryPassword = import.meta.env.VITE_APP_PASSWORD;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === galleryPassword) {
      onPasswordCorrect();
    } else {
      setError("La contrasena es incorrecta. Intente nuevamente.");
    }
  };

  return (
    <div className="login">
      <h3>
        Ingrese la contraseña que le fué proporcionada para ver los videos
      </h3>
      <form onSubmit={handleSubmit}>
        <label>
          Contrasena:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
      {error && <span className="login-error">{error}</span>}
    </div>
  );
};

export default Login;
