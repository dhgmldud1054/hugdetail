function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}const {
  Fragment,
  Component,
  Children,
  cloneElement,
  useState,
  useEffect,
  useRef,
  forwardRef } =
React;
const { createStore } = Redux;

const rooms = [
{
  id: 0,
  name: "HUG",
  alt: "",
  description: "Korea Housing & Urban Guarantee Corporation",
  src:
  "img1.png",
  itemIds: [11, 12, 13, 14, 15] },

{
  id: 1,
  name: "HUG",
  alt: "",
  description: "Korea Housing & Urban Guarantee Corporation",
  src:
  "img2.png",
  itemIds: [21, 22, 23, 24, 25] },


    {
  id: 2,
  name: "",
  alt: "A living room with a designer's touch",
   description: "",
  src:
  "img3.png",
  itemIds: [31, 32, 33, 34, 35] },
    
        {
  id: 3,
name: "",
  alt: "A living room with a designer's touch",
   description: "",
  src:
  "img3-1.png",
  itemIds: [31, 32, 33, 34, 35] }





];



const items = [
{
  id: 11,
  preview:
  "https://www.ikea.com/images/eket-wall-mounted-shelving-units-in-various-colours-above-a--b4b69704dbc5a69451040954a463161e.jpg?f=xl",
  images: [
  "https://www.ikea.com/ca/en/images/products/eket-wall-mounted-shelving-unit-red__0715172_PE730357_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/eket-wall-mounted-shelving-unit-red__0715171_PE730356_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/eket-wall-mounted-shelving-unit-red__0703489_PE724760_S5.JPG?f=xl"],

  brand: "EKET",
  name: "Wall-mounted shelving unit",
  description: 'red, 13 3/4x9 7/8x13 3/4 " (35x25x35 cm)',
  price: 25.0 },

{
  id: 12,
  preview:
  "https://www.ikea.com/images/eket-dark-grey-cabinet-combination-with-a-silver-stockholm-2-bbfbe8e82c93b05f4588b497457d5390.jpg?f=xl",
  images: [
  "https://www.ikea.com/ca/en/images/products/eket-cabinet-combination-with-legs-dark-grey__0709231_PE726890_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/eket-cabinet-combination-with-legs-dark-grey__0716578_PE730931_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/eket-cabinet-combination-with-legs-dark-grey__0744957_PE743502_S5.JPG?f=xl"],

  brand: "EKET",
  name: "Storage combination with legs",
  description: 'dark gray, 27 1/2x13 3/4x31 1/2 " (70x35x80 cm)',
  price: 135.0 },


{
  id: 13,
  preview:
  "https://www.ikea.com/images/gamlehult-rattan-footstool-with-hidden-storage-in-front-of-a-a274605c1c6f49ea9f6f4b0993eb1f95.jpg?f=m",
  images: [
  "https://www.ikea.com/ca/en/images/products/gamlehult-footstool-with-storage-rattan-anthracite__0842809_PE719505_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/gamlehult-footstool-with-storage-rattan-anthracite__0842801_PE716938_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/gamlehult-footstool-with-storage-rattan-anthracite__0672900_PE716937_S5.JPG?f=xl"],

  brand: "GAMLEHULT",
  name: "Footstool with storage",
  description: "rattan, anthracite",
  price: 79.99 },

{
  id: 14,
  preview:
  "https://www.ikea.com/images/hoppvals-white-cellular-blind-hung-on-a-window-with-an-outdo-15f26081ffbe10f9725f7d33e52680e9.jpg?f=m",
  images: [
  "https://www.ikea.com/ca/en/images/products/hoppvals-cellular-blind__0720260_PE732492_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/hoppvals-cellular-blind__0892426_PE574007_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/hoppvals-cellular-blind__0892438_PE574666_S5.JPG?f=xl"],

  brand: "HOPPVALS",
  name: "Cellular blind",
  description: 'white, 27x64 " (68.6x163 cm)',
  price: 29.99 },

{
  id: 15,
  preview:
  "https://www.ikea.com/images/poaeng-armchair-in-white-stained-oak-veneer-with-a-cream-lea-cd87cafa6bbbf9aa6a9be4a44ad9752a.jpg?f=m",
  images: [
  "https://www.ikea.com/ca/en/images/products/poaeng-armchair__0837647_PE601073_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/poaeng-armchair__0250853_PE389390_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/poaeng-armchair__0836872_PE585629_S5.JPG?f=xl"],

  brand: "POÄNG",
  name: "Armchair",
  description: "birch veneer, Robust Glose off-white",
  price: 199.0 },

{
  id: 21,
  preview:
  "https://www.ikea.com/images/dark-brown-leather-lidhult-sofa-decorated-with-sanela-cushio-afdfc438e21a2ba000b4bcba39240eb9.jpg?f=xl",
  images: [
  "https://www.ikea.com/ca/en/images/products/sanela-cushion-cover-dark-red__0888909_PE682834_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/sanela-cushion-cover-dark-red__0888897_PE682832_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/sanela-cushion-cover-dark-red__0888897_PE682832_S5.JPG?f=xl",

  "https://www.ikea.com/ca/en/images/products/sanela-cushion-cover-dark-red__0888912_PE682835_S5.JPG?f=xl"],

  brand: "SANELA",
  name: "Cushion cover",
  description: 'dark red, 16x26 " (40x65 cm)',
  price: 9.99 },

{
  id: 22,
  preview:
  "https://www.ikea.com/images/listerby-round-brown-wood-coffee-table-with-shelf-underneath-a51aeeb8ff4be5a82b900cf372a9039c.jpg?f=xl",
  images: [
  "https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0835984_PE693238_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0705840_PH155559_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0676412_PH155555_S5.JPG?f=xl"],

  brand: "LISTERBY",
  name: "Coffee table",
  description: 'brown, 35 3/8 " (90 cm)',
  price: 179.0 },

{
  id: 23,
  preview:
  "https://www.ikea.com/images/two-dark-grey-strandmon-armchairs-with-sanela-pastel-coloure-9203893cab2773177bc72bdffa25ed7a.jpg?f=xl",
  images: [
  "https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0835984_PE693238_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0705840_PH155559_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0676412_PH155555_S5.JPG?f=xl"],

  brand: "STRANDMON",
  name: "Armchair",
  description: "Nordvalla dark gray",
  price: 299.0 },

{
  id: 24,
  preview:
  "https://www.ikea.com/images/evedal-hanging-pendant-lamps-arranged-at-different-heights-a-6ab0d2486a8c530195ef8a806b66d1fb.jpg?f=xl",
  images: [
  "https://www.ikea.com/ca/en/images/products/evedal-pendant-lamp__0880982_PE680880_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/evedal-pendant-lamp__0702740_PH155545_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/evedal-pendant-lamp__0795471_PH163226_S5.JPG?f=xl"],

  brand: "EVEDAL",
  name: "Pendant lamp",
  description: "gray",
  price: 149.0 },

{
  id: 25,
  preview:
  "https://www.ikea.com/images/an-evedal-dome-shaped-table-lamp-next-to-three-glittrig-whit-bd6a1f7a02c03660ac4bc54be9fe251a.jpg?f=xxxl",
  images: [
  "https://www.ikea.com/ca/en/images/products/evedal-table-lamp__0879408_PE712302_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/evedal-table-lamp__0686393_PH155558_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/evedal-table-lamp__0879422_PE712304_S5.JPG?f=xl"],

  brand: "EVEDAL",
  name: "Table lamp",
  description: "gray",
  price: 199.0 },

{
  id: 31,
  preview:
  "https://www.ikea.com/ca/en/images/products/lampan-table-lamp__0879365_PE674068_S5.JPG?f=xl",
  images: [
  "https://www.ikea.com/ca/en/images/products/lampan-table-lamp__0879372_PE674069_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/lampan-table-lamp__0743229_PH158299_S5.JPG?f=xl"],

  brand: "MORABO",
  name: "Table lamp",
  description: 'brown, 11 " (29 cm)',
  price: 8.99 },

{
  id: 32,
  preview:
  "https://www.ikea.com/ca/en/images/products/glittrig-candlestick-set-of-3-ivory-gold-colour__0902886_PE685232_S5.JPG?f=xl",
  images: [
  "https://www.ikea.com/ca/en/images/products/glittrig-candlestick-set-of-3-ivory-gold-colour__0663508_PH153605_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/glittrig-candlestick-set-of-3-ivory-gold-colour__0686393_PH155558_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/glittrig-candlestick-set-of-3-ivory-gold-colour__0902883_PE685231_S5.JPG?f=xl"],

  brand: "GLITTRIG",
  name: "Candlestick",
  description: "set of 3, ivory, gold-colour",
  price: 19.99 },

{
  id: 33,
  preview:
  "https://www.ikea.com/ca/en/images/products/radviken-armchair-dark-brown-black__0837327_PE601023_S5.JPG?f=xl",
  images: [
  "https://www.ikea.com/ca/en/images/products/radviken-armchair-dark-brown-black__0325828_PE517686_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/radviken-armchair-dark-brown-black__0325825_PE517684_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/radviken-armchair-dark-brown-black__0325827_PE517685_S5.JPG?f=xl"],

  brand: "RÅDVIKEN",
  name: "Armchair",
  description: "dark brown, black",
  price: 199.0 },

{
  id: 34,
  preview:
  "https://www.ikea.com/ca/en/images/products/stockholm-nest-of-tables-set-of-2-walnut-veneer__0837170_PE601372_S5.JPG?f=xl",
  images: [
  "https://www.ikea.com/ca/en/images/products/stockholm-nest-of-tables-set-of-2-walnut-veneer__0258118_PE402030_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/stockholm-nest-of-tables-set-of-2-walnut-veneer__0258118_PE402030_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/stockholm-nest-of-tables-set-of-2-walnut-veneer__0837158_PE365379_S5.JPG?f=xl"],

  brand: "STOCKHOLM",
  name: "Nesting tables",
  description: "set of 2, walnut veneer",
  price: 299.0 },


{
  id: 35,
  preview:
  "https://www.ikea.com/images/closeup-of-stockholm-mirrors-deep-ledge-holding-small-perfum-a473667de2f3799fa726e81cd939274f.jpg?f=m",
  images: [
  "https://www.ikea.com/ca/en/images/products/stockholm-mirror-walnut-veneer__0906302_PE555467_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/stockholm-mirror-walnut-veneer__0906306_PE658294_S5.JPG?f=xl",
  "https://www.ikea.com/ca/en/images/products/stockholm-mirror-walnut-veneer__0212204_PE362775_S5.JPG?f=xl"],

  brand: "STOCKHOLM",
  name: "Mirror",
  description: 'walnut veneer, 31 1/2 " (80 cm)',
  price: 99.0 }];



const getRooms = () => rooms;

const getItems = roomId => {
  const { itemIds } = rooms[roomId];
  return items.
  filter(item => itemIds.includes(item.id)).
  map(item => ({ id: item.id, name: item.name, preview: item.preview }));
};

const getItem = itemId => {
  return items.filter(item => item.id === Number(itemId))[0];
};

const getNextItemId = (roomId, itemId) => {
  const { itemIds } = rooms[roomId];
  for (let i = 0; i < itemIds.length; i++) {
    if (itemIds[i] === Number(itemId) && i < itemIds.length - 1)
    return itemIds[i + 1];
  }
  return 0;
};

const getPrevItemId = (roomId, itemId) => {
  const { itemIds } = rooms[roomId];
  for (let i = 0; i < itemIds.length; i++) {
    if (itemIds[i] === Number(itemId) && i > 0) return itemIds[i - 1];
  }
  return 0;
};

const AnchorMenu = ({ anchorEl, children, className, ...props }) => {
  const coord = elem => {
    let rect = elem.getBoundingClientRect();
    let left =
    rect.left + (window.pageXOffset || document.documentElement.scrollLeft),
    top =
    rect.top + (window.pageYOffset || document.documentElement.scrollTop),
    right = left + elem.clientWidth,
    bottom = top + elem.clientHeight;
    return { left, right, top, bottom };
  };
  if (anchorEl) {
    const { right, bottom } = coord(anchorEl);

    return (
      React.createElement(Menu, _extends({},
      props, {
        className: "anchor-menu" + (className ? " " + className : ""),
        style: {
          top: bottom,
          right: window.innerWidth - right,
          ...props.style } }),


      children));


  } else return null;
};

const Badge = ({ className, children, visible, content, ...props }) => {
  return (
    React.createElement("div", { className: className ? " " + className : "" },
    cloneElement(children, {
      ...props,
      "data-text": content,
      className: children.props.className + (visible ? " " + "badge" : "") })));



};

const Button = ({ className, children, color, ...props }) =>
React.createElement("button", _extends({}, props, { className: "button" + (className ? " " + className : "") }),
children);



const CarouselButton = forwardRef(({ direction, className, ...props }, ref) => {
  return (
    React.createElement(Button, _extends({}, props, { ref: ref, className: className ? className : "" }),
    direction === "left" ? "<" : ">"));


});

const CarouselItem = forwardRef(
({ name, alt, src, width, children, className, ...props }, ref) =>
React.createElement("div", _extends({},
props, {
  className: "carouselItem" + (className ? " " + className : ""),
  ref: ref,
  style: {
    width: width,
    height: width,
    ...props.style } }),


React.createElement("img", { name: name, src: src, alt: alt, style: { width: width } })));




class Carousel extends Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      count: 1,
      translateX: -this.props.width,
      shiftEffect: true,
      startX: 0 });_defineProperty(this, "numItem",


    Children.toArray(this.props.children).length + 2);_defineProperty(this, "initX",
    0);_defineProperty(this, "shift",

    function (direction) {
      if (direction !== -1 && direction !== 1) return;

      const { count } = this.state;
      const { width } = this.props;

      if (
      count >= this.numItem - 1 && direction === 1 ||
      count <= 0 && direction === -1)

      return;

      this.setState({
        count: count + direction,
        translateX: -(count + direction) * width,
        shiftEffect: true });

    });_defineProperty(this, "transitionEnd",

    function () {
      const { count } = this.state;
      const { width } = this.props;

      let updated_count =
      count <= 0 ? this.numItem - 2 : count >= this.numItem - 1 ? 1 : count;
      let updated_translateX = -updated_count * width;

      this.setState({
        count: updated_count,
        translateX: updated_translateX,
        shiftEffect: false });

    });_defineProperty(this, "dragStart",

    function (e) {
      e = e || window.event;
      e.preventDefault();

      this.initX = this.state.translateX;
      let startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;

      this.setState({ startX }, () => {
        document.onmousemove = this.dragAction.bind(this);
        document.onmouseup = this.dragEnd.bind(this);
      });
    });_defineProperty(this, "dragAction",

    function (e) {
      e = e || window.event;
      let endX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;

      const { startX, translateX } = this.state;
      this.setState({
        translateX: translateX + endX - startX,
        startX: endX });

    });_defineProperty(this, "dragEnd",

    function (e) {
      const { translateX } = this.state;
      const { width } = this.props;

      if (translateX - this.initX < -width / 3) this.shift(1);else
      if (translateX - this.initX > width / 3) this.shift(-1);else
      this.setState({ translateX: this.initX });
      document.onmousemove = null;
      document.onmouseup = null;
    });_defineProperty(this, "render",

    function () {
      const { translateX, shiftEffect } = this.state;
      const { children, width } = this.props;
      const items = Children.toArray(children);

      return (
        React.createElement("div", _extends({},
        this.props, {
          className:
          "carouselContainer" + (
          this.props.className ? " " + this.props.className : ""),

          style: { width: width } }),

        React.createElement("div", { className: "carousel", style: { width: width } },
        React.createElement("div", {
          className: "carouselSlide",
          ref: this.slide,
          style: {
            width: this.numItem * width,
            transform: `translateX(${translateX}px)`,
            transition: shiftEffect ? "0.5s ease-out" : "" },

          onTransitionEnd: this.transitionEnd.bind(this),
          onMouseDown: this.dragStart.bind(this),
          onTouchStart: this.dragStart.bind(this),
          onTouchMove: this.dragAction.bind(this),
          onTouchEnd: this.dragEnd.bind(this) },

        cloneElement(items[items.length - 1], {
          width: width }),

        items.map((child, idx) => cloneElement(child, { width: width })),
        cloneElement(items[0], { width: width }))),


        React.createElement(CarouselButton, {
          className: "btnLeft button",
          direction: "left",
          onClick: () => {
            this.shift(-1);
          } }),

        React.createElement(CarouselButton, {
          className: "btnRight button",
          direction: "right",
          onClick: () => {
            this.shift(1);
          } })));



    });}}


const Container = forwardRef(({ className, ...props }, ref) => {
  return (
    React.createElement("main", _extends({},
    props, {
      ref: ref,
      className: "container" + (className ? " " + className : "") }),

    props.children));


});

const Divider = ({ className, ...props }) => {
  return (
    React.createElement("div", _extends({},
    props, {
      className: "divider" + (className ? " " + className : "") })));


};

const Grid = forwardRef(({ images, children, className, ...props }, ref) => {
  return (
    React.createElement("div", _extends({},
    props, {
      ref: ref,
      role: "grid",
      className: "grid" + (className ? " " + className : "") }),

    children));


});

const GridItem = ({ className, ...props }) => {
  return (
    React.createElement("div", _extends({},
    props, {
      role: "gridcell img",
      className: "gridItem" + (className ? " " + className : ""),
      style: {
        backgroundImage: `url(${props.image})`,
        backgroundSize: "100%" } })));



};

const LeftArrowIcon = (props) =>
React.createElement("svg", {
  t: "1584613183058",
  className: "icon",
  viewBox: "0 0 1433 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2805",
  width: "32",
  height: "32" },

React.createElement("path", {
  d: "M1433.6 614.4H409.6l256 256-153.6 153.6L0 512 512 0l153.6 153.6-256 256h1024z",
  fill: "currentColor",
  "p-id": "2806" }),

React.createElement("path", {
  d: "M1024 409.6v204.8h409.6V409.6z",
  fill: "currentColor",
  "p-id": "2807" }));




const RightArrowIcon = (props) =>
React.createElement("svg", {
  t: "1584613130103",
  className: "icon",
  viewBox: "0 0 1433 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2474",
  width: "32",
  height: "32" },

React.createElement("path", {
  d: "M0 614.4h1024l-256 256 153.6 153.6 512-512L921.6 0l-153.6 153.6 256 256H0z",
  fill: "currentColor",
  "p-id": "2475" }),

React.createElement("path", {
  d: "M409.6 409.6v204.8H0V409.6z",
  fill: "currentColor",
  "p-id": "2476" }));




const CartIcon = (props) =>
React.createElement("svg", {
  t: "1585123812662",
  className: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2138",
  width: "32",
  height: "32" },

React.createElement("path", {
  d: "M912.64 200A21.312 21.312 0 0 0 896 192H170.666667v426.666667h640c10.005333 0 18.645333-6.954667 20.842666-16.704l85.333334-384a21.333333 21.333333 0 0 0-4.202667-17.962667z",
  fill: "currentColor",
  "p-id": "2139" }),

React.createElement("path", {
  d: "M981.333333 746.666667H170.666667a21.333333 21.333333 0 0 1-21.333334-21.333334V106.666667H42.666667a21.333333 21.333333 0 1 1 0-42.666667h128a21.333333 21.333333 0 0 1 21.333333 21.333333v618.666667h789.333333a21.333333 21.333333 0 1 1 0 42.666667z",
  fill: "currentColor",
  "p-id": "2140" }),

React.createElement("path", {
  d: "M277.333333 789.333333a85.333333 85.333333 0 1 0 0 170.666667 85.333333 85.333333 0 0 0 0-170.666667zM853.333333 789.333333a85.333333 85.333333 0 1 0 0 170.666667 85.333333 85.333333 0 0 0 0-170.666667z",
  fill: "currentColor",
  "p-id": "2141" }),

React.createElement("path", {
  d: "M277.333333 874.666667m-42.666666 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z",
  fill: "currentColor",
  "p-id": "2142" }),

React.createElement("path", {
  d: "M853.333333 874.666667m-42.666666 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z",
  fill: "currentColor",
  "p-id": "2143" }));




const HeartIcon = (props) =>
React.createElement("svg", {
  t: "1585124515213",
  className: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4657",
  width: "32",
  height: "32" },

React.createElement("path", {
  d: "M725.306 42.696c-83.56 0-159.122 34.342-213.306 89.668-54.202-55.326-129.746-89.668-213.32-89.668C133.732 42.696 0.018 176.41 0.018 341.342 0.018 682.69 512 981.304 512 981.304s511.982-298.616 511.982-639.962c0-164.932-133.714-298.646-298.676-298.646z",
  fill: "currentColor",
  "p-id": "4658" }),

React.createElement("path", {
  d: "M725.306 42.696a299.8 299.8 0 0 0-42.624 3.046c144.714 20.702 255.992 145.15 255.992 295.6 0 280.756-346.394 532.624-469.344 613.182 26.53 17.406 42.67 26.78 42.67 26.78s511.982-298.616 511.982-639.962c0-164.932-133.714-298.646-298.676-298.646z",
  fill: "currentColor",
  opacity: ".2",
  "p-id": "4659" }));




const MenuIcon = (props) =>
React.createElement("svg", {
  t: "1585219948859",
  className: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2332",
  width: "32",
  height: "32" },

React.createElement("path", {
  d: "M128 469.333333m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533334l0 4.266666q0 40.533333-40.533333 40.533334l-686.933334 0q-40.533333 0-40.533333-40.533334l0-4.266666q0-40.533333 40.533333-40.533334Z",
  fill: "currentColor",
  "p-id": "2333" }),

React.createElement("path", {
  d: "M128 682.666667m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533333l0 4.266667q0 40.533333-40.533333 40.533333l-686.933334 0q-40.533333 0-40.533333-40.533333l0-4.266667q0-40.533333 40.533333-40.533333Z",
  fill: "currentColor",
  "p-id": "2334" }),

React.createElement("path", {
  d: "M128 256m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533333l0 4.266667q0 40.533333-40.533333 40.533333l-686.933334 0q-40.533333 0-40.533333-40.533333l0-4.266667q0-40.533333 40.533333-40.533333Z",
  fill: "currentColor",
  "p-id": "2335" }));




const Input = forwardRef(
({ className, required, labelText, ...props }, ref) => {
  return (
    React.createElement("input", _extends({},
    props, {
      "aria-label": labelText,
      "aria-required": required,
      ref: ref,
      className: "input" + (className ? " " + className : "") })));


});


const Menu = ({ children, className, ...props }) => {
  return (
    React.createElement("div", _extends({},
    props, {
      role: "list",
      className: "menu" + (className ? " " + className : "") }),

    children));


};

const MenuItem = ({ children, className, ...props }) => {
  return (
    React.createElement("div", _extends({},
    props, {
      role: "listitem",
      className: "menuItem" + (className ? " " + className : "") }),

    children));


};

const FavItem = forwardRef(
({ className, displayQty = false, item, ...props }, ref) => {
  return (
    React.createElement(MenuItem, { className: "favMenuItem" },
    React.createElement("img", { src: item.avatar, alt: item.name }),
    React.createElement("div", { className: "menuItemText" },
    React.createElement("div", null, item.brand),
    React.createElement("div", null, item.name),
    displayQty ?
    React.createElement("div", { className: "menuItemQty" }, "x ", item.quantity) :
    null)));



});


const CartItem = forwardRef(({ className, item, ...props }, ref) => {
  return React.createElement(FavItem, { displayQty: true, item: item });
});

const FavMenu = forwardRef(({ className, fav, anchorEl, ...props }, ref) => {
  const items = Object.keys(fav).reduce(
  (acc, id) => fav[id] ? [...acc, fav[id]] : acc,
  []);


  return (
    React.createElement(AnchorMenu, { anchorEl: anchorEl },
    items.length > 0 ?
    items.map((item) =>
    React.createElement(Fragment, { key: item.id },
    React.createElement(FavItem, { item: item }),
    React.createElement(Divider, null))) :



    React.createElement(MenuItem, null,
    React.createElement("span", { style: { margin: "auto" } }, "Your haven't liked any items."))));




});

const CartMenu = forwardRef(({ className, cart, anchorEl, ...props }, ref) => {
  return (
    React.createElement(AnchorMenu, { anchorEl: anchorEl },
    Object.keys(cart).length > 0 ?
    Object.keys(cart).map((id) =>
    React.createElement(Fragment, { key: id },
    React.createElement(CartItem, { item: cart[id] }),
    React.createElement(Divider, null))) :



    React.createElement(MenuItem, null,
    React.createElement("span", { style: { margin: "auto" } }, "Your shopping cart is empty."))));




});

const SlideButton = ({ direction, className, ...props }) =>
React.createElement(Button, _extends({},
props, {
  className: className ? " " + className : "",
  title: direction === "left" ? "Previous room" : "Next room",
  "aria-label": direction === "left" ? "Previous room" : "Next room" }),

direction === "left" ? React.createElement(LeftArrowIcon, null) : React.createElement(RightArrowIcon, null));



const SlideItem = ({ className, src, hidden, ...props }) => {
  return (
    React.createElement("div", _extends({},
    props, {
      className: "slideItem" + (className ? " " + className : ""),
      style: {
        backgroundImage: `url(${src})`,
        opacity: hidden ? 0 : 1,
        ...props.style } })));



};

const animateSlide = (
slideRef,
titleRef,
numberRef,
descriptionRef,
actionRef) =>
{
  const tl = gsap.timeline();
  tl.to(
  titleRef.current,
  {
    "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
    duration: 0.32 },

  "in").

  to(
  descriptionRef.current,
  {
    "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
    duration: 0.32 },

  "in").


  to(numberRef.current, { opacity: 0, duration: 0.32 }, "in").
  set(numberRef.current, { opacity: 1 }, "in+=0.32").

  to(actionRef.current, { opacity: 0, duration: 0.32 }, "in").
  set(actionRef.current, { opacity: 1 }, "in+=0.32").

  to(
  titleRef.current,
  {
    "clip-path": "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
    duration: 0.64 },

  "in+=0.32").

  to(
  descriptionRef.current,
  {
    "clip-path": "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
    duration: 0.64 },

  "in+=0.32");

};

const animateSlideOut = (
slideRef,
titleRef,
numberRef,
descriptionRef,
actionRef,
callback) =>
{
  const tl = gsap.timeline();
  [titleRef, numberRef, descriptionRef, actionRef].forEach(ref => {
    tl.to(
    ref.current,
    {
      "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
      duration: 0.32 },

    "out");

  });
  tl.to(slideRef.current, { opacity: 0, duration: 0.32 }, "out+0.32").add(
  callback,
  1);

};

const Slide = ({ children, store, slide, ...props }) => {
  const slides = Children.toArray(children);
  const slideQty = slides.length;

  const slideRef = useRef(),
  titleRef = useRef(),
  numberRef = useRef(),
  numberVariableRef = useRef(),
  descriptionRef = useRef(),
  actionRef = useRef();

  const shift = direction => {
    if (
    slide === slideQty - 1 && direction === 1 ||
    slide === 0 && direction === -1)

    return;
    store.dispatch({ type: "SET_SLIDE", slide: slide + direction });
  };

  const viewItems = () => {
    animateSlideOut(
    slideRef,
    titleRef,
    numberRef,
    descriptionRef,
    actionRef,
    () => {
      store.dispatch({ type: "SET_SLIDE", slide });
      store.dispatch({ type: "SET_PAGE", page: 1 });
    });

  };

  useEffect(() => {
    animateSlide(
    slideRef,
    titleRef,
    numberVariableRef,
    numberVariableRef,
    descriptionRef,
    actionRef);

  }, [slide]);

  return (
    React.createElement("div", { className: "slideContainer", ref: slideRef },
    slides.map((item, idx) => cloneElement(item, { hidden: idx !== slide })),
    React.createElement("div", { className: "slideContent" },
    React.createElement("div", { className: "slideNumber", ref: numberRef },
    React.createElement("span", { className: "slideNumberVariable", ref: numberVariableRef },
    slide + 1),

    React.createElement("span", null, " / ", slideQty)),

    React.createElement("div", { className: "slideTitle", ref: titleRef },
    slides[slide].props.name),

    React.createElement("div", { className: "slideButton" },
    React.createElement(SlideButton, {
      direction: "left",
      className: "leftButton",
      onClick: () => {
        shift(-1);
      } }),

    React.createElement(SlideButton, {
      direction: "right",
      className: "rightButton",
      onClick: () => {
        shift(1);
      } })),


    React.createElement("div", { className: "slideDescription", ref: descriptionRef },
    slides[slide].props.description),

    React.createElement("div", { className: "slideAction", ref: actionRef, onClick: viewItems }, ""))));





};

const RoomsPage = ({ store, slide }) => {
  const rooms = getRooms();
  return (
    React.createElement(Slide, { store: store, slide: slide },
    rooms.map((room) =>
    React.createElement(SlideItem, {
      src: room.src,
      name: room.name,
      description: room.description,
      hidden: true }))));




};

const animateItemsPageIn = (gridRef, textRef) => {
  const tl = gsap.timeline();
  tl.to(
  gridRef.current,
  {
    "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
    duration: 0.32 },

  "in").

  to(
  textRef.current,
  {
    opacity: 0,
    duration: 0.32 },

  "in").


  set(
  textRef.current,
  {
    opacity: 1 },

  "in+=0.32").

  to(
  gridRef.current,
  {
    "clip-path": "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
    duration: 0.96 },

  "in+=0.32");

};

const animateItemsPageOut = (gridRef, textRef, callback) => {
  const tl = gsap.timeline();
  [gridRef, textRef].forEach(ref => {
    tl.to(
    ref.current,
    {
      "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
      duration: 0.32 },

    "out");

  });
  tl.add(callback, 1);
};

const ItemsPage = ({ slide, cart, fav, store }) => {
  const items = getItems(slide);
  const containerRef = useRef();
  const textRef = useRef();
  const gridRef = useRef();

  const openModal = e => {
    const { id } = e.target;
    animateItemsPageOut(gridRef, textRef, () => {
      store.dispatch({ type: "SET_ITEM", item: id });
      store.dispatch({ type: "SET_PAGE", page: 2 });
    });
  };

  const back = e => {
    animateItemsPageOut(gridRef, textRef, () => {
      store.dispatch({ type: "SET_PAGE", page: 0 });
    });
  };

  useEffect(() => {
    animateItemsPageIn(gridRef, textRef);
    new Draggable(gridRef.current, {
      type: "x",
      bounds: ".container",
      dragResistance: 0.35,
      inertia: true,
      throwResistance: 2000,
      onDrag: () => {
        gsap.set(".grid, .gridItem", { cursor: "grab" });
      },
      onDragEnd: () => {
        gsap.set(".grid, .gridItem", { cursor: "pointer" });
      } });

  }, []);

  return (
    React.createElement(Container, { ref: containerRef, className: "container items-page" },
    React.createElement("div", { className: "row", ref: textRef },
    React.createElement("div", { className: "instruction" }, "Drag or click to view items"),
    React.createElement("div", { className: "back", onClick: back }, "Go back")),



    React.createElement(Grid, { ref: gridRef, className: "grid" },
    items.map((item, idx) =>
    React.createElement(GridItem, {
      className: "gridItem",
      image: item.preview,
      title: item.name,
      "aria-label": item.name,
      key: item.id,
      id: item.id,
      onClick: openModal })))));





};

const animateItemPageIn = (textRef, actionRef) => {
  const tl = gsap.timeline();

  [textRef, actionRef].forEach(ref => {
    tl.to(
    ref.current,
    {
      opacity: 0,
      duration: 0.32 },

    "in").
    set(
    ref.current,
    {
      opacity: 1 },

    "in+=0.32");

  });
};

const animateItemPageOut = (textRef, actionRef, callback) => {
  const tl = gsap.timeline();
  [textRef, actionRef].forEach(ref => {
    tl.to(
    ref.current,
    {
      opacity: 0,
      duration: 0.32 },

    "out");

  });
  tl.add(callback, 1);
};

const animateModalIn = (modalRef, callback) => {
  const tl = gsap.timeline();
  tl.to(
  modalRef.current,
  {
    "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
    duration: 0.32 },

  "in").

  to(
  modalRef.current,
  {
    "clip-path": "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
    duration: 0.96 },

  "in+=0.32").

  add(callback, 0.32);
};

const animateModalOut = (modalRef, callback) => {
  const tl = gsap.timeline();
  tl.to(
  modalRef.current,
  {
    "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
    duration: 0.32 },

  "out").
  add(callback, 0.32);
};

const ItemPage = ({ store, cart, fav, slide, id, ...props }) => {
  const item = getItem(id);
  const { images, brand, name, description, price } = item;

  const [nextItem, setNextItem] = useState();
  const [prevItem, setPrevItem] = useState();

  const textRef = useRef();
  const modalRef = useRef();
  const actionRef = useRef();

  useEffect(() => {
    animateItemPageIn(textRef, actionRef);
  }, []);

  useEffect(() => {
    setNextItem(getNextItemId(slide, id));
    setPrevItem(getPrevItemId(slide, id));
    animateModalIn(modalRef, textRef);
  }, [id, slide]);

  const back = e => {
    animateModalOut(modalRef);
    animateItemPageOut(textRef, actionRef, () => {
      store.dispatch({ type: "SET_PAGE", page: 1 });
    });
  };

  const nextModal = e => {
    animateModalOut(modalRef, () => {
      store.dispatch({ type: "SET_ITEM", item: nextItem });
    });
  };

  const prevModal = e => {
    animateModalOut(modalRef, () =>
    store.dispatch({ type: "SET_ITEM", item: prevItem }));

  };

  const submit = (e, action) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    store.dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        quantity: formData.get("quantity"),
        avatar: images[0],
        brand,
        name,
        price } });


  };

  const addToFav = e => {
    store.dispatch({
      type: "ADD_TO_FAV",
      item: {
        id,
        avatar: images[0],
        brand,
        name,
        price } });


  };

  return (
    React.createElement(Container, { className: "item-page" },
    React.createElement("div", { className: "row", ref: textRef },
    React.createElement("div", { className: "instruction" }, "IKEA from the comfort of your home."),
    React.createElement("div", { className: "back", onClick: back }, "Go back")),



    React.createElement("div", { className: "modal", ref: modalRef },
    React.createElement(Carousel, { width: 360 },
    images.map((link) =>
    React.createElement(CarouselItem, { src: link, key: link, name: name, alt: name }))),


    React.createElement("form", { className: "modalAction", onSubmit: submit },
    React.createElement("div", { className: "brand" },
    React.createElement("b", null, brand)),

    React.createElement("div", null, name),
    React.createElement("div", null, description),
    React.createElement("div", null,
    React.createElement("b", null, "$", price)),

    React.createElement("div", { className: "quantity" },
    React.createElement("label", { htmlFor: "quantity" }, "Quantity: "),
    React.createElement(Input, {
      id: "quantity",
      type: "number",
      min: "1",
      max: "9",
      step: "1",
      name: "quantity",
      defaultValue: "1" })),


    React.createElement(Button, { className: "cart", name: "cart", type: "submit" }, "Add to Cart"),


    React.createElement(Button, { className: "fav", name: "fav", type: "button", onClick: addToFav },
    `${fav[id] ? "You liked this item" : "Add to Favorites"}`))),



    React.createElement("div", { className: "row", ref: actionRef, style: { marginTop: 0 } },
    React.createElement(Button, { className: "button", onClick: nextModal, disabled: !nextItem }, "Prev item"),


    React.createElement(Button, { className: "button", onClick: prevModal, disabled: !prevItem }, "Next item"))));





};

const AppBar = ({ cart, fav, store, ...props }) => {
  const [cartAnchorEl, setCartAnchorEl] = useState(null);
  const [favAnchorEl, setFavAnchorEl] = useState(null);
  const [drawer, setDrawer] = useState(window.innerWidth > 600);
  const drawerRef = useRef();

  const badgeContent = Object.keys(cart).reduce(
  (acc, key) => acc + cart[key].quantity,
  0);


  const onClickBrand = e => {
    store.dispatch({ type: "SET_PAGE", page: 0 });
    store.dispatch({ type: "SET_SLIDE", slide: 0 });
  };

  const toggleCartMenu = e => {
    setCartAnchorEl(cartAnchorEl ? null : e.currentTarget);
  };

  const toggleFavMenu = e => {
    setFavAnchorEl(favAnchorEl ? null : e.currentTarget);
  };

  const toggleDrawer = e => {
    setDrawer(!drawer);
  };

  useEffect(() => {
    window.addEventListener("resize", e => {
      setDrawer(window.innerWidth > 600);
    });
  }, []);

  useEffect(() => {
    const onClick = e => {
      setCartAnchorEl(null);
      setFavAnchorEl(null);
    };
    if (cartAnchorEl || favAnchorEl)
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [cartAnchorEl, favAnchorEl]);

  return (
    React.createElement("nav", _extends({}, props, { className: "appbar" }),
    React.createElement("div", { className: "row" },
    React.createElement(Button, { className: "drawerBtn", onClick: toggleDrawer },
    React.createElement(MenuIcon, null)),

    React.createElement(Button, { className: "brand", role: "banner", onClick: onClickBrand }, "IKEA")),



    React.createElement("div", { className: "tabs", role: "tabpanel", id: "tabpanel" },
    React.createElement("div", {
      className: "drawer",
      ref: drawerRef,
      style: { display: drawer ? "flex" : "none" } },

    ["Products", "Rooms", "Inspirations", "On Sale"].map((tab) =>
    React.createElement(Button, {
      key: tab,
      className: "tab",
      role: "tab",
      "aria-controls": "tabpanel" },

    tab))),



    React.createElement(Button, {
      className: "tab",
      onClick: toggleFavMenu,
      role: "tab",
      title: "liked items",
      "aria-controls": "tabpanel",
      "aria-label": "liked items" },

    React.createElement(HeartIcon, null)),

    React.createElement(Badge, {
      className: "tab",
      content: badgeContent,
      visible: badgeContent > 0,
      onClick: toggleCartMenu,
      role: "tab",
      title: "Your cart",
      "aria-controls": "tabpanel",
      "aria-label": "Your cart" },

    React.createElement(Button, null,
    React.createElement(CartIcon, null)))),



    React.createElement(CartMenu, { anchorEl: cartAnchorEl, cart: cart }),
    React.createElement(FavMenu, { anchorEl: favAnchorEl, fav: fav })));


};

const App = ({ cart, fav, slide, page, item, store }) => {
  return (
    React.createElement(Fragment, null,
    React.createElement(AppBar, { cart: cart, fav: fav, store: store }),
    page === 0 ?
    React.createElement(RoomsPage, { store: store, slide: slide }) :
    page === 1 ?
    React.createElement(ItemsPage, {
      slide: slide,
      cart: cart,
      fav: fav,
      page: page,
      store: store }) :


    React.createElement(ItemPage, { slide: slide, id: item, cart: cart, fav: fav, store: store })));



};

const initialState = {
  page: 0,
  slide: 0,
  item: 0,
  cart: {},
  fav: {} };


const ADD_TO_CART = "ADD_TO_CART";
const ADD_TO_FAV = "ADD_TO_FAV";
const SET_PAGE = "SET_PAGE";
const SET_SLIDE = "SET_SLIDE";
const SET_ITEM = "SET_ITEM";

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:{
        const updatedState = { ...state },
        { id } = action.item,
        quantity = Number(action.item.quantity);
        if (updatedState.cart[id]) updatedState.cart[id].quantity += quantity;else
        {
          updatedState.cart[id] = {
            ...action.item,
            quantity };

        }

        return updatedState;
      }
    case ADD_TO_FAV:{
        const updatedState = { ...state },
        { id } = action.item;
        if (updatedState.fav[id]) updatedState.fav[id] = null;else
        {
          updatedState.fav[id] = {
            ...action.item };

        }

        return updatedState;
      }
    case SET_PAGE:
      return { ...state, page: action.page };
    case SET_SLIDE:
      return { ...state, slide: action.slide };
    case SET_ITEM:
      return { ...state, item: action.item };
    default:
      return state;}

};

const store = createStore(reducers);

const render = () => {
  ReactDOM.render(
  React.createElement(App, _extends({}, store.getState(), { store: store })),
  document.getElementById("root"));

};

store.subscribe(render);
render();