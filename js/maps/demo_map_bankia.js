
        var map;
        var low_risk_countries = ['CA','FR','SE','NO'];
        var medium_low_countries = ['PE','DE','SA'];
        var medium_high_countries = ['MA','CO','BO','TR'];
        var high_countries = ['LI','RU'];
        var countries_data = [
          {
            data: low_risk_countries,
            color: '#7ABF66'
          },
          {
            data: medium_low_countries,
            color: '#F9E14B'
          },
          {
            data: medium_high_countries,
            color: '#FBB45C',
          },
          {
            data: high_countries,
            color: '#FA8067'
          }
        ];

      AmCharts.theme = AmCharts.themes.bankia;
      // add all your code to this method, as this will ensure that page is loaded
      AmCharts.ready(function() {
          // create AmMap object
          map = new AmCharts.AmMap();

          // set path to images

          var areas = [];
          for (var i = countries_data.length - 1; i >= 0; i--) {
            var this_data = countries_data[i].data;
            var this_color = countries_data[i].color;
            for (var c in this_data) {
              areas.push({
                id: this_data[c],
                color: this_color,
                selectedColor: this_color,
                customData: "Custom info",
                groupId: this_data[c]
              });
            }
          }

          /* create data provider object
           mapVar tells the map name of the variable of the map data. You have to
           view source of the map file you included in order to find the name of the
           variable - it's the very first line after commented lines.

           getAreasFromMap indicates that amMap should read all the areas available
           in the map data and treat them as they are included in your data provider.
           in case you don't set it to true, all the areas except listed in data
           provider will be treated as unlisted.
          */
          var dataProvider = {
              mapVar: AmCharts.maps.worldLow,
              getAreasFromMap: false,
              areas: areas
          };
          // pass data provider to the map object
          map.dataProvider = dataProvider;

          /* create areas settings
           * autoZoom set to true means that the map will zoom-in when clicked on the area
           * selectedColor indicates color of the clicked area.
           */
          map.areasSettings = {
              // autoZoom: true,
              // color: '#D9D9D9',
              // outlineColor: '#FFFFFF',
              // outlineThickness: 1,
              // outlineAlpha: 1,
              // rollOverOutlineColor: '#D9D9D9',
              // rollOverBrightness:10,
          };

          // let's say we want a small map to be displayed, so let's create and add it to the map
          // map.smallMap = new AmCharts.SmallMap();

          // enable zooming on mousewheel
          // map.mouseWheelZoomEnabled = true;

          var legend = {
            "data": [{
              "title": "Riesgo Bajo",
              "color": "#7ABF66",
              "customMarker": "images/low_risk.svg"
            }, {
              "title": "Medio bajo",
              "color": "#F9E14B",
              "customMarker": "images/medium_low.svg"
            }, {
              "title": "Medio alto",
              "color": "#FBB45C",
              "customMarker": "images/medium_high.svg"
            }, {
              "title": "Alto",
              "color": "#F16E53",
              "customMarker": "images/high.svg"
            }]
          }

          map.legend = legend;

          // Add custom actions
          var listeners = [
            {
              "event": "clickMapObject",
              "method": function( event ) {
                console.log(event);
                  var info_box = document.getElementById( "info" );
                  info_box.innerHTML = '<p><b>' + event.mapObject.title + '</b></p><p>' + event.mapObject.customData + '</p>';
                  info_box.setAttribute('class', 'active');
                }
            },
            {
              "event": "homeButtonClicked",
              "method": function( event ) {
                var info_box = document.getElementById( "info" );
                info_box.setAttribute('class', '');
              }
            }
          ];
          map.listeners = listeners;

          // write the map to container div
          map.write("demo-map-bankia");

          var zoomInCountry = function ( event ) {
            var datalist = document.getElementById(event.target.getAttribute('list'));
            var value = '';

            for (var option = 0; option < datalist.children.length; option ++) {
              if (datalist.children[option].text == event.target.value) {
                value = datalist.children[option].getAttribute('data-value');
              }
            }
            map.clickMapObject(map.getObjectById(value));
          };

          var input_search = document.getElementById('input-search');
          input_search.addEventListener('input', zoomInCountry);
      });
