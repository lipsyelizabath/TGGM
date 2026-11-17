// Reads content.js (the SITE object) and builds the page. You rarely need to edit this.

// Small helper: h("p", {class: "x"}, "text") creates <p class="x">text</p>.
// Text is inserted as plain text, so stray characters can't break the page.
function h(tag, props = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) e.setAttribute(k, v);
  kids.flat().forEach(k => e.append(k));
  return e;
}
const $ = s => document.querySelector(s);

// Theme colours -> CSS variables
for (const [k, v] of Object.entries(SITE.theme)) document.documentElement.style.setProperty("--" + k, v);

// Basic text
document.title = SITE.name;
$("#brand").textContent = SITE.name;
$("#tagline").textContent = SITE.tagline;
$("#intro").textContent = SITE.intro;
$("#cta").textContent = SITE.buttonText;
$("#about-heading").textContent = SITE.about.heading;
$("#footer").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;

// Section titles from content.js
for (const [id, text] of Object.entries(SITE.headings)) { const t = $("#" + id + " h2"); if (t) t.textContent = text; }

// Programs: one row per item
SITE.programs.forEach(p => $("#programs-list").append(
  h("article", { class: "row" },
    h("div", {}, h("h3", {}, p.title), h("p", {}, p.description)),
    h("p", { class: "meta" }, p.format, h("br"), p.duration, h("br"), h("strong", {}, p.price))
  )));

// Sessions
SITE.sessions.forEach(s => $("#sessions-list").append(
  h("article", { class: "row" },
    h("div", {}, h("h3", {}, s.when), h("p", {}, `${s.program} · ${s.location}`)),
    h("p", { class: "meta" }, s.spots, h("br"), h("a", { href: "#contact" }, "Book a spot"))
  )));

// About
SITE.about.paragraphs.forEach(t => $("#about-text").append(h("p", {}, t)));

// Testimonials
SITE.testimonials.forEach(t => $("#testimonials-list").append(
  h("blockquote", {}, h("p", {}, t.quote), h("footer", {}, `${t.name}, ${t.role}`))));

// FAQ (native expand/collapse, no extra code needed)
SITE.faqs.forEach(f => $("#faq-list").append(
  h("details", {}, h("summary", {}, f.q), h("p", {}, f.a))));

// Contact
const c = SITE.contact, box = $("#contact-body");
box.append(h("p", {}, c.intro));
const links = h("p", { class: "links" },
  h("a", { class: "btn", href: `mailto:${c.email}` }, "Email " + c.email),
  h("a", { class: "btn alt", href: `https://wa.me/${c.whatsapp}` }, "WhatsApp"),
  h("a", { href: `tel:${c.phone.replace(/\s/g, "")}` }, c.phone));
box.append(links);
if (c.formAction) {
  box.append(h("form", { action: c.formAction, method: "POST" },
    h("label", {}, "Your name", h("input", { name: "name", required: "" })),
    h("label", {}, "Email", h("input", { name: "email", type: "email", required: "" })),
    h("label", {}, "Message", h("textarea", { name: "message", rows: "4", required: "" })),
    h("button", { class: "btn", type: "submit" }, "Send message")));
}

// Nav links + hide any section whose list is empty
const sections = [["programs", "Programs", SITE.programs], ["sessions", "Timetable", SITE.sessions],
  ["about", "About", [1]], ["testimonials", "Results", SITE.testimonials], ["faq", "FAQ", SITE.faqs]];
sections.forEach(([id, label, list]) => {
  if (!list.length) $("#" + id).remove();
  else $("#nav").append(h("a", { href: "#" + id }, label));
});
$("#nav").append(h("a", { href: "#contact" }, "Contact"));
