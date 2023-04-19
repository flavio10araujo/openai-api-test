import Head from "next/head";
import { useState } from "react";
import ChatHistory from "../../../components/chat/ChatHistory";
import NewMessage from "../../../components/chat/NewMessage";
import styles from "./index.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState([]);
  const [result, setResult] = useState();

  const updateChats = (role, newMessage) => {
    setChats((prevChats) => {
      return [
        ...prevChats,
        {
          id: prevChats.length + 1,
          role: role,
          content: newMessage,
        },
      ];
    });
  };

  const addMessageHandler = async (newMessage) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/completion/image/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: newMessage.content }),
      });

      updateChats("user", newMessage.content);

      const data = await response.json();

      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div>
      <Head>
        <title>.:: Buddy : Image ::.</title>
      </Head>

      <main className={styles.main}>
        {result && (
          <div className={styles.result}>
            <img src={result} />
          </div>
        )}

        <ChatHistory items={chats} />

        <NewMessage onAddMessage={addMessageHandler} isLoading={isLoading} />
      </main>
    </div>
  );
}
