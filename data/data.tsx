export const program: any = [
  {
    time: "13:00",
    title: "Պսակադրություն",
    subt:'Սուրբ Աստվածածին Եկեղեցի',
    address: "https://maps.apple.com/place?map=explore&address=Charents+Street%2C+Vardenis%2C+Armenia&coordinate=40.185817%2C45.728211&name=Charents+Street",
  },
  {
    time: "17:30",
    title: "Հարսանյաց սրահ",
    subt:'Bayazet Hall',
    address: "https://maps.apple.com/place?coordinate=40.366667,45.133333&name=Sayadyan%20112/2%20Gavar&map=explore",
  },
];

export const txt1 =
  "Մենք ցանկանում ենք ձեզ հետ կիսել մեր կյանքի կարևորագույն օրերից մեկը և սիրով հրավիրում ենք ձեզ մասնակցելու մեր հարսանեկան արարողությունը";
export const txt1_1 =
  "Մենք ցանկանում ենք ձեզ հետ կիսել մեր կյանքի կարևորագույն օրերից մեկը և սիրով հրավիրում ենք ձեզ մասնակցելու մեր հարսանեկան արարողությունը";

export const txt2 ="Խնդրում ենք նախապես տեղեկացնել\n Ձեր մասնակցության մասին մինչև \n Մայիսի 27-ը \n Սիրո՛վ սպասում ենք";
export const txt2_1 ="Մասնակցության մասին Խնդրում ենք \n Տեղեկացնել մինչև \n Մայիսի 27-ը";

export const anim: any = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  viewport: { once: true },
};
