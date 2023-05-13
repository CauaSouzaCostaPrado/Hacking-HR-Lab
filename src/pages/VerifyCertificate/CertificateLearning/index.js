import React, { useCallback, useEffect, useRef } from "react";
import { connect } from "react-redux";
import html2canvas from "html2canvas";
import moment from "moment";

import ImgCertificateStamp from "images/img-certificate-stamp.png";
import ImgHHRLogo from "images/img-certificate-logo.png";
import ImgSignature from "images/img-signature.png";

import "./style.scss";

const CertificateLearning = ({
    userCertificate,
    event,
    father,
    calcDuration,
    functionCargCertificate
}) => {
    const certificateRef = useRef(null);

    const uploadImage = useCallback(async () => {
        const domElement = certificateRef.current;
        functionCargCertificate(certificateRef)
        const canvas = await html2canvas(domElement, {
            scale: 4,
        });
        canvas.style.cssText = `width: 100%; height: auto;`
        if(father?.current?.children.length === 0){
            father.current.appendChild(canvas);
        }else{
            father.current.removeChild(father.current?.children[0]);
            father.current.appendChild(canvas);
        }
    },[father, functionCargCertificate])

    useEffect(() => {
        if(userCertificate.firstName !== undefined && event.id !== undefined){
            uploadImage()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userCertificate, event])

  return (
    <div
        className="skill-cohort-certificate-page-wrapperr-learning"
        id="certificate-panel"
        ref={certificateRef}
    >
        <div className="certificate">
            <div className="certificate-top">
            <div className="certificate-logo">
                <img src={ImgHHRLogo} alt="sidebar-logo" />
            </div>
            <h3 className="certificate-title">
                Hacking HR's Certificate of Participation To
            </h3>
            <h1 className="certificate-username">{`${userCertificate?.firstName} ${userCertificate?.lastName}`}</h1>
            </div>
            <div className="certificate-center">
            <h5 className="certificate-text1 organizer">
                For Successfully Participating in the Hacking HR Event:
            </h5>
            <h3 className="certificate-text2" style={{textAlign: 'center'}}>{event?.title}</h3>
            <h5 className="certificate-text1 organizer">Duration: {calcDuration(event?.startAndEndTimes)} hours</h5>
            </div>
            <div className="certificate-bottom">
            <div className="certificate-bottom-sign">
                <h5 className="certificate-text1 date">{`${moment(
                event?.startDate,"YYYY-MM-DDTHH:mm:ss"
                ).format("ll")} - ${moment(event?.endDate,"YYYY-MM-DDTHH:mm:ss").format("ll")}`}</h5>
                <div className="certificate-divider" />
                <h5 className="certificate-text1">Date</h5>
            </div>
            <div className="certificate-bottom-image">
                <img src={ImgCertificateStamp} alt="certificate-img" />
            </div>
            <div className="certificate-bottom-sign">
                <div className="certificate-signature">
                <img src={ImgSignature} alt="certificate-signature" />
                </div>
                <div className="certificate-divider" />
                <h5 className="certificate-text1 signature">
                Founder at Hacking HR
                </h5>
            </div>
            </div>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CertificateLearning);