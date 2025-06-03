import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { buttonVariants } from "@/components/ui/button"; // Ajuste o path conforme necessário
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

export interface AnchorButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const AnchorButton = React.forwardRef<HTMLAnchorElement, AnchorButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

AnchorButton.displayName = "AnchorButton";

export { AnchorButton };
