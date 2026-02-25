export const neoStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    background: "#d7d7d7",
    boxShadow: "6px 6px 12px #b8b8b8, -6px -6px 12px #f6f6f6",
    cursor: "pointer",
    transition: "box-shadow 0.2s ease",
    textDecoration: "none",
    color: "black",
};

export const neoHover = {
    ...neoStyle,
    boxShadow: "inset 4px 4px 8px #b8b8b8, inset -4px -4px 8px #f6f6f6",
};