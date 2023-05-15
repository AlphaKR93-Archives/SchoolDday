/** @type {import("next").NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.simpleicons.org",
                pathname: "/**/**"
            },
            {
                protocol: "https",
                hostname: "www.mirae-n.com",
                pathname: "/UPLOAD/EShop/Product/01/**"
            },
            {
                protocol: "https",
                hostname: "mall.kumsung.co.kr",
                pathname: "/prdimg/**"
            },
            {
                protocol: "https",
                hostname: "s3.ap-northeast-2.amazonaws.com",
                pathname: "/ybm-prd-std/TEXTBOOK/2018/**"
            },
            {
                protocol: "https",
                hostname: "samyangm.com",
                pathname: "/data/item/1505386552/thumb-7KSR7KeE66Gc_135x180.jpg"
            },
            {
                protocol: "https",
                hostname: "textbook.visang.com",
                pathname: "/upload/Book/201802/20180211123402335.jpg"
            },
            {
                protocol: "https",
                hostname: "chunjaetext.co.kr",
                pathname: "/web/product/medium/20200417/**"
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                pathname: "/u/44059783"
            }
        ]
    }
};
