const Kordura = {
  name: "Кордура",
  src: "/img/wizard-picker/printcolor3.svg",
  prints: [
    { src: "/img/wizard-picker/printcolor3.svg", name: "Волошки" },
    { src: "/img/wizard-picker/printcolor2.svg", name: "Листя папороті" },
  ],
};

const Oxford = {
  name: "Оксфорд",
  src: "/img/wizard-picker/material-oksford.png",
  prints: [
    { src: "/img/wizard-picker/material-oksford.png", name: "В кліточку" },
    {
      src: "/img/wizard-picker/printcolor1.svg",
      name: "Різнокольорові квіточки",
    },
  ],
};

const Fabrics = [Kordura, Oxford];

export { Oxford, Kordura };
export default Fabrics;
