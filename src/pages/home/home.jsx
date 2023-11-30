import React, { useState, useEffect } from "react";
import Card from "../../components/cards/cards";
import CardComponent from "../../components/clienteCard/ClientCard";
import Navbar from "../../components/navbar/navbar";
const Home = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://demo8482649.mockable.io/usersbank"
        );
        const data = await response.json();
        console.log(data.usuarios);
        setUsuarios(data.usuarios);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []); // O

  //   useEffect(() => {
  //     const apiUrl = "http://demo8482649.mockable.io/usersbank";
  //     fetch(apiUrl)
  //       .then((response) => response.json())
  //       .then((data) => setUsuarios(data.usuarios)) // Define o estado com a array de usuários
  //       .catch((error) => console.error("Erro ao buscar dados da API:", error));
  //   }, []);

  return (
    <div>
      <Navbar></Navbar>
      {usuarios.map((usuario) => (
        <>
          <CardComponent
            pic={usuario.foto}
            name={usuario.nome}
            id={usuario.saldo}
            balance={usuario.saldo}
            textButtonInfo={"VER MAIS"}
          ></CardComponent>
          
        </>
        
      ))}
    </div>
  );
};

export default Home;
