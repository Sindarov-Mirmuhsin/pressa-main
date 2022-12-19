import React from "react";
import Joi  from "joi-browser";

const phoneRegex = /^[+]998[389][012345789][0-9]{7}$/


const checkToken = (token) =>{
    if(token && !token.match(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)){
        return false
    }
    return true
}

const PostProductSchema = {
    name_uz: Joi.string().required(),
    name_oz: Joi.string().required(),
    name_ru: Joi.string().required(),
    body_uz: Joi.string().min(10).required(),
    body_oz: Joi.string().min(10).required(),
    body_ru: Joi.string().min(10).required(),
    price: Joi.number().min(10000).required(),
    money_for_seller: Joi.number().min(1000).required(),
    discount: Joi.number(),
    category_id: Joi.number().required()
  };
  const PostReferalSchema = {
    title: Joi.string().min(3),
    product_id: Joi.number()
  };

const OnlineIcon = () =>{
    return(
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.63596 14.364C2.80022 13.5283 2.13727 12.5361 1.68497 11.4442C1.23267 10.3522 0.999878 9.18189 0.999878 7.99999C0.999878 6.81808 1.23267 5.64775 1.68497 4.55581C2.13727 3.46387 2.80022 2.47172 3.63596 1.63599M16.364 1.63599C17.1997 2.47172 17.8626 3.46387 18.3149 4.55581C18.7672 5.64775 19 6.81808 19 7.99999C19 9.18189 18.7672 10.3522 18.3149 11.4442C17.8626 12.5361 17.1997 13.5283 16.364 14.364M6.46396 11.535C5.5266 10.5973 5.00002 9.32581 5.00002 7.99999C5.00002 6.67417 5.5266 5.40262 6.46396 4.46499M13.536 4.46499C14.4733 5.40262 14.9999 6.67417 14.9999 7.99999C14.9999 9.32581 14.4733 10.5973 13.536 11.535M11 7.99999C11 8.2652 10.8946 8.51956 10.7071 8.70709C10.5195 8.89463 10.2652 8.99999 9.99996 8.99999C9.73474 8.99999 9.48039 8.89463 9.29285 8.70709C9.10531 8.51956 8.99996 8.2652 8.99996 7.99999C8.99996 7.73477 9.10531 7.48042 9.29285 7.29288C9.48039 7.10534 9.73474 6.99999 9.99996 6.99999C10.2652 6.99999 10.5195 7.10534 10.7071 7.29288C10.8946 7.48042 11 7.73477 11 7.99999Z" stroke="#006AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const OfflineIcon = () =>{
    return(
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.364 3.636C18.1997 4.47173 18.8627 5.46389 19.315 6.55582C19.7673 7.64776 20 8.81809 20 10C20 11.1819 19.7673 12.3522 19.315 13.4442C18.8627 14.5361 18.1997 15.5283 17.364 16.364M17.364 16.364L14.535 13.535M17.364 16.364L20 19M14.536 6.464C15.0004 6.92831 15.3688 7.47956 15.6202 8.08628C15.8715 8.69299 16.0009 9.34328 16.0009 10C16.0009 10.6567 15.8715 11.307 15.6202 11.9137C15.3688 12.5204 15.0004 13.0717 14.536 13.536L11.707 10.707M11.707 10.707C11.8025 10.6148 11.8787 10.5044 11.9311 10.3824C11.9835 10.2604 12.0111 10.1292 12.0122 9.9964C12.0134 9.86362 11.9881 9.73194 11.9378 9.60905C11.8875 9.48615 11.8133 9.3745 11.7194 9.28061C11.6255 9.18671 11.5138 9.11246 11.3909 9.06218C11.268 9.0119 11.1363 8.9866 11.0036 8.98775C10.8708 8.9889 10.7396 9.01649 10.6176 9.0689C10.4956 9.12131 10.3852 9.19749 10.293 9.293M11.707 10.707L10.293 9.293M7.46397 13.536C6.69745 12.7715 6.20104 11.778 6.04997 10.706M4.63597 16.364C3.45018 15.1788 2.61901 13.686 2.23613 12.0538C1.85326 10.4216 1.9339 8.71485 2.46897 7.126M10.293 9.293L1.99997 1" stroke="#006AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const DateIcon = () =>{
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 5V1M14 5V1M5 9H15M3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z" stroke="#006AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const BolimIcon = () =>{
    return(
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V5C1 5.53043 1.21071 6.03914 1.58579 6.41421C1.96086 6.78929 2.46957 7 3 7H5C5.53043 7 6.03914 6.78929 6.41421 6.41421C6.78929 6.03914 7 5.53043 7 5V3C7 2.46957 6.78929 1.96086 6.41421 1.58579C6.03914 1.21071 5.53043 1 5 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579Z" stroke="#006AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.5858 1.58579C11.2107 1.96086 11 2.46957 11 3V5C11 5.53043 11.2107 6.03914 11.5858 6.41421C11.9609 6.78929 12.4696 7 13 7H15C15.5304 7 16.0391 6.78929 16.4142 6.41421C16.7893 6.03914 17 5.53043 17 5V3C17 2.46957 16.7893 1.96086 16.4142 1.58579C16.0391 1.21071 15.5304 1 15 1H13C12.4696 1 11.9609 1.21071 11.5858 1.58579Z" stroke="#006AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.58579 11.5858C1.21071 11.9609 1 12.4696 1 13V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H5C5.53043 17 6.03914 16.7893 6.41421 16.4142C6.78929 16.0391 7 15.5304 7 15V13C7 12.4696 6.78929 11.9609 6.41421 11.5858C6.03914 11.2107 5.53043 11 5 11H3C2.46957 11 1.96086 11.2107 1.58579 11.5858Z" stroke="#006AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.5858 11.5858C11.2107 11.9609 11 12.4696 11 13V15C11 15.5304 11.2107 16.0391 11.5858 16.4142C11.9609 16.7893 12.4696 17 13 17H15C15.5304 17 16.0391 16.7893 16.4142 16.4142C16.7893 16.0391 17 15.5304 17 15V13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11H13C12.4696 11 11.9609 11.2107 11.5858 11.5858Z" stroke="#006AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

const NameIcon = () =>{
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.121 15.804C5.21942 14.6179 7.58958 13.9963 10 14C12.5 14 14.847 14.655 16.879 15.804M13 8C13 8.79565 12.6839 9.55871 12.1213 10.1213C11.5587 10.6839 10.7956 11 10 11C9.20435 11 8.44129 10.6839 7.87868 10.1213C7.31607 9.55871 7 8.79565 7 8C7 7.20435 7.31607 6.44129 7.87868 5.87868C8.44129 5.31607 9.20435 5 10 5C10.7956 5 11.5587 5.31607 12.1213 5.87868C12.6839 6.44129 13 7.20435 13 8ZM19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#006AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const PhoneIcon = () =>{
    return(
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.2001 9.83331C15.0168 9.83331 14.8251 9.77497 14.6418 9.73331C14.2705 9.65149 13.9056 9.54287 13.5501 9.40831C13.1635 9.26766 12.7385 9.27497 12.357 9.42881C11.9755 9.58265 11.6643 9.87217 11.4834 10.2416L11.3001 10.6166C10.4884 10.1651 9.74257 9.60433 9.08342 8.94997C8.42906 8.29082 7.86827 7.54497 7.41675 6.7333L7.76675 6.49997C8.13622 6.31907 8.42573 6.00791 8.57958 5.62638C8.73342 5.24485 8.74073 4.8199 8.60008 4.4333C8.46777 4.07699 8.3592 3.7123 8.27508 3.34164C8.23342 3.1583 8.20008 2.96664 8.17508 2.77497C8.07389 2.18799 7.76644 1.65642 7.3081 1.276C6.84977 0.895585 6.27066 0.691312 5.67508 0.699971H3.17508C2.81594 0.696599 2.46029 0.770649 2.13234 0.91708C1.80439 1.06351 1.51184 1.27888 1.27461 1.54854C1.03738 1.81819 0.861029 2.1358 0.757574 2.47973C0.654119 2.82367 0.625983 3.18585 0.675084 3.54164C1.11903 7.03279 2.71344 10.2765 5.20646 12.7605C7.69948 15.2445 10.949 16.8271 14.4418 17.2583H14.7584C15.3729 17.2592 15.9662 17.0337 16.4251 16.625C16.6887 16.3892 16.8993 16.1001 17.043 15.7769C17.1866 15.4537 17.2601 15.1037 17.2584 14.75V12.25C17.2482 11.6711 17.0374 11.1138 16.662 10.673C16.2866 10.2323 15.7699 9.93549 15.2001 9.83331ZM15.6168 14.8333C15.6166 14.9516 15.5913 15.0686 15.5424 15.1763C15.4935 15.2841 15.4223 15.3802 15.3334 15.4583C15.2403 15.5387 15.1314 15.5988 15.0138 15.6346C14.8961 15.6705 14.7722 15.6814 14.6501 15.6666C11.5292 15.2665 8.63028 13.8387 6.41068 11.6085C4.19108 9.37838 2.77709 6.47275 2.39175 3.34997C2.37849 3.2279 2.39011 3.10441 2.42592 2.98696C2.46173 2.86951 2.52098 2.76054 2.60008 2.66664C2.67818 2.57775 2.7743 2.50651 2.88207 2.45765C2.98983 2.4088 3.10676 2.38345 3.22508 2.3833H5.72508C5.91887 2.37899 6.1081 2.44237 6.2602 2.56253C6.4123 2.68269 6.51776 2.85211 6.55842 3.04164C6.59175 3.26942 6.63342 3.49442 6.68342 3.71664C6.77968 4.15593 6.9078 4.58762 7.06675 5.00831L5.90008 5.54997C5.80033 5.59574 5.7106 5.66076 5.63605 5.7413C5.56149 5.82184 5.50358 5.91632 5.46564 6.0193C5.4277 6.12228 5.41048 6.23175 5.41496 6.34141C5.41944 6.45107 5.44553 6.55876 5.49175 6.6583C6.69108 9.22727 8.75612 11.2923 11.3251 12.4916C11.528 12.575 11.7555 12.575 11.9584 12.4916C12.0623 12.4545 12.1579 12.397 12.2394 12.3226C12.3209 12.2482 12.3869 12.1584 12.4334 12.0583L12.9501 10.8916C13.3809 11.0457 13.8206 11.1737 14.2668 11.275C14.489 11.325 14.714 11.3666 14.9417 11.4C15.1313 11.4406 15.3007 11.5461 15.4209 11.6982C15.541 11.8503 15.6044 12.0395 15.6001 12.2333L15.6168 14.8333Z" fill="white"/>
        </svg>
    )
}

const FacebookIcon = () =>{
    return(
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6915 7.86658C11.6151 7.75349 11.512 7.66091 11.3914 7.59698C11.2708 7.53304 11.1363 7.49971 10.9998 7.49992H8.49984V5.83325H10.3332C10.5542 5.83325 10.7661 5.74545 10.9224 5.58917C11.0787 5.43289 11.1665 5.22093 11.1665 4.99992V1.66659C11.1665 1.44557 11.0787 1.23361 10.9224 1.07733C10.7661 0.921049 10.5542 0.833252 10.3332 0.833252H7.6665C6.38462 0.833252 5.15525 1.34248 4.24882 2.2489C3.3424 3.15533 2.83317 4.38471 2.83317 5.66658V7.49992H0.999837C0.778823 7.49992 0.566862 7.58772 0.410582 7.744C0.254301 7.90028 0.166504 8.11224 0.166504 8.33325V11.6666C0.166504 11.8876 0.254301 12.0996 0.410582 12.2558C0.566862 12.4121 0.778823 12.4999 0.999837 12.4999H2.83317V18.3333C2.83317 18.5543 2.92097 18.7662 3.07725 18.9225C3.23353 19.0788 3.44549 19.1666 3.6665 19.1666H7.6665C7.88752 19.1666 8.09948 19.0788 8.25576 18.9225C8.41204 18.7662 8.49984 18.5543 8.49984 18.3333V12.4999H9.6665C9.8334 12.5001 9.99651 12.4501 10.1347 12.3565C10.2729 12.2629 10.3798 12.13 10.4415 11.9749L11.7748 8.64158C11.8252 8.5154 11.8439 8.37882 11.8294 8.24374C11.8148 8.10866 11.7675 7.97919 11.6915 7.86658ZM9.09984 10.8333H7.6665C7.44549 10.8333 7.23353 10.921 7.07725 11.0773C6.92097 11.2336 6.83317 11.4456 6.83317 11.6666V17.4999H4.49984V11.6666C4.49984 11.4456 4.41204 11.2336 4.25576 11.0773C4.09948 10.921 3.88752 10.8333 3.6665 10.8333H1.83317V9.16658H3.6665C3.88752 9.16658 4.09948 9.07879 4.25576 8.92251C4.41204 8.76623 4.49984 8.55427 4.49984 8.33325V5.66658C4.50204 4.82741 4.83637 4.02323 5.42976 3.42984C6.02315 2.83645 6.82733 2.50212 7.6665 2.49992H9.49984V4.16658H8.83317C8.55102 4.12548 8.26343 4.14273 7.98822 4.21727C7.713 4.29181 7.45602 4.42204 7.23317 4.59992C7.09794 4.7415 6.99278 4.909 6.92403 5.09232C6.85528 5.27565 6.82438 5.47099 6.83317 5.66658V8.33325C6.83317 8.55427 6.92097 8.76623 7.07725 8.92251C7.23353 9.07879 7.44549 9.16658 7.6665 9.16658H9.7665L9.09984 10.8333Z" fill="white"/>
        </svg>
    )
}

const InstaIcon = () =>{
    return(
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4498 3.55008C13.2521 3.55008 13.0587 3.60873 12.8943 3.71861C12.7298 3.82849 12.6016 3.98467 12.526 4.1674C12.4503 4.35012 12.4305 4.55119 12.4691 4.74517C12.5076 4.93915 12.6029 5.11734 12.7427 5.25719C12.8826 5.39704 13.0608 5.49228 13.2547 5.53087C13.4487 5.56945 13.6498 5.54965 13.8325 5.47396C14.0152 5.39827 14.1714 5.2701 14.2813 5.10565C14.3912 4.9412 14.4498 4.74786 14.4498 4.55008C14.4498 4.28486 14.3445 4.03051 14.1569 3.84297C13.9694 3.65544 13.7151 3.55008 13.4498 3.55008ZM17.2832 5.56675C17.267 4.87533 17.1375 4.19125 16.8998 3.54175C16.6879 2.98603 16.3582 2.48281 15.9332 2.06675C15.5205 1.6396 15.0161 1.3119 14.4582 1.10841C13.8104 0.863549 13.1255 0.73109 12.4332 0.716748C11.5498 0.666748 11.2665 0.666748 8.99984 0.666748C6.73317 0.666748 6.44984 0.666748 5.5665 0.716748C4.87413 0.73109 4.18929 0.863549 3.5415 1.10841C2.98457 1.31396 2.48062 1.64138 2.0665 2.06675C1.63936 2.4794 1.31165 2.98378 1.10817 3.54175C0.863305 4.18953 0.730846 4.87438 0.716504 5.56675C0.666504 6.45008 0.666504 6.73342 0.666504 9.00008C0.666504 11.2667 0.666504 11.5501 0.716504 12.4334C0.730846 13.1258 0.863305 13.8106 1.10817 14.4584C1.31165 15.0164 1.63936 15.5208 2.0665 15.9334C2.48062 16.3588 2.98457 16.6862 3.5415 16.8917C4.18929 17.1366 4.87413 17.2691 5.5665 17.2834C6.44984 17.3334 6.73317 17.3334 8.99984 17.3334C11.2665 17.3334 11.5498 17.3334 12.4332 17.2834C13.1255 17.2691 13.8104 17.1366 14.4582 16.8917C15.0161 16.6883 15.5205 16.3606 15.9332 15.9334C16.36 15.5189 16.6901 15.0152 16.8998 14.4584C17.1375 13.8089 17.267 13.1248 17.2832 12.4334C17.2832 11.5501 17.3332 11.2667 17.3332 9.00008C17.3332 6.73342 17.3332 6.45008 17.2832 5.56675ZM15.7832 12.3334C15.7771 12.8624 15.6813 13.3865 15.4998 13.8834C15.3668 14.2461 15.1531 14.5738 14.8748 14.8417C14.6045 15.1172 14.2775 15.3304 13.9165 15.4667C13.4196 15.6482 12.8955 15.744 12.3665 15.7501C11.5332 15.7917 11.2248 15.8001 9.03317 15.8001C6.8415 15.8001 6.53317 15.8001 5.69984 15.7501C5.15058 15.7604 4.60367 15.6758 4.08317 15.5001C3.73799 15.3568 3.42597 15.1441 3.1665 14.8751C2.88991 14.6074 2.67887 14.2794 2.54984 13.9167C2.34638 13.4127 2.23354 12.8767 2.2165 12.3334C2.2165 11.5001 2.1665 11.1917 2.1665 9.00008C2.1665 6.80841 2.1665 6.50008 2.2165 5.66675C2.22024 5.12596 2.31896 4.59004 2.50817 4.08341C2.65488 3.73167 2.88006 3.41813 3.1665 3.16675C3.41968 2.88022 3.73258 2.65266 4.08317 2.50008C4.59113 2.31678 5.1265 2.22098 5.6665 2.21675C6.49984 2.21675 6.80817 2.16675 8.99984 2.16675C11.1915 2.16675 11.4998 2.16675 12.3332 2.21675C12.8621 2.22282 13.3863 2.31862 13.8832 2.50008C14.2619 2.64062 14.6017 2.86912 14.8748 3.16675C15.1479 3.42273 15.3613 3.73569 15.4998 4.08341C15.685 4.59086 15.7809 5.12656 15.7832 5.66675C15.8248 6.50008 15.8332 6.80841 15.8332 9.00008C15.8332 11.1917 15.8248 11.5001 15.7832 12.3334ZM8.99984 4.72508C8.15468 4.72673 7.32897 4.97885 6.62705 5.4496C5.92513 5.92034 5.37849 6.58858 5.0562 7.36988C4.73391 8.15117 4.65044 9.01047 4.81633 9.83919C4.98222 10.6679 5.39003 11.4289 5.98823 12.0259C6.58643 12.6229 7.34818 13.0293 8.17722 13.1935C9.00626 13.3578 9.86539 13.2727 10.6461 12.9489C11.4267 12.6251 12.0939 12.0771 12.5633 11.3743C13.0327 10.6714 13.2832 9.84524 13.2832 9.00008C13.2843 8.43767 13.1742 7.88059 12.9592 7.36088C12.7442 6.84117 12.4286 6.36909 12.0306 5.97179C11.6325 5.57449 11.1598 5.25981 10.6397 5.04586C10.1195 4.8319 9.56225 4.72288 8.99984 4.72508ZM8.99984 11.7751C8.45099 11.7751 7.91448 11.6123 7.45813 11.3074C7.00178 11.0025 6.6461 10.5691 6.43607 10.062C6.22604 9.55496 6.17108 8.997 6.27816 8.45871C6.38523 7.92041 6.64953 7.42595 7.03762 7.03786C7.42571 6.64977 7.92016 6.38548 8.45846 6.2784C8.99676 6.17133 9.55472 6.22628 10.0618 6.43632C10.5688 6.64635 11.0022 7.00203 11.3072 7.45837C11.6121 7.91472 11.7748 8.45124 11.7748 9.00008C11.7748 9.3645 11.7031 9.72535 11.5636 10.062C11.4241 10.3987 11.2197 10.7046 10.9621 10.9623C10.7044 11.22 10.3985 11.4244 10.0618 11.5638C9.72511 11.7033 9.36426 11.7751 8.99984 11.7751Z" fill="white"/>
</svg>
    )
}

const TgIcon = () =>{
    return(
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5541 1.02315C18.3168 0.825761 18.0305 0.696396 17.7255 0.64882C17.4206 0.601245 17.1084 0.63724 16.8223 0.752974L1.88821 6.78243C1.56884 6.91384 1.29698 7.13926 1.10871 7.42878C0.920449 7.7183 0.824686 8.05824 0.834134 8.40346C0.843581 8.74868 0.957794 9.08286 1.16161 9.36165C1.36543 9.64045 1.64921 9.85066 1.9753 9.9644L4.99613 11.015L6.67988 16.583C6.70276 16.6574 6.73597 16.7282 6.77853 16.7934C6.78499 16.8034 6.7941 16.8108 6.80096 16.8205C6.85013 16.8891 6.90956 16.9498 6.97715 17.0003C6.99638 17.015 7.01479 17.0287 7.03534 17.0417C7.11445 17.0942 7.20206 17.1326 7.29428 17.1552L7.30414 17.156L7.30974 17.1584C7.36518 17.1697 7.42161 17.1754 7.4782 17.1755C7.48364 17.1755 7.48847 17.1729 7.49386 17.1728C7.57925 17.1713 7.66389 17.1566 7.74477 17.1292C7.76359 17.1228 7.77971 17.1121 7.79797 17.1043C7.85828 17.0793 7.91543 17.0473 7.96821 17.0089C8.01048 16.9732 8.05276 16.9376 8.09506 16.902L10.3469 14.4159L13.7054 17.0176C14.0011 17.2478 14.365 17.3729 14.7398 17.3732C15.1324 17.3727 15.513 17.2373 15.8176 16.9895C16.1222 16.7418 16.3324 16.3968 16.413 16.0125L19.1319 2.66541C19.1935 2.36501 19.1723 2.05351 19.0705 1.76423C18.9687 1.47496 18.7902 1.2188 18.5541 1.02315ZM7.80863 11.2803C7.69308 11.3954 7.61409 11.5421 7.58158 11.7019L7.32365 12.9552L6.67027 10.7943L10.058 9.03018L7.80863 11.2803ZM14.7268 15.7L10.7578 12.6255C10.5918 12.4972 10.3835 12.4362 10.1745 12.4546C9.96542 12.473 9.77099 12.5694 9.62991 12.7248L8.90874 13.5208L9.1636 12.2821L15.0661 6.37958C15.207 6.23888 15.2928 6.05237 15.3081 5.85384C15.3233 5.65532 15.2669 5.45789 15.1492 5.29734C15.0314 5.13678 14.8601 5.02371 14.6661 4.9786C14.4722 4.9335 14.2685 4.95934 14.092 5.05145L5.62092 9.46198L2.51729 8.32622L17.4994 2.33254L14.7268 15.7Z" fill="white"/>
</svg>
    )
}
const HomeICon = () =>{
    return(
        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.0001 7.00001L11.0001 1.74001C10.4501 1.24805 9.73803 0.976074 9.00009 0.976074C8.26216 0.976074 7.55012 1.24805 7.00009 1.74001L1.00009 7.00001C0.682463 7.28408 0.428995 7.63256 0.256567 8.02225C0.0841385 8.41194 -0.00329256 8.83389 9.47941e-05 9.26001V18C9.47941e-05 18.7957 0.316165 19.5587 0.878775 20.1213C1.44138 20.6839 2.20445 21 3.00009 21H15.0001C15.7957 21 16.5588 20.6839 17.1214 20.1213C17.684 19.5587 18.0001 18.7957 18.0001 18V9.25001C18.0021 8.82557 17.9139 8.40555 17.7416 8.01769C17.5692 7.62983 17.3165 7.28296 17.0001 7.00001ZM11.0001 19H7.00009V14C7.00009 13.7348 7.10545 13.4804 7.29299 13.2929C7.48052 13.1054 7.73488 13 8.00009 13H10.0001C10.2653 13 10.5197 13.1054 10.7072 13.2929C10.8947 13.4804 11.0001 13.7348 11.0001 14V19ZM16.0001 18C16.0001 18.2652 15.8947 18.5196 15.7072 18.7071C15.5197 18.8946 15.2653 19 15.0001 19H13.0001V14C13.0001 13.2044 12.684 12.4413 12.1214 11.8787C11.5588 11.3161 10.7957 11 10.0001 11H8.00009C7.20444 11 6.44138 11.3161 5.87877 11.8787C5.31616 12.4413 5.00009 13.2044 5.00009 14V19H3.00009C2.73488 19 2.48052 18.8946 2.29299 18.7071C2.10545 18.5196 2.00009 18.2652 2.00009 18V9.25001C2.00027 9.10802 2.03069 8.9677 2.08931 8.83839C2.14794 8.70907 2.23343 8.59372 2.3401 8.50001L8.34009 3.25001C8.52258 3.08969 8.75719 3.00127 9.00009 3.00127C9.243 3.00127 9.47761 3.08969 9.66009 3.25001L15.6601 8.50001C15.7668 8.59372 15.8523 8.70907 15.9109 8.83839C15.9695 8.9677 15.9999 9.10802 16.0001 9.25001V18Z" fill="#006AFF"/>
        </svg>
    )
}

const UploadIcon = () =>{
    return(
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.44466 11.6111C3.67856 11.612 2.93908 11.3301 2.3679 10.8196C1.79671 10.309 1.43398 9.6057 1.3492 8.84431C1.26441 8.08291 1.46354 7.317 1.90844 6.69332C2.35333 6.06964 3.0127 5.63203 3.76022 5.46434C3.54394 4.45564 3.73722 3.40233 4.29755 2.53613C4.85787 1.66993 5.73935 1.06179 6.74805 0.845509C7.75676 0.629225 8.81007 0.822507 9.67627 1.38283C10.5425 1.94316 11.1506 2.82464 11.3669 3.83334H11.4447C12.4091 3.83237 13.3394 4.18978 14.0551 4.83619C14.7709 5.48259 15.2209 6.37188 15.3178 7.3314C15.4147 8.29093 15.1516 9.25224 14.5796 10.0287C14.0077 10.8052 13.1676 11.3414 12.2224 11.5333M10.6669 9.27779L8.33355 6.94445M8.33355 6.94445L6.00022 9.27779M8.33355 6.94445V16.2778" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export {
    phoneRegex,
    checkToken,
    PostProductSchema,
    PostReferalSchema,
    OnlineIcon,
    OfflineIcon,
    DateIcon,
    BolimIcon,
    NameIcon,
    PhoneIcon,
    FacebookIcon,
    InstaIcon,
    TgIcon,
    HomeICon,
    UploadIcon
}