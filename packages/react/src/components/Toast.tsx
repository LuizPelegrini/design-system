import { FC } from "react";
import { X } from 'phosphor-react'
import { Button } from "./Button";

type ToastProps = {
  title: string;
  message?: string;
}

export const Toast: FC<ToastProps> = ({ title, message }) => {
  return (
  <div className="py-3 px-5 bg-gray800 border border-gray600 rounded-sm flex items-start justify-between gap-3">
    <div>
      <h3 className="text-white text-xl font-bold">{title}</h3>
      {message && <p className="text-gray200 text-sm">{message}</p>}
    </div>
    <Button variant="transparent" size="auto" className="[&>svg]:w-auto [&>svg]:h-auto">
      <X className="text-gray200" size={20}/>
    </Button>
  </div>
  );
}