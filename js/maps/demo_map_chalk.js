///// MAP ////////////////////////////////////////////////////////////////////////

var map;
var continentsDataProvider;

function makeMap() {
  map = new AmCharts.AmMap();
  map.handDrawn = true;
  map.fontSize = 18;
  map.fontFamily = 'Covered By Your Grace';
  map.color = "#FFFFFF";
  map.dragMap = false;

  var balloon = map.balloon;
  balloon.adjustBorderColor = false;
  balloon.borderColor = "#000000";
  balloon.fillColor = "#FFFFFF";
  balloon.offsetY = 10;
  balloon.verticalPadding = 0;

  map.areasSettings = {
    autoZoom: false,
    rollOverOutlineColor: "#ff9595",
    selectedColor: "#FFFFFF",
    rollOverColor: "#FFFFFF",
    outlineAlpha: 1,
    alpha: 0.8,
    outlineColor: "#FFFFFF",
    outlineThickness: 1,
    color: "#FFFFFF",
    rollOverPattern: {
      url: "https://www.amcharts.com/lib/3/patterns/chalk/pattern1r.jpg",
        "width": 400,
        "height": 400
    }
  };

  continentsDataProvider = {
    mapVar: AmCharts.maps.continentsLow,

    areas: [{
      id: "africa",
      title: "Africa",
      pattern: {
        url: "https://www.amcharts.com/lib/3/patterns/chalk/pattern1.jpg",
          "width": 400,
          "height": 400
      }
    }, {
      id: "asia",
      title: "Asia",
      pattern: {
        url: "https://www.amcharts.com/lib/3/patterns/chalk/pattern1.jpg",
          "width": 400,
          "height": 400
      }
    }, {
      id: "australia",
      title: "Australia",
      pattern: {
        url: "https://www.amcharts.com/lib/3/patterns/chalk/pattern1.jpg",
          "width": 400,
          "height": 400
      }
    }, {
      id: "europe",
      title: "Europe",
      pattern: {
        url: "https://www.amcharts.com/lib/3/patterns/chalk/pattern1.jpg",
          "width": 400,
          "height": 400
      }
    }, {
      id: "north_america",
      title: "North America",
      pattern: {
        url: "https://www.amcharts.com/lib/3/patterns/chalk/pattern1.jpg",
          "width": 400,
          "height": 400
      }
    }, {
      id: "south_america",
      title: "South America",
      pattern: {
        url: "https://www.amcharts.com/lib/3/patterns/chalk/pattern1.jpg",
          "width": 400,
          "height": 400
      }
    }]
  };

  map.dataProvider = continentsDataProvider;
  var zoomControl = map.zoomControl;
  zoomControl.panControlEnabled = false;
  zoomControl.zoomControlEnabled = false;

  map.write("demo-map-chalk");
}

makeMap();
