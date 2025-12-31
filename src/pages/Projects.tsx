import { FolderTree, Search, MessageSquare, Users, Video, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Bài 1 – Thao tác cơ bản với tệp và thư mục",
    description: "Tạo và tổ chức cấu trúc thư mục hợp lý, đặt tên tệp đúng quy ước với đầy đủ minh chứng.",
    icon: <FolderTree className="w-6 h-6" />,
    tags: ["Tổ chức file", "Quy ước đặt tên", "Cấu trúc thư mục"],
  },
  {
    id: 2,
    title: "Bài 2 – Tìm kiếm và đánh giá thông tin học thuật",
    description: "Sử dụng công cụ tìm kiếm nâng cao, đánh giá độ tin cậy của nguồn thông tin học thuật.",
    icon: <Search className="w-6 h-6" />,
    tags: ["Google Scholar", "Từ khóa", "Nguồn tin cậy"],
  },
  {
    id: 3,
    title: "Bài 3 – Viết Prompt hiệu quả cho học tập",
    description: "Thực hành viết prompt ban đầu và cải tiến, so sánh kết quả để tối ưu hóa tương tác với AI.",
    icon: <MessageSquare className="w-6 h-6" />,
    tags: ["Prompt Engineering", "ChatGPT", "AI"],
  },
  {
    id: 4,
    title: "Bài 4 – Sử dụng công cụ hợp tác trực tuyến",
    description: "Lập kế hoạch làm việc nhóm bằng công cụ số, phân công và theo dõi tiến độ hiệu quả.",
    icon: <Users className="w-6 h-6" />,
    tags: ["Trello", "Notion", "Teamwork"],
  },
  {
    id: 5,
    title: "Bài 5 – Sử dụng AI để hỗ trợ sáng tạo nội dung",
    description: "Tạo video ngắn hoặc sản phẩm số với sự hỗ trợ của các công cụ AI sáng tạo.",
    icon: <Video className="w-6 h-6" />,
    tags: ["AI Video", "Sáng tạo", "Nội dung số"],
  },
  {
    id: 6,
    title: "Bài 6 – Sử dụng AI có trách nhiệm",
    description: "Phân tích vấn đề đạo đức và đề xuất nguyên tắc sử dụng AI có trách nhiệm trong học tập.",
    icon: <Shield className="w-6 h-6" />,
    tags: ["Đạo đức AI", "Trách nhiệm", "Nguyên tắc"],
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="section-title text-4xl md:text-5xl">
              Dự án & Bài tập
            </h1>
            <p className="section-subtitle mx-auto mt-4">
              Tổng hợp các bài tập đã hoàn thành trong học phần Kỹ năng số, 
              mỗi bài tập thể hiện một kỹ năng cụ thể với minh chứng đầy đủ.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
