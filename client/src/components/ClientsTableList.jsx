// Hanldes clients data display
import React, { useState, useEffect } from "react";
import "../styles/ClientsTableList.scss";
import DeleteIcon from "../rsc/icons/delete.PNG";
import ArrowDownIcon from "../rsc/icons/arrow-down.PNG";
import ArrowLeftIcon from "../rsc/icons/arrow-left.PNG";
import ArrowRightIcon from "../rsc/icons/arrow-right.PNG";

const ClientsTableList = ({ clients, setClients }) => {
  const [isBiggerThanPhone, setIsBiggerThanPhone] = useState(false);

  useEffect(() => {
    // si es mayor de 425px no es celular
    if (window.screen.width > 425) {
      setIsBiggerThanPhone(true);
    }
  }, []);

  const orderBy = (field) =>{
    let sortClients = [...clients].sort(function (a, b) {
        if (a[String(field)] > b[String(field)]) {
          return 1;
        }
        if (a[String(field)] < b[String(field)]) {
          return -1;
        }
        return 0;
      });
    console.log(sortClients)
    setClients(sortClients)
  }

  return (
    <div className="ClientsTableList">
      <table>
        <thead>
          <tr>
            <th className="sort-field" onClick={()=> orderBy("name")}>
              Cliente <img src={ArrowDownIcon} alt="arrow down" />
            </th>
            <th className="sort-field" onClick={()=> orderBy("gender")}>Género</th>
            {
                isBiggerThanPhone?
                <>
                    <th className="sort-field" onClick={()=> orderBy("country")}>País</th>
                    <th className="sort-field" onClick={()=> orderBy("state")}>Estado</th>
                    <th></th>
                </>: ''
            }
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr className="client-row" key={client._id}>
              <td className="">
                <div className="flex-row center-vert">
                  <img className="profile-img" src={client.image} alt="" />
                  &nbsp;&nbsp;{client.name}
                </div>
              </td>
              <td className={`td-gender`}>
                {client.gender === "Mujer" ? (
                  <p className="M">Mujer</p>
                ) : (
                  <p className="H">Hombre</p>
                )}
              </td>
              {isBiggerThanPhone ? (
                <>
                  <td>{client.country}</td>
                  <td>{client.state}</td>
                  <td>
                    <div className="flex-col center-center">
                      <img
                        className="delete-img"
                        src={DeleteIcon}
                        alt="delete icon"
                      />
                    </div>
                  </td>
                </>
              ) : (
                ""
              )}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              <div className="flex-row footer-cont">
                <button className="prev-btn">
                    {
                        isBiggerThanPhone?'Previous':
                        <img src={ArrowLeftIcon} alt="left icon" width='10px'></img>
                    }
                </button>
                <p>Page 1 of 1</p>
                <button className="next-btn">
                {
                        isBiggerThanPhone?'Next':
                        <img src={ArrowRightIcon} alt="left icon"width='10px'></img>
                    }
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ClientsTableList;
