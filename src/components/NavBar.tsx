import {Pen, TvMinimal} from "lucide-react";
import {Link} from "react-router-dom";
import {useState} from "react";


type linkType = {
  createOKR: boolean,
  showOKR: boolean
}

export function NavBar() {


  const initialLinkValues: linkType = {createOKR: false, showOKR: false};
  const [linkValues, setLinkValues] = useState<linkType>(initialLinkValues);


  return <nav className="flex items-center min-h-screen fixed bg-cyan-300">
    <div className="flex flex-col p-3 ">
      <Link onMouseEnter={() => {
        linkValues.createOKR = true;
        setLinkValues({...linkValues});
      }} onMouseLeave={() => {
        linkValues.createOKR = false;
        setLinkValues({...linkValues});
      }} className="p-3" to="/okrForm"> <Pen/>{linkValues.createOKR ? "create" : ""}</Link>
      <Link onMouseEnter={() => {
        linkValues.showOKR = true;
        setLinkValues({...linkValues});
      }} onMouseLeave={() => {
        linkValues.showOKR = false;
        setLinkValues({...linkValues});
      }} className="p-3" to="/displayOkrForm"> <TvMinimal/>{linkValues.showOKR ? "show" : ""}</Link>
    </div>
  </nav>
}

