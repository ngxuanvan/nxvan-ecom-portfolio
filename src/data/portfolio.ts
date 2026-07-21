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
  description: string;
  achievements: string[];
  tags: string[];
  images: ProjectImages;
  caseStudy?: ProjectCaseStudy;
};

export type PortfolioImage = {
  src: string;
  alt: string;
};

export type CaseStudyImage = PortfolioImage & {
  title?: string;
  caption: string;
};

export type CaseStudySection = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  layout: "website" | "two-up" | "wide" | "kpi";
  images: CaseStudyImage[];
};

export type ProjectCaseStudy = {
  hero: CaseStudyImage;
  sections: CaseStudySection[];
};

export type ProjectImages = {
  cover?: PortfolioImage;
  gallery: PortfolioImage[];
  screenshots: PortfolioImage[];
};

export const portfolio = {
  site: {
    ogImage: "/images/og-image.svg",
  },
  person: {
    name: "Nguyễn Xuân Văn",
    title: "Thực tập sinh E-commerce & Digital Marketing",
    email: "nguyenvanxuan.work@gmail.com",
    phone: "0383 937 939",
    location: "Quận 10, TP. Hồ Chí Minh",
    cvPath: "/cv/nguyen-xuan-van-cv.pdf",
    profileImage: "/images/profile/profile-placeholder.svg",
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
      { label: "GPA đại học", value: "3.71 / 4.00" },
      { label: "Dự án nổi bật", value: "2+" },
      { label: "Lĩnh vực", value: "SEO & E-commerce" },
    ],
  },
  experience: {
    role: "Nhân viên SEO",
    company: "Công ty TNHH Thương mại & Đào tạo Dương Gia Phát",
    time: "06/2024 – 10/2024",
    image: {
      src: "/images/experience/duong-gia-phat/cover.svg",
      alt: "Ảnh minh họa kinh nghiệm SEO tại Dương Gia Phát",
    },
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
      time: "08/2023 – 12/2023",
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
      images: {
        cover: {
          src: "/images/projects/tetratoys/trangchutetratoys.png",
          alt: "Trang chủ website Tetra Toys",
        },
        gallery: [
          {
            src: "/images/projects/tetratoys/01-performance.svg",
            alt: "Chỉ số hiệu quả của dự án Tetra Toys",
          },
        ],
        screenshots: [],
      },
      caseStudy: {
        hero: {
          src: "/images/projects/tetratoys/trangchutetratoys.png",
          alt: "Trang chủ website Tetra Toys",
          title: "Trang chủ Tetra Toys",
          caption:
            "Điểm chạm chính của dự án, giới thiệu sản phẩm và định hướng trải nghiệm mua sắm.",
        },
        sections: [
          {
            id: "website",
            title: "Website",
            eyebrow: "Nền tảng owned media",
            description:
              "Website được trình bày như trung tâm nội dung và chuyển đổi, kết nối thông tin sản phẩm, bài viết và hành trình mua hàng.",
            layout: "website",
            images: [
              {
                src: "/images/projects/tetratoys/trangchutetratoys.png",
                alt: "Trang chủ website Tetra Toys",
                title: "Trang chủ",
                caption: "Không gian giới thiệu thương hiệu và danh mục sản phẩm.",
              },
              {
                src: "/images/projects/tetratoys/chitietsanpham.png",
                alt: "Trang chi tiết sản phẩm Tetra Toys",
                title: "Chi tiết sản phẩm",
                caption: "Nội dung sản phẩm được tổ chức để hỗ trợ quyết định mua.",
              },
              {
                src: "/images/projects/tetratoys/trangblogweb.png",
                alt: "Trang blog website Tetra Toys",
                title: "Blog",
                caption: "Kênh nội dung hỗ trợ SEO và giáo dục khách hàng.",
              },
            ],
          },
          {
            id: "seo",
            title: "SEO",
            eyebrow: "Đo lường tìm kiếm",
            description:
              "Theo dõi hiệu quả website bằng Google Search Console và Google Analytics để quan sát hành vi tìm kiếm và truy cập.",
            layout: "two-up",
            images: [
              {
                src: "/images/projects/tetratoys/ggsearch console web.png",
                alt: "Báo cáo Google Search Console của website Tetra Toys",
                title: "Google Search Console",
                caption: "Theo dõi hiệu suất hiển thị và lượt nhấp từ tìm kiếm.",
              },
              {
                src: "/images/projects/tetratoys/gganalytics web.png",
                alt: "Báo cáo Google Analytics của website Tetra Toys",
                title: "Google Analytics",
                caption: "Quan sát lưu lượng truy cập và hành vi người dùng trên website.",
              },
            ],
          },
          {
            id: "facebook",
            title: "Facebook",
            eyebrow: "Kênh social",
            description:
              "Facebook được sử dụng để triển khai nội dung, tăng điểm chạm thương hiệu và hỗ trợ chiến dịch quảng cáo.",
            layout: "two-up",
            images: [
              {
                src: "/images/projects/tetratoys/baidangfb.png",
                alt: "Bài đăng Facebook của Tetra Toys",
                title: "Bài đăng Facebook",
                caption: "Nội dung social phục vụ nhận diện và tương tác.",
              },
              {
                src: "/images/projects/tetratoys/fbads.png",
                alt: "Giao diện Facebook Ads của Tetra Toys",
                title: "Facebook Ads",
                caption: "Thiết lập quảng cáo để mở rộng phạm vi tiếp cận.",
              },
            ],
          },
          {
            id: "tiktok-shop",
            title: "TikTok Shop",
            eyebrow: "Social commerce",
            description:
              "TikTok Shop kết hợp nội dung video, giỏ hàng sản phẩm và phiên live để tạo hành trình mua sắm trực tiếp.",
            layout: "two-up",
            images: [
              {
                src: "/images/projects/tetratoys/gắn sản phẩm vào video giỏ hàng tiktok.png",
                alt: "Gắn sản phẩm vào video và giỏ hàng TikTok",
                title: "Gắn sản phẩm vào video",
                caption: "Liên kết nội dung video với sản phẩm để rút ngắn hành trình mua.",
              },
              {
                src: "/images/projects/tetratoys/doanhsophienlivetiktok.png",
                alt: "Doanh số phiên live TikTok của Tetra Toys",
                title: "Phiên live TikTok",
                caption: "Theo dõi hiệu quả phiên live trong hoạt động bán hàng.",
              },
            ],
          },
          {
            id: "shopee",
            title: "Shopee",
            eyebrow: "Marketplace",
            description:
              "Gian hàng Shopee là kênh bán hàng chính để vận hành sản phẩm, voucher và các chương trình khuyến mãi.",
            layout: "wide",
            images: [
              {
                src: "/images/projects/tetratoys/giaodiengianghangshopee.png",
                alt: "Giao diện gian hàng Shopee của Tetra Toys",
                title: "Gian hàng Shopee",
                caption: "Giao diện gian hàng phục vụ bán hàng và điều hướng sản phẩm.",
              },
            ],
          },
          {
            id: "campaign-results",
            title: "Campaign Results",
            eyebrow: "Tổng hợp hiệu quả",
            description:
              "Các màn hình kết quả được đặt ở kích thước lớn để thể hiện rõ dữ liệu từ Shopee, TikTok Shop và Facebook.",
            layout: "kpi",
            images: [
              {
                src: "/images/projects/tetratoys/tongquanvequangcaochaytrenshopee.png",
                alt: "Tổng quan quảng cáo chạy trên Shopee",
                title: "Shopee Ads",
                caption: "Tổng quan hiệu quả quảng cáo trên Shopee.",
              },
              {
                src: "/images/projects/tetratoys/phantichdoanhthutiktokshop.png",
                alt: "Phân tích doanh thu TikTok Shop",
                title: "TikTok Shop",
                caption: "Phân tích doanh thu từ kênh TikTok Shop.",
              },
              {
                src: "/images/projects/tetratoys/songuoitiepcantrenfanpagefb.png",
                alt: "Số người tiếp cận trên fanpage Facebook",
                title: "Facebook Reach",
                caption: "Theo dõi phạm vi tiếp cận trên fanpage Facebook.",
              },
            ],
          },
        ],
      },
    },
    {
      id: "resip",
      title: "ReSip",
      category: "Dự án phát triển website E-commerce",
      time: "01/2026 – 04/2026",
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
      images: {
        cover: {
          src: "/images/projects/resip/cover.svg",
          alt: "Ảnh bìa dự án ReSip",
        },
        gallery: [
          {
            src: "/images/projects/resip/01-checkout.svg",
            alt: "Màn hình minh họa thanh toán và đồng bộ đơn hàng ReSip",
          },
        ],
        screenshots: [],
      },
    },
    {
      id: "seo-case-study",
      title: "SEO Case Study",
      category: "Đang cập nhật",
      status: "Đang cập nhật",
      description: "Nội dung chi tiết của SEO Case Study đang được cập nhật.",
      achievements: [],
      tags: ["SEO"],
      images: {
        gallery: [],
        screenshots: [],
      },
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
      time: "2024 – Hiện tại",
      major: "Chuyên ngành: Thương mại điện tử",
      logo: {
        src: "/logo-ueh.png",
        alt: "Logo Đại học Kinh tế TP. Hồ Chí Minh",
      },
      courses: [
        "Marketing kỹ thuật số",
        "Thương mại điện tử",
        "Công nghệ TMĐT",
        "Phát triển ứng dụng TMĐT",
        "Phân tích nghiệp vụ kinh doanh",
      ],
      gpa: {
        label: "GPA",
        value: "3.71 / 4.00",
      },
    },
    {
      school: "Cao đẳng FPT Polytechnic Hồ Chí Minh",
      time: "2021 – 2023",
      major: "Chuyên ngành: Thương mại điện tử",
      logo: {
        src: "/FPT_Polytechnic.png",
        alt: "Logo Cao đẳng FPT Polytechnic Hồ Chí Minh",
      },
      courses: [
        "Digital Marketing",
        "SEO & Marketing",
        "Website Development",
        "Introduction to E-commerce",
        "Content Marketing",
      ],
      gpa: {
        label: "GPA",
        value: "8.20 / 10.00",
      },
    },
  ],
} as const;
