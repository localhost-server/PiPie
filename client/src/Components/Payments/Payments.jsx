import style from "./Payments.module.css"
import QRCode from "react-qr-code"
import { Link } from "react-router-dom"

export const Payments = () => {
    return (
        <div className={`${style["payments"]}`}>
            <h1 className={`${style["hi"]}`}>πi</h1>
            <div>
                <QRCode size={256}
                    bgColor="#492975"
                    fgColor="#eeeeee"
                    viewBox={`0 0 256 256`}
                    value="SCKRGHMJIJCHS3ODDOH2O7MYGARVBUB5YBV3HPLC2BPAMZI6TIBKFNS4" />
                <h4 className={`${style["scan-qr"]}`}>Scan this QR to recieve payments</h4>
            </div>
            <Link to="/scan" className={`${style["pay-pi"]}`}>Pay Using Pi</Link>
        </div>
    )
}
