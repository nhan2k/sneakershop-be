Tổ chức cấu trúc dự án Express.js của bạn để có năng suất tốt hơn

Ví dụ về cấu trúc dự án Expess.js được tổ chức tốt
Ví dụ: đối với một dự án web tốt, một API chắc chắn sẽ có một số tuyến và bộ điều khiển. Nó cũng sẽ chứa một số phần mềm trung gian như xác thực hoặc ghi nhật ký. Dự án sẽ có một số logic để giao tiếp với kho dữ liệu, như cơ sở dữ liệu và một số logic nghiệp vụ.

Đây là một cấu trúc ví dụ có thể giúp tổ chức mã cho những thứ tôi đã đề cập ở trên. Tôi sẽ giải thích thêm về cách tôi tổ chức dự án này dưới đây:

![alt text](https://blog.logrocket.com/wp-content/uploads/2022/01/expressjs-project-structure.png)

Hãy đi sâu hơn vào thư mục chính src và test và các thư mục con bên trong chúng. Điểm vào chính của ứng dụng Express có tổ chức này là tệp index.js trên thư mục gốc, tệp này có thể được chạy với Node bằng cách sử dụng nút index.js để khởi động ứng dụng. Nó sẽ yêu cầu ứng dụng Express và liên kết các tuyến đường với các bộ định tuyến tương đối.

Bất kỳ phần mềm trung gian nào cũng sẽ được bao gồm trong tệp này. Sau đó, nó sẽ khởi động máy chủ.

Cấu trúc thư mục
Trong hình trên, bạn sẽ thấy hai thư mục chính: src chứa mã nguồn và test chứa tất cả mã kiểm tra trong đó. Đã đến lúc tìm hiểu sâu hơn một chút về các thư mục con src.

Đầu tiên, chúng ta có thư mục configs, nơi lưu giữ tất cả các cấu hình cần thiết cho ứng dụng. Ví dụ: nếu ứng dụng kết nối với cơ sở dữ liệu, cấu hình cho cơ sở dữ liệu (như tên cơ sở dữ liệu và tên người dùng) có thể được đặt trong một tệp như db.config.js. Tương tự, các cấu hình khác như số lượng bản ghi hiển thị trên mỗi trang để phân trang có thể được lưu trong tệp có tên general.config.js bên trong thư mục cấu hình này.

Thư mục tiếp theo là bộ điều khiển, sẽ chứa tất cả các bộ điều khiển cần thiết cho ứng dụng. Các phương thức bộ điều khiển này nhận yêu cầu từ các tuyến và chuyển đổi chúng thành phản hồi HTTP với việc sử dụng bất kỳ phần mềm trung gian nào nếu cần.

Sau đó, thư mục phần mềm trung gian sẽ tách biệt bất kỳ phần mềm trung gian nào cần thiết cho ứng dụng ở một nơi. Có thể có phần mềm trung gian để xác thực, ghi nhật ký hoặc bất kỳ mục đích nào khác.

Tiếp theo, chúng ta có thư mục các tuyến đường sẽ có một tệp duy nhất cho mỗi bộ tuyến hợp lý. Ví dụ, có thể có các tuyến cho một loại tài nguyên. Nó có thể được chia nhỏ hơn nữa theo các phiên bản như v1 hoặc v2 để tách các tệp định tuyến theo phiên bản của API.

Sau đó, thư mục mô hình sẽ có các mô hình dữ liệu cần thiết cho ứng dụng. Điều này cũng sẽ phụ thuộc vào kho dữ liệu được sử dụng nếu đó là cơ sở dữ liệu quan hệ hay phi quan hệ (NoSQL). Nội dung của thư mục này cũng sẽ được xác định bằng cách sử dụng thư viện Ánh xạ quan hệ đối tượng (ORM). Nếu sử dụng ORM như Sequelize hoặc Prisma, thư mục này sẽ có các mô hình dữ liệu được xác định theo yêu cầu của nó.


Nguyên Tắc Cơ Bản Khi Làm Việc Nhóm Với Git
1. Luôn tạo branch mới
Luôn bắt đầu một task bằng một branch mới được tách từ một trong các branch chính được cập nhật mới nhất (master / develop / stable)
Tên của branch mới có thể sử dụng task id trong hệ thống quản lý task hoặc mô tả ngắn gọn (features/user_registration_api)
2. Tuân thủ nguyên tắc đặt tên commit message
Chi tiết xem tại bài viết trước
3. Commit / review sớm và thường xuyên
Nhằm giữ branch feature và branch chính gần nhau nhất có thể, việc này giúp:
Cập nhật tình hình phát triển của dự án
Giữ thành viên trong team luôn ở phiên bản mới nhất của branch chính
Giảm xung đột khi tiến hành merge branch
4. Mỗi commit chỉ thực hiện một nhiệm vụ
Rule này vô cùng quan trọng khi review / debug code. Thực hiện nhiều nhiệm vụ trong cùng một commit sẽ gây rất nhiều khó khăn cho các thành viên còn lại trong team để hiểu về commit đó.
Ví dụ: Commit “CPS-123: Add shopping cart api “ có sửa đổi cả file template.html hay .gitignore là một commit không đúng chuẩn.
Tip: Tuân thủ quy tắc đặt tên commit message với danh sách động từ (Add / Drop / Fix / Bump / Make / Refactor / Optimize / Reformat / Repharse / Document) là cách đơn giản để nhắc nhở bản thân luôn.
5. Không commit file không liên quan
Một trong các lỗi phổ biến nhất của lập trình viên là commit rất nhiều file không liên đến dự án. Ví dụ như file cấu hình được khởi tạo bởi IDE hay file test sinh ra trong quá trình lập trình chức năng.
Do đó, thư mục dịch vụ sẽ bao gồm tất cả logic nghiệp vụ. Nó có thể có các dịch vụ đại diện cho các đối tượng nghiệp vụ và có thể chạy các truy vấn trên cơ sở dữ liệu. Tùy thuộc vào nhu cầu, ngay cả các dịch vụ chung như cơ sở dữ liệu cũng có thể được đặt ở đây.

Cuối cùng nhưng không kém phần quan trọng, chúng tôi có thư mục utils sẽ có tất cả các tiện ích và trợ giúp cần thiết cho ứng dụng. Nó cũng sẽ hoạt động như một nơi để đặt logic được chia sẻ, nếu có. Ví dụ, một trình trợ giúp đơn giản để tính toán bù đắp cho một truy vấn SQL được phân trang có thể được đặt trong tệp helper.util.js trong thư mục này.

Thư mục thử nghiệm có các thư mục con như đơn vị và tích hợp cho các thử nghiệm đơn vị và tích hợp.

Thư mục đơn vị bên trong thư mục kiểm tra sẽ có cấu trúc tương tự như thư mục src, vì mỗi tệp trong thư mục src sẽ cần kiểm tra và tốt nhất là theo cùng một cấu trúc, như sau:

![alt text](https://blog.logrocket.com/wp-content/uploads/2022/01/Express-test-folder-structure.png)

Tệp helper.util.test.js được đặt bên trong thư mục utils trong thư mục đơn vị. Đây là mẫu giống như trong thư mục src. Trong dự án ví dụ của chúng tôi ở phần tiếp theo, chúng tôi sẽ sử dụng Jest để viết và chạy các bài kiểm tra.

Ngay cả với cấu trúc thư mục này, một số thứ có thể bị bỏ sót. Ví dụ: nếu dự án của bạn đang sử dụng RabbitMQ với Node, bạn sẽ cần giữ các nhà xuất bản và người tiêu dùng trong các thư mục được tổ chức tốt. Tương tự, nếu bạn đang tạo một ứng dụng CLI để thực hiện việc tìm kiếm web với Node, cấu trúc dự án này có thể chỉ hữu ích một phần. Đã đề cập rằng, cấu trúc thư mục này sẽ đủ cho hầu hết các dự án API hoặc web chung cần bố cục tốt hơn.

Ngoài ra, hãy nhớ rằng có thể cần các tệp khác, chẳng hạn như tệp .env để giữ bí mật an toàn và khác nhau cho mỗi môi trường triển khai. Trong phần tiếp theo, chúng ta sẽ xem xét một dự án ví dụ theo cấu trúc mà tôi vừa trình bày.

Dự án mẫu với Node.js và MySQL
Có rất nhiều ví dụ tuyệt vời về việc sử dụng Node.js với MySQL, vì vậy chúng tôi sẽ gọi ứng dụng mẫu của mình là API Ngôn ngữ Lập trình, liệt kê các ngôn ngữ lập trình phổ biến.
