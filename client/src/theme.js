// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#eee0e0",
    100: "#d4b6b6",
    200: "#f08080",
    300: "#e67575",
    400: "#ee6f6f",
    500: "#f15f5f",
    600: "#ee5959",
    700: "#f04646",
    800: "#ec2d2d",
    900: "#001519",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          primary: {
            dark: colorTokens.primary[200],
            main: colorTokens.primary[500],
            light: colorTokens.primary[800],
          },
          neutral: {
            dark: colorTokens.grey[10],
            main: colorTokens.grey[50],
            mediumMain: colorTokens.grey[100],
            medium: colorTokens.grey[200],
            light: colorTokens.grey[500],
          },
          background: {
            default: colorTokens.grey[1000],
            alt: colorTokens.grey[800],
          },
        }
        : {
          // palette values for light mode
          primary: {
            dark: colorTokens.primary[700],
            main: colorTokens.primary[500],
            light: colorTokens.primary[50],
          },
          neutral: {
            dark: colorTokens.grey[1000],
            main: colorTokens.grey[1000],
            mediumMain: colorTokens.grey[500],
            medium: colorTokens.grey[800],
            light: colorTokens.grey[200],
          },
          background: {
            default: colorTokens.grey[10],
            alt: colorTokens.grey[0],
          },
        }),
    },
    typography: {
      fontFamily: ["Poppins", "Rubik", "Ubuntu"].join(","),
      fontSize: 12,
      fontWeight: 500,
      h1: {
        fontFamily: ["Poppins", "Rubik", "Ubuntu"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Poppins", "Rubik"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Poppins", "Rubik"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Poppins", "Rubik"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Poppins", "Rubik"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Poppins", "Rubik"].join(","),
        fontSize: 14,
      },
    },
  };
};
