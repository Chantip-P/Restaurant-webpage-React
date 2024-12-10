import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import FoodCard from "./FoodCard";
import foodCategoriesData from '../data/food.json'

const Homepage = () => {
  const [desserts, setDesserts] = useState(foodCategoriesData.desserts);
  return (
    <>
      <Nav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          width: "100vw",
          overflowY: "auto",
        }}
      >
        <div style={{ overflow: "hidden", height: "100vh", width: "100vw" }}>
          <img
            src="public/cover.jpg"
            alt="Cover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div
        style={{
          margin: 50,
          flexDirection: "column",
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            margin: "10px",
            flexDirection: "column",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "800px",
            fontSize: "38px",
            lineHeight: "1.5",
            color: "#333",
          }}
        >
          Welcome to the Official Website of{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            Fluffy McWhiskers, Supreme Cat Overlord!
          </span>
          Meow-lo there, humans! 🐾
        </h1>

        <p
          style={{
            margin: 10,
            flexDirection: "column",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          You’ve just stumbled upon the most important, most purr-fect place on
          the internet – my kingdom. I'm Fluffy McWhiskers, the one and only cat
          who rules this entire domain. I may be napping right now, but that
          doesn’t mean you shouldn’t scroll around and bask in my glory.
        </p>
        <div
          style={{
            width: "100%",
            maxWidth: "300px",
            aspectRatio: "1 / 1",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <img
            src="public/cat.jpg"
            alt="Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div
        style={{
          flex: 1,
          height: "1px",
          backgroundColor: "#ccc",
          marginRight: "10px",
        }}
      />

      <div
        style={{
          flexDirection: "column",
          margin: 50,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Special Promotions</h2>
      </div>

      <div
        style={{
          margin: 50,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {desserts.map((food, index) => (
          <FoodCard
            key={index}
            imageSrc={food.imageSrc}
            nameTh={food.nameTh}
            nameEn={food.nameEn}
            price={food.price}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
