import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header__contaniner">
      <div className="header__contaniner__left">
        <Link to="/dashboard" className="loogo__wrapper">
          <img src={Logo} alt="Logo" className="header__img" />
        </Link>
        <div className="header__input__wrappper">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7885 19.4515L14.5787 15.2386L18.7885 19.4515ZM16.9117 9.60827C16.9117 11.7216 16.0713 13.7484 14.5754 15.2427C13.0795 16.7371 11.0506 17.5766 8.93508 17.5766C6.81955 17.5766 4.79068 16.7371 3.29478 15.2427C1.79888 13.7484 0.958496 11.7216 0.958496 9.60827C0.958496 7.49494 1.79888 5.46817 3.29478 3.97382C4.79068 2.47947 6.81955 1.63995 8.93508 1.63995C11.0506 1.63995 13.0795 2.47947 14.5754 3.97382C16.0713 5.46817 16.9117 7.49494 16.9117 9.60827V9.60827Z"
              stroke="#E5E4E9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input type="text" className="header__input" placeholder="Search " />
        </div>
      </div>
      <div className="header__contaniner__right">
        <button className="header__contaniner__right__btns">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.51978 17.6044V16.6044C8.96749 16.6044 8.51978 17.0521 8.51978 17.6044H9.51978ZM15.5198 17.6044H16.5198C16.5198 17.0521 16.0721 16.6044 15.5198 16.6044V17.6044ZM9.51978 18.6044H15.5198V16.6044H9.51978V18.6044ZM14.5198 17.6044V18.6044H16.5198V17.6044H14.5198ZM10.5198 18.6044V17.6044H8.51978V18.6044H10.5198ZM12.5198 20.6044C11.4152 20.6044 10.5198 19.7089 10.5198 18.6044H8.51978C8.51978 20.8135 10.3106 22.6044 12.5198 22.6044V20.6044ZM14.5198 18.6044C14.5198 19.7089 13.6243 20.6044 12.5198 20.6044V22.6044C14.7289 22.6044 16.5198 20.8135 16.5198 18.6044H14.5198Z"
              fill="#E5E4E9"
            />
            <path
              d="M4.81267 15.3115L4.10556 14.6044L4.10556 14.6044L4.81267 15.3115ZM5.32349 14.8006L6.0306 15.5077L6.0306 15.5077L5.32349 14.8006ZM19.716 14.8006L20.4232 14.0935L20.4232 14.0935L19.716 14.8006ZM20.2269 15.3115L20.934 14.6044L20.934 14.6044L20.2269 15.3115ZM12.5198 3.60434L12.5198 4.60434L12.5198 3.60434ZM19.5198 16.6044H5.51978V18.6044H19.5198V16.6044ZM5.51978 16.6044V16.0186H3.51978V16.6044H5.51978ZM5.51977 16.0186L6.0306 15.5077L4.61639 14.0935L4.10556 14.6044L5.51977 16.0186ZM6.51978 14.3268V10.6043H4.51978V14.3268H6.51978ZM18.5198 10.6043V14.3267H20.5198V10.6043H18.5198ZM19.0089 15.5077L19.5198 16.0186L20.934 14.6044L20.4232 14.0935L19.0089 15.5077ZM19.5198 16.0186V16.6044H21.5198V16.0186H19.5198ZM19.5198 16.0186L19.5198 16.0186H21.5198C21.5198 15.4881 21.3091 14.9794 20.934 14.6044L19.5198 16.0186ZM18.5198 14.3267C18.5198 14.7697 18.6957 15.1945 19.0089 15.5077L20.4232 14.0935C20.485 14.1554 20.5198 14.2393 20.5198 14.3267H18.5198ZM20.5198 10.6043C20.5198 6.18605 16.938 2.60433 12.5198 2.60434L12.5198 4.60434C15.8335 4.60433 18.5198 7.29063 18.5198 10.6043H20.5198ZM6.51978 10.6043C6.51978 7.29064 9.20606 4.60435 12.5198 4.60434L12.5198 2.60434C8.10149 2.60435 4.51978 6.18607 4.51978 10.6043H6.51978ZM6.0306 15.5077C6.34381 15.1945 6.51978 14.7697 6.51978 14.3268H4.51978C4.51978 14.2393 4.55453 14.1554 4.61639 14.0935L6.0306 15.5077ZM5.51978 16.0186L5.51978 16.0186L4.10556 14.6044C3.73049 14.9794 3.51978 15.4881 3.51978 16.0186H5.51978ZM5.51978 16.6044H3.51978C3.51978 17.7089 4.41521 18.6044 5.51978 18.6044V16.6044ZM19.5198 18.6044C20.6243 18.6044 21.5198 17.7089 21.5198 16.6044H19.5198V18.6044Z"
              fill="#E5E4E9"
            />
          </svg>
        </button>
        <button className="header__contaniner__right__btns">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1597 5.60437H4.15967C3.60738 5.60437 3.15967 6.05209 3.15967 6.60437V19.5237C3.15967 20.3623 4.1296 20.8284 4.78436 20.3046L7.88575 17.8235C8.06307 17.6817 8.28338 17.6044 8.51045 17.6044H20.1597C20.712 17.6044 21.1597 17.1567 21.1597 16.6044V6.60437C21.1597 6.05209 20.712 5.60437 20.1597 5.60437Z"
              stroke="#E5E4E9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.15967 10.6044C8.60738 10.6044 8.15967 11.0521 8.15967 11.6044C8.15967 12.1567 8.60738 12.6044 9.15967 12.6044V10.6044ZM15.1597 12.6044C15.712 12.6044 16.1597 12.1567 16.1597 11.6044C16.1597 11.0521 15.712 10.6044 15.1597 10.6044V12.6044ZM9.15967 12.6044H15.1597V10.6044H9.15967V12.6044Z"
              fill="#E5E4E9"
            />
          </svg>
        </button>
        <button className="header__contaniner__right__btns">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7998 16.6044C15.0089 16.6044 16.7998 14.8135 16.7998 12.6044C16.7998 10.3952 15.0089 8.60437 12.7998 8.60437C10.5907 8.60437 8.7998 10.3952 8.7998 12.6044C8.7998 14.8135 10.5907 16.6044 12.7998 16.6044Z"
              stroke="#E5E4E9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.9011 8.43056L20.767 7.93037L20.767 7.93036L19.9011 8.43056ZM19.9669 8.54441L19.101 9.0446L19.101 9.0446L19.9669 8.54441ZM20.7264 9.29178L21.2126 8.41791L21.2126 8.4179L20.7264 9.29178ZM22.2776 10.1547L21.7914 11.0286L21.7914 11.0286L22.2776 10.1547ZM22.7914 11.0263L21.7914 11.0286L21.7914 11.0286L22.7914 11.0263ZM22.7986 14.1781L21.7986 14.1804L21.7986 14.1804L22.7986 14.1781ZM22.2833 15.0551L21.7986 14.1804L21.7986 14.1804L22.2833 15.0551ZM20.7284 15.9167L21.2131 16.7914L21.2131 16.7914L20.7284 15.9167ZM19.966 16.6657L19.1001 16.1655L19.1001 16.1655L19.966 16.6657ZM19.9011 16.778L20.767 17.2782L20.7671 17.2782L19.9011 16.778ZM19.6332 17.8121L18.6334 17.8289L18.6334 17.8289L19.6332 17.8121ZM19.6632 19.593L18.6634 19.6098L18.6634 19.6098L19.6632 19.593ZM19.1653 20.4747L18.6634 19.6098L18.6634 19.6098L19.1653 20.4747ZM16.4373 22.058L16.9393 22.9229L16.9393 22.9229L16.4373 22.058ZM15.4207 22.0504L15.9354 21.1931L15.9354 21.1931L15.4207 22.0504ZM13.8946 21.1343L13.3799 21.9916L13.3799 21.9916L13.8946 21.1343ZM11.706 21.1331L12.2197 21.991L12.2197 21.991L11.706 21.1331ZM10.1869 22.0427L9.67321 21.1847L9.67321 21.1847L10.1869 22.0427ZM9.17393 22.0511L9.67321 21.1847L9.67321 21.1847L9.17393 22.0511ZM6.43729 20.4742L6.93658 19.6077L6.93658 19.6077L6.43729 20.4742ZM5.93672 19.5908L6.93658 19.6077L6.93658 19.6077L5.93672 19.5908ZM5.96665 17.8177L4.9668 17.8008L4.9668 17.8008L5.96665 17.8177ZM5.7027 16.7904L6.57058 16.2936L6.57058 16.2936L5.7027 16.7904ZM5.63318 16.6689L4.7653 17.1657L4.7653 17.1657L5.63318 16.6689ZM4.86971 15.9147L4.38356 16.7886L4.38356 16.7886L4.86971 15.9147ZM3.32228 15.0539L2.83614 15.9278L2.83614 15.9278L3.32228 15.0539ZM2.80843 14.1823L1.80843 14.1846L2.80843 14.1823ZM2.80127 11.0305L3.80127 11.0282L2.80127 11.0305ZM3.31655 10.1535L3.80127 11.0282L3.80127 11.0282L3.31655 10.1535ZM4.87144 9.29185L4.38673 8.41717L4.38673 8.41717L4.87144 9.29185ZM5.63384 8.54289L4.76793 8.04269L4.76792 8.0427L5.63384 8.54289ZM5.69873 8.43056L6.56464 8.93075L6.56464 8.93075L5.69873 8.43056ZM5.96662 7.39653L6.96647 7.3797L6.96647 7.3797L5.96662 7.39653ZM5.93665 5.61562L4.93679 5.63244L4.93679 5.63244L5.93665 5.61562ZM6.43454 4.73391L6.93651 5.5988L6.93651 5.59879L6.43454 4.73391ZM9.16252 3.15062L9.66449 4.0155L9.66449 4.0155L9.16252 3.15062ZM10.1792 3.15814L9.66449 4.0155L9.66449 4.0155L10.1792 3.15814ZM11.7053 4.07431L11.1906 4.93167L11.1906 4.93167L11.7053 4.07431ZM13.8938 4.0755L13.3801 3.21755L13.3801 3.21755L13.8938 4.0755ZM15.4129 3.16592L14.8992 2.30796L14.8992 2.30796L15.4129 3.16592ZM16.4259 3.15744L16.9252 2.291L16.9252 2.291L16.4259 3.15744ZM19.1626 4.73444L19.6619 3.86801L19.6619 3.86801L19.1626 4.73444ZM19.6632 5.6177L18.6633 5.60088L18.6633 5.60088L19.6632 5.6177ZM19.6332 7.39653L18.6334 7.3797L18.6334 7.37971L19.6332 7.39653ZM19.0352 8.93075L19.101 9.0446L20.8328 8.04422L20.767 7.93037L19.0352 8.93075ZM20.2403 10.1657L21.7914 11.0286L22.7637 9.28081L21.2126 8.41791L20.2403 10.1657ZM21.7914 11.0286L21.7986 14.1804L23.7986 14.1759L23.7914 11.024L21.7914 11.0286ZM21.7986 14.1804L20.2437 15.0421L21.2131 16.7914L22.768 15.9297L21.7986 14.1804ZM19.1001 16.1655L19.0352 16.2778L20.7671 17.2782L20.8319 17.1659L19.1001 16.1655ZM18.6334 17.8289L18.6634 19.6098L20.6631 19.5761L20.6331 17.7952L18.6334 17.8289ZM18.6634 19.6098L15.9354 21.1931L16.9393 22.9229L19.6673 21.3396L18.6634 19.6098ZM15.9354 21.1931L14.4093 20.2769L13.3799 21.9916L14.9059 22.9078L15.9354 21.1931ZM12.8652 19.849H12.7335V21.849H12.8652V19.849ZM11.1923 20.2751L9.67321 21.1847L10.7007 22.9006L12.2197 21.991L11.1923 20.2751ZM9.67321 21.1847L6.93658 19.6077L5.93801 21.3406L8.67464 22.9176L9.67321 21.1847ZM6.93658 19.6077L6.96651 17.8346L4.9668 17.8008L4.93686 19.574L6.93658 19.6077ZM6.57058 16.2936L6.50106 16.1722L4.7653 17.1657L4.83482 17.2872L6.57058 16.2936ZM5.35585 15.0409L3.80843 14.18L2.83614 15.9278L4.38356 16.7886L5.35585 15.0409ZM3.80843 14.18L3.80127 11.0282L1.80127 11.0327L1.80843 14.1846L3.80843 14.18ZM3.80127 11.0282L5.35616 10.1665L4.38673 8.41717L2.83184 9.27884L3.80127 11.0282ZM6.49975 9.04308L6.56464 8.93075L4.83281 7.93036L4.76793 8.04269L6.49975 9.04308ZM6.96647 7.3797L6.93651 5.59879L4.93679 5.63244L4.96676 7.41335L6.96647 7.3797ZM6.93651 5.59879L9.66449 4.0155L8.66055 2.28573L5.93257 3.86902L6.93651 5.59879ZM9.66449 4.0155L11.1906 4.93167L12.22 3.21695L10.6939 2.30078L9.66449 4.0155ZM12.7347 5.35959H12.8664V3.35959H12.7347V5.35959ZM14.4076 4.93346L15.9267 4.02388L14.8992 2.30796L13.3801 3.21755L14.4076 4.93346ZM15.9267 4.02388L18.6633 5.60088L19.6619 3.86801L16.9252 2.291L15.9267 4.02388ZM18.6633 5.60088L18.6334 7.3797L20.6331 7.41335L20.663 5.63453L18.6633 5.60088ZM18.6633 5.60088L18.6633 5.60088L20.663 5.63453C20.6753 4.90747 20.2919 4.23107 19.6619 3.86801L18.6633 5.60088ZM15.9267 4.02388L15.9267 4.02388L16.9252 2.291C16.2968 1.92886 15.5215 1.93535 14.8992 2.30796L15.9267 4.02388ZM12.8664 5.35959C13.4092 5.35959 13.9419 5.21232 14.4076 4.93346L13.3801 3.21755C13.2249 3.3105 13.0473 3.35959 12.8664 3.35959V5.35959ZM11.1906 4.93167C11.657 5.21167 12.1907 5.35959 12.7347 5.35959V3.35959C12.5534 3.35959 12.3755 3.31029 12.22 3.21695L11.1906 4.93167ZM9.66449 4.0155L9.66449 4.0155L10.6939 2.30078C10.0694 1.92587 9.29052 1.92011 8.66055 2.28573L9.66449 4.0155ZM6.93651 5.59879L6.93651 5.5988L5.93257 3.86902C5.30558 4.23292 4.9246 4.90761 4.93679 5.63244L6.93651 5.59879ZM6.56464 8.93075C6.83673 8.45973 6.97562 7.92359 6.96647 7.3797L4.96676 7.41335C4.96981 7.59464 4.92351 7.77336 4.83281 7.93037L6.56464 8.93075ZM5.35616 10.1665C5.8322 9.90271 6.22752 9.51436 6.49975 9.04308L4.76792 8.0427C4.67718 8.19979 4.54541 8.32924 4.38673 8.41717L5.35616 10.1665ZM3.80127 11.0282L3.80127 11.0282L2.83184 9.27884C2.19445 9.63207 1.79962 10.304 1.80127 11.0327L3.80127 11.0282ZM3.80843 14.18L3.80843 14.18L1.80843 14.1846C1.81008 14.9089 2.20319 15.5757 2.83614 15.9278L3.80843 14.18ZM6.50106 16.1722C6.22952 15.6978 5.83352 15.3066 5.35585 15.0409L4.38356 16.7886C4.54279 16.8772 4.67478 17.0076 4.7653 17.1657L6.50106 16.1722ZM6.96651 17.8346C6.97563 17.2947 6.83884 16.7623 6.57058 16.2936L4.83482 17.2872C4.92424 17.4434 4.96984 17.6209 4.9668 17.8008L6.96651 17.8346ZM6.93658 19.6077L6.93658 19.6077L4.93686 19.574C4.92459 20.3011 5.30794 20.9775 5.93801 21.3406L6.93658 19.6077ZM9.67321 21.1847L9.67321 21.1847L8.67464 22.9176C9.30309 23.2797 10.0784 23.2732 10.7007 22.9006L9.67321 21.1847ZM12.7335 19.849C12.1906 19.849 11.658 19.9963 11.1923 20.2751L12.2197 21.991C12.375 21.8981 12.5525 21.849 12.7335 21.849V19.849ZM14.4093 20.2769C13.9429 19.9969 13.4091 19.849 12.8652 19.849V21.849C13.0465 21.849 13.2244 21.8983 13.3799 21.9916L14.4093 20.2769ZM15.9354 21.1931L15.9354 21.1931L14.9059 22.9078C15.5304 23.2827 16.3093 23.2885 16.9393 22.9229L15.9354 21.1931ZM18.6634 19.6098L18.6634 19.6098L19.6673 21.3396C20.2943 20.9757 20.6753 20.301 20.6631 19.5761L18.6634 19.6098ZM19.0352 16.2778C18.7631 16.7489 18.6242 17.285 18.6334 17.8289L20.6331 17.7952C20.6301 17.6139 20.6764 17.4352 20.767 17.2782L19.0352 16.2778ZM20.2437 15.0421C19.7677 15.3059 19.3723 15.6942 19.1001 16.1655L20.8319 17.1659C20.9227 17.0088 21.0545 16.8793 21.2131 16.7914L20.2437 15.0421ZM21.7986 14.1804L21.7986 14.1804L22.768 15.9297C23.4054 15.5765 23.8002 14.9046 23.7986 14.1759L21.7986 14.1804ZM21.7914 11.0286L21.7914 11.0286L23.7914 11.024C23.7898 10.2997 23.3967 9.63293 22.7637 9.28081L21.7914 11.0286ZM19.101 9.0446C19.3724 9.51444 19.7661 9.90188 20.2403 10.1657L21.2126 8.4179C21.0545 8.32998 20.9233 8.20083 20.8328 8.04422L19.101 9.0446ZM20.767 7.93036C20.6764 7.77336 20.6301 7.59465 20.6331 7.41335L18.6334 7.37971C18.6242 7.92359 18.7631 8.45973 19.0352 8.93075L20.767 7.93036Z"
              fill="#E5E4E9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
