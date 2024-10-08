/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html", "./courses/*.html"],
  theme: {
    fontFamily: {
      'systemui': ["system-ui", "sans-serif"],
      'serif': ["DM Sans", "serif"],
      'opensans': ["Open Sans", "system-ui"],
      'notosans': ["Noto Sans", "system-ui"]
    },

    colors: {
      "mainbg-color": "rgb(249, 248, 244)",
      "mainbg-color-dark": "rgb(30, 30, 30)",
      "font-color-pri": "rgb(55, 53, 47)",
      "font-color-sec": "#20C20E",
      "font-color-white": "#FFFFFF",
      "font-color-blue": "#55aff9",
      "font-color-blue-dark": "#146EBE",
      "font-color-yellow": "#FFD43B",
      "font-color-yellow-dark": "#FAB005",
      "font-color-purple": "#B197FC",
      "font-color-purple-dark": "#6741D9",
      "font-color-pink": "#E599F7",
      "font-color-pink-dark": "#9C36B5",
      "font-color-red": "#FF8787",
      "font-color-red-dark": "#E03131",
      "font-color-dark": "rgb(235, 235, 235)",
      "link-color": "rgb(232, 28, 79)",
      "hover-color": "rgb(108, 117, 125)",
      "navbar-color-pri": "rgb(244, 242, 233)",
      "navbar-color-dark": "rgb(18, 18, 18)",
      "color-transparent": "rgb(0,0,0,0)",
      "color-border-pri": "rgb(156, 154, 151)"
    },

    extend: {
      borderWidth: {
        '6': "6px"
      },

      maxWidth: {
        'mdsm': "344px"
      },

      width: {
        '120': '420px',
        '152': "712px",
        '200': "784px"
      },

      height: {
        '18': '68px'
      }
    },
  },
  plugins: [],
}