import Link from "next/link";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">TM Buddy</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/completion/text">Text</Link>
          </li>
          <li>
            <Link href="/completion/code">Code</Link>
          </li>
          <li>
            <Link href="/completion/chat">Chat</Link>
          </li>
          <li>
            <Link href="/completion/image">Image</Link>
          </li>
          <li>
            <Link href="/completion/speech">Audio</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
