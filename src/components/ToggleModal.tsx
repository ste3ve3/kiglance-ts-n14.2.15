import Backdrop from "@mui/material/Backdrop";
import { FC, ReactNode } from "react";

interface Props {
  open: boolean;
  children: ReactNode;
}

const ToggleModal: FC<Props> = ({ open, children }) => {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#000", zIndex: theme.zIndex.drawer })}
      open={open}
      className="relative"
    >
      {children}
    </Backdrop>
  );
};

export default ToggleModal;
