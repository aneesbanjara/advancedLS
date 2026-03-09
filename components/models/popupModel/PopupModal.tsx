"use client";
import { IoMdClose } from "react-icons/io";

interface PopupModalProps {
  imageSrc: string;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ imageSrc, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
      <div className="relative max-w-2xl w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow hover:bg-red-500 hover:text-white transition"
          aria-label="Close popup"
        >
          <IoMdClose className="w-5 h-5" />
        </button>
        <img
          src={imageSrc}
          alt="CME Announcement"
          className="rounded-lg h-[90vh] border-4 border-white shadow-xl"
        />
      </div>
    </div>
  );
};

export default PopupModal;
