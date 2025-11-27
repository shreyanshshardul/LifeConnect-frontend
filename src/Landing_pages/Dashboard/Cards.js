import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cards.css";

export default function Cards({ search }) {
  const [donors, setDonors] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [mergedCards, setMergedCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCards, setFilteredCards] = useState([]);

  // 🔹 Fetch data once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const donorRes = await axios.get("http://localhost:8080/cards/donar");
        const recRes = await axios.get("http://localhost:8080/cards/recipient");

        setDonors(donorRes.data.donors || []);
        setRecipients(recRes.data.recipient || []);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔹 Merge donors + recipients
  useEffect(() => {
    const temp = [];
    const maxLen = Math.max(donors.length, recipients.length);

    for (let i = 0; i < maxLen; i++) {
      if (donors[i]) temp.push({ ...donors[i], type: "donor" });
      if (recipients[i]) temp.push({ ...recipients[i], type: "recipient" });
    }

    setMergedCards(temp);
  }, [donors, recipients]);

  // 🔹 Filter cards based on search input
  useEffect(() => {
    const searchText = search?.trim().toLowerCase() || "";

    const filtered = mergedCards.filter((u) => {
      if (!u) return false;
      const name = u.name?.toLowerCase() || "";
      const city = u.city?.toLowerCase() || "";
      const bg = u.blood_group?.toLowerCase() || "";
      const type = u.type?.toLowerCase() || "";

      return (
        name.includes(searchText) ||
        city.includes(searchText) ||
        bg.includes(searchText) ||
        type.includes(searchText)
      );
    });

    setFilteredCards(filtered);
  }, [search, mergedCards]); // 🔹 update when search or mergedCards change

  if (loading) {
    return <h2 className="text-center text-white mt-5">Loading...</h2>;
  }

  return (
    <div className="parallax-bg">
      <div className="container card-container">
        <h2 className="cards-heading text-center mb-5">
          Available Donors & Recipients
        </h2>

        <div className="row g-4 justify-content-center">
          {filteredCards.length === 0 && (
            <h4 className="text-center text-white">No results found</h4>
          )}

          {filteredCards.map((user, index) => (
            <div
              key={index}
              className="col-sm-10 col-md-6 col-lg-4 d-flex justify-content-center"
            >
              <div
                className={`card card-custom shadow-lg ${
                  user.type === "donor" ? "donor-card" : "recipient-card"
                }`}
              >
                <span
                  className={`badge-tag ${
                    user.type === "donor" ? "donor-badge" : "recipient-badge"
                  }`}
                >
                  {user.type === "donor" ? "Donor" : "Recipient"}
                </span>

                <img src="/logo.png" alt="profile" className="card-img-top" />

                <div className="card-body text-center">
                  <h4 className="fw-bold mb-2">{user.name}</h4>

                  <p className="m-0 fs-6">
                    <strong>Age:</strong> {user.age} | <strong>City:</strong>{" "}
                    {user.city}
                  </p>

                  <p className="mt-2 fs-6">
                    {user.type === "donor"
                      ? `Blood Group: ${user.blood_group}`
                      : `Required: ${user.blood_group}`}
                  </p>

                  <button className="contact-btn mt-2">Contact me</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
