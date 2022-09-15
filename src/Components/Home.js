import React from "react"

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="centerTitle">
          <div className="mainTable">
            <div className="row">
              <div className="mainHeader">
                <h1>Website teste para Eleven Dragons</h1>
              </div>
            </div>
            <div className="row">
              <div className="columnHalf">
                <h3>Desenvolvido por</h3>
              </div>
              <div className="columnHalf">
                <p>Kevin Kenji Ishii</p>
              </div>
            </div>
            <div className="row">
              <div className="columnHalf">
                <h3>E-mail</h3>
              </div>
              <div className="columnHalf">
                <a
                  style={{ color: "#ffde59" }}
                  href="mailto:kevinkishii@gmail.com"
                >
                  kevinkishii@gmail.com
                </a>
              </div>
            </div>
            <div className="row">
              <div className="columnHalf">
                <h3>Telefone</h3>
              </div>
              <div className="columnHalf">
                <p>{"(11) 9 7605-3897"}</p>
              </div>
            </div>
            <div className="row">
              <div className="columnHalf">
                <h3>Linkedin</h3>
              </div>
              <div className="columnHalf">
                <a
                  style={{ color: "#ffde59" }}
                  href="https://www.linkedin.com/in/kevinkishii/"
                  target="_blank"
                >
                  kevinkishii
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
