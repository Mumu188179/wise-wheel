import { Award, Lightbulb, AlertCircle, Heart, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const skills = [
  "Quản lý và tổ chức tệp tin hiệu quả",
  "Tìm kiếm và đánh giá thông tin học thuật",
  "Viết prompt hiệu quả để tương tác với AI",
  "Sử dụng công cụ hợp tác trực tuyến",
  "Tạo nội dung số với sự hỗ trợ của AI",
  "Hiểu và thực hành sử dụng AI có trách nhiệm",
];

const challenges = [
  {
    challenge: "Khó khăn trong việc đánh giá độ tin cậy của nguồn thông tin",
    solution: "Áp dụng khung đánh giá CRAAP và so sánh nhiều nguồn",
  },
  {
    challenge: "Viết prompt chưa hiệu quả, kết quả AI không như mong đợi",
    solution: "Thực hành nhiều lần, học cách cung cấp ngữ cảnh rõ ràng",
  },
  {
    challenge: "Phối hợp nhóm qua công cụ trực tuyến chưa nhịp nhàng",
    solution: "Thiết lập quy tắc giao tiếp và cập nhật tiến độ thường xuyên",
  },
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
              Nhìn lại hành trình học tập, những thành tựu đạt được và bài học kinh nghiệm quý giá.
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10 card-hover animate-slide-up">
              <h2 className="font-serif text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  📚
                </span>
                Tổng kết quá trình xây dựng Portfolio
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed">
                  Trong suốt quá trình học tập học phần Kỹ năng số, tôi đã hoàn thành 6 bài tập 
                  thực hành quan trọng, từ việc tổ chức file cơ bản đến việc sử dụng AI một cách 
                  có trách nhiệm. Portfolio này là minh chứng cho sự phát triển về kiến thức và 
                  kỹ năng số của bản thân.
                </p>
                <p className="leading-relaxed mt-4">
                  Mỗi bài tập đều mang đến những bài học quý giá, giúp tôi không chỉ nắm vững 
                  các công cụ công nghệ mà còn phát triển tư duy phản biện và ý thức sử dụng 
                  công nghệ có trách nhiệm.
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

      {/* Challenges & Solutions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-title flex items-center justify-center gap-3">
                <AlertCircle className="w-8 h-8 text-accent" />
                Khó khăn & Cách khắc phục
              </h2>
            </div>

            <div className="space-y-6">
              {challenges.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border overflow-hidden card-hover animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6 border-b border-border bg-destructive/5">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">⚠️</span>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Khó khăn</h3>
                        <p className="text-muted-foreground">{item.challenge}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-primary/5">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">✅</span>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Giải pháp</h3>
                        <p className="text-muted-foreground">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Reflection */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/10 animate-slide-up">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6">
                Cảm nhận cá nhân
              </h2>
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                "Qua học phần Kỹ năng số, tôi không chỉ học được cách sử dụng các công cụ công nghệ 
                mà còn phát triển tư duy học tập suốt đời. Việc xây dựng portfolio này giúp tôi 
                nhìn lại toàn bộ quá trình học tập, đánh giá được sự tiến bộ của bản thân và 
                xác định hướng phát triển tiếp theo.
                <br /><br />
                Đặc biệt, bài học về sử dụng AI có trách nhiệm đã thay đổi cách tôi nhìn nhận 
                về công nghệ - không chỉ là công cụ mà còn là trách nhiệm đối với bản thân và 
                cộng đồng."
              </blockquote>
              <div className="mt-8 pt-6 border-t border-primary/10">
                <p className="font-serif text-xl font-semibold text-foreground">Nguyễn Văn A</p>
                <p className="text-muted-foreground mt-1">Sinh viên Công nghệ Thông tin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Conclusion;
