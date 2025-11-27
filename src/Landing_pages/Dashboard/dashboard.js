import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/auth/profile", {
        headers: { token },
      })
      .then((res) => {
        if (res.data.status) {
          setUser(res.data.user);
        }
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {user ? (
        <h2>Welcome, {user.email}</h2>
      ) : (
        <h2>Loading user...</h2>
      )}
    </div>
  );
}
