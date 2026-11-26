/**
 * K-Royal Inbound Tour — 통합 다국어(i18n) · 양방향 번역 · 알림 어댑터 · 로컬 DB 코어
 */
const DB_STORAGE_KEY = 'K_ROYAL_TOUR_DB_V4';
const EXCHANGE_RATE_KRW_PER_USD = 1380;

const LANGUAGE_CATALOG = [
  { code: 'ko', name: '한국어', nativeName: '한국어', flag: '🇰🇷', active: true, locked: true },
  { code: 'en', name: '영어', nativeName: 'English', flag: '🇺🇸', active: true, locked: true },
  { code: 'vi', name: '베트남어', nativeName: 'Tiếng Việt', flag: '🇻🇳', active: true, locked: false },
  { code: 'ja', name: '일본어', nativeName: '日本語', flag: '🇯🇵', active: false, locked: false },
  { code: 'zh', name: '중국어', nativeName: '中文', flag: '🇨🇳', active: false, locked: false },
  { code: 'th', name: '태국어', nativeName: 'ภาษาไทย', flag: '🇹🇭', active: false, locked: false },
  { code: 'mn', name: '몽골어', nativeName: 'Монгол', flag: '🇲🇳', active: false, locked: false },
  { code: 'ru', name: '러시아어', nativeName: 'Русский', flag: '🇷🇺', active: false, locked: false },
  { code: 'tl', name: '필리핀어', nativeName: 'Tagalog', flag: '🇵🇭', active: false, locked: false }
];

const I18N_MESSAGES = {
  ko: {
    brandName: 'K-Royal Tour',
    brandSub: '대한민국 인바운드 프리미엄 여행사',
    skipIntro: '인트로 건너뛰기 ➔',
    replayIntro: '전통 인트로 다시보기',
    welcomeTitle: 'Welcome to Korea',
    welcomeSub: '한국의 아름다운 전통과 현대가 어우러진 특별한 여정으로 초대합니다.',
    menu_attractions: '지역별상품예약',
    menu_regional: '지역별관광정보',
    menu_limousine: '리무진버스',
    menu_airport: '공항 픽업',
    menu_inquiry: '여행문의',
    menu_faq: 'FAQ',
    menu_etc: '회사소개',
    heroTitle: '인천 · 김해 멀티 공항 완벽 대응! 맞춤형 대한민국 프리미엄 투어',
    heroDesc: '인천(ICN)·김해(PUS) 입출국 동선부터 1박2일·2박3일·3박4일 지역별 대표 패키지, 전용 리무진 좌석 지정, KTX·렌터카, 공항 픽업까지 한 번에 예약하세요.',
    btnExplorePackages: '지역별 패키지 예약하기',
    btnLimousineSeat: '리무진 좌석 예매',
    step1Title: '1단계. 여행 기간 선택',
    step2Title: '2단계. 기간별 대표 숙박업체 선택',
    step3Title: '3단계. 이동 간 교통수단 선택 (리무진 · KTX · 렌터카)',
    step4Title: '4단계. 입·출국 공항 & 공항 픽업 · 예약자 정보',
    reserveNow: '실시간 견적 확정 & 예약하기',
    busSelectRoute: '1단계. 노선 및 날짜 선택',
    busSelectDispatch: '2단계. 배정된 전용 리무진 호차 선택',
    busSelectSeat: '3단계. 항공사 스타일 버스 전체 평면도 좌석 선택',
    inquiryCustomTab: '맞춤 행사 진행 의뢰',
    inquiryQnaTab: '1:1 질의 및 답변 (Q&A)',
    submitInquiry: '문의 접수하기 (담당 직원 실시간 알림)',
    adminLink: '통합 관리자(/admin)',
    mobileExpenseLink: '현장 비용등록(/m/expense)'
  },
  en: {
    brandName: 'K-Royal Tour',
    brandSub: 'Korea Premium Inbound Travel Agency',
    skipIntro: 'Skip Intro ➔',
    replayIntro: 'Replay Traditional Intro',
    welcomeTitle: 'Welcome to Korea',
    welcomeSub: 'We invite you to an unforgettable journey where Korean tradition meets modern luxury.',
    menu_attractions: 'Regional Booking',
    menu_regional: 'Regional Tours',
    menu_limousine: 'Limousine Bus',
    menu_airport: 'Airport Pickup',
    menu_inquiry: 'Travel Inquiry',
    menu_faq: 'FAQ',
    menu_etc: 'About Us',
    heroTitle: 'Multi-Airport Korea Tours (ICN & PUS) — Tailored Travel Packages',
    heroDesc: 'Book curated 2D1N, 3D2N, 4D3N regional packages with top hotels, airline-style limousine bus seat selection, KTX, rental cars, and private airport transfers.',
    btnExplorePackages: 'Build Regional Package',
    btnLimousineSeat: 'Book Limousine Seat',
    step1Title: 'Step 1. Select Tour Duration',
    step2Title: 'Step 2. Select Representative Hotel',
    step3Title: 'Step 3. Select Transportation (Limousine · KTX · Rental Car)',
    step4Title: 'Step 4. Arrival/Departure Airport & Guest Info',
    reserveNow: 'Confirm Quote & Book Now',
    busSelectRoute: 'Step 1. Select Route & Travel Date',
    busSelectDispatch: 'Step 2. Select Assigned Limousine Coach',
    busSelectSeat: 'Step 3. Airline-Style Full Bus Cabin Seat Map',
    inquiryCustomTab: 'Custom Group Tour Request',
    inquiryQnaTab: '1:1 Q&A Board',
    submitInquiry: 'Submit Inquiry (Instant Staff Email Alert)',
    adminLink: 'Admin (/admin)',
    mobileExpenseLink: 'Field Expense (/m/expense)'
  },
  vi: {
    brandName: 'K-Royal Tour',
    brandSub: 'Công ty Du lịch Hàn Quốc Cao cấp',
    skipIntro: 'Bỏ qua Intro ➔',
    replayIntro: 'Xem lại Intro Truyền thống',
    welcomeTitle: 'Welcome to Korea',
    welcomeSub: 'Chào mừng quý khách đến với hành trình khám phá vẻ đẹp truyền thống và hiện đại của Hàn Quốc.',
    menu_attractions: 'Đặt Tour Theo Vùng',
    menu_regional: 'Thông tin Du lịch Vùng',
    menu_limousine: 'Xe Limousine',
    menu_airport: 'Đón Sân bay',
    menu_inquiry: 'Liên hệ & Tư vấn',
    menu_faq: 'FAQ',
    menu_etc: 'Giới thiệu Công ty',
    heroTitle: 'Tour Hàn Quốc Đa Sân Bay (ICN & PUS) — Gói Du Lịch Tùy Chỉnh',
    heroDesc: 'Đặt gói du lịch 2N1Đ, 3N2Đ, 4N3Đ kèm khách sạn hàng đầu, chọn ghế xe Limousine kiểu hàng không, tàu KTX, thuê xe tự lái và đón sân bay.',
    btnExplorePackages: 'Đặt Gói Tour Ngay',
    btnLimousineSeat: 'Chọn Ghế Limousine',
    step1Title: 'Bước 1. Chọn Thời Gian Tour',
    step2Title: 'Bước 2. Chọn Khách Sạn Tiêu Biểu',
    step3Title: 'Bước 3. Chọn Phương Tiện (Limousine · KTX · Thuê xe)',
    step4Title: 'Bước 4. Sân Bay & Thông Tin Khách Hàng',
    reserveNow: 'Xác Nhận Báo Giá & Đặt Tour',
    busSelectRoute: 'Bước 1. Chọn Tuyến Đường & Ngày',
    busSelectDispatch: 'Bước 2. Chọn Xe Limousine',
    busSelectSeat: 'Bước 3. Sơ Đồ Chọn Ghế Kiểu Hàng Không',
    inquiryCustomTab: 'Yêu Cầu Tour Riêng',
    inquiryQnaTab: 'Hỏi Đáp 1:1 (Q&A)',
    submitInquiry: 'Gửi Yêu Cầu (Thông báo nhân viên ngay)',
    adminLink: 'Quản trị (/admin)',
    mobileExpenseLink: 'Chi phí hiện trường (/m/expense)'
  },
  ja: {
    brandName: 'K-Royal Tour',
    brandSub: '韓国プレミアム・インバウンド旅行会社',
    skipIntro: 'イントロをスキップ ➔',
    replayIntro: '伝統イントロをもう一度見る',
    welcomeTitle: 'Welcome to Korea',
    welcomeSub: '韓国の美しい伝統と現代が調和する特別な旅へご案内いたします。',
    menu_attractions: '観光地',
    menu_regional: '地域別ツアー (予約)',
    menu_limousine: 'リムジンバス',
    menu_airport: '空港送迎',
    menu_inquiry: '旅行お問い合わせ',
    menu_faq: 'FAQ',
    menu_etc: 'その他',
    heroTitle: '仁川・金海マルチ空港対応！オーダーメイド韓国プレミアムツアー',
    heroDesc: '1泊2日・2泊3日・3泊4日の地域別パッケージ、航空機スタイルのリムジン座席指定、KTX、レンタカー、空港送迎をワンストップでご予約。',
    btnExplorePackages: '地域別パッケージ予約',
    btnLimousineSeat: 'リムジン座席予約',
    step1Title: 'ステップ1. 旅行期間を選択',
    step2Title: 'ステップ2. 期間別代表ホテルを選択',
    step3Title: 'ステップ3. 交通手段を選択 (リムジン・KTX・レンタカー)',
    step4Title: 'ステップ4. 発着空港・送迎・予約者情報',
    reserveNow: '見積確定＆予約する',
    busSelectRoute: 'ステップ1. 路線と日付を選択',
    busSelectDispatch: 'ステップ2. 配車リムジンを選択',
    busSelectSeat: 'ステップ3. 航空機スタイル座席マップ',
    inquiryCustomTab: 'オーダーメイドツアー依頼',
    inquiryQnaTab: '1:1 質問＆回答 (Q&A)',
    submitInquiry: 'お問い合わせ送信',
    adminLink: '管理者 (/admin)',
    mobileExpenseLink: '現地経費登録 (/m/expense)'
  },
  zh: {
    brandName: 'K-Royal Tour',
    brandSub: '韩国高端入境旅游专家',
    skipIntro: '跳过片头 ➔',
    replayIntro: '重播传统片头',
    welcomeTitle: 'Welcome to Korea',
    welcomeSub: '诚邀您开启韩国传统与现代交融的非凡旅程。',
    menu_attractions: '旅游景点',
    menu_regional: '地区旅游套餐 (预订)',
    menu_limousine: '豪华大巴',
    menu_airport: '机场接送',
    menu_inquiry: '旅游咨询',
    menu_faq: '常见问题',
    menu_etc: '其他',
    heroTitle: '仁川·金海双机场完美衔接！定制韩国高端旅游套餐',
    heroDesc: '一站式预订2天1夜/3天2夜/4天3夜地区套餐、严选酒店、航空式豪华大巴选座、KTX高铁、租车及机场专车接送。',
    btnExplorePackages: '立即预订地区套餐',
    btnLimousineSeat: '大巴选座预订',
    step1Title: '第1步. 选择旅游天数',
    step2Title: '第2步. 选择代表性酒店',
    step3Title: '第3步. 选择交通方式 (豪华大巴 · KTX · 租车)',
    step4Title: '第4步. 出入境机场及预订人信息',
    reserveNow: '确认报价并立即预订',
    busSelectRoute: '第1步. 选择路线与日期',
    busSelectDispatch: '第2步. 选择豪华大巴车次',
    busSelectSeat: '第3步. 航空式大巴全景选座图',
    inquiryCustomTab: '定制团队行程委托',
    inquiryQnaTab: '1:1 问答咨询 (Q&A)',
    submitInquiry: '提交咨询 (实时邮件通知专员)',
    adminLink: '管理后台 (/admin)',
    mobileExpenseLink: '现场费用登记 (/m/expense)'
  }
};

function t(key, locale = 'ko') {
  const dict = I18N_MESSAGES[locale] || I18N_MESSAGES['en'] || I18N_MESSAGES['ko'];
  return dict[key] || I18N_MESSAGES['en'][key] || I18N_MESSAGES['ko'][key] || key;
}

const I18N_UI_EXTRAS = {
  ko: {
    attTitle: '🏯 대한민국 대표 관광지 · 테마파크 · 맛집 허브',
    attDesc: '서울, 부산, 안동, 여수, 광주, 한국민속촌, DMZ, 제주, 전주의 핵심 명소와 입장권 예매 정보를 확인하세요.',
    regTitle: '🗺️ 지역별 대표 여행 패키지 상품 구성 빌더',
    regDesc: '지역 선택 ➔ 기간(1박2일·2박3일·3박4일) ➔ 대표 숙박업체 ➔ 교통(리무진 좌석·KTX·렌터카) ➔ 공항 픽업까지 한 번에 견적을 내고 예약하세요.',
    btnTicket: '입장권·공식 예매 ↗',
    pkgSub: '대표 패키지 상품',
    pkgIntro: '선택하신 지역의 핵심 관광지와 검증된 특급 숙박, 전용 리무진·KTX·렌터카 및 공항 픽업을 원스톱으로 조합하여 실시간 견적을 확인하실 수 있습니다.',
    perNight: '1박',
    breakfastInc: '조식 포함',
    breakfastExc: '조식 별도',
    hotelDetail: '호텔 상세 보기 ↗',
    dur2D1N: '1박 2일 (2D1N)',
    dur3D2N: '2박 3일 (3D2N)',
    dur4D3N: '3박 4일 (4D3N)',
    attRegions: { ALL: '전체 거점 (All Regions)', 서울: '서울 (Seoul)', 부산: '부산 (Busan)', 안동: '안동 (Andong)', 여수: '여수 (Yeosu)', 광주: '광주 (Gwangju)', 한국민속촌: '한국민속촌 (Folk Village)', DMZ: 'DMZ', 제주: '제주 (Jeju)', 전주: '전주 (Jeonju)' },
    attCats: { ALL: '전체 카테고리', '명소/입장권': '명소 · 입장권', '테마파크/놀거리': '테마파크 · 놀거리', '특색거리/전통시장': '특색거리 · 전통시장', '맛집/술집·나이트라이프': '맛집 · 술집/나이트라이프' },
    rooms: ['1실', '2실', '3실'],
    ktxRoutes: ['서울역 ↔ 부산역 (₩59,800/인)', '용산역 ↔ 광주송정역 (₩46,800/인)', '용산역 ↔ 여수엑스포역 (₩44,600/인)'],
    ktxClasses: ['일반실 (Standard)', '특실 (First Class +40%)'],
    rentalBranches: ['인천국제공항 (ICN)', '김해국제공항 (PUS)', '서울역 KTX 데스크', '부산역 KTX 데스크', '숙박 호텔 딜리버리'],
    airportRoutes: ['인천공항(ICN) 입국 ➔ 인천공항(ICN) 출국', '김해/부산공항(PUS) 입국 ➔ 김해공항(PUS) 출국', '인천공항(ICN) 입국 ➔ 김해/부산공항(PUS) 출국', '김해공항(PUS) 입국 ➔ 인천공항(ICN) 출국'],
    airportPickups: ['픽업 추가 안함', '인천공항 ↔ 서울 호텔 세단 (+₩110,000)', '인천공항 ↔ 서울 호텔 대형밴 (+₩165,000)', '김해공항 ↔ 부산 호텔 세단 (+₩65,000)', '김해공항 ↔ 부산 호텔 9인승 (+₩95,000)'],
    busRoutes: ['서울 ➔ 부산', '부산 ➔ 서울', '서울 ➔ 광주', '서울 ➔ 안동', '서울 ➔ 여수'],
    airTabICN: '인천국제공항 (ICN ↔ 서울)',
    airTabPUS: '김해국제공항 (PUS ↔ 부산)',
    company: {
      title: '🏛️ 회사소개 (About K-Royal Inbound Tour)',
      subtitle: '대한민국의 품격 있는 역사와 문화를 전 세계 여행객에게 전하는 프리미엄 인바운드 종합여행사입니다.',
      name: '(주)케이로얄 인바운드 투어 (K-Royal Inbound Tour Co., Ltd.)',
      badge: '문화체육관광부 정식 등록 종합여행업 · 전용 리무진 10대 직영',
      desc: 'K-Royal Tour는 외국인 VIP, 가족, 기업 연수단을 대상으로 대한민국 전역(서울·부산·제주·전주·안동·여수·광주·DMZ)의 맞춤형 프리미엄 여행을 기획·운영하는 인바운드 전문 여행사입니다. 인천국제공항(ICN)과 김해국제공항(PUS) 전담 의전팀 및 1호차~10호차 직영 럭셔리 리무진 버스를 보유하여 안전하고 품격 있는 한국 여행을 약속합니다.',
      ceoLabel: '대표이사', ceoVal: '김한국 (CEO Kim Han-kook)',
      regLabel: '관광사업 등록번호', regVal: '제2026-000123호',
      bizLabel: '사업자등록번호', bizVal: '104-86-99012',
      telLabel: '대표 전화', telVal: '+82-2-1234-5678 (24시간)',
      faxLabel: '팩스(FAX)', faxVal: '+82-2-1234-5679',
      emailLabel: '공식 이메일', emailVal: 'contact@kroyaltour.kr',
      locTitle: '본사 및 지사 오시는 길',
      hqName: '🏢 서울 본사 (Seoul HQ)',
      hqAddr: '서울특별시 중구 세종대로 110 K-Royal 빌딩 7층 (지하철 1·2호선 시청역 5번 출구 도보 2분)',
      bsName: '🌊 부산 영남지사 (Busan Branch)',
      bsAddr: '부산광역시 해운대구 해운대해변로 280 마린타워 4층 (김해공항 전담 의전 데스크 운영)',
      hours: '운영시간: 연중무휴 08:00 ~ 22:00 (긴급 데스크 24시간)',
      safetyTitle: '한국 여행 긴급 안전 가이드',
      safetyList: ['<strong>1330</strong>: 한국관광공사 24시간 다국어 관광통역안내', '<strong>112 / 119</strong>: 경찰 / 소방·응급구조', '<strong>24시간 인바운드 긴급데스크</strong>: +82-2-1234-5678'],
      policyTitle: '이용약관 및 취소·환불 규정',
      policyList: ['출발 7일 전까지: <strong>100% 전액 환불</strong>', '출발 3~6일 전: 20% 취소 수수료', '출발 1~2일 전: 50% 취소 수수료', '당일 취소 및 No-Show: 환불 불가']
    }
  },
  en: {
    attTitle: '🏯 Top Korea Attractions · Theme Parks · Dining Hub',
    attDesc: 'Explore iconic landmarks, theme parks, traditional markets, and ticket booking info across Seoul, Busan, Jeju, Jeonju, and more.',
    regTitle: '🗺️ Regional Representative Tour Package Builder',
    regDesc: 'Select Region ➔ Duration (2D1N/3D2N/4D3N) ➔ Top Hotel ➔ Transport (Limousine/KTX/Rental Car) ➔ Airport Pickup for an instant quote.',
    btnTicket: 'Tickets & Official Site ↗',
    pkgSub: 'Featured Regional Package',
    pkgIntro: 'Combine top regional attractions, verified luxury hotels, private limousine/KTX/rental cars, and airport transfers in one real-time quote.',
    perNight: 'night',
    breakfastInc: 'Breakfast Included',
    breakfastExc: 'Room Only',
    hotelDetail: 'Hotel Details ↗',
    dur2D1N: '2 Days 1 Night (2D1N)',
    dur3D2N: '3 Days 2 Nights (3D2N)',
    dur4D3N: '4 Days 3 Nights (4D3N)',
    attRegions: { ALL: 'All Regions', 서울: 'Seoul', 부산: 'Busan', 안동: 'Andong', 여수: 'Yeosu', 광주: 'Gwangju', 한국민속촌: 'Korean Folk Village', DMZ: 'DMZ', 제주: 'Jeju', 전주: 'Jeonju' },
    attCats: { ALL: 'All Categories', '명소/입장권': 'Landmarks & Tickets', '테마파크/놀거리': 'Theme Parks & Activities', '특색거리/전통시장': 'Culture Streets & Markets', '맛집/술집·나이트라이프': 'Dining & Nightlife' },
    rooms: ['1 Room', '2 Rooms', '3 Rooms'],
    ktxRoutes: ['Seoul Stn ↔ Busan Stn ($43/pax)', 'Yongsan Stn ↔ Gwangju Stn ($34/pax)', 'Yongsan Stn ↔ Yeosu Expo Stn ($32/pax)'],
    ktxClasses: ['Standard Class', 'First Class (+40%)'],
    rentalBranches: ['Incheon Intl Airport (ICN)', 'Gimhae Intl Airport (PUS)', 'Seoul Station KTX Desk', 'Busan Station KTX Desk', 'Hotel Delivery Service'],
    airportRoutes: ['ICN Arrival ➔ ICN Departure (Round-trip)', 'PUS Arrival ➔ PUS Departure (Round-trip)', 'ICN Arrival ➔ PUS Departure (Open-Jaw)', 'PUS Arrival ➔ ICN Departure (Open-Jaw)'],
    airportPickups: ['No Airport Pickup', 'ICN ↔ Seoul Hotel Sedan (+$80)', 'ICN ↔ Seoul Hotel Large Van (+$120)', 'PUS ↔ Busan Hotel Sedan (+$47)', 'PUS ↔ Busan Hotel 9-Seater (+$69)'],
    busRoutes: ['Seoul ➔ Busan', 'Busan ➔ Seoul', 'Seoul ➔ Gwangju', 'Seoul ➔ Andong', 'Seoul ➔ Yeosu'],
    airTabICN: 'Incheon Intl Airport (ICN ↔ Seoul)',
    airTabPUS: 'Gimhae Intl Airport (PUS ↔ Busan)',
    company: {
      title: '🏛️ About Us (K-Royal Inbound Tour)',
      subtitle: 'A premier inbound travel agency sharing Korea’s royal heritage and modern culture with travelers worldwide.',
      name: 'K-Royal Inbound Tour Co., Ltd.',
      badge: 'Licensed General Travel Agency (MCST) · 10 Direct Luxury Limousines',
      desc: 'K-Royal Tour specializes in tailored premium Korea travel for international VIPs, families, and corporate groups across Seoul, Busan, Jeju, Jeonju, Andong, Yeosu, Gwangju, and DMZ. With dedicated airport protocol teams at Incheon (ICN) & Gimhae (PUS) and our own fleet of 10 luxury limousine coaches, we guarantee a safe and unforgettable journey.',
      ceoLabel: 'CEO', ceoVal: 'Kim Han-kook',
      regLabel: 'Tourism License', regVal: 'No. 2026-000123',
      bizLabel: 'Business Reg. No.', bizVal: '104-86-99012',
      telLabel: 'Main Phone', telVal: '+82-2-1234-5678 (24/7)',
      faxLabel: 'Fax', faxVal: '+82-2-1234-5679',
      emailLabel: 'Official Email', emailVal: 'contact@kroyaltour.kr',
      locTitle: 'Headquarters & Branch Offices',
      hqName: '🏢 Seoul Headquarters (Seoul HQ)',
      hqAddr: '7F K-Royal Bldg, 110 Sejong-daero, Jung-gu, Seoul (2 min walk from City Hall Station Exit 5)',
      bsName: '🌊 Busan Branch Office',
      bsAddr: '4F Marine Tower, 280 Haeundaehaebyeon-ro, Haeundae-gu, Busan (Gimhae Airport VIP Desk)',
      hours: 'Hours: Open Year-Round 08:00 ~ 22:00 (24/7 Emergency Desk)',
      safetyTitle: 'Korea Travel Emergency Safety Guide',
      safetyList: ['<strong>1330</strong>: Korea Travel Hotline (24/7 Multilingual Interpretation)', '<strong>112 / 119</strong>: Police / Fire & Medical Emergency', '<strong>24/7 Inbound Emergency Desk</strong>: +82-2-1234-5678'],
      policyTitle: 'Terms & Cancellation / Refund Policy',
      policyList: ['7+ days before departure: <strong>100% Full Refund</strong>', '3–6 days before departure: 20% cancellation fee', '1–2 days before departure: 50% cancellation fee', 'Same-day cancellation or No-Show: Non-refundable']
    }
  },
  vi: {
    attTitle: '🏯 Điểm Tham Quan · Công Viên · Ẩm Thực Hàng Đầu Hàn Quốc',
    attDesc: 'Khám phá các địa danh nổi tiếng, công viên giải trí, chợ truyền thống và đặt vé tại Seoul, Busan, Jeju, Jeonju.',
    regTitle: '🗺️ Trình Tạo Gói Tour Du Lịch Theo Vùng',
    regDesc: 'Chọn Vùng ➔ Thời gian (2N1Đ/3N2Đ/4N3Đ) ➔ Khách sạn ➔ Phương tiện (Limousine/KTX/Thuê xe) ➔ Đón sân bay để nhận báo giá ngay.',
    btnTicket: 'Đặt Vé & Trang Chính Thức ↗',
    pkgSub: 'Gói Tour Tiêu Biểu',
    pkgIntro: 'Kết hợp các điểm tham quan đặc sắc, khách sạn cao cấp, xe Limousine/KTX/thuê xe và đón sân bay để nhận báo giá tức thì.',
    perNight: 'đêm',
    breakfastInc: 'Bao gồm ăn sáng',
    breakfastExc: 'Không ăn sáng',
    hotelDetail: 'Xem Chi Tiết Khách Sạn ↗',
    dur2D1N: '2 Ngày 1 Đêm (2D1N)',
    dur3D2N: '3 Ngày 2 Đêm (3D2N)',
    dur4D3N: '4 Ngày 3 Đêm (4D3N)',
    attRegions: { ALL: 'Tất Cả Khu Vực', 서울: 'Seoul', 부산: 'Busan', 안동: 'Andong', 여수: 'Yeosu', 광주: 'Gwangju', 한국민속촌: 'Làng Dân Tộc', DMZ: 'DMZ', 제주: 'Jeju', 전주: 'Jeonju' },
    attCats: { ALL: 'Tất Cả Danh Mục', '명소/입장권': 'Địa Danh & Vé Tham Quan', '테마파크/놀거리': 'Công Viên & Giải Trí', '특색거리/전통시장': 'Phố Văn Hóa & Chợ Đêm', '맛집/술집·나이트라이프': 'Ẩm Thực & Giải Trí Đêm' },
    rooms: ['1 Phòng', '2 Phòng', '3 Phòng'],
    ktxRoutes: ['Ga Seoul ↔ Ga Busan ($43/khách)', 'Ga Yongsan ↔ Ga Gwangju ($34/khách)', 'Ga Yongsan ↔ Ga Yeosu Expo ($32/khách)'],
    ktxClasses: ['Hạng Phổ Thông (Standard)', 'Hạng Nhất (First Class +40%)'],
    rentalBranches: ['Sân bay Quốc tế Incheon (ICN)', 'Sân bay Quốc tế Gimhae (PUS)', 'Quầy KTX Ga Seoul', 'Quầy KTX Ga Busan', 'Giao xe tận Khách sạn'],
    airportRoutes: ['Đến ICN ➔ Đi ICN (Khứ hồi)', 'Đến PUS ➔ Đi PUS (Khứ hồi)', 'Đến ICN ➔ Đi PUS (Liên tuyến)', 'Đến PUS ➔ Đi ICN (Liên tuyến)'],
    airportPickups: ['Không thêm đón sân bay', 'ICN ↔ Khách sạn Seoul Sedan (+$80)', 'ICN ↔ Khách sạn Seoul Xe Van (+$120)', 'PUS ↔ Khách sạn Busan Sedan (+$47)', 'PUS ↔ Khách sạn Busan 9 chỗ (+$69)'],
    busRoutes: ['Seoul ➔ Busan', 'Busan ➔ Seoul', 'Seoul ➔ Gwangju', 'Seoul ➔ Andong', 'Seoul ➔ Yeosu'],
    airTabICN: 'Sân bay Incheon (ICN ↔ Seoul)',
    airTabPUS: 'Sân bay Gimhae (PUS ↔ Busan)',
    company: {
      title: '🏛️ Giới Thiệu Công Ty (K-Royal Inbound Tour)',
      subtitle: 'Công ty lữ hành cao cấp chuyên tổ chức tour du lịch Hàn Quốc đẳng cấp cho du khách quốc tế.',
      name: 'Công ty TNHH Du lịch K-Royal Inbound Tour',
      badge: 'Giấy phép Lữ hành Quốc tế (Bộ VHTTDL Hàn Quốc) · Sở hữu 10 xe Limousine riêng',
      desc: 'K-Royal Tour chuyên thiết kế và điều hành các tour du lịch Hàn Quốc cao cấp cho khách VIP, gia đình và doanh nghiệp tại Seoul, Busan, Jeju, Jeonju, Andong, Yeosu, Gwangju và DMZ. Với đội ngũ đón tiễn riêng tại sân bay Incheon (ICN) & Gimhae (PUS) cùng 10 xe Limousine sang trọng trực tiếp vận hành, chúng tôi cam kết mang lại hành trình an toàn và trọn vẹn nhất.',
      ceoLabel: 'Giám đốc điều hành', ceoVal: 'Kim Han-kook',
      regLabel: 'Số giấy phép lữ hành', regVal: 'Số 2026-000123',
      bizLabel: 'Mã số doanh nghiệp', bizVal: '104-86-99012',
      telLabel: 'Điện thoại chính', telVal: '+82-2-1234-5678 (24/7)',
      faxLabel: 'Số Fax', faxVal: '+82-2-1234-5679',
      emailLabel: 'Email chính thức', emailVal: 'contact@kroyaltour.kr',
      locTitle: 'Trụ Sở Chính & Chi Nhánh',
      hqName: '🏢 Trụ sở Seoul (Seoul HQ)',
      hqAddr: 'Tầng 7 Tòa nhà K-Royal, 110 Sejong-daero, Jung-gu, Seoul (Cách ga City Hall cửa số 5 chỉ 2 phút đi bộ)',
      bsName: '🌊 Chi nhánh Busan',
      bsAddr: 'Tầng 4 Marine Tower, 280 Haeundaehaebyeon-ro, Haeundae-gu, Busan (Quầy đón VIP Sân bay Gimhae)',
      hours: 'Giờ làm việc: Mở cửa quanh năm 08:00 ~ 22:00 (Hỗ trợ khẩn cấp 24/7)',
      safetyTitle: 'Hướng Dẫn An Toàn Khẩn Cấp Tại Hàn Quốc',
      safetyList: ['<strong>1330</strong>: Tổng đài Du lịch Hàn Quốc (Thông dịch Tiếng Việt 24/7)', '<strong>112 / 119</strong>: Cảnh sát / Cứu hỏa & Cấp cứu', '<strong>Đường dây nóng 24/7</strong>: +82-2-1234-5678'],
      policyTitle: 'Điều Khoản & Chính Sách Hoàn Hủy',
      policyList: ['Trước ngày khởi hành từ 7 ngày trở lên: <strong>Hoàn tiền 100%</strong>', 'Trước 3–6 ngày: Phí hủy 20%', 'Trước 1–2 ngày: Phí hủy 50%', 'Hủy trong ngày hoặc No-Show: Không hoàn tiền']
    }
  }
};

function tx(key, locale = 'ko') {
  const dict = I18N_UI_EXTRAS[locale] || I18N_UI_EXTRAS.en || I18N_UI_EXTRAS.ko;
  return dict[key] !== undefined ? dict[key] : (I18N_UI_EXTRAS.en[key] !== undefined ? I18N_UI_EXTRAS.en[key] : I18N_UI_EXTRAS.ko[key]);
}

function formatCurrency(krwAmount, locale = 'ko') {
  const krw = Math.round(Number(krwAmount) || 0);
  const usd = Math.round(krw / EXCHANGE_RATE_KRW_PER_USD);
  if (locale === 'ko') {
    return `₩${krw.toLocaleString()} ($${usd.toLocaleString()})`;
  }
  return `$${usd.toLocaleString()} (₩${krw.toLocaleString()})`;
}

/**
 * 확장형 다국어 양방향 자동 번역 파이프라인 (lib/translator 어댑터)
 * - 고객 언어(vi, en, ja, zh 등) -> 관리자용 한국어(ko)
 * - 관리자 한국어(ko) 답변 -> 고객 모국어(sourceLocale)
 */
function autoTranslateText(text, fromLocale, toLocale) {
  const clean = (text || '').trim();
  if (!clean || fromLocale === toLocale) return clean;

  const langInfo = LANGUAGE_CATALOG.find(l => l.code === toLocale) || { name: toLocale, nativeName: toLocale };
  const srcInfo = LANGUAGE_CATALOG.find(l => l.code === fromLocale) || { name: fromLocale, nativeName: fromLocale };

  // 자주 쓰이는 핵심 인바운드 여행 문구 양방향 사전 매핑 + 자동 번역 어댑터
  const phrasePairs = [
    { ko: '부산 2박3일 가족여행 견적 문의드립니다', en: 'I would like a quote for a 3D2N Busan family tour.', vi: 'Tôi muốn hỏi báo giá tour gia đình Busan 3 ngày 2 đêm.', ja: '釜山2泊3日家族旅行の見積もりをお願いします。', zh: '我想咨询釜山3天2夜家庭旅游报价。' },
    { ko: '인천공항 픽업 차량과 전용 리무진 예약을 원합니다', en: 'We would like to book an Incheon Airport pickup and limousine bus.', vi: 'Chúng tôi muốn đặt xe đón sân bay Incheon và xe Limousine.', ja: '仁川空港送迎車と専用リムジンの予約を希望します。', zh: '我们想预订仁川机场接机和豪华大巴。' },
    { ko: '안녕하세요! 요청하신 일정으로 맞춤 견적 및 전용 리무진·특급호텔 배정이 완료되었습니다.', en: 'Hello! Your custom itinerary, luxury limousine bus, and 5-star hotel quotation are ready.', vi: 'Xin chào! Lịch trình riêng, xe Limousine và báo giá khách sạn 5 sao cho đoàn quý khách đã hoàn tất.', ja: 'こんにちは！ご希望の日程に合わせたお見積りと専用リムジン・特級ホテルの手配が完了いたしました。', zh: '您好！已为您完成定制行程报价及豪华大巴、五星级酒店安排。' },
    { ko: '김해공항 입국 시 전담 기사가 입국장 앞에서 피켓을 들고 대기합니다.', en: 'Upon arrival at Gimhae Airport (PUS), our dedicated chauffeur will wait with a name board.', vi: 'Khi đến sân bay Gimhae (PUS), tài xế riêng sẽ cầm bảng tên đón quý khách tại cổng.', ja: '金海空港到着時、専属ドライバーが到着ロビーにてお名前ボードを持ってお待ちしております。', zh: '抵达金海机场时，专职司机会在接机口举牌等候。' }
  ];

  for (const p of phrasePairs) {
    if (clean.includes(p[fromLocale])) {
      return p[toLocale] || `[${langInfo.nativeName} 번역] ${clean}`;
    }
  }

  if (toLocale === 'ko') {
    return `[한국어 자동번역 (${srcInfo.name} 원문)] ${clean}`;
  }
  return `[${langInfo.nativeName} Auto-Translated from Korean] ${clean}`;
}

function getInitialDb() {
  const today = new Date();
  const fmt = (offset) => {
    const d = new Date(today.getTime() + offset * 86400000);
    return d.toISOString().split('T')[0];
  };
  const d1 = fmt(2);
  const d2 = fmt(4);

  return {
    languages: JSON.parse(JSON.stringify(LANGUAGE_CATALOG)),
    attractions: [
      { id: 'att_1', region: '서울', category: '명소/입장권', imageUrl: 'assets/images/gyeongbokgung_hanbok.jpg', title: { ko: '경복궁 & 한복 체험', en: 'Gyeongbokgung Palace & Hanbok', vi: 'Cung điện Gyeongbokgung & Trải nghiệm Hanbok' }, desc: { ko: '조선 왕조의 법궁과 근정전 투어, 한복 착용 시 무료 입장 및 고궁 포토 스팟 체험', en: 'Main royal palace of Joseon Dynasty. Free entry with Hanbok & royal photo spot.', vi: 'Cung điện chính triều đại Joseon. Miễn phí vé vào cửa khi mặc Hanbok & chụp ảnh cổ trang.' }, priceKrw: 3000, ticketUrl: 'https://royal.khs.go.kr', tag: 'Must Visit' },
      { id: 'att_2', region: '서울', category: '테마파크/놀거리', imageUrl: 'assets/images/lotte_world_tower.jpg', title: { ko: '롯데월드 어드벤처 & 스카이', en: 'Lotte World Adventure & Seoul Sky', vi: 'Công viên Lotte World & Seoul Sky' }, desc: { ko: '도심 속 실내외 대형 테마파크 및 123층 전망대 서울스카이 야경 감상', en: 'Iconic indoor/outdoor theme park & 123F observation deck.', vi: 'Công viên giải trí trong nhà/ngoài trời nổi tiếng & đài quan sát tầng 123.' }, priceKrw: 62000, ticketUrl: 'https://www.lotteworld.com', tag: 'Theme Park' },
      { id: 'att_3', region: '서울', category: '특색거리/전통시장', imageUrl: 'assets/images/gwangjang_market_food.jpg', title: { ko: '광장시장 & 을지로 노포거리', en: 'Gwangjang Market & Euljiro Alley', vi: 'Chợ truyền thống Gwangjang & Phố Euljiro' }, desc: { ko: '빈대떡, 육회, 마약김밥 등 대표 K-스트리트 푸드 천국 & 을지로 감성 골목', en: 'Famous Korean street food market & hip retro nightlife.', vi: 'Thiên đường ẩm thực đường phố Hàn Quốc với bánh xèo đậu xanh, gimbap và phố đêm Euljiro.' }, priceKrw: 15000, ticketUrl: 'https://www.kwangjangmarket.co.kr', tag: 'Food Market' },
      { id: 'att_4', region: '부산', category: '명소/입장권', imageUrl: 'assets/images/busan_haeundae.jpg', title: { ko: '해운대 블루라인파크 해변열차', en: 'Haeundae Blueline Park Sky Capsule', vi: 'Tàu ven biển Haeundae Sky Capsule' }, desc: { ko: '바다 위를 달리는 로맨틱 스카이캡슐 & 해운대~송정 해변열차 투어', en: 'Scenic coastal sky capsule overlooking Busan ocean.', vi: 'Trải nghiệm tàu trên cao Sky Capsule ngắm trọn bờ biển Haeundae tuyệt đẹp.' }, priceKrw: 35000, ticketUrl: 'https://www.bluelinepark.com', tag: 'Ocean View' },
      { id: 'att_5', region: '부산', category: '맛집/술집·나이트라이프', imageUrl: 'assets/images/busan_pocha_seafood.jpg', title: { ko: '광안리 수변공원 포차 & 오션 루프탑', en: 'Gwangalli Ocean Pocha & Rooftop Bar', vi: 'Phố ẩm thực đêm Gwangalli & Rooftop' }, desc: { ko: '광안대교 야경과 함께 즐기는 부산 해산물·전통주 나이트라이프', en: 'Fresh sashimi, Korean traditional liquor & Gwangan Bridge night view.', vi: 'Thưởng thức hải sản tươi sống và ngắm cảnh cầu Gwangan lung linh về đêm.' }, priceKrw: 45000, ticketUrl: 'https://www.visitbusan.net', tag: 'Nightlife' },
      { id: 'att_6', region: '안동', category: '명소/입장권', imageUrl: 'assets/images/andong_hahoe_village.jpg', title: { ko: '안동 하회마을 & 병산서원', en: 'Andong Hahoe Folk Village (UNESCO)', vi: 'Làng cổ Hahoe Andong (UNESCO)' }, desc: { ko: '유네스코 세계문화유산 전통 양반 마을과 하회별신굿탈놀이 관람', en: 'UNESCO World Heritage traditional village & mask dance.', vi: 'Di sản văn hóa thế giới UNESCO với kiến trúc cổ và điệu múa mặt nạ truyền thống.' }, priceKrw: 5000, ticketUrl: 'https://www.hahoe.or.kr', tag: 'UNESCO' },
      { id: 'att_7', region: '여수', category: '명소/입장권', imageUrl: 'assets/images/yeosu_cable_car.jpg', title: { ko: '여수 해상케이블카 & 낭만포차', en: 'Yeosu Maritime Cable Car & Night Pocha', vi: 'Cáp treo biển Yeosu & Phố đêm' }, desc: { ko: '돌산대교 위를 가로지르는 해상 케이블카와 여수 밤바다 포차거리', en: 'Crystal cabin over Yeosu sea & romantic night food stalls.', vi: 'Đi cáp treo xuyên biển ngắm cầu Dolsan và phố ẩm thực đêm lãng mạn Yeosu.' }, priceKrw: 17000, ticketUrl: 'https://www.yeosucablecar.com', tag: 'Night Sea' },
      { id: 'att_8', region: '광주', category: '특색거리/전통시장', imageUrl: 'assets/images/gwangju_penguin_village.jpg', title: { ko: '국립아시아문화전당 & 양림동 펭귄마을', en: 'ACC & Yangnim Penguin Village', vi: 'Trung tâm Văn hóa Á Châu & Làng Yangnim' }, desc: { ko: '남도의 미식과 근대역사·예술이 살아 숨 쉬는 감성 골목 투어', en: 'Art alley, modern heritage & authentic Jeolla cuisine.', vi: 'Khám phá con hẻm nghệ thuật cổ kính và ẩm thực trứ danh vùng Jeolla.' }, priceKrw: 10000, ticketUrl: 'https://www.acc.go.kr', tag: 'Art & Food' },
      { id: 'att_9', region: '한국민속촌', category: '테마파크/놀거리', imageUrl: 'assets/images/korean_folk_village.jpg', title: { ko: '용인 한국민속촌 (K-사극 체험)', en: 'Korean Folk Village (Yongin)', vi: 'Làng dân tộc Hàn Quốc (Yongin)' }, desc: { ko: '조선시대 전통 가옥, 줄타기 공연, K-드라마 촬영지 명소', en: 'Authentic Joseon village, acrobatics & K-Drama filming set.', vi: 'Tái hiện làng quê triều đại Joseon, biểu diễn đi dây và bối cảnh phim cổ trang.' }, priceKrw: 32000, ticketUrl: 'https://www.koreanfolk.co.kr', tag: 'K-Culture' },
      { id: 'att_10', region: 'DMZ', category: '명소/입장권', imageUrl: 'assets/images/dmz_dora_observatory.jpg', title: { ko: 'DMZ 제3땅굴 · 도라전망대 안보투어', en: 'DMZ 3rd Tunnel & Dora Observatory', vi: 'Tour DMZ Đường hầm số 3 & Đài quan sát' }, desc: { ko: '여권 필수 지참! 분단의 현장을 직접 마주하는 세계 유일 안보 투어', en: 'Passport required! Iconic Korean Demilitarized Zone guided tour.', vi: 'Cần mang theo hộ chiếu! Tham quan khu phi quân sự lịch sử độc đáo nhất thế giới.' }, priceKrw: 65000, ticketUrl: 'https://dmz.paju.go.kr', tag: 'Security Tour' },
      { id: 'att_11', region: '제주', category: '명소/입장권', imageUrl: 'assets/images/jeju_seongsan_peak.jpg', title: { ko: '제주 성산일출봉 & 흑돼지 거리', en: 'Jeju Seongsan Ilchulbong & Black Pork Street', vi: 'Đỉnh Seongsan Ilchulbong Jeju & Phố Thịt Heo Đen' }, desc: { ko: '유네스코 세계자연유산 성산일출봉 트레킹과 제주 명물 흑돼지 숯불구이 미식 코스', en: 'UNESCO Sunrise Peak hike & famous Jeju black pork BBQ street.', vi: 'Leo núi ngắm bình minh tại Di sản Thiên nhiên UNESCO & thưởng thức BBQ thịt heo đen Jeju.' }, priceKrw: 5000, ticketUrl: 'https://www.visitjeju.net', tag: 'UNESCO Nature' },
      { id: 'att_12', region: '전주', category: '특색거리/전통시장', imageUrl: 'assets/images/jeonju_hanok_bibimbap.jpg', title: { ko: '전주 한옥마을 & 전통 비빔밥 체험', en: 'Jeonju Hanok Village & Bibimbap Experience', vi: 'Làng Hanok Jeonju & Trải nghiệm Cơm trộn Bibimbap' }, desc: { ko: '700여 채의 고즈넉한 한옥 거리 산책과 유네스코 음식창의도시 전주 비빔밥 쿠킹 체험', en: '700+ traditional Hanok houses & authentic Jeonju Bibimbap culinary experience.', vi: 'Dạo bước giữa hơn 700 ngôi nhà Hanok cổ và tự tay làm món cơm trộn Jeonju trứ danh.' }, priceKrw: 25000, ticketUrl: 'https://tour.jeonju.go.kr', tag: 'Hanok & Food' }
    ],
    regionalPackages: [
      {
        id: 'busan',
        imageUrl: 'assets/images/busan_gamcheon_village.jpg',
        name: { ko: '부산여행 (해운대·광안리·감천)', en: 'Busan Tour (Haeundae & Gamcheon)', vi: 'Tour Busan (Haeundae & Gamcheon)' },
        badge: 'PUS / KTX 인기 1위',
        basePerDayKrw: 165000,
        itineraries: {
          '2D1N': ['Day 1: 부산역/김해공항 픽업 ➔ 감천문화마을 ➔ 자갈치시장 ➔ 광안리 야경', 'Day 2: 해운대 블루라인파크 ➔ 해동용궁사 ➔ 센텀시티 면세쇼핑 ➔ 복귀'],
          '3D2N': ['Day 1: 부산 도착 ➔ 영도 흰여울문화마을 ➔ 남포동 BIFF거리', 'Day 2: 해운대 스카이캡슐 ➔ 달맞이길 ➔ 송정 서핑/카페 ➔ 광안리 루프탑', 'Day 3: 범어사 산사체험 ➔ 온천장 ➔ 출국 공항/KTX 샌딩'],
          '4D3N': ['Day 1: 김해공항 픽업 ➔ 감천문화마을 ➔ 송도해상케이블카', 'Day 2: 해운대 블루라인파크 ➔ 해동용궁사 ➔ 기장 대게 특식', 'Day 3: 경주 불국사·황리단길 당일 연계 투어 ➔ 부산 복귀', 'Day 4: 자유 쇼핑 & 김해공항/서울 리무진 이동']
        },
        hotels: [
          { id: 'h_bs_1', name: { ko: '파라다이스 호텔 부산 (해운대 5성급)', en: 'Paradise Hotel Busan (5★ Oceanfront)' }, grade: '5★ 특급', pricePerNightKrw: 340000, breakfast: true, feature: '해운대 오션뷰 & 야외 온천 씨메르', extUrl: 'https://www.busanparadisehotel.co.kr' },
          { id: 'h_bs_2', name: { ko: '시그니엘 부산 (엘시티 5성급)', en: 'SIGNIEL Busan (5★ Luxury)' }, grade: '5★ 럭셔리', pricePerNightKrw: 420000, breakfast: true, feature: '초고층 파노라마 해변뷰 인피니티풀', extUrl: 'https://www.lottehotel.com/busan-signiel' },
          { id: 'h_bs_3', name: { ko: 'H-에비뉴 광안리 호텔 (4성급 부티크)', en: 'H-Avenue Hotel Gwangalli (4★)' }, grade: '4★ 오션뷰', pricePerNightKrw: 165000, breakfast: true, feature: '광안대교 정면 뷰 & 테라스 루프탑', extUrl: 'https://www.visitbusan.net' }
        ]
      },
      {
        id: 'seoul',
        imageUrl: 'assets/images/hanbok_gyeongbokgung_girl.jpg',
        name: { ko: '서울여행 (경복궁·명동·성수·한강)', en: 'Seoul City Tour (Palaces & K-Pop)', vi: 'Tour Seoul (Cung điện & Mua sắm)' },
        badge: 'ICN 대표 코스',
        basePerDayKrw: 150000,
        itineraries: {
          '2D1N': ['Day 1: 인천공항 픽업 ➔ 경복궁 한복투어 ➔ 북촌한옥마을 ➔ 명동', 'Day 2: 남산 N서울타워 ➔ 성수동 핫플 ➔ 한강 크루즈 ➔ 공항 샌딩'],
          '3D2N': ['Day 1: 경복궁 ➔ 인사동 쌈지길 ➔ 청계천·명동 난타공연', 'Day 2: 롯데월드타워 서울스카이 ➔ 코엑스 별마당도서관 ➔ 강남 K-POP 거리', 'Day 3: 홍대/연남동 투어 ➔ 광장시장 미식 ➔ 공항 출국'],
          '4D3N': ['Day 1: 고궁·한옥마을 ➔ 종로 전통찻집', 'Day 2: DMZ 안보투어(반일) ➔ 홍대 나이트라이프', 'Day 3: 용인 한국민속촌 또는 에버랜드 종일 투어', 'Day 4: 더현대 서울 쇼핑 ➔ 인천공항 샌딩']
        },
        hotels: [
          { id: 'h_sl_1', name: { ko: '롯데호텔 서울 (명동 5성급)', en: 'LOTTE Hotel Seoul (5★ Myeongdong)' }, grade: '5★ 특급', pricePerNightKrw: 320000, breakfast: true, feature: '명동·을지로 도보 1분, 최고급 컨시어지', extUrl: 'https://www.lottehotel.com/seoul-hotel' },
          { id: 'h_sl_2', name: { ko: '신라스테이 광화문 (4성급 비즈니스)', en: 'Shilla Stay Gwanghwamun (4★)' }, grade: '4★ 비즈니스', pricePerNightKrw: 175000, breakfast: true, feature: '경복궁·인사동 인접 깔끔한 모던 객실', extUrl: 'https://www.shillastay.com' },
          { id: 'h_sl_3', name: { ko: '락고재 북촌 한옥스테이 (전통 부티크)', en: 'Rakkojae Bukchon Hanok Stay' }, grade: '전통 한옥', pricePerNightKrw: 290000, breakfast: true, feature: '130년 전통 기와 한옥 & 황토 찜질방', extUrl: 'https://www.rkj.co.kr' }
        ]
      },
      {
        id: 'andong',
        imageUrl: 'assets/images/andong_gyeongju_heritage.jpg',
        name: { ko: '안동·경주 역사문화여행', en: 'Andong & Gyeongju Heritage Tour', vi: 'Tour Di sản Andong & Gyeongju' },
        badge: '유네스코 헤리티지',
        basePerDayKrw: 160000,
        itineraries: {
          '2D1N': ['Day 1: 서울 출발 ➔ 안동 하회마을·부용대 ➔ 월영교 야경', 'Day 2: 도산서원 ➔ 안동 찜닭 거리 ➔ 서울 복귀'],
          '3D2N': ['Day 1: 안동 하회마을 ➔ 탈춤공연 ➔ 월영교', 'Day 2: 경주 이동 ➔ 불국사·석굴암 ➔ 황리단길·동궁과 월지', 'Day 3: 대릉원·첨성대 ➔ KTX/리무진 복귀'],
          '4D3N': ['Day 1: 안동 하회마을 & 한옥 숙박', 'Day 2: 병산서원 & 봉정사 ➔ 경주 이동', 'Day 3: 경주 세계유산 올데이 투어', 'Day 4: 부산 또는 서울 공항 연결 샌딩']
        },
        hotels: [
          { id: 'h_ad_1', name: { ko: '안동 구름에 전통리조트', en: 'Gurume Traditional Hanok Resort' }, grade: '전통 고택', pricePerNightKrw: 230000, breakfast: true, feature: '유서 깊은 고택 스테이 & 한식 정찬', extUrl: 'https://www.gurume-andong.com' },
          { id: 'h_ad_2', name: { ko: '힐튼 경주 (보문단지 5성급)', en: 'Hilton Gyeongju (5★ Bomun Lake)' }, grade: '5★ 특급', pricePerNightKrw: 280000, breakfast: true, feature: '보문호수 전망 & 가족형 리조트', extUrl: 'https://www.hiltongyeongju.co.kr' }
        ]
      },
      {
        id: 'yeosu',
        imageUrl: 'assets/images/yeosu_night_sea.jpg',
        name: { ko: '여수·남해 힐링 해양투어', en: 'Yeosu Ocean & Night Sea Tour', vi: 'Tour Biển Đêm Yeosu' },
        badge: '낭만 밤바다',
        basePerDayKrw: 155000,
        itineraries: {
          '2D1N': ['Day 1: KTX/리무진 여수 도착 ➔ 오동도 ➔ 해상케이블카 ➔ 낭만포차', 'Day 2: 향일암 일출 ➔ 아쿠아플라넷 ➔ 여수 게장백반 ➔ 복귀'],
          '3D2N': ['Day 1: 여수 도착 ➔ 이순신광장 ➔ 여수 밤바다 크루즈', 'Day 2: 순천만 국가정원·습지 연계 ➔ 여수 예술랜드', 'Day 3: 해상케이블카 ➔ 돌산갓김치 체험 ➔ 복귀'],
          '4D3N': ['Day 1~2: 여수 핵심 투어 & 케이블카', 'Day 3: 남해 독일마을 & 다랭이마을 드라이브', 'Day 4: 부산 김해공항 또는 서울 복귀']
        },
        hotels: [
          { id: 'h_ys_1', name: { ko: '소노캄 여수 (오동도 5성급)', en: 'Sono Calm Yeosu (5★ Ocean)' }, grade: '5★ 오션', pricePerNightKrw: 250000, breakfast: true, feature: '여수 밤바다 오동도 파노라마 뷰', extUrl: 'https://www.sonohotelsresorts.com' },
          { id: 'h_ys_2', name: { ko: '라마다 프라자 여수 (4성급 짚트랙)', en: 'Ramada Plaza Yeosu (4★)' }, grade: '4★ 리조트', pricePerNightKrw: 160000, breakfast: true, feature: '루프탑 인피니티풀 & 해상 짚트랙', extUrl: 'https://www.ramadaplazayeosu.com' }
        ]
      },
      {
        id: 'gwangju',
        imageUrl: 'assets/images/gwangju_mudeungsan_art.jpg',
        name: { ko: '광주·전남 미식·예술투어', en: 'Gwangju Art & Gastronomy Tour', vi: 'Tour Nghệ thuật & Ẩm thực Gwangju' },
        badge: '남도 미식 1번지',
        basePerDayKrw: 145000,
        itineraries: {
          '2D1N': ['Day 1: 광주송정역 ➔ 1913송정역시장 ➔ 양림동 펭귄마을 ➔ ACC', 'Day 2: 무등산 케이블카 ➔ 담양 죽녹원 & 떡갈비 ➔ 복귀'],
          '3D2N': ['Day 1: 광주 도심 예술투어 & 한정식', 'Day 2: 담양 죽녹원·메타세쿼이아길 ➔ 보성 녹차밭', 'Day 3: 전주 한옥마을 경유 ➔ 서울 복귀'],
          '4D3N': ['Day 1~2: 광주·담양 투어', 'Day 3: 목포 해상케이블카 & 홍어/낙지 미식', 'Day 4: KTX/리무진 복귀']
        },
        hotels: [
          { id: 'h_gj_1', name: { ko: '홀리데이 인 광주 (5성급)', en: 'Holiday Inn Gwangju (5★)' }, grade: '5★ 특급', pricePerNightKrw: 195000, breakfast: true, feature: '김대중컨벤션센터 인접 인터내셔널 호텔', extUrl: 'https://www.ihg.com' },
          { id: 'h_gj_2', name: { ko: '라마다 플라자 충장 (4성급)', en: 'Ramada Plaza Chungjang (4★)' }, grade: '4★ 시티', pricePerNightKrw: 135000, breakfast: true, feature: 'ACC·충장로 도보 3분 최적 위치', extUrl: 'https://www.ramadagwangju.com' }
        ]
      },
      {
        id: 'dmz',
        imageUrl: 'assets/images/dmz_imjingak_peace.jpg',
        name: { ko: 'DMZ 안보 & 파주 아울렛 투어', en: 'DMZ Peace & Paju Tour', vi: 'Tour Khu phi quân sự DMZ' },
        badge: '외국인 인기 1위',
        basePerDayKrw: 130000,
        itineraries: {
          '2D1N': ['Day 1: 임진각 평화누리 ➔ 제3땅굴 ➔ 도라전망대 ➔ 헤이리 예술마을', 'Day 2: 파주 프리미엄 아울렛 ➔ 마장호수 출렁다리 ➔ 서울 복귀'],
          '3D2N': ['Day 1: DMZ 핵심 안보코스(여권 필수)', 'Day 2: 파주 출판도시 & 감악산 출렁다리', 'Day 3: 서울 경복궁·명동 쇼핑 연계'],
          '4D3N': ['Day 1: DMZ 안보투어', 'Day 2~3: 강원도 춘천 남이섬 & 설악산 연계', 'Day 4: 인천공항 출국 샌딩']
        },
        hotels: [
          { id: 'h_dmz_1', name: { ko: '소노캄 고양 (수도권 서북부 5성급)', en: 'Sono Calm Goyang (5★)' }, grade: '5★ 특급', pricePerNightKrw: 210000, breakfast: true, feature: 'DMZ·인천공항 30분 거리 최적 거점', extUrl: 'https://www.sonohotelsresorts.com' }
        ]
      }
    ],
    rentalCars: [
      { id: 'rc_sedan', name: { ko: '중형 세단 (쏘나타 / K5)', en: 'Mid-size Sedan (Sonata / K5)', vi: 'Sedan hạng trung (Sonata / K5)' }, seats: 5, luggage: 3, pricePerDayKrw: 85000, insurancePerDayKrw: 20000 },
      { id: 'rc_suv', name: { ko: '패밀리 SUV (쏘렌토 / 싼타페)', en: 'Family SUV (Sorento / Santa Fe)', vi: 'SUV Gia đình (Sorento / Santa Fe)' }, seats: 5, luggage: 4, pricePerDayKrw: 115000, insurancePerDayKrw: 25000 },
      { id: 'rc_van', name: { ko: '9인승 미니밴 (카니발 / 스타리아)', en: '9-Seater Minivan (Carnival / Staria)', vi: 'Xe Minivan 9 chỗ (Carnival / Staria)' }, seats: 9, luggage: 7, pricePerDayKrw: 155000, insurancePerDayKrw: 30000 }
    ],
    busFleet: [
      { id: 'bus_1', name: '리무진 1호차', plate: '서울70바 1001', grade: '28인승 우등', capacity: 28, driver: '김태훈 기사', status: 'available' },
      { id: 'bus_2', name: '리무진 2호차', plate: '서울70바 1002', grade: '21인승 프리미엄', capacity: 21, driver: '박성민 기사', status: 'available' },
      { id: 'bus_3', name: '리무진 3호차', plate: '서울70바 1003', grade: '28인승 우등', capacity: 28, driver: '이정호 기사', status: 'available' },
      { id: 'bus_4', name: '리무진 4호차', plate: '서울70바 1004', grade: '21인승 프리미엄', capacity: 21, driver: '최준혁 기사', status: 'available' },
      { id: 'bus_5', name: '리무진 5호차', plate: '서울70바 1005', grade: '28인승 우등', capacity: 28, driver: '강동원 기사', status: 'available' },
      { id: 'bus_6', name: '리무진 6호차', plate: '서울70바 1006', grade: '28인승 우등', capacity: 28, driver: '정우성 기사', status: 'available' },
      { id: 'bus_7', name: '리무진 7호차', plate: '서울70바 1007', grade: '21인승 프리미엄', capacity: 21, driver: '조인성 기사', status: 'available' },
      { id: 'bus_8', name: '리무진 8호차', plate: '서울70바 1008', grade: '28인승 우등', capacity: 28, driver: '송중기 기사', status: 'available' },
      { id: 'bus_9', name: '리무진 9호차', plate: '서울70바 1009', grade: '28인승 우등', capacity: 28, driver: '현빈 기사', status: 'maintenance' },
      { id: 'bus_10', name: '리무진 10호차', plate: '서울70바 1010', grade: '21인승 프리미엄', capacity: 21, driver: '공유 기사', status: 'available' }
    ],
    busDispatches: [
      { id: 'disp_1', busId: 'bus_1', route: '서울 ➔ 부산', date: d1, time: '08:30', pickupSpot: '명동 롯데호텔 정문', priceKrw: 68000, status: 'Open', bookedSeats: ['1A', '1B', '4C'], blockedSeats: ['1C'] },
      { id: 'disp_2', busId: 'bus_2', route: '서울 ➔ 부산', date: d1, time: '10:00', pickupSpot: '서울역 15번 출구', priceKrw: 89000, status: 'Open', bookedSeats: ['2A'], blockedSeats: [] },
      { id: 'disp_3', busId: 'bus_3', route: '부산 ➔ 서울', date: d2, time: '09:00', pickupSpot: '부산역 광장 투어버스 승강장', priceKrw: 68000, status: 'Open', bookedSeats: ['3A', '3B'], blockedSeats: ['1C'] },
      { id: 'disp_4', busId: 'bus_4', route: '서울 ➔ 광주', date: d1, time: '09:30', pickupSpot: '광화문 동화면세점 앞', priceKrw: 65000, status: 'Open', bookedSeats: [], blockedSeats: [] },
      { id: 'disp_5', busId: 'bus_5', route: '서울 ➔ 안동', date: d2, time: '08:00', pickupSpot: '명동 롯데호텔 정문', priceKrw: 55000, status: 'Open', bookedSeats: ['2C'], blockedSeats: [] },
      { id: 'disp_6', busId: 'bus_6', route: '서울 ➔ 여수', date: d2, time: '07:30', pickupSpot: '서울역 15번 출구', priceKrw: 62000, status: 'Open', bookedSeats: [], blockedSeats: [] }
    ],
    airportTransfers: [
      { id: 'at_icn_sedan', airport: 'ICN', routeLabel: '인천국제공항 (ICN) ↔ 서울 시내 호텔', vehicle: '제네시스 G80 / K8 세단', capacity: '최대 3명 · 캐리어 3개', priceKrw: 110000, chauffeur: '이준호 전담기사', exp: '무사고 14년', langs: ['English', '한국어'], rating: '4.98' },
      { id: 'at_icn_van', airport: 'ICN', routeLabel: '인천국제공항 (ICN) ↔ 서울 시내 호텔', vehicle: '벤츠 스프린터 / 스타리아 라운지', capacity: '최대 8명 · 캐리어 8개', priceKrw: 165000, chauffeur: '박민수 전담기사', exp: '무사고 11년', langs: ['English', 'Tiếng Việt', '한국어'], rating: '4.96' },
      { id: 'at_pus_sedan', airport: 'PUS', routeLabel: '김해국제공항 (PUS) ↔ 해운대·서면 호텔', vehicle: '그랜저 캘리그래피', capacity: '최대 3명 · 캐리어 3개', priceKrw: 65000, chauffeur: '김철수 부산 전담기사', exp: '무사고 16년', langs: ['English', '日本語', '한국어'], rating: '4.99' },
      { id: 'at_pus_van', airport: 'PUS', routeLabel: '김해국제공항 (PUS) ↔ 해운대·광안리 호텔', vehicle: '카니발 하이리무진 9인승', capacity: '최대 7명 · 캐리어 7개', priceKrw: 95000, chauffeur: '정현우 부산 전담기사', exp: '무사고 10년', langs: ['English', '中文', '한국어'], rating: '4.95' }
    ],
    closedDates: [],
    reservations: [
      { id: 'RES-261126-01', tourCode: 'KR-BS-2601', customerName: 'David Miller', email: 'david.miller@example.com', locale: 'en', type: '지역 패키지 (부산 2박3일)', airportRoute: 'ICN ➔ PUS Open-jaw', totalKrw: 1450000, status: 'Confirmed', createdAt: '2026-11-26 10:15' }
    ],
    inquiries: [
      {
        id: 'INQ-001',
        type: 'custom',
        customerName: 'Nguyen Thi Lan',
        email: 'lan.nguyen@example.vn',
        sourceLocale: 'en',
        travelDates: `${d1} ~ ${d2} (2박3일)`,
        paxDetail: '성인 남 2, 성인 여 2, 아동 1',
        airport: '김해공항(PUS) 입국 ➔ 인천공항(ICN) 출국',
        purpose: '가족 힐링 & K-Food 투어',
        regions: ['부산', '서울'],
        transport: '전용 리무진버스 + KTX',
        originalText: 'We would like to book an Incheon Airport pickup and limousine bus.',
        koTranslatedText: '인천공항 픽업 차량과 전용 리무진 예약을 원합니다',
        adminReplyKo: '',
        translatedReply: '',
        status: 'Waiting',
        createdAt: '2026-11-26 11:20'
      },
      {
        id: 'INQ-002',
        type: 'qna',
        customerName: 'Sarah Jenkins',
        email: 'sarah.j@example.com',
        sourceLocale: 'en',
        originalText: 'Where does the chauffeur wait at Gimhae Airport?',
        koTranslatedText: '김해공항 도착 시 운전기사는 어디에서 대기하나요?',
        adminReplyKo: '김해공항 입국 시 전담 기사가 입국장 앞에서 피켓을 들고 대기합니다.',
        translatedReply: 'Upon arrival at Gimhae Airport (PUS), our dedicated chauffeur will wait with a name board.',
        status: 'Answered',
        createdAt: '2026-11-25 16:40'
      }
    ],
    tourOperations: [
      {
        tourCode: 'KR-BS-2601',
        title: 'David Miller 가족 부산·서울 2박3일',
        routeBadge: 'ICN ➔ PUS 오픈조',
        manager: '김민수 가이드',
        progress: 65,
        revenueKrw: 1450000,
        expenses: [
          { id: 'exp_1', date: fmt(0), category: '호텔/숙박', memo: '해운대 4성급 객실 2실 선결제', amountKrw: 330000, receiptName: 'hotel_receipt.jpg', receiptDataUrl: '', writer: '관리자(PC)' },
          { id: 'exp_2', date: fmt(0), category: '식사/간식비', memo: '광안리 해산물 정식 팀 식대', amountKrw: 185000, receiptName: 'dinner_receipt.jpg', receiptDataUrl: '', writer: '김민수 가이드(모바일)' }
        ]
      },
      {
        tourCode: 'KR-SL-2602',
        title: 'VIP 기업 연수 서울·DMZ 3박4일',
        routeBadge: 'ICN 왕복',
        manager: '이서연 가이드',
        progress: 40,
        revenueKrw: 3200000,
        expenses: [
          { id: 'exp_3', date: fmt(0), category: '차량/주유/통행·주차', memo: '리무진 2호차 주유 및 톨게이트', amountKrw: 140000, receiptName: '', receiptDataUrl: '', writer: '박지훈 OP(모바일)' }
        ]
      }
    ],
    staffList: [
      { id: 'st_1', name: '김대표 (총괄)', role: '대표 / 총괄 OP', email: 'ceo@kroyaltour.kr', phone: '010-1234-5678', notifyBooking: true, notifyInquiry: true },
      { id: 'st_2', name: '이서연 팀장', role: '인바운드 예약·CS', email: 'cs@kroyaltour.kr', phone: '010-2345-6789', notifyBooking: true, notifyInquiry: true },
      { id: 'st_3', name: '김민수 가이드', role: '전담 투어 가이드', email: 'guide.kim@kroyaltour.kr', phone: '010-3456-7890', notifyBooking: false, notifyInquiry: false },
      { id: 'st_4', name: '박지훈 OP', role: '배차·현장 운영', email: 'op.park@kroyaltour.kr', phone: '010-4567-8901', notifyBooking: true, notifyInquiry: false }
    ],
    kakaoConfig: {
      bizChannelId: '@kroyaltour',
      senderKey: 'KAKAO_BIZ_READY_KEY',
      bookingTplCode: 'TPL_BOOKING_001',
      inquiryTplCode: 'TPL_INQUIRY_002',
      status: '연동 준비완료 (향후 활성화 예정)'
    },
    notificationLogs: [
      {
        id: 'NOTI-001',
        time: '2026-11-26 10:15:12',
        eventType: '신규 예약',
        recipientName: '김대표 (총괄), 이서연 팀장',
        recipientEmails: 'ceo@kroyaltour.kr, cs@kroyaltour.kr',
        subject: 'David Miller 님의 예약이 접수되었습니다',
        channel: 'Email (SMTP)',
        status: '발송 성공',
        previewBody: '예약번호: RES-261126-01 / 상품: 부산 2박3일 패키지 / 입출국: ICN ➔ PUS / 금액: ₩1,450,000'
      }
    ],
    faqList: [
      { id: 'faq_1', category: '공항 픽업', q: { ko: '비행기가 연착되면 공항 픽업 기사는 기다려 주나요?', en: 'Will the airport pickup driver wait if my flight is delayed?' }, a: { ko: '네, 걱정하지 않으셔도 됩니다! 예약 시 항공편명만 정확히 입력해 주시면 전담 관제팀이 실시간 운항 정보를 추적합니다.\n항공기 실제 착륙 시각을 기준으로 입국 수속 및 수하물 수취 시간을 고려하여 최대 90분까지 추가 요금 없이 무료로 대기합니다.\n담당 기사님께서는 입국장 출구 바로 앞에서 고객님의 영문 성함이 적힌 환영 피켓을 들고 기다리고 계십니다.\n혹시 수하물 지연이나 입국 심사가 길어지더라도 예약 확정서에 안내된 24시간 카카오톡·왓츠앱 핫라인으로 연락 주시면 즉시 조율해 드립니다.\n새벽 심야 도착이나 연착 상황에서도 안전하게 숙소 앞까지 모셔다 드리는 것이 K-Royal Tour의 원칙입니다.', en: 'Yes, please do not worry! Simply enter your flight number when booking and our dispatch team tracks your flight in real time.\nWe provide up to 90 minutes of complimentary waiting time after actual landing for immigration and baggage claim.\nYour dedicated chauffeur will greet you right outside the arrival gate holding a welcome board with your name.\nIf immigration takes longer than expected, simply message our 24/7 English/Multilingual WhatsApp & KakaoTalk hotline.\nEven for late-night arrivals or delays, we guarantee safe door-to-door transfer straight to your hotel.' } },
      { id: 'faq_2', category: '리무진/렌터카', q: { ko: '외국인이 한국에서 렌터카를 빌리려면 무엇이 필요한가요?', en: 'What documents are required for foreigners to rent a car in Korea?' }, a: { ko: '외국인 고객님께서 한국에서 직접 렌터카를 운전하시려면 출국 전 반드시 유효한 국제운전면허증(IDP)을 발급받아 오셔야 합니다.\n현장 차량 인수 시 ① 유효기간이 남은 여권 원본, ② 본국 운전면허증 원본, ③ 제네바 또는 비엔나 협약 양식의 국제운전면허증 실물 3가지를 모두 확인합니다.\n모바일 이미지나 사본은 한국 도로교통법상 인정되지 않으므로 반드시 종이 책자 형태의 실물을 지참해 주세요.\n운전자 나이는 만 21세 이상(9인승 이상 미니밴은 만 26세 이상) 및 운전 경력 1년 이상이어야 대여가 가능합니다.\n면허 규정이 헷갈리시는 경우 전담 기사 포함 전용 리무진이나 프라이빗 밴 상품을 이용하시면 훨씬 편안하게 여행하실 수 있습니다.', en: 'To drive a rental car in Korea, foreign visitors must bring a physical International Driving Permit (IDP) issued before departure.\nAt pickup, you must present three originals: (1) Valid Passport, (2) Home Country Driver License, and (3) Physical IDP (Geneva/Vienna Convention).\nDigital photos or copies are not accepted under Korean traffic law, so please carry the physical booklet.\nDrivers must be at least 21 years old (26+ for 9-seater vans) with over 1 year of driving experience.\nIf you prefer not to drive, our private chauffeur vans and luxury limousine buses are always ready for stress-free travel.' } },
      { id: 'faq_3', category: '결제/취소', q: { ko: '예약 취소 시 환불 수수료 규정은 어떻게 되나요?', en: 'What is the cancellation and refund policy?' }, a: { ko: 'K-Royal Tour는 고객님의 갑작스러운 일정 변경을 배려하여 투명하고 합리적인 표준 환불 규정을 운영하고 있습니다.\n투어 출발일 기준 7일 전(한국시간 18:00 기준)까지 취소 요청 시 결제 금액의 100%를 위약금 없이 전액 환불해 드립니다.\n출발 3일~6일 전 취소 시 20%의 취소 수수료가 발생하며, 출발 1일~2일 전 취소 시에는 50%의 수수료가 부과됩니다.\n여행 당일 취소 및 사전 연락 없는 노쇼(No-Show)의 경우 호텔·차량 위약금으로 인해 환불이 어려운 점 양해 부탁드립니다.\n천재지변으로 인한 항공기 결항 시에는 결항 확인서를 제출해 주시면 전액 환불 또는 무료 일정 변경으로 신속히 도와드립니다.', en: 'K-Royal Tour operates a transparent and fair refund policy for unexpected schedule changes.\nCancellations made at least 7 days before departure (18:00 KST) receive a 100% full refund with zero penalty.\nCancellations 3-6 days prior incur a 20% fee, and 1-2 days prior incur a 50% fee.\nSame-day cancellations or No-Shows are non-refundable due to hotel and vehicle commitments.\nIn case of flight cancellation due to severe weather, submitting the airline certificate qualifies for a full refund or free rescheduling.' } },
      { id: 'faq_4', category: '입국/비자', q: { ko: '한국 입국 시 K-ETA 전자여행허가가 꼭 필요한가요?', en: 'Do I need a K-ETA to enter South Korea?' }, a: { ko: '대한민국 법무부는 무사증 입국이 가능한 국가의 국민을 대상으로 전자여행허가제(K-ETA)를 운영하고 있습니다.\n다만 한시적 K-ETA 면제 대상 국가(미국, 일본, 대만, 싱가포르, 영국 등 주요 22개국 이상) 여권 소지자는 면제 기간 중 별도 신청 없이 입국 가능합니다.\n면제 대상에 해당하지 않는 국가의 고객님께서는 최소 탑승 72시간 전까지 공식 K-ETA 홈페이지 또는 모바일 앱을 통해 승인을 받으셔야 합니다.\n만 17세 이하 어린이 및 만 65세 이상 어르신은 K-ETA 신청이 면제되나, 희망 시 자발적 신청을 통해 입국신고서 작성을 생략할 수 있습니다.\n비자 또는 K-ETA 관련 최신 규정이 궁금하시면 [여행문의] 메뉴에 국적을 남겨주시면 담당자가 즉시 확인해 드립니다.', en: 'South Korea operates the Korea Electronic Travel Authorization (K-ETA) for visa-waiver nationals.\nHowever, citizens of temporarily exempted countries (such as US, Japan, UK, Singapore, etc.) can enter without K-ETA during the exemption period.\nTravelers from non-exempt countries must apply via the official K-ETA website/app at least 72 hours before boarding.\nChildren aged 17 or under and seniors aged 65 or over are exempt from mandatory K-ETA.\nIf you are unsure about your nationality rules, please leave a quick message in Travel Inquiry and our team will verify immediately.' } },
      { id: 'faq_5', category: '멀티 공항', q: { ko: '인천공항으로 입국해서 부산 김해공항으로 출국하는 일정도 예약 가능한가요?', en: 'Can I arrive at Incheon Airport (ICN) and depart from Gimhae Busan Airport (PUS)?' }, a: { ko: '네, 물론입니다! 저희 K-Royal Tour는 인천공항(ICN)과 김해공항(PUS) 양방향 멀티 공항 입·출국(오픈조) 동선에 완벽히 특화되어 있습니다.\n[지역별관광정보] 예약 빌더 4단계에서 입·출국 공항 동선 중 [인천 입국 ➔ 김해/부산 출국] 또는 [김해 입국 ➔ 인천 출국]을 선택하시면 됩니다.\n서울에서 관광을 마치신 후 전용 리무진 버스나 KTX 고속열차를 이용해 부산으로 편안하게 이동하시고, 마지막 날 김해공항까지 안전하게 샌딩해 드립니다.\n서울로 다시 되돌아가는 불필요한 이동 시간을 최소 4시간 이상 절약할 수 있어 외국인 자유·가족 여행객분들께 가장 인기가 높습니다.\n맞춤 일정표와 견적서가 필요하시면 여행문의 탭에서 희망 공항을 선택해 의뢰해 주세요.', en: 'Yes, absolutely! K-Royal Tour specializes in Open-Jaw multi-airport itineraries connecting Incheon (ICN) and Gimhae/Busan (PUS).\nSimply select "ICN Arrival ➔ PUS Departure" (or vice versa) in Step 4 of our Regional Tour Builder.\nAfter touring Seoul, travel seamlessly to Busan via our Luxury Limousine Bus or KTX, and enjoy private drop-off at Gimhae Airport.\nThis saves over 4 hours of unnecessary return travel time and is our top-rated route for families and groups.\nFeel free to request a custom Open-Jaw itinerary anytime via our Travel Inquiry page.' } },
      { id: 'faq_6', category: '리무진버스', q: { ko: '전용 리무진 버스에 큰 여행용 캐리어(수하물)를 몇 개까지 실을 수 있나요?', en: 'How many large suitcases can I bring on the Luxury Limousine Bus?' }, a: { ko: '저희가 직영 운영하는 28인승 우등 및 21인승 프리미엄 리무진 버스는 모두 대형 하부 트렁크 수하물칸을 갖추고 있습니다.\n탑승객 1인당 28인치 대형 캐리어 최대 2개와 기내용 백팩/소형 가방 1개까지 추가 요금 없이 무료로 적재하실 수 있습니다.\n유모차나 휠체어, 골프백 등 부피가 큰 특수 수하물이 있는 경우 예약 시 메모란이나 여행문의로 미리 알려주시면 전용 공간을 확보해 드립니다.\n좌석 위 선반에도 소형 가방을 보관할 수 있으며, 전 좌석 개별 USB 고속 충전 포트와 무료 초고속 Wi-Fi가 제공됩니다.\n장거리 이동 중에도 140도 리클라이닝 시트 덕분에 비행기 비즈니스석처럼 편안한 휴식을 즐기실 수 있습니다.', en: 'All our 28-seater Superior and 21-seater Premium Limousine Buses feature spacious under-floor luggage compartments.\nEach passenger may bring up to 2 large suitcases (28-inch) plus 1 carry-on bag completely free of charge.\nIf you have strollers, wheelchairs, or golf bags, please note it during booking so we can reserve dedicated cargo space.\nInside the cabin, enjoy overhead racks, 140-degree reclining seats, individual USB fast chargers, and complimentary Wi-Fi.\nLong-distance travel between Seoul, Busan, Andong, and Yeosu feels just like flying business class.' } },
      { id: 'faq_7', category: '리무진버스', q: { ko: '리무진 버스 좌석 지정 시 창측과 내측, 1인 독립석은 어떻게 다른가요?', en: 'What is the difference between Window, Aisle, and Solo Window seats on the bus?' }, a: { ko: '저희 리무진 버스는 2+1 배열(좌측 2석, 중앙 통로, 우측 1인 독립석)로 설계되어 일반 고속버스보다 좌석 간격이 훨씬 넓습니다.\n[창측 좌석(A)]은 왼쪽 파노라마 창문을 통해 한국의 아름다운 산과 바다 풍경을 감상하기에 가장 좋은 위치입니다.\n[내측/통로측 좌석(B)]은 화장실 휴게소 이용이나 통로 이동이 잦은 고객님, 그리고 2인 동반객이 창측(A)과 나란히 앉기에 좋습니다.\n[1인 독립 창측(C)]은 오른쪽에 혼자 앉는 프리미엄 단독 좌석으로, 양옆 방해 없이 완벽한 프라이버시와 창밖 뷰를 동시에 누릴 수 있습니다.\n좌석 평면도 상단의 빠른 필터 버튼을 누르시면 원하시는 속성 좌석만 밝게 표시되어 3초 만에 고르실 수 있습니다.', en: 'Our limousine coaches feature a spacious 2+1 seating layout (2 seats on left, center aisle, 1 solo seat on right).\nWindow Seats (A) offer panoramic views of Korea’s mountains and coastlines on the left side.\nAisle Seats (B) allow easy aisle access and pair with Window Seats (A) for couples or families.\nSolo Window Seats (C) are single independent seats on the right offering both privacy and a window view without neighbors.\nUse the quick filter chips above our airline-style seat map to highlight your preferred seat type in seconds.' } },
      { id: 'faq_8', category: '숙박/호텔', q: { ko: '지역별 패키지 예약 시 호텔 조식과 침대 타입(트윈/더블)을 선택할 수 있나요?', en: 'Are breakfast and bed types (Twin/Double) selectable in regional packages?' }, a: { ko: '네! 지역별 대표 숙박업체 카드에 조식 포함 여부가 명시되어 있으며, 대부분의 4~5성급 제휴 호텔은 프리미엄 조식 뷔페가 포함되어 있습니다.\n침대 타입은 예약자 정보 입력 시 메모란에 [더블 베드(킹)] 또는 [트윈 베드(싱글 2개)], 혹은 가족용 [온돌/패밀리룸] 희망 사항을 적어주시면 우선 배정해 드립니다.\n유아 동반 고객님을 위한 아기 침대(Baby Crib)나 침대 가드 요청도 호텔 체크인 전 무료로 사전 요청해 드립니다.\n또한 부산 해운대·광안리 오션뷰 호텔 등 전망 객실 업그레이드를 원하시는 경우 맞춤 의뢰를 통해 할인된 제휴가로 안내받으실 수 있습니다.\n체크인은 보통 오후 3시, 체크아웃은 오전 11시 기준이며 체크인 전후 호텔 무료 짐 보관 서비스도 이용 가능합니다.', en: 'Yes! Each representative hotel card displays breakfast inclusion, and most 4-5 star partner hotels include a buffet breakfast.\nYou can specify Double (King), Twin (2 Singles), or Family/Ondol room preferences, and we will arrange priority assignment.\nBaby cribs and bed guards for infants are also requested free of charge prior to check-in.\nUpgrades to Haeundae or Gwangalli Ocean View rooms are available at special agency partner rates.\nStandard check-in is 15:00 and check-out is 11:00, with complimentary luggage storage before and after check-in.' } },
      { id: 'faq_9', category: '관광지/입장권', q: { ko: '경복궁 투어 시 한복을 입으면 정말 입장료가 무료인가요?', en: 'Is admission to Gyeongbokgung Palace really free if I wear Hanbok?' }, a: { ko: '네, 사실입니다! 대한민국 문화재청 정책에 따라 전통 한복 또는 생활 한복을 착용한 모든 내·외국인 관람객은 경복궁 등 4대 고궁 입장이 무료입니다.\n저희 여행사 패키지 고객님께는 경복궁 정문(광화문) 도보 3분 거리의 프리미엄 한복 대여점 제휴 할인 혜택도 함께 안내해 드립니다.\n한복 대여점에는 영어·일본어·중국어·베트남어 소통이 가능한 직원이 상주하며 머리 손질과 전통 장신구까지 깔끔하게 스타일링해 줍니다.\n단, 경복궁은 매주 화요일이 정기 휴무일이므로(화요일엔 창덕궁 방문 권장) 일정 계획 시 참고해 주시기 바랍니다.\n야간 특별개장 시즌에 방문하시면 은은한 조명이 켜진 경회루와 근정전의 환상적인 야경도 감상하실 수 있습니다.', en: 'Yes, it is true! Under Cultural Heritage Administration policy, anyone wearing traditional Hanbok receives free entry to Korea’s Four Grand Palaces.\nOur tour guests also receive partner discounts at premium Hanbok rental shops just 3 minutes from Gwanghwamun Gate.\nRental shops offer multilingual staff, hairstyling, and traditional accessories for memorable palace photos.\nPlease note Gyeongbokgung Palace is closed every Tuesday (we recommend Changdeokgung Palace on Tuesdays).\nDuring night-opening seasons, you can also enjoy breathtaking illuminated views of Gyeonghoeru Pavilion.' } },
      { id: 'faq_10', category: '식사/할랄·채식', q: { ko: '할랄(Halal) 음식이나 비건·채식주의자를 위한 맞춤 식단 안내가 가능한가요?', en: 'Can you accommodate Halal, Vegan, or Vegetarian dietary requirements?' }, a: { ko: '네, 물론입니다! 동남아, 무슬림, 서구권 등 다양한 문화권 고객님들이 안심하고 K-푸드를 즐기실 수 있도록 맞춤 식단 케어를 제공합니다.\n[여행문의 - 맞춤 행사 진행 의뢰] 작성 시 상세 요청란에 할랄, 비건, 페스코, 특정 알레르기(갑각류·견과류 등)를 꼭 기재해 주세요.\n서울 이태원·명동·홍대 및 부산 해운대·남포동 일대의 공식 인증 할랄 레스토랑과 채식 전문 한식당(사찰음식, 비건 비빔밥 등)을 일정에 맞춰 배정해 드립니다.\n전담 가이드가 동행하는 투어에서는 식당 주문 전 돼지고기·육수 성분을 일일이 확인하여 교차 오염이 없도록 세심하게 안내합니다.\n한국의 건강한 채식 문화와 다채로운 식도락을 불편함 없이 100% 만끽하실 수 있습니다.', en: 'Yes, certainly! We provide customized meal care so Muslim, vegan, and vegetarian travelers can enjoy K-Food worry-free.\nPlease specify Halal, Vegan, Pescatarian, or food allergies in the Custom Tour Inquiry form.\nWe arrange certified Halal restaurants and authentic Vegan Korean dining (temple food, vegan bibimbap) across Seoul and Busan.\nOn guided tours, our guides double-check broth and meat ingredients with restaurant kitchens before ordering.\nEnjoy Korea’s rich culinary culture safely and comfortably throughout your entire journey.' } },
      { id: 'faq_11', category: '결제/통화', q: { ko: '한국 여행 중 현금 환전과 신용카드(해외카드) 사용은 어떻게 하나요?', en: 'How should I handle currency exchange and credit cards in Korea?' }, a: { ko: '대한민국은 세계 최고 수준의 카드 결제 인프라를 갖추고 있어 대부분의 식당, 카페, 백화점, 택시에서 Visa/Mastercard/AMEX 해외 카드가 즉시 결제됩니다.\n다만 광장시장·자갈치시장 등 전통시장 노점이나 교통카드(T-money) 충전 시에는 소액의 한국 원화(KRW) 현금이 필요합니다.\n인천공항과 김해공항 입국장 내 시중은행 환전소 또는 서울 명동 사설 환전소(가장 우대율이 좋음)에서 필요한 만큼만 환전하시는 것을 추천합니다.\n외국인 전용 선불카드인 와우패스(WOWPASS)나 나마네카드를 이용하시면 환전과 교통카드(티머니), 카드 결제를 카드 한 장으로 편리하게 해결할 수 있습니다.\n저희 여행사 웹사이트는 한국어는 원화(₩), 외국어는 달러($) 기준으로 실시간 요금을 투명하게 표시해 드립니다.', en: 'Korea has world-class card payment infrastructure; Visa, Mastercard, and AMEX are accepted at nearly all restaurants, shops, and taxis.\nHowever, small amounts of KRW cash are useful for traditional street markets (like Gwangjang Market) and T-money transit card top-ups.\nYou can exchange cash at airport bank booths or Myeongdong exchange offices (known for the best rates).\nForeigner prepaid cards like WOWPASS combine currency exchange, debit payment, and T-money transit in one card.\nOur website transparently displays prices in USD ($) for international guests and KRW (₩) for Korean speakers.' } },
      { id: 'faq_12', category: '통신/유심', q: { ko: '공항 도착 후 유심(USIM), eSIM, 포켓 와이파이는 어떻게 준비하나요?', en: 'How can I get a SIM card, eSIM, or Pocket Wi-Fi upon arrival?' }, a: { ko: '인천공항(1·2터미널)과 김해공항 입국장에 나오시면 SKT, KT, LG U+ 통신사 로밍 부스가 24시간 또는 심야까지 운영되고 있습니다.\n스마트폰이 eSIM을 지원하는 최신 기종이라면 입국 전 온라인으로 구매해 QR코드만 스캔하면 공항에서 줄 서지 않고 바로 개통됩니다.\n일행이 2~4명 이상인 가족·단체 여행객이라면 무제한 데이터 포켓 와이파이 1대를 대여해 함께 공유하시는 것이 훨씬 경제적입니다.\n참고로 저희 K-Royal Tour의 모든 전용 리무진 버스와 공항 픽업 차량 내부에는 무료 초고속 Wi-Fi가 기본 제공되므로 이동 중에도 끊김 없이 인터넷을 쓰실 수 있습니다.\n한국에서는 구글 지도보다 네이버 지도(Naver Map)나 카카오맵(KakaoMap) 영문 버전을 설치하시면 도보 길찾기가 훨씬 정확합니다.', en: 'Upon arriving at Incheon (T1/T2) or Gimhae Airport, major Korean carrier booths (SKT, KT, LG U+) are conveniently located right in the arrival hall.\nIf your phone supports eSIM, purchasing online beforehand lets you activate data via QR code without waiting in line.\nFor groups of 2-4+, renting one unlimited Pocket Wi-Fi router is a very cost-effective option.\nAdditionally, all K-Royal Tour limousine buses and private pickup vehicles offer complimentary high-speed Wi-Fi onboard.\nWe also recommend installing Naver Map or KakaoMap (English mode) for the most accurate walking and transit navigation in Korea.' } },
      { id: 'faq_13', category: '비상/안전', q: { ko: '여행 중 긴급 상황이 발생하거나 길을 잃었을 때 어디로 연락해야 하나요?', en: 'Who should I contact in case of an emergency or getting lost in Korea?' }, a: { ko: '대한민국은 세계에서 가장 안전한 여행지 중 하나이며, 외국인 관광객을 위한 24시간 다국어 긴급 지원 시스템이 매우 잘 갖춰져 있습니다.\n한국관광공사 관광통역안내 전화 [1330]으로 거시면 24시간 영어, 일본어, 중국어, 베트남어, 태국어, 러시아어 등으로 통역 및 관광 안내를 무료로 받으실 수 있습니다.\n범죄 신고는 [112], 응급 환자·화재·구급차 요청은 [119]로 전화하시면 다국어 3자 통역 연결을 통해 즉시 출동 지원을 받으실 수 있습니다.\n저희 K-Royal Tour 예약 고객님께는 전담 한국인 가이드 직통 번호와 24시간 본사 긴급 데스크(+82-2-1234-5678) 연락처를 바우처와 함께 제공해 드립니다.\n여권 분실, 물건 분실, 병원 방문이 필요한 경우에도 지체 없이 연락 주시면 전담 직원이 즉시 도와드리겠습니다.', en: 'South Korea is one of the safest travel destinations globally, equipped with a 24/7 multilingual emergency support network.\nDial 1330 (Korea Travel Hotline) anytime for free 24-hour interpretation and travel assistance in English, Japanese, Chinese, Vietnamese, Thai, and more.\nFor police dial 112, and for medical emergencies/ambulance/fire dial 119 (three-way multilingual interpretation available).\nAll K-Royal Tour guests also receive our direct guide phone number and 24/7 headquarters emergency desk (+82-2-1234-5678).\nIf you ever lose a passport, misplace items, or need hospital assistance, contact us immediately and our staff will assist right away.' } }
    ]
  };
}

const TourStore = {
  getDb() {
    try {
      const raw = localStorage.getItem(DB_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    const init = getInitialDb();
    this.saveDb(init);
    return init;
  },
  saveDb(db) {
    localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(db));
  },
  resetDb() {
    const init = getInitialDb();
    this.saveDb(init);
    return init;
  },
  getActiveLanguages() {
    const db = this.getDb();
    return (db.languages || LANGUAGE_CATALOG).filter(l => l.active);
  },
  /**
   * 실시간 직원 알림 통합 디스패처 (Email + 향후 Kakao Alimtalk 어댑터)
   */
  dispatchAdminNotification(eventType, customerName, summaryText) {
    const db = this.getDb();
    const isBooking = eventType === '신규 예약';
    const targets = (db.staffList || []).filter(s => isBooking ? s.notifyBooking : s.notifyInquiry);
    if (targets.length === 0) return null;

    const subject = isBooking
      ? `${customerName} 님의 예약이 접수되었습니다`
      : `${customerName} 님의 문의가 접수되었습니다`;

    const logEntry = {
      id: `NOTI-${Date.now().toString().slice(-5)}`,
      time: new Date().toLocaleString('ko-KR'),
      eventType,
      recipientName: targets.map(s => s.name).join(', '),
      recipientEmails: targets.map(s => s.email).join(', '),
      subject,
      channel: 'Email (즉시 발송) / KakaoTalk(대기)',
      status: '발송 성공',
      previewBody: summaryText
    };
    db.notificationLogs.unshift(logEntry);
    this.saveDb(db);
    return logEntry;
  }
};
