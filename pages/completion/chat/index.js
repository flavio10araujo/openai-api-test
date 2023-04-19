import Head from "next/head";
import { useEffect, useState } from "react";
import ChatHistory from "../../../components/chat/ChatHistory";
import NewMessage from "../../../components/chat/NewMessage";
import styles from "./index.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState([]);

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
      const response = await fetch("/api/completion/chat/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chat: newMessage.content, messages: chats }),
      });

      updateChats("user", newMessage.content);

      const data = await response.json();

      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      updateChats("assistant", data.result);

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
        <title>.:: Buddy : Chat ::.</title>
      </Head>

      <main className={styles.main}>
        <ChatHistory items={chats} />

        <NewMessage onAddMessage={addMessageHandler} isLoading={isLoading} />
      </main>
    </div>
  );
}
