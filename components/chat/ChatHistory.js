import Card from "../layout/Card";
import MessagesList from "./MessagesList";
import styles from "./ChatHistory.module.css";

const ChatHistory = (props) => {
  if (props.items.length === 0) {
    return;
  }

  return (
    <div>
      <Card className={styles.chatHistory}>
        <MessagesList items={props.items} />
      </Card>
    </div>
  );
};

export default ChatHistory;
