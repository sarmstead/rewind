import type { SvgProps } from "@/app/types"

const BackArrow = ({ height = "40", fill = "#555555", width = "40" }: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0413 18.333L33.333 18.333L33.333 21.6663L13.0413 21.6663L22.3747 30.9997L19.9997 33.333L6.66634 19.9997L19.9997 6.66634L22.3747 8.99967L13.0413 18.333Z"
        fill={fill}
      />
    </svg>
  );
};

export default BackArrow;
