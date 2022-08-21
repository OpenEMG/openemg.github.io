import React from "react"
import "../styles/hero.css"

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                OpenEMG Website💪
            </h1>
            <div className="hero-author">
                <img src="https://api.adorable.io/avatars/30/image.png" className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                    筋電(EMG)センサに関する情報を共有し、EMGを使ったセンサやデバイスの開発を促進するオープンなコミュニティです。
                    本サイトの情報を利用することで発生したトラブルや損失に対して、一切責任を負いません。
                </p>
            </div>
        </div>
    )
}
