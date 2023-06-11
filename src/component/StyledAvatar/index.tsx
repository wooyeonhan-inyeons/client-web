import React from "react";
import Avatar from "boring-avatars";
import { avatarColors } from "../../common";

const StyledAvatar = ({
  size,
  name,
  square,
  variant,
  colors = avatarColors,
}: {
  size?: number | string;
  name?: string;
  square?: boolean;
  variant?: "marble" | "beam" | "pixel" | "sunset" | "ring" | "bauhaus";
  colors?: string[];
}) => {
  return (
    <div style={{ borderRadius: "50%" }}>
      <Avatar
        size={size}
        colors={colors}
        name={name}
        variant={variant}
        square={square}
      />
    </div>
  );
};

export default StyledAvatar;
