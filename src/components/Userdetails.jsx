import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './userdetails.css'
function Userdetails() {
  const { id } = useParams(); // Get user ID from URL
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch user:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading user details...</h2>;
  if (!user) return <h2>User not found.</h2>;

  return (
   <div id="user-details-container">
  <h1 id="user-title">Hello, {user.name} your full details</h1>

  <p id="user-name"><strong>Name:</strong> {user.name}</p>
  <p id="user-username"><strong>Username:</strong> {user.username}</p>
  <p id="user-email"><strong>Email:</strong> {user.email}</p>
  <p id="user-phone"><strong>Phone:</strong> {user.phone}</p>
  <p id="user-website">
    <strong>Website:</strong>{" "}
    <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
      {user.website}
    </a>
  </p>

  <h3 id="address-title">Address</h3>
  <p id="address-suite">{user.address?.suite}</p>
  <p id="address-street">{user.address?.street}</p>
  <p id="address-city">{user.address?.city}</p>
  <p id="address-zipcode">{user.address?.zipcode}</p>

  <h3 id="company-title">Company</h3>
  <p id="company-name"><strong>{user.company?.name}</strong></p>
  <p id="company-catchphrase">{user.company?.catchPhrase}</p>
  <p id="company-bs">{user.company?.bs}</p>
</div>
  );
}

export default Userdetails;