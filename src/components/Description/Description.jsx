import { title, text } from './Description.module.css';

function Description() {
  return (
    <>
      <h1 className={title}>Sip Happens Café</h1>
      <p className={text}>
        Please leave your feedback about our service by selecting one of the options below.
      </p>
    </>
  );
}

export default Description;
