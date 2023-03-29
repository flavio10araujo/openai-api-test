import React from "react";

import MessageItem from "./MessageItem";
import styles from "./MessagesList.module.css";

const MessagesList = (props) => {
  if (props.items.length === 0) {
    return;
  }

  return (
    <ul className={styles.messagesList}>
      {props.items.map((message) => (
        <MessageItem
          key={message.id}
          role={message.role}
          content={message.content}
        />
      ))}
    </ul>
  );
};

export default MessagesList;
