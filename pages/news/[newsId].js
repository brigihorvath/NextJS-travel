import { useRouter } from 'next/router';
import { Fragment } from 'react';

const Details = () => {
  const router = useRouter();

  console.log(router.query.newsId);
  return (
    <Fragment>
      <h1>Details</h1>
      <p>{router.query.newsId}</p>
    </Fragment>
  );
};

export default Details;
