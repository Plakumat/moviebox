import { useRouteError } from 'react-router-dom';
import { IErrorResponse } from '../../model/common';

const errCheck = (error: any): error is IErrorResponse => {
  return 'data' in error && 'status' in error && 'statusText' in error;
};

const Error = () => {
  const responseErr: any = useRouteError();
  console.error(responseErr);

  if (errCheck(responseErr)) {
    const { status, statusText, data } = responseErr;

    return (
      <section>
        <h1>{status}</h1>
        <h2>{statusText}</h2>
        <p>{data}</p>
      </section>
    );
  }

  return <></>;
};

export default Error;
