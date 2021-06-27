const Result = ({ shorturl }) => {
  function copy() {
      const text = shorturl;

      document.execCommand("copy");
  }

  return <h1>{`${shorturl}`}</h1>;
};

export default Result;
