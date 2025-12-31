import { Award, Lightbulb, AlertCircle, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const skills = [
  "Quản lý dữ liệu số",
  "Tìm kiếm thông tin học thuật",
  "Viết prompt hiệu quả",
  "Sử dụng AI có đạo đức",
];

const Conclusion = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h1 className="section-title text-4xl md:text-5xl">
              Tổng kết Portfolio
            </h1>
            <p className="section-subtitle mx-auto mt-4">
              Nhìn lại hành trình học tập và những bài học kinh nghiệm quý giá.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Experience */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10 card-hover animate-slide-up">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  📚
                </span>
                Trải nghiệm cá nhân
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed">
                  Dự án Portfolio giúp tôi hệ thống hóa kiến thức và nhìn lại toàn bộ quá trình 
                  học tập một cách rõ ràng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Acquired */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-title flex items-center justify-center gap-3">
                <Lightbulb className="w-8 h-8 text-accent" />
                Kiến thức & Kỹ năng đạt được
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border card-hover animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Lessons */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-title flex items-center justify-center gap-3">
                <AlertCircle className="w-8 h-8 text-accent" />
                Khó khăn & Bài học
              </h2>
            </div>

            <div className="bg-card rounded-2xl border border-border overflow-hidden card-hover animate-slide-up">
              <div className="p-6 border-b border-border bg-destructive/5">
                <div className="flex items-start gap-3">
                  <span className="text-lg">⚠️</span>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Khó khăn</h3>
                    <p className="text-muted-foreground">Ban đầu chưa quen công cụ số</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-primary/5">
                <div className="flex items-start gap-3">
                  <span className="text-lg">✅</span>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Bài học</h3>
                    <p className="text-muted-foreground">
                      Qua từng bài tập, tôi dần tự tin hơn và cải thiện tư duy công nghệ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Conclusion;
