import { PhotoProvider, PhotoView } from "react-photo-view";

const images_v_0_0_0 = [
    "https://i.ibb.co/55xpqZz/101.png",
    "https://i.ibb.co/TWfS9bL/102.png",
    "https://i.ibb.co/ZY4SQDc/103.png",
    "https://i.ibb.co/3SqqNB3/104.png",
    "https://i.ibb.co/qpXZpLj/105.png",
    "https://i.ibb.co/wg3Fk40/106.png",
    "https://i.ibb.co/JktdKMx/107.png",
    "https://i.ibb.co/D9z67W6/108.png",
    "https://i.ibb.co/kH3vLTN/109.png",
    "https://i.ibb.co/zm3wHCg/1010.png",
    "https://i.ibb.co/CbcmVRj/1011.png",
    "https://i.ibb.co/bPFs4B3/1012.png",
    "https://i.ibb.co/VT8ScBr/1013.png",
    "https://i.ibb.co/RpRmLQV/1014.png",
    "https://i.ibb.co/PDdVQjx/1015.png",
    "https://i.ibb.co/d7RHhTp/1016.png",
    "https://i.ibb.co/bKKt1rm/1017.png",
    "https://i.ibb.co/JQV5LLy/1018.png",
    "https://i.ibb.co/27L0w3g/1019.png",
    "https://i.ibb.co/8xBws56/a.png",
    "https://i.ibb.co/g7ddZHZ/b.png",
    "https://i.ibb.co/5FNJ9tq/d.png",
    "https://i.ibb.co/Q6MhYyV/z.png"
];

const images_v_0_0_3 = [
    "https://i.ibb.co/mNcTWQK/000.png",
    "https://i.ibb.co/BVdjwFW/001.png",
    "https://i.ibb.co/0Q6mRPM/002.png",
    "https://i.ibb.co/mHqSW4H/003.png",
    "https://i.ibb.co/tBtNfKF/004.png",
    "https://i.ibb.co/DrjZ5zs/005.png",
    "https://i.ibb.co/d5dm70W/006.png",
    "https://i.ibb.co/6wTXpJr/007.png",
    "https://i.ibb.co/jVSYCmg/008.png",
    "https://i.ibb.co/hmKzr5d/009.png",
    "https://i.ibb.co/zbVt5pZ/010.png",
    "https://i.ibb.co/h8BLqKW/011.png",
    "https://i.ibb.co/DQDJZL8/012.png",
    "https://i.ibb.co/52Ck39R/013.png",
    "https://i.ibb.co/4F99YMW/014.png",
    "https://i.ibb.co/b1Y2cFB/015.png",
    "https://i.ibb.co/PZSGV9X/016.png",
    "https://i.ibb.co/h9scQcp/017.png",
    "https://i.ibb.co/d2wnXrt/018.png",
    "https://i.ibb.co/qjkwMH7/019.png",
    "https://i.ibb.co/jRqwdNf/020.png",
    "https://i.ibb.co/bPQBPwX/021.png",
    "https://i.ibb.co/F7kCLMN/022.png",
    "https://i.ibb.co/ZfCz77Y/024.png",
    "https://i.ibb.co/4Ty0Tc7/025.png",
    "https://i.ibb.co/hZwYsLs/026.png",
    "https://i.ibb.co/bsnRXB9/027.png"
];

export default function FeaturesImages() {
    return (
        <div className="container box-1 image-gallery">
            <h2>Features Images</h2>
            <br />

            <h5>Updated at: 16/06/2023, v0.0.3</h5>
            <h6><b>Setup</b> demonstration</h6>
            <div className={ "d-flex justify-content-center row p-3" }>
                <PhotoProvider>
                    { images_v_0_0_3.map( ( image, index ) => (
                        <PhotoView src={ image }><img src={ image } alt=""/></PhotoView>
                    ) ) }
                </PhotoProvider>
            </div>

            <h5>Updated at: 03/06/2023, v0.0.0</h5>
            <h6><b>Dynamic Channel</b> management demonstration</h6>
            <div className={ "d-flex justify-content-center row p-3" }>
                <PhotoProvider>
                    { images_v_0_0_0.map( ( image, index ) => (
                        <PhotoView src={ image }><img src={ image } alt=""/></PhotoView>
                    ) ) }
                </PhotoProvider>
            </div>
        </div>
    );
}
