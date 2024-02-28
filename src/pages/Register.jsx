function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);

    fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre:</label>
        <input name="name" type="text" />

        <label htmlFor="">Correo:</label>
        <input name="email" type="email" />

        <label htmlFor="">Contraseña:</label>
        <input name="password" type="password" />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
