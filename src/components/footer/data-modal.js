import React from "react";
import Typography from "@material-ui/core/Typography";

const Contacts = () => {
  return (
    <React.Fragment>
      <Typography align="left">
        {" "}
        <strong>Адрес:</strong>344019, Ростов-на-Дону г, Максима Горького ул, д.
        295{" "}
      </Typography>
      <Typography align="left">
        <strong>Время работы: </strong> 8:30 - 17:30, перерыв с 13 до 14
      </Typography>
      <Typography align="left">
        <strong>Контактный телефон:</strong> 555-2368
      </Typography>
      <Typography align="left">
        <strong>Контактный e-mail: </strong> info@markissmarket.com
      </Typography>
    </React.Fragment>
  );
};

const AboutUs = () => {
  return (
    <Typography align="justify" style={{ textIndent: 30 }}>
      В нашем интернет - зоомагазине представлены сухие и влажные корма,
      повседневные и ветеринарные (лечебные) корма для кошек, собак, птиц,
      грызунов так же в нашем ассортименте представлены лакомства, наполнители
      для туалетов, ветеринарные препараты. Все представленные товары являются
      топовыми брендами на рынке РФ. Если вам удобнее заказать зоотовары по
      телефону - просто позвоните по номеру : 555-2368
    </Typography>
  );
};

export { Contacts, AboutUs };
