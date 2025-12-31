import { Target, BookOpen, Sparkles, GraduationCap, Code, Brain } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            {/* Avatar */}
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
              <span className="text-5xl md:text-6xl font-serif font-bold text-primary-foreground">
                MH
              </span>
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
                💻 Kỹ năng số
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium">
                🤖 AI & Công nghệ
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

              {/* Interests */}
              <div className="bg-card rounded-2xl border border-border p-8 card-hover animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h2 className="font-serif text-2xl font-semibold mb-4">Sở thích</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Khám phá công nghệ mới
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Lập trình và phát triển web
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Đọc sách và học hỏi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Mục tiêu & Định hướng</h2>
              <p className="section-subtitle mx-auto mt-4">
                Những điều tôi đang hướng đến trong hành trình học tập
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-2xl border border-border p-6 text-center card-hover animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Học tập</h3>
                <p className="text-sm text-muted-foreground">
                  Nắm vững kiến thức kỹ năng số và ứng dụng trong học tập
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 text-center card-hover animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">AI & Công nghệ</h3>
                <p className="text-sm text-muted-foreground">
                  Sử dụng AI có trách nhiệm để nâng cao hiệu quả học tập
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 text-center card-hover animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Code className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Phát triển</h3>
                <p className="text-sm text-muted-foreground">
                  Xây dựng nền tảng vững chắc cho sự nghiệp tương lai
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Purpose */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 text-center card-hover">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
                Mục tiêu của Portfolio
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Portfolio này được xây dựng nhằm tổng hợp và thể hiện kiến thức, kỹ năng số 
                đã học được trong học phần. Đây là nơi lưu trữ các sản phẩm học tập, 
                minh chứng cho quá trình phát triển kỹ năng sử dụng AI và công nghệ số 
                một cách có trách nhiệm và sáng tạo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
