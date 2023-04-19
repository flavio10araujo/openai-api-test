import React from "react";

import Card from "../layout/Card";
import styles from "./MessageItem.module.css";

const MessageItem = (props) => {
  return (
    <li>
      <Card className={styles.messageItem}>
        <div className={styles.messageItemDescription}>
          <div>
            <div className={styles.messageItemContent}>
              {props.role === "user" ? "You" : "Buddy"}: {props.content}
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default MessageItem;
