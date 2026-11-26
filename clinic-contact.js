const whatsapp = "https://wa.me/918148070207";
const clinicEmail = "newvenusclinic2021@gmail.com";

const contactPanel = `<details class="clinic-whatsapp">
    <summary>WhatsApp us</summary>
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
