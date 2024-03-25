AFRAME.registerComponent("comics",{
  init: function(){
    this.placesContainer = this.el 
    this.createCards()
  },
  createCards: function () {
    const thumbNailsRef = [
      {
        id: "spiderman",
        title: "Spiderman ",
        url: "./assets/spoider.jpg",
      },
      {
        id: "batman",
        title: "Batman",
        url: "./assets/batman.jpg",
      },

      {
        id: "shikari",
        title: "Shikari Shambu",
        url: "./assets/shikari.jpg",
      },
      {
        id: "captain-undy",
        title: "Captain Underpants",
        url: "./assets/captain undies.png",
      },
      {
        id: "avenger",
        title: "The Avengers",
        url: "./assets/avengers.jpg",
      },
    ];
    
    let prevoiusXPosition = -80;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;


      const borderEl = this.createBorder(position, item.id);

      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },

  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#0077CC",
      opacity: 1,
    });

    return entityEl;
  },

  createThumbNail: function(item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"circle",
      radius:9,

    })
    entityEl.setAttribute("material",{src:item.url})
    return entityEl
  },
  
createTitleEl: function (position, item) {
  const entityEl = document.createElement("a-entity");
  entityEl.setAttribute("text", {
    font: "exo2bold",
    align: "center",
    width: 70,
    color: "#e65100",
    value: item.title,
  });
  const elPosition = position;
  elPosition.y = -20;
  entityEl.setAttribute("position", elPosition);
  entityEl.setAttribute("visible", true);
  return entityEl;
},
})