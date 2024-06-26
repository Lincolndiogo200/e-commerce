import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "accessories",
    imageUrl:
      "https://s.zst.com.br/cms-assets/2023/03/shutterstock_1530791825.webp",
    route: "shop/acessories",
  },
  {
    id: 2,
    title: "hardware",
    imageUrl:
      " https://victorvision.com.br/wp-content/uploads/2023/05/tipos-de-hardware.jpg",
    route: "shop/hardware",
  },
  {
    id: 3,
    title: "peripherals",
    imageUrl:
      "https://tm.ibxk.com.br/2021/08/30/30171409831343.jpg?ims=704x264",
    route: "shop/peripherals",
  },
  {
    id: 4,
    title: "desktop",
    imageUrl:
      "https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/fc11d4c2-0c8d-42e3-ad38-dd298c74c28d/DallEGeneratedImages/dalle-ccbd2e7c-fd00-4bcb-930b-c88c2e2c643c0251682959177022261900.jpg&dcHint=BrazilSouth&fileToken=d36cfcb0-e130-4f65-8abc-d51005c36ef1",
    route: "shop/desktop",
  },
  {
    id: 5,
    title: "notebooks",
    imageUrl:
      "https://static.poder360.com.br/2024/02/Design-sem-nome-2-1-848x477.jpg",
    route: "shop/laptop",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
