const particlesConfig = {
    
        "particles": {
          "number": {
            "value": 568,
            "density": {
              "enable": true,
              "value_area": 5208.374434773
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "edge",
            "stroke": {
              "width": 5,
              "color": "#70117d"
            },
            "polygon": {
              "nb_sides": 7
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.1122388442605865,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 0.812031052067431,
              "opacity_min": 0.06496248416539448,
              "sync": true
            }
          },
          "size": {
            "value": 80.17060304327607,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 168.09042777795818,
              "size_min": 58.46623574885502,
              "sync": true
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 96.20472365193127,
            "color": "#ffffff",
            "opacity": 0.04810236182596564,
            "width": 0.8017060304327607
          },
          "move": {
            "enable": true,
            "speed": 8.017060304327607,
            "direction": "top",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": true,
              "rotateX": 801.7060304327607,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "remove"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
export default particlesConfig;