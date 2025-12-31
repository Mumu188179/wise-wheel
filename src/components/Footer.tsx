import { Heart, Mail, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Được tạo với</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>bởi Sinh viên</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="mailto:email@example.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 Portfolio Kỹ năng số
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
