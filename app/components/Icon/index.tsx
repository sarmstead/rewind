import type { SvgProps } from "@/app/types";
import BackArrow from "@/app/components/Icon/BackArrow";
import CaretDown from "@/app/components/Icon/CaretDown";
import CaretUp from "@/app/components/Icon/CaretUp";
import ForwardArrow from "@/app/components/Icon/ForwardArrow";
import GitHub from "@/app/components/Icon/GitHub";
import MagnifyingGlass from "@/app/components/Icon/MagnifyingGlass";

const Icon = (props: SvgProps) => {
  switch (props.name?.toLowerCase()) {
    case "backarrow":
      return <BackArrow {...props} />;
    case "caretdown":
      return <CaretDown {...props} />;
    case "caretup":
      return <CaretUp {...props} />;
    case "forwardarrow":
      return <ForwardArrow {...props} />;
    case "github":
      return <GitHub />;
    case "magnifyingglass":
      return <MagnifyingGlass {...props} />;
    default:
      return null;
  }
};

export default Icon;
