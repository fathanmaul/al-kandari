import { FaMosque } from "react-icons/fa6";
import logo from "../../assets/icon.svg";
export default function MainIcon({ inverse }: { inverse?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <FaMosque className="w-10 h-10" />
      <div>
        <h4 className={`text-sm ${inverse ? "text-white" : ""}`}>
          المسجد الكندري
        </h4>
        <h4 className={`text-lg font-bold ${inverse ? "text-white" : ""}`}>
          Masjid Al-Kandari
        </h4>
      </div>
    </div>
  );
}
