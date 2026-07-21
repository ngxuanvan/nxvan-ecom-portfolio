export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  role?: string;
  time?: string;
  status?: string;
  image: string;
  description: string;
  achievements: string[];
  tags: string[];
};

export const portfolio = {
  person: {
    name: "Nguyễn Xuân Văn",
    title: "Thực tập sinh E-commerce & Digital Marketing",
    email: "nguyenvanxuan.work@gmail.com",
    phone: "0383 937 939",
    location: "Quận 10, TP. Hồ Chí Minh",
    cvPath: "/cv/nguyen-xuan-van-cv.pdf",
    profileImage: "/images/profile-placeholder.svg",
    social: {
      linkedin: "https://www.linkedin.com/in/placeholder-nguyen-xuan-van",
      github: "https://github.com/placeholder-nguyen-xuan-van",
    },
  },
  nav: [
    { label: "Giới thiệu", href: "#gioi-thieu" },
    { label: "Kinh nghiệm", href: "#kinh-nghiem" },
    { label: "Dự án", href: "#du-an" },
    { label: "Kỹ năng", href: "#ky-nang" },
    { label: "Học vấn", href: "#hoc-van" },
    { label: "Liên hệ", href: "#lien-he" },
  ] satisfies NavItem[],
  hero: {
    description:
      "Sinh viên chuyên ngành Thương mại điện tử, có kinh nghiệm về SEO và triển khai dự án E-commerce đa kênh. Có khả năng nghiên cứu từ khóa, viết nội dung chuẩn SEO, vận hành gian hàng và theo dõi hiệu quả website bằng các công cụ phân tích.",
  },
  about: {
    title: "Giới thiệu",
    paragraphs: [
      "Xin chào! Tôi là Nguyễn Xuân Văn, hiện là sinh viên chuyên ngành Thương mại điện tử tại Đại học Kinh tế TP. Hồ Chí Minh.",
      "Tôi có kinh nghiệm về SEO, quản trị website, Google Analytics, Google Search Console và triển khai các dự án E-commerce. Tôi quan tâm đến việc kết hợp dữ liệu, nội dung và trải nghiệm người dùng để nâng cao hiệu quả kinh doanh trên nền tảng số.",
    ],
    stats: [
      { label: "GPA đại học", value: "3.71/4" },
      { label: "Dự án nổi bật", value: "2+" },
      { label: "Lĩnh vực", value: "SEO & E-commerce" },
    ],
  },
  experience: {
    role: "Nhân viên SEO",
    company: "Công ty TNHH Thương mại & Đào tạo Dương Gia Phát",
    time: "06/2024 - 10/2024",
    bullets: [
      "Nghiên cứu từ khóa và phân tích đối thủ bằng Semrush; xây dựng 5 nhóm từ khóa theo danh mục sản phẩm và ý định tìm kiếm.",
      "Viết và tối ưu 25 bài viết chuẩn SEO cho website công ty.",
      "Đăng tải và cập nhật thông tin, hình ảnh và mô tả cho 35 sản phẩm trên website.",
      "Theo dõi thứ hạng từ khóa, lượt hiển thị, lượt nhấp và lượng truy cập tự nhiên bằng Google Search Console và Google Analytics.",
      "Đề xuất các phương án tối ưu SEO On-page.",
    ],
  },
  projects: [
    {
      id: "tetra-toys",
      title: "Tetra Toys",
      category: "Dự án E-commerce & Digital Marketing",
      role: "Team Leader",
      time: "08/2023 - 12/2023",
      image: "/images/project-tetra-toys.svg",
      description:
        "Điều phối hoạt động Digital Marketing trên Shopee, TikTok Shop, Facebook và website; phân công nhiệm vụ, theo dõi tiến độ và kiểm tra chất lượng đầu việc.",
      achievements: [
        "Hỗ trợ vận hành gian hàng Shopee, thiết lập chương trình khuyến mãi và voucher.",
        "Theo dõi hiệu quả website bằng Google Analytics, Google Search Console và Semrush.",
        "Nhóm đạt doanh thu 2,65 triệu đồng, hoàn thành 105,9% mục tiêu.",
        "TikTok đạt 15.513 lượt xem và Shopee đạt 140 lượt theo dõi.",
      ],
      tags: [
        "Shopee",
        "TikTok Shop",
        "SEO",
        "Google Analytics",
        "Google Search Console",
        "Semrush",
        "Digital Marketing",
      ],
    },
    {
      id: "resip",
      title: "ReSip",
      category: "Dự án phát triển website E-commerce",
      time: "01/2026 - 04/2026",
      image: "/images/project-resip.svg",
      description:
        "Phát triển hệ thống website E-commerce với chức năng quản lý đơn hàng và thanh toán trực tuyến.",
      achievements: [
        "Phát triển chức năng quản lý đơn hàng phía quản trị bằng ASP.NET Core MVC, SQL Server và Entity Framework Core.",
        "Thiết kế cơ sở dữ liệu và tham gia xây dựng giao diện người dùng, giao diện quản trị.",
        "Tích hợp cổng thanh toán MoMo qua API.",
        "Tự động đồng bộ trạng thái đơn hàng sau thanh toán.",
      ],
      tags: [
        "E-commerce",
        "ASP.NET Core MVC",
        "SQL Server",
        "Entity Framework Core",
        "MoMo API",
        "Website Development",
      ],
    },
    {
      id: "seo-case-study",
      title: "SEO Case Study",
      category: "Đang cập nhật",
      status: "Đang cập nhật",
      image: "/images/project-seo-case-study.svg",
      description: "Nội dung chi tiết của SEO Case Study đang được cập nhật.",
      achievements: [],
      tags: ["SEO"],
    },
  ] satisfies Project[],
  skills: [
    {
      title: "E-commerce",
      items: [
        "Shopee Seller Center",
        "TikTok Shop",
        "Quản lý sản phẩm",
        "Voucher và chương trình khuyến mãi",
      ],
    },
    {
      title: "SEO & Analytics",
      items: [
        "Nghiên cứu từ khóa",
        "SEO On-page",
        "SEO Off-page",
        "Google Analytics 4",
        "Google Search Console",
        "Semrush",
        "Ahrefs",
      ],
    },
    {
      title: "Công cụ",
      items: ["Microsoft Excel", "Microsoft Word", "Canva", "Keywordtool"],
    },
    {
      title: "Kỹ thuật",
      items: ["Quản trị website", "SQL Server", "ASP.NET Core MVC"],
    },
  ],
  education: [
    {
      school: "Đại học Kinh tế TP. Hồ Chí Minh",
      time: "2024 - Hiện tại",
      major: "Chuyên ngành: Thương mại điện tử",
      gpa: "GPA: 3.71/4",
    },
    {
      school: "Cao đẳng FPT Polytechnic Hồ Chí Minh",
      time: "2021 - 2023",
      major: "Chuyên ngành: Thương mại điện tử",
      gpa: "GPA: 8.2/10",
    },
  ],
} as const;
