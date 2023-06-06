import { mainPrimary } from "../../../../common";

export const SettingStyle = {
  "& .themeSetting .MuiToggleButtonGroup-root": {
    width: "100%",
    py: "1rem",
  },
  "& .themeSetting .MuiToggleButtonGroup-root .MuiButtonBase-root": {
    width: "100%",
    py: "1rem",
    borderRadius: "0.75rem",
  },
  "& .themeSetting .MuiToggleButtonGroup-root .MuiButtonBase-root.MuiToggleButtonGroup-grouped:not(:last-of-type), ":
    {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  "& .themeSetting .MuiToggleButtonGroup-root .MuiButtonBase-root.MuiToggleButtonGroup-grouped:not(:first-of-type)":
    {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  "& .themeSetting .MuiToggleButtonGroup-root .MuiButtonBase-root.Mui-selected":
    {
      color: mainPrimary,
    },
  "& .themeSetting .MuiToggleButtonGroup-root .MuiButtonBase-root .MuiTypography-root":
    {
      pl: "0.5rem",
    },

  "& .backgroundNotification .MuiBox-root": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: "0.5rem",
    py: "0.2rem",
  },

  "& .NofificationCategory .MuiBox-root": {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    padding: "1rem 0",
  },
  "& .NofificationCategory .MuiBox-root .MuiButtonBase-root ": {
    width: "calc(50% - 0.5rem)",
    padding: "1rem",
    fontSize: "1.1rem",
    borderRadius: "0.75rem",
  },
  "& .NofificationCategory .MuiBox-root .MuiButtonBase-root.MuiButton-contained":
    {
      border: "1px solid #00000000",
    },
};
