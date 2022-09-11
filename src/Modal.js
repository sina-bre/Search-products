import { useEffect, useState } from "react";

const Modal = (props) => {
  const [product, setProduct] = useState({});
  const [isLoading2, setIsLoading2] = useState(false);
  const fetchInformation = () => {
    setIsLoading2(true);
    fetch(`https://dummyjson.com/products/${props.index}`)
      .then((res) => {
        setIsLoading2(false);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setProduct(res);
      });
  };
  useEffect(() => {
    fetchInformation();
  }, [props.isOpen]);
  if (props.isOpen) {
    return (
      <div>
        <div
          style={{
            position: "fixed",
            top: "auto",
            left: "auto",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(3px)",
            zIndex: "5",
          }}
          onClick={props.closeModal}
        ></div>
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
            height: "60%",
            backgroundColor: "white",
            padding: "6rem",
            borderRadius: "5px",
            boxShadow: " 0 3rem 5rem rgba(0, 0, 0, 0.3)",
            zIndex: "10",
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "1.2rem",
              right: "2rem",
              fontSize: "5rem",
              color: "#333",
              cursor: "pointer",
              border: "none",
              background: "none",
            }}
            onClick={props.closeModal}
          >
            &times;
          </button>
          {isLoading2 ? (
            <h1>Loading...</h1>
          ) : (
            <div style={{ display: "flex" }}>
              <div style={{ width: "20%" }}>
                <h1>{product.title}</h1>
                <h2>brand: {product.brand}</h2>
                <h2>price: ${product.price}</h2>
                <h4>{product.description}</h4>
                <h4>Category: {product.category}</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "2rem",
                  width: "75%",
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${product.images[0]})`,
                    width: "250px",
                    height: "200px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "2px solid black",
                  }}
                ></div>

                <div
                  style={{
                    backgroundImage: `url(${product.images[1]})`,
                    width: "250px",
                    height: "200px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "2px solid black",
                  }}
                ></div>
                <div
                  style={{
                    backgroundImage: `url(${product.images[2]})`,
                    width: "250px",
                    height: "200px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "2px solid black",
                  }}
                ></div>
                <div
                  style={{
                    backgroundImage: `url(${product.images[3]})`,
                    width: "250px",
                    height: "200px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "2px solid black",
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Modal;
