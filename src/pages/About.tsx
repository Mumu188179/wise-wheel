import { Target, BookOpen, GraduationCap, Lightbulb, Compass } from "lucide-react";
import Layout from "@/components/Layout";
import avatarImage from "@/assets/avatar.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            {/* Avatar */}
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-lg border-4 border-primary/20">
              <img 
                src={avatarImage} 
                alt="Trần Mai Hương" 
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Xin chào, tôi là{" "}
              <span className="gradient-text">Trần Mai Hương</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Sinh viên ngành Kinh tế Chính trị
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                🎓 Năm nhất
              </span>
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
                💻 Công nghệ số
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium">
                🤖 Trí tuệ nhân tạo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Info */}
              <div className="bg-card rounded-2xl border border-border p-8 card-hover animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-semibold mb-4">Thông tin cá nhân</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span><strong className="text-foreground">Họ tên:</strong> Trần Mai Hương</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span><strong className="text-foreground">MSV:</strong> 25050189</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span><strong className="text-foreground">Lớp:</strong> QH-2025-E Kinh tế 8</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span><strong className="text-foreground">Ngành:</strong> Kinh tế Chính trị</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span><strong className="text-foreground">Trường:</strong> Đại học Kinh tế - ĐHQGHN</span>
                  </li>
                </ul>
              </div>

              {/* Introduction */}
              <div className="bg-card rounded-2xl border border-border p-8 card-hover animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h2 className="font-serif text-2xl font-semibold mb-4">Giới thiệu bản thân</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tôi là sinh viên năm nhất, hiện đang theo học học phần <strong className="text-foreground">Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</strong>. 
                  Tôi có sự quan tâm đặc biệt đến công nghệ, trí tuệ nhân tạo và cách các công cụ số hỗ trợ hiệu quả cho học tập và làm việc trong thời đại số.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Goals Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mục tiêu học tập */}
              <div className="bg-card rounded-2xl border border-border p-8 card-hover animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Mục tiêu học tập</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Nắm vững kiến thức nền tảng về công nghệ số và AI.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Phát triển kỹ năng tìm kiếm, đánh giá và xử lý thông tin học thuật.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Sử dụng các công cụ AI hỗ trợ học tập một cách hiệu quả và có trách nhiệm.</span>
                  </li>
                </ul>
              </div>

              {/* Định hướng cá nhân */}
              <div className="bg-card rounded-2xl border border-border p-8 card-hover animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Định hướng cá nhân</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Xây dựng tư duy công nghệ phù hợp với thời đại số.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Chuẩn bị nền tảng cho các học phần chuyên sâu trong tương lai.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Purpose */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 card-hover">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-center">
                Mục tiêu của Portfolio
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                Portfolio này được xây dựng nhằm:
              </p>
              <ul className="space-y-4 text-muted-foreground max-w-xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Tổng hợp toàn bộ bài tập quan trọng của môn học.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Minh chứng quá trình học tập, tư duy và tiến bộ cá nhân.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Lưu trữ sản phẩm học tập để dễ dàng truy cập, chia sẻ và đánh giá.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
