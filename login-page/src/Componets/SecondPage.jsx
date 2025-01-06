 // const [formData, setFormData] = useState(null);

  // useEffect(() => {
  //   // Check if there's existing data in local storage
  //   const savedData = localStorage.getItem("formData");

  //   if (savedData) {
  //     // If data exists, load it
  //     setFormData(JSON.parse(savedData));
  //   }
  // }, []);

export default function SecondPage({formData}) {
 

        
  return (
    <div>
      {formData ? (
        <div>
          <h1>Form Data</h1>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
        </div>
      ) : (
        <p>No form data found.</p>
      )}
    </div>
  );
}
