import { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addToList = () => {
    list.push(item);
    setList([...list]);
  };

  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
    
    // alert(index)
  };

  return (
    <div>
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr>
                  <td>{element}</td>
                  <td>
                    <button
                      onClick={() => {
                        removeItem(index);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>

      {/* <h1>{list.length}</h1> */}
      {/* <p>{item}</p> */}
      <input onChange={(e) => setItem(e.target.value)} placeholder="item" />
      <button onClick={addToList}>Add</button>
    </div>
  );
};

export default App;
