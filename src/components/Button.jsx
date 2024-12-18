const Button = () => {
  const handleClick = (e) => {
    e.target.textContent = "OUCH! :(";
  };

  return (
    <div>
      <button onDoubleClick={(e) => handleClick(e)} className="button">
        Click me
      </button>
    </div>
  );
};

export default Button;
