const Person = () => {
  const persons = [
    {
      name: "Satish Kumar",
      age: 25,
      email: "satishsingh8757@gmail.com",
    },
  ];
  return (
    <div>
      <h1>Name : {persons[0].name}</h1>
      <h2>Age : {persons[0].age}</h2>
      <h2>Email : {persons[0].email}</h2>
    </div>
  );
};

export default Person;
