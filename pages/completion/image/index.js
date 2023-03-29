import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageInput, setImageInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    setIsLoading(true);
    event.preventDefault();

    try {
      const response = await fetch("/api/completion/image/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setImageInput("");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>.:: Buddy : Image ::.</title>
      </Head>

      <main className={styles.main}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="image"
            value={imageInput}
            onChange={(e) => setImageInput(e.target.value)}
          />

          {isLoading && (
            <div align="center">
              <div className={styles.loader}></div>
            </div>
          )}

          <input
            type="submit"
            value="Create image"
            disabled={isLoading}
            readOnly={isLoading}
            className={isLoading ? styles.buttonDisabled : ""}
          />
        </form>
        <div className={styles.result}>
          <img src={result} />
        </div>
      </main>
    </div>
  );
}
