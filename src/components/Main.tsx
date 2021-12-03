import { Flex } from "@chakra-ui/react";
import { ReactChild, ReactChildren } from "react";

type MainProps = {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
};

export const Main = ({ children }: MainProps) => (
  <Flex as="main" direction="column" width="100%" px={["3%", "43px", "86px"]}>
    {children}
  </Flex>
);
