import axios from "axios";
import { useEffect, useState } from "react";
const BACKEND_LINK = process.env.REACT_APP_BACKEND_LINK;

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${BACKEND_LINK}/auth/profile`, {
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
