import logo from "/projects/01/image-qr-code.png";

const Qrcode = () => {
  return (
    <div className="mt-32 flex justify-center">
      <div className="flex w-[300px] flex-col items-center gap-5 rounded-2xl bg-neutral-100 px-3 pb-8 pt-3">
        <img
          src={logo}
          alt="qr code image"
          className="rounded-xl w-[280px] h-[280px]"
        />
        <p className="px-2 text-center text-xl leading-6 font-semibold text-slate-800">
          Improve your front-end skills by building projects
        </p>
        <p className="px-3 text-center text-sm text-neutral-500">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Qrcode;
