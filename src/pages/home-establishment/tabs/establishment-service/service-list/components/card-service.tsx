import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Service from "../../../../../../entity/service";

export default function CardService({
  service,
  onDelete,
}: {
  service: Service;
  onDelete: () => void;
}) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold">Serviço: {service.nome}</h3>
        <p>
          <b>Tipo: </b>
          {service.tipo}
        </p>
        <p>
          <b>Valor: </b>
          {service.valor}
        </p>
        <p>
          <b>Descrição: </b>
          {service.descricao}
        </p>
      </div>
      <div className="absolute top-3 right-3 gap-2 flex ">
        <BorderColorIcon className="cursor-pointer" />
        <DeleteIcon className="cursor-pointer" onClick={onDelete} />
      </div>
    </>
  );
}