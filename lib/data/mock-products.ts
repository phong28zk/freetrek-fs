import type { Product } from "@/types/product"

export const mockProducts: Product[] = [
  // CẮM TRẠI
  {
    id: "SP001",
    name: "Lều cắm trại ngoài trời tự bung, chống mưa nắng, ngăn côn trùng, phối màu trẻ trung Freetrek",
    slug: "leu-cam-trai-tu-bung-tre-trung",
    description: "Lều cắm trại tự bung tiện lợi với khả năng chống mưa nắng, ngăn côn trùng và phối màu trẻ trung",
    price: 690000,
    category: "cam-trai",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Leu-cam-trai-ngoai-troi-tu-bung-chong-mua-nang-ngan-con-trung-phoi-mau-tre-trung-Freetrek_9.png?v=1759853620"],
    inStock: true,
    stockQuantity: 30,
    sku: "SP001",
    tags: ["lều", "cắm trại", "tự bung", "chống mưa"],
    specifications: {
      "Tính năng": "Tự bung, chống mưa nắng, ngăn côn trùng",
      "Phù hợp": "Dã ngoại, cắm trại",
      "Màu sắc": "Phối màu trẻ trung",
    },
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },

  // TRANG PHỤC & PHỤ KIỆN
  {
    id: "SP002",
    name: "Áo chống nắng nam nữ - nhẹ, thoáng khí, có lỗ thông hơi Rudolf UPF50+ Freetrek",
    slug: "ao-chong-nang-rudolf-upf50",
    description: "Áo chống nắng nam nữ thiết kế nhẹ, thoáng khí với lỗ thông hơi và công nghệ Rudolf UPF50+ bảo vệ da khỏi tia UV",
    price: 360000,
    category: "trang-phuc",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Ao-chong-nang-nam-nu-nhe-thoang-khi-co-lo-thong-hoi-Rudolf-UPF50-Freetrek-1.png?v=1758093975"],
    inStock: true,
    stockQuantity: 50,
    sku: "SP002",
    tags: ["áo chống nắng", "UPF50+", "thoáng khí", "unisex"],
    specifications: {
      "Chất liệu": "Vải Rudolf UPF50+",
      "Tính năng": "Chống nắng, thoáng khí, lỗ thông hơi",
      "Màu sắc": "Nhiều màu",
      "Size": "S, M, L, XL, XXL",
    },
    createdAt: "2025-01-02T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP003",
    name: "Áo khoác leo núi chống gió và chống thấm nước ngoài trời, 3 lớp công nghệ cao, bền nhẹ cho mùa thu đông Freetrek",
    slug: "ao-khoac-leo-nui-3-lop",
    description: "Áo khoác leo núi 3 lớp công nghệ cao, chống gió và chống thấm nước hoàn hảo cho mùa thu đông",
    price: 380000,
    category: "trang-phuc",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Ao-khoac-leo-nui-chong-gio-va-chong-tham-nuoc-ngoai-troi-3-lop-cong-nghe-cao-ben-nhe-cho-mua-thu-dong-Freetrek.png?v=1758610863"],
    inStock: true,
    stockQuantity: 35,
    sku: "SP003",
    tags: ["áo khoác", "leo núi", "chống gió", "chống thấm"],
    specifications: {
      "Chất liệu": "3 lớp công nghệ cao",
      "Tính năng": "Chống gió, chống thấm nước, bền nhẹ",
      "Mùa": "Thu đông",
      "Size": "S, M, L, XL, XXL",
    },
    createdAt: "2025-01-03T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP009",
    name: "Mũ boonie ngụy trang Freetrek",
    slug: "mu-boonie-nguy-trang",
    description: "Mũ boonie ngụy trang phong cách quân đội, kèm khăn che mặt tháo rời, chống nắng gấp gọn cho leo núi, câu cá, dã ngoại",
    price: 120000,
    category: "trang-phuc",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Mu-boonie-nguy-trang-phong-cach-quan-doi-kem-khan-che-mat-thao-roi-Mu-chong-nang-gap-gon-cho-leo-nui-cau-ca-da-ngoai-Freetrek_G%E1%BB%91c%20(6).png?v=1760284833"],
    inStock: true,
    stockQuantity: 80,
    sku: "SP009",
    tags: ["mũ", "boonie", "ngụy trang", "chống nắng"],
    specifications: {
      "Tính năng": "Ngụy trang, kèm khăn che mặt, gấp gọn",
      "Phù hợp": "Leo núi, câu cá, dã ngoại",
      "Màu sắc": "Ngụy trang",
    },
    createdAt: "2025-01-09T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP010",
    name: "Giày trekking cổ cao nam leo núi",
    slug: "giay-trekking-co-cao-leo-nui",
    description: "Giày trekking cổ cao nam chuyên dụng leo núi, chống trượt, chống nước, thoáng khí, phù hợp mọi địa hình",
    price: 500000,
    category: "trang-phuc",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Giay-di-bo-duong-dai-co-cao-nam-chong-truot-chong-nuoc-thoang-khi-phu-hop-moi-dia-hinh-Freetrek_05%20(7)-1.png?v=1758641428"],
    inStock: true,
    stockQuantity: 40,
    sku: "SP010",
    tags: ["giày", "trekking", "cổ cao", "leo núi"],
    specifications: {
      "Tính năng": "Chống trượt, chống nước, thoáng khí",
      "Địa hình": "Mọi địa hình",
      "Size": "39, 40, 41, 42, 43, 44",
    },
    createdAt: "2025-01-10T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP011",
    name: "Giày trekking cổ cao nam đi bộ đường dài",
    slug: "giay-trekking-co-cao-di-bo",
    description: "Giày trekking cổ cao nam chuyên dụng đi bộ đường dài, chống trượt, chống nước, thoáng khí",
    price: 450000,
    category: "trang-phuc",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Giay-di-bo-leo-nui-co-cao-nam-chong-truot-chong-nuoc-thoang-khi-phu-hop-moi-dia-hinh-Freetrek_05%20(8).png?v=1758642113"],
    inStock: true,
    stockQuantity: 45,
    sku: "SP011",
    tags: ["giày", "trekking", "đi bộ đường dài", "chống nước"],
    specifications: {
      "Tính năng": "Chống trượt, chống nước, thoáng khí",
      "Phù hợp": "Đi bộ đường dài",
      "Size": "39, 40, 41, 42, 43, 44",
    },
    createdAt: "2025-01-11T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP012",
    name: "Áo gile dã ngoại unisex",
    slug: "ao-gile-da-ngoai-unisex",
    description: "Áo gile dã ngoại nam nữ thời trang, tiện lợi, thoáng mát, bền nhẹ cho hoạt động ngoài trời",
    price: 250000,
    category: "trang-phuc",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/-Ao-ghi-le-da-ngoai-nam-nu-thoi-trang-tien-loi-thoang-mat-ben-nhe-ngoai-troi-Freetrek-_G%E1%BB%91c%20(12).png?v=1758125837"],
    inStock: true,
    stockQuantity: 60,
    sku: "SP012",
    tags: ["áo gile", "dã ngoại", "unisex", "thời trang"],
    specifications: {
      "Tính năng": "Thoáng mát, bền nhẹ, nhiều ngăn",
      "Phù hợp": "Dã ngoại, du lịch",
      "Size": "S, M, L, XL",
    },
    createdAt: "2025-01-12T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },

  // PHỤ KIỆN
  {
    id: "SP004",
    name: "Ba lô leo núi thể thao dã ngoại, kiểu dáng unisex, trượt nước, gọn nhẹ tiện dụng Freetrek",
    slug: "ba-lo-leo-nui-unisex",
    description: "Ba lô leo núi thể thao unisex với khả năng trượt nước, thiết kế gọn nhẹ và tiện dụng",
    price: 280000,
    category: "phu-kien",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Ba-lo-leo-nui-the-thao-da-ngoai-kieu-dang-unisex-truot-nuoc-gon-nhe-tien-dung-Freetrek.png?v=1758609947"],
    inStock: true,
    stockQuantity: 50,
    sku: "SP004",
    tags: ["balo", "leo núi", "unisex", "chống nước"],
    specifications: {
      "Dung tích": "25L",
      "Chất liệu": "Nylon chống nước",
      "Tính năng": "Trượt nước, gọn nhẹ, nhiều ngăn",
      "Màu sắc": "Đen, Xanh, Xám",
    },
    createdAt: "2025-01-04T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP014",
    name: "Kính đi phượt chống bụi UV",
    slug: "kinh-di-phuot-chong-bui-uv",
    description: "Kính đi phượt nam nữ bảo vệ mắt, chống bụi và chống nắng UV, chống gió",
    price: 250000,
    category: "phu-kien",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Kinh-di-phuot-nam-nu-bao-ve-mat-chong-bui-va-chong-nang-UV-chong-gio-Freetrek_G%E1%BB%91c%20(11).png?v=1760285548"],
    inStock: true,
    stockQuantity: 100,
    sku: "SP014",
    tags: ["kính", "phượt", "chống bụi", "UV"],
    specifications: {
      "Tính năng": "Chống bụi, chống UV, chống gió",
      "Phù hợp": "Đi phượt, xe máy",
      "Màu sắc": "Nhiều màu",
    },
    createdAt: "2025-01-14T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP015",
    name: "Kính thể thao ôm mặt Y2K",
    slug: "kinh-the-thao-om-mat-y2k",
    description: "Kính mắt thể thao ôm mặt Y2K, gọng dây màu bạc đen trong UV400, nhiều màu nhẹ 23g, phù hợp đi xe đạp, xe dã ngoại",
    price: 220000,
    category: "phu-kien",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Kinh-mat-the-thao-om-mat-Y2K-Gong-day-mau-bac-den-trong-UV400-nhieu-mau-nhe-23g-phu-hop-di-xe-dap-xe-da-ngoai-Freetrek_G%E1%BB%91c%20(9).png?v=1760285281"],
    inStock: true,
    stockQuantity: 80,
    sku: "SP015",
    tags: ["kính", "thể thao", "Y2K", "UV400"],
    specifications: {
      "Tính năng": "UV400, ôm mặt, siêu nhẹ 23g",
      "Phù hợp": "Đi xe đạp, dã ngoại",
      "Màu sắc": "Nhiều màu",
    },
    createdAt: "2025-01-15T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP016",
    name: "Balo leo núi gọn nhẹ chống nước",
    slug: "balo-leo-nui-gon-nhe-chong-nuoc",
    description: "Balo leo núi thể thao dã ngoại, kiểu dáng unisex, trượt nước, gọn nhẹ tiện dụng",
    price: 280000,
    category: "phu-kien",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Ba-lo-leo-nui-the-thao-da-ngoai-kieu-dang-unisex-truot-nuoc-gon-nhe-tien-dung-Freetrek.png?v=1758609947"],
    inStock: true,
    stockQuantity: 55,
    sku: "SP016",
    tags: ["balo", "leo núi", "chống nước", "gọn nhẹ"],
    specifications: {
      "Dung tích": "25L",
      "Tính năng": "Chống nước, gọn nhẹ, nhiều ngăn",
      "Màu sắc": "Đen, Xanh, Xám",
    },
    createdAt: "2025-01-16T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },

  // ĐỒ DU LỊCH
  {
    id: "SP005",
    name: "Bình nước xe đạp cao cấp, dung tích lớn 1372ml siêu nhẹ, chống rò rỉ, đồng hành mọi chặng đường Freetrek",
    slug: "binh-nuoc-xe-dap-cao-cap",
    description: "Bình nước xe đạp cao cấp với dung tích lớn 1372ml, siêu nhẹ, chống rò rỉ cho mọi chặng đường",
    price: 180000,
    category: "do-du-lich",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Binh-nuoc-xe-dap-cao-cap-dung-tich-lon-1372ml-sieu-nhe-chong-ro-ri-dong-hanh-moi-chang-duong-Freetrek.png?v=1758639730"],
    inStock: true,
    stockQuantity: 90,
    sku: "SP005",
    tags: ["bình nước", "xe đạp", "chống rò rỉ", "dung tích lớn"],
    specifications: {
      "Dung tích": "1372ml",
      "Chất liệu": "Nhựa an toàn",
      "Tính năng": "Siêu nhẹ, chống rò rỉ",
      "Phù hợp": "Xe đạp, thể thao",
    },
    createdAt: "2025-01-05T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP017",
    name: "Balo trekking caro dung tích lớn",
    slug: "balo-trekking-caro-dung-tich-lon",
    description: "Ba lô leo núi thể thao ngoài trời unisex, họa tiết kẻ caro, dung tích lớn, chống nước, tiện lợi",
    price: 320000,
    category: "do-du-lich",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Ba-lo-leo-nui-the-thao-ngoai-troi-unisex-hoa-tiet-ke-caro-dung-tich-lon-chong-nuoc-tien-loi-Freeetrek.png?v=1758613780"],
    inStock: true,
    stockQuantity: 40,
    sku: "SP017",
    tags: ["balo", "trekking", "caro", "dung tích lớn"],
    specifications: {
      "Dung tích": "45L",
      "Tính năng": "Họa tiết caro, chống nước, nhiều ngăn",
      "Màu sắc": "Caro",
    },
    createdAt: "2025-01-17T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP018",
    name: "Bộ nấu ăn 9 món dã ngoại",
    slug: "bo-nau-an-9-mon-da-ngoai",
    description: "Bộ dụng cụ nấu ăn 9 món du lịch dã ngoại, nhỏ gọn tiện lợi",
    price: 280000,
    category: "do-du-lich",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Bo-dung-cu-nau-an-9-mon-du-lich-da-ngoai-nho-gon-tien-loi-Freetrek_74.png?v=1760264436"],
    inStock: true,
    stockQuantity: 45,
    sku: "SP018",
    tags: ["nấu ăn", "dã ngoại", "9 món", "gọn nhẹ"],
    specifications: {
      "Bộ gồm": "9 món (nồi, bát, muỗng, dao...)",
      "Chất liệu": "Nhôm + inox",
      "Tính năng": "Gọn nhẹ, xếp chồng",
      "Phù hợp": "2-3 người",
    },
    createdAt: "2025-01-18T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP019",
    name: "Bình nước thể thao 1.37L chống rò",
    slug: "binh-nuoc-the-thao-chong-ro",
    description: "Bình nước xe đạp cao cấp, dung tích lớn 1372ml, siêu nhẹ, chống rò rỉ, đồng hành mọi chặng đường",
    price: 180000,
    category: "do-du-lich",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Binh-nuoc-xe-dap-cao-cap-dung-tich-lon-1372ml-sieu-nhe-chong-ro-ri-dong-hanh-moi-chang-duong-Freetrek.png?v=1758639730"],
    inStock: true,
    stockQuantity: 85,
    sku: "SP019",
    tags: ["bình nước", "thể thao", "chống rò", "dung tích lớn"],
    specifications: {
      "Dung tích": "1372ml",
      "Tính năng": "Siêu nhẹ, chống rò rỉ",
      "Phù hợp": "Xe đạp, thể thao, outdoor",
    },
    createdAt: "2025-01-19T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP020",
    name: "Gậy leo núi gấp gọn trợ lực",
    slug: "gay-leo-nui-gap-gon-tro-luc",
    description: "Gậy leo núi gấp gọn, có thể thu gọn, trợ lực, chống trượt, an toàn cho hiking",
    price: 170000,
    category: "do-du-lich",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Gay-leo-nui-gap-gon-co-the-thu-gon-tro-luc-chong-truot-an-toan-cho-hiking-Freetrek_G%E1%BB%91c%20(14).png?v=1758182790"],
    inStock: true,
    stockQuantity: 60,
    sku: "SP020",
    tags: ["gậy", "leo núi", "gấp gọn", "trợ lực"],
    specifications: {
      "Chất liệu": "Hợp kim nhôm",
      "Tính năng": "Gấp gọn, trợ lực, chống trượt",
      "Chiều dài": "Điều chỉnh được",
    },
    createdAt: "2025-01-20T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },

  // ĐỒ CẮM TRẠI
  {
    id: "SP006",
    name: "Túi ngủ mùa đông dành cho cắm trại du lịch dã ngoại đa năng phối màu Freetrek",
    slug: "tui-ngu-mua-dong-phoi-mau",
    description: "Túi ngủ mùa đông với thiết kế phối màu đẹp mắt, giữ ấm tốt cho cắm trại",
    price: 320000,
    category: "cam-trai",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Tui-ngu-mua-dong-danh-cho-cam-trai-du-lich-da-ngoai-da-nang-phoi-mau-Freetrek_29.png?v=1760262006"],
    inStock: true,
    stockQuantity: 35,
    sku: "SP006",
    tags: ["túi ngủ", "mùa đông", "phối màu", "giữ ấm"],
    specifications: {
      "Nhiệt độ": "Giữ ấm từ 0°C - 10°C",
      "Chất liệu": "Polyester cao cấp + lót bông",
      "Tính năng": "Giữ ấm tốt, phối màu đẹp",
      "Kích thước": "220 x 85 cm",
    },
    createdAt: "2025-01-06T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP007",
    name: "Gối hơi du lịch chữ U, bề mặt nỉ mềm mại, có nút cài cố định, gấp gọn tiện lợi Freetrek",
    slug: "goi-hoi-chu-u-ni-mem",
    description: "Gối hơi chữ U cho du lịch với bề mặt nỉ mềm mại, có nút cài cố định và gấp gọn tiện lợi",
    price: 80000,
    category: "cam-trai",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Goi-hoi-du-lich-chu-U-be-mat-ni-mem-mai-co-nut-cai-co-dinh-gap-gon-tien-loi-Freetrek_64.png?v=1760263950"],
    inStock: true,
    stockQuantity: 120,
    sku: "SP007",
    tags: ["gối hơi", "chữ U", "du lịch", "mềm mại"],
    specifications: {
      "Kiểu dáng": "Chữ U",
      "Chất liệu": "Bề mặt nỉ + lớp hơi PVC",
      "Tính năng": "Mềm mại, nút cài cố định, gấp gọn",
      "Phù hợp": "Đi máy bay, xe khách",
    },
    createdAt: "2025-01-07T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP008",
    name: "Ghế võng xếp dã ngoại gấp gọn, ghế đu đưa camping câu cá, du lịch, có gối tựa đầu, tiện lợi ngoài trời Freetrek",
    slug: "ghe-vong-xep-da-ngoai",
    description: "Ghế võng xếp dã ngoại gấp gọn, ghế đu đưa camping câu cá, du lịch với gối tựa đầu tiện lợi",
    price: 140000,
    category: "cam-trai",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Ghe-vong-gap-gon-ghe-du-dua-camping-cau-ca-du-lich-co-goi-tua-dau-tien-loi-ngoai-troi-Freetrek_33.png?v=1759947824"],
    inStock: true,
    stockQuantity: 50,
    sku: "SP008",
    tags: ["ghế võng", "camping", "gấp gọn", "gối tựa đầu"],
    specifications: {
      "Chất liệu": "Khung thép + vải Oxford",
      "Tính năng": "Gấp gọn, có gối tựa đầu, đu đưa",
      "Tải trọng": "120kg",
      "Phù hợp": "Camping, câu cá, du lịch",
    },
    createdAt: "2025-01-08T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP021",
    name: "Gối hơi du lịch chữ U tiện dụng",
    slug: "goi-hoi-chu-u-tien-dung",
    description: "Gối hơi du lịch chữ U, bề mặt nỉ mềm mại, có nút cài cố định, gấp gọn tiện lợi",
    price: 80000,
    category: "cam-trai",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Goi-hoi-du-lich-chu-U-be-mat-ni-mem-mai-co-nut-cai-co-dinh-gap-gon-tien-loi-Freetrek_64.png?v=1760263950"],
    inStock: true,
    stockQuantity: 110,
    sku: "SP021",
    tags: ["gối hơi", "chữ U", "tiện dụng", "du lịch"],
    specifications: {
      "Kiểu dáng": "Chữ U",
      "Tính năng": "Nỉ mềm mại, nút cài, gấp gọn",
      "Phù hợp": "Đi máy bay, xe khách, du lịch",
    },
    createdAt: "2025-01-21T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP022",
    name: "Túi ngủ dã ngoại 4 mùa",
    slug: "tui-ngu-da-ngoai-4-mua",
    description: "Túi ngủ mùa đông dành cho cắm trại du lịch dã ngoại đa năng phối màu",
    price: 320000,
    category: "cam-trai",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Tui-ngu-mua-dong-danh-cho-cam-trai-du-lich-da-ngoai-da-nang-phoi-mau-Freetrek_29.png?v=1760262006"],
    inStock: true,
    stockQuantity: 38,
    sku: "SP022",
    tags: ["túi ngủ", "4 mùa", "dã ngoại", "phối màu"],
    specifications: {
      "Nhiệt độ": "Giữ ấm từ 0°C - 10°C",
      "Tính năng": "Giữ ấm tốt, phối màu đẹp, đa năng",
      "Kích thước": "220 x 85 cm",
    },
    createdAt: "2025-01-22T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP023",
    name: "Lều cắm trại tự bung 2 cửa",
    slug: "leu-cam-trai-tu-bung-2-cua",
    description: "Lều cắm trại ngoài trời tự bung, chống mưa nắng, hai cửa thông thoáng",
    price: 750000,
    category: "cam-trai",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Leu-cam-trai-ngoai-troi-tu-bung-chong-mua-nang-hai-cua-thong-thoang-Freetrek_18.png?v=1760113973"],
    inStock: true,
    stockQuantity: 22,
    sku: "SP023",
    tags: ["lều", "tự bung", "2 cửa", "chống mưa"],
    specifications: {
      "Sức chứa": "3-4 người",
      "Tính năng": "Tự bung, 2 cửa, chống mưa nắng",
      "Kích thước": "220 x 220 x 150 cm",
    },
    createdAt: "2025-01-23T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP024",
    name: "Lều cắm trại ngăn côn trùng tiện dụng",
    slug: "leu-cam-trai-ngan-con-trung",
    description: "Lều cắm trại ngoài trời tự bung, chống mưa nắng, ngăn côn trùng, phối màu trẻ trung",
    price: 690000,
    category: "cam-trai",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Leu-cam-trai-ngoai-troi-tu-bung-chong-mua-nang-ngan-con-trung-phoi-mau-tre-trung-Freetrek_9.png?v=1759853620"],
    inStock: true,
    stockQuantity: 28,
    sku: "SP024",
    tags: ["lều", "ngăn côn trùng", "tự bung", "trẻ trung"],
    specifications: {
      "Sức chứa": "2-3 người",
      "Tính năng": "Tự bung, ngăn côn trùng, phối màu đẹp",
      "Kích thước": "200 x 200 x 135 cm",
    },
    createdAt: "2025-01-24T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP025",
    name: "Ghế xếp du lịch có gối tựa đầu",
    slug: "ghe-xep-du-lich-goi-tua-dau",
    description: "Ghế võng xếp dã ngoại gấp gọn, ghế đu đưa camping câu cá, du lịch, có gối tựa đầu",
    price: 140000,
    category: "cam-trai",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Ghe-vong-gap-gon-ghe-du-dua-camping-cau-ca-du-lich-co-goi-tua-dau-tien-loi-ngoai-troi-Freetrek_33.png?v=1759947824"],
    inStock: true,
    stockQuantity: 48,
    sku: "SP025",
    tags: ["ghế xếp", "du lịch", "gối tựa", "camping"],
    specifications: {
      "Tính năng": "Gấp gọn, gối tựa đầu, đu đưa",
      "Tải trọng": "120kg",
      "Phù hợp": "Camping, câu cá, du lịch",
    },
    createdAt: "2025-01-25T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP026",
    name: "Xe kéo hàng đa năng 8 bánh",
    slug: "xe-keo-hang-da-nang-8-banh",
    description: "Xe kéo hàng đa năng 8 bánh leo cầu thang, gấp gọn, tay kéo điều chỉnh, tiện lợi đi chợ, cắm trại, vận chuyển đồ",
    price: 220000,
    category: "cam-trai",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Xe-keo-hang-da-nang-8-banh-leo-cau-thang-gap-gon-tay-keo-dieu-chinh-tien-loi-di-cho-cam-trai-van-chuyen-do-Freetrek_93.png?v=1759919187"],
    inStock: true,
    stockQuantity: 25,
    sku: "SP026",
    tags: ["xe kéo", "8 bánh", "leo cầu thang", "đa năng"],
    specifications: {
      "Chất liệu": "Khung thép",
      "Tải trọng": "80kg",
      "Tính năng": "8 bánh leo cầu thang, gấp gọn, tay kéo điều chỉnh",
    },
    createdAt: "2025-01-26T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "SP027",
    name: "Bàn xếp dã ngoại nhôm siêu nhẹ",
    slug: "ban-xep-da-ngoai-nhom-sieu-nhe",
    description: "Bàn xếp dã ngoại hợp kim nhôm, gấp gọn, siêu nhẹ, chống gỉ, tiện dụng cho picnic, câu cá, du lịch",
    price: 180000,
    category: "cam-trai",
    images: ["https://pos.nvncdn.com/ed1ad9-213871/ps/Ban-xep-da-ngoai-hop-kim-nhom-gap-gon-sieu-nhe-chong-gi-tien-dung-cho-picnic-cau-ca-du-lich-Freetrek.png?v=1759131975"],
    inStock: true,
    stockQuantity: 35,
    sku: "SP027",
    tags: ["bàn xếp", "nhôm", "siêu nhẹ", "camping"],
    specifications: {
      "Chất liệu": "Hợp kim nhôm",
      "Kích thước": "60 x 40 x 40 cm",
      "Tính năng": "Siêu nhẹ, gấp gọn, chống gỉ",
      "Trọng lượng": "1.5kg",
    },
    createdAt: "2025-01-27T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
]

// Mock API functions for development
export const mockProductsApi = {
  getProducts: async (filters: any) => {
    await new Promise((resolve) => setTimeout(resolve, 500))

    let filtered = [...mockProducts]

    if (filters.category && filters.category !== "all") {
      filtered = filtered.filter((p) => p.category === filters.category)
    }

    if (filters.search) {
      const search = filters.search.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search) ||
          p.tags.some((tag) => tag.toLowerCase().includes(search)),
      )
    }

    if (filters.minPrice) {
      filtered = filtered.filter((p) => p.price >= filters.minPrice)
    }

    if (filters.maxPrice) {
      filtered = filtered.filter((p) => p.price <= filters.maxPrice)
    }

    if (filters.inStock) {
      filtered = filtered.filter((p) => p.inStock)
    }

    // Sorting
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case "price-asc":
          filtered.sort((a, b) => a.price - b.price)
          break
        case "price-desc":
          filtered.sort((a, b) => b.price - a.price)
          break
        case "name-asc":
          filtered.sort((a, b) => a.name.localeCompare(b.name))
          break
        case "name-desc":
          filtered.sort((a, b) => b.name.localeCompare(a.name))
          break
        case "newest":
          filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          break
      }
    }

    return {
      products: filtered,
      total: filtered.length,
      page: 1,
      pageSize: filtered.length,
      totalPages: 1,
    }
  },

  getProduct: async (idOrSlug: string) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    const product = mockProducts.find((p) => p.id === idOrSlug || p.slug === idOrSlug)
    if (!product) throw new Error("Product not found")
    return product
  },

  getFeaturedProducts: async (limit = 8) => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    return mockProducts.slice(0, limit)
  },
}
