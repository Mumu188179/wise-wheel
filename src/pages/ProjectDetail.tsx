import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Target, FileText, Image, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";

// Import evidence images for Bai 1
import bai1Page1 from "@/assets/bai1/page1.jpg";
import bai1Page2 from "@/assets/bai1/page2.jpg";
import bai1Page3 from "@/assets/bai1/page3.jpg";
import bai1Page4 from "@/assets/bai1/page4.jpg";
import bai1Page5 from "@/assets/bai1/page5.jpg";
import bai1Page6 from "@/assets/bai1/page6.jpg";
import bai1Page7 from "@/assets/bai1/page7.jpg";
import bai1Page8 from "@/assets/bai1/page8.jpg";

// Import evidence images for Bai 2
import bai2Page1 from "@/assets/bai2/page1.jpg";
import bai2Page2 from "@/assets/bai2/page2.jpg";
import bai2Page3 from "@/assets/bai2/page3.jpg";
import bai2Page4 from "@/assets/bai2/page4.jpg";
import bai2Page5 from "@/assets/bai2/page5.jpg";
import bai2Page6 from "@/assets/bai2/page6.jpg";

// Import evidence images for Bai 3
import bai3Page1 from "@/assets/bai3/page1.jpg";
import bai3Page2 from "@/assets/bai3/page2.jpg";
import bai3Page3 from "@/assets/bai3/page3.jpg";
import bai3Page4 from "@/assets/bai3/page4.jpg";
import bai3Page5 from "@/assets/bai3/page5.jpg";

// Import evidence images for Bai 4
import bai4Page1 from "@/assets/bai4/page1.jpg";
import bai4Page2 from "@/assets/bai4/page2.jpg";
import bai4Page3 from "@/assets/bai4/page3.jpg";

// Import evidence images for Bai 5
import bai5Page1 from "@/assets/bai5/page1.jpg";
import bai5Page2 from "@/assets/bai5/page2.jpg";
import bai5Page3 from "@/assets/bai5/page3.jpg";
import bai5Page4 from "@/assets/bai5/page4.jpg";
import bai5Page5 from "@/assets/bai5/page5.jpg";
import bai5Page6 from "@/assets/bai5/page6.jpg";

// Import evidence images for Bai 6
import bai6Page1 from "@/assets/bai6/page1.jpg";
import bai6Page2 from "@/assets/bai6/page2.jpg";
import bai6Page3 from "@/assets/bai6/page3.jpg";
import bai6Page4 from "@/assets/bai6/page4.jpg";

const evidenceImages: { [key: number]: string[] } = {
  1: [bai1Page1, bai1Page2, bai1Page3, bai1Page4, bai1Page5, bai1Page6, bai1Page7, bai1Page8],
  2: [bai2Page1, bai2Page2, bai2Page3, bai2Page4, bai2Page5, bai2Page6],
  3: [bai3Page1, bai3Page2, bai3Page3, bai3Page4, bai3Page5],
  4: [bai4Page1, bai4Page2, bai4Page3],
  5: [bai5Page1, bai5Page2, bai5Page3, bai5Page4, bai5Page5, bai5Page6],
  6: [bai6Page1, bai6Page2, bai6Page3, bai6Page4],
};

const projectsData = [
  {
    id: 1,
    title: "Bài 1 – Thao tác cơ bản với tệp và thư mục",
    objective: "Thực hành tạo và tổ chức cấu trúc thư mục hợp lý cho việc lưu trữ tài liệu học tập, đặt tên tệp đúng quy ước để dễ dàng tìm kiếm và quản lý.",
    process: [
      "Mở File Explorer bằng tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục trên thanh tác vụ",
      "Truy cập ổ đĩa/thư mục: vào This PC, chọn ổ đĩa (D: hoặc E:) hoặc thư mục Documents",
      "Tạo thư mục mới: nhấp chuột phải → New → Folder, đặt tên ThucHanh_TranMaiHuong",
      "Tạo tệp tin văn bản: nhấp chuột phải → New → Text Document, đặt tên GhiChu.txt",
      "Đổi tên tệp tin: nhấp chuột phải → Rename, đổi thành GhiChuQuanTrong.txt",
      "Tạo thư mục con TaiLieu trong thư mục chính",
      "Di chuyển file vào thư mục con và xóa file không cần thiết",
    ],
    evidence: [
      "Ảnh chụp cấu trúc thư mục hoàn chỉnh",
      "Ảnh minh họa quy trình tạo và đổi tên file",
      "Ảnh chụp thư mục con và file đã di chuyển",
    ],
    reflection: "Qua bài tập này, tôi đã học được cách tổ chức file một cách khoa học theo từng bước cụ thể, giúp tiết kiệm thời gian tìm kiếm và quản lý tài liệu hiệu quả hơn.",
  },
  {
    id: 2,
    title: "Bài 2 – Tìm kiếm và đánh giá thông tin học thuật",
    objective: "Tìm kiếm thông tin học thuật về chủ đề 'Phân tích và dự báo kinh tế' và đánh giá độ tin cậy của các nguồn thông tin.",
    process: [
      "Xác định chủ đề nghiên cứu: Phân tích và dự báo kinh tế",
      "Sử dụng các cơ sở dữ liệu: Google Scholar, ScienceDirect, SpringerLink, JSTOR",
      "Áp dụng từ khóa: 'economic forecasting', 'AI in economics', 'macroeconomic prediction', 'data-driven economy'",
      "Lọc kết quả: tài liệu học thuật có phản biện, xuất bản trong 5 năm gần nhất",
      "Thu thập 12 tài liệu học thuật tiêu biểu về mô hình kinh tế lượng và ứng dụng AI",
      "Đánh giá độ tin cậy nguồn theo tiêu chí học thuật",
    ],
    evidence: [
      "Danh sách từ khóa và chiến lược tìm kiếm",
      "Bảng tổng hợp nguồn thông tin với đánh giá độ tin cậy",
      "Biểu đồ dự báo GDP và mô hình AI trong kinh tế",
    ],
    reflection: "Kỹ năng tìm kiếm thông tin học thuật giúp tôi tiếp cận nguồn tài liệu chất lượng cao về phân tích và dự báo kinh tế, đặc biệt khi kết hợp AI và Big Data.",
  },
  {
    id: 3,
    title: "Bài 3 – Viết Prompt hiệu quả cho học tập",
    objective: "Thử nghiệm và đánh giá hiệu quả của các kỹ thuật viết prompt khi sử dụng AI trong học tập môn Kinh tế vi mô với 3 tác vụ: tóm tắt, giải thích khái niệm, tạo câu hỏi ôn tập.",
    process: [
      "Tác vụ 1 - Tóm tắt nội dung: So sánh prompt cơ bản, cải tiến và nâng cao (vai trò giảng viên, cấu trúc 4 phần)",
      "Tác vụ 2 - Giải thích khái niệm 'Kinh tế học hành vi': Từ prompt đơn giản đến prompt có cấu trúc 3 phần (định nghĩa, ví dụ, ứng dụng)",
      "Tác vụ 3 - Tạo câu hỏi trắc nghiệm Kinh tế vi mô: Từ 5 câu cơ bản đến hệ thống câu hỏi có độ khó tăng dần, đáp án và lời giải",
      "Phân tích hiệu quả từng mức độ prompt qua kết quả đầu ra",
      "Rút ra nguyên tắc: xác định mục tiêu, nêu vai trò AI, chỉ dẫn cấu trúc đầu ra, thử nghiệm và điều chỉnh",
    ],
    evidence: [
      "Ảnh chụp kết quả AI với từng mức độ prompt",
      "Bảng so sánh chi tiết prompt cơ bản vs cải tiến vs nâng cao",
      "Tổng hợp 5 nguyên tắc viết prompt hiệu quả",
    ],
    reflection: "Viết prompt tốt là kỹ năng quan trọng, giúp tận dụng tối đa khả năng của AI. Prompt nâng cao với vai trò và cấu trúc rõ ràng cho kết quả chất lượng cao hơn nhiều.",
  },
  {
    id: 4,
    title: "Bài 4 – Sử dụng công cụ hợp tác trực tuyến",
    objective: "Sử dụng đồng thời Google Docs, Google Drive và Discord để lập kế hoạch, phân công và theo dõi tiến độ dự án nhóm về 'Hanoi Traffic - Problems and Solutions'.",
    process: [
      "Thiết lập công cụ: Google Docs để soạn thảo văn bản, Google Drive để lưu trữ, Discord để giao tiếp",
      "Tạo bảng phân công nhiệm vụ trên Google Docs với deadline rõ ràng",
      "Chia sẻ link chung trên Discord để truy cập nhanh tài liệu",
      "Quản lý tài nguyên: đặt tên file theo chủ đề, phiên bản và ngày cập nhật",
      "Cập nhật tiến độ liên tục qua Drive và Discord",
      "Trao đổi ý tưởng, góp ý, chỉnh sửa trên Doc và nhóm chat",
    ],
    evidence: [
      "Ảnh chụp màn hình Google Docs với bảng phân công",
      "Ảnh chụp cấu trúc thư mục Google Drive",
      "Ảnh chụp kênh Discord của nhóm",
    ],
    reflection: "Việc phối hợp 3 công cụ giúp làm việc nhóm hiệu quả, đồng bộ hóa thao tác và xử lý kịp thời mọi vấn đề phát sinh.",
  },
  {
    id: 5,
    title: "Bài 5 – Sử dụng AI để hỗ trợ sáng tạo nội dung",
    objective: "Tạo bài viết và Infographic về 'Ứng dụng AI trong sáng tạo nội dung hiện đại' với sự hỗ trợ của ChatGPT, DALL·E và Canva.",
    process: [
      "Sử dụng ChatGPT viết bài phân tích 800 từ về vai trò AI trong sáng tạo nội dung (4 mục, văn phong học thuật)",
      "Tạo văn bản ngắn gọn cho Infographic: 4 vai trò chính của AI (thay đổi bối cảnh, hỗ trợ tư duy, cá nhân hóa, nâng cao hiệu quả)",
      "Sử dụng DALL·E tạo hình ảnh minh họa theo prompt mô tả",
      "Thiết kế Infographic hoàn chỉnh trên Canva với văn bản và hình ảnh AI",
      "Ghi chép vai trò của từng công cụ AI trong quy trình",
    ],
    evidence: [
      "Ảnh chụp kết quả ChatGPT với bài viết phân tích",
      "Hình ảnh tạo bởi DALL·E",
      "Infographic hoàn chỉnh thiết kế trên Canva",
    ],
    reflection: "AI là công cụ hỗ trợ tuyệt vời cho sáng tạo nội dung, từ viết bài đến tạo hình ảnh và thiết kế, nhưng vẫn cần sự định hướng và kiểm soát của con người.",
  },
  {
    id: 6,
    title: "Bài 6 – Sử dụng AI có trách nhiệm",
    objective: "Phân tích chính sách AI của Trường ĐH Kinh tế - ĐHQGHN, thực hành sử dụng AI có trách nhiệm và xây dựng bộ nguyên tắc cá nhân.",
    process: [
      "Phân tích 3 nội dung chính của chính sách: khuyến khích AI hỗ trợ học thuật, yêu cầu minh bạch, cấm lạm dụng gian lận",
      "So sánh với chính sách của các trường quốc tế (NUS, Harvard, Melbourne, Stanford)",
      "Thực hiện nhiệm vụ: tóm tắt tài liệu khoa học và xây dựng dàn ý thuyết trình với AI",
      "Ghi rõ prompt đã dùng và phân biệt phần AI tạo ra với phần chỉnh sửa cá nhân",
      "Phân tích các vấn đề đạo đức: ranh giới hỗ trợ/gian lận, minh bạch nguồn gốc, quyền sở hữu trí tuệ, thiên lệch thông tin",
      "Xây dựng 7 nguyên tắc sử dụng AI có trách nhiệm",
    ],
    evidence: [
      "Bảng so sánh chính sách AI giữa các trường đại học",
      "Prompt đã sử dụng và kết quả AI với chỉnh sửa cá nhân",
      "Infographic về sử dụng AI có trách nhiệm trong học thuật",
    ],
    reflection: "Sử dụng AI có trách nhiệm đòi hỏi trung thực học thuật, kiểm chứng thông tin, tôn trọng quyền sở hữu trí tuệ và luôn chịu trách nhiệm 100% về chất lượng nội dung.",
  },
];

const ImageGallery = ({ images, projectId }: { images: string[], projectId: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mt-6">
      <div className="relative rounded-xl overflow-hidden border border-border">
        <img 
          src={images[currentIndex]} 
          alt={`Minh chứng trang ${currentIndex + 1}`}
          className="w-full h-auto"
        />
        
        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
        
        {/* Caption */}
        <div className="p-3 bg-muted/30 text-center">
          <p className="text-sm text-muted-foreground">
            Trang {currentIndex + 1} / {images.length} - Bài tập {projectId}
          </p>
        </div>
      </div>
      
      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex 
                  ? 'border-primary ring-2 ring-primary/20' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <img 
                src={img} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

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

  const images = evidenceImages[project.id] || [];

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
                  
                  {/* Evidence Image Gallery */}
                  {images.length > 0 && (
                    <ImageGallery images={images} projectId={project.id} />
                  )}
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