import logoApp from "../assets/SpacedRep.png";

export const Header = () => {
  return (
    <div className="py-5 bg-container ">
      <nav className="max-w-[1366px] mx-auto px-7 flex items-center gap-5 text-lg font-bold">
        {/* <a href="/">English</a> */}
        <img src={logoApp} alt="" width={170} />
        <ul className="flex gap-3">
          <li>
            <a className="cursor-pointer" href="/">
              Cards
            </a>
          </li>
          <li>
            <a href="/talk-ia">Talk With IA</a>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};
