import { useState, useEffect } from "react";
import io from "socket.io-client";
import QRCode from "qrcode";

const socket = io("https://chatbot-whats-5fs3.onrender.com");

export default function PainelWhatsApp() {
    const [qrImage, setQrImage] = useState(null);

    const gerarQR = () => {
        socket.emit("gerar_qr");
    };

    useEffect(() => {

        socket.on("whatsapp_qr", async (qr) => {
            const img = await QRCode.toDataURL(qr);
            setQrImage(img);
        });

        socket.on("whatsapp_ready", () => {
            setQrImage(null);
            alert("WhatsApp conectado com sucesso!");
        });

    }, []);

    return (
        <div>
            <button onClick={gerarQR}>Gerar QR Code do WhatsApp</button>

            {qrImage && (
                <div style={{ marginTop: 20 }}>
                    <img src={qrImage} alt="QR Code" style={{ width: 260 }} />
                </div>
            )}
        </div>
    );
}
