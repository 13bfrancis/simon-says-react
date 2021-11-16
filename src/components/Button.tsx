import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface ButtonProps {
  background: string;
}

interface AnimatedButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  background: string;
  active: boolean;
  disabled: boolean;
}

export const Button = styled(motion.button)<ButtonProps>`
  border: none;
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
  cursor: pointer;
  background: ${({ background }) => background ?? ""};
  transition: box-shadow linear 0.25s;
  border-radius: 10px;
  :hover {
    box-shadow: 15px 15px 10px rgb(0 0 0 / 10%);
    scale: 1.1;
  }
`;

export const AnimatedButton = ({
  background,
  active,
  onClick,
  disabled,
}: AnimatedButtonProps) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      background={background}
      whileTap={{
        scale: 1.1,
      }}
      animate={{
        scale: active ? 1.1 : 1.0,
      }}
    />
  );
};
