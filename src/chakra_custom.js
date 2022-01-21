import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    text: "Open Sans",
    heading: "Open Sans",
  },
  colors: {
    brand: {
      50: "#fffadb",
      100: "#fff0ad",
      200: "#fedb4b",
      300: "#fed11b",
      400: "#fed428",
      500: "#D9B423",
      600: "#fed428",
      700: "#fed428",
    },
  },
  layerStyles: {
    card_new_collection: {
      bg: "#fed428",
      p: "6px 15px 10px 15px",
      borderRadius: "xl",
      mt: "0.5rem",
    },
    card_collection: {
      mt: "0.5rem",
      bg: "#2f3136",
      color: "white",
      p: "6px 15px 10px 15px",
      borderRadius: "xl",
      _hover: { backgroundColor: "#393c43", color: "white" },
    },
    card_title: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      w: "100%",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
    card_content: {
      fontSize: "0.9rem",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
    card_icon: {
      w: "1rem",
      h: "1rem",
      mt: "13px",
      float: "right",
    },
    section_title: {
      color: "white",
      fontWeight: "bold",
      fontSize: "1.2rem",
    },
    upload_box: {
      h: "100px",
      w: "100px",
      m: "auto",
      bg: "#595A5A",
      borderRadius: "10",
      textAlign: "right",
      position: "relative",
    },
  },
  screen: {
    sm: "540px",
    md: "720px",
    lg: "960px",
    xl: "1140px",
  },
  components: {
    Link: {
      baseStyle: {
        fontSize: "l",
        paddingRight: "2rem",
        color: "white",
        _hover: {
          textDecoration: "none",
          fontWeight: "600",
          color: "white",
        },
      },
      variants: {
        current: {
          fontWeight: "bold",
          _hover: {
            fontWeight: "bold",
          },
        },
      },
    },
    Box: {
      baseStyle: {
        padding: "10px 15px",
        borderRadius: "10px",
        backgroundColor: "#2f3136",
        color: "white",
      },
    },
    Button: {
      variants: {
        modal_cancel: {
          mr: 3,
          bg: "#2f3136",
          _hover: { backgroundColor: "#2f3136" },
          _active: { backgroundColor: "#2f3136" },
          _focus: { boxShadow: "0" },
        },
        modal_submit: {
          bg: "#fed428",
          color: "#2f3136",
          _hover: { backgroundColor: "#fed428", boxShadow: "0" },
          _active: { backgroundColor: "#fed428" },
          _focus: { boxShadow: "0" },
        },
      },
    },
    Input: {
      variants: {
        modal_input: {
          borderColor: "#4c4c4c",
          _focus: { outlineColor: "#4c4c4c", outlineOffset: "0" },
        },
      },
    },
  },
});

export default theme;