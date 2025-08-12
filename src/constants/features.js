import { ImLibrary } from "react-icons/im";
import { FaComputer } from "react-icons/fa6";
import { GiMicroscope } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { GrBus } from "react-icons/gr";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { MdFactory } from "react-icons/md";
import ScienceImg from "../assets/Images/features/microscope.jpg";
import fieldvisit from "../assets/Images/features/hmfieldVisit.jpg";
import basketball from "../assets/Images/features/ExtracurricularPrograms.jpg";
import futsal from "../assets/Images/features/extracurricularFutsal.jpg";
import ACclass from "../assets/Images/ACclass.jpg";
import HMlab from "../assets/Images/BestHm.jpg";
import Computer from "../assets/Course/ComputerLab.jpg";

const features = [
  {
    id: 1,
    img: ScienceImg,
    label: "Science Lab",
    text: "Our state-of-the-art science lab is equipped for hands-on experiments in physics, chemistry, and biology, fostering curiosity and practical learning.",
  },
  {
    id: 2,
    img: Computer,
    label: "Computer Lab",
    text: "Modern computer labs with high-speed internet and updated systems provide students with essential digital skills and IT training.",
  },
  {
    id: 3,
    img: ACclass,
    label: "AC Seminar Halls",
    text: "Spacious, air-conditioned seminar halls offer a comfortable environment for lectures, workshops, and interactive sessions.",
  },
  {
    id: 4,
    img: HMlab,
    label: "HM Lab",
    text: "Professional cooking labs for Hotel Management students, featuring modern kitchen equipment and expert instructors for culinary excellence.",
  },
  {
    id: 5,
    img: fieldvisit,
    label: "Field Visit",
    text: "Regular field visits and industrial tours give students real-world exposure, connecting classroom learning with industry practices.",
  },
  {
    id: 6,
    img: basketball,
    label: "Basketball & Futsal Programs",
    text: "Our campus encourages holistic development with dedicated basketball and futsal courts, promoting teamwork, fitness, and extracurricular engagement.",
  },
];

export default features;
