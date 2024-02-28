function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="">Correo:</label>
        <input type="email" />

        <label htmlFor="">Contraseña:</label>
        <input type="password" />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Login;
