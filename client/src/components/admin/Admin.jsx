import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import StyledContainer from "../../styles/ContainerStyled";

const StyledAdmin = styled(StyledContainer)`
  width: 60%;
  height: 60%;
  form {
    display: table;
    margin: 20px auto;
    border-spacing: 0px 10px;

    .form_field {
      display: table-row;

      input {
        display: table-cell;
        width: 170px;
        margin-left: 7px;
        font-size: 1.2rem;

        &:disabled {
          color: black;
          border-color: transparent;
        }
      }
      label {
        display: table-cell;
        text-align: right;
        font-size: 1.2rem;
      }
    }
  }
  .btn {
    font-size: larger;
    background-color: #0e1329;
    color: white;
    padding: 4px 15px 6px 15px;
    border: none;
    border-radius: 10px;
    align-self: center;
    &:hover {
      cursor: pointer;
      background-color: #272b3f;
    }
    &:active {
      padding: 3px 13px;
      background-color: #46465a;
    }
  }
`;

function Admin() {
  const navigate = useNavigate();
  const [adminInfos, setAdminInfos] = useState({
    name: "carregando...",
    email: "carregando...",
    phone: "carregando...",
  });
  const [edditing, setEdditing] = useState(false);

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

  function formSubmit(e) {
    e.preventDefault();
    axios.put("/api/admin/infos", JSON.stringify(adminInfos)).then((res) => {
      navigate(0);
    });
  }

  return (
    <StyledAdmin className="container">
      <h1 className="title">Informações do admnistrador</h1>
      <form id="edit-admin" onSubmit={(e) => formSubmit(e)}>
        <div className="form_field">
          <label htmlFor="name">Nome: </label>
          <input
            disabled={!edditing}
            type="text"
            name="name"
            id="name"
            required
            value={adminInfos.name}
            onChange={(e) =>
              setAdminInfos({
                name: e.target.value,
                email: adminInfos.email,
                phone: adminInfos.phone,
              })
            }
          />
        </div>
        <div className="form_field">
          <label htmlFor="email">Email: </label>
          <input
            disabled={!edditing}
            type="email"
            name="email"
            id="email"
            required
            value={adminInfos.email}
            onChange={(e) =>
              setAdminInfos({
                name: adminInfos.name,
                email: e.target.value,
                phone: adminInfos.phone,
              })
            }
          />
        </div>
        <div className="form_field">
          <label htmlFor="phone">Telefone: </label>
          <input
            disabled={!edditing}
            type="tel"
            name="phone"
            id="phone"
            required
            maxLength={11}
            minLength={11}
            pattern="[0-9]{1,11}"
            title="please enter number only"
            value={adminInfos.phone}
            onChange={(e) =>
              setAdminInfos({
                name: adminInfos.name,
                email: adminInfos.email,
                phone: e.target.value,
              })
            }
          />
        </div>
      </form>
      {(edditing && (
        <input
          type="submit"
          value="Confirmar"
          className="btn submit"
          form="edit-admin"
        />
      )) || (
        <button
          className="btn edit"
          onClick={() => {
            setEdditing(true);
          }}
        >
          Editar
        </button>
      )}
    </StyledAdmin>
  );
}

export default Admin;
