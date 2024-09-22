import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useCart } from "./CartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy A34 5G",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61J6sa2h0DL._SL1500_.jpg",
    description:
      "Samsung Galaxy A34 5G (Awesome Violet, 8GB, 128GB Storage) | 48 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Without Charger",
    price: '23,689.00',
  },
  {
    id: 2,
    name: "ASUS Vivobook 16 ",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71VrU+m9CDL._SL1500_.jpg",
    description: "ASUS Vivobook 16 (2023), Intel Core i9-13900H 13th Gen, 16 (40.64 cm) FHD+, Thin & Light Laptop (16GB/512GB SSD/Intel Iris Xe/Win 11/Office 2021/Backlit KB/Fingerprint/Black/1.88 kg) X1605VA-MB947WS",
    price: '79,990',
  },
  {
    id: 3,
    name: "Apple Watch SE",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71LfnkRgZ4L._SL1500_.jpg",
    description: "Apple Watch SE (2nd Gen) [GPS 40 mm] Smart Watch w/Midnight Aluminium Case & Midnight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant",
    price: '26,900',
  },
  {
    id: 4,
    name: "pTron Zenbuds",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51xhhoY-FeL._SL1200_.jpg",
    description: "pTron Newly Launched Zenbuds Evo TWS Earbuds,Ai-Trutalk Enc Calls,45Ms Movie/Music Modes,Deep Bass,32Hrs Playtime,Bluetooth 5.3 Headphones,Ipx5 Water Resistant&Type-C Fast Charging (Black),in-Ear",
    price: '1,199',
  },
  {
    id: 5,
    name: "Samsung TV",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.EiCDttRc6XRP5hpeOPK8lwHaEK%26pid%3DApi&f=1&ipt=187cb842750bd9422e44dd8c485e9250f7ed11a26754ae54eca21cab84634f29&ipo=images",
    description: "Samsung 108 cm (43 inches) Crystal iSmart 4K Ultra HD Smart LED TV (UA43CUE60AKLXL, Black) | HDR 10+ | Screen mirroring",
    price: '30,990',
  },
  {
    id: 6,
    name: "Travel Adapter",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/611RCy1XjsL._SL1500_.jpg",
    description: "rts Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black)",
    price:'587',
  },
  {
    id: 7,
    name: "Fitness Tracker Pro",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/514cBZZxi3L._SL1100_.jpg",
    description: "40W Smart Fitness Watch for Realme 8 Pro / Realme8 Pro Original Sports Touchscreen Smart Watch Bluetooth 1.3 Smart Watch LED with Daily Activity Tracker, Heart Rate Sensor, Sleep Monitor (Black)",
    price: 999,
  },
  {
    id: 8,
    name: "JBL Headphone",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61QZnJ+vJyL._SL1500_.jpg",
    description:
      "JBL Tune 760NC, Wireless Over Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Pure Bass, Dual Pairing, AUX & Voice Assistant Support for Mobile Phones (Black)",
    price:'4,499',
  },
  {
    id: 9,
    name: "Digital Camera ",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhphotovideo.com%2Fimages%2Fimages2500x2500%2Fnikon_13216_d5200_digital_slr_camera_910173.jpg&f=1&nofb=1&ipt=1d82560279f000ec7dbb9604215ecc28e6b1eb5d907204c489f2e67f0e804373&ipo=images",
    description:
      "Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Digital SLR Camera with 16-50 mm & 55-210 mm Zoom Lenses, APS-C Sensor, Fast Auto Focus,Real-time Eye AF,Real-time Tracking, Vlogging & Content Creation -Black",
    price: '78,990',
  },
  {
    id: 10,
    name: "Coffee Maker",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41LmtViIRCS._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Havells Crystal Tea-Coffee Maker Glass with Filter Basket | Indicator Light | Transparent Glass Carafe 600 W",
    price: '2,440',
  },
  {
    id: 11,
    name: "Vacuum Cleaner",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/318ITmThGlL._SX300_SY300_QL70_FMwebp_.jpg",
    description: "Mi Xiaomi Robot Vacuum Cleaner 2Pro, 5200 Mah, Best Suited for Premium 3 & 4 BHKs, Professional Mopping 2.0, Highest Runtime of 4.5 Hrs.,Strong Suction, Next Gen Laser Navigation, Alexa/GA Enabled",
    price: '25,999',
  },
  {
    id: 12,
    name: "Bluetooth Speaker",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614pmXRPMFL._SL1300_.jpg",
    description: "Sony Srs-Xb13 Wireless Extra Bass Portable Compact Bluetooth Speaker with 16 Hours Battery Life, Type-C, Ip67 Waterproof, Dustproof, with Mic, Loud Audio for Phone Calls/Work from Home (Black), Small",
    price: '3,584',
  },
  {
    id: 13,
    name: "External SSD Drive",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61zuR3UMnWL._SY879_.jpg",
    description: "SanDisk 1TB Extreme Portable SSD 1050MB/s R, 1000MB/s W,Upto 2 Meter Drop Protection with IP55 Water/dust Resistance, HW Encryption, PC,MAC & TypeC Smartphone Compatible, 5Y Warranty, Usb,External SSD",
    price: '9,099',
  },
  {
    id: 14,
    name: "Wireless Charging Pad",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31Wg3xvQCTL._SX300_SY300_QL70_FMwebp_.jpg",
    description: "Spigen Essential Wireless Charger for iPhone 14/13/12/11/X.8 Series, Samsung Galaxy S23/S22/S21/S20 OnePlus 9/9 Pro with USB-A to C Type Cable [Version 2] - Black",
    price: '1,099',
  },
  {
    id: 15,
    name: "Graphic Design Tablet",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/715xi8JL7jL._SL1500_.jpg",
    description: "HUION KAMVAS 16 Graphics Drawing Tablet with Full-Laminated Screen Anti-Glare 10 Express Keys Android Support Battery-Free Stylus 8192 Pen Pressure Tilt with Adjustable Stand - 15.6 Inch, Blue",
    price: '27,999',
  },
  {
    id: 16,
    name: "Smart Home Security Camera",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41WQe9NiU6L._SL1000_.jpg",
    description: "TP-Link Tapo 360° 2MP 1080p Full HD Pan/Tilt Home Security Wi-Fi Smart Camera| Alexa Enabled| 2-Way Audio| Night Vision| Motion Detection| Sound and Light Alarm| Indoor CCTV (Tapo C200) White",
    price: '2,099',
  },
  {
    id: 17,
    name: "Electric Scooter",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51BT8hgnqFL._SL1080_.jpg",
    description: "Okaya Faast F2B Electric Scooter (Advance Booking for Ex-Showroom) | 80-85 km Range Per Charge | Matte Green (Portable Charger).",
    price: "92,999.99",
  },
  {
    id: 18,
    name: "Wireless Gaming Mouse",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71aIQrZVMAL._SL1500_.jpg",
    description: "Ant Esports GM700 Lightweight Wireless RGB Gaming Mouse, Rechargeable Mouse with Honeycomb Shell, 11 Led Light Modes, 4 Adjustable DPI, 2.4GHz Wireless RGB Mouse for Laptop PC Mac",
    price: 729,
  },
  {
    id: 19,
    name: "Bag pack",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41tjG89mjIL._SY300_SX300_.jpg",
    description: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41tjG89mjIL._SY300_SX300_.jpg",
    price: '259',
  },
  {
    id: 20,
    name: "Power Bank",
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71lVwl3q-kL._SL1500_.jpg",
    description: "MI Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery Charging | Input- Type C | Micro USB| Triple Output | Sandstone Black.",
    price: '1,979',
  },
];

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useCart();

  return (
    <SafeAreaView>
    <ScrollView>
          <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              addToCart(item);
              navigation.navigate("ProductDetails", { product: item });
            }}
            style={styles.itemContainer}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4, // for Android shadow
  },
  image: {
    width: screenWidth / numColumns - 50,
    height: (screenWidth / numColumns - 40) * 1.2, // adjust aspect ratio if needed
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
});

export default HomeScreen;
