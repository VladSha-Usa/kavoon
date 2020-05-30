const Kordura = {
  name: 'Кордура',
  src: '/img/wizard-picker/printcolor3.svg',
  prints: [
    { src: '/img/wizard-picker/printcolor3.svg', name: 'Волошки' },
    { src: '/img/wizard-picker/printcolor2.svg', name: 'Листя папороті' },
  ],
  mainColor: [
    { src: '/img/wizard-picker/field.svg', name: 'Червоний' },
    { src: '/img/wizard-picker/field2.svg', name: 'Сірий' },
  ],
};

const Oxford = {
  name: 'Оксфорд',
  src: '/img/wizard-picker/material-oksford.png',
  prints: [
    { src: '/img/wizard-picker/material-oksford.png', name: 'В кліточку' },
    {
      src: '/img/wizard-picker/printcolor1.svg',
      name: 'Різнокольорові квіточки',
    },
  ],
  mainColor: [
    { src: '/img/wizard-picker/field5.svg', name: 'Голубий' },
    { src: '/img/wizard-picker/field.svg', name: 'Червоний' },
  ],
};
const RainBlaBla = {
  name: 'РейнБлаБла',
  src: '/img/wizard-picker/printcolor1.svg',
  prints: [
    { src: '/img/wizard-picker/material-oksford.png', name: 'В кліточку' },
    {
      src: '/img/wizard-picker/printcolor1.svg',
      name: 'Різнокольорові квіточки',
    },
  ],
  mainColor: [
    { src: '/img/wizard-picker/field2.svg', name: 'Сірий' },
    { src: '/img/wizard-picker/field5.svg', name: 'Голубий' },
  ],
};

const Fabrics = [Kordura, Oxford, RainBlaBla];

export { Oxford, Kordura, RainBlaBla };
export default Fabrics;
