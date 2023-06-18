// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "title": "Ebbinghaus Online_lab.js",
      "type": "lab.flow.Sequence",
      "parameters": {},
      "plugins": [],
      "metadata": {
        "title": "Ebbinghaus Online_lab.js",
        "description": "",
        "repository": "",
        "contributors": ""
      },
      "messageHandlers": {},
      "files": {},
      "responses": {},
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "html",
              "content": "\u003Cbutton id=\"Start\"\u003EContinue to Sample Experiment\u003C\u002Fbutton\u003E\r\n\r\n\u003Cinput type=\"button\" onclick=\"window.location.href='https:\u002F\u002Fwww.google.com';\" value=\"Langridge & Marotta 2023 MNN Poster PDF\" \u002F\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "after:end": function anonymous(
) {
document.body.style.backgroundColor = "white"
document.body.style.color = "black"
}
          },
          "title": "Continue to Experiment"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
this.options.events['click button#fullscreen'] = function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }

/* Continue to next screen */
this.end()
}
}
          },
          "title": "Fullscreen",
          "content": "\u003Cbutton id=\"fullscreen\"\u003EPress to enter full screen\u003C\u002Fbutton\u003E"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "Experiment 1: ",
              "content": "A grey 'start' button will appear in the center of the screen. Press this button to begin each trial."
            },
            {
              "required": true,
              "type": "image",
              "width": "",
              "height": "",
              "src": "${ this.files[\"Start Button.PNG\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "When the target circle appears, use the trackpad on the desk in front of you to click the center of the target circle AS QUICKLY AND AS ACCURATELY AS POSSIBLE.\n\n"
            },
            {
              "required": true,
              "type": "image",
              "width": "",
              "height": "",
              "src": "${ this.files[\"Instructions P_Large Pic.PNG\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "Click 'Continue' to begin."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {
            "Instructions P_Large Pic.PNG": "embedded\u002F7e1adc82bcdc2f1336e95a14c85f723b32d484c1429e2e35fcd941b06df644fd.PNG",
            "Start Button.PNG": "embedded\u002Ffd9ccb3ec1a51d36c433df61c8789ae8b8b0ee06b54b1b575036a844bc3a6e3e.PNG"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Practice Instructions_Vis"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "Context_Size": "P_Small Context Only.png",
              "Position_H": "-175",
              "Target_Size": "50",
              "Position_V": "0"
            },
            {
              "Context_Size": "Control Context Only.png",
              "Position_H": "175",
              "Target_Size": "50",
              "Position_V": "0"
            },
            {
              "Context_Size": "P_Large Context Only.png",
              "Position_H": "0",
              "Target_Size": "50",
              "Position_V": "175"
            },
            {
              "Context_Size": "Control Context Only.png",
              "Position_H": "0",
              "Target_Size": "40",
              "Position_V": "-175"
            },
            {
              "Context_Size": "Control Context Only.png",
              "Position_H": "0",
              "Target_Size": "60",
              "Position_V": "175"
            }
          ],
          "sample": {
            "mode": "draw",
            "n": ""
          },
          "files": {
            "Control Context Only.png": "embedded\u002F5e04a73c6cbecd9dac6b3063848adb79e6b7e3fd02bd826bae15c4cd343720dc.png",
            "P_Small Context Only.png": "embedded\u002Faf40cc0dbb8fe690520ca84449a67f81604c58e66d62189adaaa4c32f00eb819.png",
            "P_Large Context Only.png": "embedded\u002F992a9d10481882a0cfe4bf27e5395035a6398ea122acfc48cd5163209d98b020.png",
            "P_Small_Far Context Only.png": "embedded\u002F8f0579522952818b5e5ef468a76b6405674fea39f30203977dd5a6321ab75b20.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
}
          },
          "title": "Practice Trials_Vis",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
}
            },
            "title": "Sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "aoi",
                    "left": 0,
                    "top": "0",
                    "angle": 0,
                    "width": 20.84,
                    "height": 20.84,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "Start_Button"
                  },
                  {
                    "type": "rect",
                    "left": "0",
                    "top": "0",
                    "angle": 0,
                    "width": "600",
                    "height": "600",
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "circle",
                    "left": 0,
                    "top": "0",
                    "angle": 0,
                    "width": 15,
                    "height": 15,
                    "stroke": "#aaaaaa",
                    "strokeWidth": 1,
                    "fill": "#dddddd"
                  },
                  {
                    "type": "aoi",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "25",
                    "height": "25",
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "@Start_Button"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "click @Start_Button": "Start Position"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Start Button",
                "plugins": [
                  {
                    "type": "mousetrap",
                    "mode": "mousetrap",
                    "path": "global.MousetrapPlugin"
                  }
                ]
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "600",
                    "height": "600",
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "image",
                    "left": "${parameters.Position_H}",
                    "top": "${parameters.Position_V}",
                    "angle": 0,
                    "width": "240",
                    "height": "240",
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${this.files[this.parameters.Context_Size]}"
                  },
                  {
                    "type": "circle",
                    "left": "${parameters.Position_H}",
                    "top": "${parameters.Position_V}",
                    "angle": 0,
                    "width": "${parameters.Target_Size}",
                    "height": 70,
                    "stroke": "#ffffff",
                    "strokeWidth": 1,
                    "fill": "#ffffff"
                  },
                  {
                    "type": "aoi",
                    "left": "${parameters.Position_H}",
                    "top": "${parameters.Position_V}",
                    "angle": 0,
                    "width": "${parameters.Target_Size}",
                    "height": "${parameters.Target_Size}",
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "Response"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "P_Small_3.png": "embedded\u002F6dc69d0480b14a98a83de75f92c0eca4e2669255731aa141a99f1be6da719c42.png",
                  "P_Large_3.png": "embedded\u002Fd37f527663db56db4b0fdb663ab0dd627ead047fc61d08dd0f6eaa9aef6b2615.png",
                  "Control_3.png": "embedded\u002F7e50a10442cfc7c81fc90163ae942334600b470c1821b5485b1c59f6e81548f2.png",
                  "Control_3 (Big).png": "embedded\u002F708b6f94fcde61e1648d34d6678481c4b21d066970e2ca1ad797bbd3752cdf8e.png",
                  "Control_3 (Small).png": "embedded\u002F946b8f3f3b01a592a1b8fa9b2c099dd13287ee645f541445da4ecaec9e0615d9.png",
                  "P_Small Context Only.png": "embedded\u002Faf40cc0dbb8fe690520ca84449a67f81604c58e66d62189adaaa4c32f00eb819.png",
                  "P_Large Context Only.png": "embedded\u002Fb442ec0b7fcb1633cb33796d7f9d1748c72e40ee71643d664de1b30999111e28.png",
                  "Control Context Only.png": "embedded\u002F5e04a73c6cbecd9dac6b3063848adb79e6b7e3fd02bd826bae15c4cd343720dc.png"
                },
                "responses": {
                  "click @Response": "Response"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Practice",
                "plugins": [
                  {
                    "type": "mousetrap",
                    "mode": "mousetrap",
                    "path": "global.MousetrapPlugin"
                  }
                ]
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "600",
                    "height": "600",
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[\"screen.jpeg\"] }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "screen.jpeg": "embedded\u002F0444150c2c031ef7f44caaa0725897453f39206c03dab57ddf1d6532b6aec5b0.jpeg"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Mask",
                "timeout": "200"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "Experiment 2: ",
              "content": "A grey 'start' button will appear in the center of the screen, along with a target circle. Press this button to begin each trial."
            },
            {
              "required": true,
              "type": "text",
              "title": "",
              "content": "Clicking the start button will cause the target to disappear.  After clicking the start button, move your cursor and click the center of the disappeared target AS QUICKLY AND AS ACCURATELY AS POSSIBLE."
            },
            {
              "required": true,
              "type": "text",
              "content": "Click 'Continue' to begin.  Good Luck!"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
}
          },
          "title": "Practice Instructions_Dis"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "Context_Size": "P_Small Context Only.png",
              "Position_H": "-175",
              "Target_Size": "50",
              "Position_V": "0"
            },
            {
              "Context_Size": "P_Large Context Only.png",
              "Position_H": "175",
              "Target_Size": "50",
              "Position_V": "0"
            },
            {
              "Context_Size": "Control Context Only.png",
              "Position_H": "0",
              "Target_Size": "50",
              "Position_V": "175"
            },
            {
              "Context_Size": "Control Context Only.png",
              "Position_H": "-175",
              "Target_Size": "40",
              "Position_V": "0"
            },
            {
              "Context_Size": "Control Context Only.png",
              "Position_H": "0",
              "Target_Size": "60",
              "Position_V": "-175"
            }
          ],
          "sample": {
            "mode": "draw",
            "n": ""
          },
          "files": {
            "Control Context Only.png": "embedded\u002F5e04a73c6cbecd9dac6b3063848adb79e6b7e3fd02bd826bae15c4cd343720dc.png",
            "P_Small Context Only.png": "embedded\u002Faf40cc0dbb8fe690520ca84449a67f81604c58e66d62189adaaa4c32f00eb819.png",
            "P_Large Context Only.png": "embedded\u002F992a9d10481882a0cfe4bf27e5395035a6398ea122acfc48cd5163209d98b020.png",
            "P_Small_Far Context Only.png": "embedded\u002F8f0579522952818b5e5ef468a76b6405674fea39f30203977dd5a6321ab75b20.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
}
          },
          "title": "Practice Trials_Dis",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
}
            },
            "title": "Sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "600",
                    "height": 600,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "image",
                    "left": "${parameters.Position_H}",
                    "top": "${parameters.Position_V}",
                    "angle": 0,
                    "width": "240",
                    "height": "240",
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${this.files[this.parameters.Context_Size]}"
                  },
                  {
                    "type": "circle",
                    "left": "${parameters.Position_H}",
                    "top": "${parameters.Position_V}",
                    "angle": 0,
                    "width": "${parameters.Target_Size}",
                    "height": 70,
                    "stroke": "#ffffff",
                    "strokeWidth": 1,
                    "fill": "#ffffff"
                  },
                  {
                    "type": "circle",
                    "left": "0",
                    "top": 0,
                    "angle": 0,
                    "width": "15",
                    "height": 55,
                    "stroke": "#aaaaaa",
                    "strokeWidth": 1,
                    "fill": "#dddddd"
                  },
                  {
                    "type": "aoi",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "25",
                    "height": "25",
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "Start_Click"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "P_Small_3.png": "embedded\u002F6dc69d0480b14a98a83de75f92c0eca4e2669255731aa141a99f1be6da719c42.png",
                  "P_Large_3.png": "embedded\u002Fd37f527663db56db4b0fdb663ab0dd627ead047fc61d08dd0f6eaa9aef6b2615.png",
                  "Control_3.png": "embedded\u002F7e50a10442cfc7c81fc90163ae942334600b470c1821b5485b1c59f6e81548f2.png",
                  "Control_3 (Big).png": "embedded\u002F708b6f94fcde61e1648d34d6678481c4b21d066970e2ca1ad797bbd3752cdf8e.png",
                  "Control_3 (Small).png": "embedded\u002F946b8f3f3b01a592a1b8fa9b2c099dd13287ee645f541445da4ecaec9e0615d9.png",
                  "P_Small Context Only.png": "embedded\u002Faf40cc0dbb8fe690520ca84449a67f81604c58e66d62189adaaa4c32f00eb819.png",
                  "P_Large Context Only.png": "embedded\u002Fb442ec0b7fcb1633cb33796d7f9d1748c72e40ee71643d664de1b30999111e28.png",
                  "Control Context Only.png": "embedded\u002F5e04a73c6cbecd9dac6b3063848adb79e6b7e3fd02bd826bae15c4cd343720dc.png"
                },
                "responses": {
                  "click @Start_Click": "Start_Click"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Practice",
                "plugins": [
                  {
                    "type": "mousetrap",
                    "mode": "mousetrap",
                    "path": "global.MousetrapPlugin"
                  }
                ]
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "600",
                    "height": 600,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "aoi",
                    "left": "${parameters.Position_H}",
                    "top": "${parameters.Position_V}",
                    "angle": 0,
                    "width": "${parameters.Target_Size}",
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "Response"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "P_Small_3.png": "embedded\u002F6dc69d0480b14a98a83de75f92c0eca4e2669255731aa141a99f1be6da719c42.png",
                  "P_Large_3.png": "embedded\u002Fd37f527663db56db4b0fdb663ab0dd627ead047fc61d08dd0f6eaa9aef6b2615.png",
                  "Control_3.png": "embedded\u002F7e50a10442cfc7c81fc90163ae942334600b470c1821b5485b1c59f6e81548f2.png",
                  "Control_3 (Big).png": "embedded\u002F708b6f94fcde61e1648d34d6678481c4b21d066970e2ca1ad797bbd3752cdf8e.png",
                  "Control_3 (Small).png": "embedded\u002F946b8f3f3b01a592a1b8fa9b2c099dd13287ee645f541445da4ecaec9e0615d9.png",
                  "P_Small Context Only.png": "embedded\u002Faf40cc0dbb8fe690520ca84449a67f81604c58e66d62189adaaa4c32f00eb819.png",
                  "P_Large Context Only.png": "embedded\u002Fb442ec0b7fcb1633cb33796d7f9d1748c72e40ee71643d664de1b30999111e28.png",
                  "Control Context Only.png": "embedded\u002F5e04a73c6cbecd9dac6b3063848adb79e6b7e3fd02bd826bae15c4cd343720dc.png"
                },
                "responses": {
                  "click @Response": "Response"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Practice",
                "plugins": [
                  {
                    "type": "mousetrap",
                    "mode": "mousetrap",
                    "path": "global.MousetrapPlugin"
                  }
                ]
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 600,
                    "height": 599.76,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[\"screen.jpeg\"] }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "screen.jpeg": "embedded\u002F0444150c2c031ef7f44caaa0725897453f39206c03dab57ddf1d6532b6aec5b0.jpeg"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Mask",
                "timeout": "200"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "Part 3: Size Judgement",
              "content": "You will be shown two target circles, one of which is slightly larger than the other."
            },
            {
              "required": true,
              "type": "text",
              "content": "Choose which target circle is largest by clicking on it.\n\n"
            },
            {
              "required": true,
              "type": "image",
              "width": "",
              "height": "",
              "src": "${ this.files[\"Comparison 1.PNG\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "If a target circle is surrounded by a ring of other circles, only consider the size of the target circle in the MIDDLE when comparing target circle sizes."
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"Comparison 2.PNG\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "Click 'Continue' to proceed."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {
            "Comparison 2.PNG": "embedded\u002Fd42115abaa6f45fa3dcb87811c3312773b0deb2d8e3c8766458c5c294f254fd3.PNG",
            "Comparison 1.PNG": "embedded\u002F1d656ca8aeed7a55387e918c995ccd20294a02d73d5780c730b764b13bcd5f04.PNG"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
}
          },
          "title": "Percept Compare Instructions"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "Context_L": "P_Large Context Only.png",
              "Context_R": "P_Small Context Only.png",
              "Target_Size_L": "50",
              "Target_Size_R": "50"
            },
            {
              "Context_L": "P_Large Context Only.png",
              "Context_R": "Control Context Only.png",
              "Target_Size_L": "50",
              "Target_Size_R": "50"
            },
            {
              "Context_L": "P_Large Context Only.png",
              "Context_R": "Control Context Only.png",
              "Target_Size_L": "50",
              "Target_Size_R": "60"
            },
            {
              "Context_L": "P_Large Context Only.png",
              "Context_R": "Control Context Only.png",
              "Target_Size_L": "50",
              "Target_Size_R": "40"
            },
            {
              "Context_L": "P_Small Context Only.png",
              "Context_R": "P_Large Context Only.png",
              "Target_Size_L": "50",
              "Target_Size_R": "50"
            },
            {
              "Context_L": "P_Small Context Only.png",
              "Context_R": "Control Context Only.png",
              "Target_Size_L": "50",
              "Target_Size_R": "50"
            },
            {
              "Context_L": "P_Small Context Only.png",
              "Context_R": "Control Context Only.png",
              "Target_Size_L": "50",
              "Target_Size_R": "60"
            },
            {
              "Context_L": "P_Small Context Only.png",
              "Context_R": "Control Context Only.png",
              "Target_Size_L": "50",
              "Target_Size_R": "40"
            },
            {
              "Context_L": "Control Context Only.png",
              "Context_R": "P_Large Context Only.png",
              "Target_Size_L": "50",
              "Target_Size_R": "50"
            },
            {
              "Context_L": "Control Context Only.png",
              "Context_R": "P_Small Context Only.png",
              "Target_Size_L": "50",
              "Target_Size_R": "50"
            },
            {
              "Context_L": "Control Context Only.png",
              "Context_R": "Control Context Only.png",
              "Target_Size_L": "50",
              "Target_Size_R": "60"
            },
            {
              "Context_L": "Control Context Only.png",
              "Context_R": "Control Context Only.png",
              "Target_Size_L": "50",
              "Target_Size_R": "40"
            },
            {
              "Context_L": "Control Context Only.png",
              "Context_R": "P_Large Context Only.png",
              "Target_Size_L": "60",
              "Target_Size_R": "50"
            },
            {
              "Context_L": "Control Context Only.png",
              "Context_R": "P_Small Context Only.png",
              "Target_Size_L": "60",
              "Target_Size_R": "50"
            },
            {
              "Context_L": "Control Context Only.png",
              "Context_R": "Control Context Only.png",
              "Target_Size_L": "60",
              "Target_Size_R": "50"
            },
            {
              "Context_L": "Control Context Only.png",
              "Context_R": "Control Context Only.png",
              "Target_Size_L": "60",
              "Target_Size_R": "40"
            },
            {
              "Context_L": "Control Context Only.png",
              "Context_R": "P_Large Context Only.png",
              "Target_Size_L": "40",
              "Target_Size_R": "50"
            },
            {
              "Context_L": "Control Context Only.png",
              "Context_R": "P_Small Context Only.png",
              "Target_Size_L": "40",
              "Target_Size_R": "50"
            },
            {
              "Context_L": "Control Context Only.png",
              "Context_R": "Control Context Only.png",
              "Target_Size_L": "40",
              "Target_Size_R": "60"
            },
            {
              "Context_L": "Control Context Only.png",
              "Context_R": "Control Context Only.png",
              "Target_Size_L": "40",
              "Target_Size_R": "50"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": ""
          },
          "files": {
            "Control_3.png": "embedded\u002F7e50a10442cfc7c81fc90163ae942334600b470c1821b5485b1c59f6e81548f2.png",
            "P_Large_3.png": "embedded\u002Fd37f527663db56db4b0fdb663ab0dd627ead047fc61d08dd0f6eaa9aef6b2615.png",
            "P_Small_3.png": "embedded\u002F6dc69d0480b14a98a83de75f92c0eca4e2669255731aa141a99f1be6da719c42.png",
            "Control_3 (Big).png": "embedded\u002F708b6f94fcde61e1648d34d6678481c4b21d066970e2ca1ad797bbd3752cdf8e.png",
            "Control_3 (Small).png": "embedded\u002F946b8f3f3b01a592a1b8fa9b2c099dd13287ee645f541445da4ecaec9e0615d9.png",
            "P_Small Context Only.png": "embedded\u002Faf40cc0dbb8fe690520ca84449a67f81604c58e66d62189adaaa4c32f00eb819.png",
            "Control Context Only.png": "embedded\u002F5e04a73c6cbecd9dac6b3063848adb79e6b7e3fd02bd826bae15c4cd343720dc.png",
            "P_Large Context Only.png": "embedded\u002F992a9d10481882a0cfe4bf27e5395035a6398ea122acfc48cd5163209d98b020.png",
            "P_Small_Far Context Only.png": "embedded\u002F8f0579522952818b5e5ef468a76b6405674fea39f30203977dd5a6321ab75b20.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Perceptual Comparison",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "aoi",
                    "left": 0,
                    "top": "0",
                    "angle": 0,
                    "width": 20.84,
                    "height": 20.84,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "Start_Button"
                  },
                  {
                    "type": "rect",
                    "left": "0",
                    "top": "0",
                    "angle": 0,
                    "width": "600",
                    "height": "600",
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "circle",
                    "left": 0,
                    "top": "0",
                    "angle": 0,
                    "width": 15,
                    "height": 15,
                    "stroke": "#aaaaaa",
                    "strokeWidth": 1,
                    "fill": "#dddddd"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "click @Start_Button": "Start Position"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Start Button",
                "plugins": [
                  {
                    "type": "mousetrap",
                    "mode": "mousetrap",
                    "path": "global.MousetrapPlugin"
                  }
                ]
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": "0",
                    "top": "0",
                    "angle": 0,
                    "width": "600",
                    "height": "600",
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black"
                  },
                  {
                    "type": "image",
                    "left": "175",
                    "top": 0,
                    "angle": 0,
                    "width": "240",
                    "height": "240",
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[this.parameters.Context_R] }"
                  },
                  {
                    "type": "aoi",
                    "left": "-175",
                    "top": 0,
                    "angle": 0,
                    "width": "${parameters.Target_Size_L}",
                    "height": "${parameters.Target_Size_L}",
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "Response_Left"
                  },
                  {
                    "type": "image",
                    "left": "-175",
                    "top": 0,
                    "angle": 0,
                    "width": "240",
                    "height": "240",
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[this.parameters.Context_L] }"
                  },
                  {
                    "type": "circle",
                    "left": "-175",
                    "top": 0,
                    "angle": 0,
                    "width": "${parameters.Target_Size_L}",
                    "height": 55,
                    "stroke": "#ffffff",
                    "strokeWidth": 1,
                    "fill": "#ffffff"
                  },
                  {
                    "type": "circle",
                    "left": "175",
                    "top": 0,
                    "angle": 0,
                    "width": "${parameters.Target_Size_R}",
                    "height": 50,
                    "stroke": "#ffffff",
                    "strokeWidth": 1,
                    "fill": "#ffffff"
                  },
                  {
                    "type": "aoi",
                    "left": "175",
                    "top": 0,
                    "angle": 0,
                    "width": "${parameters.Target_Size_R}",
                    "height": "${parameters.Target_Size_R}",
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "Response_Right"
                  },
                  {
                    "type": "aoi",
                    "left": "-175",
                    "top": 0,
                    "angle": 0,
                    "width": "${parameters.Target_Size_L}",
                    "height": "${parameters.Target_Size_L}",
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "Response_Left"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "P_Small_3.png": "embedded\u002F6dc69d0480b14a98a83de75f92c0eca4e2669255731aa141a99f1be6da719c42.png",
                  "P_Large_3.png": "embedded\u002Fd37f527663db56db4b0fdb663ab0dd627ead047fc61d08dd0f6eaa9aef6b2615.png",
                  "Control_3.png": "embedded\u002F7e50a10442cfc7c81fc90163ae942334600b470c1821b5485b1c59f6e81548f2.png"
                },
                "responses": {
                  "click @Response_Left": "Respond_Left",
                  "click @Response_Right": "Respond_Right"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Comparison",
                "plugins": [
                  {
                    "type": "mousetrap",
                    "mode": "mousetrap",
                    "path": "global.MousetrapPlugin"
                  }
                ]
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "image",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": "600",
                    "height": "600",
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[\"screen.jpeg\"] }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "screen.jpeg": "embedded\u002F0444150c2c031ef7f44caaa0725897453f39206c03dab57ddf1d6532b6aec5b0.jpeg"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Mask",
                "timeout": "200"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "title": "Experiment Finished!",
              "content": "Thank you for participating."
            },
            {
              "required": true,
              "type": "text",
              "content": "Dr. Ryan Langridge (Postdoctoral Researcher, Psychology, University of Manitoba, langrirw@myumanitoba.ca),",
              "title": "Principal Investigator:"
            },
            {
              "required": true,
              "type": "text",
              "content": "Dr. Jonathan Marotta (Professor, Psychology, University of Manitoba, Jonathan.Marotta@umanitoba.ca)",
              "title": "Supervisor:"
            },
            {
              "required": true,
              "type": "text",
              "title": "Debriefing:",
              "content": "The purpose of this study was to measure how the perception of a circle's size influences how accurately participants judge the location of that circle's center.  To bias size perception, we used a commonly known illusion often referred to as the 'Ebbinghaus Illusion'.  This illusion involves surrounding a middle circle with a ring of larger or smaller circles.\n\nIn this illusion, a circle is usually perceived as larger when surrounded by smaller circles, while an identical sized circle is typically perceived as smaller when surrounded by larger circles.  During the experiment, you were required to choose the larger of two circles.  In some of those trials, the target circles were actually the same size, even though the illusion may have made them appear smaller or larger."
            },
            {
              "required": true,
              "type": "text",
              "content": "If you have any questions about this study, please feel free to contact us. ",
              "title": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
}
          },
          "title": "Debrief_Experiment Complete",
          "width": "l"
        }
      ]
    }
  ]
})

// Let's go!
study.run()