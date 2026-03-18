import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", margin: 0, padding: 0, color: "#2d2d2d", background: "#fff" }}>
      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, width: "100%", background: "rgba(255,255,255,0.97)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)", zIndex: 1000, padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 64
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 28 }}>🐾</span>
          <span style={{ fontWeight: 800, fontSize: 20, color: "#7c4a1e", letterSpacing: "-0.5px" }}>Good Boy Flooring</span>
          <span style={{ fontSize: 11, color: "#a67c52", fontWeight: 600, marginLeft: 4, background: "#fdf3e7", padding: "2px 8px", borderRadius: 20 }}>LLC</span>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 15, fontWeight: 600 }} className="nav-links">
          {["services", "about", "gallery", "contact"].map(s => (
            <span key={s} onClick={() => scrollTo(s)} style={{ cursor: "pointer", color: "#555", textTransform: "capitalize" }}
              onMouseEnter={e => e.target.style.color = "#c47a2b"}
              onMouseLeave={e => e.target.style.color = "#555"}>
              {s}
            </span>
          ))}
          <button onClick={() => scrollTo("contact")} style={{
            background: "#c47a2b", color: "#fff", border: "none", borderRadius: 24,
            padding: "8px 20px", cursor: "pointer", fontWeight: 700, fontSize: 14
          }}>Get a Quote</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", background: "linear-gradient(135deg, #fdf3e7 0%, #f5e6cc 60%, #ede0cc 100%)",
        display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 64
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: "inline-block", background: "#c47a2b", color: "#fff", borderRadius: 20, padding: "6px 16px", fontSize: 13, fontWeight: 700, marginBottom: 20, letterSpacing: 1 }}>
              LANE COUNTY'S FAVORITE FLOORING CREW 🐾
            </div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 20px", color: "#3a2010" }}>
              Beautiful Floors.<br />
              <span style={{ color: "#c47a2b" }}>Done Right.</span><br />
              Every Time.
            </h1>
            <p style={{ fontSize: 18, color: "#6b4c2a", lineHeight: 1.7, marginBottom: 32, maxWidth: 480 }}>
              Family-owned with 15+ years of experience. We bring the same care to your floors 
              as a good boy brings to the front door — loyal, dependable, and always happy to work.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("contact")} style={{
                background: "#c47a2b", color: "#fff", border: "none", borderRadius: 30,
                padding: "16px 36px", cursor: "pointer", fontWeight: 800, fontSize: 16,
                boxShadow: "0 4px 20px rgba(196,122,43,0.35)"
              }}>Get a Free Quote</button>
              <button onClick={() => scrollTo("services")} style={{
                background: "transparent", color: "#7c4a1e", border: "2px solid #c47a2b",
                borderRadius: 30, padding: "16px 36px", cursor: "pointer", fontWeight: 700, fontSize: 16
              }}>See Our Work</button>
            </div>
            <div style={{ display: "flex", gap: 32, marginTop: 40, flexWrap: "wrap" }}>
              {[["15+", "Years Experience"], ["100%", "Family Owned"], ["⭐⭐⭐⭐⭐", "5-Star Service"]].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#c47a2b" }}>{val}</div>
                  <div style={{ fontSize: 13, color: "#8a6040", fontWeight: 600 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 260, display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{
                width: 340, height: 340, borderRadius: "50%",
                background: "linear-gradient(135deg, #c47a2b, #e8a84a)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 20px 60px rgba(196,122,43,0.3)"
              }}>
                <img
                  src="https://media.base44.com/images/public/69bae2d7f6d0ef10b39683b7/e07bc68e8_generated_image.png"
                  alt="Good Boy Flooring mascot"
                  style={{ width: 320, height: 320, borderRadius: "50%", objectFit: "cover" }}
                />
              </div>
              <div style={{
                position: "absolute", bottom: 20, right: -20,
                background: "#fff", borderRadius: 16, padding: "12px 18px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)", fontSize: 13, fontWeight: 700, color: "#3a2010"
              }}>
                🏡 Lane County, OR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: "#c47a2b", fontWeight: 700, fontSize: 14, letterSpacing: 2, marginBottom: 12 }}>WHAT WE DO</div>
            <h2 style={{ fontSize: 42, fontWeight: 900, color: "#3a2010", margin: 0 }}>Our Services</h2>
            <p style={{ color: "#8a6040", marginTop: 16, fontSize: 17 }}>Expert installation for every type of flooring</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 28 }}>
            {[
              { icon: "🪵", title: "Hardwood", desc: "Solid & engineered hardwood installation with precision finishing." },
              { icon: "🏠", title: "Luxury Vinyl Plank", desc: "Waterproof, durable LVP that looks stunning in any space." },
              { icon: "🪨", title: "Tile & Stone", desc: "Ceramic, porcelain, and natural stone installed flawlessly." },
              { icon: "🟫", title: "Laminate", desc: "Budget-friendly options that don't sacrifice quality or style." },
              { icon: "🟩", title: "Carpet", desc: "Soft, warm carpet installation for bedrooms and living spaces." },
              { icon: "✨", title: "Refinishing", desc: "Restore old hardwood floors to their original glory." },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{
                background: "#fdf8f2", borderRadius: 20, padding: "32px 24px",
                border: "1px solid #eedfc5", transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default"
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(196,122,43,0.18)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: 18, color: "#3a2010", margin: "0 0 10px" }}>{title}</h3>
                <p style={{ color: "#8a6040", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "100px 32px", background: "linear-gradient(135deg, #3a2010, #5a3520)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: "#e8a84a", fontWeight: 700, fontSize: 14, letterSpacing: 2, marginBottom: 12 }}>WHY GOOD BOY</div>
            <h2 style={{ fontSize: 42, fontWeight: 900, color: "#fff", margin: 0 }}>Why Homeowners Choose Us</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
            {[
              { icon: "🐾", title: "We're Loyal", desc: "We treat your home like our own. Every project gets the same care and attention no matter the size." },
              { icon: "🏆", title: "15+ Years Experience", desc: "Over a decade and a half of installs across Lane County. We've seen it all and we nail it every time." },
              { icon: "👨‍👩‍👧", title: "Family Owned", desc: "Not a franchise, not a chain. Real people who live in your community and care about our reputation." },
              { icon: "🔍", title: "Meticulous Work", desc: "Every seam, every transition, every edge — we sweat the details so you don't have to." },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ textAlign: "center", padding: "24px 16px" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: 20, color: "#fff", margin: "0 0 12px" }}>{title}</h3>
                <p style={{ color: "#d4a875", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY / BEFORE-AFTER */}
      <section id="gallery" style={{ padding: "100px 32px", background: "#fdf8f2" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: "#c47a2b", fontWeight: 700, fontSize: 14, letterSpacing: 2, marginBottom: 12 }}>OUR WORK</div>
            <h2 style={{ fontSize: 42, fontWeight: 900, color: "#3a2010", margin: 0 }}>Recent Projects</h2>
            <p style={{ color: "#8a6040", marginTop: 16, fontSize: 17 }}>Every floor tells a story. Here are a few of ours.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { label: "Living Room Hardwood", type: "Hardwood Installation", color: "#d4915a" },
              { label: "Kitchen LVP Overhaul", type: "Luxury Vinyl Plank", color: "#7a9e7e" },
              { label: "Master Bath Tile", type: "Tile & Stone", color: "#7a8ea0" },
              { label: "Bedroom Carpet", type: "Carpet Installation", color: "#a07ab0" },
              { label: "Entryway Refinish", type: "Hardwood Refinishing", color: "#c4a24a" },
              { label: "Basement LVP", type: "Luxury Vinyl Plank", color: "#a06050" },
            ].map(({ label, type, color }) => (
              <div key={label} style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                <div style={{
                  height: 200, background: `linear-gradient(135deg, ${color}33, ${color}66)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 60, border: `2px solid ${color}44`
                }}>
                  🏡
                </div>
                <div style={{ padding: "20px", background: "#fff" }}>
                  <div style={{ fontWeight: 800, fontSize: 17, color: "#3a2010" }}>{label}</div>
                  <div style={{ fontSize: 13, color: "#c47a2b", fontWeight: 600, marginTop: 4 }}>{type}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 32, color: "#8a6040", fontSize: 15 }}>
            📸 Ask us about uploading your project photos to show off your new floors!
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "100px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: "#c47a2b", fontWeight: 700, fontSize: 14, letterSpacing: 2, marginBottom: 12 }}>REVIEWS</div>
            <h2 style={{ fontSize: 42, fontWeight: 900, color: "#3a2010", margin: 0 }}>What Our Customers Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
            {[
              { name: "Sarah M.", location: "Eugene, OR", review: "These guys are incredible. They transformed our entire first floor with hardwood and it looks like a million bucks. Super professional, clean, and fast." },
              { name: "Tom & Julie K.", location: "Springfield, OR", review: "Family-owned means they actually care. They fixed a subfloor issue nobody else caught and didn't even charge extra. Honest people doing great work." },
              { name: "David R.", location: "Cottage Grove, OR", review: "Our bathroom tile came out perfect. The grout lines are immaculate. You can tell they take real pride in what they do. Would 100% recommend." },
            ].map(({ name, location, review }) => (
              <div key={name} style={{ background: "#fdf8f2", borderRadius: 20, padding: "32px 28px", border: "1px solid #eedfc5" }}>
                <div style={{ color: "#e8a84a", fontSize: 20, marginBottom: 16 }}>⭐⭐⭐⭐⭐</div>
                <p style={{ fontSize: 15, color: "#5a3520", lineHeight: 1.7, margin: "0 0 20px", fontStyle: "italic" }}>"{review}"</p>
                <div style={{ fontWeight: 800, color: "#3a2010" }}>{name}</div>
                <div style={{ fontSize: 13, color: "#c47a2b" }}>{location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 32px", background: "linear-gradient(135deg, #fdf3e7 0%, #f5e6cc 100%)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#c47a2b", fontWeight: 700, fontSize: 14, letterSpacing: 2, marginBottom: 12 }}>OUR STORY</div>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: "#3a2010", margin: "0 0 32px" }}>Local, Friendly, Meticulous</h2>
          <div style={{ fontSize: 48, marginBottom: 24 }}>🐾</div>
          <p style={{ fontSize: 18, color: "#6b4c2a", lineHeight: 1.9, marginBottom: 24 }}>
            Good Boy Flooring started the way most great things do — from a genuine love for the craft and a commitment to doing right by the people we serve.
          </p>
          <p style={{ fontSize: 17, color: "#8a6040", lineHeight: 1.9, marginBottom: 24 }}>
            We're a <strong>family-owned LLC</strong> based right here in <strong>Lane County, Oregon</strong>. Over <strong>15 years</strong> of installations have taught us that the best work comes from treating every project like it's our own home on the line. No shortcuts. No rushing. Just beautiful floors done right.
          </p>
          <p style={{ fontSize: 17, color: "#8a6040", lineHeight: 1.9 }}>
            The name says it all — we show up, we work hard, we make you happy, and we wag our tails on the way out. That's the Good Boy promise. 🐾
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: "#c47a2b", fontWeight: 700, fontSize: 14, letterSpacing: 2, marginBottom: 12 }}>GET IN TOUCH</div>
            <h2 style={{ fontSize: 42, fontWeight: 900, color: "#3a2010", margin: "0 0 16px" }}>Ready for Beautiful Floors?</h2>
            <p style={{ color: "#8a6040", fontSize: 17 }}>Fill out the form and we'll get back to you within 24 hours with a free estimate.</p>
          </div>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "60px 32px", background: "#fdf3e7", borderRadius: 24, border: "2px solid #c47a2b" }}>
              <div style={{ fontSize: 60, marginBottom: 20 }}>🐾</div>
              <h3 style={{ fontSize: 28, fontWeight: 900, color: "#3a2010", margin: "0 0 12px" }}>Thanks! We'll be in touch soon.</h3>
              <p style={{ color: "#8a6040", fontSize: 16 }}>We typically respond within 24 hours. Can't wait to help with your floors!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: "#fdf8f2", borderRadius: 24, padding: "48px", border: "1px solid #eedfc5" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                {[["name", "Your Name", "text"], ["phone", "Phone Number", "tel"]].map(([field, placeholder, type]) => (
                  <div key={field}>
                    <input
                      type={type}
                      placeholder={placeholder}
                      required
                      value={formData[field]}
                      onChange={e => setFormData({ ...formData, [field]: e.target.value })}
                      style={{
                        width: "100%", padding: "14px 18px", borderRadius: 12,
                        border: "1.5px solid #ddd", fontSize: 15, outline: "none",
                        boxSizing: "border-box", background: "#fff"
                      }}
                    />
                  </div>
                ))}
              </div>
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: "100%", padding: "14px 18px", borderRadius: 12,
                  border: "1.5px solid #ddd", fontSize: 15, outline: "none",
                  boxSizing: "border-box", marginBottom: 20, background: "#fff"
                }}
              />
              <textarea
                placeholder="Tell us about your project — what type of flooring, how many rooms, timeline, etc."
                rows={5}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: "100%", padding: "14px 18px", borderRadius: 12,
                  border: "1.5px solid #ddd", fontSize: 15, outline: "none",
                  boxSizing: "border-box", marginBottom: 28, resize: "vertical", background: "#fff"
                }}
              />
              <button type="submit" style={{
                width: "100%", background: "#c47a2b", color: "#fff", border: "none",
                borderRadius: 30, padding: "18px", cursor: "pointer", fontWeight: 800,
                fontSize: 17, boxShadow: "0 4px 20px rgba(196,122,43,0.35)"
              }}>
                🐾 Request My Free Quote
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1a0e05", color: "#d4a875", padding: "48px 32px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: 24 }}>🐾</span>
          <span style={{ fontWeight: 800, fontSize: 20, color: "#fff" }}>Good Boy Flooring LLC</span>
        </div>
        <p style={{ margin: "0 0 8px", fontSize: 15 }}>Proudly serving Lane County, Oregon</p>
        <p style={{ margin: "0 0 24px", fontSize: 14, color: "#a07850" }}>Family Owned · 15+ Years Experience · Local & Trusted</p>
        <p style={{ margin: 0, fontSize: 13, color: "#6a4828" }}>© 2026 Good Boy Flooring LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
