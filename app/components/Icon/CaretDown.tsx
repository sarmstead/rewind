import type { SvgProps } from "@/app/types";

const CaretDown = ({
  height = "24",
  fill = "#555555",
  width = "24",
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15.3751L6 9.3751L7.4 7.9751L12 12.5751L16.6 7.9751L18 9.3751L12 15.3751Z"
        fill={fill}
      />
    </svg>
  );
};

export default CaretDown;
