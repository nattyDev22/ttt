import Link from "next/link";
import Btn from "./ui/Btn";
import BtnOut from "./ui/BtnOut";

const Contact = () => {
  return (
    <div className="flex gap-10 mx-10">
      <Link href={"https://t.me/NILE_Creatives_bot"} target="blank">
        <BtnOut text={"Schedule A Call"} />
      </Link>
      <Link href={"tel:+251900424437"}>
        <Btn text={"Call Now !"} />
      </Link>
    </div>
  );
};

export default Contact;
