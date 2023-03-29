import React, { useState } from "react";

import styles from "./MessageForm.module.css";

const MessageForm = (props) => {
  const [enteredMessage, setEnteredMessage] = useState("");

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const messageData = {
      message: enteredMessage,
    };

    props.onSaveMessageData(messageData);
    setEnteredMessage("");
  };

  return (
    <main className={styles.main}>
      <form onSubmit={submitHandler}>
        <textarea value={enteredMessage} onChange={messageChangeHandler} />

        {props.isLoading && (
          <div align="center">
            <div className={styles.loader}></div>
          </div>
        )}

        <input
          type="submit"
          value="Send"
          disabled={props.isLoading}
          readOnly={props.isLoading}
          className={props.isLoading ? styles.buttonDisabled : ""}
        />
      </form>
    </main>
  );
};

export default MessageForm;
