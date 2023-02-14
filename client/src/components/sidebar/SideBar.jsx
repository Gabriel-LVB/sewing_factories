import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import SideBarBtn from "./SideBarBtn";

const StyledSideBar = styled.div`
  background-color: #090c12;
  color: white;
  min-width: 20vw;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 0px 10px #171717;

  .top-infos {
    padding: 10px 15px;
    .name {
      font-size: larger;
    }
    .email,
    .phone {
      font-size: smaller;
      color: #cfd6e0;
    }
  }
  hr {
    color: white;
    margin: 20px 20px;
  }
  .btns {
    li {
      list-style-type: none;
      display: block;
      margin: 20px 0;
    }
  }
`;

function displayPhone(phone) {
  return (
    "(" + phone.slice(0, 2) + ") " + phone.slice(2, 7) + "-" + phone.slice(7)
  );
}

function SideBar() {
  const [adminInfos, setAdminInfos] = useState({
    name: "carregando...",
    email: "carregando...",
    phone: "carregando...",
  });

  useEffect(() => {
    axios.get("/api/admin/infos").then((response) => {
      const infos = response.data.result[0];
      setAdminInfos({
        name: infos.name,
        email: infos.email,
        phone: infos.phone,
      });
    });
  }, []);

  return (
    <StyledSideBar>
      <div className="top-infos">
        <div className="name">Olá, {adminInfos.name.split(" ")[0]}!</div>
        <div className="email">{adminInfos.email}</div>
        <div className="phone">{displayPhone(adminInfos.phone)}</div>
      </div>
      <hr />
      <ul className="btns">
        <SideBarBtn name="Início" link="/" />
        <SideBarBtn name="Artigos" link="/artigos" />
        <SideBarBtn name="Fabricas" link="/fabricas" />
        <SideBarBtn name="Entregas" link="/entregas" />
        <SideBarBtn name="Entregadores" link="/entregadores" />
        <SideBarBtn name="Admnistrador" link="/administrador" />
      </ul>
    </StyledSideBar>
  );
}

export default SideBar;
