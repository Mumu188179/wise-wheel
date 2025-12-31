import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Target, FileText, Image, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

// Import evidence images
import project1Evidence from "@/assets/project1-evidence.png";
import project2Evidence from "@/assets/project2-evidence.png";
import project3Evidence from "@/assets/project3-evidence.png";
import project4Evidence from "@/assets/project4-evidence.png";
import project5Evidence from "@/assets/project5-evidence.png";
import project6Evidence from "@/assets/project6-evidence.png";

const evidenceImages: { [key: number]: string } = {
  1: project1Evidence,
  2: project2Evidence,
  3: project3Evidence,
  4: project4Evidence,
  5: project5Evidence,
  6: project6Evidence,
};
const projectsData = [
  {
    id: 1,
    title: "Bài 1 – Thao tác cơ bản với tệp và thư mục",
    objective: "Thực hành tạo và tổ chức cấu trúc thư mục hợp lý cho việc lưu trữ tài liệu học tập, đặt tên tệp đúng quy ước để dễ dàng tìm kiếm và quản lý.",
    process: [
      "Tạo thư mục gốc cho học phần với tên rõ ràng",
      "Phân chia thành các thư mục con theo chủ đề: Bài giảng, Bài tập, Tài liệu tham khảo",
      "Áp dụng quy ước đặt tên: NgayThang_TenBaiTap_PhienBan",
      "Tổ chức các file theo định dạng và mục đích sử dụng",
    ],
    evidence: [
      "Ảnh chụp cấu trúc thư mục hoàn chỉnh",
      "Ảnh minh họa quy ước đặt tên file",
      "Mô tả chi tiết cách tổ chức",
    ],
    reflection: "Qua bài tập này, tôi đã học được cách tổ chức file một cách khoa học, giúp tiết kiệm thời gian tìm kiếm và quản lý tài liệu hiệu quả hơn.",
  },
  {
    id: 2,
    title: "Bài 2 – Tìm kiếm và đánh giá thông tin học thuật",
    objective: "Sử dụng các công cụ tìm kiếm nâng cao để tìm kiếm thông tin học thuật và đánh giá độ tin cậy của nguồn thông tin.",
    process: [
      "Xác định chủ đề nghiên cứu và từ khóa chính",
      "Sử dụng Google Scholar, ResearchGate để tìm kiếm",
      "Áp dụng toán tử Boolean: AND, OR, NOT",
      "Đánh giá nguồn theo tiêu chí CRAAP",
    ],
    evidence: [
      "Danh sách từ khóa và chiến lược tìm kiếm",
      "Bảng đánh giá độ tin cậy của 3-5 nguồn",
      "Ảnh chụp kết quả tìm kiếm",
    ],
    reflection: "Kỹ năng tìm kiếm thông tin học thuật giúp tôi tiếp cận nguồn tài liệu chất lượng cao, tránh thông tin sai lệch trong học tập và nghiên cứu.",
  },
  {
    id: 3,
    title: "Bài 3 – Viết Prompt hiệu quả cho học tập",
    objective: "Thực hành viết prompt hiệu quả để tương tác với AI, so sánh kết quả giữa prompt ban đầu và prompt cải tiến.",
    process: [
      "Chọn một tác vụ học tập cụ thể",
      "Viết prompt ban đầu đơn giản",
      "Phân tích và cải tiến prompt theo nguyên tắc: Rõ ràng, Cụ thể, Có ngữ cảnh",
      "So sánh kết quả và rút ra bài học",
    ],
    evidence: [
      "Prompt ban đầu và kết quả",
      "Prompt cải tiến và kết quả",
      "Bảng so sánh chi tiết hai kết quả",
    ],
    reflection: "Viết prompt tốt là kỹ năng quan trọng trong thời đại AI, giúp tận dụng tối đa khả năng của các công cụ AI cho học tập.",
  },
  {
    id: 4,
    title: "Bài 4 – Sử dụng công cụ hợp tác trực tuyến",
    objective: "Sử dụng các công cụ hợp tác trực tuyến để lập kế hoạch làm việc nhóm, phân công và theo dõi tiến độ.",
    process: [
      "Tạo workspace trên Notion/Trello cho dự án nhóm",
      "Thiết lập các board/page cho từng giai đoạn",
      "Phân công nhiệm vụ cho từng thành viên",
      "Thiết lập deadline và theo dõi tiến độ",
    ],
    evidence: [
      "Ảnh chụp màn hình workspace",
      "Sơ đồ phân công công việc",
      "Báo cáo tiến độ hoàn thành",
    ],
    reflection: "Công cụ hợp tác trực tuyến giúp làm việc nhóm hiệu quả hơn, mọi người đều nắm được tiến độ và trách nhiệm của mình.",
  },
  {
    id: 5,
    title: "Bài 5 – Sử dụng AI để hỗ trợ sáng tạo nội dung",
    objective: "Tạo một sản phẩm số (video ngắn ≤ 5 phút) với sự hỗ trợ của các công cụ AI sáng tạo.",
    process: [
      "Lên ý tưởng và kịch bản cho video",
      "Sử dụng AI để tạo script, hình ảnh, âm thanh",
      "Biên tập và hoàn thiện sản phẩm",
      "Ghi chép vai trò của AI trong từng bước",
    ],
    evidence: [
      "Link video sản phẩm hoàn chỉnh",
      "Mô tả các công cụ AI đã sử dụng",
      "Quy trình làm việc với AI",
    ],
    reflection: "AI là công cụ hỗ trợ tuyệt vời cho sáng tạo nội dung, nhưng vẫn cần sự định hướng và kiểm soát của con người.",
  },
  {
    id: 6,
    title: "Bài 6 – Sử dụng AI có trách nhiệm",
    objective: "Phân tích các vấn đề đạo đức trong việc sử dụng AI và đề xuất nguyên tắc sử dụng AI có trách nhiệm.",
    process: [
      "Tìm hiểu chính sách AI của các tổ chức giáo dục",
      "Phân tích các vấn đề đạo đức: đạo văn, thiên kiến, quyền riêng tư",
      "Thảo luận về trách nhiệm khi sử dụng AI",
      "Đề xuất bộ nguyên tắc sử dụng AI có trách nhiệm",
    ],
    evidence: [
      "Bài phân tích về đạo đức AI",
      "Bảng 5-7 nguyên tắc sử dụng AI có trách nhiệm",
      "Cam kết cá nhân về sử dụng AI",
    ],
    reflection: "Sử dụng AI có trách nhiệm không chỉ là tuân thủ quy định mà còn là thể hiện tư duy đạo đức và sự trưởng thành trong học tập.",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-semibold mb-4">Không tìm thấy bài tập</h1>
          <Link to="/projects" className="text-primary hover:underline">
            ← Quay lại danh sách
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại danh sách dự án
            </Link>
            
            <div className="animate-slide-up">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Bài tập {project.id}/6
              </span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Objective */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 card-hover animate-slide-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-semibold mb-3">Mục tiêu bài tập</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.objective}</p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 card-hover animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl font-semibold mb-4">Quá trình thực hiện</h2>
                  <ol className="space-y-3">
                    {project.process.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Evidence */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 card-hover animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Image className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl font-semibold mb-4">Sản phẩm minh chứng</h2>
                  <ul className="space-y-2">
                    {project.evidence.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Evidence Image */}
                  <div className="mt-6 rounded-xl overflow-hidden border border-border">
                    <img 
                      src={evidenceImages[project.id]} 
                      alt={`Minh chứng ${project.title}`}
                      className="w-full h-auto"
                    />
                    <div className="p-3 bg-muted/30 text-center">
                      <p className="text-sm text-muted-foreground">
                        Ảnh minh họa cho bài tập {project.id}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reflection */}
            <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="font-serif text-xl font-semibold mb-3">💭 Nhận xét & Bài học</h2>
              <p className="text-muted-foreground leading-relaxed italic">
                "{project.reflection}"
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-border">
              {project.id > 1 ? (
                <Link
                  to={`/projects/${project.id - 1}`}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Bài trước
                </Link>
              ) : (
                <div />
              )}
              
              {project.id < 6 ? (
                <Link
                  to={`/projects/${project.id + 1}`}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  Bài tiếp theo
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              ) : (
                <Link
                  to="/conclusion"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Xem Tổng kết
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
