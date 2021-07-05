import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function DeleteButton({ setColors, colors, deleteIdx }) {
  return (
    <IconButton
      onClick={() =>
        setColors(colors.filter((el, index) => deleteIdx !== index))
      }
      aria-label="delete"
    >
      <DeleteIcon />
    </IconButton>
  );
}

function ColorList({ colors, setColors }) {
  return (
    <>
      {colors.map((cl, deleteIdx) => (
        <div
          key={deleteIdx}
          style={{ display: "flex", gap: "5px", margin: "5px" }}
        >
          {/* HOC Higher order component */}
          <ColorBox cl={cl} h="20px" />
          <DeleteButton
            setColors={setColors}
            colors={colors}
            deleteIdx={deleteIdx}
          />
        </div>
      ))}
    </>
  );
}

// function ColorBox(prop) {
function ColorBox({ cl, h = "50px" }) {
  return (
    <div
      style={{
        backgroundColor: cl,
        height: h,
        width: "100px",
        marginTop: "5px"
      }}
    >
      <pre>{/* {JSON.stringify(prop, null, 2)} */}</pre>
    </div>
  );
}

export { ColorList, ColorBox };
