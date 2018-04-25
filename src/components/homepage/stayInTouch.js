import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./stayInTouch.css";

const Container = styled.div`
  text-align: center;
`;

const ActionSection = styled.div`
  display: flex;
  justify-content: center;
`;

const InputBox = styled.input`
  border-color: ${props => (props.status === "ready" ? "#c7c7c7" : "#e88c8c")};
  box-shadow: ${props =>
    props.status === "ready" ? "" : "0px 0px 4px #e88c8c"};
  border-style: solid;
  height: 52px;
  width: 380px;
  text-align: center;

  &:placeholder-shown {
    font-style: italic;
  }
`;

const SubmitButton = styled.button`
  background-color: ${props => getButtonAttrs(props.submitStatus).color};
  height: 52px;
  color: white;
  text-transform: uppercase;
  padding: 0 30px;
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-size: 18px;
  border: none;
  margin-left: 5px;

  &:hover {
    background-color: ${props => getButtonAttrs(props.submitStatus).hover};
    cursor: ${props => getButtonAttrs(props.submitStatus).cursor};
  }

  &:focus {
    outline: 0;
  }
`;

const getButtonAttrs = submitStatus => {
  switch (submitStatus) {
    case "pending":
      return { color: "#bfbfbf", hover: "#bfbfbf", cursor: "not-allowed" };
    default:
      return { color: "#54c5a6", hover: "#64d1a9", cursor: "pointer" };
  }
};

const postEmail = email => {
  return fetch("/.netlify/functions/googleSheets", {
    body: {"email": email},
    headers: {'content-type': 'application/json'},
    method: 'POST',
  });
};

class StayInTouch extends React.Component {
  constructor() {
    super();
    this.state = {
      submitStatus: "ready",
      input: "",
      inputStatus: "ready",
      inputPlaceholder: "alexandra@gmail.com"
    };
  }

  clearBox = context => {
    this.setState({ inputStatus: "ready", inputPlaceholder: " " });
  };

  handleTyping = event => {
    this.setState({ input: event.target.value });
  };

  storeEmail = () => {
    if (this.state.submitStatus !== "ready") return;
    if (!this.state.input || !document.querySelector("input").validity.valid) {
      this.setState({ inputStatus: "invalid" });
    } else {
      this.setState({ submitStatus: "pending" });
      postEmail(this.state.input)
        .then(response => {
          console.log(response);
          if (response.ok) {
            toast.success("👍 Email subscribed!", {
              className: "react-toast-success react-toast-common"
            });
            this.setState({ input: "ᕕ( ᐛ )ᕗ" });
          } else {
            toast.error("💥 There was an error.", {
              className: "react-toast-error react-toast-common"
            });
          }
        })
        .catch(err => console.log(err))
        .finally(() => {
          this.setState({ submitStatus: "ready" });
        });
    }
  };

  render() {
    return (
      <Container>
        <p>
          Enter your email to signup for our regular newsletter. You’ll recieve
          updates like church announcements, bible studies, upcoming events, and
          fun things happening at Calvary Stockholm.
        </p>
        <ActionSection>
          <InputBox
            type="email"
            onFocus={this.clearBox}
            placeholder={this.state.inputPlaceholder}
            value={this.state.input}
            onChange={this.handleTyping}
            status={this.state.inputStatus}
          />
          <SubmitButton
            onClick={this.storeEmail}
            submitStatus={this.state.submitStatus}
          >
            Submit
          </SubmitButton>
        </ActionSection>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </Container>
    );
  }
}

export default StayInTouch;
