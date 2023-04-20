import {cnNavLinks} from "@/data/navLinks"
import { cnServices } from "@/data/services";
import { cnDesign, cnExperience } from "@/data/offer";
import {cnGalleryTabs} from "@/data/tabs"

export const cn = {
  navigation: cnNavLinks,
  homeTitle: "之尚園林 | 環境景觀",
  copyright: "© 2023 之尚園林, 公司. 保留所有权利。",
  hero:{
    title: "景观美化理念变为现实",
    description: "聯系電話: 415-678-6636 ｜ 408-686-2888"
  },
  service: {
    title: "服务",
    header:"景观和花园解决方案",
    preview:"看预览",
    services: cnServices
  },
  offer:{
    title:"提供",
    header:"當您選擇我們時我們提供什麼",
    designHeader:"設計力",
    design: cnDesign,
    experienceHeader:"經驗力",
    experience: cnExperience,
  },
  gallery:{
    title: "圖庫館 | 预览我们所做的工作",
    tabs: cnGalleryTabs,
  },



  quality:{
    title:"質",
    header:"使用優質材料",
  },
  footer:{
    contact:{
      title:"聯系",
      description:"Feng Han Hui",
    },
    telephone:{
      title:"聯系電話",
      description:"415-678-6636 | 408-686-288"
    }  ,  
    email:{
      title:"电子邮件",
      description:"raymentf@gmail.com"
    }
  }
  };
 