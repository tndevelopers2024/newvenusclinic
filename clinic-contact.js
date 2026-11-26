const whatsapp = "https://wa.me/918148070207";
const clinicEmail = "newvenusclinic2021@gmail.com";

const contactPanel = `<details class="clinic-whatsapp">
    <summary aria-label="WhatsApp us"><svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></summary>
    <div class="clinic-whatsapp-panel">
      <h2>Contact via WhatsApp</h2>
      <form class="clinic-form" data-clinic-draft="whatsapp">
          <label for="whatsapp-0">Name *</label>
          <input id="whatsapp-0" name="Name" required type="text">
          <label for="whatsapp-1">WhatsApp Number *</label>
          <input id="whatsapp-1" name="WhatsApp Number" required type="tel" autocomplete="tel">
          <label for="whatsapp-2">Email: *</label>
          <input id="whatsapp-2" name="Email:" required type="email" autocomplete="email">
          <label for="whatsapp-3">Age (Years) *</label>
          <input id="whatsapp-3" name="Age (Years)" required type="number" min="0" max="130">
          <label for="whatsapp-4">Service *</label>
          <select id="whatsapp-4" name="Service" required><option value="">Select Service</option><option>Cardiology Consultation and Diagnosis</option><option>Interventional Cardiology Procedures</option><option>Hypertension Management</option><option>Diabetes Care and Education</option><option>Heart Health Screenings</option><option>Medication Management</option><option>Lifestyle Modification Guidance</option></select>
          <label for="whatsapp-5">Appointment Date *</label>
          <input id="whatsapp-5" name="Appointment Date" required type="date">
          <label for="whatsapp-6">Your message *</label>
          <textarea id="whatsapp-6" name="Your message" required rows="3"></textarea>
          <p class="clinic-form-note">Opens a draft in WhatsApp for you to review and send.</p>
          <button class="btn btn-primary" type="submit" disabled>Submit</button>
          <noscript><p><a href="https://wa.me/918148070207">Contact the clinic via WhatsApp</a></p></noscript>
        </form>
    </div>
  </details>`;

const contactLink = document.querySelector(".floating-whatsapp");
if (contactLink) {
  contactLink.insertAdjacentHTML("afterend", contactPanel);
  contactLink.remove();
}

for (const form of document.querySelectorAll("[data-clinic-draft]")) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = new FormData(form);
    const message = Array.from(fields)
      .filter(([, value]) => value.trim())
      .map(([field, value]) => `${field} ${value.trim()}`)
      .join("\n");

    if (form.dataset.clinicDraft === "email") {
      const subject = fields.get("Subject");
      window.location.href = `mailto:${clinicEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      return;
    }

    const draftUrl = new URL(whatsapp);
    draftUrl.searchParams.set("text", message);
    window.location.assign(draftUrl);
  });

  form.querySelector('button[type="submit"]').disabled = false;
}

// Footer copyright: always show the current year
for (const el of document.querySelectorAll("[data-current-year]")) {
  el.textContent = new Date().getFullYear();
}
