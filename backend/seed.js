const Restaurant = require("./models/restaurant.model");
const Food = require("./models/food.model");
const { connectDb } = require("./models/db.js");

const LOGIN_HERO_IMAGE =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090835/Burger_sgrh8l.png";

const LOGO_ORANGE =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090832/OrderLogo_xjbmqf.png";

const LOGO_BLACK =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090831/OrderLogo2_eooobv.png";

const IMAGE1 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090823/Untitled-1_1_cldtsl.png";

const IMAGE2 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090823/Untitled-2_1_l6ivps.png";

const NUMBER1 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/number1_xiyjn0.png";

const NUMBER2 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/number2_ucqvhy.png";

const NUMBER3 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/number3_ork9ch.png";

const ShoppingBasket =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090831/Full_Shopping_Basket_lh9wnw.png";

const Location =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090831/Location_mtbpyr.png";

const ForwardButton =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090828/Forward_Button_d9tbv2.png";

const User =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/Male_User_xpjbo4.png";

const ChefBurger =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090835/Burger_sgrh8l.png";

const GrandAi =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090813/GrandAi_v3hxnd.png";

const ButterBrot =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090812/ButterBrot_vioq6q.png";

const BurgerFastFood =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/BurgerFastFood_unmuwl.png";

const Salads =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/Salads_h3waqz.png";

const Pasta =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/Pasta_sreyun.png";

const Pizza =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/Salads_h3waqz.png";

const Breakfast =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090821/Breakfast_msdvtk.png";

const Soups =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090821/Soups_vzqwy5.png";

const PeronalizedOrderCard =
  " https://res.cloudinary.com/drkzizaiv/image/upload/v1732090814/friends-laughing-using-mobiles_2_u9ov9k.png";

const PlayStoreBadges =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090831/play-store-badges_ftsmdu.png";

const PartnerWithUsImage =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090812/PartnerWithUs_ocjfqq.png";

const SingupRiderImage =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090812/SingupRider_wp8zyv.png";

const PlaceOrder =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090810/PlaceOrder_g5jvo0.png";

const TrackProgress =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090810/TrackProgress_wppjgc.png";

const GetOrder =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090809/GetOrder_hagnc4.png";

const Menu =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732193474/Menu_myjxgq.png";

const Burger1 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732187267/Burger1_i5vpc2.png";
const Burger2 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732187267/Burger2_szm5kp.png";
const Burger3 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732187267/Burger3_aui0oc.png";
const Burger4 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732187266/Burger4_fshrcp.png";
const Fries =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732187266/Fries1_msmwxo.png";
const SoftDrink1 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732187266/SoftDrink1_w60hn8.png";
const SoftDrink2 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732187266/SoftDrink2_btrjn8.png";
const SoftDrink3 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732187267/SoftDrink3_gj7nzk.png";
const SoftDrink4 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732187267/SoftDrink4_xeadkk.png";

const Mcd =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090821/cd_l46dzc.png";
const PapaJohns =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090821/papa-johns_osgntc.png";
const Kfc =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090816/kfc_oosoff.png";
const TexasChicken =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090812/TexasChicken_iynlq7.png";
const BurgerKing =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090812/BurgerKing_fqee3c.png";
const Shaurma =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090812/Shaurma_mowj9q.png";

const Facebook =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090831/Facebook_h7whn4.png";

const Instagram =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090831/Instagram_enrrk8.png";

const Snapchat =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090831/Snapchat_bh8jdd.png";

const TikTok =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090831/TikTok_ukvprq.png";

const NextPage =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732202456/Next_page_zqjxtd.png";

const ProductPageBannerImage =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732267039/ProductPageBanner_djgkkp.png";

const Ratings =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732267039/Rating_yyfrkd.png";

const OrderCompleted =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090810/OrderCompleted_zdxfqq.png";

const MotorCross =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090810/Motocross_q7glir.png";

const Clock =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090809/Clock_dzeilz.png";

const SearchIcon =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090809/SearchIcon_zva3e3.png";

const FirstOrder =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090810/FirstOrderDsicount_tnlxox.png";

const VeganDiscount =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090810/VeganDiscount_p5wuzw.png";

const IcecreamDiscount =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090810/IcecreamDiscount_ge51yt.png";

const Plus =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090809/Plus_jbcat9.png";

const DeliveryInformation =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090831/Location_mtbpyr.png";

const IdVerified =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732272007/ID_Verified_l12je8.png";

const OperationalTimes =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732272030/OperationalTimes_gp10mz.png";

const Review1 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732273576/Reviews_o0oynx.png";

const Review2 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732273576/Reviews_o0oynx.png";

const Review3 =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732273576/Reviews_o0oynx.png";

const Arrow =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732357065/arrow-left_nauel4.png";

const ArrowLeft =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732362382/ArrowLeft_exlgze.png";

const Ring =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732361259/Ring_h51ahi.png";

const Wallet =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732361404/Wallet_bszjaf.png";

const SocialIconM =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732437164/Social_Icon_M_ssbtdx.png";

const SocialIconP =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732437164/Social_Icon_P_powewt.png";

const SocialIconS =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732437164/Social_Icon_S_ungndz.png";

const OrderSucessfullBadge =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732458641/OrderSucessfullBadge_vgqyd0.png";

const Star =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732694016/Star_cun77f.png";

const ClockProductPage =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732694016/Time_Span_k69ox4.png";

const LocationCkeckoutPage =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732749379/LocationCkeckoutPage_pkyr7b.png";

const OrderPagePlus =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732754023/PlusOrderPage_x41snq.png";

const location =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732762539/location_xaa84g.png";

const Remove =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732967547/Remove_v8xwf0.png";

const Share =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732968266/share_bwwziu.png";

const ForwardButtonCart =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732987519/Forward_Button_2_ntmtfw.png";

const CartCupon =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732987486/Forward_Button_1_lnrfdj.png";

const Delivery =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732987824/Delivery_Scooter_dv81no.png";

const Collection =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732987824/New_Store_lnzhmu.png";

const CartCheckoutButton =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1732991951/Forward_Button_3_uo68uz.png";

const appStore =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1743158434/Download_on_the_App_Store_Badge.svg_p4gade.webp";

const googlePlay =
  "https://res.cloudinary.com/drkzizaiv/image/upload/v1743159331/googlePlaystore_q2txdq.png";

const restaurantSeedData = [
  {
    logo: "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090821/cd_l46dzc.png",
    name: "McDonald’s London",
    tagline: "great",
    rating: "4",
    reviewCount: "6",
    coverProductImage:
      "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/BurgerFastFood_unmuwl.png",
    categories: ["Burgers", "Fries", "Drinks"],
  },

  {
    logo: "https://res.cloudinary.com/drkzizaiv/image/upload/v1732187736/papa-johns_kbjbbj.png",
    name: "Papa John's",
    tagline: "The greatest burger",
    rating: "4",
    reviewCount: "6",
    coverProductImage:
      "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/BurgerFastFood_unmuwl.png",
    categories: ["Burgers", "Fries", "Drinks"],
  },

  {
    logo: "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090816/kfc_oosoff.png",
    name: "KFC West London",
    tagline: "great",
    rating: "4",
    reviewCount: "6",
    coverProductImage:
      "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/BurgerFastFood_unmuwl.png",
    categories: ["Burgers", "Fries", "Drinks"],
  },

  {
    logo: "https://res.cloudinary.com/drkzizaiv/image/upload/v1732187714/TexasChicken_bugjcx.png",
    name: "Texas Chicken",
    tagline: "great",
    rating: "4",
    reviewCount: "6",
    coverProductImage:
      "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/BurgerFastFood_unmuwl.png",
    categories: ["Burgers", "Fries", "Drinks"],
  },

  {
    logo: "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090812/BurgerKing_fqee3c.png",
    name: "Burger King",
    tagline: "great",
    rating: "4",
    reviewCount: "6",
    coverProductImage:
      "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/BurgerFastFood_unmuwl.png",
    categories: ["Burgers", "Fries", "Drinks"],
  },

  {
    logo: "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090812/Shaurma_mowj9q.png",
    name: "Shaurma 1",
    tagline: "great",
    rating: "4",
    reviewCount: "6",
    coverProductImage:
      "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/BurgerFastFood_unmuwl.png",
    categories: ["Burgers", "Fries", "Drinks"],
  },
];

const seedFood = [
  {
    restaurantId: "67e57991ad93b637c27fed39", // McDonald's ID
    name: "Big Mac",
    description: "A classic burger with two patties.",
    price: 199,
    image: Burger1,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed39", // McDonald's ID
    name: "Cheeseburger",
    description: "A simple cheeseburger with melted cheese.",
    price: 129,
    image: Burger2,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed39", // McDonald's ID
    name: "Crispy Chicken",
    description: "A hearty burger with cheese and onions.",
    price: 179,
    image: Burger3,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed39", // McDonald's ID
    name: "McChicken",
    description: "Crispy chicken sandwich with mayo and lettuce.",
    price: 169,
    image: Burger4,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed39", // McDonald's ID
    name: "Small Fries",
    description: "A small portion of crispy fries.",
    price: 79,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed39", // McDonald's ID
    name: "Medium Fries",
    description: "A medium portion of crispy fries.",
    price: 99,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed39", // McDonald's ID
    name: "Large Fries",
    description: "A large portion of crispy fries.",
    price: 129,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed39", // McDonald's ID
    name: "Curly Fries",
    description: "Spiraled fries with a seasoned coating.",
    price: 149,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed39", // McDonald's ID
    name: "Coke",
    description: "A refreshing cola drink.",
    price: 59,
    image: SoftDrink1,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed39", // McDonald's ID
    name: "Sprite",
    description: "A crisp lemon-lime flavored soda.",
    price: 59,
    image: SoftDrink2,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed39", // McDonald's ID
    name: "Fanta",
    description: "A sweet orange-flavored soda.",
    price: 59,
    image: SoftDrink3,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed39", // McDonald's ID
    name: "Iced Coffee",
    description: "Cold brewed coffee with ice and milk.",
    price: 99,
    image: SoftDrink4,
    category: "Drinks",
  },

  // Papa John's menu
  {
    restaurantId: "67e57991ad93b637c27fed3a", // Papa John's ID
    name: "Big Mac",
    description: "A classic burger with two patties.",
    price: 199,
    image: Burger1,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3a", // Papa John's ID
    name: "Cheeseburger",
    description: "A simple cheeseburger with melted cheese.",
    price: 129,
    image: Burger2,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3a", // Papa John's ID
    name: "Crispy Chicken",
    description: "A hearty burger with cheese and onions.",
    price: 179,
    image: Burger3,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3a", // Papa John's ID
    name: "McChicken",
    description: "Crispy chicken sandwich with mayo and lettuce.",
    price: 169,
    image: Burger4,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3a", // Papa John's ID
    name: "Small Fries",
    description: "A small portion of crispy fries.",
    price: 79,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3a", // Papa John's ID
    name: "Medium Fries",
    description: "A medium portion of crispy fries.",
    price: 99,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3a", // Papa John's ID
    name: "Large Fries",
    description: "A large portion of crispy fries.",
    price: 129,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3a", // Papa John's ID
    name: "Curly Fries",
    description: "Spiraled fries with a seasoned coating.",
    price: 149,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3a", // Papa John's ID
    name: "Coke",
    description: "A refreshing cola drink.",
    price: 59,
    image: SoftDrink1,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3a", // Papa John's ID
    name: "Sprite",
    description: "A crisp lemon-lime flavored soda.",
    price: 59,
    image: SoftDrink2,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3a", // Papa John's ID
    name: "Fanta",
    description: "A sweet orange-flavored soda.",
    price: 59,
    image: SoftDrink3,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3a", // Papa John's ID
    name: "Iced Coffee",
    description: "Cold brewed coffee with ice and milk.",
    price: 99,
    image: SoftDrink4,
    category: "Drinks",
  },

  {
    restaurantId: "67e57991ad93b637c27fed3c", // Texas Chicken ID
    name: "Big Mac",
    description: "A classic burger with two patties.",
    price: 199,
    image: Burger1,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3c", // Texas Chicken ID
    name: "Cheeseburger",
    description: "A simple cheeseburger with melted cheese.",
    price: 129,
    image: Burger2,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3c", // Texas Chicken ID
    name: "Crispy Chicken",
    description: "A hearty burger with cheese and onions.",
    price: 179,
    image: Burger3,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3c", // Texas Chicken ID
    name: "McChicken",
    description: "Crispy chicken sandwich with mayo and lettuce.",
    price: 169,
    image: Burger4,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3c", // Texas Chicken ID
    name: "Small Fries",
    description: "A small portion of crispy fries.",
    price: 79,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3c", // Texas Chicken ID
    name: "Medium Fries",
    description: "A medium portion of crispy fries.",
    price: 99,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3c", // Texas Chicken ID
    name: "Large Fries",
    description: "A large portion of crispy fries.",
    price: 129,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3c", // Texas Chicken ID
    name: "Curly Fries",
    description: "Spiraled fries with a seasoned coating.",
    price: 149,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3c", // Texas Chicken ID
    name: "Coke",
    description: "A refreshing cola drink.",
    price: 59,
    image: SoftDrink1,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3c", // Texas Chicken ID
    name: "Sprite",
    description: "A crisp lemon-lime flavored soda.",
    price: 59,
    image: SoftDrink2,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3c", // Texas Chicken ID
    name: "Fanta",
    description: "A sweet orange-flavored soda.",
    price: 59,
    image: SoftDrink3,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3c", // Texas Chicken ID
    name: "Iced Coffee",
    description: "Cold brewed coffee with ice and milk.",
    price: 99,
    image: SoftDrink4,
    category: "Drinks",
  },

  {
    restaurantId: "67e57991ad93b637c27fed3d", // Burger King ID
    name: "Big Mac",
    description: "A classic burger with two patties.",
    price: 199,
    image: Burger1,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3d", // Burger King ID
    name: "Cheeseburger",
    description: "A simple cheeseburger with melted cheese.",
    price: 129,
    image: Burger2,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3d", // Burger King ID
    name: "Crispy Chicken",
    description: "A hearty burger with cheese and onions.",
    price: 179,
    image: Burger3,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3d", // Burger King ID
    name: "McChicken",
    description: "Crispy chicken sandwich with mayo and lettuce.",
    price: 169,
    image: Burger4,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3d", // Burger King ID
    name: "Small Fries",
    description: "A small portion of crispy fries.",
    price: 79,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3d", // Burger King ID
    name: "Medium Fries",
    description: "A medium portion of crispy fries.",
    price: 99,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3d", // Burger King ID
    name: "Large Fries",
    description: "A large portion of crispy fries.",
    price: 129,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3d", // Burger King ID
    name: "Curly Fries",
    description: "Spiraled fries with a seasoned coating.",
    price: 149,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3d", // Burger King ID
    name: "Coke",
    description: "A refreshing cola drink.",
    price: 59,
    image: SoftDrink1,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3d", // Burger King ID
    name: "Sprite",
    description: "A crisp lemon-lime flavored soda.",
    price: 59,
    image: SoftDrink2,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3d", // Burger King ID
    name: "Fanta",
    description: "A sweet orange-flavored soda.",
    price: 59,
    image: SoftDrink3,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3d", // Burger King ID
    name: "Iced Coffee",
    description: "Cold brewed coffee with ice and milk.",
    price: 99,
    image: SoftDrink4,
    category: "Drinks",
  },

  {
    restaurantId: "67e57991ad93b637c27fed3e", // Shaurma 1 ID
    name: "Big Mac",
    description: "A classic burger with two patties.",
    price: 199,
    image: Burger1,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3e", // Shaurma 1 ID
    name: "Cheeseburger",
    description: "A simple cheeseburger with melted cheese.",
    price: 129,
    image: Burger2,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3e", // Shaurma 1 ID
    name: "Crispy Chicken",
    description: "A hearty burger with cheese and onions.",
    price: 179,
    image: Burger3,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3e", // Shaurma 1 ID
    name: "McChicken",
    description: "Crispy chicken sandwich with mayo and lettuce.",
    price: 169,
    image: Burger4,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3e", // Shaurma 1 ID
    name: "Small Fries",
    description: "A small portion of crispy fries.",
    price: 79,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3e", // Shaurma 1 ID
    name: "Medium Fries",
    description: "A medium portion of crispy fries.",
    price: 99,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3e", // Shaurma 1 ID
    name: "Large Fries",
    description: "A large portion of crispy fries.",
    price: 129,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3e", // Shaurma 1 ID
    name: "Curly Fries",
    description: "Spiraled fries with a seasoned coating.",
    price: 149,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3e", // Shaurma 1 ID
    name: "Coke",
    description: "A refreshing cola drink.",
    price: 59,
    image: SoftDrink1,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3e", // Shaurma 1 ID
    name: "Sprite",
    description: "A crisp lemon-lime flavored soda.",
    price: 59,
    image: SoftDrink2,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3e", // Shaurma 1 ID
    name: "Fanta",
    description: "A sweet orange-flavored soda.",
    price: 59,
    image: SoftDrink3,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3e", // Shaurma 1 ID
    name: "Iced Coffee",
    description: "Cold brewed coffee with ice and milk.",
    price: 99,
    image: SoftDrink4,
    category: "Drinks",
  },

  {
    restaurantId: "67e57991ad93b637c27fed3b", // KFC
    name: "Big Mac",
    description: "A classic burger with two patties.",
    price: 199,
    image: Burger1,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3b", // KFC
    name: "Cheeseburger",
    description: "A simple cheeseburger with melted cheese.",
    price: 129,
    image: Burger2,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3b", // KFC
    name: "Crispy Chicken",
    description: "A hearty burger with cheese and onions.",
    price: 179,
    image: Burger3,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3b", // KFC
    name: "McChicken",
    description: "Crispy chicken sandwich with mayo and lettuce.",
    price: 169,
    image: Burger4,
    category: "Burgers",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3b", // KFC
    name: "Small Fries",
    description: "A small portion of crispy fries.",
    price: 79,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3b", // KFC
    name: "Medium Fries",
    description: "A medium portion of crispy fries.",
    price: 99,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3b", // KFC
    name: "Large Fries",
    description: "A large portion of crispy fries.",
    price: 129,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3b", // KFC
    name: "Curly Fries",
    description: "Spiraled fries with a seasoned coating.",
    price: 149,
    image: Fries,
    category: "Fries",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3b", // KFC
    name: "Coke",
    description: "A refreshing cola drink.",
    price: 59,
    image: SoftDrink1,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3b", // KFC
    name: "Sprite",
    description: "A crisp lemon-lime flavored soda.",
    price: 59,
    image: SoftDrink2,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3b", // KFC
    name: "Fanta",
    description: "A sweet orange-flavored soda.",
    price: 59,
    image: SoftDrink3,
    category: "Drinks",
  },
  {
    restaurantId: "67e57991ad93b637c27fed3b", // KFC
    name: "Iced Coffee",
    description: "Cold brewed coffee with ice and milk.",
    price: 99,
    image: SoftDrink4,
    category: "Drinks",
  },
];

const seedData = async () => {
  await connectDb();
  await Food.insertMany(seedFood);
  // await Restaurant.insertMany(restaurantSeedData);

  console.log("done seeding");
};

seedData();
