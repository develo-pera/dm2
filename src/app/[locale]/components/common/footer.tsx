"use client";

import Image from "next/image";
import Link from "next/link";
import Socials from "./socials";
import { MOBILE_NUMBER } from "@/lib/consts";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useLocale, useTranslations } from "next-intl";
import { localeIdAttribute, localeUrl } from "@/i18n/helpers";

const localeUrlMap = {
  sr: "/politika-privatnosti",
  en: "/privacy-policy"
}

const localeIdMap = {
  sr: "kontakt",
  en: "contact"
}

const Footer = () => {
  const t = useTranslations("Home");
  const [sending, setSending] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const locale = useLocale();

  const handleSubscribe = async () => {

    if (!emailRef.current?.value) {
      toast.error(t("footer.email-required"));
      return;
    }

    if (!emailRef.current.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error(t("footer.email-invalid"));
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
        toast.success(t("footer.newsletter-success"));
        emailRef.current.value = "";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(t("footer.newsletter-error"));
    }
    setSending(false);
  };

  return (
    <div className="bg-zinc-100/50 text-black">
      <div className="max-w-7xl mx-auto p-5 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
        <div className="max-w-md">
          {
            locale === 'sr' ? (
              <Image src="/dm2-logo.svg" alt="dm2" width={200} height={80} />
            ) : (
              <Image src="/dm2-logo-en.svg" alt="dm2" width={200} height={80} />
            )
          }
          <p className="text-sm mt-5">{t.rich("footer.description", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
        </div>
        <div className="max-w-md">
          <div className="mb-10">
            <h3 id={localeIdAttribute(locale, localeIdMap)} className="text-xl font-bold mb-5">{t("footer.contact-title")}</h3>
            <p className="mb-1">
              <span className="font-bold">Email:</span> <a href="mailto:info@decimetarkvadratni.com">info@decimetarkvadratni.com</a>
            </p>
            <p>
              <span className="font-bold">{t("footer.phone")}:</span> <a href={`tel:${MOBILE_NUMBER.replace(/\s+/g, '')}`}>{MOBILE_NUMBER}</a>
            </p>
            <Socials />
          </div>
        </div>
        <div className="max-w-md">
          <div>
            <p className="text-xl font-bold mb-4">{t("footer.newsletter-title")}</p>
            <p className="text-sm mb-4">{t.rich("footer.newsletter-description", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
            <input ref={emailRef} type="email" placeholder="Email" className="w-full p-2 rounded-xs border border-zinc-300" />
            <button onClick={handleSubscribe} className="bg-[#242424] text-white px-4 py-2 rounded-xs w-full mt-2">{sending ? t("footer.newsletter-loading") : t("footer.newsletter-button")}</button>
            <p className="text-sm mt-2">{t("footer.newsletter-disclaimer")}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#242424] text-white text-sm">
        <div className="max-w-7xl mx-auto p-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex gap-4">
            <Link href={localeUrl(locale, localeUrlMap)}>{t("footer.privacy-policy")}</Link>
            {/* <Link href="/">Odricanje od odgovornosti</Link> */}
          </div>
          <p>{t.rich("footer.copyright", { year: new Date().getFullYear(), sup: (chunks) => <sup>{chunks}</sup> })}</p>
        </div>
      </div>
    </div >
  );
};

export default Footer;