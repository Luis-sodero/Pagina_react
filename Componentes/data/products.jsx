const products = [
  // HOGAR
  {
    id: 1,
    name: "Smart TV 50'' Samsung",
    price: 9000,
    category: "hogar",
    image: "https://images.samsung.com/is/image/samsung/p6pim/br/un50cu7700gxzd/gallery/br-crystal-uhd-cu7700-un50cu7700gxzd-537169866?$650_519_PNG$"
  },
  {
    id: 2,
    name: "Bocina Bluetooth JBL",
    price: 1200,
    category: "hogar",
    image: "https://www.bhphotovideo.com/images/images2500x2500/jbl_jblflip6blkam_flip_6_portable_waterproof_bluetooth_1772669.jpg"
  },
  {
    id: 3,
    name: "Smart TV 65'' LG OLED",
    price: 18000,
    category: "hogar",
    image: "https://www.lg.com/us/images/tvs/md08003762/gallery/medium01.jpg"
  },
  {
    id: 4,
    name: "Barra de Sonido Sony",
    price: 3500,
    category: "hogar",
    image: "https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=660&bgcolor=FFFFFF&bgc=FFFFFF"
  },
  {
    id: 5,
    name: "Robot Aspiradora iRobot",
    price: 6500,
    category: "hogar",
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6572/6572101_sd.jpg"
  },
  {
    id: 6,
    name: "Cafetera Nespresso",
    price: 2800,
    category: "hogar",
    image: "https://www.nespresso.com/shared_res/agility/n-components/pdp/sku-main-info/machines/vertuo/ENV300_W_frnt_800x800.png"
  },

  // OFICINA
  {
    id: 7,
    name: "Impresora HP DeskJet",
    price: 2500,
    category: "oficina",
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6578/6578105_sd.jpg"
  },
  {
    id: 8,
    name: "Mouse Inalámbrico Logitech",
    price: 400,
    category: "oficina",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png"
  },
  {
    id: 9,
    name: "Teclado Mecánico Corsair",
    price: 1800,
    category: "oficina",
    image: "https://www.corsair.com/medias/sys_master/images/images/hd8/hbd/9114245816350/CH-9109014-NA-K70-RGB-MK2-RAPIDFIRE-Gallery-01.png"
  },
  {
    id: 10,
    name: "Monitor 27'' Dell UltraSharp",
    price: 7500,
    category: "oficina",
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2720q/pdp/monitor-u2720q-pdp-hero-504x350.jpg"
  },
  {
    id: 11,
    name: "Webcam Logitech C920",
    price: 1100,
    category: "oficina",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/c920s-pro-hd-webcam/gallery/c920s-pro-hd-webcam-gallery-1.png"
  },
  {
    id: 12,
    name: "Silla Gamer DXRacer",
    price: 5500,
    category: "oficina",
    image: "https://www.dxracer.com/cdn/shop/files/OH_FH08_NR_1.png?v=1689757474&width=800"
  },

  // VIDEOJUEGOS
  {
    id: 13,
    name: "PlayStation 5",
    price: 14000,
    category: "videojuegos",
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6567/6567151_sd.jpg"
  },
  {
    id: 14,
    name: "Control Xbox Series X",
    price: 1500,
    category: "videojuegos",
    image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4NM6U?ver=a636"
  },
  {
    id: 15,
    name: "Nintendo Switch OLED",
    price: 8500,
    category: "videojuegos",
    image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000063837/13bd27e258d9e3e8734e0c5e0d96cb765d8a08fa08fe2a6bdf02d2c3b7c97a09"
  },
  {
    id: 16,
    name: "Audífonos Gamer HyperX",
    price: 1300,
    category: "videojuegos",
    image: "https://hyperx.com/cdn/shop/files/4P5L0AA_1.png?v=1700616427&width=800"
  },
  {
    id: 17,
    name: "Tarjeta Gráfica RTX 4070",
    price: 16000,
    category: "videojuegos",
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6521/6521430_sd.jpg"
  },
  {
    id: 18,
    name: "Volante Logitech G29",
    price: 4200,
    category: "videojuegos",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/simulation/g29-racing-wheel/gallery/g29-racing-wheel-gallery-1.png"
  },

  // TELÉFONOS
  {
    id: 19,
    name: "iPhone 15 Pro",
    price: 24000,
    category: "telefonos",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-black-titanium-select?wid=940&hei=1112&fmt=png-alpha&.v=1692895395658"
  },
  {
    id: 20,
    name: "Samsung Galaxy S24",
    price: 20000,
    category: "telefonos",
    image: "https://images.samsung.com/is/image/samsung/p6pim/levant/2401/gallery/levant-galaxy-s24-s921-sm-s921bzadeub-thumb-539572388?$344_344_PNG$"
  },
  {
    id: 21,
    name: "Motorola Edge 40",
    price: 9500,
    category: "telefonos",
    image: "https://motorola-global-portal.custhelp.com/ci/fattach/get/2018474/0/filename/Edge40_Eclipse_Black_Front.png"
  },
  {
    id: 22,
    name: "Google Pixel 8",
    price: 17000,
    category: "telefonos",
    image: "https://lh3.googleusercontent.com/kpqJVn_I1kbj1JLqYjxJGFSGbkA_h2x3S3Yz0e5O1xjc2aJDl3oJF7ROCBn6VkHxpVaC-N0_Y35EQXJbKk=rw-e365-w1440"
  },
  {
    id: 23,
    name: "Xiaomi 13T Pro",
    price: 13000,
    category: "telefonos",
    image: "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-13t-pro/pc/bed5b4bef4ca93a6a0bb3c00fef9a8d5.png"
  },
  {
    id: 24,
    name: "OnePlus 12",
    price: 15500,
    category: "telefonos",
    image: "https://oasis.opstatics.com/content/dam/oasis/page/2023/global/products/oneplus-12/green/1.png"
  },

  // COMPUTADORAS
  {
    id: 25,
    name: "Laptop HP Pavilion",
    price: 15000,
    category: "computadoras",
    image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/knivel/c08233396.png"
  },
  {
    id: 26,
    name: "PC Gamer Ryzen 5",
    price: 22000,
    category: "computadoras",
    image: "https://m.media-amazon.com/images/I/61RtJoUJEwL._AC_SL1500_.jpg"
  },
  {
    id: 27,
    name: "MacBook Air M2",
    price: 28000,
    category: "computadoras",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665"
  },
  {
    id: 28,
    name: "iPad Pro 12.9''",
    price: 21000,
    category: "computadoras",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104?wid=940&hei=1112&fmt=png-alpha&.v=1617126613000"
  },
  {
    id: 29,
    name: "Laptop Lenovo ThinkPad",
    price: 19000,
    category: "computadoras",
    image: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-11-hero.png?context=bWFzdGVyfHJvb3R8NTA5NzB8aW1hZ2UvcG5nfGgwMy9oMzEvOTM3MDQxOTY1MTQ1NC5wbmd8ZjNlMjFjY2NiMGY3NTY3NzVmNzAyNmFhOTYyZjJjNWZiZTFmYzkwZDM4NzQ4YmMzMzI4NWExMGVlYTYzNDA4Mg"
  },
  {
    id: 30,
    name: "Mini PC Intel NUC",
    price: 11000,
    category: "computadoras",
    image: "https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-11/nuc-12-pro-mini-pc-board-framed-rwd.png.rendition.intel.web.864.486.png"
  }
];

export default products;