import AllDesign from "@/pages/Home/Gallery/AllDesign";
import Construction from "@/pages/Home/Gallery/Construction";
import Quality from "@/pages/Home/Gallery/Quality";

export 
const GalleryTabs = [
  {
    id: 1,
    label: "All Design",
    Component: AllDesign,
  },
  {
    id: 2,
    label: "Construction",
    Component: Construction,
  },  {
    id: 3,
    label: "Quality Materials",
    Component: Quality,
  },

];

export const cnGalleryTabs = [
  {
    id: 1,
    label: "所有設計",
    Component: AllDesign,
  },
  {
    id: 2,
    label: "施工現場",
    Component: Construction,
  },  {
    id: 3,
    label: "优质材料",
    Component: Quality,
  },
];