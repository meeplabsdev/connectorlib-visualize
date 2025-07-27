import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      primary: "from-[#D4BCEC] to-[#9577C0]",
      secondary: "from-[#95A2FB] to-[#5361D6]",
      success: "from-[#88E67C] to-[#3CB843]",
      warning: "from-[#FBD649] to-[#D6A20A]",
      danger: "from-[#FF9C9B] to-[#DB596F]",
      content: "dark:from-[#52525b] dark:to-[#27272a]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "content",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
