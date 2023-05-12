import Image from "next/image";

export default function dummy() {
    return null;
}

type prop = { path: string };

export function CdnMiraeN(props: prop) {
    const { path } = props;
    return (
        <Image
            src={`https://www.mirae-n.com/UPLOAD/EShop/Product/01/${path}.jpg`}
            alt="MiraeN Textbook"
            width={119}
            height={157}
        />
    );
}

export function KumsungMall(props: prop) {
    const { path } = props;
    return (
        <Image src={`https://mall.kumsung.co.kr/prdimg/${path}.jpg`} alt="Kumsung Textbook" width={119} height={157} />
    );
}

export function YBMTextbook(props: prop) {
    const { path } = props;
    return (
        <Image
            src={`https://s3.ap-northeast-2.amazonaws.com/ybm-prd-std/TEXTBOOK/2018/${path}.jpg`}
            alt="YBM Textbook"
            width={119}
            height={157}
        />
    );
}

export function ChungaeTextbook(props: prop) {
    const { path } = props;
    return (
        <Image
            src={`https://chunjaetext.co.kr/web/product/medium/20200417/${path}.jpg`}
            alt="Chunjae Textbook"
            width={119}
            height={157}
        />
    );
}
