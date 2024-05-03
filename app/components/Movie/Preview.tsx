/* eslint-disable @next/next/no-img-element */

import Logo from "@/app/components/Logo";

type PreviewProps = {
  src: string;
  title: string;
};

const Preview = ({ src, title }: PreviewProps) => {
  if (!src) {
    return (
      <div className="relative h-[375px] min-w-[233px] bg-bluey flex flex-col justify-end rounded-2xl">
        <div className="absolute top-6 right-3">
          <Logo fill="#dcdcdc" height="28" width="62" />
        </div>
        <h2 className="text-left font-display text-xl font-bold text-white pb-6 px-3">
          {title}
        </h2>
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`${title} movie poster`}
      style={{ backgroundImage: `url(${src})` }}
      className={`rounded-2xl w-[233px] h-[375px] overflow-hidden bg-cover bg-center bg-no-repeat`}
    />
  );
};

export default Preview;
