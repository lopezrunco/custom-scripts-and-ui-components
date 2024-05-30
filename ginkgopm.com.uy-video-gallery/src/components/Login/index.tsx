import React, { useState } from "react";

interface LoginProps {
  onPasswordCorrect: () => void;
}

const Login: React.FC<LoginProps> = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassWord, setShowPassWord] = useState(false);

  const galleryPassword = import.meta.env.VITE_APP_PASSWORD;
  const alternatePassword = import.meta.env.VITE_APP_ALT_PASSWORD;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === galleryPassword || password === alternatePassword) {
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
          <div className="input-group">
            <input
              type={showPassWord ? "text" : "password"} // Show password or not
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password-input"
            />
            <i
              className={showPassWord ? "fas fa-eye-slash" : "fas fa-eye"}
              onClick={() => setShowPassWord(!showPassWord)}
            ></i>
          </div>
        </label>
        <button type="submit">
          Entrar <i className="fas fa-chevron-right"></i>
        </button>
      </form>
      {error && <span className="login-error">{error}</span>}
    </div>
  );
};

export default Login;
