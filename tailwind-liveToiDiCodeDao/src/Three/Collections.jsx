import Items from "./Items";

const tags = ["Profile", "New York", "Relaxing", "Person", "Fashion"];
const listImgs = [
  {
    imgs: [
      "./src/assets/anh1.png",
      "./src/assets/anh2.png",
      "./src/assets/anh3.png",
      "./src/assets/anh4.png",
    ],
    title: "People",
    quantityImg: "144",
  },
  {
    imgs: [
      "./src/assets/anh1.png",
      "./src/assets/anh2.png",
      "./src/assets/anh3.png",
      "./src/assets/anh4.png",
    ],
    title: "People",
    quantityImg: "144",
  },
  {
    imgs: [
      "./src/assets/anh1.png",
      "./src/assets/anh2.png",
      "./src/assets/anh3.png",
      "./src/assets/anh4.png",
    ],
    title: "People",
    quantityImg: "144",
  },
];

const Collections = () => {
  return (
    <div className="round-[1.625rem] flex w-full flex-col gap-y-14 bg-[#EFF0F1] p-[3.88rem] font-poppins text-base font-normal text-[#0E0E38]">
      <header className="flex flex-col gap-y-6">
        <h1 className="font-merri text-[2rem] font-bold">
          Popular Collections
        </h1>
        <ul className="flex flex-row items-center justify-start gap-x-2">
          {tags.map((tag) => (
            <li key={tag} className="rounded bg-white p-[0.63rem]">
              <a href="">{tag}</a>
            </li>
          ))}
        </ul>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
        {listImgs.map((list) => (
          <Items
            key={list.title}
            listImg={list.imgs}
            title={list.title}
            quantityImg={list.quantityImg}
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
