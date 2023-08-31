import React from "react";
import { BarChartLineFill, Stopwatch, Book } from "react-bootstrap-icons";

function Home(props) {
  return (
    <div>
      <div
        className="texture"
        style={{
          backgroundColor: "#ffe4c463",

          // marginTop: "-45px",
          padding: "20px",
          paddingBottom: "100px",
        }}
      >
        <h3
          style={{
            textDecoration: "underline",
            textAlign: "center",
            color: "GREEN",
            fontSize: "30px",
            marginTop: "30px",
          }}
        >
          WELCOME TO
        </h3>

        <h1 style={{ color: "black" }} className="anim">
          MY NOTES
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "60px",
          marginBottom:"60px"
          //   boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <div
          class="card text-center cardanim"
          style={{
            width: "40rem",
            backgroundColor: "#008000 ",
            color: "white",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div class="card-body">
            <h5 class="card-title" style={{ margin: "20px", fontSize: "20px" }}>
              ADD
            </h5>
            <BarChartLineFill color="royalblue" size={96} />

            <p class="card-text" style={{ margin: "20px", fontSize: "25px" }}>
              Add your notes here
            </p>
          </div>
        </div>

        <div
          class="card text-center cardanim "
          style={{
            width: "40rem",
            backgroundColor: "#008000 ",
            color: "white",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div class="card-body">
            <h5 class="card-title" style={{ margin: "20px", fontSize: "20px" }}>
              DELETE
            </h5>
            <Stopwatch color="royalblue" size={96} />
            <p class="card-text" style={{ margin: "20px", fontSize: "25px" }}>
              Delete your notes
            </p>
          </div>
        </div>
        <div
          class="card text-center cardanim"
          style={{
            width: "40rem",
            backgroundColor: "#008000",
            color: "white",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div class="card-body">
            <h5 class="card-title" style={{ margin: "20px", fontSize: "20px" }}>
              UPDATE
            </h5>
            <Book color="royalblue" size={96} />
            <p class="card-text" style={{ margin: "20px", fontSize: "25px" }}>
              Update your notes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
