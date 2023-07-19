import { AiOutlineArrowUp } from "react-icons/ai";
import { useWindowScroll } from "@mantine/hooks";
import { ActionIcon, Affix, Transition, rem } from "@mantine/core";

export const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: rem(20), right: rem(20) }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            variant="filled"
            radius="xl"
            color="blue"
            aria-label="Scroll to top"
            w="50px"
            h="50px"
          >
            <AiOutlineArrowUp size="2rem" />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};
