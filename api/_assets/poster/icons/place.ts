import { ExtraPlaceInfo } from './../../../_lib/types';
import { TextColors, Place } from '../../../_lib/types';
const placeIcon = (color: TextColors = 'white', place: Place = 'twitter', extraPlaceInfo?: ExtraPlaceInfo) => {
  return place == 'discord'
    ? `<svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4347 18.9583L14.9624 17.2069C14.0331 17.368 13.0803 17.4464 12.1557 17.4512C11.1673 17.4562 10.1426 17.3775 9.14416 17.2007L7.52642 18.9577L6.88952 18.9486C4.56875 18.9155 2.90641 18.1124 1.8163 17.2779C1.27779 16.8657 0.886082 16.4518 0.623169 16.1314C0.491435 15.9708 0.391001 15.8324 0.319671 15.7276C0.28397 15.6751 0.25544 15.6309 0.233816 15.5962C0.223 15.5789 0.213899 15.5639 0.20648 15.5516L0.196604 15.5349L0.192601 15.528L0.190832 15.525L0.190005 15.5236C0.189607 15.5229 0.189216 15.5222 1.42381 14.8135C1.42381 14.8135 2.95085 17.4696 6.90985 17.5261L8.21067 16.1133C7.66803 15.9455 7.20804 15.7393 6.82124 15.5211C5.51483 14.784 5.04347 13.9093 5.04347 13.9093C5.60262 14.4274 6.32075 14.8487 7.13973 15.1752C7.16895 15.1868 7.1983 15.1983 7.22778 15.2098C7.59301 15.3511 7.97754 15.4739 8.37635 15.5784C8.99356 15.7401 9.64498 15.8579 10.312 15.9323C11.4886 16.0637 12.7137 16.0602 13.8851 15.9255C14.5322 15.851 15.1629 15.7365 15.7599 15.5825C17.1276 15.2296 18.3187 14.6696 19.1262 13.9093C19.1262 13.9093 18.5925 14.8426 17.2945 15.5572C16.9023 15.7731 16.4404 15.9691 15.9024 16.1133L17.0901 17.5261C21.0491 17.4696 22.5762 14.8135 22.5762 14.8135C23.8108 15.5222 23.8104 15.5229 23.81 15.5236L23.8092 15.525L23.8074 15.528L23.8034 15.5349L23.7935 15.5516C23.7883 15.5603 23.7822 15.5704 23.7752 15.5817C23.7723 15.5863 23.7693 15.5912 23.7662 15.5962C23.7446 15.6309 23.716 15.6751 23.6803 15.7276C23.609 15.8324 23.5086 15.9708 23.3768 16.1314C23.1139 16.4518 22.7222 16.8657 22.1837 17.2779C21.0936 18.1124 19.4313 18.9155 17.1105 18.9486L16.4347 18.9583ZM20.6728 5.73598C21.4434 7.57401 22.5762 10.9354 22.5762 14.8135L23.8108 15.5222L24 15.1931V14.8135C24 11.6728 23.3065 8.87096 22.6231 6.86685C22.2801 5.86111 21.9362 5.04617 21.6753 4.47762C21.5448 4.19309 21.4347 3.96951 21.3554 3.8138C21.3158 3.73592 21.2838 3.67494 21.2608 3.63174C21.2493 3.61013 21.24 3.59296 21.2331 3.58033L21.2247 3.56481L21.2218 3.55962L21.2207 3.55768C21.2206 3.55738 21.22 3.55628 20.4797 3.96613C20.4797 3.96613 20.4797 3.96612 20.4797 3.96613L21.2199 3.55617L21.061 3.26969L20.7927 3.08148C19.2951 2.0308 17.8541 1.50063 16.7755 1.23323C16.2362 1.0995 15.7851 1.03089 15.4591 0.995646C15.2959 0.978005 15.1635 0.968664 15.0664 0.96373C15.0178 0.961262 14.978 0.959893 14.9475 0.95914L14.9088 0.958414L14.8948 0.958285L14.8891 0.958259L14.8867 0.958254L14.8855 0.958252C14.8851 0.958252 14.8847 0.958252 14.8845 1.5369L14.8844 0.958252H14.385L13.4159 1.73287C13.0493 1.70979 12.6826 1.69659 12.3181 1.69298C11.6966 1.68681 11.0631 1.70829 10.4292 1.75986L9.82749 0.958252H9.11558V1.91108C9.11559 1.91108 9.11558 1.91109 9.11558 1.91108C9.11547 0.958247 9.11497 0.958252 9.11449 0.958252L9.11333 0.958254L9.11086 0.958259L9.10521 0.958285L9.09121 0.958414L9.05249 0.95914C9.02199 0.959893 8.98217 0.961262 8.93359 0.96373C8.83647 0.968664 8.70407 0.978005 8.5409 0.995646C8.21487 1.03089 7.76385 1.0995 7.22445 1.23323C6.1459 1.50063 4.7049 2.0308 3.20727 3.08148L2.939 3.26969L2.7801 3.55617L3.56704 3.99196C2.78006 3.55625 2.78027 3.55587 2.7801 3.55617L2.77819 3.55962L2.77534 3.56481L2.76686 3.58033C2.75999 3.59296 2.75073 3.61013 2.73922 3.63174C2.71622 3.67494 2.68425 3.73592 2.6446 3.8138C2.56532 3.96951 2.45522 4.19309 2.32467 4.47762C2.0638 5.04617 1.71988 5.86111 1.37691 6.86685C0.693474 8.87096 0 11.6728 0 14.8135V15.1931L0.189216 15.5222L1.42381 14.8135C1.42381 9.61389 3.46012 5.34314 3.92967 4.42748C3.9399 4.40751 3.9494 4.38914 3.95811 4.37239C3.95809 4.37243 3.95813 4.37235 3.95811 4.37239C4.00142 4.28911 4.02544 4.24581 4.02544 4.24581C4.04088 4.23497 4.05632 4.2242 4.07176 4.21348C6.71181 2.38092 9.11558 2.38092 9.11558 2.38092L9.28526 2.60696C9.22814 2.62271 9.17158 2.63863 9.11559 2.6547C8.89998 2.71661 8.69273 2.7809 8.4937 2.84695C6.54428 3.49395 5.38341 4.31058 4.8829 4.72054C4.68569 4.88207 4.59101 4.98046 4.59101 4.98046C4.70573 4.90292 4.82408 4.82789 4.94582 4.75535C6.09868 4.06843 7.55537 3.6054 9.11572 3.35097C9.23509 3.3315 9.35506 3.31326 9.47555 3.29623C10.1248 3.20446 10.7891 3.14795 11.4543 3.1256C11.53 3.12306 11.6058 3.12096 11.6815 3.1193C12.6117 3.09892 13.5408 3.14511 14.4303 3.25495C14.5829 3.27379 14.7343 3.2945 14.8843 3.31707C14.9944 3.33363 15.1038 3.35119 15.2123 3.36975C15.3969 3.4013 15.5792 3.43572 15.7588 3.47299C16.6717 3.66248 17.5146 3.92554 18.2382 4.25839C18.5503 4.40197 18.8402 4.55854 19.104 4.72779C19.229 4.80799 19.348 4.89102 19.4608 4.97688C19.4624 4.97807 19.464 4.97927 19.4655 4.98046C19.4658 4.98022 19.466 4.97995 19.4662 4.97965C19.4672 4.97778 19.4669 4.97484 19.4651 4.97088C19.4544 4.94748 19.394 4.88834 19.2874 4.80245C19.2491 4.77155 19.2047 4.73718 19.1546 4.69977C18.9588 4.55353 18.6743 4.36077 18.3115 4.14649C17.572 3.70969 16.5071 3.18347 15.2036 2.77963C15.0988 2.74713 14.9923 2.71543 14.8844 2.68463C14.7913 2.65805 14.697 2.63213 14.6016 2.60696L14.8844 2.38092C14.8844 2.38092 17.3164 2.38092 19.9746 4.24581C19.9746 4.24581 19.9821 4.25937 19.9963 4.28596C20.0721 4.42752 20.3384 4.93829 20.6728 5.73598Z" fill="${color}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.62788 10.737C8.79441 10.737 9.07011 10.5685 9.07011 10.1818C9.07011 9.79509 8.79441 9.62652 8.62788 9.62652C8.46136 9.62652 8.18566 9.79509 8.18566 10.1818C8.18566 10.5685 8.46136 10.737 8.62788 10.737ZM10.4928 10.1818C10.4928 11.2741 9.65783 12.1597 8.62788 12.1597C7.59793 12.1597 6.76299 11.2741 6.76299 10.1818C6.76299 9.0894 7.59793 8.20386 8.62788 8.20386C9.65783 8.20386 10.4928 9.0894 10.4928 10.1818Z" fill="${color}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1833 10.737C15.3498 10.737 15.6255 10.5685 15.6255 10.1818C15.6255 9.79509 15.3498 9.62652 15.1833 9.62652C15.0168 9.62652 14.7411 9.79509 14.7411 10.1818C14.7411 10.5685 15.0168 10.737 15.1833 10.737ZM17.0482 10.1818C17.0482 11.2741 16.2132 12.1597 15.1833 12.1597C14.1533 12.1597 13.3184 11.2741 13.3184 10.1818C13.3184 9.0894 14.1533 8.20386 15.1833 8.20386C16.2132 8.20386 17.0482 9.0894 17.0482 10.1818Z" fill="${color}"/>
    </svg>
    
  `
    : place == 'twitter'
    ? `<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 1.68975L22.4366 4.964C22.2438 5.36777 21.941 5.77464 21.6108 6.1624C21.3804 6.43283 21.1252 6.67847 20.848 6.90096C20.8184 8.32746 20.4648 9.72316 20.0208 10.8687L20.017 10.8785L20.0131 10.8882C19.0455 13.2826 17.5385 15.2553 15.3745 16.5924L15.3556 16.6041L15.3362 16.6151C13.0697 17.9047 10.4973 18.1471 8.22596 17.9289L8.21586 17.9279L8.20578 17.9268C6.65732 17.7504 5.02052 17.2402 3.72417 16.1791L0 13.1305L4.61243 13.6774C5.22077 13.7496 5.81781 13.7155 6.39162 13.5949C5.87395 13.0585 5.47512 12.4171 5.2055 11.7651L4.49292 10.042C4.4845 10.0262 4.47617 10.0102 4.46792 9.99422L4.45779 9.97457L4.44825 9.95456C4.3385 9.72446 4.24605 9.49441 4.17041 9.26216L4.13676 9.1808L4.14531 9.18303C3.9886 8.67523 3.91155 8.15567 3.90894 7.6007L3.89849 5.38791L3.92381 5.40113C3.89567 4.38254 4.17077 3.49503 4.48027 2.77196L5.24185 0.99275L6.51091 2.37619C7.594 3.55689 8.76572 4.48157 10.0777 5.04341C10.5614 5.23925 11.0377 5.38431 11.5131 5.47797C11.5956 4.83962 11.7875 4.203 12.1332 3.605L12.1474 3.58051L12.1624 3.55669C12.9056 2.38214 13.9715 1.74214 15.0569 1.4391L15.0699 1.43546L15.083 1.43213C16.4982 1.07218 17.9035 1.44224 18.9491 2.29306C19.3793 2.17318 19.8128 1.96699 20.2151 1.7293L23.1415 0L22.3459 2.38981L24 1.68975ZM20.4272 3.7986C20.5697 3.56103 20.687 3.3079 20.7786 3.05261C20.7901 3.02049 20.8012 2.98833 20.8119 2.95616C20.6552 3.04878 20.4884 3.14086 20.3135 3.22824C19.935 3.41737 19.5187 3.58453 19.0845 3.6876C18.9847 3.7113 18.8839 3.73161 18.7824 3.74802C18.7788 3.74862 18.7751 3.74921 18.7714 3.74979C18.7071 3.76001 18.6425 3.76866 18.5777 3.7756C17.8161 2.91864 16.6069 2.47321 15.3671 2.78855C14.5006 3.03046 13.728 3.51603 13.1985 4.35294C12.9746 4.7404 12.8383 5.16232 12.7731 5.60538C12.7073 6.05244 12.714 6.52103 12.7761 6.99749C12.343 6.99571 11.9158 6.95776 11.4917 6.88529C10.8672 6.77855 10.2497 6.59692 9.63118 6.34567C8.52555 5.87392 7.527 5.18762 6.61284 4.35559C6.2714 4.04483 5.94173 3.71374 5.62265 3.3659C5.42176 3.83522 5.26309 4.32838 5.20693 4.85166C5.18117 5.0917 5.17699 5.33809 5.2002 5.59141C5.22251 5.77578 5.26346 5.95564 5.32058 6.13058C5.38296 6.32165 5.46463 6.50684 5.56236 6.68563C5.73864 7.00813 5.96716 7.30977 6.22899 7.58741C6.29852 7.66113 6.37039 7.73316 6.44426 7.80344C6.53674 7.89143 6.63235 7.97667 6.73039 8.05904C6.64722 8.06237 6.56283 8.05901 6.4778 8.05001C6.03176 8.00279 5.56815 7.80033 5.17203 7.59346C5.17354 7.91416 5.20795 8.21512 5.27946 8.51065C5.3393 8.75792 5.42512 9.00139 5.5394 9.24945C5.5482 9.26855 5.55717 9.28767 5.5663 9.30683C5.61808 9.40732 5.67519 9.504 5.73722 9.59692C5.94738 9.91171 6.21398 10.1833 6.52063 10.4134C6.68647 10.5378 6.86402 10.6501 7.05069 10.7505C7.05252 10.7514 7.05434 10.7524 7.05617 10.7534C7.08268 10.7676 7.10937 10.7816 7.13623 10.7953C7.32426 10.8914 7.52089 10.9759 7.72359 11.0489C7.78624 11.0715 7.84948 11.0929 7.91322 11.1133C7.869 11.123 7.82465 11.1318 7.78013 11.1398C7.55532 11.1805 7.32628 11.2028 7.0871 11.2251C6.85433 11.2436 6.59897 11.2513 6.35486 11.1878C6.50546 11.552 6.70289 11.9025 6.9434 12.2179C7.01516 12.312 7.09075 12.4029 7.17008 12.4902C7.17519 12.4959 7.18032 12.5015 7.18546 12.5071C7.21576 12.54 7.24659 12.5724 7.27796 12.6043C7.45468 12.7837 7.64828 12.9451 7.8578 13.0829C8.35911 13.4125 8.95153 13.6071 9.62176 13.5902C9.06733 13.9998 8.45559 14.3485 7.80127 14.6079C7.55048 14.7074 7.29344 14.7937 7.03097 14.8653C6.22311 15.0857 5.36383 15.1666 4.47732 15.0615C5.1978 15.6513 6.07716 16.0518 7.01321 16.2974C7.44529 16.4108 7.88945 16.4913 8.33565 16.5421C10.4638 16.7465 12.7735 16.5065 14.7568 15.3781C16.6587 14.203 17.9902 12.4723 18.8592 10.3218C19.3076 9.16521 19.6307 7.7769 19.5821 6.43881C19.5786 6.39007 19.5741 6.33938 19.5686 6.28674C19.5643 6.24551 19.5594 6.20308 19.5539 6.15945C19.6154 6.12217 19.6756 6.08409 19.7344 6.04519C20.1066 5.79908 20.425 5.52056 20.6898 5.20966C20.9965 4.84961 21.2062 4.55163 21.3188 4.31572C21.1376 4.3924 20.9528 4.46428 20.7647 4.53093C20.5818 4.59571 20.3958 4.65554 20.2069 4.71004C19.9026 4.79784 19.5907 4.8718 19.2724 4.93026C19.521 4.80509 19.744 4.63501 19.9407 4.43465C20.1264 4.24552 20.2887 4.02941 20.4272 3.7986Z" fill="${color}"/>
    </svg>
  `
    : extraPlaceInfo === 'youtube'
    ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.30412 4.30412C1.62102 5.94094 1.04538 8.68544 1 12C1.04538 15.3146 1.62102 18.0591 3.30412 19.6959C4.94094 21.379 7.68544 21.9546 11 22C14.3146 21.9546 17.0591 21.379 18.6959 19.6959C20.379 18.0591 20.9546 15.3146 21 12C20.9546 8.68544 20.379 5.94094 18.6959 4.30412C17.0591 2.62102 14.3146 2.04538 11 2C7.68544 2.04538 4.94094 2.62102 3.30412 4.30412ZM11 3.50015C7.74903 3.54698 5.56396 4.1319 4.37946 5.34989L4.36488 5.36488L4.34989 5.37946C3.1319 6.56396 2.54698 8.74903 2.50015 12C2.54698 15.251 3.1319 17.436 4.34989 18.6205L4.36488 18.6351L4.37946 18.6501C5.56396 19.8681 7.74903 20.453 11 20.4999C14.251 20.453 16.436 19.8681 17.6205 18.6501L17.6351 18.6351L17.6501 18.6205C18.8681 17.436 19.453 15.251 19.4999 12C19.453 8.74903 18.8681 6.56396 17.6501 5.37946L17.6351 5.36488L17.6205 5.34989C16.436 4.1319 14.251 3.54698 11 3.50015Z" fill="${color}" fill-opacity="0.8"/>
    <path d="M14.6697 11.0795L9.23742 8.05625C8.53571 7.66571 7.67258 8.17316 7.67258 8.97637V15.0229C7.67258 15.8261 8.53571 16.3336 9.23742 15.943L14.6697 12.9198C15.3908 12.5183 15.3908 11.481 14.6697 11.0795Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.17258 9.73682V14.2625L13.2384 11.9996L9.17258 9.73682ZM14.6697 12.9198L9.23742 15.943C8.53571 16.3336 7.67258 15.8261 7.67258 15.0229V8.97637C7.67258 8.17316 8.53571 7.66571 9.23742 8.05625L14.6697 11.0795C15.3908 11.481 15.3908 12.5183 14.6697 12.9198Z" fill="${color}" fill-opacity="0.8"/>
    </svg>`
    : extraPlaceInfo === 'binance'
    ? `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2281 0.0945593C11.102 -0.0315203 10.8976 -0.0315198 10.7715 0.0945608L4.05882 6.80761C3.93275 6.93368 3.93275 7.13808 4.05882 7.26415L6.77841 9.98387C6.90448 10.1099 7.10889 10.11 7.23496 9.98388L10.8368 6.38217C10.9268 6.29212 11.0728 6.29212 11.1629 6.38217L14.7667 9.98593C14.8928 10.112 15.0972 10.112 15.2232 9.98593L17.9429 7.26622C18.069 7.14014 18.069 6.93574 17.943 6.80967L11.2281 0.0945593ZM10.8368 1.73492C10.9268 1.64486 11.0728 1.64486 11.1629 1.73492L16.3026 6.87488C16.3927 6.96493 16.3927 7.11093 16.3026 7.20098L15.158 8.34561C15.068 8.43566 14.922 8.43566 14.8319 8.34561L11.2281 4.74186C11.102 4.61579 10.8976 4.61579 10.7715 4.74186L7.16977 8.34354C7.07972 8.43359 6.93371 8.43359 6.84366 8.34353L5.69911 7.19893C5.60906 7.10888 5.60906 6.96288 5.69911 6.87283L10.8368 1.73492ZM3.27089 8.05162C3.14482 7.92555 2.94041 7.92555 2.81434 8.05162L0.0945546 10.7714C-0.031519 10.8975 -0.031518 11.1019 0.0945564 11.228L2.81421 13.9476C2.94028 14.0737 3.14468 14.0737 3.27076 13.9476L5.99052 11.2278C6.11659 11.1017 6.11659 10.8973 5.99052 10.7713L3.27089 8.05162ZM11.2281 8.05291C11.102 7.92683 10.8976 7.92683 10.7715 8.05291L8.05175 10.7727C7.92567 10.8988 7.92567 11.1032 8.05175 11.2293L10.7714 13.9489C10.8975 14.0749 11.1019 14.0749 11.2279 13.9489L13.9477 11.2291C14.0738 11.103 14.0738 10.8986 13.9477 10.7726L11.2281 8.05291ZM19.1858 8.05291C19.0597 7.92684 18.8553 7.92683 18.7293 8.05291L16.0095 10.7727C15.8834 10.8988 15.8834 11.1032 16.0095 11.2292L18.7291 13.9489C18.8552 14.075 19.0596 14.075 19.1857 13.9489L21.9054 11.2291C22.0315 11.103 22.0315 10.8986 21.9054 10.7725L19.1858 8.05291ZM2.87956 9.69196C2.96961 9.6019 3.11561 9.6019 3.20567 9.69196L4.35019 10.8365C4.44024 10.9265 4.44024 11.0725 4.35019 11.1626L3.20553 12.3073C3.11548 12.3973 2.96948 12.3973 2.87942 12.3073L1.73489 11.1627C1.64483 11.0727 1.64483 10.9267 1.73489 10.8366L2.87956 9.69196ZM18.7945 9.69324C18.8845 9.60319 19.0305 9.60319 19.1206 9.69324L20.2651 10.8378C20.3552 10.9278 20.3552 11.0738 20.2651 11.1639L19.1204 12.3086C19.0304 12.3986 18.8844 12.3986 18.7943 12.3086L17.6498 11.164C17.5598 11.074 17.5598 10.928 17.6498 10.8379L18.7945 9.69324ZM10.8367 9.69324C10.9268 9.60319 11.0728 9.60319 11.1629 9.69324L12.3074 10.8378C12.3974 10.9278 12.3974 11.0738 12.3074 11.1639L11.1627 12.3085C11.0727 12.3986 10.9267 12.3986 10.8366 12.3085L9.69208 11.164C9.60203 11.074 9.60203 10.928 9.69208 10.8379L10.8367 9.69324ZM15.2229 12.0142C15.0968 11.8882 14.8925 11.8883 14.7665 12.0143L11.1629 15.6178C11.0728 15.7079 10.9268 15.7079 10.8368 15.6178L7.23524 12.0164C7.1093 11.8905 6.90514 11.8903 6.77901 12.0161L4.05536 14.7322C3.92899 14.8582 3.92884 15.0628 4.05504 15.189L10.7715 21.9055C10.8976 22.0315 11.102 22.0315 11.2281 21.9054L17.7534 15.38L17.9455 15.1705C18.0623 15.0431 18.0579 14.8462 17.9356 14.724L15.2229 12.0142ZM14.8321 13.6542C14.9221 13.5642 15.0681 13.5641 15.1581 13.6541L16.3034 14.7982C16.3935 14.8882 16.3936 15.0343 16.3035 15.1244L11.1629 20.2651C11.0728 20.3552 10.9268 20.3552 10.8367 20.2651L5.69647 15.1249C5.60633 15.0348 5.60643 14.8886 5.6967 14.7986L6.84306 13.6554C6.93315 13.5656 7.07897 13.5657 7.16894 13.6556L10.7715 17.2582C10.8976 17.3842 11.102 17.3842 11.2281 17.2582L14.8321 13.6542Z" fill="${color}" fill-opacity="0.8"/>
    </svg>
    `
    : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.62174 15.4573C1.58366 14.4192 1.00033 13.0113 1 11.5433C0.999841 10.8161 1.1429 10.0961 1.42101 9.42427C1.69912 8.75244 2.10684 8.14195 2.62088 7.62769C3.13492 7.11342 3.74522 6.70543 4.41694 6.42702C5.08865 6.14862 5.80863 6.00524 6.53575 6.00508H10.9067V8.33599H6.53575C5.68561 8.33599 4.87029 8.6737 4.26915 9.27484C3.66801 9.87598 3.3303 10.6913 3.3303 11.5414C3.3303 12.3916 3.66801 13.2069 4.26915 13.808C4.87029 14.4092 5.68561 14.7469 6.53575 14.7469H10.9067V17.079H6.53575C5.06768 17.0787 3.65983 16.4954 2.62174 15.4573ZM17.4665 6.00495C17.5326 6.00255 17.5974 6.00019 17.6635 6.00019C18.3586 5.99439 19.0481 6.12558 19.6925 6.38629C20.3369 6.64699 20.9237 7.03209 21.4192 7.51959C21.9148 8.0071 22.3095 8.58745 22.5807 9.22751C22.8519 9.86757 22.9944 10.5548 23 11.2499V11.2548C22.9997 11.9816 22.8562 12.7012 22.5778 13.3726C22.2993 14.044 21.8914 14.6539 21.3772 15.1676C20.8631 15.6813 20.2528 16.0887 19.5812 16.3665C18.9096 16.6444 18.1898 16.7872 17.463 16.7869H13.0921V14.6014H17.463C18.3132 14.6014 19.1285 14.2637 19.7296 13.6626C20.3308 13.0614 20.6685 12.2461 20.6685 11.396C20.6685 10.5458 20.3308 9.73053 19.7296 9.12939C19.1285 8.52825 18.3132 8.19053 17.463 8.19053H13.0921V6.00508H17.463L17.4665 6.00495ZM16.4424 10.3759H7.70059V12.5614H16.4424V10.3759Z" fill="${color}"/>
    </svg>
    `;
};
export const defaultPlaceIcon = (color: TextColors = 'white') => {
  return `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right:10px">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6928 15.2768C16.8414 13.1893 17.5 11.2954 17.5 9.82586C17.5 8.13485 16.9626 6.69419 16.0566 5.69132C15.165 4.70442 13.8254 4.03843 12 4.03843C10.1746 4.03843 8.83503 4.70442 7.94342 5.69132C7.03739 6.69419 6.5 8.13485 6.5 9.82586C6.5 11.2954 7.15863 13.1893 8.3072 15.2768C9.33061 17.1368 10.6637 19.0098 12 20.6583C13.3363 19.0098 14.6694 17.1368 15.6928 15.2768ZM12.7343 22.1517C15.753 18.5292 19 13.5659 19 9.82586C19 5.7799 16.4183 2.5 12 2.5C7.58172 2.5 5 5.7799 5 9.82586C5 13.5659 8.24703 18.5292 11.2657 22.1517C11.6526 22.6161 12.3474 22.6161 12.7343 22.1517Z" fill="${color}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 12C13.3807 12 14.5 10.8807 14.5 9.5C14.5 8.11929 13.3807 7 12 7C10.6193 7 9.5 8.11929 9.5 9.5C9.5 10.8807 10.6193 12 12 12ZM12 13.5C14.2091 13.5 16 11.7091 16 9.5C16 7.29086 14.2091 5.5 12 5.5C9.79086 5.5 8 7.29086 8 9.5C8 11.7091 9.79086 13.5 12 13.5Z" fill="${color}"/>
    </svg>
    `;
};
export default placeIcon;
