/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 02/06/2022
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

export interface Thread {
  _id: string;
  groupId: string;
  title: string;
  type: string;
  image_link: string;
  version: number;
  description: string;
  link_blank: string;
  date: string | number;
}
