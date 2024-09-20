function Component2({ data1, ondata1 }) {
  return (
    <div>
      second Component
      {data1?.map?.((item, i) => (
        <tr key={i}>
          <button
            style={{
              backgroundColor: item,
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              margin: "10px",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => ondata1(item)}>
            {item}
          </button>
        </tr>
      ))}
    </div>
  );
}
export default Component2;
