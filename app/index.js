'use client'

import Head from "next/head";
import Sidebar from "./Component/Sidebar";
import styled from "@emotion/styled";
import Image from "next/image";

export default function Home() {
  const rotateCardBack = () => {
    const back = document.getElementById("back");
    const front = document.getElementById("front");

    front.style.transform = `rotateY(-180deg)`;
    back.style.transform = "rotateY(0)";
  };

  const rotateCardFront = () => {
    const back = document.getElementById("back");
    const front = document.getElementById("front");

    front.style.transform = `rotateY(0)`;
    back.style.transform = "rotateY(-180deg)";
  };

  return (
    <div>
      <Head>
        <title>Home | Whatsapp Clone</title>
        <meta name="description" content="developed by Amardeep" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultContainer>
        <Sidebar />
        <DefaultHome className="mdHidden">
          <div className="card mdHidden">
            <div className="card__side  card__side--back" id="back">
              <div className="backtofront" onClick={rotateCardFront}>
                &larr;
              </div>
              <h4
                style={{
                  margin: "8rem 3rem 0 3rem",
                  fontSize: "2rem",
                  borderBottom: "1px solid gray",
                  paddingBottom: ".7rem",
                  letterSpacing: ".6px",
                }}
              >
                Current Features :
              </h4>
              <ul
                style={{
                  fontSize: 15.5,
                  color: "#343A40",
                  margin: "1.5rem 0 0 5.5rem",
                  lineHeight: 1.6,
                }}
              >
                <li>Login & Logout</li>
                <li>Add Chat</li>
                <li>Search Chat</li>
                <li>Delete Chat</li>
                <li>Chat with individual user</li>
                <li>Send Emoji&apos;s</li>
                <li>Auto scroll to last message</li>
                <li>
                  <a
                    href="https://github.com/Ajay-056/Whatsapp-Clone-NextJS/tags"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here to see the release change log...
                  </a>
                </li>
              </ul>
              <h4
                style={{
                  margin: "2.5rem 3rem 0 3rem",
                  fontSize: "2rem",
                  borderBottom: "1px solid gray",
                  paddingBottom: ".7rem",
                  letterSpacing: ".6px",
                }}
              >
                Upcoming Features :
              </h4>
              <ul
                style={{
                  fontSize: 15.5,
                  color: "#343A40",
                  margin: "1.5rem 0 0 5.5rem",
                  lineHeight: 1.6,
                }}
              >
                <li>Typing Indication</li>
                <li>Date Wise Chat Splitup</li>
                <li>Sort Chat list by recent message</li>
                <li>Mobile version</li>
              </ul>
              <p
                style={{
                  borderBottom: "1px solid gray",
                  margin: "2.5rem 3rem 0 3rem",
                }}
              ></p>
              <p
                style={{
                  textAlign: "center",
                  display: "flex",
                  marginTop: "1rem",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://github.com/Ajay-056/Whatsapp-Clone-NextJS"
                  target="_blank noreferrer"
                >
                  <Image
                    src="/icons8-github.svg"
                    alt="github"
                    height={40}
                    width={40}
                  />
                </a>
                <a
                  href="https://www.twitter.com/balaajay19"
                  target="_blank noreferrer"
                >
                  <Image
                    src="/icons8-twitter-48.png"
                    alt="twitter"
                    height={40}
                    width={40}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajay-krishna-065a1a162"
                  target="_blank noreferrer"
                >
                  <Image
                    src="/icons8-linkedin-48.png"
                    alt="linkedin"
                    height={40}
                    width={40}
                  />
                </a>
              </p>
            </div>
            <div className="card__side card__side--front" id="front">
              <h3
                style={{
                  margin: "2rem 15rem -13px 15rem",
                  fontSize: "2.5rem",
                  border: "3.5px solid",
                  borderImageSlice: 1,
                  borderImageSource:
                    "linear-gradient(to left, #743ad5, #d53a9d)",
                  display: "inline-block",
                  padding: ".6rem",
                }}
              >
                Hi There ! 👋👋👋
              </h3>

              <p
                style={{
                  margin: "5rem 3rem 2rem 3rem",
                  letterSpacing: "0px",
                  fontSize: "1.6rem",
                  lineHeight: 1.5,
                  color: "#212529",
                  textAlign: "left",
                }}
              >
                Welcome to the Whatsapp clone made from Next JS, React JS and
                Firebase. This was originally developed by{" "}
                <a
                  href="https://www.youtube.com/user/ssangha32"
                  rel="noreferrer"
                  target="_blank"
                  style={{ color: "#006aff", cursor: "pointer" }}
                >
                  @Sonny Sangha
                </a>{" "}
                and enhanced by me further.
              </p>
              <p
                style={{
                  margin: "2rem 3rem 2rem 3rem",
                  fontSize: "1.6rem",
                  letterSpacing: "0px",
                  lineHeight: 1.5,
                  color: "#212529",
                  textAlign: "left",
                }}
              >
                Checkout the other clone&apos;s developed by Sonny Sangha
                he&apos;s really cool. To view the Initial and original version
                inspired from Sonny Sangha{" "}
                <a
                  href="https://baseline-whatsapp-clone-next-js.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#006aff", cursor: "pointer" }}
                >
                  Click here. . .
                </a>{" "}
              </p>
              <p
                style={{
                  margin: "2rem 3rem 2rem 3rem",
                  fontSize: "1.6rem",
                  letterSpacing: "0px",
                  lineHeight: 1.5,
                  color: "#212529",
                  textAlign: "left",
                }}
              >
                The main intention for me to create this project is for learning
                React JS and Next JS. This project really helped me to start my
                journey in React JS and Next JS.
              </p>
              <p
                style={{
                  margin: "2rem 3rem 2rem 3rem",
                  fontSize: "1.6rem",
                  letterSpacing: "0px",
                  lineHeight: 1.5,
                  color: "#212529",
                  textAlign: "left",
                }}
              >
                Im enhancing this regulary on weekends. Hope you like this.
                Please let me know if you find any bugs or feature requests by
                creating issue in this project repository.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "5rem",
                }}
              >
                <button
                  type="button"
                  className="btn"
                  onClick={rotateCardBack}
                  style={{
                    padding: "1.2rem 2rem",
                    backgroundColor: "rebeccapurple",
                    border: "0px",
                    outline: 0,
                    color: "#fff",
                    borderRadius: "5px",
                    fontSize: "1.7rem",
                    cursor: "pointer",
                  }}
                >
                  Know More &rarr;
                </button>
              </div>
            </div>
          </div>
        </DefaultHome>
      </DefaultContainer>
    </div>
  );
}

const DefaultContainer = styled.div`
  display: flex;
`;

const DefaultHome = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

// const InfoBox = styled.div`
//   height: 60rem;
//   width: 56rem;
//   background-color: #99d98c;
//   font-weight: 500;
//   font-size: 1.4rem;
//   border-radius: 1rem;
//   box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.19);
// `;