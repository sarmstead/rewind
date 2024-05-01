import type { SvgProps } from "@/app/types";

const ForwardArrow = ({
  height = "40",
  fill = "#555555",
  width = "40",
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.9587 21.667H6.66699V18.3337H26.9587L17.6253 9.00033L20.0003 6.66699L33.3337 20.0003L20.0003 33.3337L17.6253 31.0003L26.9587 21.667Z"
        fill={fill}
      />
    </svg>
  );
};

export default ForwardArrow;
