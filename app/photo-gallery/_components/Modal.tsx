"use client";
import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);
  function onDismiss() {
    router.back();
  }

  return (
    <div
      onClick={onDismiss}
      className="absolute inset-0 flex h-screen w-screen flex-col items-center justify-center bg-slate-900/60"
    >
      <dialog
        ref={dialogRef}
        className="relative rounded-xl shadow-lg"
        onClose={onDismiss}
      >
        {children}
      </dialog>
    </div>
  );
}
