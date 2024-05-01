import type { SvgProps } from "@/app/types";
import BackArrow from "@/app/components/Icon/BackArrow";
import ForwardArrow from "@/app/components/Icon/ForwardArrow";
import MagnifyingGlass from "@/app/components/Icon/MagnifyingGlass";

const Icon = (props: SvgProps) => {
  switch (props.name?.toLowerCase()) {
    case "backarrow":
      return <BackArrow {...props} />;
    case "forwardarrow":
      return <ForwardArrow {...props} />
    case "magnifyingglass":
      return <MagnifyingGlass {...props} />
    default:
      return null;
  }
};

export default Icon;
