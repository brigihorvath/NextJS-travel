import { Fragment } from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Fragment>
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link href="/news/nav1">Nav1</Link>
        </li>
        <li>
          <Link href="/news/nav2">Nav2</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default HomePage;
