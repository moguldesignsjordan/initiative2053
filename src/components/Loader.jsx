import { motion } from "framer-motion";
import Logo from "../assets/Logo.png"; // <-- your actual logo

export default function Loader() {
  return (
    <div className="loader">
      <motion.img
        src={Logo}
        alt="Initiative 2053"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="loader-logo"
      />
    </div>
  );
}
