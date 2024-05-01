import type { SvgProps } from "@/app/types";
import BackArrow from "@/app/components/Icon/BackArrow";
import ForwardArrow from "@/app/components/Icon/ForwardArrow";

const Icon = (props: SvgProps) => {
  switch (props.name?.toLowerCase()) {
    case "backarrow":
      return <BackArrow {...props} />;
    case "forwardarrow":
      return <ForwardArrow {...props} />
    default:
      return null;
  }
};

export default Icon;
