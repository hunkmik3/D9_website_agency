// ... existing code ...
// XÓA DÒNG SAU:
// "use client";
// import { useState } from "react";
// ... existing code ...

import ContactForm from "./ContactForm";
import Image from "next/image";

const PROJECTS = {
  "tam-minh-foods": {
    name: "TÂM MINH FOODS",
    image: "/images/projects/tam-minh-foods.jpg",
    desc: "Dự án thương mại điện tử nổi bật của Tâm Minh Foods.",
    linh_vuc: "THỰC PHẨM – SỨC KHỎE",
    loai_hinh: "B2C",
    giai_phap: ["XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU", "TRUYỀN THÔNG ĐA KÊNH", "QUẢNG CÁO FACEBOOK, GOOGLE"],
    ve_du_an: "Tâm Minh Foods là thương hiệu thực phẩm sạch, chuyên cung cấp các sản phẩm dinh dưỡng, an toàn cho sức khỏe người tiêu dùng với hệ thống phân phối rộng khắp.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trong thị trường thực phẩm cạnh tranh cao",
      "Thu hút khách hàng mới và giữ chân khách hàng cũ",
      "Tối ưu chi phí quảng cáo nhưng vẫn đảm bảo hiệu quả chuyển đổi"
    ],
    muc_tieu: [
      "Tăng trưởng doanh thu gấp 6 lần sau 1 năm triển khai",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng quay lại mua hàng"
    ],
    giai_phap_chi_tiet: [
      "Xây dựng chiến lược truyền thông tổng thể cho thương hiệu Tâm Minh Foods",
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online và offline",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Doanh thu tăng gấp 6 lần sau 1 năm triển khai chiến dịch",
      "Tỷ lệ khách hàng quay lại mua hàng tăng 48%",
      "Chi phí quảng cáo giảm 27% nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Tâm Minh Foods được nhận diện rộng rãi trên thị trường thực phẩm sạch"
    ]
  },
  "sao-thai-duong": {
    name: "SAO THÁI DƯƠNG",
    image: "/images/projects/sao-thai-duong.jpg",
    desc: "Dự án thương mại điện tử nổi bật của Sao Thái Dương.",
    linh_vuc: "DƯỢC PHẨM – SỨC KHỎE",
    loai_hinh: "B2C",
    giai_phap: ["XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU", "TRUYỀN THÔNG ĐA KÊNH", "QUẢNG CÁO FACEBOOK, GOOGLE"],
    ve_du_an: "Sao Thái Dương là thương hiệu dược phẩm nổi tiếng tại Việt Nam, chuyên cung cấp các sản phẩm chăm sóc sức khỏe, sắc đẹp với chất lượng cao và uy tín.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trong thị trường dược phẩm cạnh tranh cao",
      "Định vị thương hiệu là sản phẩm an toàn, hiệu quả, được chuyên gia khuyên dùng",
      "Tối ưu chi phí quảng cáo, tăng hiệu quả chuyển đổi"
    ],
    muc_tieu: [
      "Tăng trưởng doanh thu vượt bậc sau 1 năm triển khai",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại mua hàng"
    ],
    giai_phap_chi_tiet: [
      "Xây dựng chiến lược truyền thông tổng thể cho thương hiệu Sao Thái Dương",
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online và offline",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Doanh thu tăng trưởng vượt bậc sau 1 năm triển khai chiến dịch",
      "Tỷ lệ khách hàng quay lại mua hàng tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Sao Thái Dương được nhận diện rộng rãi trên thị trường dược phẩm Việt Nam"
    ]
  },
  "nha-sach-tien-tho": {
    name: "NHÀ SÁCH TIẾN THỌ",
    image: "/images/projects/nha-sach-tien-tho.jpg",
    desc: "Dự án thương mại điện tử nổi bật của Nhà Sách Tiến Thọ.",
    linh_vuc: "MUA SẮM – GIẢI TRÍ",
    loai_hinh: "B2C",
    giai_phap: ["XÂY DỰNG CHIẾN LƯỢC", "TRUYỀN THÔNG"],
    ve_du_an: "Nhà sách Tiến Thọ là tổ hợp mua sắm – giải trí rộng hơn 2500m2, bao gồm nhà sách Tiến Thọ với hàng nghìn đầu sách, khu vui chơi trẻ em rộng nhất Hà Nội, siêu thị mua sắm cho gia đình, khu ăn uống…",
    thach_thuc: [
      "Thu hút 100% khách hàng mới, chưa biết đến cơ sở mới của Tiến Thọ tại Giải Phóng",
      "Định vị của thương hiệu Tiến Thọ từ trước đến nay là Nhà sách Tiến Thọ, khách hàng ít liên tưởng tới các hoạt động kinh doanh khác như khu vui chơi, siêu thị, quà tặng, ăn uống…"
    ],
    muc_tieu: [
      "Thu hút 1000 người đến cơ sở Giải Phóng trong 3 ngày khai trương",
      "Đẩy doanh thu 3 cơ sở còn lại"
    ],
    giai_phap_chi_tiet: [
      "Xây dựng chương trình truyền thông xuyên suốt trước/trong/sau sự kiện khai trương cơ sở Giải Phóng",
      "Chuỗi 10 bài giới thiệu về sự kiện khai trương cơ sở mới tại Giải Phóng trên Facebook, website (Tiến Thọ chuẩn bị mở cơ sở mới, Khu vui chơi lớn nhất Hà Nội sắp khai trương tại Giải Phóng…) ",
      "Booking báo chí nói về sự kiện khai trương (Kênh14, vnexpress)",
      "Chạy quảng cáo Facebook quanh điểm bán Giải Phóng",
      "7km với hình thức tiếp cận, xem video, tương tác với chương trình 'Khai trương cơ sở mới – Miễn phí vé vào khu vui chơi lớn nhất Hà Nội'",
      "Xây dựng video với thông điệp 'Tổ hợp mua sắm Nhà sách Tiến Thọ – điểm đến của mọi nhà' cho 2 định dạng video ngang và video dọc cho từng nền tảng quảng cáo youtube, quảng cáo facebook trên định dạng di động",
      "Chạy quảng cáo chương trình đồng giá sách để thu hút khách hàng đến với nhà sách Tiến Thọ",
      "Giảm giá vé vui chơi thiếu nhi từ thứ 2 – thứ 5 (những ngày thấp điểm của điểm vui chơi)"
    ],
    ket_qua: [
      "937 người đã đến Nhà sách Tiến Thọ trong 3 ngày khai trương cơ sở Giải Phóng",
      "Cải thiện mức độ ghi nhớ quảng cáo từ 5 điểm lên 7 điểm sau chuỗi bài sự kiện khai trương",
      "600000 người quanh điểm bán tiếp cận được thông điệp truyền thông với tần suất 5 lần/tuần",
      "Tỷ lệ xem 75% video đạt 83% đối với video có định dạng dọc cho thiết bị di động"
    ]
  },
  "yeu-boi-loi": {
    name: "YÊU BƠI LỘI",
    image: "/images/projects/yeu-boi-loi.jpg",
    desc: "Dự án thương mại điện tử nổi bật của Yêu Bơi Lội.",
    linh_vuc: "THỂ THAO – GIÁO DỤC",
    loai_hinh: "B2C",
    giai_phap: [
      "XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU",
      "TRUYỀN THÔNG ĐA KÊNH",
      "QUẢNG CÁO FACEBOOK, GOOGLE"
    ],
    ve_du_an: "Yêu Bơi Lội là thương hiệu đào tạo bơi lội uy tín, chuyên nghiệp, giúp hàng nghìn học viên nâng cao sức khỏe, kỹ năng sống và phòng tránh đuối nước.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trong lĩnh vực đào tạo bơi lội vốn ít được chú trọng truyền thông",
      "Định vị thương hiệu là trung tâm đào tạo bơi lội uy tín, chất lượng, an toàn cho mọi lứa tuổi",
      "Tối ưu chi phí quảng cáo, tăng hiệu quả chuyển đổi học viên"
    ],
    muc_tieu: [
      "Tăng trưởng số lượng học viên đăng ký khóa học vượt bậc sau 1 năm triển khai",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng học viên trung thành và giới thiệu bạn bè"
    ],
    giai_phap_chi_tiet: [
      "Xây dựng chiến lược truyền thông tổng thể cho thương hiệu Yêu Bơi Lội",
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu là phụ huynh và học sinh",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online và offline",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân học viên"
    ],
    ket_qua: [
      "Số lượng học viên đăng ký tăng trưởng mạnh sau 1 năm triển khai chiến dịch",
      "Tỷ lệ học viên giới thiệu bạn bè tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Yêu Bơi Lội được nhận diện rộng rãi trong lĩnh vực đào tạo bơi lội an toàn, chuyên nghiệp"
    ]
  },
  "lipo-healthy-food": {
    name: "LIPO HEALTHY FOOD",
    image: "/images/projects/lipo-healthy-food.jpg",
    desc: "Dự án thương mại điện tử nổi bật của Lipo Healthy Food.",
    linh_vuc: "THỰC PHẨM – SỨC KHỎE",
    loai_hinh: "B2C",
    giai_phap: ["XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU", "TRUYỀN THÔNG ĐA KÊNH", "QUẢNG CÁO FACEBOOK, GOOGLE"],
    ve_du_an: "Lipo Healthy Food là thương hiệu thực phẩm dinh dưỡng, hướng đến sức khỏe cộng đồng với các sản phẩm chất lượng cao, an toàn và tiện lợi.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trong thị trường thực phẩm chức năng cạnh tranh",
      "Định vị thương hiệu là sản phẩm dinh dưỡng an toàn, chất lượng",
      "Tối ưu chi phí quảng cáo, tăng hiệu quả chuyển đổi"
    ],
    muc_tieu: [
      "Tăng trưởng doanh thu vượt bậc sau 1 năm triển khai",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại mua hàng"
    ],
    giai_phap_chi_tiet: [
      "Xây dựng chiến lược truyền thông tổng thể cho thương hiệu Lipo Healthy Food",
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online và offline",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Doanh thu tăng trưởng vượt bậc sau 1 năm triển khai chiến dịch",
      "Tỷ lệ khách hàng quay lại mua hàng tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Lipo Healthy Food được nhận diện rộng rãi trên thị trường thực phẩm dinh dưỡng"
    ]
  },
  "jewis": {
    name: "JEWIS",
    image: "/images/projects/jewis.jpg",
    desc: "Dự án thương mại điện tử nổi bật của Jewis.",
    linh_vuc: "THỜI TRANG – PHỤ KIỆN",
    loai_hinh: "B2C",
    giai_phap: ["XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU", "TRUYỀN THÔNG ĐA KÊNH", "QUẢNG CÁO FACEBOOK, GOOGLE"],
    ve_du_an: "Jewis là thương hiệu phụ kiện thời trang cao cấp, nổi bật với các sản phẩm thiết kế tinh xảo, sang trọng, phù hợp với nhiều đối tượng khách hàng.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trong thị trường phụ kiện thời trang cao cấp",
      "Định vị thương hiệu là sản phẩm chất lượng, thiết kế độc đáo",
      "Tối ưu chi phí quảng cáo, tăng hiệu quả chuyển đổi"
    ],
    muc_tieu: [
      "Tăng trưởng doanh thu vượt bậc sau 1 năm triển khai",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại mua hàng"
    ],
    giai_phap_chi_tiet: [
      "Xây dựng chiến lược truyền thông tổng thể cho thương hiệu Jewis",
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online và offline",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Doanh thu tăng trưởng vượt bậc sau 1 năm triển khai chiến dịch",
      "Tỷ lệ khách hàng quay lại mua hàng tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Jewis được nhận diện rộng rãi trên thị trường phụ kiện thời trang cao cấp"
    ]
  },
  "facolos": {
    name: "FACOLOS",
    image: "/images/projects/facolos.jpg",
    desc: "Dự án thương mại điện tử nổi bật của Facolos.",
    linh_vuc: "THỜI TRANG – PHỤ KIỆN",
    loai_hinh: "B2C",
    giai_phap: ["XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU", "TRUYỀN THÔNG ĐA KÊNH", "QUẢNG CÁO FACEBOOK, GOOGLE"],
    ve_du_an: "Facolos là thương hiệu thời trang phụ kiện nổi bật với các sản phẩm chất lượng, thiết kế hiện đại, phù hợp với giới trẻ.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trong thị trường thời trang cạnh tranh cao",
      "Định vị thương hiệu là sản phẩm thời trang chất lượng, giá hợp lý",
      "Tối ưu chi phí quảng cáo, tăng hiệu quả chuyển đổi"
    ],
    muc_tieu: [
      "Tăng trưởng doanh thu vượt bậc sau 1 năm triển khai",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại mua hàng"
    ],
    giai_phap_chi_tiet: [
      "Xây dựng chiến lược truyền thông tổng thể cho thương hiệu Facolos",
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu là giới trẻ",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online và offline",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Doanh thu tăng trưởng vượt bậc sau 1 năm triển khai chiến dịch",
      "Tỷ lệ khách hàng quay lại mua hàng tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Facolos được nhận diện rộng rãi trên thị trường thời trang phụ kiện"
    ]
  },
  "glucankid": {
    name: "GLUCANKID",
    image: "/images/projects/glucankid.jpg",
    desc: "Dự án thương mại điện tử nổi bật của Glucankid.",
    linh_vuc: "THỰC PHẨM CHỨC NĂNG – SỨC KHỎE",
    loai_hinh: "B2C",
    giai_phap: ["XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU", "TRUYỀN THÔNG ĐA KÊNH", "QUẢNG CÁO FACEBOOK, GOOGLE"],
    ve_du_an: "Glucankid là thương hiệu thực phẩm chức năng hỗ trợ sức khỏe trẻ em, nổi bật với các sản phẩm an toàn, chất lượng, được nhiều phụ huynh tin dùng.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trong thị trường thực phẩm chức năng cho trẻ em",
      "Định vị thương hiệu là sản phẩm an toàn, hiệu quả, được chuyên gia khuyên dùng",
      "Tối ưu chi phí quảng cáo, tăng hiệu quả chuyển đổi"
    ],
    muc_tieu: [
      "Tăng trưởng doanh thu vượt bậc sau 1 năm triển khai",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại mua hàng"
    ],
    giai_phap_chi_tiet: [
      "Xây dựng chiến lược truyền thông tổng thể cho thương hiệu Glucankid",
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu là phụ huynh có con nhỏ",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online và offline",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân học viên"
    ],
    ket_qua: [
      "Doanh thu tăng trưởng vượt bậc sau 1 năm triển khai chiến dịch",
      "Tỷ lệ khách hàng quay lại mua hàng tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Glucankid được nhận diện rộng rãi trên thị trường thực phẩm chức năng cho trẻ em"
    ]
  },
  "fimciti": {
    name: "FIMCITI",
    image: "/images/projects/fimciti.jpg",
    desc: "Dự án thương mại điện tử nổi bật của Fimciti.",
    linh_vuc: "BẤT ĐỘNG SẢN – DỊCH VỤ",
    loai_hinh: "B2C, B2B",
    giai_phap: ["XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU", "TRUYỀN THÔNG ĐA KÊNH", "QUẢNG CÁO FACEBOOK, GOOGLE"],
    ve_du_an: "Fimciti là nền tảng bất động sản hiện đại, cung cấp dịch vụ kết nối người mua, người bán và các dịch vụ liên quan đến bất động sản một cách nhanh chóng, minh bạch.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trong thị trường bất động sản cạnh tranh cao",
      "Định vị thương hiệu là nền tảng kết nối uy tín, minh bạch",
      "Tối ưu chi phí quảng cáo, tăng hiệu quả chuyển đổi"
    ],
    muc_tieu: [
      "Tăng trưởng số lượng người dùng và giao dịch trên nền tảng",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại sử dụng dịch vụ"
    ],
    giai_phap_chi_tiet: [
      "Xây dựng chiến lược truyền thông tổng thể cho nền tảng Fimciti",
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online và offline",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Số lượng người dùng và giao dịch trên nền tảng tăng trưởng mạnh sau 1 năm triển khai chiến dịch",
      "Tỷ lệ khách hàng quay lại sử dụng dịch vụ tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Fimciti được nhận diện rộng rãi trên thị trường bất động sản công nghệ"
    ]
  },
  "sao-my-restaurant": {
    name: "SAO MỸ RESTAURANT",
    image: "/images/projects/sao-my-restaurant.jpg",
    desc: "Dự án thương mại điện tử nổi bật của Sao Mỹ Restaurant.",
    linh_vuc: "NHÀ HÀNG – ẨM THỰC",
    loai_hinh: "B2C",
    giai_phap: ["XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU", "TRUYỀN THÔNG ĐA KÊNH", "QUẢNG CÁO FACEBOOK, GOOGLE"],
    ve_du_an: "Sao Mỹ Restaurant là chuỗi nhà hàng ẩm thực nổi tiếng với các món ăn đặc sắc, không gian sang trọng, phục vụ chuyên nghiệp.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trong thị trường nhà hàng ẩm thực cạnh tranh cao",
      "Định vị thương hiệu là nhà hàng chất lượng, phục vụ chuyên nghiệp",
      "Tối ưu chi phí quảng cáo, tăng hiệu quả chuyển đổi"
    ],
    muc_tieu: [
      "Tăng trưởng doanh thu vượt bậc sau 1 năm triển khai",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại nhà hàng"
    ],
    giai_phap_chi_tiet: [
      "Xây dựng chiến lược truyền thông tổng thể cho chuỗi nhà hàng Sao Mỹ",
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online và offline",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Doanh thu tăng trưởng vượt bậc sau 1 năm triển khai chiến dịch",
      "Tỷ lệ khách hàng quay lại nhà hàng tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Sao Mỹ Restaurant được nhận diện rộng rãi trên thị trường nhà hàng ẩm thực"
    ]
  },
  "xo-seafood": {
    name: "XÔ SEAFOOD",
    image: "/images/projects/xo-seafood.jpg",
    desc: "Dự án thương mại điện tử nổi bật của Xô Seafood.",
    linh_vuc: "THỰC PHẨM – HẢI SẢN",
    loai_hinh: "B2C",
    giai_phap: ["XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU", "TRUYỀN THÔNG ĐA KÊNH", "QUẢNG CÁO FACEBOOK, GOOGLE"],
    ve_du_an: "Xô Seafood là thương hiệu chuyên cung cấp các sản phẩm hải sản tươi sống, chất lượng cao, phục vụ nhu cầu tiêu dùng và nhà hàng tại các thành phố lớn.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trong thị trường hải sản cạnh tranh cao",
      "Định vị thương hiệu là sản phẩm hải sản tươi sống, chất lượng, giá hợp lý",
      "Tối ưu chi phí quảng cáo, tăng hiệu quả chuyển đổi"
    ],
    muc_tieu: [
      "Tăng trưởng doanh thu vượt bậc sau 1 năm triển khai",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại mua hàng"
    ],
    giai_phap_chi_tiet: [
      "Xây dựng chiến lược truyền thông tổng thể cho thương hiệu Xô Seafood",
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online và offline",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Doanh thu tăng trưởng vượt bậc sau 1 năm triển khai chiến dịch",
      "Tỷ lệ khách hàng quay lại mua hàng tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Xô Seafood được nhận diện rộng rãi trên thị trường hải sản tươi sống"
    ]
  },
  "30-phut-tieng-nhat": {
    name: "30 PHÚT TIẾNG NHẬT",
    image: "/images/projects/30-phut-tieng-nhat.jpg",
    desc: "Dự án thương mại điện tử nổi bật của 30 Phút Tiếng Nhật.",
    linh_vuc: "GIÁO DỤC – ĐÀO TẠO",
    loai_hinh: "B2C",
    giai_phap: ["XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU", "TRUYỀN THÔNG ĐA KÊNH", "QUẢNG CÁO FACEBOOK, GOOGLE"],
    ve_du_an: "30 Phút Tiếng Nhật là nền tảng học tiếng Nhật online, cung cấp các khóa học chất lượng, phương pháp hiện đại, giúp học viên tiếp cận tiếng Nhật một cách dễ dàng và hiệu quả.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trong thị trường giáo dục online cạnh tranh cao",
      "Định vị thương hiệu là nền tảng học tiếng Nhật hiệu quả, dễ tiếp cận",
      "Tối ưu chi phí quảng cáo, tăng hiệu quả chuyển đổi"
    ],
    muc_tieu: [
      "Tăng trưởng số lượng học viên đăng ký khóa học",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng học viên trung thành và giới thiệu bạn bè"
    ],
    giai_phap_chi_tiet: [
      "Xây dựng chiến lược truyền thông tổng thể cho nền tảng 30 Phút Tiếng Nhật",
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu là người học tiếng Nhật",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online và offline",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân học viên"
    ],
    ket_qua: [
      "Số lượng học viên đăng ký tăng trưởng mạnh sau 1 năm triển khai chiến dịch",
      "Tỷ lệ học viên giới thiệu bạn bè tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu 30 Phút Tiếng Nhật được nhận diện rộng rãi trên thị trường giáo dục online"
    ]
  },
  "quan-nho": {
    name: "QUÁN NHỎ",
    image: "/images/projects/quan-nho.jpg",
    desc: "Dự án thương mại điện tử nổi bật của Quán Nhỏ.",
    linh_vuc: "NHÀ HÀNG – ẨM THỰC",
    loai_hinh: "B2C",
    giai_phap: ["XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU", "TRUYỀN THÔNG ĐA KÊNH", "QUẢNG CÁO FACEBOOK, GOOGLE"],
    ve_du_an: "Quán Nhỏ là chuỗi nhà hàng ẩm thực nổi tiếng với các món ăn truyền thống, không gian ấm cúng, phục vụ tận tình.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trong thị trường nhà hàng ẩm thực cạnh tranh cao",
      "Định vị thương hiệu là nhà hàng chất lượng, phục vụ tận tình",
      "Tối ưu chi phí quảng cáo, tăng hiệu quả chuyển đổi"
    ],
    muc_tieu: [
      "Tăng trưởng doanh thu vượt bậc sau 1 năm triển khai",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại nhà hàng"
    ],
    giai_phap_chi_tiet: [
      "Xây dựng chiến lược truyền thông tổng thể cho chuỗi nhà hàng Quán Nhỏ",
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online và offline",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Doanh thu tăng trưởng vượt bậc sau 1 năm triển khai chiến dịch",
      "Tỷ lệ khách hàng quay lại nhà hàng tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Quán Nhỏ được nhận diện rộng rãi trên thị trường nhà hàng ẩm thực"
    ]
  },
  "landfood": {
    name: "LANDFOOD",
    image: "/images/projects/landfood.jpg",
    desc: "Dự án thương mại điện tử nổi bật của Landfood.",
    linh_vuc: "THỰC PHẨM – NÔNG SẢN",
    loai_hinh: "B2C",
    giai_phap: ["XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU", "TRUYỀN THÔNG ĐA KÊNH", "QUẢNG CÁO FACEBOOK, GOOGLE"],
    ve_du_an: "Landfood là thương hiệu chuyên cung cấp các sản phẩm nông sản sạch, an toàn, chất lượng cao, phục vụ nhu cầu tiêu dùng tại các thành phố lớn.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trong thị trường nông sản cạnh tranh cao",
      "Định vị thương hiệu là sản phẩm nông sản sạch, chất lượng, giá hợp lý",
      "Tối ưu chi phí quảng cáo, tăng hiệu quả chuyển đổi"
    ],
    muc_tieu: [
      "Tăng trưởng doanh thu vượt bậc sau 1 năm triển khai",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại mua hàng"
    ],
    giai_phap_chi_tiet: [
      "Xây dựng chiến lược truyền thông tổng thể cho thương hiệu Landfood",
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online và offline",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Doanh thu tăng trưởng vượt bậc sau 1 năm triển khai chiến dịch",
      "Tỷ lệ khách hàng quay lại mua hàng tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Landfood được nhận diện rộng rãi trên thị trường nông sản sạch"
    ]
  },
  "nine-west": {
    name: "NINE WEST",
    image: "/images/projects/nine-west.jpg",
    desc: "Dự án SEO nổi bật của Nine West.",
    linh_vuc: "THỜI TRANG – PHỤ KIỆN",
    loai_hinh: "B2C",
    giai_phap: ["SEO TỔNG THỂ", "XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU", "TRUYỀN THÔNG ĐA KÊNH"],
    ve_du_an: "Nine West là thương hiệu thời trang quốc tế nổi tiếng với các sản phẩm giày dép, túi xách, phụ kiện cao cấp dành cho phái đẹp.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trên thị trường thời trang cao cấp tại Việt Nam",
      "Định vị thương hiệu là sản phẩm thời trang quốc tế, chất lượng, hợp xu hướng",
      "Tối ưu chi phí marketing, tăng hiệu quả chuyển đổi từ SEO và truyền thông"
    ],
    muc_tieu: [
      "Tăng trưởng lượng truy cập website và doanh thu từ kênh online",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại mua hàng"
    ],
    giai_phap_chi_tiet: [
      "Triển khai chiến dịch SEO tổng thể cho website Nine West Việt Nam",
      "Xây dựng chiến lược nội dung, tối ưu từ khóa, tăng thứ hạng tìm kiếm",
      "Kết hợp truyền thông đa kênh để tăng nhận diện thương hiệu",
      "Tối ưu trải nghiệm người dùng trên website, tăng tỷ lệ chuyển đổi",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Lượng truy cập website tăng trưởng mạnh sau 1 năm triển khai SEO tổng thể",
      "Doanh thu online tăng rõ rệt nhờ tối ưu chuyển đổi",
      "Thương hiệu Nine West được nhận diện rộng rãi trên thị trường thời trang cao cấp tại Việt Nam"
    ]
  },
  "nen-mong-dang-quang": {
    name: "NỀN MÓNG ĐĂNG QUANG",
    image: "/images/projects/nen-mong-dang-quang.jpg",
    desc: "Dự án SEO nổi bật của Nền Móng Đăng Quang.",
    linh_vuc: "XÂY DỰNG – VẬT LIỆU",
    loai_hinh: "B2B, B2C",
    giai_phap: ["SEO TỔNG THỂ", "XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU", "TRUYỀN THÔNG ĐA KÊNH"],
    ve_du_an: "Nền Móng Đăng Quang là thương hiệu cung cấp giải pháp nền móng, vật liệu xây dựng chất lượng cao cho các công trình lớn nhỏ trên toàn quốc.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trên thị trường xây dựng, vật liệu cạnh tranh cao",
      "Định vị thương hiệu là đơn vị cung cấp giải pháp nền móng uy tín, chất lượng",
      "Tối ưu chi phí marketing, tăng hiệu quả chuyển đổi từ SEO và truyền thông"
    ],
    muc_tieu: [
      "Tăng trưởng lượng khách hàng và dự án ký kết qua kênh online",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại hợp tác"
    ],
    giai_phap_chi_tiet: [
      "Triển khai chiến dịch SEO tổng thể cho website Nền Móng Đăng Quang",
      "Xây dựng chiến lược nội dung, tối ưu từ khóa, tăng thứ hạng tìm kiếm",
      "Kết hợp truyền thông đa kênh để tăng nhận diện thương hiệu",
      "Tối ưu trải nghiệm người dùng trên website, tăng tỷ lệ chuyển đổi",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Lượng khách hàng và dự án ký kết tăng trưởng mạnh sau 1 năm triển khai SEO tổng thể",
      "Thương hiệu Nền Móng Đăng Quang được nhận diện rộng rãi trên thị trường xây dựng, vật liệu nền móng"
    ]
  },
  "lexus-thang-long": {
    name: "LEXUS THĂNG LONG",
    image: "/images/projects/lexus-thang-long.jpg",
    desc: "Dự án SEO nổi bật của Lexus Thăng Long.",
    linh_vuc: "Ô TÔ – DỊCH VỤ CAO CẤP",
    loai_hinh: "B2C, B2B",
    giai_phap: [
      "SEO TỔNG THỂ",
      "XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU",
      "TRUYỀN THÔNG ĐA KÊNH"
    ],
    ve_du_an: "Lexus Thăng Long là đại lý phân phối chính hãng các dòng xe Lexus tại Việt Nam, nổi bật với dịch vụ chăm sóc khách hàng cao cấp và trải nghiệm sang trọng.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trên thị trường xe sang cạnh tranh cao",
      "Định vị thương hiệu là đại lý Lexus chính hãng, dịch vụ đẳng cấp, uy tín",
      "Tối ưu chi phí marketing, tăng hiệu quả chuyển đổi từ SEO và truyền thông"
    ],
    muc_tieu: [
      "Tăng trưởng lượng khách hàng tiềm năng và doanh số bán xe qua kênh online",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại sử dụng dịch vụ"
    ],
    giai_phap_chi_tiet: [
      "Triển khai chiến dịch SEO tổng thể cho website Lexus Thăng Long",
      "Xây dựng chiến lược nội dung, tối ưu từ khóa, tăng thứ hạng tìm kiếm",
      "Kết hợp truyền thông đa kênh để tăng nhận diện thương hiệu",
      "Tối ưu trải nghiệm người dùng trên website, tăng tỷ lệ chuyển đổi",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Lượng khách hàng tiềm năng và doanh số bán xe tăng trưởng mạnh sau 1 năm triển khai SEO tổng thể",
      "Thương hiệu Lexus Thăng Long được nhận diện rộng rãi trên thị trường xe sang tại Việt Nam"
    ]
  },
  "dien-chan": {
    name: "DIỆN CHẨN",
    image: "/images/projects/dien-chan.jpg",
    desc: "Dự án SEO nổi bật của Diện Chẩn.",
    linh_vuc: "Y HỌC CỔ TRUYỀN – SỨC KHỎE",
    loai_hinh: "B2C, B2B",
    giai_phap: [
      "SEO TỔNG THỂ",
      "XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU",
      "TRUYỀN THÔNG ĐA KÊNH"
    ],
    ve_du_an: "Diện Chẩn là phương pháp chăm sóc sức khỏe chủ động, kết hợp giữa y học cổ truyền và hiện đại, giúp hàng nghìn người cải thiện sức khỏe, phòng và hỗ trợ điều trị bệnh không dùng thuốc.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trong lĩnh vực y học cổ truyền vốn ít được truyền thông hiện đại",
      "Định vị thương hiệu là đơn vị Diện Chẩn uy tín, hiệu quả, an toàn cho cộng đồng",
      "Tối ưu chi phí marketing, tăng hiệu quả chuyển đổi từ SEO và truyền thông"
    ],
    muc_tieu: [
      "Tăng trưởng lượng khách hàng và học viên tiếp cận dịch vụ Diện Chẩn qua kênh online",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại sử dụng dịch vụ, học viên giới thiệu bạn bè"
    ],
    giai_phap_chi_tiet: [
      "Triển khai chiến dịch SEO tổng thể cho website Diện Chẩn",
      "Xây dựng chiến lược nội dung, tối ưu từ khóa, tăng thứ hạng tìm kiếm",
      "Kết hợp truyền thông đa kênh để tăng nhận diện thương hiệu",
      "Tối ưu trải nghiệm người dùng trên website, tăng tỷ lệ chuyển đổi",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng, học viên"
    ],
    ket_qua: [
      "Lượng khách hàng và học viên tiếp cận dịch vụ tăng trưởng mạnh sau 1 năm triển khai SEO tổng thể",
      "Thương hiệu Diện Chẩn được nhận diện rộng rãi trong cộng đồng quan tâm đến sức khỏe chủ động, y học cổ truyền"
    ]
  },
  "techno": {
    name: "TECHNO",
    image: "/images/projects/techno.jpg",
    desc: "Dự án SEO nổi bật của Techno.",
    linh_vuc: "CÔNG NGHỆ – GIẢI PHÁP SỐ",
    loai_hinh: "B2B, B2C",
    giai_phap: [
      "SEO TỔNG THỂ",
      "XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU",
      "TRUYỀN THÔNG ĐA KÊNH"
    ],
    ve_du_an: "Techno là doanh nghiệp cung cấp các giải pháp công nghệ số, phần mềm quản lý và tự động hóa cho doanh nghiệp, giúp tối ưu vận hành và nâng cao hiệu quả kinh doanh.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trên thị trường công nghệ cạnh tranh cao",
      "Định vị thương hiệu là đơn vị cung cấp giải pháp số uy tín, sáng tạo",
      "Tối ưu chi phí marketing, tăng hiệu quả chuyển đổi từ SEO và truyền thông"
    ],
    muc_tieu: [
      "Tăng trưởng lượng khách hàng doanh nghiệp sử dụng giải pháp Techno qua kênh online",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại hợp tác"
    ],
    giai_phap_chi_tiet: [
      "Triển khai chiến dịch SEO tổng thể cho website Techno",
      "Xây dựng chiến lược nội dung, tối ưu từ khóa, tăng thứ hạng tìm kiếm",
      "Kết hợp truyền thông đa kênh để tăng nhận diện thương hiệu",
      "Tối ưu trải nghiệm người dùng trên website, tăng tỷ lệ chuyển đổi",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Lượng khách hàng doanh nghiệp sử dụng giải pháp Techno tăng trưởng mạnh sau 1 năm triển khai SEO tổng thể",
      "Thương hiệu Techno được nhận diện rộng rãi trên thị trường công nghệ, giải pháp số tại Việt Nam"
    ]
  },
  "gpa-camps": {
    name: "GPA CAMPS",
    image: "/images/projects/gpa-camps.jpg",
    desc: "Dự án SEO nổi bật của GPA Camps.",
    linh_vuc: "GIÁO DỤC – TRẠI HÈ KỸ NĂNG",
    loai_hinh: "B2C, B2B",
    giai_phap: [
      "SEO TỔNG THỂ",
      "XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU",
      "TRUYỀN THÔNG ĐA KÊNH"
    ],
    ve_du_an: "GPA Camps là đơn vị tổ chức trại hè kỹ năng, phát triển tư duy và năng lực cho học sinh, sinh viên với nhiều chương trình đa dạng, sáng tạo.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trên thị trường giáo dục kỹ năng cạnh tranh cao",
      "Định vị thương hiệu là đơn vị tổ chức trại hè uy tín, chất lượng, sáng tạo",
      "Tối ưu chi phí marketing, tăng hiệu quả chuyển đổi từ SEO và truyền thông"
    ],
    muc_tieu: [
      "Tăng trưởng lượng học viên đăng ký tham gia trại hè qua kênh online",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng học viên trung thành và quay lại tham gia các chương trình mới"
    ],
    giai_phap_chi_tiet: [
      "Triển khai chiến dịch SEO tổng thể cho website GPA Camps",
      "Xây dựng chiến lược nội dung, tối ưu từ khóa, tăng thứ hạng tìm kiếm",
      "Kết hợp truyền thông đa kênh để tăng nhận diện thương hiệu",
      "Tối ưu trải nghiệm người dùng trên website, tăng tỷ lệ chuyển đổi",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân học viên"
    ],
    ket_qua: [
      "Lượng học viên đăng ký tham gia trại hè tăng trưởng mạnh sau 1 năm triển khai SEO tổng thể",
      "Thương hiệu GPA Camps được nhận diện rộng rãi trên thị trường giáo dục kỹ năng, trại hè tại Việt Nam"
    ]
  },
  "adamo-software": {
    name: "ADAMO SOFTWARE",
    image: "/images/projects/adamo-software.jpg",
    desc: "Dự án SEO nổi bật của Adamo Software.",
    linh_vuc: "CÔNG NGHỆ – PHẦN MỀM",
    loai_hinh: "B2B, B2C",
    giai_phap: [
      "SEO TỔNG THỂ",
      "XÂY DỰNG CHIẾN LƯỢC PHÁT TRIỂN THƯƠNG HIỆU",
      "TRUYỀN THÔNG ĐA KÊNH"
    ],
    ve_du_an: "Adamo Software là công ty phát triển phần mềm hàng đầu, cung cấp các giải pháp công nghệ hiện đại cho doanh nghiệp trong và ngoài nước.",
    thach_thuc: [
      "Tăng nhận diện thương hiệu trên thị trường phần mềm cạnh tranh cao",
      "Định vị thương hiệu là đơn vị phát triển phần mềm uy tín, sáng tạo, chất lượng quốc tế",
      "Tối ưu chi phí marketing, tăng hiệu quả chuyển đổi từ SEO và truyền thông"
    ],
    muc_tieu: [
      "Tăng trưởng lượng khách hàng doanh nghiệp sử dụng dịch vụ phát triển phần mềm qua kênh online",
      "Đồng bộ concept thương hiệu trên các kênh truyền thông",
      "Tăng lượng khách hàng trung thành và quay lại hợp tác phát triển dự án mới"
    ],
    giai_phap_chi_tiet: [
      "Triển khai chiến dịch SEO tổng thể cho website Adamo Software",
      "Xây dựng chiến lược nội dung, tối ưu từ khóa, tăng thứ hạng tìm kiếm",
      "Kết hợp truyền thông đa kênh để tăng nhận diện thương hiệu",
      "Tối ưu trải nghiệm người dùng trên website, tăng tỷ lệ chuyển đổi",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Lượng khách hàng doanh nghiệp sử dụng dịch vụ phát triển phần mềm tăng trưởng mạnh sau 1 năm triển khai SEO tổng thể",
      "Thương hiệu Adamo Software được nhận diện rộng rãi trên thị trường công nghệ, phần mềm tại Việt Nam và quốc tế"
    ]
  },
  "jewis-qc": {
    name: "JEWIS (QC)",
    image: "/images/projects/jewis-qc.jpg",
    desc: "Chiến dịch quảng cáo nổi bật của thương hiệu Jewis.",
    linh_vuc: "THỜI TRANG – PHỤ KIỆN",
    loai_hinh: "B2C",
    giai_phap: [
      "CHIẾN DỊCH QUẢNG CÁO ĐA KÊNH",
      "TỐI ƯU HIỆU QUẢ TRUYỀN THÔNG",
      "QUẢNG CÁO FACEBOOK, GOOGLE"
    ],
    ve_du_an: "Jewis (QC) là chiến dịch quảng cáo lớn nhằm tăng nhận diện thương hiệu và thúc đẩy doanh số cho các sản phẩm phụ kiện thời trang cao cấp của Jewis.",
    thach_thuc: [
      "Tăng độ phủ thương hiệu trên các nền tảng mạng xã hội và kênh digital",
      "Tối ưu chi phí quảng cáo nhưng vẫn đảm bảo hiệu quả chuyển đổi cao",
      "Thu hút khách hàng mới và giữ chân khách hàng trung thành"
    ],
    muc_tieu: [
      "Tăng trưởng doanh số bán hàng qua các kênh quảng cáo online",
      "Đồng bộ hình ảnh thương hiệu trên các nền tảng truyền thông",
      "Tăng lượng khách hàng quay lại mua hàng và giới thiệu bạn bè"
    ],
    giai_phap_chi_tiet: [
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Doanh số bán hàng tăng trưởng mạnh sau chiến dịch quảng cáo",
      "Tỷ lệ khách hàng quay lại mua hàng tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Jewis được nhận diện rộng rãi trên các nền tảng digital"
    ]
  },
  "sao-thai-duong-qc": {
    name: "SAO THÁI DƯƠNG (QC)",
    image: "/images/projects/sao-thai-duong-qc.jpg",
    desc: "Chiến dịch quảng cáo nổi bật của thương hiệu Sao Thái Dương.",
    linh_vuc: "DƯỢC PHẨM – SỨC KHỎE",
    loai_hinh: "B2C",
    giai_phap: [
      "CHIẾN DỊCH QUẢNG CÁO ĐA KÊNH",
      "TỐI ƯU HIỆU QUẢ TRUYỀN THÔNG",
      "QUẢNG CÁO FACEBOOK, GOOGLE"
    ],
    ve_du_an: "Sao Thái Dương (QC) là chiến dịch quảng cáo lớn nhằm tăng nhận diện thương hiệu và thúc đẩy doanh số cho các sản phẩm dược phẩm, chăm sóc sức khỏe của Sao Thái Dương.",
    thach_thuc: [
      "Tăng độ phủ thương hiệu trên các nền tảng mạng xã hội và kênh digital",
      "Tối ưu chi phí quảng cáo nhưng vẫn đảm bảo hiệu quả chuyển đổi cao",
      "Thu hút khách hàng mới và giữ chân khách hàng trung thành"
    ],
    muc_tieu: [
      "Tăng trưởng doanh số bán hàng qua các kênh quảng cáo online",
      "Đồng bộ hình ảnh thương hiệu trên các nền tảng truyền thông",
      "Tăng lượng khách hàng quay lại mua hàng và giới thiệu bạn bè"
    ],
    giai_phap_chi_tiet: [
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Doanh số bán hàng tăng trưởng mạnh sau chiến dịch quảng cáo",
      "Tỷ lệ khách hàng quay lại mua hàng tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Sao Thái Dương được nhận diện rộng rãi trên các nền tảng digital"
    ]
  },
  "lipo-healthy-food-tv": {
    name: "LIPO HEALTHY FOOD (TV)",
    image: "/images/projects/lipo-healthy-food-tv.jpg",
    desc: "Chiến dịch tư vấn nổi bật của thương hiệu Lipo Healthy Food.",
    linh_vuc: "THỰC PHẨM – SỨC KHỎE",
    loai_hinh: "B2C",
    giai_phap: [
      "CHIẾN DỊCH TƯ VẤN CHUYÊN SÂU",
      "TƯ VẤN DINH DƯỠNG CÁ NHÂN HÓA",
      "TRUYỀN THÔNG ĐA KÊNH"
    ],
    ve_du_an: "Lipo Healthy Food (TV) là chiến dịch tư vấn dinh dưỡng, chăm sóc sức khỏe cá nhân hóa, giúp khách hàng hiểu rõ hơn về sản phẩm và lựa chọn giải pháp phù hợp nhất.",
    thach_thuc: [
      "Tăng độ tin tưởng và gắn kết của khách hàng với thương hiệu qua hoạt động tư vấn",
      "Cá nhân hóa giải pháp dinh dưỡng cho từng nhóm khách hàng",
      "Tối ưu hiệu quả truyền thông tư vấn trên đa kênh"
    ],
    muc_tieu: [
      "Tăng số lượng khách hàng sử dụng dịch vụ tư vấn dinh dưỡng",
      "Đồng bộ hình ảnh thương hiệu trên các nền tảng truyền thông",
      "Tăng lượng khách hàng trung thành và giới thiệu bạn bè"
    ],
    giai_phap_chi_tiet: [
      "Tổ chức các buổi tư vấn dinh dưỡng trực tiếp và online cho khách hàng",
      "Xây dựng nội dung truyền thông về lợi ích của tư vấn cá nhân hóa",
      "Kết hợp quảng cáo Facebook, Google để tiếp cận nhóm khách hàng tiềm năng",
      "Tối ưu trải nghiệm khách hàng trong quá trình tư vấn và sau tư vấn"
    ],
    ket_qua: [
      "Số lượng khách hàng sử dụng dịch vụ tư vấn tăng trưởng mạnh sau chiến dịch",
      "Tỷ lệ khách hàng quay lại mua hàng và giới thiệu bạn bè tăng rõ rệt",
      "Thương hiệu Lipo Healthy Food được nhận diện rộng rãi là chuyên gia tư vấn dinh dưỡng cá nhân hóa"
    ]
  },
  "fimciti-qc": {
    name: "FIMCITI (QC)",
    image: "/images/projects/fimciti-qc.jpg",
    desc: "Chiến dịch quảng cáo nổi bật của nền tảng Fimciti.",
    linh_vuc: "BẤT ĐỘNG SẢN – DỊCH VỤ",
    loai_hinh: "B2C, B2B",
    giai_phap: [
      "CHIẾN DỊCH QUẢNG CÁO ĐA KÊNH",
      "TỐI ƯU HIỆU QUẢ TRUYỀN THÔNG",
      "QUẢNG CÁO FACEBOOK, GOOGLE"
    ],
    ve_du_an: "Fimciti (QC) là chiến dịch quảng cáo lớn nhằm tăng nhận diện thương hiệu và thúc đẩy số lượng người dùng, giao dịch trên nền tảng bất động sản Fimciti.",
    thach_thuc: [
      "Tăng độ phủ thương hiệu trên các nền tảng mạng xã hội và kênh digital",
      "Tối ưu chi phí quảng cáo nhưng vẫn đảm bảo hiệu quả chuyển đổi cao",
      "Thu hút khách hàng mới và giữ chân khách hàng trung thành"
    ],
    muc_tieu: [
      "Tăng trưởng số lượng người dùng và giao dịch qua các kênh quảng cáo online",
      "Đồng bộ hình ảnh thương hiệu trên các nền tảng truyền thông",
      "Tăng lượng khách hàng quay lại sử dụng dịch vụ và giới thiệu bạn bè"
    ],
    giai_phap_chi_tiet: [
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu",
      "Tối ưu nội dung quảng cáo, hình ảnh, video để tăng tỷ lệ chuyển đổi",
      "Đồng bộ nhận diện thương hiệu trên các kênh online",
      "Tổ chức các chương trình ưu đãi, minigame để tăng tương tác và giữ chân khách hàng"
    ],
    ket_qua: [
      "Số lượng người dùng và giao dịch tăng trưởng mạnh sau chiến dịch quảng cáo",
      "Tỷ lệ khách hàng quay lại sử dụng dịch vụ tăng rõ rệt",
      "Chi phí quảng cáo giảm nhờ tối ưu nội dung và target đúng nhóm khách hàng",
      "Thương hiệu Fimciti được nhận diện rộng rãi trên các nền tảng digital"
    ]
  },
  "glucankid-tv": {
    name: "GLUCANKID (TV)",
    image: "/images/projects/glucankid-tv.jpg",
    desc: "Chiến dịch tư vấn nổi bật của thương hiệu Glucankid.",
    linh_vuc: "THỰC PHẨM CHỨC NĂNG – SỨC KHỎE",
    loai_hinh: "B2C",
    giai_phap: [
      "CHIẾN DỊCH TƯ VẤN CHUYÊN SÂU",
      "TƯ VẤN DINH DƯỠNG CHO TRẺ EM",
      "TRUYỀN THÔNG ĐA KÊNH"
    ],
    ve_du_an: "Glucankid (TV) là chiến dịch tư vấn dinh dưỡng, chăm sóc sức khỏe cho trẻ em, giúp phụ huynh hiểu rõ hơn về sản phẩm và lựa chọn giải pháp phù hợp nhất cho con em mình.",
    thach_thuc: [
      "Tăng độ tin tưởng và gắn kết của phụ huynh với thương hiệu qua hoạt động tư vấn",
      "Cá nhân hóa giải pháp dinh dưỡng cho từng nhóm trẻ em",
      "Tối ưu hiệu quả truyền thông tư vấn trên đa kênh"
    ],
    muc_tieu: [
      "Tăng số lượng khách hàng sử dụng dịch vụ tư vấn dinh dưỡng cho trẻ em",
      "Đồng bộ hình ảnh thương hiệu trên các nền tảng truyền thông",
      "Tăng lượng khách hàng trung thành và giới thiệu bạn bè"
    ],
    giai_phap_chi_tiet: [
      "Tổ chức các buổi tư vấn dinh dưỡng trực tiếp và online cho phụ huynh",
      "Xây dựng nội dung truyền thông về lợi ích của tư vấn cá nhân hóa cho trẻ em",
      "Kết hợp quảng cáo Facebook, Google để tiếp cận nhóm khách hàng tiềm năng",
      "Tối ưu trải nghiệm khách hàng trong quá trình tư vấn và sau tư vấn"
    ],
    ket_qua: [
      "Số lượng khách hàng sử dụng dịch vụ tư vấn tăng trưởng mạnh sau chiến dịch",
      "Tỷ lệ khách hàng quay lại mua hàng và giới thiệu bạn bè tăng rõ rệt",
      "Thương hiệu Glucankid được nhận diện rộng rãi là chuyên gia tư vấn dinh dưỡng cho trẻ em"
    ]
  },
  "quan-nho-qc": {
    name: "QUÁN NHỎ (QC)",
    image: "/images/projects/quan-nho-qc.jpg",
    desc: "Chiến dịch quảng cáo nổi bật của chuỗi nhà hàng Quán Nhỏ.",
    linh_vuc: "NHÀ HÀNG – ẨM THỰC",
    loai_hinh: "B2C",
    giai_phap: [
      "CHIẾN DỊCH QUẢNG CÁO ĐA KÊNH",
      "TỐI ƯU HIỆU QUẢ TRUYỀN THÔNG",
      "QUẢNG CÁO FACEBOOK, GOOGLE",
      "TĂNG TRẢI NGHIỆM KHÁCH HÀNG QUA CHƯƠNG TRÌNH ƯU ĐÃI"
    ],
    ve_du_an: "Quán Nhỏ (QC) là chiến dịch quảng cáo quy mô lớn nhằm tăng nhận diện thương hiệu, thu hút khách hàng mới và giữ chân khách hàng trung thành cho chuỗi nhà hàng Quán Nhỏ. Chiến dịch tập trung vào việc truyền thông đa kênh, kết hợp quảng cáo số và các chương trình ưu đãi hấp dẫn, tạo ra sự lan tỏa mạnh mẽ trên mạng xã hội và cộng đồng ẩm thực.",
    thach_thuc: [
      "Tăng độ phủ thương hiệu trên các nền tảng mạng xã hội và kênh digital trong lĩnh vực ẩm thực cạnh tranh cao",
      "Tối ưu chi phí quảng cáo nhưng vẫn đảm bảo hiệu quả chuyển đổi và thu hút khách hàng mới",
      "Tạo sự khác biệt và gắn kết cảm xúc với khách hàng giữa nhiều thương hiệu nhà hàng khác"
    ],
    muc_tieu: [
      "Tăng trưởng doanh thu và số lượng khách hàng mới qua các kênh quảng cáo online",
      "Đồng bộ hình ảnh thương hiệu trên các nền tảng truyền thông, tạo dấu ấn riêng cho Quán Nhỏ",
      "Tăng tỷ lệ khách hàng quay lại và giới thiệu bạn bè, xây dựng cộng đồng khách hàng trung thành"
    ],
    giai_phap_chi_tiet: [
      "Triển khai quảng cáo Facebook, Google tập trung vào nhóm khách hàng mục tiêu yêu thích ẩm thực truyền thống",
      "Sản xuất nội dung video, hình ảnh hấp dẫn về món ăn, không gian, trải nghiệm thực tế tại Quán Nhỏ để lan tỏa trên mạng xã hội",
      "Tổ chức các chương trình ưu đãi, minigame, check-in nhận quà để tăng tương tác và thu hút khách hàng mới",
      "Đồng bộ nhận diện thương hiệu trên các kênh online và offline, từ website, fanpage đến không gian nhà hàng",
      "Theo dõi, đo lường hiệu quả chiến dịch liên tục để tối ưu ngân sách và tăng hiệu quả chuyển đổi"
    ],
    ket_qua: [
      "Doanh thu và lượng khách hàng mới tăng trưởng rõ rệt sau chiến dịch quảng cáo",
      "Tỷ lệ khách hàng quay lại và giới thiệu bạn bè tăng mạnh, cộng đồng khách hàng trung thành được mở rộng",
      "Chi phí quảng cáo được tối ưu nhờ nhắm đúng nhóm khách hàng mục tiêu và nội dung sáng tạo",
      "Thương hiệu Quán Nhỏ được nhận diện rộng rãi trên các nền tảng digital và trong cộng đồng yêu ẩm thực"
    ]
  }
};

export default function ProjectDetailPage({ params }) {
  const { slug } = params;
  const project = PROJECTS[slug] || {
    name: "Dự án đang cập nhật",
    image: "/images/projects/thuong-mai-1.jpg",
    desc: "Thông tin dự án sẽ được cập nhật sớm."
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-2 flex flex-col items-center">
      <div className="w-full max-w-3xl md:max-w-4xl flex flex-col items-center">
        <div className="w-full flex justify-center mb-6">
          <Image src={project.image} alt={project.name} width={600} height={320} className="w-full max-w-2xl h-80 object-contain bg-white rounded-2xl shadow" />
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-4 text-blue-800 tracking-widest uppercase leading-tight drop-shadow">{project.name}</h1>
        <p className="text-base md:text-lg text-gray-700 text-center mb-6 font-medium max-w-2xl">{project.desc}</p>
        {project.linh_vuc && (
          <div className="mb-4 w-full">
            <h2 className="text-base md:text-lg font-bold text-blue-700 mb-1 uppercase tracking-wide">LĨNH VỰC</h2>
            <div className="text-gray-800 font-medium pl-2">{project.linh_vuc}</div>
          </div>
        )}
        {project.loai_hinh && (
          <div className="mb-4 w-full">
            <h2 className="text-base md:text-lg font-bold text-blue-700 mb-1 uppercase tracking-wide">LOẠI HÌNH KINH DOANH</h2>
            <div className="text-gray-800 font-medium pl-2">{project.loai_hinh}</div>
          </div>
        )}
        {project.giai_phap && (
          <div className="mb-4 w-full">
            <h2 className="text-base md:text-lg font-bold text-blue-700 mb-1 uppercase tracking-wide">GIẢI PHÁP</h2>
            <ul className="list-disc list-inside text-gray-800 font-medium pl-4">
              {project.giai_phap.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )}
        {project.ve_du_an && (
          <div className="mb-4 w-full">
            <h2 className="text-base md:text-lg font-bold text-blue-700 mb-1 uppercase tracking-wide">VỀ DỰ ÁN</h2>
            <div className="text-gray-800 font-medium pl-2">{project.ve_du_an}</div>
          </div>
        )}
        {project.thach_thuc && (
          <div className="mb-4 w-full">
            <h2 className="text-base md:text-lg font-bold text-blue-700 mb-1 uppercase tracking-wide">THÁCH THỨC</h2>
            <ul className="list-disc list-inside text-gray-800 font-medium pl-4">
              {project.thach_thuc.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )}
        {project.muc_tieu && (
          <div className="mb-4 w-full">
            <h2 className="text-base md:text-lg font-bold text-blue-700 mb-1 uppercase tracking-wide">MỤC TIÊU</h2>
            <ul className="list-disc list-inside text-gray-800 font-medium pl-4">
              {project.muc_tieu.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )}
        {project.giai_phap_chi_tiet && (
          <div className="mb-4 w-full">
            <h2 className="text-base md:text-lg font-bold text-blue-700 mb-1 uppercase tracking-wide">GIẢI PHÁP TỪ D9AGENCY</h2>
            <ul className="list-disc list-inside text-gray-800 font-medium pl-4">
              {project.giai_phap_chi_tiet.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )}
        {project.ket_qua && (
          <div className="mb-4 w-full">
            <h2 className="text-base md:text-lg font-bold text-blue-700 mb-1 uppercase tracking-wide">KẾT QUẢ ĐẠT ĐƯỢC</h2>
            <ul className="list-disc list-inside text-gray-800 font-medium pl-4">
              {project.ket_qua.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )}
      </div>
      {/* Form liên hệ ở cuối trang */}
      <div className="w-full max-w-2xl mx-auto mt-10 mb-4 bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
        <h2 className="text-xl font-bold text-blue-700 mb-4 text-center uppercase tracking-wide">Liên hệ tư vấn dự án</h2>
        <ContactForm projectName={project.name} />
      </div>
    </div>
  );
}

// Thêm generateStaticParams function
export function generateStaticParams() {
  const slugs = Object.keys(PROJECTS);
  return slugs.map((slug) => ({
    slug: slug,
  }));
} 