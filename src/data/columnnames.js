export const colHeaders = [
  {
    id: 1,
    name: "Fullname",
  },
  {
    id: 2,
    name: "Nickname",
  },
  {
    id: 3,
    name: "DOB",
  },
  {
    id: 4,
    name: "Major",
  },
  {
    id: 5,
    name: "Passport",
  },
  // {
  //   id: 6,
  //   name: "Level",
  // },
  // {
  //   id: 7,
  //   name: "Range",
  // },
  // {
  //   id: 8,
  //   name: "Nation",
  // },
  // {
  //   id: 9,
  //   name: "Scholaship",
  // },
  // {
  //   id: 10,
  //   name: "Sex",
  // },
  // {
  //   id: 11,
  //   name: "University",
  // },
  {
    id: 12,
    name: "Room",
  },
  {
    id: 13,
    name: "Status",
  },
];

export const studentInputs = [
  {
    name: "stuid",
    label: "Student ID",
    type: "text",
    require: true,
  },
  {
    name: "fullname",
    label: "Full Name",
    type: "text",
    require: true,
  },
  {
    name: "nickname",
    label: "Nickname",
    type: "text",
    require: true,
  },
  {
    name: "bod",
    label: "Date of birth",
    type: "date",
    require: true,
  },
  {
    name: "sex",
    label: "Sex",
    type: "select",
    options: [
      {
        optVal: "M",
        optText: "Nam",
      },
      {
        optVal: "FM",
        optText: "Nữ",
      },
      {
        optVal: "OTH",
        optText: "Khác",
      },
    ],
    require: true,
  },
  {
    name: "nation",
    label: "Nation",
    type: "select",
    options: [
      {
        optVal: "Lao",
        optText: "Lào",
      },
      {
        optVal: "Vietnam",
        optText: "Việt Nam",
      },
      {
        optVal: "Cambodia",
        optText: "Campuchia",
      },
    ],
    require: true,
  },
  {
    name: "university",
    label: "University",
    type: "select",
    options: [
      {
        optVal: "",
        optText: "",
      },
      {
        optVal: "DH Nông Lâm TPHCM",
        optText: "DH Nông Lâm TPHCM",
      },
      {
        optVal: "ĐH Kinh tế - tài chính",
        optText: "ĐH Kinh tế - tài chính",
      },
      {
        optVal: "Đại học khoa học xã hội và nhân văn",
        optText: "Đại học khoa học xã hội và nhân văn",
      },
      {
        optVal: "DH sư phạm kỹ thuật",
        optText: "DH sư phạm kỹ thuật",
      },
      {
        optVal: "ĐH Y khoa Phạm Ngọc Thạch",
        optText: "ĐH Y khoa Phạm Ngọc Thạch",
      },
      {
        optVal: "ĐH Nguyễn Tất Thành",
        optText: "ĐH Nguyễn Tất Thành",
      },
      {
        optVal: "ĐH Kinh tế - Luật TP. HCM",
        optText: "ĐH Kinh tế - Luật TP. HCM",
      },
      {
        optVal: "ĐH Khoa học Tự nhiên",
        optText: "ĐH Khoa học Tự nhiên",
      },
      {
        optVal: "ĐH Khoa học Quốc Tế",
        optText: "ĐH Khoa học Quốc Tế",
      },
      {
        optVal: "ĐH Bách khoa TP.HCM",
        optText: "ĐH Bách khoa TP.HCM",
      },
    ],
    require: true,
  },
  {
    name: "major",
    label: "Major",
    type: "text",
    require: true,
  },
  {
    name: "studyLevel",
    label: "Level",
    type: "select", //redo
    options: [
      {
        optVal: "CH",
        optText: "Cao Học",
      },
      {
        optVal: "ĐH",
        optText: "Đại Học",
      },
      {
        optVal: "THS",
        optText: "Thạc Sĩ",
      },
      {
        optVal: "TS",
        optText: "Tiến Sĩ",
      },
    ],
    require: true,
  },
  {
    name: "studyRange",
    label: "Study Range",
    type: "text",
    require: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "number",
    require: true,
  },
  {
    name: "passport",
    label: "Passport",
    type: "text",
    require: true,
  },
  {
    name: "room",
    label: "Room",
    type: "text",
    require: true,
  },
  {
    name: "comment",
    label: "Status",
    type: "select", //redo
    options: [
      {
        optVal: "",
        optText: "",
      },
      {
        optVal: "Tốt nghiệp",
        optText: "Tốt nghiệp",
      },
      {
        optVal: "Chuyển ra ngoài",
        optText: "Chuyển ra ngoài",
      },
      {
        optVal: "Tự túc",
        optText: "Tự túc",
      },
    ],
    require: true,
  },
];
