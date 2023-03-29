import MessageForm from "./MessageForm";
import "./NewMessage.module.css";

const NewMessage = (props) => {
  const saveMessageDataHandler = (enteredMessageData) => {
    const newMessage = {
      content: enteredMessageData.message,
    };

    props.onAddMessage(newMessage);
  };

  return (
    <div className="new-message">
      <MessageForm
        onSaveMessageData={saveMessageDataHandler}
        isLoading={props.isLoading}
      />
    </div>
  );
};

export default NewMessage;
