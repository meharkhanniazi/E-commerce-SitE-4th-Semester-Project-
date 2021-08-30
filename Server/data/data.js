const express=require('express')
const mongoose=require('mongoose');
const Product=mongoose.model("Product")
const router=express.Router() 


const data=[
    {
        id:"1",
        category:"Phone",
        name:"Honor 9X",
        price:22200,
        description:"Honor 9X Android smartphone. Announced Oct 2019. Features 6.59″ display, Kirin 710F chipset, 4000 mAh battery, 128 GB storage, 6 GB RAM.",
        info:"The Honor 9X succeeds the Honor 8X, and brings some notable upgrades such as a faster SoC, a full-screen display, better cameras.",
        qty:1,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HONOR%209X%20-%206GB%20RAM%20128GB%20ROM%20-%2048MP%20Triple%20Camera%20-%206.5%20FullView%20Display%20-%20Sapphire%20Blue%20Colour/HONOUR%209X%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HONOR%209X%20-%206GB%20RAM%20128GB%20ROM%20-%2048MP%20Triple%20Camera%20-%206.5%20FullView%20Display%20-%20Sapphire%20Blue%20Colour/HONOUR%209X%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HONOR%209X%20-%206GB%20RAM%20128GB%20ROM%20-%2048MP%20Triple%20Camera%20-%206.5%20FullView%20Display%20-%20Sapphire%20Blue%20Colour/HONOUR%209X%20(3).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HONOR%209X%20-%206GB%20RAM%20128GB%20ROM%20-%2048MP%20Triple%20Camera%20-%206.5%20FullView%20Display%20-%20Sapphire%20Blue%20Colour/Honor-9X-Pro.jpg?raw=true"
    },
    {
        id:"2",
        category:"Laptop",
        name:"HP Stream 11 Celeron",
        price:95000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Stream%2011%20Celeron%206th%20generation%202gb%2032gb%20with%20128gb%20ssd%20card(BEST%20FOR%20ONLINE%20CLASSES)/hp%20stream%20laptop%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Stream%2011%20Celeron%206th%20generation%202gb%2032gb%20with%20128gb%20ssd%20card(BEST%20FOR%20ONLINE%20CLASSES)/hp%20stream%20laptop%20(3).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Stream%2011%20Celeron%206th%20generation%202gb%2032gb%20with%20128gb%20ssd%20card(BEST%20FOR%20ONLINE%20CLASSES)/hp%20stream%20laptop%20(4).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Stream%2011%20Celeron%206th%20generation%202gb%2032gb%20with%20128gb%20ssd%20card(BEST%20FOR%20ONLINE%20CLASSES)/hp%20stream%20laptop%20(5).jpeg?raw=true",
        description: "HP Stream 11 Celeron 6th generation 2gb 32gb with 128gb ssd card(BEST FOR ONLINE CLASSES)",
        info: "Between home, school, and work-your mobile life demands a PC that just doesn't quit. With long-lasting battery life, the HP Stream does everything your smartphone can't. Post, play, and stay productive all day with the familiarity of a Windows PC that's affordable, portable, and incredibly stylish."
    },
    {
        id:"3",
        qty:1,
        category:"Laptop",
        name:"Acer Aspire One 10.1 Netbook, Intel Atom N450",
        price:40000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Acer%20Aspire%201%20Mini%20Atom%201.6ghz%202gb%20160gb%20HDD%20(Refurbished)/acer%20laptop%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Acer%20Aspire%201%20Mini%20Atom%201.6ghz%202gb%20160gb%20HDD%20(Refurbished)/acer%20laptop%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Acer%20Aspire%201%20Mini%20Atom%201.6ghz%202gb%20160gb%20HDD%20(Refurbished)/acer%20laptop%20(3).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Acer%20Aspire%201%20Mini%20Atom%201.6ghz%202gb%20160gb%20HDD%20(Refurbished)/acer%20laptop%20(4).jpeg?raw=true",
        description: "Get fantasic mobile connectivity in just the shade that suits you with the 10.1 Aspire One D255. Available in five striking colors, the design is stylish and ultra-thin. Stay mobile with 8 hours of battery power and and get online anywhere you get a cell phone signal via optional 3G. Smart usability and easy carry-ability make this netbook ideal for everyday computing on the go.",
        info: "Intel Atom 1.66 GHz processor kicks execution into high gear, delivering extremely quick web browsing and battery life that can deal with your crazy work weeks or playtime marathons"
    },
    {
        id:"4",
        category:"Laptop",
        name:"Apple Macbook 13.3 Laptop",
        price:72000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Apple%20Macbook%2013.3%20Laptop%20(Intel%20Core%202%20Duo,DDR3%20HDD,%204GB%20RAM,250GB%20HDD%20-%20Dual%20Operating%20System%20Windows%C2%AE%207%20&%20IOS/apple%20macbook%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Apple%20Macbook%2013.3%20Laptop%20(Intel%20Core%202%20Duo,DDR3%20HDD,%204GB%20RAM,250GB%20HDD%20-%20Dual%20Operating%20System%20Windows%C2%AE%207%20&%20IOS/apple%20macbook%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Apple%20Macbook%2013.3%20Laptop%20(Intel%20Core%202%20Duo,DDR3%20HDD,%204GB%20RAM,250GB%20HDD%20-%20Dual%20Operating%20System%20Windows%C2%AE%207%20&%20IOS/apple%20macbook%20(3).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Apple%20Macbook%2013.3%20Laptop%20(Intel%20Core%202%20Duo,DDR3%20HDD,%204GB%20RAM,250GB%20HDD%20-%20Dual%20Operating%20System%20Windows%C2%AE%207%20&%20IOS/apple%20macbook%20(4).jpeg?raw=true",
        description: "MacBook Pro 13” and MacBook Air available with the Apple M1 chip. Interest-free payments for 12 mo. & earn 3% Daily Cash back with Apple Card. Terms apply. Touch ID sensor. Backlit Magic Keyboard. Accessibility features. Retina display.",
        info: "Shop Apple MacBook Air 13.3 Laptop with Touch ID Intel Core i5 8GB Memory 128GB Solid State Drive Space Gray at Best Buy"
    },
    {
        id:"5",
        category:"Laptop",
        name:"HP Pavilion x360",
        price:124149,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Ci5%2010210U%208GB%20256GB%20SSD%2014%20FHD%20Touchscreen%20Backlit%20KB%20Windows%2010%20Intel%20UHD%20Graphics%20Mica%20Color%2081TC000JUS/acer%20laptop%202%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Ci5%2010210U%208GB%20256GB%20SSD%2014%20FHD%20Touchscreen%20Backlit%20KB%20Windows%2010%20Intel%20UHD%20Graphics%20Mica%20Color%2081TC000JUS/acer%20laptop%202%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Ci5%2010210U%208GB%20256GB%20SSD%2014%20FHD%20Touchscreen%20Backlit%20KB%20Windows%2010%20Intel%20UHD%20Graphics%20Mica%20Color%2081TC000JUS/acer%20laptop%202%20(3).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Ci5%2010210U%208GB%20256GB%20SSD%2014%20FHD%20Touchscreen%20Backlit%20KB%20Windows%2010%20Intel%20UHD%20Graphics%20Mica%20Color%2081TC000JUS/acer%20laptop%202%20(4).jpeg?raw=true",
        description: "HP Pavilion x360-14 Touch - Core i5-10210U - 8GB - 256GB SSD + 16GB Optane - Gold",
        info: "10th Gen Intel Core i5-10210U mobile processor.8GB RAM to smoothly run your games and photo- and video-editing applications, as well as multiple programs and browser tabs all at once. DDR4 is the future of RAM.14 2-in-1 Full HD multitouch screen Laptop. IPS technology for wide viewing angles. Energy-efficient WLED backlight.256GB Solid State Drive accelerated by Intel Optane; Solid State Drive (PCI-e) Save files fast and store more data.Wireless-AC connectivity (1x1, 433 Mbps) is more capacity and wider coverage than Wireless-N"
    },
    {
        id:"6",
        category:"Other",
        name:"Dahua Imou Ranger 2",
        price:7000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dahua%20Imou%20Ranger%202%20Home%20Security%20Surveillance%20Wifi%20Camera%20with%20360%20Degree%20Coverage%20Human/Dahua%20lmou%20ranger%20(4).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dahua%20Imou%20Ranger%202%20Home%20Security%20Surveillance%20Wifi%20Camera%20with%20360%20Degree%20Coverage%20Human/Dahua%20lmou%20ranger%20(3).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dahua%20Imou%20Ranger%202%20Home%20Security%20Surveillance%20Wifi%20Camera%20with%20360%20Degree%20Coverage%20Human/Dahua%20lmou%20ranger%20(5).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dahua%20Imou%20Ranger%202%20Home%20Security%20Surveillance%20Wifi%20Camera%20with%20360%20Degree%20Coverage%20Human/Dahua%20lmou%20ranger%20(1).jpeg?raw=true",
        description: "Dahua Imou Ranger 2 Home Security Surveillance Wifi Camera with 360 Degree Coverage Human",
        info: "With 1080P Full HD live monitoring and 0~355° pan & -5~80°tilt features, Ranger 2 ensures every corner of your home completely covered. Human Detection quickly finds human targets in images and immediately sends a notification to you. Privacy Mode helps protect your personal privacy when you are home, and Smart Tracking function lets the camera follows moving objects when it detects motion."
    },
    {
        id:"7",
        category:"PC",
        name:"Dell Optplex 3020",
        price:205000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Del%20Optplex%203020%20SFF%20Desktop%20PC%20-%20Intel%20Core%20i5-4570%204th%20Generation%203.4GHz%208GB%201TB%20DVDRW%20Windows%2010%20Pro%20Free%20Wifi/del%20optplex%20(3).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Del%20Optplex%203020%20SFF%20Desktop%20PC%20-%20Intel%20Core%20i5-4570%204th%20Generation%203.4GHz%208GB%201TB%20DVDRW%20Windows%2010%20Pro%20Free%20Wifi/del%20optplex%20(4).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Del%20Optplex%203020%20SFF%20Desktop%20PC%20-%20Intel%20Core%20i5-4570%204th%20Generation%203.4GHz%208GB%201TB%20DVDRW%20Windows%2010%20Pro%20Free%20Wifi/del%20optplex%20(2).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Del%20Optplex%203020%20SFF%20Desktop%20PC%20-%20Intel%20Core%20i5-4570%204th%20Generation%203.4GHz%208GB%201TB%20DVDRW%20Windows%2010%20Pro%20Free%20Wifi/del%20optplex%20(1).jpeg?raw=true",
        description: "Dell Optplex 3020 SFF Desktop PC - Intel Core i5-4570 4th Generation 3.4GHz 8GB 1TB DVDRW Windows 10 Pro Free",
        info: "Dell OptiPlex 3020 are still a great 1080p gaming machines in 2021. Pared with a proper CPU, and GPU they run games with higher then 60 FPS easily.You can pair any of the models with better video card, CPU and 16 GB of RAM and run 1080p smoothly."
    },
    {
        id:"8",
        category:"Other",
        name:"AMD Radeon HD 5450 1GB",
        price:22200,
        description:"XFX AMD Radeon HD 5450 1GB GDDR3 VGA/DVI/HDMI Low-Profile PCI-Express Graphics Card HD545XZQH2;HD-545X-ZQH2",
        info:"Watch high definition videos on your HD display with the Sapphire Radeon HD 5450. This card features 1GB of DDR3 vRAM and a 650 MHz core clock speed. 80 stream processors accelerate video playback and other programs that can take advantage of the supported APIs. The output options on this card can support many different displays. The card has one VGA port, one DVI port, and an HDMI port. Using the HDMI port, the card can output DTS and DTSHD surround sound audio for an immersive media experience. This card connects to your computer via a single PCI Express x16 connector and only takes up one physical slot.",
        qty:1,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/AMD%20Radeon%20HD%205450%201GB%20DDR3%20GTA5%20PUBG/AMD%20Radeon%20HD%205450%201GB%20DDR3%20GTA5%20PUBG%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/AMD%20Radeon%20HD%205450%201GB%20DDR3%20GTA5%20PUBG/AMD%20Radeon%20HD%205450%201GB%20DDR3%20GTA5%20PUBG%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/AMD%20Radeon%20HD%205450%201GB%20DDR3%20GTA5%20PUBG/p3.jpg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/AMD%20Radeon%20HD%205450%201GB%20DDR3%20GTA5%20PUBG/p4.jpg?raw=true"
    },
    {
        id:"9",
        category:"Laptop",
        name:"Dell Latitude 3340",
        price:155000,
        photo: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%203340%20-13.3%20LED%20Display%20-%20Core%20i3%204th%20Gen%20(4005U)%20-%204GB%20RAM%20-%20500GB%20HDD%20-%20Windows%2010%20(Activated)/dell%20latitude%20(2).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%203340%20-13.3%20LED%20Display%20-%20Core%20i3%204th%20Gen%20(4005U)%20-%204GB%20RAM%20-%20500GB%20HDD%20-%20Windows%2010%20(Activated)/dell%20latitude%20(4).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%203340%20-13.3%20LED%20Display%20-%20Core%20i3%204th%20Gen%20(4005U)%20-%204GB%20RAM%20-%20500GB%20HDD%20-%20Windows%2010%20(Activated)/dell%20latitude%20(2).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%203340%20-13.3%20LED%20Display%20-%20Core%20i3%204th%20Gen%20(4005U)%20-%204GB%20RAM%20-%20500GB%20HDD%20-%20Windows%2010%20(Activated)/dell%20latitude%20(1).jpeg?raw=true",
        description: "Dell Latitude 3340 -13.3 LED Display - Core i3 4th Gen (4005U) - 4GB RAM - 500GB HDD - Windows 10 (Activated)",
        info: "Small in design. Big on collaboration. Dell smallest 13 Essential business notebook features an innovative Webcam for high-quality video conferencing and the latest Intel processors. Operating system available with Windows 10 Home or Windows 10 Pro for a smooth, versatile PC experience."
    },
    {
        id:"10",
        category:"Laptop",
        name:"Dell Latitude E7250",
        price:180000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%20E7250%2012.5%E2%80%9D%20Laptop,%20Intel%20i7-5600U%202.3GHz,%20256GB%20SSD,%208GB%20DDR3,%20Windows%2010%20Pro/dELL%20LATITUDE%20E7250%20(4).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%20E7250%2012.5%E2%80%9D%20Laptop,%20Intel%20i7-5600U%202.3GHz,%20256GB%20SSD,%208GB%20DDR3,%20Windows%2010%20Pro/dELL%20LATITUDE%20E7250%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%20E7250%2012.5%E2%80%9D%20Laptop,%20Intel%20i7-5600U%202.3GHz,%20256GB%20SSD,%208GB%20DDR3,%20Windows%2010%20Pro/dELL%20LATITUDE%20E7250%20(1).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%20E7250%2012.5%E2%80%9D%20Laptop,%20Intel%20i7-5600U%202.3GHz,%20256GB%20SSD,%208GB%20DDR3,%20Windows%2010%20Pro/dELL%20LATITUDE%20E7250%20(3).jpeg?raw=true",
        description: "Dell Latitude E7250 12.5” Laptop, Intel i7-5600U 2.3GHz, 256GB SSD, 8GB DDR3, Windows 10 Pro",
        info: "This Laptop features an SSD of 256GB. Having an SSD means better reliability and performance over a standard hard drive. It means accessing your files faster, loading your programs faster, booting into your operating system faster. It also means lower power usage and improved battery life."
    },
    {
        id:"11",
        category:"PC",
        name:"Desktop 9010 Tower PC",
        price:120000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%209010%20Tower%20PC%20-%20Intel%20Core%20i5-3470%203.2GHz%208GB%20320GB%20DVDRW%20Windows%2010%20Professional/desktop%209010%20tower%20(4).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%209010%20Tower%20PC%20-%20Intel%20Core%20i5-3470%203.2GHz%208GB%20320GB%20DVDRW%20Windows%2010%20Professional/desktop%209010%20tower%20(3).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%209010%20Tower%20PC%20-%20Intel%20Core%20i5-3470%203.2GHz%208GB%20320GB%20DVDRW%20Windows%2010%20Professional/desktop%209010%20tower%20(1).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%209010%20Tower%20PC%20-%20Intel%20Core%20i5-3470%203.2GHz%208GB%20320GB%20DVDRW%20Windows%2010%20Professional/desktop%209010%20tower%20(2).jpeg?raw=true",
        description: "Desktop 9010 Tower PC - Intel Core i5-3470 3.2GHz 8GB 320GB DVDRW Windows 10 Professional",
        info: "Revitalize your workforce with the Dell OptiPlex 9010 - designed for maximum productivity - desktop virtualization and outstanding IT control."
    },
    {
        id:"12",
        category:"PC",
        name:"Lenovo ThinkCenter E73",
        price:55000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%20Core%20i3%203rd%20Generation%20(refurbished,%20machine%20only)%204GB,%20320GB/p31.jpg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%20Core%20i3%203rd%20Generation%20(refurbished,%20machine%20only)%204GB,%20320GB/p33.jpg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%20Core%20i3%203rd%20Generation%20(refurbished,%20machine%20only)%204GB,%20320GB/desktop%20core%20i3%20(1).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%20Core%20i3%203rd%20Generation%20(refurbished,%20machine%20only)%204GB,%20320GB/desktop%20core%20i3%20(2).jpeg?raw=true",
        description: "Intel® Core™ i3-4160 Processor (3M Cache, 3.60 GHz) , 4GB DDRIII, Storage 500GB 7200 RPM, DVD Recordable, Intel® Integrated Graphics DOS",
        info: "LENOVO Lenovo 10AS00DFUS Desktop Computer - Thinkcentre E73 Intel Core i5 i5 4460S 2.90 Ghz Tower Glossy Black 4 Gb DDR3 Sdram Ram 500 Gb Hdd Dvd Writer Intel Hd Graphics 4600 DDR3 Sdram Graphics Windows 8.1 Pro 64 bit downgradable to Windows 7 P. Premium Performance, Solid Reliabilitywhether you run a small business or the It department of a massive enterprise, you can have confidence in these desktop PCs′ reliability, ease of use and productivity - not to mention their green appeal."
    },
    {
        id:"13",
        category:"Phone",
        name:"Elephone A6 Mini",
        price:25000,
        photo1:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/ELEPHONE%20A6%20Mini%204GB%20-%2032GB%20-%205.71%20-%20Finger%20Print/ELEPHONE%20a6%20MINI%20(1).jpeg?raw=true",
        photo: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/ELEPHONE%20A6%20Mini%204GB%20-%2032GB%20-%205.71%20-%20Finger%20Print/elephone-a6-mini-5-71-inch-4gb-32gb-smartphone-black-1571980875561.jpg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/ELEPHONE%20A6%20Mini%204GB%20-%2032GB%20-%205.71%20-%20Finger%20Print/ELEPHONE%20a6%20MINI%20(2).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/ELEPHONE%20A6%20Mini%204GB%20-%2032GB%20-%205.71%20-%20Finger%20Print/ELEPHONE%20a6%20MINI%20(3).jpeg?raw=true",
        description: "Elephone A6 Mini 4GB RAM 32GB ROM Launch Feb-2019, 5.71-inch Display, 16MP+2MP Dual Rear Camera, Get Specs, Price,Compare, Review, Feature.",
        info: "The smartphone is powered by the MediaTek Helio A22 (MT6761) processor.Taking design into consideration, the Elephone A6 Mini comes in three different colors, Black, Blue, and Yellow. The body is made out of Plastic which makes the phone light in weight.The display technology of the smartphone is IPS with a 5.7 inches display screen. The resolution is 720 x 1520 pixels and 295 PPI (pixels per inch).It comes with additional features like Capacitive and Multi-touch. The primary camera is 15.93 megapixels which give an output of 4608 x 3456 pixels with Dual LED flash. The secondary camera has 15.93 megapixels with an output of 4608 x 3456 pixels.The camera comes with 2 MP, Secondary rear camera with Auto-focus, Geotagging, Touch focus, Exposure compensation, Continuous shooting, and Panorama as additional features."
    },
    {
        id:"14",
        category:"Laptop",
        name:"HP 15S-DU3501TU",
        price:170000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%2015S-DU3501TU%20Laptop%2011th%20Gen%20Core%20i5,%208GB,%201TB%20HDD,%20Windows%2010%20(Official%20Warranty)/HP%2015S%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%2015S-DU3501TU%20Laptop%2011th%20Gen%20Core%20i5,%208GB,%201TB%20HDD,%20Windows%2010%20(Official%20Warranty)/HP%2015S%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%2015S-DU3501TU%20Laptop%2011th%20Gen%20Core%20i5,%208GB,%201TB%20HDD,%20Windows%2010%20(Official%20Warranty)/HP%2015S%20(3).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%2015S-DU3501TU%20Laptop%2011th%20Gen%20Core%20i5,%208GB,%201TB%20HDD,%20Windows%2010%20(Official%20Warranty)/HP%2015S%20(4).jpeg?raw=true",
        description: "HP 15S-DU3501TU Laptop 11th Gen Core i5, 8GB, 1TB HDD, Windows 10",
        info: "HP Laptop 15s-du3501tu – Intel Core i5 – 11th Generation – Processor 1135G7 (8 MB L3 CACHE, up to 4.2 GHz) – 8GB RAM – 1TB HDD – Intel Iris Xe Graphics 15.6” HD LED-backlit (250 nits) Display – Windows 10 – Color Silver – 1 Year Local Hp Card Warranty"
    },
    {
        id:"15",
        category:"PC",
        name:"HP Compaq Business dc7900",
        price:70000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Compaq%20Business%20dc7900%20(Core%202%20Duo%20E8500%203.16GHz,%202GB%20RAM,%20160GB%20HDD)/hp%20compaq%20(2).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Compaq%20Business%20dc7900%20(Core%202%20Duo%20E8500%203.16GHz,%202GB%20RAM,%20160GB%20HDD)/hp%20compaq%20(3).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Compaq%20Business%20dc7900%20(Core%202%20Duo%20E8500%203.16GHz,%202GB%20RAM,%20160GB%20HDD)/hp%20compaq%20(4).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Compaq%20Business%20dc7900%20(Core%202%20Duo%20E8500%203.16GHz,%202GB%20RAM,%20160GB%20HDD)/hp%20compaq%20(1).jpeg?raw=true",
        description: "HP Compaq Business dc7900 (Core 2 Duo E8500 3.16GHz, 2GB RAM, 160GB HDD)",
        info: "HP Compaq Business Desktop dc7900 series is HP's most stable and secure business PC with professional innovations such as energy efficient technologies and leading remote manageability solutions."
    },
    {
        id:"16",
        category:"Laptop",
        name:"HP EliteBook 840 G3",
        price:185000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20EliteBook%20840%20G3%20-%2014%E2%80%9D%20FHD,%20Intel%20Core%20i5-6300U%202.4Ghz,%206th%20Gen%208GB%20DDR4,%20128GB%20SSD%20+%20500GB%20HDD,%20Windows%2010%2064%20bit/hp%20elite%20(3).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20EliteBook%20840%20G3%20-%2014%E2%80%9D%20FHD,%20Intel%20Core%20i5-6300U%202.4Ghz,%206th%20Gen%208GB%20DDR4,%20128GB%20SSD%20+%20500GB%20HDD,%20Windows%2010%2064%20bit/hp%20elite%20(1).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20EliteBook%20840%20G3%20-%2014%E2%80%9D%20FHD,%20Intel%20Core%20i5-6300U%202.4Ghz,%206th%20Gen%208GB%20DDR4,%20128GB%20SSD%20+%20500GB%20HDD,%20Windows%2010%2064%20bit/hp%20elite%20(2).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20EliteBook%20840%20G3%20-%2014%E2%80%9D%20FHD,%20Intel%20Core%20i5-6300U%202.4Ghz,%206th%20Gen%208GB%20DDR4,%20128GB%20SSD%20+%20500GB%20HDD,%20Windows%2010%2064%20bit/hp%20elite%20(4).jpeg?raw=true",
        description: "HP EliteBook 840 G3 - 14” FHD, Intel Core i5-6300U 2.4Ghz, 6th Gen 8GB DDR4, 128GB SSD + 500GB HDD, Windows 10 64 bit",
        info: "Impressively thin and light, the HP EliteBook 840 empowers users to create, connect, and collaborate, using enterprise-class performance technology that helps keep you productive in and out of the office. It's ideal for mobile professionals needing business rugged notebooks with enhanced system and graphic performance in a managed-IT environment."
    },
    {
        id:"17",
        category:"PC",
        name:"HP ProDesk 600 G2",
        price:38078,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20ProDesk%20600%20G2%20Desktop%20PC,%20Intel%20Core%20i5%206500,%206th%20Generation%203.2Ghz,%208GB%20DDR4%20RAM,%201TB%20Hard%20Drive,%20Windows%2010%20Pro/hp%20prodesk%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20ProDesk%20600%20G2%20Desktop%20PC,%20Intel%20Core%20i5%206500,%206th%20Generation%203.2Ghz,%208GB%20DDR4%20RAM,%201TB%20Hard%20Drive,%20Windows%2010%20Pro/hp%20prodesk%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20ProDesk%20600%20G2%20Desktop%20PC,%20Intel%20Core%20i5%206500,%206th%20Generation%203.2Ghz,%208GB%20DDR4%20RAM,%201TB%20Hard%20Drive,%20Windows%2010%20Pro/hp%20prodesk%20(3).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20ProDesk%20600%20G2%20Desktop%20PC,%20Intel%20Core%20i5%206500,%206th%20Generation%203.2Ghz,%208GB%20DDR4%20RAM,%201TB%20Hard%20Drive,%20Windows%2010%20Pro/hp%20prodesk%20(5).jpeg?raw=true",
        description: "HP ProDesk 600 G2 Desktop PC, Intel Core i5 6500, 6th Generation 3.2Ghz, 8GB DDR4 RAM, 1TB Hard Drive, Windows 10 Pro",
        info: "Speedy and responsive to keep pace with your multitasking. Quickly open files and switch applications with less wait time, thanks to a fast hard drive. Power through your day with greater speed and performance. Get the advanced in processing technology with your excellent processor."
    },
    
    {
        id:"18",
        category:"Phone",
        name:"Mi 11 Lite",
        price:50000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Mi%2011%20Lite%206GB+%20128GB%20-%206.55%E2%80%9D%20AMOLED%20display/p1.jpg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Mi%2011%20Lite%206GB+%20128GB%20-%206.55%E2%80%9D%20AMOLED%20display/p2.jpg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Mi%2011%20Lite%206GB+%20128GB%20-%206.55%E2%80%9D%20AMOLED%20display/p3.jpg?raw=true",
        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Mi%2011%20Lite%206GB+%20128GB%20-%206.55%E2%80%9D%20AMOLED%20display/p4.jpg?raw=true",
        description: "Xiaomi Mi 11 Lite (128GB, 6GB) 6.55” 90HZ AMOLED, 64MP Triple Camera, Snapdragon 732G, Dual SIM GSM 4G LTE International Version (Fast Car Charger Bundle)",
        info: "Show Your StyleMi 11 Lite 5GQualcomm Snapdragon 780G | Featherweight design Lightweight, 5G SpeedWith the true flagship-level device,it can add to the excitement of your 5G life and show your style in any aspect. Near-flat camera moduleThe camera module only protrudes 1.77mm from the rest of the body, making for a compact and well-balanced look and feel."
    },
    {
        id:"19",
        category:"Phone",
        name:"Infinix Hot 10i",
        price: 12000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/INFINIX%20HOT%2010i%20%204GB%20Ram%20128GB%20Rom%20%206000mAh%20Battery%20%20Android%2011%20OS%20%204G/p6.png?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/INFINIX%20HOT%2010i%20%204GB%20Ram%20128GB%20Rom%20%206000mAh%20Battery%20%20Android%2011%20OS%20%204G/infinix%20hot%2010i%20(1).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/INFINIX%20HOT%2010i%20%204GB%20Ram%20128GB%20Rom%20%206000mAh%20Battery%20%20Android%2011%20OS%20%204G/infinix%20hot%2010i%20(2).jpeg?raw=true",
        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/INFINIX%20HOT%2010i%20%204GB%20Ram%20128GB%20Rom%20%206000mAh%20Battery%20%20Android%2011%20OS%20%204G/infinix%20hot%2010i%20(3).jpeg?raw=true",
        description: "Dual Sim, 3G, 4G, VoLTE, Wi-Fi · Helio A20, Quad Core, 1.8 GHz Processor · 2 GB RAM, 32 GB inbuilt · 6000 mAh Battery · 6.51 inches",
        info: "The phone sports a 6.51-inches IPS LCD having a resolution of 720 x 1600 pixels and 270ppi pixel density. As for the performance, the phone comes powered by the MediaTek Helio A20 quad-core processor paired with 2GB of RAM. The phone relies on PowerVR GE8300 GPU for graphics."
    },
    {
        id:"20",
        category:"Laptop",
        name:"LENOVO THINKBOOK TB15 CI5",
        price:81405,
        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/LENOVO%20THINKBOOK%20TB15%20CI5%2010TH%204GB%201TB%20FHD%20DOS%201%20YEAR%20LENOVO%20DIRECT%20OFFICIAL%20WARRANTY/Lenovo%20tHINK%20bOOK%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/LENOVO%20THINKBOOK%20TB15%20CI5%2010TH%204GB%201TB%20FHD%20DOS%201%20YEAR%20LENOVO%20DIRECT%20OFFICIAL%20WARRANTY/Lenovo%20tHINK%20bOOK%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/LENOVO%20THINKBOOK%20TB15%20CI5%2010TH%204GB%201TB%20FHD%20DOS%201%20YEAR%20LENOVO%20DIRECT%20OFFICIAL%20WARRANTY/Lenovo%20tHINK%20bOOK%20(3).jpeg?raw=true",
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/LENOVO%20THINKBOOK%20TB15%20CI5%2010TH%204GB%201TB%20FHD%20DOS%201%20YEAR%20LENOVO%20DIRECT%20OFFICIAL%20WARRANTY/55.jpg?raw=true",
        description: "LENOVO THINKBOOK TB15 CI5 10TH 4GB 1TB FHD DOS 1 YEAR LENOVO DIRECT OFFICIAL WARRANTY",
        info: "Equipped with Intel Core i5-1035G1 processor and Windows 10 Pro - the Lenovo ThinkBook 15-IIL 15.6” Full HD Laptop gives you a seamless high performance and responsiveness wherever you are"
    },
    {
        id:"21",
        category:"Phone",
        name:"Nokia 3.2",
        price:18900,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Nokia%203.2%20-%206.26%20HD%20Display%20-%202GB%20RAM%20-%2016GB%20ROM%20-%20Face-unlock/NOKIA%203%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Nokia%203.2%20-%206.26%20HD%20Display%20-%202GB%20RAM%20-%2016GB%20ROM%20-%20Face-unlock/NOKIA%203%20(2).jpeg?raw=true",

        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Nokia%203.2%20-%206.26%20HD%20Display%20-%202GB%20RAM%20-%2016GB%20ROM%20-%20Face-unlock/NOKIA%203%20(5).jpeg?raw=true",

        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Nokia%203.2%20-%206.26%20HD%20Display%20-%202GB%20RAM%20-%2016GB%20ROM%20-%20Face-unlock/NOKIA%203%20(4).jpeg?raw=true",
        description: "Released 2019, May 22 · 181g, 8.6mm thickness · Android 9.0, up to Android 11, Android One · 16GB/32GB/64GB storage, microSDXC",
        info: "See more with a big 6.26” HD+ screen, and do more with a battery that lasts up to 2 days1. Capture your best memories with 13 MP and 5 MP cameras, even in low light. Use face identification unlocking to access your phone in an instant. Get things done with the Google Assistant."
    },
    {
        id:"22",
        category:"Phone",
        name:"Oppo A57",
        price:15000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Oppo%20A57%20-%205.2%20HD%20Display%20-%203GB%20RAM%20-%2032GB%20ROM%20-%20Dual%20Sim%20-%20Official%20PTA%20Approved%20-%20KIT%20Only%20(Charger,%20Box%20and%20Accessories%20Not%20Included)/d.jpg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Oppo%20A57%20-%205.2%20HD%20Display%20-%203GB%20RAM%20-%2032GB%20ROM%20-%20Dual%20Sim%20-%20Official%20PTA%20Approved%20-%20KIT%20Only%20(Charger,%20Box%20and%20Accessories%20Not%20Included)/y.jpg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Oppo%20A57%20-%205.2%20HD%20Display%20-%203GB%20RAM%20-%2032GB%20ROM%20-%20Dual%20Sim%20-%20Official%20PTA%20Approved%20-%20KIT%20Only%20(Charger,%20Box%20and%20Accessories%20Not%20Included)/oppo%20a57%20(2).jpeg?raw=true",
        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Oppo%20A57%20-%205.2%20HD%20Display%20-%203GB%20RAM%20-%2032GB%20ROM%20-%20Dual%20Sim%20-%20Official%20PTA%20Approved%20-%20KIT%20Only%20(Charger,%20Box%20and%20Accessories%20Not%20Included)/oppo%20a57%20(3).jpeg?raw=true",
        description: "Oppo A57 Android smartphone. Announced Nov 2016. Features 5.2″ display, Snapdragon 435 chipset, 13 MP primary camera, 16 MP front camera, 2900 mAh Battery",
        info: "For users who want a good budget selfie phone, the A57 is a good option. Oppo is now known for phones with good selfie cameras. Last year, it was the Oppo F1 selfie followed by F1 plus and the F1s. Now the company has launched the A57, a selfie focused smartphone but in the sub Rs 15,000 price bracket"
    },
    {
        id:"23",
        category:"Other",
        name:"Racing Drone BF-017",
        price:6999,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Racing%20Drone%20BF-017%20Camera%20Drone,%202.4%20Ghz%20Technology%20and%20Wind%20Resistance%20Remote%20Control%20Drone%20with%20blade%20protection/DRONE%20BF017%20(4).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Racing%20Drone%20BF-017%20Camera%20Drone,%202.4%20Ghz%20Technology%20and%20Wind%20Resistance%20Remote%20Control%20Drone%20with%20blade%20protection/DRONE%20BF017%20(3).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Racing%20Drone%20BF-017%20Camera%20Drone,%202.4%20Ghz%20Technology%20and%20Wind%20Resistance%20Remote%20Control%20Drone%20with%20blade%20protection/DRONE%20BF017%20(2).jpeg?raw=true",
        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Racing%20Drone%20BF-017%20Camera%20Drone,%202.4%20Ghz%20Technology%20and%20Wind%20Resistance%20Remote%20Control%20Drone%20with%20blade%20protection/DRONE%20BF017%20(1).jpeg?raw=true",
        description: "Racing Drone BF-017 Camera Drone, 2.4 Ghz Technology and Wind Resistance Remote Control Drone with blade protection",
        info: "Camera - yes, flying height - 20 mtrs, flying time: 8-10 minute, weight - 0.3 kg .Basic Function : Ascend, Descend, Forward, Backward, Left sideward fly, Right sideward fly and Rolling 360°3 different Speed Modes for Low / Medium / High speed ; - Super flexible and cool 3D Flip makes the flight more interesting , get rid of traditional boring flight"
    },
    {
        id:"24",
        category:"Phone",
        name:"Redmi 9",
        price:27500,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Redmi%209%204GB%20Ram%2064GB%20Rom%205020mAh%20Battery%206.53%20Display/redmi%209%204gb%20(2).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Redmi%209%204GB%20Ram%2064GB%20Rom%205020mAh%20Battery%206.53%20Display/redmi%209%204gb%20(1).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Redmi%209%204GB%20Ram%2064GB%20Rom%205020mAh%20Battery%206.53%20Display/rt.jpg?raw=true",
        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Redmi%209%204GB%20Ram%2064GB%20Rom%205020mAh%20Battery%206.53%20Display/dd.jpg?raw=true",
        description: "Performance. Media Tek Helio G80. CPU: 12 nm FinFET, Up to 2.0 GHz; 2 ARM Cortex A75 + 6 ARM Cortex A55, Octa-core CPU · Display. 6.53” FHD",
        info: "Freely switch between different modes to capture various types of scenarios with AI quad camera. The 2340 x 1080 Full HD+ resolution ensures an immersive visual experience and gives a clear view of the world around you. With blue light certification, you can comfortably spend long hours on your phone without eye strain."
    },
    {
        id:"25",
        category:"PC",
        name:"Storm PRO CA903",
        price: 175000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Redragon%20Diamond%20Storm%20PRO%20CA903%20Gaming%20PC%20Case%20Tempered%20Glass%20Multi%20Color%20Backlite/redragon%20diamond%20strom%20pro%20CA903%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Redragon%20Diamond%20Storm%20PRO%20CA903%20Gaming%20PC%20Case%20Tempered%20Glass%20Multi%20Color%20Backlite/redragon%20diamond%20strom%20pro%20CA903%20(3).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Redragon%20Diamond%20Storm%20PRO%20CA903%20Gaming%20PC%20Case%20Tempered%20Glass%20Multi%20Color%20Backlite/redragon%20diamond%20strom%20pro%20CA903%20(4).jpeg?raw=true",
        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Redragon%20Diamond%20Storm%20PRO%20CA903%20Gaming%20PC%20Case%20Tempered%20Glass%20Multi%20Color%20Backlite/REDRAGON-CHASSIS-SIDESWIPE-RGB-ATX-300x300.jpg?raw=true",
        description: "Redragon Diamond Storm PRO CA903 Gaming PC Case Tempered Glass Multi Color Backlite",
        info: "The Redragon Diamond Storm EATX Mid-Tower Tempered Glass RGB Gaming Chassis is manufactured to be durable, look stylish and be compatible with a wide array of motherboard form factors. It supports EATX, ATX, Micro-ATX and Mini-ITX form factors and has space for GPU’s of up to 380mm in diameter. This chassis has a both front and side panels made of tempered glass with coating film. "
    },
    {
        id:"26",
        category:"PC",
        name:"Dell OptiPlex 7010 MT",
        price:28000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Renewed%20-%20Dell%20OptiPlex%207010%20MT%20(mid-tower)%20Tower%20Gaming%20PC%20-%20Intel%20Core%20i5%203rd%20Gen%20-%20Nvidia%20Quadro%20600%201GB%20128bit%20GPU%20-%208GB%20DDR3%20-%20500GB%20HDD/dell%20optiplex%207010%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Renewed%20-%20Dell%20OptiPlex%207010%20MT%20(mid-tower)%20Tower%20Gaming%20PC%20-%20Intel%20Core%20i5%203rd%20Gen%20-%20Nvidia%20Quadro%20600%201GB%20128bit%20GPU%20-%208GB%20DDR3%20-%20500GB%20HDD/dell%20optiplex%207010%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Renewed%20-%20Dell%20OptiPlex%207010%20MT%20(mid-tower)%20Tower%20Gaming%20PC%20-%20Intel%20Core%20i5%203rd%20Gen%20-%20Nvidia%20Quadro%20600%201GB%20128bit%20GPU%20-%208GB%20DDR3%20-%20500GB%20HDD/dell%20optiplex%207010%20(3).jpeg?raw=true",
        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Renewed%20-%20Dell%20OptiPlex%207010%20MT%20(mid-tower)%20Tower%20Gaming%20PC%20-%20Intel%20Core%20i5%203rd%20Gen%20-%20Nvidia%20Quadro%20600%201GB%20128bit%20GPU%20-%208GB%20DDR3%20-%20500GB%20HDD/Dell_OptiPlex_7010_SFF.jpg?raw=true",
        description: "Harness 3rd Generation Intel® Core™ processor options including Intel® Turbo Boost Technology 2.0, ample storage, Intel® HD graphics and high-bandwidth memory of the OptiPlex 7010.",
        info: "Revitalize your workforce with the Dell OptiPlex 7010 - designed for advanced productivity - desktop virtualization and outstanding IT control. Graphics Processor: Intel GPU Installed Memory: 2 GB, 3 GB, 4 GB, 8 GB, 12 GB, 16 GB, 32 GB, 120 GB Processor Speed: 3.2 GHz"
    },
    {
        id:"27",
        category:"PC",
        name:"HP EliteDesk 800 G1",
        price:40000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Renewed%20-%20HP%20EliteDesk%20800%20G1%20Desktop%20PC%20-%20Intel%204th%20Generation%20Core%20i5%20-%208GB%20DDR3%20RAM%20-%20500GB%20HDD/Renewed%20elite%20Desk%20800%20(3).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Renewed%20-%20HP%20EliteDesk%20800%20G1%20Desktop%20PC%20-%20Intel%204th%20Generation%20Core%20i5%20-%208GB%20DDR3%20RAM%20-%20500GB%20HDD/Renewed%20elite%20Desk%20800%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Renewed%20-%20HP%20EliteDesk%20800%20G1%20Desktop%20PC%20-%20Intel%204th%20Generation%20Core%20i5%20-%208GB%20DDR3%20RAM%20-%20500GB%20HDD/Renewed%20elite%20Desk%20800%20(1).jpeg?raw=true",
        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Renewed%20-%20HP%20EliteDesk%20800%20G1%20Desktop%20PC%20-%20Intel%204th%20Generation%20Core%20i5%20-%208GB%20DDR3%20RAM%20-%20500GB%20HDD/s-l640.jpg?raw=true",
        description: "HP EliteDesk 800 G1 Desktop PC - Intel 4th Generation Core i5 - 8GB DDR3 RAM - 500GB HDD",
        info: "Business demands confidence. Here's yours. Designed to perform, impress, and protect-the sleek HP EliteDesk 800 G1 helps you power through to business success while allowing customized deployment."
    },
    {
        id:"28",
        category:"PC",
        name:"HP Pro 3500",
        price:32000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Renewed%20-%20HP%20Pro%203500%20Microtower%20PC%20-%20Core%20i3%203rd%20Gen%20-%204GB%20RAM%20-%20500GB%20HDD%20-%20Windows%2010%20-%20WiFi%20-%20Black/Hp%20Pro%203500%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Renewed%20-%20HP%20Pro%203500%20Microtower%20PC%20-%20Core%20i3%203rd%20Gen%20-%204GB%20RAM%20-%20500GB%20HDD%20-%20Windows%2010%20-%20WiFi%20-%20Black/Hp%20Pro%203500%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Renewed%20-%20HP%20Pro%203500%20Microtower%20PC%20-%20Core%20i3%203rd%20Gen%20-%204GB%20RAM%20-%20500GB%20HDD%20-%20Windows%2010%20-%20WiFi%20-%20Black/37528t550.jpg?raw=true",
        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Renewed%20-%20HP%20Pro%203500%20Microtower%20PC%20-%20Core%20i3%203rd%20Gen%20-%204GB%20RAM%20-%20500GB%20HDD%20-%20Windows%2010%20-%20WiFi%20-%20Black/img_17424066_medium_1479819274_547_3554.jpg?raw=true",
        description: "HP Pro 3500 Microtower PC - Core i3 3rd Gen - 4GB RAM - 500GB HDD - Windows 10 - WiFi - Black",
        info: "Product features · Intel core i3-2130 with Intel High Definition (HD) graphics 2000 (3.40 GHz, 3MB cache, 2 cores) 4 threads · Intel core i3-2125 with Intel High"
    },
    {
        id:"29",
        category:"Phone",
        name:"Samsung A51",
        price:39000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Samsung%20A51%20-%206GB%20RAM%20-%20128%20GB%20ROM%20-%2048MP%20Camera%20-%20Punch%20Hole%20Display/SAMSUNG%20A51%20(4).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Samsung%20A51%20-%206GB%20RAM%20-%20128%20GB%20ROM%20-%2048MP%20Camera%20-%20Punch%20Hole%20Display/SAMSUNG%20A51%20(3).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Samsung%20A51%20-%206GB%20RAM%20-%20128%20GB%20ROM%20-%2048MP%20Camera%20-%20Punch%20Hole%20Display/SAMSUNG%20A51%20(2).jpeg?raw=true",
        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Samsung%20A51%20-%206GB%20RAM%20-%20128%20GB%20ROM%20-%2048MP%20Camera%20-%20Punch%20Hole%20Display/SAMSUNG%20A51%20(1).jpeg?raw=true",
        description: "The Samsung Galaxy A51 is an Android smartphone manufactured by Samsung Electronics as part of its Galaxy A series.",
        info: "The A51 edged a slight win in low light, racking in a little more detail. ... It's IP67-rated water-resistant, has wireless charging (two things Samsung has pioneered for years, yet the A51 does not include), the same processor as the one in Apple's flagship iPhone 11 for superior performance, and packs a solid camera"
    },
    {
        id:"30",
        category:"Phone",
        name:"Samsung Galaxy Note 20 Ultra",
        price:215000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Samsung%20Galaxy%20Note%2020%20Ultra%20Display%206.9%20Tripple%20Back%20Camera%2012+108+12%20MP%20Front%20Camera%2010%20MP%20RAM%208%20GB%20ROM%20256%20GB/samsung%20galaxy%20note%20(3).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Samsung%20Galaxy%20Note%2020%20Ultra%20Display%206.9%20Tripple%20Back%20Camera%2012+108+12%20MP%20Front%20Camera%2010%20MP%20RAM%208%20GB%20ROM%20256%20GB/samsung%20galaxy%20note%20(4).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Samsung%20Galaxy%20Note%2020%20Ultra%20Display%206.9%20Tripple%20Back%20Camera%2012+108+12%20MP%20Front%20Camera%2010%20MP%20RAM%208%20GB%20ROM%20256%20GB/samsung%20galaxy%20note%20(2).jpeg?raw=true",
        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Samsung%20Galaxy%20Note%2020%20Ultra%20Display%206.9%20Tripple%20Back%20Camera%2012+108+12%20MP%20Front%20Camera%2010%20MP%20RAM%208%20GB%20ROM%20256%20GB/samsung%20galaxy%20note%20(1).jpeg?raw=true",
        description: "Samsung Galaxy Note 20 Ultra Display 6.9 Tripple Back Camera 12+108+12 MP Front Camera 10 MP RAM 8 GB ROM 256 GB",
        info: "This is not a smartphone as you know it. This is a computer suite in your pocket. This is next-level gaming on mobile. This is the power phone that forever changes how you work and play."
    },
    {
        id:"31",
        category:"Phone",
        name:"Sony Xpiera XZ2",
        price:25000,
        photo:"https://raw.githubusercontent.com/AZHARTHEGEEK/ecommercesite/main/product%20images/Sony%20Xpiera%20XZ2%20for%20Gaming%20-%205.7%20Full%20HD%20Display%20-%204GB%20RAM%20-%2064GB%20ROM%20-%20Snapdragon%20845%20-%20Fingerprint%20Sensor%20-%20Android/SONYXP~2.JPE",
        photo1: "https://raw.githubusercontent.com/AZHARTHEGEEK/ecommercesite/main/product%20images/Sony%20Xpiera%20XZ2%20for%20Gaming%20-%205.7%20Full%20HD%20Display%20-%204GB%20RAM%20-%2064GB%20ROM%20-%20Snapdragon%20845%20-%20Fingerprint%20Sensor%20-%20Android/SONYXP~3.JPE",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Sony%20Xpiera%20XZ2%20for%20Gaming%20-%205.7%20Full%20HD%20Display%20-%204GB%20RAM%20-%2064GB%20ROM%20-%20Snapdragon%20845%20-%20Fingerprint%20Sensor%20-%20Android/csm_Xperia_XZ2_und_Xperia_XZ2_Compact_7_998e24bde5.jpg?raw=true",

        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Sony%20Xpiera%20XZ2%20for%20Gaming%20-%205.7%20Full%20HD%20Display%20-%204GB%20RAM%20-%2064GB%20ROM%20-%20Snapdragon%20845%20-%20Fingerprint%20Sensor%20-%20Android/Sony-Xperia-XZ2-BF-1280-720.jpg?raw=true",
        description: "Sony Xpiera XZ2 for Gaming - 5.7 Full HD Display - 4GB RAM - 64GB ROM - Snapdragon 845 - Fingerprint Sensor - Android",
        info: "The Sony Xperia XZ2 is an Android-based smartphone unveiled, manufactured, released and marketed by Sony. Part of the Xperia X series, the device was announced to the public along with the Xperia XZ2 Compact at a press conference held at the annual 2018 Mobile World Congress event on February 26, 2018.[3] It features Qi Wireless Charging, Dynamic Vibration System, 4K HDR Video Recording"
    },
    {
        id:"32",
        category:"PC",
        name:"T1700 SFF Desktop",
        price:47000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/T1700%20SFF%20Desktop%20PC%20-%20Intel%20Core%20i5-4570%204th%20Generation%203.2GHz%204GB%20500GB%20DVDRW%20Windows%2010%20Pro/ti700%20sff%20(1).jpeg?raw=true",

        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/T1700%20SFF%20Desktop%20PC%20-%20Intel%20Core%20i5-4570%204th%20Generation%203.2GHz%204GB%20500GB%20DVDRW%20Windows%2010%20Pro/ti700%20sff%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/T1700%20SFF%20Desktop%20PC%20-%20Intel%20Core%20i5-4570%204th%20Generation%203.2GHz%204GB%20500GB%20DVDRW%20Windows%2010%20Pro/ti700%20sff%20(3).jpeg?raw=true",
        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/T1700%20SFF%20Desktop%20PC%20-%20Intel%20Core%20i5-4570%204th%20Generation%203.2GHz%204GB%20500GB%20DVDRW%20Windows%2010%20Pro/ti700%20sff%20(4).jpeg?raw=true",
        description: "T1700 SFF Desktop PC - Intel Core i5-4570 4th Generation 3.2GHz 4GB 500GB DVDRW Windows 10 Pro",
        info: "Equipped with up to 10th Gen Intel® Core™ processing and Windows 10 Pro, the Lenovo ThinkBook 15 gives you seamless high performance and responsiveness—wherever you are. Just 18.9mm (0.74) thin, this stylish business laptop boasts a modern mineral grey finish."
    },
    {
        id:"33",
        category:"Laptop",
        name:"Viper Notebook P40",
        price:7000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Viper%20Notebook%20P40%20-%20Intel%20Core%20i3%2010th%20Generation%20Processor,%204GB%20RAM,%20256GB%20Solid%20State%20Drive%20(SSD)/viper%20notebook%20p40%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Viper%20Notebook%20P40%20-%20Intel%20Core%20i3%2010th%20Generation%20Processor,%204GB%20RAM,%20256GB%20Solid%20State%20Drive%20(SSD)/viper%20notebook%20p40%20(1).jpg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Viper%20Notebook%20P40%20-%20Intel%20Core%20i3%2010th%20Generation%20Processor,%204GB%20RAM,%20256GB%20Solid%20State%20Drive%20(SSD)/viper%20notebook%20p40%20(2).jpeg?raw=true",
        photo3:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Viper%20Notebook%20P40%20-%20Intel%20Core%20i3%2010th%20Generation%20Processor,%204GB%20RAM,%20256GB%20Solid%20State%20Drive%20(SSD)/vpier%20p40.png?raw=true",
        description: "Viper Notebook P40 - Intel Core i3 10th Generation Processor, 4GB RAM, 256GB Solid State Drive (SSD)",
        info: "Anytime, Anywhere. Boundless possibilities. Powerful Viper P40 brings everything you need. With Intel core i3 processor, it offers powerful memory and SSD drive options. It’s perfect for anyone who wants to do more than just surf the internet. And the rugged design extend the life of the machine. HD display and stereo speakers you can stream your favorite movies and shows anywhere with a battery that lasts long. Work, school, or home, the P40, Built to withstand bumps and accidental drop."
    },

]


router.get('/products',(req,res)=>{
    res.json({data})
})


module.exports=router


// const express=require('express')
// const mongoose=require('mongoose');
// const Product=mongoose.model("Product")
// const router=express.Router() 


// const data=[
//     {
//         id:"1",
//         category:"Phone",
//         name:"Iphone 12 Pro Max",
//         price:200,
//         qty:1,
//         photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
//     },
//     {
//         id:"2",
//         qty:1,
//         category:"Phone",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
//     },
//     {
//         id:"3",
//         qty:1,
//         category:"Phone",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
//     },
//     {
//         id:"4",
//         category:"Phone",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
//     },
//     {
//         id:"5",
//         category:"Phone",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
//     },
//     {
//         id:"6",
//         category:"Phone",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
//     },
//     {
//         id:"7",
//         category:"Phone",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
//     },
//     {
//         id:"8",
//         category:"Phone",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
//     },
//     {
//         id:"9",
//         category:"Phone",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
//     },
//     {
//         id:"10",
//         category:"Laptop",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://images.livemint.com/img/2020/04/03/600x338/laptops_1570720004356_1585903134891.jpg"
//     },
//     {
//         id:"11",
//         category:"Laptop",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://rukminim1.flixcart.com/image/312/312/kmds4nk0/computer/t/0/9/na-thin-and-light-laptop-asus-original-imagfabezamstqhz.jpeg?q=70"
//     },
//     {
//         id:"12",
//         category:"Laptop",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://fdn.gsmarena.com/imgroot/news/20/12/nokia-purebook-x14-ofic/-1200/gsmarena_003.jpg"
//     },
//     {
//         id:"13",
//         category:"Phone",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
//     },
//     {
//         id:"14",
//         category:"Phone",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
//     },
//     {
//         id:"15",
//         category:"Computer",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2jy2n_lW5XmQCCtM1pwtTmQJn3tSdrMEKt9GrY8LkdYMlco2YFLErM4QtPVD0UCy7pM&usqp=CAU"
//     },{
//         id:"16",
//         category:"Computer",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://c.s-microsoft.com/en-us/CMSImages/1920_Panel07_PriorityFeature_GamePass.jpg?version=67718e36-854a-a201-1dd8-12a68d406d7f"
//     },{
//         id:"17",
//         category:"Computer",
//         name:"Iphone 122 Pro Max",
//         price:200,
//         photo:"https://www.dummies.com/wp-content/uploads/453360.image0.jpg"
//     },
    


// ]

// router.get('/products',(req,res)=>{
//     res.json({data})
// })


// module.exports=router