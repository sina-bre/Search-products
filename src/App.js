import { useState, useEffect } from "react";
import Modal from "./Modal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [serchedProducts, setSearchedProducts] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [index, setIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const fetchAPI = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.products);
        setProducts(res.products);
      });
  };
  const searchAPI = (search) => {
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.products);
        setSearchedProducts(res.products);
      });
  };
  // const fetchAPI2 = () => {
  //   fetch(`https://dummyjson.com/products/${index}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res.products);
  //       setProducts(res.products);
  //     });
  // };
  const openMoadl = () => {
    setIsOpen(true);
  };
  const closeMoadl = () => {
    setIsOpen(false);
  };

  // const filteredProducts = products.filter((product) => {
  //   return product.title.toLocaleLowerCase().includes(searchField);
  // });
  useEffect(() => {
    fetchAPI();
  }, []);
  useEffect(() => {
    searchAPI(searchField);
  }, [searchField]);
  return (
    <div>
      <div
        style={{
          position: "absolute",
          zIndex: "1",
        }}
      >
        <h1>Search</h1>
        <input
          type="text"
          style={{
            width: "20rem",
            height: "2rem",
            fontSize: "2rem",
            marginBottom: "2rem",
          }}
          onChange={(event) => {
            console.log(event.target.value.toLocaleLowerCase());
            setSearchField(event.target.value.toLocaleLowerCase());
          }}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {serchedProducts.map((product, index) => (
            <div>
              <div
                style={{
                  backgroundImage: `url(${product.thumbnail})`,
                  width: "400px",
                  height: "200px",
                  backgroundPosition: "center",
                  backgroundRepeat: "repeat",
                  backgroundSize: "cover",
                  border: "2px solid black",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  border: "2px solid black",
                }}
              >
                <div>
                  <h3 key={index}>{product.title}</h3>
                </div>
                <div>
                  <h3 key={index + 32}>${product.price}</h3>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    openMoadl();
                    setIndex(product.id);
                  }}
                >
                  <h3>More information</h3>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} index={index} closeModal={closeMoadl} />
    </div>
  );
};

export default App;
