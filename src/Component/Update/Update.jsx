import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData();
  const handleUpadate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = { name, email };
    console.log(name, email);

    fetch(`http://localhost:5000/user/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Update Successfully");
        }
      });
  };

  return (
    <div>
      <h2>Update Information of {loadedData.name}</h2>
      <form onSubmit={handleUpadate}>
        <input type="text" name="name" defaultValue={loadedData.name} />
        <br />
        <input type="text" name="email" defaultValue={loadedData.email} />
        <br />
        <input type="submit" value="Upadate" />
      </form>
    </div>
  );
};

export default Update;
