const UserForm = () => {
  const handleSbmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("create successfully");
        form.reset();
        console.log(data);
      });
  };
  return (
    <div>
      <form onSubmit={handleSbmit}>
        <input type="text" placeholder="Name" name="name"></input>
        <br />
        <input type="text" placeholder="email" name="email" required></input>
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default UserForm;
