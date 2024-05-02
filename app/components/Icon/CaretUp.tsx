import type { SvgProps } from "@/app/types";

const CaretUp = ({
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
        d="M12 8.6249L18 14.6249L16.6 16.0249L12 11.4249L7.4 16.0249L6 14.6249L12 8.6249Z"
        fill={fill}
      />
    </svg>
  );
};

export default CaretUp;
