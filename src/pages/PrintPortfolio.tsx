import { useEffect } from "react";

const PrintPortfolio = () => {
  useEffect(() => {
    // Auto trigger print dialog when page loads
    const timer = setTimeout(() => {
      window.print();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="print-container bg-white text-gray-900 p-8 max-w-4xl mx-auto">
      {/* Print Styles */}
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
          .print-container { max-width: 100% !important; padding: 0 !important; }
        }
        @media screen {
          .print-container { 
            font-family: 'Georgia', serif;
            line-height: 1.6;
          }
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-12 pb-8 border-b-2 border-red-900">
        <h1 className="text-4xl font-bold text-red-900 mb-2">PORTFOLIO CÁ NHÂN</h1>
        <p className="text-xl text-gray-600">Học phần Kỹ năng số</p>
        <div className="mt-4 text-sm text-gray-500">
          Ngày xuất: {new Date().toLocaleDateString('vi-VN')}
        </div>
      </div>

      {/* ========== TRANG 1: GIỚI THIỆU ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-red-900 mb-6 pb-2 border-b border-red-200">
          📌 TRANG 1: GIỚI THIỆU BẢN THÂN (ABOUT ME)
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Thông tin cá nhân</h3>
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 font-medium w-1/3">Họ và tên:</td>
                <td className="py-2">Nguyễn Văn A</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 font-medium">Ngành học:</td>
                <td className="py-2">Công nghệ Thông tin</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 font-medium">Trường:</td>
                <td className="py-2">Đại học ABC</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 font-medium">Năm học:</td>
                <td className="py-2">Năm 2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Sở thích</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Khám phá công nghệ mới</li>
            <li>Lập trình và phát triển web</li>
            <li>Đọc sách và học hỏi</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Mục tiêu & Định hướng</h3>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-900">🎯 Học tập</h4>
              <p className="text-gray-700">Nắm vững kiến thức kỹ năng số và ứng dụng trong học tập</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-900">🤖 AI & Công nghệ</h4>
              <p className="text-gray-700">Sử dụng AI có trách nhiệm để nâng cao hiệu quả học tập</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-900">📈 Phát triển</h4>
              <p className="text-gray-700">Xây dựng nền tảng vững chắc cho sự nghiệp tương lai</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Mục tiêu của Portfolio</h3>
          <p className="text-gray-700">
            Portfolio này được xây dựng nhằm tổng hợp và thể hiện kiến thức, kỹ năng số 
            đã học được trong học phần. Đây là nơi lưu trữ các sản phẩm học tập, 
            minh chứng cho quá trình phát triển kỹ năng sử dụng AI và công nghệ số 
            một cách có trách nhiệm và sáng tạo.
          </p>
        </div>
      </section>

      {/* ========== TRANG 2: DỰ ÁN / BÀI TẬP ========== */}
      <section className="mb-12 page-break">
        <h2 className="text-2xl font-bold text-red-900 mb-6 pb-2 border-b border-red-200">
          📌 TRANG 2: DỰ ÁN / BÀI TẬP (PROJECTS)
        </h2>

        <p className="text-gray-600 mb-8">
          Tổng hợp các bài tập đã hoàn thành trong học phần Kỹ năng số, 
          mỗi bài tập thể hiện một kỹ năng cụ thể với minh chứng đầy đủ.
        </p>

        {/* Bài 1 */}
        <div className="mb-6 p-5 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-bold text-red-900 mb-2">
            Bài 1 – Thao tác cơ bản với tệp và thư mục
          </h3>
          <p className="text-gray-700 mb-3">
            Tạo và tổ chức cấu trúc thư mục hợp lý, đặt tên tệp đúng quy ước với đầy đủ minh chứng.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Tổ chức file</span>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Quy ước đặt tên</span>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Cấu trúc thư mục</span>
          </div>
        </div>

        {/* Bài 2 */}
        <div className="mb-6 p-5 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-bold text-red-900 mb-2">
            Bài 2 – Tìm kiếm và đánh giá thông tin học thuật
          </h3>
          <p className="text-gray-700 mb-3">
            Sử dụng công cụ tìm kiếm nâng cao, đánh giá độ tin cậy của nguồn thông tin học thuật.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Google Scholar</span>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Từ khóa</span>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Nguồn tin cậy</span>
          </div>
        </div>

        {/* Bài 3 */}
        <div className="mb-6 p-5 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-bold text-red-900 mb-2">
            Bài 3 – Viết Prompt hiệu quả cho học tập
          </h3>
          <p className="text-gray-700 mb-3">
            Thực hành viết prompt ban đầu và cải tiến, so sánh kết quả để tối ưu hóa tương tác với AI.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Prompt Engineering</span>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">ChatGPT</span>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">AI</span>
          </div>
        </div>

        {/* Bài 4 */}
        <div className="mb-6 p-5 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-bold text-red-900 mb-2">
            Bài 4 – Sử dụng công cụ hợp tác trực tuyến
          </h3>
          <p className="text-gray-700 mb-3">
            Lập kế hoạch làm việc nhóm bằng công cụ số, phân công và theo dõi tiến độ hiệu quả.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Trello</span>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Notion</span>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Teamwork</span>
          </div>
        </div>

        {/* Bài 5 */}
        <div className="mb-6 p-5 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-bold text-red-900 mb-2">
            Bài 5 – Sử dụng AI để hỗ trợ sáng tạo nội dung
          </h3>
          <p className="text-gray-700 mb-3">
            Tạo video ngắn hoặc sản phẩm số với sự hỗ trợ của các công cụ AI sáng tạo.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">AI Video</span>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Sáng tạo</span>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Nội dung số</span>
          </div>
        </div>

        {/* Bài 6 */}
        <div className="mb-6 p-5 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-bold text-red-900 mb-2">
            Bài 6 – Sử dụng AI có trách nhiệm
          </h3>
          <p className="text-gray-700 mb-3">
            Phân tích vấn đề đạo đức và đề xuất nguyên tắc sử dụng AI có trách nhiệm trong học tập.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Đạo đức AI</span>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Trách nhiệm</span>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">Nguyên tắc</span>
          </div>
        </div>
      </section>

      {/* ========== TRANG 3: TỔNG KẾT ========== */}
      <section className="mb-12 page-break">
        <h2 className="text-2xl font-bold text-red-900 mb-6 pb-2 border-b border-red-200">
          📌 TRANG 3: TỔNG KẾT (CONCLUSION)
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Tổng kết quá trình xây dựng Portfolio</h3>
          <p className="text-gray-700 mb-4">
            Trong suốt quá trình học tập học phần Kỹ năng số, tôi đã hoàn thành 6 bài tập 
            thực hành quan trọng, từ việc tổ chức file cơ bản đến việc sử dụng AI một cách 
            có trách nhiệm. Portfolio này là minh chứng cho sự phát triển về kiến thức và 
            kỹ năng số của bản thân.
          </p>
          <p className="text-gray-700">
            Mỗi bài tập đều mang đến những bài học quý giá, giúp tôi không chỉ nắm vững 
            các công cụ công nghệ mà còn phát triển tư duy phản biện và ý thức sử dụng 
            công nghệ có trách nhiệm.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Kiến thức & Kỹ năng đạt được</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <span>Quản lý và tổ chức tệp tin hiệu quả</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <span>Tìm kiếm và đánh giá thông tin học thuật</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <span>Viết prompt hiệu quả để tương tác với AI</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <span>Sử dụng công cụ hợp tác trực tuyến</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <span>Tạo nội dung số với sự hỗ trợ của AI</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✅</span>
              <span>Hiểu và thực hành sử dụng AI có trách nhiệm</span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Khó khăn & Cách khắc phục</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-red-50">
                <th className="border border-gray-300 p-3 text-left">Khó khăn</th>
                <th className="border border-gray-300 p-3 text-left">Giải pháp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">Đánh giá độ tin cậy của nguồn thông tin</td>
                <td className="border border-gray-300 p-3">Áp dụng khung đánh giá CRAAP và so sánh nhiều nguồn</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Viết prompt chưa hiệu quả</td>
                <td className="border border-gray-300 p-3">Thực hành nhiều lần, cung cấp ngữ cảnh rõ ràng</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Phối hợp nhóm chưa nhịp nhàng</td>
                <td className="border border-gray-300 p-3">Thiết lập quy tắc giao tiếp và cập nhật tiến độ thường xuyên</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-red-50 rounded-lg border border-red-200">
          <h3 className="text-xl font-semibold text-red-900 mb-4">💭 Cảm nhận cá nhân</h3>
          <blockquote className="text-gray-700 italic leading-relaxed">
            "Qua học phần Kỹ năng số, tôi không chỉ học được cách sử dụng các công cụ công nghệ 
            mà còn phát triển tư duy học tập suốt đời. Việc xây dựng portfolio này giúp tôi 
            nhìn lại toàn bộ quá trình học tập, đánh giá được sự tiến bộ của bản thân và 
            xác định hướng phát triển tiếp theo.
            <br /><br />
            Đặc biệt, bài học về sử dụng AI có trách nhiệm đã thay đổi cách tôi nhìn nhận 
            về công nghệ - không chỉ là công cụ mà còn là trách nhiệm đối với bản thân và 
            cộng đồng."
          </blockquote>
          <div className="mt-4 pt-4 border-t border-red-200 text-center">
            <p className="font-bold text-red-900">Nguyễn Văn A</p>
            <p className="text-gray-600">Sinh viên Công nghệ Thông tin</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center pt-8 border-t border-gray-200 text-gray-500 text-sm">
        <p>Portfolio Kỹ năng số © {new Date().getFullYear()}</p>
      </div>

      {/* Print Button - only shows on screen */}
      <div className="no-print fixed bottom-6 right-6 flex gap-3">
        <button 
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
        >
          ← Quay lại
        </button>
        <button 
          onClick={() => window.print()}
          className="px-6 py-3 bg-red-900 text-white rounded-lg shadow-lg hover:bg-red-800 transition"
        >
          🖨️ In / Lưu PDF
        </button>
      </div>
    </div>
  );
};

export default PrintPortfolio;
