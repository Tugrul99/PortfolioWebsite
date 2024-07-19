// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackground: "#0a192f",
        navhover: "#64ffda",
        "general-opacity": "#8892b0",
        "about-color": "#ccd6f6",
        "katman":"#0a192f",
      },
      fontSize: {
        sm: "0.8rem",
      },
      fontFamily: {
        fira: ["Fira Mono", "monospace"],
        firacode: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".after-vertical-line::after": {
          content: '""',
          position: "fixed",
          top: "65%",
          transform: "translateX(-50%)",
          left: "110%",
          width: "1.1px",
          height: "100vh",
          backgroundColor: "#8892b0",
          transform: "rotate(270deg)",
          transformOrigin: "top",
          marginRight: "10px",
        },
        ".after-vertical-social::after": {
          content: '""',
          position: "fixed",
          top: "120%",
          transform: "translateX(-50%)",
          left: "80%",
          width: "1.1px",
          height: "100vh",
          backgroundColor: "#8892b0",
          transform: "rotate(90)",
          marginRight: "10px",
        },
        ".after-horizontal-line": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          "&::after": {
            content: '""',
            flexGrow: "0.35",
            height: "1px",
            backgroundColor: "#8892b0",
            marginLeft: "1rem",
          },
        },
      });
    },
  ],
};
