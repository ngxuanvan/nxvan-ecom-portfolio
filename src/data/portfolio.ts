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
  websiteUrl?: string;
  paymentProviders?: PaymentProvider[];
  caseStudy?: ProjectCaseStudy;
};

export type PortfolioImage = {
  src: string;
  alt: string;
};

export type EvidenceImage = PortfolioImage & {
  caption: string;
};

export type CaseStudyImage = PortfolioImage & {
  title?: string;
  caption: string;
  description?: string;
};

export type CaseStudySection = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  layout: "website" | "two-up" | "wide" | "kpi" | "admin";
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

export type PaymentProvider = {
  name: string;
  logo: PortfolioImage & {
    width: number;
    height: number;
  };
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
    profileImage: "/images/profile/nxvan(1080 x 1080 px).png",
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
      { label: "GPA đại học", value: "3.77 / 4.00" },
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
    evidenceIntro:
      "Một số tài liệu minh họa quá trình nghiên cứu từ khóa, theo dõi thứ hạng nội dung và triển khai backlink trong thời gian làm việc.",
    evidenceImages: [
      {
        src: "/images/experience/duong-gia-phat/nghiên cứu từ khoá, nhóm từ khoá.png",
        alt: "Bảng nghiên cứu và phân nhóm từ khóa trong quá trình làm SEO tại Dương Gia Phát",
        caption: "Nghiên cứu và phân nhóm từ khóa",
      },
      {
        src: "/images/experience/duong-gia-phat/Theo dõi thứ hạng từ khóa.png",
        alt: "Bảng theo dõi thứ hạng từ khóa trong quá trình làm SEO tại Dương Gia Phát",
        caption: "Theo dõi thứ hạng từ khóa",
      },
      {
        src: "/images/experience/duong-gia-phat/key đẩy bài viết đang top.png",
        alt: "Bảng theo dõi từ khóa và bài viết đang xếp hạng tại Dương Gia Phát",
        caption: "Theo dõi từ khóa và bài viết đang xếp hạng",
      },
      {
        src: "/images/experience/duong-gia-phat/báo cáo backlink đẩy top site chính.png",
        alt: "Bảng báo cáo backlink hỗ trợ website chính tại Dương Gia Phát",
        caption: "Báo cáo backlink hỗ trợ website chính",
      },
    ],
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
      websiteUrl: "https://dochoimohinh.com.vn/",
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
      websiteUrl: "https://dotnet.resip.io.vn/",
      description:
        "Phát triển hệ thống website E-commerce với chức năng quản lý sản phẩm, quản lý đơn hàng, dashboard quản trị, tích hợp thanh toán trực tuyến và tự động đồng bộ trạng thái giao dịch.",
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
        "Dashboard quản trị",
        "MoMo API",
        "Payment Integration",
      ],
      images: {
        cover: {
          src: "/images/projects/resip/trangchuresip.png",
          alt: "Trang chủ website ReSip",
        },
        gallery: [
          {
            src: "/images/projects/resip/dotnet_resip_epayment.png",
            alt: "Màn hình thanh toán trực tuyến của ReSip",
          },
        ],
        screenshots: [],
      },
      paymentProviders: [
        {
          name: "MoMo",
          logo: {
            src: "/images/projects/resip/payments/logomomo.webp",
            alt: "Logo MoMo",
            width: 960,
            height: 960,
          },
        },
        {
          name: "VNPay",
          logo: {
            src: "/images/projects/resip/payments/vnpay.svg",
            alt: "Logo VNPay",
            width: 103,
            height: 31,
          },
        },
        {
          name: "PayPal",
          logo: {
            src: "/images/projects/resip/payments/logopaypal.jpeg",
            alt: "Logo PayPal",
            width: 547,
            height: 365,
          },
        },
      ],
      caseStudy: {
        hero: {
          src: "/images/projects/resip/trangchuresip.png",
          alt: "Trang chủ website ReSip",
          title: "Website ReSip",
          caption:
            "Giao diện website E-commerce được dùng làm điểm chạm chính cho sản phẩm và quy trình mua hàng.",
        },
        sections: [
          {
            id: "admin-system",
            title: "Hệ thống quản trị",
            eyebrow: "Quản trị vận hành",
            description:
              "Giao diện quản trị hỗ trợ theo dõi hoạt động hệ thống, quản lý sản phẩm và kiểm tra lịch sử giao dịch thanh toán.",
            layout: "admin",
            images: [
              {
                src: "/images/projects/resip/dashboard tổng quan admin.png",
                alt: "Dashboard tổng quan quản trị của hệ thống ReSip",
                title: "Dashboard tổng quan quản trị",
                caption: "Dashboard tổng quan quản trị",
                description:
                  "Tổng hợp nhanh các thông tin vận hành và trạng thái chính của hệ thống.",
              },
              {
                src: "/images/projects/resip/quản lý danh sách sản phẩm.png",
                alt: "Màn hình quản lý danh sách sản phẩm trong trang quản trị ReSip",
                title: "Quản lý danh sách sản phẩm",
                caption: "Quản lý danh sách sản phẩm",
                description:
                  "Theo dõi, cập nhật và quản lý thông tin sản phẩm trong trang quản trị.",
              },
              {
                src: "/images/projects/resip/tracking lịch sử giao dịch momo.png",
                alt: "Màn hình theo dõi lịch sử giao dịch MoMo trong hệ thống ReSip",
                title: "Theo dõi lịch sử giao dịch MoMo",
                caption: "Theo dõi lịch sử giao dịch MoMo",
                description:
                  "Kiểm tra trạng thái giao dịch, mã thanh toán và lịch sử đồng bộ đơn hàng.",
              },
            ],
          },
        ],
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
        value: "3.77 / 4.00",
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
