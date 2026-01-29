"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const NewsletterDialog = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("Home");
  const [sending, setSending] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubscribe = async () => {
    if (!emailRef.current?.value) {
      toast.error(t("newsletter-dialog.email-required"));
      return;
    }

    if (!emailRef.current.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error(t("newsletter-dialog.email-invalid"));
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/api/mailchimp", {
        method: "POST",
        body: JSON.stringify({ email: emailRef.current.value }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success(t("newsletter-dialog.submit-success"));
        emailRef.current.value = "";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(t("newsletter-dialog.submit-error"));
    }
    setSending(false);
  };

  return (
    <Dialog>
      <DialogTrigger>
        {children}
      </DialogTrigger>
      <DialogContent className="rounded-xs">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold mt-5">{t("newsletter-dialog.title")}</DialogTitle>
          <DialogDescription className="mb-5">
            {t.rich("newsletter-dialog.description", { sup: (chunks) => <sup>{chunks}</sup> })}
          </DialogDescription>
        </DialogHeader>

        <div>
          <p>{t("newsletter-dialog.email-label")}</p>
          <input ref={emailRef} className="border border-zinc-200 rounded-xs p-2 w-full mt-2 mb-1" type="text" placeholder={t("newsletter-dialog.email-placeholder")} />
          <p className="text-sm text-zinc-500">{t("newsletter-dialog.disclaimer")}</p>
        </div>

        <DialogFooter>
          <button onClick={handleSubscribe} className="bg-[#242424] text-white px-8 py-3 rounded-xs font-bold cursor-pointer">{sending ? t("newsletter-dialog.submit-loading") : t("newsletter-dialog.submit-button")}</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterDialog;