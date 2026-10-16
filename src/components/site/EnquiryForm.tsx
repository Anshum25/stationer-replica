import { useState, type FormEvent } from "react";
import { buildEnquiry, isValidIndianPhone, waLink } from "@/lib/whatsapp";

export interface Field { name: string; label: string; required?: boolean; type?: "text" | "tel" | "textarea" | "number"; placeholder?: string; }

// No backend: the form validates, then opens WhatsApp with a prefilled message the customer reviews and sends.
export function EnquiryForm({ title, fields, submitLabel = "Continue on WhatsApp" }: { title: string; fields: Field[]; submitLabel?: string }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [opened, setOpened] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    for (const f of fields) {
      const v = (values[f.name] ?? "").trim();
      if (f.required && !v) errs[f.name] = `Please enter ${f.label.toLowerCase()}.`;
      else if (f.type === "tel" && v && !isValidIndianPhone(v)) errs[f.name] = "Enter a valid 10-digit mobile number.";
      else if (v.length > 500) errs[f.name] = "Please keep this under 500 characters.";
    }
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const msg = buildEnquiry(title, Object.fromEntries(fields.map((f) => [f.label, values[f.name]])));
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setOpened(true);
  };

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
      {fields.map((f) => {
        const id = `${title}-${f.name}`.replace(/\s+/g, "-").toLowerCase();
        const cls = "mt-2 w-full rounded-md border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-ink";
        return (
          <div key={f.name} className={f.type === "textarea" ? "sm:col-span-2" : ""}>
            <label htmlFor={id} className="text-sm font-medium text-ink">{f.label}{f.required ? " *" : " (optional)"}</label>
            {f.type === "textarea" ? (
              <textarea id={id} rows={4} className={cls} placeholder={f.placeholder} value={values[f.name] ?? ""}
                aria-invalid={!!errors[f.name]} aria-describedby={errors[f.name] ? `${id}-err` : undefined}
                onChange={(e) => setValues({ ...values, [f.name]: e.target.value })} />
            ) : (
              <input id={id} type={f.type ?? "text"} inputMode={f.type === "tel" ? "tel" : undefined} className={cls} placeholder={f.placeholder}
                value={values[f.name] ?? ""} aria-invalid={!!errors[f.name]} aria-describedby={errors[f.name] ? `${id}-err` : undefined}
                onChange={(e) => setValues({ ...values, [f.name]: e.target.value })} />
            )}
            {errors[f.name] && <p id={`${id}-err`} className="mt-1.5 text-sm text-destructive">{errors[f.name]}</p>}
          </div>
        );
      })}
      <div className="sm:col-span-2">
        <button type="submit" className="inline-flex items-center rounded-full bg-whatsapp px-7 py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
          {submitLabel}
        </button>
        <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
          {opened ? "WhatsApp opened with your message — please review and press send there. Nothing has been sent yet." : "This opens WhatsApp with your details filled in. You review and send it yourself."}
        </p>
      </div>
    </form>
  );
}
