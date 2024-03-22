// eslint-disable-next-line react/prop-types
export const Square = ({ value, handleClick, index }) => {
  const styles = {
    button: {
      width: "120px",
      height: "120px",
      fontSize: "44px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background:'#e3b039'
    },
  };

  return (
    <button style={styles.button} onClick={() => handleClick(index)}>
      {value}
    </button>
  );
};
