import { MessageCircle } from "lucide-react";

const tags = [
  "Inmobiliaria", "Eventos", "Hoteles", "Turismo", "Publicidad",
  "Redes Sociales", "Construcción", "Inspecciones", "Vídeo Cinemático", "FPV Drone", "Promoción",
];

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/drone-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center max-w-3xl mx-auto">
        {/* Avatar */}
        <div className="animate-fade-up mb-8">
          <img
            src="/pilot-avatar.jpg"
            alt="Piloto de drones certificado"
            className="w-24 h-24 rounded-full object-cover border-2 border-white/20 shadow-lg shadow-black/40"
          />
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-delay-1 text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Vídeo aéreo con dron en Valencia
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delay-2 mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
          Piloto de drones certificado creando contenido audiovisual profesional para marcas, eventos y propiedades
        </p>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/34684707089"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-up-delay-3 mt-10 inline-flex items-center gap-3 bg-accent text-accent-foreground font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
        >
          <MessageCircle className="w-5 h-5" />
          Contactar por WhatsApp
        </a>

        {/* Subtitle text */}
        <p className="animate-fade-up-delay-3 mt-4 text-sm text-muted-foreground">
          Disponible próximamente · Reserva anticipada abierta
        </p>

        {/* Tag Cloud */}
        <div className="animate-fade-up-delay-4 mt-14 flex flex-wrap justify-center gap-2.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-xs font-medium rounded-full border border-white/15 text-white/60 backdrop-blur-sm transition-colors duration-300 hover:border-white/30 hover:text-white/90"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="animate-fade-up-delay-5 relative z-10 pb-8">
        <p className="text-xs text-muted-foreground tracking-widest uppercase">
          dronvista.pro
        </p>
      </div>
    </div>
  );
};

export default Index;
