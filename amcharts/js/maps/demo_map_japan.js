
      var map;

      AmCharts.ready(function() {
          map = new AmCharts.AmMap();


          map.balloon.color = "#000000";

          var dataProvider = {
              mapVar: AmCharts.maps.japanLow,
              getAreasFromMap:true
          };

          map.dataProvider = dataProvider;

          map.legend = {
            "data": [{
              "title": "Riesgo Bajo",
              "color": "#7ABF66"
            }, {
              "title": "Medio bajo",
              "color": "#F9E14B"
            }, {
              "title": "Medio alto",
              "color": "#FBB45C"
            }, {
              "title": "Alto",
              "color": "#F16E53"
            }]
          };

          map.areasSettings = {
              autoZoom: true,
              selectedColor: "#CC0000"
          };

          map.smallMap = new AmCharts.SmallMap();

          map.write("demo-map-japan");

      });
