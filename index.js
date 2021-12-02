import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {
  faAd,
  faAddressBook,
  faAddressCard,
  faAdjust,
  faAirFreshener,
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faAllergies,
  faAmbulance,
  faAmericanSignLanguageInterpreting,
  faAnchor,
  faAngleDoubleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleDoubleUp,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faAngry,
  faAnkh,
  faAppleAlt,
  faArchive,
  faArchway,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faArrowCircleDown,
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowCircleUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowsAlt,
  faArrowsAltH,
  faArrowsAltV,
  faArrowUp,
  faAssistiveListeningSystems,
  faAsterisk,
  faAt,
  faAtlas,
  faAtom,
  faAudioDescription,
  faAward,
  faBaby,
  faBabyCarriage,
  faBackspace,
  faBackward,
  faBacon,
  faBacteria,
  faBacterium,
  faBahai,
  faBalanceScale,
  faBalanceScaleLeft,
  faBalanceScaleRight,
  faBan,
  faBandAid,
  faBarcode,
  faBars,
  faBaseballBall,
  faBasketballBall,
  faBath,
  faBatteryEmpty,
  faBatteryFull,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryThreeQuarters,
  faBed,
  faBeer,
  faBell,
  faBellSlash,
  faBezierCurve,
  faBible,
  faBicycle,
  faBiking,
  faBinoculars,
  faBiohazard,
  faBirthdayCake,
  faBlender,
  faBlenderPhone,
  faBlind,
  faBlog,
  faBold,
  faBolt,
  faBomb,
  faBone,
  faBong,
  faBook,
  faBookDead,
  faBookmark,
  faBookMedical,
  faBookOpen,
  faBookReader,
  faBorderAll,
  faBorderNone,
  faBorderStyle,
  faBowlingBall,
  faBox,
  faBoxes,
  faBoxOpen,
  faBoxTissue,
  faBraille,
  faBrain,
  faBreadSlice,
  faBriefcase,
  faBriefcaseMedical,
  faBroadcastTower,
  faBroom,
  faBrush,
  faBug,
  faBuilding,
  faBullhorn,
  faBullseye,
  faBurn,
  faBus,
  faBusAlt,
  faBusinessTime,
  faCalculator,
  faCalendar,
  faCalendarAlt,
  faCalendarCheck,
  faCalendarDay,
  faCalendarMinus,
  faCalendarPlus,
  faCalendarTimes,
  faCalendarWeek,
  faCamera,
  faCameraRetro,
  faCampground,
  faCandyCane,
  faCannabis,
  faCapsules,
  faCar,
  faCarAlt,
  faCaravan,
  faCarBattery,
  faCarCrash,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCaretSquareDown,
  faCaretSquareLeft,
  faCaretSquareRight,
  faCaretSquareUp,
  faCaretUp,
  faCarrot,
  faCarSide,
  faCartArrowDown,
  faCartPlus,
  faCashRegister,
  faCat,
  faCertificate,
  faChair,
  faChalkboard,
  faChalkboardTeacher,
  faChargingStation,
  faChartArea,
  faChartBar,
  faChartLine,
  faChartPie,
  faCheck,
  faCheckCircle,
  faCheckDouble,
  faCheckSquare,
  faCheese,
  faChess,
  faChessBishop,
  faChessBoard,
  faChessKing,
  faChessKnight,
  faChessPawn,
  faChessQueen,
  faChessRook,
  faChevronCircleDown,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronCircleUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faChild,
  faChurch,
  faCircle,
  faCircleNotch,
  faCity,
  faClinicMedical,
  faClipboard,
  faClipboardCheck,
  faClipboardList,
  faClock,
  faClone,
  faClosedCaptioning,
  faCloud,
  faCloudDownloadAlt,
  faCloudMeatball,
  faCloudMoon,
  faCloudMoonRain,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudSun,
  faCloudSunRain,
  faCloudUploadAlt,
  faCocktail,
  faCode,
  faCodeBranch,
  faCoffee,
  faCog,
  faCogs,
  faCoins,
  faColumns,
  faComment,
  faCommentAlt,
  faCommentDollar,
  faCommentDots,
  faCommentMedical,
  faComments,
  faCommentsDollar,
  faCommentSlash,
  faCompactDisc,
  faCompass,
  faCompress,
  faCompressAlt,
  faCompressArrowsAlt,
  faConciergeBell,
  faCookie,
  faCookieBite,
  faCopy,
  faCopyright,
  faCouch,
  faCreditCard,
  faCrop,
  faCropAlt,
  faCross,
  faCrosshairs,
  faCrow,
  faCrown,
  faCrutch,
  faCube,
  faCubes,
  faCut,
  faDatabase,
  faDeaf,
  faDemocrat,
  faDesktop,
  faDharmachakra,
  faDiagnoses,
  faDice,
  faDiceD20,
  faDiceD6,
  faDiceFive,
  faDiceFour,
  faDiceOne,
  faDiceSix,
  faDiceThree,
  faDiceTwo,
  faDigitalTachograph,
  faDirections,
  faDisease,
  faDivide,
  faDizzy,
  faDna,
  faDog,
  faDollarSign,
  faDolly,
  faDollyFlatbed,
  faDonate,
  faDoorClosed,
  faDoorOpen,
  faDotCircle,
  faDove,
  faDownload,
  faDraftingCompass,
  faDragon,
  faDrawPolygon,
  faDrum,
  faDrumSteelpan,
  faDrumstickBite,
  faDumbbell,
  faDumpster,
  faDumpsterFire,
  faDungeon,
  faEdit,
  faEgg,
  faEject,
  faEllipsisH,
  faEllipsisV,
  faEnvelope,
  faEnvelopeOpen,
  faEnvelopeOpenText,
  faEnvelopeSquare,
  faEquals,
  faEraser,
  faEthernet,
  faEuroSign,
  faExchangeAlt,
  faExclamation,
  faExclamationCircle,
  faExclamationTriangle,
  faExpand,
  faExpandAlt,
  faExpandArrowsAlt,
  faExternalLinkAlt,
  faExternalLinkSquareAlt,
  faEye,
  faEyeDropper,
  faEyeSlash,
  faFan,
  faFastBackward,
  faFastForward,
  faFaucet,
  faFax,
  faFeather,
  faFeatherAlt,
  faFemale,
  faFighterJet,
  faFile,
  faFileAlt,
  faFileArchive,
  faFileAudio,
  faFileCode,
  faFileContract,
  faFileCsv,
  faFileDownload,
  faFileExcel,
  faFileExport,
  faFileImage,
  faFileImport,
  faFileInvoice,
  faFileInvoiceDollar,
  faFileMedical,
  faFileMedicalAlt,
  faFilePdf,
  faFilePowerpoint,
  faFilePrescription,
  faFileSignature,
  faFileUpload,
  faFileVideo,
  faFileWord,
  faFill,
  faFillDrip,
  faFilm,
  faFilter,
  faFingerprint,
  faFire,
  faFireAlt,
  faFireExtinguisher,
  faFirstAid,
  faFish,
  faFistRaised,
  faFlag,
  faFlagCheckered,
  faFlagUsa,
  faFlask,
  faFlushed,
  faFolder,
  faFolderMinus,
  faFolderOpen,
  faFolderPlus,
  faFont,
  faFontAwesomeLogoFull,
  faFootballBall,
  faForward,
  faFrog,
  faFrown,
  faFrownOpen,
  faFunnelDollar,
  faFutbol,
  faGamepad,
  faGasPump,
  faGavel,
  faGem,
  faGenderless,
  faGhost,
  faGift,
  faGifts,
  faGlassCheers,
  faGlasses,
  faGlassMartini,
  faGlassMartiniAlt,
  faGlassWhiskey,
  faGlobe,
  faGlobeAfrica,
  faGlobeAmericas,
  faGlobeAsia,
  faGlobeEurope,
  faGolfBall,
  faGopuram,
  faGraduationCap,
  faGreaterThan,
  faGreaterThanEqual,
  faGrimace,
  faGrin,
  faGrinAlt,
  faGrinBeam,
  faGrinBeamSweat,
  faGrinHearts,
  faGrinSquint,
  faGrinSquintTears,
  faGrinStars,
  faGrinTears,
  faGrinTongue,
  faGrinTongueSquint,
  faGrinTongueWink,
  faGrinWink,
  faGripHorizontal,
  faGripLines,
  faGripLinesVertical,
  faGripVertical,
  faGuitar,
  faHamburger,
  faHammer,
  faHamsa,
  faHandHolding,
  faHandHoldingHeart,
  faHandHoldingMedical,
  faHandHoldingUsd,
  faHandHoldingWater,
  faHandLizard,
  faHandMiddleFinger,
  faHandPaper,
  faHandPeace,
  faHandPointDown,
  faHandPointer,
  faHandPointLeft,
  faHandPointRight,
  faHandPointUp,
  faHandRock,
  faHands,
  faHandScissors,
  faHandshake,
  faHandshakeAltSlash,
  faHandshakeSlash,
  faHandsHelping,
  faHandSparkles,
  faHandSpock,
  faHandsWash,
  faHanukiah,
  faHardHat,
  faHashtag,
  faHatCowboy,
  faHatCowboySide,
  faHatWizard,
  faHdd,
  faHeading,
  faHeadphones,
  faHeadphonesAlt,
  faHeadset,
  faHeadSideCough,
  faHeadSideCoughSlash,
  faHeadSideMask,
  faHeadSideVirus,
  faHeart,
  faHeartbeat,
  faHeartBroken,
  faHelicopter,
  faHighlighter,
  faHiking,
  faHippo,
  faHistory,
  faHockeyPuck,
  faHollyBerry,
  faHome,
  faHorse,
  faHorseHead,
  faHospital,
  faHospitalAlt,
  faHospitalSymbol,
  faHospitalUser,
  faHotdog,
  faHotel,
  faHotTub,
  faHourglass,
  faHourglassEnd,
  faHourglassHalf,
  faHourglassStart,
  faHouseDamage,
  faHouseUser,
  faHryvnia,
  faHSquare,
  faIceCream,
  faIcicles,
  faIcons,
  faICursor,
  faIdBadge,
  faIdCard,
  faIdCardAlt,
  faIgloo,
  faImage,
  faImages,
  faInbox,
  faIndent,
  faIndustry,
  faInfinity,
  faInfo,
  faInfoCircle,
  faItalic,
  faJedi,
  faJoint,
  faJournalWhills,
  faKaaba,
  faKey,
  faKeyboard,
  faKhanda,
  faKiss,
  faKissBeam,
  faKissWinkHeart,
  faKiwiBird,
  faLandmark,
  faLanguage,
  faLaptop,
  faLaptopCode,
  faLaptopHouse,
  faLaptopMedical,
  faLaugh,
  faLaughBeam,
  faLaughSquint,
  faLaughWink,
  faLayerGroup,
  faLeaf,
  faLemon,
  faLessThan,
  faLessThanEqual,
  faLevelDownAlt,
  faLevelUpAlt,
  faLifeRing,
  faLightbulb,
  faLink,
  faLiraSign,
  faList,
  faListAlt,
  faListOl,
  faListUl,
  faLocationArrow,
  faLock,
  faLockOpen,
  faLongArrowAltDown,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faLongArrowAltUp,
  faLowVision,
  faLuggageCart,
  faLungs,
  faLungsVirus,
  faMagic,
  faMagnet,
  faMailBulk,
  faMale,
  faMap,
  faMapMarked,
  faMapMarkedAlt,
  faMapMarker,
  faMapMarkerAlt,
  faMapPin,
  faMapSigns,
  faMarker,
  faMars,
  faMarsDouble,
  faMarsStroke,
  faMarsStrokeH,
  faMarsStrokeV,
  faMask,
  faMedal,
  faMedkit,
  faMeh,
  faMehBlank,
  faMehRollingEyes,
  faMemory,
  faMenorah,
  faMercury,
  faMeteor,
  faMicrochip,
  faMicrophone,
  faMicrophoneAlt,
  faMicrophoneAltSlash,
  faMicrophoneSlash,
  faMicroscope,
  faMinus,
  faMinusCircle,
  faMinusSquare,
  faMitten,
  faMobile,
  faMobileAlt,
  faMoneyBill,
  faMoneyBillAlt,
  faMoneyBillWave,
  faMoneyBillWaveAlt,
  faMoneyCheck,
  faMoneyCheckAlt,
  faMonument,
  faMoon,
  faMortarPestle,
  faMosque,
  faMotorcycle,
  faMountain,
  faMouse,
  faMousePointer,
  faMugHot,
  faMusic,
  faNetworkWired,
  faNeuter,
  faNewspaper,
  faNotEqual,
  faNotesMedical,
  faObjectGroup,
  faObjectUngroup,
  faOilCan,
  faOm,
  faOtter,
  faOutdent,
  faPager,
  faPaintBrush,
  faPaintRoller,
  faPalette,
  faPallet,
  faPaperclip,
  faPaperPlane,
  faParachuteBox,
  faParagraph,
  faParking,
  faPassport,
  faPastafarianism,
  faPaste,
  faPause,
  faPauseCircle,
  faPaw,
  faPeace,
  faPen,
  faPenAlt,
  faPencilAlt,
  faPencilRuler,
  faPenFancy,
  faPenNib,
  faPenSquare,
  faPeopleArrows,
  faPeopleCarry,
  faPepperHot,
  faPercent,
  faPercentage,
  faPersonBooth,
  faPhone,
  faPhoneAlt,
  faPhoneSlash,
  faPhoneSquare,
  faPhoneSquareAlt,
  faPhoneVolume,
  faPhotoVideo,
  faPiggyBank,
  faPills,
  faPizzaSlice,
  faPlaceOfWorship,
  faPlane,
  faPlaneArrival,
  faPlaneDeparture,
  faPlaneSlash,
  faPlay,
  faPlayCircle,
  faPlug,
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faPodcast,
  faPoll,
  faPollH,
  faPoo,
  faPoop,
  faPooStorm,
  faPortrait,
  faPoundSign,
  faPowerOff,
  faPray,
  faPrayingHands,
  faPrescription,
  faPrescriptionBottle,
  faPrescriptionBottleAlt,
  faPrint,
  faProcedures,
  faProjectDiagram,
  faPumpMedical,
  faPumpSoap,
  faPuzzlePiece,
  faQrcode,
  faQuestion,
  faQuestionCircle,
  faQuidditch,
  faQuoteLeft,
  faQuoteRight,
  faQuran,
  faRadiation,
  faRadiationAlt,
  faRainbow,
  faRandom,
  faReceipt,
  faRecordVinyl,
  faRecycle,
  faRedo,
  faRedoAlt,
  faRegistered,
  faRemoveFormat,
  faReply,
  faReplyAll,
  faRepublican,
  faRestroom,
  faRetweet,
  faRibbon,
  faRing,
  faRoad,
  faRobot,
  faRocket,
  faRoute,
  faRss,
  faRssSquare,
  faRubleSign,
  faRuler,
  faRulerCombined,
  faRulerHorizontal,
  faRulerVertical,
  faRunning,
  faRupeeSign,
  faSadCry,
  faSadTear,
  faSatellite,
  faSatelliteDish,
  faSave,
  faSchool,
  faScrewdriver,
  faScroll,
  faSdCard,
  faSearch,
  faSearchDollar,
  faSearchLocation,
  faSearchMinus,
  faSearchPlus,
  faSeedling,
  faServer,
  faShapes,
  faShare,
  faShareAlt,
  faShareAltSquare,
  faShareSquare,
  faShekelSign,
  faShieldAlt,
  faShieldVirus,
  faShip,
  faShippingFast,
  faShoePrints,
  faShoppingBag,
  faShoppingBasket,
  faShoppingCart,
  faShower,
  faShuttleVan,
  faSign,
  faSignal,
  faSignature,
  faSignInAlt,
  faSignLanguage,
  faSignOutAlt,
  faSimCard,
  faSink,
  faSitemap,
  faSkating,
  faSkiing,
  faSkiingNordic,
  faSkull,
  faSkullCrossbones,
  faSlash,
  faSleigh,
  faSlidersH,
  faSmile,
  faSmileBeam,
  faSmileWink,
  faSmog,
  faSmoking,
  faSmokingBan,
  faSms,
  faSnowboarding,
  faSnowflake,
  faSnowman,
  faSnowplow,
  faSoap,
  faSocks,
  faSolarPanel,
  faSort,
  faSortAlphaDown,
  faSortAlphaDownAlt,
  faSortAlphaUp,
  faSortAlphaUpAlt,
  faSortAmountDown,
  faSortAmountDownAlt,
  faSortAmountUp,
  faSortAmountUpAlt,
  faSortDown,
  faSortNumericDown,
  faSortNumericDownAlt,
  faSortNumericUp,
  faSortNumericUpAlt,
  faSortUp,
  faSpa,
  faSpaceShuttle,
  faSpellCheck,
  faSpider,
  faSpinner,
  faSplotch,
  faSprayCan,
  faSquare,
  faSquareFull,
  faSquareRootAlt,
  faStamp,
  faStar,
  faStarAndCrescent,
  faStarHalf,
  faStarHalfAlt,
  faStarOfDavid,
  faStarOfLife,
  faStepBackward,
  faStepForward,
  faStethoscope,
  faStickyNote,
  faStop,
  faStopCircle,
  faStopwatch,
  faStopwatch20,
  faStore,
  faStoreAlt,
  faStoreAltSlash,
  faStoreSlash,
  faStream,
  faStreetView,
  faStrikethrough,
  faStroopwafel,
  faSubscript,
  faSubway,
  faSuitcase,
  faSuitcaseRolling,
  faSun,
  faSuperscript,
  faSurprise,
  faSwatchbook,
  faSwimmer,
  faSwimmingPool,
  faSynagogue,
  faSync,
  faSyncAlt,
  faSyringe,
  faTable,
  faTablet,
  faTabletAlt,
  faTableTennis,
  faTablets,
  faTachometerAlt,
  faTag,
  faTags,
  faTape,
  faTasks,
  faTaxi,
  faTeeth,
  faTeethOpen,
  faTemperatureHigh,
  faTemperatureLow,
  faTenge,
  faTerminal,
  faTextHeight,
  faTextWidth,
  faTh,
  faTheaterMasks,
  faThermometer,
  faThermometerEmpty,
  faThermometerFull,
  faThermometerHalf,
  faThermometerQuarter,
  faThermometerThreeQuarters,
  faThLarge,
  faThList,
  faThumbsDown,
  faThumbsUp,
  faThumbtack,
  faTicketAlt,
  faTimes,
  faTimesCircle,
  faTint,
  faTintSlash,
  faTired,
  faToggleOff,
  faToggleOn,
  faToilet,
  faToiletPaper,
  faToiletPaperSlash,
  faToolbox,
  faTools,
  faTooth,
  faTorah,
  faToriiGate,
  faTractor,
  faTrademark,
  faTrafficLight,
  faTrailer,
  faTrain,
  faTram,
  faTransgender,
  faTransgenderAlt,
  faTrash,
  faTrashAlt,
  faTrashRestore,
  faTrashRestoreAlt,
  faTree,
  faTrophy,
  faTruck,
  faTruckLoading,
  faTruckMonster,
  faTruckMoving,
  faTruckPickup,
  faTshirt,
  faTty,
  faTv,
  faUmbrella,
  faUmbrellaBeach,
  faUnderline,
  faUndo,
  faUndoAlt,
  faUniversalAccess,
  faUniversity,
  faUnlink,
  faUnlock,
  faUnlockAlt,
  faUpload,
  faUser,
  faUserAlt,
  faUserAltSlash,
  faUserAstronaut,
  faUserCheck,
  faUserCircle,
  faUserClock,
  faUserCog,
  faUserEdit,
  faUserFriends,
  faUserGraduate,
  faUserInjured,
  faUserLock,
  faUserMd,
  faUserMinus,
  faUserNinja,
  faUserNurse,
  faUserPlus,
  faUsers,
  faUsersCog,
  faUserSecret,
  faUserShield,
  faUserSlash,
  faUsersSlash,
  faUserTag,
  faUserTie,
  faUserTimes,
  faUtensils,
  faUtensilSpoon,
  faVectorSquare,
  faVenus,
  faVenusDouble,
  faVenusMars,
  faVest,
  faVestPatches,
  faVial,
  faVials,
  faVideo,
  faVideoSlash,
  faVihara,
  faVirus,
  faViruses,
  faVirusSlash,
  faVoicemail,
  faVolleyballBall,
  faVolumeDown,
  faVolumeMute,
  faVolumeOff,
  faVolumeUp,
  faVoteYea,
  faVrCardboard,
  faWalking,
  faWallet,
  faWarehouse,
  faWater,
  faWaveSquare,
  faWeight,
  faWeightHanging,
  faWheelchair,
  faWifi,
  faWind,
  faWindowClose,
  faWindowMaximize,
  faWindowMinimize,
  faWindowRestore,
  faWineBottle,
  faWineGlass,
  faWineGlassAlt,
  faWonSign,
  faWrench,
  faXRay,
  faYenSign,
  faYinYang
} from '@fortawesome/free-solid-svg-icons'
import {
  fa500px,
  faAccessibleIcon,
  faAccusoft,
  faAcquisitionsIncorporated,
  faAdn,
  faAdversal,
  faAffiliatetheme,
  faAirbnb,
  faAlgolia,
  faAlipay,
  faAmazon,
  faAmazonPay,
  faAmilia,
  faAndroid,
  faAngellist,
  faAngrycreative,
  faAngular,
  faApper,
  faApple,
  faApplePay,
  faAppStore,
  faAppStoreIos,
  faArtstation,
  faAsymmetrik,
  faAtlassian,
  faAudible,
  faAutoprefixer,
  faAvianex,
  faAviato,
  faAws,
  faBandcamp,
  faBattleNet,
  faBehance,
  faBehanceSquare,
  faBimobject,
  faBitbucket,
  faBitcoin,
  faBity,
  faBlackberry,
  faBlackTie,
  faBlogger,
  faBloggerB,
  faBluetooth,
  faBluetoothB,
  faBootstrap,
  faBtc,
  faBuffer,
  faBuromobelexperte,
  faBuyNLarge,
  faBuysellads,
  faCanadianMapleLeaf,
  faCcAmazonPay,
  faCcAmex,
  faCcApplePay,
  faCcDinersClub,
  faCcDiscover,
  faCcJcb,
  faCcMastercard,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faCentercode,
  faCentos,
  faChrome,
  faChromecast,
  faCloudflare,
  faCloudscale,
  faCloudsmith,
  faCloudversify,
  faCodepen,
  faCodiepie,
  faConfluence,
  faConnectdevelop,
  faContao,
  faCottonBureau,
  faCpanel,
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsNc,
  faCreativeCommonsNcEu,
  faCreativeCommonsNcJp,
  faCreativeCommonsNd,
  faCreativeCommonsPd,
  faCreativeCommonsPdAlt,
  faCreativeCommonsRemix,
  faCreativeCommonsSa,
  faCreativeCommonsSampling,
  faCreativeCommonsSamplingPlus,
  faCreativeCommonsShare,
  faCreativeCommonsZero,
  faCriticalRole,
  faCss3,
  faCss3Alt,
  faCuttlefish,
  faDailymotion,
  faDAndD,
  faDAndDBeyond,
  faDashcube,
  faDeezer,
  faDelicious,
  faDeploydog,
  faDeskpro,
  faDev,
  faDeviantart,
  faDhl,
  faDiaspora,
  faDigg,
  faDigitalOcean,
  faDiscord,
  faDiscourse,
  faDochub,
  faDocker,
  faDraft2digital,
  faDribbble,
  faDribbbleSquare,
  faDropbox,
  faDrupal,
  faDyalog,
  faEarlybirds,
  faEbay,
  faEdge,
  faEdgeLegacy,
  faElementor,
  faEllo,
  faEmber,
  faEmpire,
  faEnvira,
  faErlang,
  faEthereum,
  faEtsy,
  faEvernote,
  faExpeditedssl,
  faFacebook,
  faFacebookF,
  faFacebookMessenger,
  faFacebookSquare,
  faFantasyFlightGames,
  faFedex,
  faFedora,
  faFigma,
  faFirefox,
  faFirefoxBrowser,
  faFirstdraft,
  faFirstOrder,
  faFirstOrderAlt,
  faFlickr,
  faFlipboard,
  faFly,
  faFontAwesome,
  faFontAwesomeAlt,
  faFontAwesomeFlag,
  faFonticons,
  faFonticonsFi,
  faFortAwesome,
  faFortAwesomeAlt,
  faForumbee,
  faFoursquare,
  faFreebsd,
  faFreeCodeCamp,
  faFulcrum,
  faGalacticRepublic,
  faGalacticSenate,
  faGetPocket,
  faGg,
  faGgCircle,
  faGit,
  faGitAlt,
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faGitkraken,
  faGitlab,
  faGitSquare,
  faGitter,
  faGlide,
  faGlideG,
  faGofore,
  faGoodreads,
  faGoodreadsG,
  faGoogle,
  faGoogleDrive,
  faGooglePay,
  faGooglePlay,
  faGooglePlus,
  faGooglePlusG,
  faGooglePlusSquare,
  faGoogleWallet,
  faGratipay,
  faGrav,
  faGripfire,
  faGrunt,
  faGuilded,
  faGulp,
  faHackerNews,
  faHackerNewsSquare,
  faHackerrank,
  faHips,
  faHireAHelper,
  faHive,
  faHooli,
  faHornbill,
  faHotjar,
  faHouzz,
  faHtml5,
  faHubspot,
  faIdeal,
  faImdb,
  faInnosoft,
  faInstagram,
  faInstagramSquare,
  faInstalod,
  faIntercom,
  faInternetExplorer,
  faInvision,
  faIoxhost,
  faItchIo,
  faItunes,
  faItunesNote,
  faJava,
  faJediOrder,
  faJenkins,
  faJira,
  faJoget,
  faJoomla,
  faJs,
  faJsfiddle,
  faJsSquare,
  faKaggle,
  faKeybase,
  faKeycdn,
  faKickstarter,
  faKickstarterK,
  faKorvue,
  faLaravel,
  faLastfm,
  faLastfmSquare,
  faLeanpub,
  faLess,
  faLine,
  faLinkedin,
  faLinkedinIn,
  faLinode,
  faLinux,
  faLyft,
  faMagento,
  faMailchimp,
  faMandalorian,
  faMarkdown,
  faMastodon,
  faMaxcdn,
  faMdb,
  faMedapps,
  faMedium,
  faMediumM,
  faMedrt,
  faMeetup,
  faMegaport,
  faMendeley,
  faMicroblog,
  faMicrosoft,
  faMix,
  faMixcloud,
  faMixer,
  faMizuni,
  faModx,
  faMonero,
  faNapster,
  faNeos,
  faNimblr,
  faNode,
  faNodeJs,
  faNpm,
  faNs8,
  faNutritionix,
  faOctopusDeploy,
  faOdnoklassniki,
  faOdnoklassnikiSquare,
  faOldRepublic,
  faOpencart,
  faOpenid,
  faOpera,
  faOptinMonster,
  faOrcid,
  faOsi,
  faPage4,
  faPagelines,
  faPalfed,
  faPatreon,
  faPaypal,
  faPennyArcade,
  faPerbyte,
  faPeriscope,
  faPhabricator,
  faPhoenixFramework,
  faPhoenixSquadron,
  faPhp,
  faPiedPiper,
  faPiedPiperAlt,
  faPiedPiperHat,
  faPiedPiperPp,
  faPiedPiperSquare,
  faPinterest,
  faPinterestP,
  faPinterestSquare,
  faPlaystation,
  faProductHunt,
  faPushed,
  faPython,
  faQq,
  faQuinscape,
  faQuora,
  faRaspberryPi,
  faRavelry,
  faReact,
  faReacteurope,
  faReadme,
  faRebel,
  faReddit,
  faRedditAlien,
  faRedditSquare,
  faRedhat,
  faRedRiver,
  faRenren,
  faReplyd,
  faResearchgate,
  faResolving,
  faRev,
  faRocketchat,
  faRockrms,
  faRProject,
  faRust,
  faSafari,
  faSalesforce,
  faSass,
  faSchlix,
  faScribd,
  faSearchengin,
  faSellcast,
  faSellsy,
  faServicestack,
  faShirtsinbulk,
  faShopify,
  faShopware,
  faSimplybuilt,
  faSistrix,
  faSith,
  faSketch,
  faSkyatlas,
  faSkype,
  faSlack,
  faSlackHash,
  faSlideshare,
  faSnapchat,
  faSnapchatGhost,
  faSnapchatSquare,
  faSoundcloud,
  faSourcetree,
  faSpeakap,
  faSpeakerDeck,
  faSpotify,
  faSquarespace,
  faStackExchange,
  faStackOverflow,
  faStackpath,
  faStaylinked,
  faSteam,
  faSteamSquare,
  faSteamSymbol,
  faStickerMule,
  faStrava,
  faStripe,
  faStripeS,
  faStudiovinari,
  faStumbleupon,
  faStumbleuponCircle,
  faSuperpowers,
  faSupple,
  faSuse,
  faSwift,
  faSymfony,
  faTeamspeak,
  faTelegram,
  faTelegramPlane,
  faTencentWeibo,
  faThemeco,
  faThemeisle,
  faTheRedYeti,
  faThinkPeaks,
  faTiktok,
  faTradeFederation,
  faTrello,
  faTumblr,
  faTumblrSquare,
  faTwitch,
  faTwitter,
  faTwitterSquare,
  faTypo3,
  faUber,
  faUbuntu,
  faUikit,
  faUmbraco,
  faUncharted,
  faUniregistry,
  faUnity,
  faUnsplash,
  faUntappd,
  faUps,
  faUsb,
  faUsps,
  faUssunnah,
  faVaadin,
  faViacoin,
  faViadeo,
  faViadeoSquare,
  faViber,
  faVimeo,
  faVimeoSquare,
  faVimeoV,
  faVine,
  faVk,
  faVnv,
  faVuejs,
  faWatchmanMonitoring,
  faWaze,
  faWeebly,
  faWeibo,
  faWeixin,
  faWhatsapp,
  faWhatsappSquare,
  faWhmcs,
  faWikipediaW,
  faWindows,
  faWix,
  faWizardsOfTheCoast,
  faWodu,
  faWolfPackBattalion,
  faWordpress,
  faWordpressSimple,
  faWpbeginner,
  faWpexplorer,
  faWpforms,
  faWpressr,
  faXbox,
  faXing,
  faXingSquare,
  faYahoo,
  faYammer,
  faYandex,
  faYandexInternational,
  faYarn,
  faYCombinator,
  faYelp,
  faYoast,
  faYoutube,
  faYoutubeSquare,
  faZhihu
} from '@fortawesome/free-brands-svg-icons'
import {
  faAddressBook as faAddressBookRegular,
  faAddressCard as faAddressCardRegular,
  faAngry as faAngryRegular,
  faArrowAltCircleDown as faArrowAltCircleDownRegular,
  faArrowAltCircleLeft as faArrowAltCircleLeftRegular,
  faArrowAltCircleRight as faArrowAltCircleRightRegular,
  faArrowAltCircleUp as faArrowAltCircleUpRegular,
  faBell as faBellRegular,
  faBellSlash as faBellSlashRegular,
  faBookmark as faBookmarkRegular,
  faBuilding as faBuildingRegular,
  faCalendar as faCalendarRegular,
  faCalendarAlt as faCalendarAltRegular,
  faCalendarCheck as faCalendarCheckRegular,
  faCalendarMinus as faCalendarMinusRegular,
  faCalendarPlus as faCalendarPlusRegular,
  faCalendarTimes as faCalendarTimesRegular,
  faCaretSquareDown as faCaretSquareDownRegular,
  faCaretSquareLeft as faCaretSquareLeftRegular,
  faCaretSquareRight as faCaretSquareRightRegular,
  faCaretSquareUp as faCaretSquareUpRegular,
  faChartBar as faChartBarRegular,
  faCheckCircle as faCheckCircleRegular,
  faCheckSquare as faCheckSquareRegular,
  faCircle as faCircleRegular,
  faClipboard as faClipboardRegular,
  faClock as faClockRegular,
  faClone as faCloneRegular,
  faClosedCaptioning as faClosedCaptioningRegular,
  faComment as faCommentRegular,
  faCommentAlt as faCommentAltRegular,
  faCommentDots as faCommentDotsRegular,
  faComments as faCommentsRegular,
  faCompass as faCompassRegular,
  faCopy as faCopyRegular,
  faCopyright as faCopyrightRegular,
  faCreditCard as faCreditCardRegular,
  faDizzy as faDizzyRegular,
  faDotCircle as faDotCircleRegular,
  faEdit as faEditRegular,
  faEnvelope as faEnvelopeRegular,
  faEnvelopeOpen as faEnvelopeOpenRegular,
  faEye as faEyeRegular,
  faEyeSlash as faEyeSlashRegular,
  faFile as faFileRegular,
  faFileAlt as faFileAltRegular,
  faFileArchive as faFileArchiveRegular,
  faFileAudio as faFileAudioRegular,
  faFileCode as faFileCodeRegular,
  faFileExcel as faFileExcelRegular,
  faFileImage as faFileImageRegular,
  faFilePdf as faFilePdfRegular,
  faFilePowerpoint as faFilePowerpointRegular,
  faFileVideo as faFileVideoRegular,
  faFileWord as faFileWordRegular,
  faFlag as faFlagRegular,
  faFlushed as faFlushedRegular,
  faFolder as faFolderRegular,
  faFolderOpen as faFolderOpenRegular,
  faFontAwesomeLogoFull as faFontAwesomeLogoFullRegular,
  faFrown as faFrownRegular,
  faFrownOpen as faFrownOpenRegular,
  faFutbol as faFutbolRegular,
  faGem as faGemRegular,
  faGrimace as faGrimaceRegular,
  faGrin as faGrinRegular,
  faGrinAlt as faGrinAltRegular,
  faGrinBeam as faGrinBeamRegular,
  faGrinBeamSweat as faGrinBeamSweatRegular,
  faGrinHearts as faGrinHeartsRegular,
  faGrinSquint as faGrinSquintRegular,
  faGrinSquintTears as faGrinSquintTearsRegular,
  faGrinStars as faGrinStarsRegular,
  faGrinTears as faGrinTearsRegular,
  faGrinTongue as faGrinTongueRegular,
  faGrinTongueSquint as faGrinTongueSquintRegular,
  faGrinTongueWink as faGrinTongueWinkRegular,
  faGrinWink as faGrinWinkRegular,
  faHandLizard as faHandLizardRegular,
  faHandPaper as faHandPaperRegular,
  faHandPeace as faHandPeaceRegular,
  faHandPointDown as faHandPointDownRegular,
  faHandPointer as faHandPointerRegular,
  faHandPointLeft as faHandPointLeftRegular,
  faHandPointRight as faHandPointRightRegular,
  faHandPointUp as faHandPointUpRegular,
  faHandRock as faHandRockRegular,
  faHandScissors as faHandScissorsRegular,
  faHandshake as faHandshakeRegular,
  faHandSpock as faHandSpockRegular,
  faHdd as faHddRegular,
  faHeart as faHeartRegular,
  faHospital as faHospitalRegular,
  faHourglass as faHourglassRegular,
  faIdBadge as faIdBadgeRegular,
  faIdCard as faIdCardRegular,
  faImage as faImageRegular,
  faImages as faImagesRegular,
  faKeyboard as faKeyboardRegular,
  faKiss as faKissRegular,
  faKissBeam as faKissBeamRegular,
  faKissWinkHeart as faKissWinkHeartRegular,
  faLaugh as faLaughRegular,
  faLaughBeam as faLaughBeamRegular,
  faLaughSquint as faLaughSquintRegular,
  faLaughWink as faLaughWinkRegular,
  faLemon as faLemonRegular,
  faLifeRing as faLifeRingRegular,
  faLightbulb as faLightbulbRegular,
  faListAlt as faListAltRegular,
  faMap as faMapRegular,
  faMeh as faMehRegular,
  faMehBlank as faMehBlankRegular,
  faMehRollingEyes as faMehRollingEyesRegular,
  faMinusSquare as faMinusSquareRegular,
  faMoneyBillAlt as faMoneyBillAltRegular,
  faMoon as faMoonRegular,
  faNewspaper as faNewspaperRegular,
  faObjectGroup as faObjectGroupRegular,
  faObjectUngroup as faObjectUngroupRegular,
  faPaperPlane as faPaperPlaneRegular,
  faPauseCircle as faPauseCircleRegular,
  faPlayCircle as faPlayCircleRegular,
  faPlusSquare as faPlusSquareRegular,
  faQuestionCircle as faQuestionCircleRegular,
  faRegistered as faRegisteredRegular,
  faSadCry as faSadCryRegular,
  faSadTear as faSadTearRegular,
  faSave as faSaveRegular,
  faShareSquare as faShareSquareRegular,
  faSmile as faSmileRegular,
  faSmileBeam as faSmileBeamRegular,
  faSmileWink as faSmileWinkRegular,
  faSnowflake as faSnowflakeRegular,
  faSquare as faSquareRegular,
  faStar as faStarRegular,
  faStarHalf as faStarHalfRegular,
  faStickyNote as faStickyNoteRegular,
  faStopCircle as faStopCircleRegular,
  faSun as faSunRegular,
  faSurprise as faSurpriseRegular,
  faThumbsDown as faThumbsDownRegular,
  faThumbsUp as faThumbsUpRegular,
  faTimesCircle as faTimesCircleRegular,
  faTired as faTiredRegular,
  faTrashAlt as faTrashAltRegular,
  faUser as faUserRegular,
  faUserCircle as faUserCircleRegular,
  faWindowClose as faWindowCloseRegular,
  faWindowMaximize as faWindowMaximizeRegular,
  faWindowMinimize as faWindowMinimizeRegular,
  faWindowRestore as faWindowRestoreRegular
} from '@fortawesome/free-regular-svg-icons'

export const IconInputEye = (props, showPass) => showPass ? <FontAwesomeIcon icon={faEyeSlashRegular} {...props} /> :
  <FontAwesomeIcon icon={faEyeRegular} {...props} />

export const IconAddressBookRegular = props => <FontAwesomeIcon icon={faAddressBookRegular} {...props} />
export const IconAddressCardRegular = props => <FontAwesomeIcon icon={faAddressCardRegular} {...props} />
export const IconAngryRegular = props => <FontAwesomeIcon icon={faAngryRegular} {...props} />
export const IconArrowAltCircleDownRegular = props => <FontAwesomeIcon icon={faArrowAltCircleDownRegular} {...props} />
export const IconArrowAltCircleLeftRegular = props => <FontAwesomeIcon icon={faArrowAltCircleLeftRegular} {...props} />
export const IconArrowAltCircleRightRegular = props => <FontAwesomeIcon
  icon={faArrowAltCircleRightRegular} {...props} />
export const IconArrowAltCircleUpRegular = props => <FontAwesomeIcon icon={faArrowAltCircleUpRegular} {...props} />
export const IconBellRegular = props => <FontAwesomeIcon icon={faBellRegular} {...props} />
export const IconBellSlashRegular = props => <FontAwesomeIcon icon={faBellSlashRegular} {...props} />
export const IconBookmarkRegular = props => <FontAwesomeIcon icon={faBookmarkRegular} {...props} />
export const IconBuildingRegular = props => <FontAwesomeIcon icon={faBuildingRegular} {...props} />
export const IconCalendarRegular = props => <FontAwesomeIcon icon={faCalendarRegular} {...props} />
export const IconCalendarAltRegular = props => <FontAwesomeIcon icon={faCalendarAltRegular} {...props} />
export const IconCalendarCheckRegular = props => <FontAwesomeIcon icon={faCalendarCheckRegular} {...props} />
export const IconCalendarMinusRegular = props => <FontAwesomeIcon icon={faCalendarMinusRegular} {...props} />
export const IconCalendarPlusRegular = props => <FontAwesomeIcon icon={faCalendarPlusRegular} {...props} />
export const IconCalendarTimesRegular = props => <FontAwesomeIcon icon={faCalendarTimesRegular} {...props} />
export const IconCaretSquareDownRegular = props => <FontAwesomeIcon icon={faCaretSquareDownRegular} {...props} />
export const IconCaretSquareLeftRegular = props => <FontAwesomeIcon icon={faCaretSquareLeftRegular} {...props} />
export const IconCaretSquareRightRegular = props => <FontAwesomeIcon icon={faCaretSquareRightRegular} {...props} />
export const IconCaretSquareUpRegular = props => <FontAwesomeIcon icon={faCaretSquareUpRegular} {...props} />
export const IconChartBarRegular = props => <FontAwesomeIcon icon={faChartBarRegular} {...props} />
export const IconCheckCircleRegular = props => <FontAwesomeIcon icon={faCheckCircleRegular} {...props} />
export const IconCheckSquareRegular = props => <FontAwesomeIcon icon={faCheckSquareRegular} {...props} />
export const IconCircleRegular = props => <FontAwesomeIcon icon={faCircleRegular} {...props} />
export const IconClipboardRegular = props => <FontAwesomeIcon icon={faClipboardRegular} {...props} />
export const IconClockRegular = props => <FontAwesomeIcon icon={faClockRegular} {...props} />
export const IconCloneRegular = props => <FontAwesomeIcon icon={faCloneRegular} {...props} />
export const IconClosedCaptioningRegular = props => <FontAwesomeIcon icon={faClosedCaptioningRegular} {...props} />
export const IconCommentRegular = props => <FontAwesomeIcon icon={faCommentRegular} {...props} />
export const IconCommentAltRegular = props => <FontAwesomeIcon icon={faCommentAltRegular} {...props} />
export const IconCommentDotsRegular = props => <FontAwesomeIcon icon={faCommentDotsRegular} {...props} />
export const IconCommentsRegular = props => <FontAwesomeIcon icon={faCommentsRegular} {...props} />
export const IconCompassRegular = props => <FontAwesomeIcon icon={faCompassRegular} {...props} />
export const IconCopyRegular = props => <FontAwesomeIcon icon={faCopyRegular} {...props} />
export const IconCopyrightRegular = props => <FontAwesomeIcon icon={faCopyrightRegular} {...props} />
export const IconCreditCardRegular = props => <FontAwesomeIcon icon={faCreditCardRegular} {...props} />
export const IconDizzyRegular = props => <FontAwesomeIcon icon={faDizzyRegular} {...props} />
export const IconDotCircleRegular = props => <FontAwesomeIcon icon={faDotCircleRegular} {...props} />
export const IconEditRegular = props => <FontAwesomeIcon icon={faEditRegular} {...props} />
export const IconEnvelopeRegular = props => <FontAwesomeIcon icon={faEnvelopeRegular} {...props} />
export const IconEnvelopeOpenRegular = props => <FontAwesomeIcon icon={faEnvelopeOpenRegular} {...props} />
export const IconEyeRegular = props => <FontAwesomeIcon icon={faEyeRegular} {...props} />
export const IconEyeSlashRegular = props => <FontAwesomeIcon icon={faEyeSlashRegular} {...props} />
export const IconFileRegular = props => <FontAwesomeIcon icon={faFileRegular} {...props} />
export const IconFileAltRegular = props => <FontAwesomeIcon icon={faFileAltRegular} {...props} />
export const IconFileArchiveRegular = props => <FontAwesomeIcon icon={faFileArchiveRegular} {...props} />
export const IconFileAudioRegular = props => <FontAwesomeIcon icon={faFileAudioRegular} {...props} />
export const IconFileCodeRegular = props => <FontAwesomeIcon icon={faFileCodeRegular} {...props} />
export const IconFileExcelRegular = props => <FontAwesomeIcon icon={faFileExcelRegular} {...props} />
export const IconFileImageRegular = props => <FontAwesomeIcon icon={faFileImageRegular} {...props} />
export const IconFilePdfRegular = props => <FontAwesomeIcon icon={faFilePdfRegular} {...props} />
export const IconFilePowerpointRegular = props => <FontAwesomeIcon icon={faFilePowerpointRegular} {...props} />
export const IconFileVideoRegular = props => <FontAwesomeIcon icon={faFileVideoRegular} {...props} />
export const IconFileWordRegular = props => <FontAwesomeIcon icon={faFileWordRegular} {...props} />
export const IconFlagRegular = props => <FontAwesomeIcon icon={faFlagRegular} {...props} />
export const IconFlushedRegular = props => <FontAwesomeIcon icon={faFlushedRegular} {...props} />
export const IconFolderRegular = props => <FontAwesomeIcon icon={faFolderRegular} {...props} />
export const IconFolderOpenRegular = props => <FontAwesomeIcon icon={faFolderOpenRegular} {...props} />
export const IconFontAwesomeLogoFullRegular = props => <FontAwesomeIcon
  icon={faFontAwesomeLogoFullRegular} {...props} />
export const IconFrownRegular = props => <FontAwesomeIcon icon={faFrownRegular} {...props} />
export const IconFrownOpenRegular = props => <FontAwesomeIcon icon={faFrownOpenRegular} {...props} />
export const IconFutbolRegular = props => <FontAwesomeIcon icon={faFutbolRegular} {...props} />
export const IconGemRegular = props => <FontAwesomeIcon icon={faGemRegular} {...props} />
export const IconGrimaceRegular = props => <FontAwesomeIcon icon={faGrimaceRegular} {...props} />
export const IconGrinRegular = props => <FontAwesomeIcon icon={faGrinRegular} {...props} />
export const IconGrinAltRegular = props => <FontAwesomeIcon icon={faGrinAltRegular} {...props} />
export const IconGrinBeamRegular = props => <FontAwesomeIcon icon={faGrinBeamRegular} {...props} />
export const IconGrinBeamSweatRegular = props => <FontAwesomeIcon icon={faGrinBeamSweatRegular} {...props} />
export const IconGrinHeartsRegular = props => <FontAwesomeIcon icon={faGrinHeartsRegular} {...props} />
export const IconGrinSquintRegular = props => <FontAwesomeIcon icon={faGrinSquintRegular} {...props} />
export const IconGrinSquintTearsRegular = props => <FontAwesomeIcon icon={faGrinSquintTearsRegular} {...props} />
export const IconGrinStarsRegular = props => <FontAwesomeIcon icon={faGrinStarsRegular} {...props} />
export const IconGrinTearsRegular = props => <FontAwesomeIcon icon={faGrinTearsRegular} {...props} />
export const IconGrinTongueRegular = props => <FontAwesomeIcon icon={faGrinTongueRegular} {...props} />
export const IconGrinTongueSquintRegular = props => <FontAwesomeIcon icon={faGrinTongueSquintRegular} {...props} />
export const IconGrinTongueWinkRegular = props => <FontAwesomeIcon icon={faGrinTongueWinkRegular} {...props} />
export const IconGrinWinkRegular = props => <FontAwesomeIcon icon={faGrinWinkRegular} {...props} />
export const IconHandLizardRegular = props => <FontAwesomeIcon icon={faHandLizardRegular} {...props} />
export const IconHandPaperRegular = props => <FontAwesomeIcon icon={faHandPaperRegular} {...props} />
export const IconHandPeaceRegular = props => <FontAwesomeIcon icon={faHandPeaceRegular} {...props} />
export const IconHandPointDownRegular = props => <FontAwesomeIcon icon={faHandPointDownRegular} {...props} />
export const IconHandPointLeftRegular = props => <FontAwesomeIcon icon={faHandPointLeftRegular} {...props} />
export const IconHandPointRightRegular = props => <FontAwesomeIcon icon={faHandPointRightRegular} {...props} />
export const IconHandPointUpRegular = props => <FontAwesomeIcon icon={faHandPointUpRegular} {...props} />
export const IconHandPointerRegular = props => <FontAwesomeIcon icon={faHandPointerRegular} {...props} />
export const IconHandRockRegular = props => <FontAwesomeIcon icon={faHandRockRegular} {...props} />
export const IconHandScissorsRegular = props => <FontAwesomeIcon icon={faHandScissorsRegular} {...props} />
export const IconHandSpockRegular = props => <FontAwesomeIcon icon={faHandSpockRegular} {...props} />
export const IconHandshakeRegular = props => <FontAwesomeIcon icon={faHandshakeRegular} {...props} />
export const IconHddRegular = props => <FontAwesomeIcon icon={faHddRegular} {...props} />
export const IconHeartRegular = props => <FontAwesomeIcon icon={faHeartRegular} {...props} />
export const IconHospitalRegular = props => <FontAwesomeIcon icon={faHospitalRegular} {...props} />
export const IconHourglassRegular = props => <FontAwesomeIcon icon={faHourglassRegular} {...props} />
export const IconIdBadgeRegular = props => <FontAwesomeIcon icon={faIdBadgeRegular} {...props} />
export const IconIdCardRegular = props => <FontAwesomeIcon icon={faIdCardRegular} {...props} />
export const IconImageRegular = props => <FontAwesomeIcon icon={faImageRegular} {...props} />
export const IconImagesRegular = props => <FontAwesomeIcon icon={faImagesRegular} {...props} />
export const IconKeyboardRegular = props => <FontAwesomeIcon icon={faKeyboardRegular} {...props} />
export const IconKissRegular = props => <FontAwesomeIcon icon={faKissRegular} {...props} />
export const IconKissBeamRegular = props => <FontAwesomeIcon icon={faKissBeamRegular} {...props} />
export const IconKissWinkHeartRegular = props => <FontAwesomeIcon icon={faKissWinkHeartRegular} {...props} />
export const IconLaughRegular = props => <FontAwesomeIcon icon={faLaughRegular} {...props} />
export const IconLaughBeamRegular = props => <FontAwesomeIcon icon={faLaughBeamRegular} {...props} />
export const IconLaughSquintRegular = props => <FontAwesomeIcon icon={faLaughSquintRegular} {...props} />
export const IconLaughWinkRegular = props => <FontAwesomeIcon icon={faLaughWinkRegular} {...props} />
export const IconLemonRegular = props => <FontAwesomeIcon icon={faLemonRegular} {...props} />
export const IconLifeRingRegular = props => <FontAwesomeIcon icon={faLifeRingRegular} {...props} />
export const IconLightbulbRegular = props => <FontAwesomeIcon icon={faLightbulbRegular} {...props} />
export const IconListAltRegular = props => <FontAwesomeIcon icon={faListAltRegular} {...props} />
export const IconMapRegular = props => <FontAwesomeIcon icon={faMapRegular} {...props} />
export const IconMehRegular = props => <FontAwesomeIcon icon={faMehRegular} {...props} />
export const IconMehBlankRegular = props => <FontAwesomeIcon icon={faMehBlankRegular} {...props} />
export const IconMehRollingEyesRegular = props => <FontAwesomeIcon icon={faMehRollingEyesRegular} {...props} />
export const IconMinusSquareRegular = props => <FontAwesomeIcon icon={faMinusSquareRegular} {...props} />
export const IconMoneyBillAltRegular = props => <FontAwesomeIcon icon={faMoneyBillAltRegular} {...props} />
export const IconMoonRegular = props => <FontAwesomeIcon icon={faMoonRegular} {...props} />
export const IconNewspaperRegular = props => <FontAwesomeIcon icon={faNewspaperRegular} {...props} />
export const IconObjectGroupRegular = props => <FontAwesomeIcon icon={faObjectGroupRegular} {...props} />
export const IconObjectUngroupRegular = props => <FontAwesomeIcon icon={faObjectUngroupRegular} {...props} />
export const IconPaperPlaneRegular = props => <FontAwesomeIcon icon={faPaperPlaneRegular} {...props} />
export const IconPauseCircleRegular = props => <FontAwesomeIcon icon={faPauseCircleRegular} {...props} />
export const IconPlayCircleRegular = props => <FontAwesomeIcon icon={faPlayCircleRegular} {...props} />
export const IconPlusSquareRegular = props => <FontAwesomeIcon icon={faPlusSquareRegular} {...props} />
export const IconQuestionCircleRegular = props => <FontAwesomeIcon icon={faQuestionCircleRegular} {...props} />
export const IconRegisteredRegular = props => <FontAwesomeIcon icon={faRegisteredRegular} {...props} />
export const IconSadCryRegular = props => <FontAwesomeIcon icon={faSadCryRegular} {...props} />
export const IconSadTearRegular = props => <FontAwesomeIcon icon={faSadTearRegular} {...props} />
export const IconSaveRegular = props => <FontAwesomeIcon icon={faSaveRegular} {...props} />
export const IconShareSquareRegular = props => <FontAwesomeIcon icon={faShareSquareRegular} {...props} />
export const IconSmileRegular = props => <FontAwesomeIcon icon={faSmileRegular} {...props} />
export const IconSmileBeamRegular = props => <FontAwesomeIcon icon={faSmileBeamRegular} {...props} />
export const IconSmileWinkRegular = props => <FontAwesomeIcon icon={faSmileWinkRegular} {...props} />
export const IconSnowflakeRegular = props => <FontAwesomeIcon icon={faSnowflakeRegular} {...props} />
export const IconSquareRegular = props => <FontAwesomeIcon icon={faSquareRegular} {...props} />
export const IconStarRegular = props => <FontAwesomeIcon icon={faStarRegular} {...props} />
export const IconStarHalfRegular = props => <FontAwesomeIcon icon={faStarHalfRegular} {...props} />
export const IconStickyNoteRegular = props => <FontAwesomeIcon icon={faStickyNoteRegular} {...props} />
export const IconStopCircleRegular = props => <FontAwesomeIcon icon={faStopCircleRegular} {...props} />
export const IconSunRegular = props => <FontAwesomeIcon icon={faSunRegular} {...props} />
export const IconSurpriseRegular = props => <FontAwesomeIcon icon={faSurpriseRegular} {...props} />
export const IconThumbsDownRegular = props => <FontAwesomeIcon icon={faThumbsDownRegular} {...props} />
export const IconThumbsUpRegular = props => <FontAwesomeIcon icon={faThumbsUpRegular} {...props} />
export const IconTimesCircleRegular = props => <FontAwesomeIcon icon={faTimesCircleRegular} {...props} />
export const IconTiredRegular = props => <FontAwesomeIcon icon={faTiredRegular} {...props} />
export const IconTrashAltRegular = props => <FontAwesomeIcon icon={faTrashAltRegular} {...props} />
export const IconUserRegular = props => <FontAwesomeIcon icon={faUserRegular} {...props} />
export const IconUserCircleRegular = props => <FontAwesomeIcon icon={faUserCircleRegular} {...props} />
export const IconWindowCloseRegular = props => <FontAwesomeIcon icon={faWindowCloseRegular} {...props} />
export const IconWindowMaximizeRegular = props => <FontAwesomeIcon icon={faWindowMaximizeRegular} {...props} />
export const IconWindowMinimizeRegular = props => <FontAwesomeIcon icon={faWindowMinimizeRegular} {...props} />
export const IconWindowRestoreRegular = props => <FontAwesomeIcon icon={faWindowRestoreRegular} {...props} />
export const Icon500px = props => <FontAwesomeIcon icon={fa500px} {...props} />
export const IconAccessibleIcon = props => <FontAwesomeIcon icon={faAccessibleIcon} {...props} />
export const IconAccusoft = props => <FontAwesomeIcon icon={faAccusoft} {...props} />
export const IconAcquisitionsIncorpoated = props => <FontAwesomeIcon icon={faAcquisitionsIncorporated} {...props} />
export const IconAdn = props => <FontAwesomeIcon icon={faAdn} {...props} />
export const IconAdversal = props => <FontAwesomeIcon icon={faAdversal} {...props} />
export const IconAffiliatetheme = props => <FontAwesomeIcon icon={faAffiliatetheme} {...props} />
export const IconAirbnb = props => <FontAwesomeIcon icon={faAirbnb} {...props} />
export const IconAlgolia = props => <FontAwesomeIcon icon={faAlgolia} {...props} />
export const IconAlipay = props => <FontAwesomeIcon icon={faAlipay} {...props} />
export const IconAmazon = props => <FontAwesomeIcon icon={faAmazon} {...props} />
export const IconAmazonPay = props => <FontAwesomeIcon icon={faAmazonPay} {...props} />
export const IconAmilia = props => <FontAwesomeIcon icon={faAmilia} {...props} />
export const IconAndroid = props => <FontAwesomeIcon icon={faAndroid} {...props} />
export const IconAngellist = props => <FontAwesomeIcon icon={faAngellist} {...props} />
export const IconAngrycreative = props => <FontAwesomeIcon icon={faAngrycreative} {...props} />
export const IconAngular = props => <FontAwesomeIcon icon={faAngular} {...props} />
export const IconAppStore = props => <FontAwesomeIcon icon={faAppStore} {...props} />
export const IconAppStoreIos = props => <FontAwesomeIcon icon={faAppStoreIos} {...props} />
export const IconApper = props => <FontAwesomeIcon icon={faApper} {...props} />
export const IconApple = props => <FontAwesomeIcon icon={faApple} {...props} />
export const IconApplePay = props => <FontAwesomeIcon icon={faApplePay} {...props} />
export const IconArtstation = props => <FontAwesomeIcon icon={faArtstation} {...props} />
export const IconAsymmetrik = props => <FontAwesomeIcon icon={faAsymmetrik} {...props} />
export const IconAtlassian = props => <FontAwesomeIcon icon={faAtlassian} {...props} />
export const IconAudible = props => <FontAwesomeIcon icon={faAudible} {...props} />
export const IconAutoprefixer = props => <FontAwesomeIcon icon={faAutoprefixer} {...props} />
export const IconAvianex = props => <FontAwesomeIcon icon={faAvianex} {...props} />
export const IconAviato = props => <FontAwesomeIcon icon={faAviato} {...props} />
export const IconAws = props => <FontAwesomeIcon icon={faAws} {...props} />
export const IconBandcamp = props => <FontAwesomeIcon icon={faBandcamp} {...props} />
export const IconBattleNet = props => <FontAwesomeIcon icon={faBattleNet} {...props} />
export const IconBehance = props => <FontAwesomeIcon icon={faBehance} {...props} />
export const IconBehanceSquare = props => <FontAwesomeIcon icon={faBehanceSquare} {...props} />
export const IconBimobject = props => <FontAwesomeIcon icon={faBimobject} {...props} />
export const IconBitbucket = props => <FontAwesomeIcon icon={faBitbucket} {...props} />
export const IconBitcoin = props => <FontAwesomeIcon icon={faBitcoin} {...props} />
export const IconBity = props => <FontAwesomeIcon icon={faBity} {...props} />
export const IconBlackTie = props => <FontAwesomeIcon icon={faBlackTie} {...props} />
export const IconBlackberry = props => <FontAwesomeIcon icon={faBlackberry} {...props} />
export const IconBlogger = props => <FontAwesomeIcon icon={faBlogger} {...props} />
export const IconBloggerB = props => <FontAwesomeIcon icon={faBloggerB} {...props} />
export const IconBluetooth = props => <FontAwesomeIcon icon={faBluetooth} {...props} />
export const IconBluetoothB = props => <FontAwesomeIcon icon={faBluetoothB} {...props} />
export const IconBootstrap = props => <FontAwesomeIcon icon={faBootstrap} {...props} />
export const IconBtc = props => <FontAwesomeIcon icon={faBtc} {...props} />
export const IconBuffer = props => <FontAwesomeIcon icon={faBuffer} {...props} />
export const IconBuromobelexperte = props => <FontAwesomeIcon icon={faBuromobelexperte} {...props} />
export const IconBuyNLarge = props => <FontAwesomeIcon icon={faBuyNLarge} {...props} />
export const IconBuysellads = props => <FontAwesomeIcon icon={faBuysellads} {...props} />
export const IconCanadianMapleLeaf = props => <FontAwesomeIcon icon={faCanadianMapleLeaf} {...props} />
export const IconCcAmazonPay = props => <FontAwesomeIcon icon={faCcAmazonPay} {...props} />
export const IconCcAmex = props => <FontAwesomeIcon icon={faCcAmex} {...props} />
export const IconCcApplePay = props => <FontAwesomeIcon icon={faCcApplePay} {...props} />
export const IconCcDinersClub = props => <FontAwesomeIcon icon={faCcDinersClub} {...props} />
export const IconCcDiscover = props => <FontAwesomeIcon icon={faCcDiscover} {...props} />
export const IconCcJcb = props => <FontAwesomeIcon icon={faCcJcb} {...props} />
export const IconCcMastercard = props => <FontAwesomeIcon icon={faCcMastercard} {...props} />
export const IconCcPaypal = props => <FontAwesomeIcon icon={faCcPaypal} {...props} />
export const IconCcStripe = props => <FontAwesomeIcon icon={faCcStripe} {...props} />
export const IconCcVisa = props => <FontAwesomeIcon icon={faCcVisa} {...props} />
export const IconCentercode = props => <FontAwesomeIcon icon={faCentercode} {...props} />
export const IconCentos = props => <FontAwesomeIcon icon={faCentos} {...props} />
export const IconChrome = props => <FontAwesomeIcon icon={faChrome} {...props} />
export const IconChromecast = props => <FontAwesomeIcon icon={faChromecast} {...props} />
export const IconCloudflare = props => <FontAwesomeIcon icon={faCloudflare} {...props} />
export const IconCloudscale = props => <FontAwesomeIcon icon={faCloudscale} {...props} />
export const IconCloudsmith = props => <FontAwesomeIcon icon={faCloudsmith} {...props} />
export const IconCloudversify = props => <FontAwesomeIcon icon={faCloudversify} {...props} />
export const IconCodepen = props => <FontAwesomeIcon icon={faCodepen} {...props} />
export const IconCodiepie = props => <FontAwesomeIcon icon={faCodiepie} {...props} />
export const IconConfluence = props => <FontAwesomeIcon icon={faConfluence} {...props} />
export const IconConnectdevelop = props => <FontAwesomeIcon icon={faConnectdevelop} {...props} />
export const IconContao = props => <FontAwesomeIcon icon={faContao} {...props} />
export const IconCottonBureau = props => <FontAwesomeIcon icon={faCottonBureau} {...props} />
export const IconCpanel = props => <FontAwesomeIcon icon={faCpanel} {...props} />
export const IconCreativeCommons = props => <FontAwesomeIcon icon={faCreativeCommons} {...props} />
export const IconCreativeCommonsBy = props => <FontAwesomeIcon icon={faCreativeCommonsBy} {...props} />
export const IconCreativeCommonsNc = props => <FontAwesomeIcon icon={faCreativeCommonsNc} {...props} />
export const IconCreativeCommonsNcEu = props => <FontAwesomeIcon icon={faCreativeCommonsNcEu} {...props} />
export const IconCreativeCommonsNcJp = props => <FontAwesomeIcon icon={faCreativeCommonsNcJp} {...props} />
export const IconCreativeCommonsNd = props => <FontAwesomeIcon icon={faCreativeCommonsNd} {...props} />
export const IconCreativeCommonsPd = props => <FontAwesomeIcon icon={faCreativeCommonsPd} {...props} />
export const IconCreativeCommonsPdAlt = props => <FontAwesomeIcon icon={faCreativeCommonsPdAlt} {...props} />
export const IconCreativeCommonsRemix = props => <FontAwesomeIcon icon={faCreativeCommonsRemix} {...props} />
export const IconCreativeCommonsSa = props => <FontAwesomeIcon icon={faCreativeCommonsSa} {...props} />
export const IconCreativeCommonsSampling = props => <FontAwesomeIcon icon={faCreativeCommonsSampling} {...props} />
export const IconCreativeCommonsSamplingPlus = props => <FontAwesomeIcon
  icon={faCreativeCommonsSamplingPlus} {...props} />
export const IconCreativeCommonsShare = props => <FontAwesomeIcon icon={faCreativeCommonsShare} {...props} />
export const IconCreativeCommonsZero = props => <FontAwesomeIcon icon={faCreativeCommonsZero} {...props} />
export const IconCriticalRole = props => <FontAwesomeIcon icon={faCriticalRole} {...props} />
export const IconCss3 = props => <FontAwesomeIcon icon={faCss3} {...props} />
export const IconCss3Alt = props => <FontAwesomeIcon icon={faCss3Alt} {...props} />
export const IconCuttlefish = props => <FontAwesomeIcon icon={faCuttlefish} {...props} />
export const IconDAndD = props => <FontAwesomeIcon icon={faDAndD} {...props} />
export const IconDAndDBeyond = props => <FontAwesomeIcon icon={faDAndDBeyond} {...props} />
export const IconDailymotion = props => <FontAwesomeIcon icon={faDailymotion} {...props} />
export const IconDashcube = props => <FontAwesomeIcon icon={faDashcube} {...props} />
export const IconDeezer = props => <FontAwesomeIcon icon={faDeezer} {...props} />
export const IconDelicious = props => <FontAwesomeIcon icon={faDelicious} {...props} />
export const IconDeploydog = props => <FontAwesomeIcon icon={faDeploydog} {...props} />
export const IconDeskpro = props => <FontAwesomeIcon icon={faDeskpro} {...props} />
export const IconDev = props => <FontAwesomeIcon icon={faDev} {...props} />
export const IconDeviantart = props => <FontAwesomeIcon icon={faDeviantart} {...props} />
export const IconDhl = props => <FontAwesomeIcon icon={faDhl} {...props} />
export const IconDiaspora = props => <FontAwesomeIcon icon={faDiaspora} {...props} />
export const IconDigg = props => <FontAwesomeIcon icon={faDigg} {...props} />
export const IconDigitalOcean = props => <FontAwesomeIcon icon={faDigitalOcean} {...props} />
export const IconDiscord = props => <FontAwesomeIcon icon={faDiscord} {...props} />
export const IconDiscourse = props => <FontAwesomeIcon icon={faDiscourse} {...props} />
export const IconDochub = props => <FontAwesomeIcon icon={faDochub} {...props} />
export const IconDocker = props => <FontAwesomeIcon icon={faDocker} {...props} />
export const IconDraft2digital = props => <FontAwesomeIcon icon={faDraft2digital} {...props} />
export const IconDribbble = props => <FontAwesomeIcon icon={faDribbble} {...props} />
export const IconDribbbleSquare = props => <FontAwesomeIcon icon={faDribbbleSquare} {...props} />
export const IconDropbox = props => <FontAwesomeIcon icon={faDropbox} {...props} />
export const IconDrupal = props => <FontAwesomeIcon icon={faDrupal} {...props} />
export const IconDyalog = props => <FontAwesomeIcon icon={faDyalog} {...props} />
export const IconEarlybirds = props => <FontAwesomeIcon icon={faEarlybirds} {...props} />
export const IconEbay = props => <FontAwesomeIcon icon={faEbay} {...props} />
export const IconEdge = props => <FontAwesomeIcon icon={faEdge} {...props} />
export const IconEdgeLegacy = props => <FontAwesomeIcon icon={faEdgeLegacy} {...props} />
export const IconElementor = props => <FontAwesomeIcon icon={faElementor} {...props} />
export const IconEllo = props => <FontAwesomeIcon icon={faEllo} {...props} />
export const IconEmber = props => <FontAwesomeIcon icon={faEmber} {...props} />
export const IconEmpire = props => <FontAwesomeIcon icon={faEmpire} {...props} />
export const IconEnvira = props => <FontAwesomeIcon icon={faEnvira} {...props} />
export const IconErlang = props => <FontAwesomeIcon icon={faErlang} {...props} />
export const IconEthereum = props => <FontAwesomeIcon icon={faEthereum} {...props} />
export const IconEtsy = props => <FontAwesomeIcon icon={faEtsy} {...props} />
export const IconEvernote = props => <FontAwesomeIcon icon={faEvernote} {...props} />
export const IconExpeditedssl = props => <FontAwesomeIcon icon={faExpeditedssl} {...props} />
export const IconFacebook = props => <FontAwesomeIcon icon={faFacebook} {...props} />
export const IconFacebookF = props => <FontAwesomeIcon icon={faFacebookF} {...props} />
export const IconFacebookMessenger = props => <FontAwesomeIcon icon={faFacebookMessenger} {...props} />
export const IconFacebookSquare = props => <FontAwesomeIcon icon={faFacebookSquare} {...props} />
export const IconFantasyFlightGames = props => <FontAwesomeIcon icon={faFantasyFlightGames} {...props} />
export const IconFedex = props => <FontAwesomeIcon icon={faFedex} {...props} />
export const IconFedora = props => <FontAwesomeIcon icon={faFedora} {...props} />
export const IconFigma = props => <FontAwesomeIcon icon={faFigma} {...props} />
export const IconFirefox = props => <FontAwesomeIcon icon={faFirefox} {...props} />
export const IconFirefoxBrowser = props => <FontAwesomeIcon icon={faFirefoxBrowser} {...props} />
export const IconFirstOrder = props => <FontAwesomeIcon icon={faFirstOrder} {...props} />
export const IconFirstOrderAlt = props => <FontAwesomeIcon icon={faFirstOrderAlt} {...props} />
export const IconFirstdraft = props => <FontAwesomeIcon icon={faFirstdraft} {...props} />
export const IconFlickr = props => <FontAwesomeIcon icon={faFlickr} {...props} />
export const IconFlipboard = props => <FontAwesomeIcon icon={faFlipboard} {...props} />
export const IconFly = props => <FontAwesomeIcon icon={faFly} {...props} />
export const IconFontAwesome = props => <FontAwesomeIcon icon={faFontAwesome} {...props} />
export const IconFontAwesomeAlt = props => <FontAwesomeIcon icon={faFontAwesomeAlt} {...props} />
export const IconFontAwesomeFlag = props => <FontAwesomeIcon icon={faFontAwesomeFlag} {...props} />
export const IconFonticons = props => <FontAwesomeIcon icon={faFonticons} {...props} />
export const IconFonticonsFi = props => <FontAwesomeIcon icon={faFonticonsFi} {...props} />
export const IconFortAwesome = props => <FontAwesomeIcon icon={faFortAwesome} {...props} />
export const IconFortAwesomeAlt = props => <FontAwesomeIcon icon={faFortAwesomeAlt} {...props} />
export const IconForumbee = props => <FontAwesomeIcon icon={faForumbee} {...props} />
export const IconFoursquare = props => <FontAwesomeIcon icon={faFoursquare} {...props} />
export const IconFreeCodeCamp = props => <FontAwesomeIcon icon={faFreeCodeCamp} {...props} />
export const IconFreebsd = props => <FontAwesomeIcon icon={faFreebsd} {...props} />
export const IconFulcrum = props => <FontAwesomeIcon icon={faFulcrum} {...props} />
export const IconGalacticRepublic = props => <FontAwesomeIcon icon={faGalacticRepublic} {...props} />
export const IconGalacticSenate = props => <FontAwesomeIcon icon={faGalacticSenate} {...props} />
export const IconGetPocket = props => <FontAwesomeIcon icon={faGetPocket} {...props} />
export const IconGg = props => <FontAwesomeIcon icon={faGg} {...props} />
export const IconGgCircle = props => <FontAwesomeIcon icon={faGgCircle} {...props} />
export const IconGit = props => <FontAwesomeIcon icon={faGit} {...props} />
export const IconGitAlt = props => <FontAwesomeIcon icon={faGitAlt} {...props} />
export const IconGitSquare = props => <FontAwesomeIcon icon={faGitSquare} {...props} />
export const IconGithub = props => <FontAwesomeIcon icon={faGithub} {...props} />
export const IconGithubAlt = props => <FontAwesomeIcon icon={faGithubAlt} {...props} />
export const IconGithubSquare = props => <FontAwesomeIcon icon={faGithubSquare} {...props} />
export const IconGitkraken = props => <FontAwesomeIcon icon={faGitkraken} {...props} />
export const IconGitlab = props => <FontAwesomeIcon icon={faGitlab} {...props} />
export const IconGitter = props => <FontAwesomeIcon icon={faGitter} {...props} />
export const IconGlide = props => <FontAwesomeIcon icon={faGlide} {...props} />
export const IconGlideG = props => <FontAwesomeIcon icon={faGlideG} {...props} />
export const IconGofore = props => <FontAwesomeIcon icon={faGofore} {...props} />
export const IconGoodreads = props => <FontAwesomeIcon icon={faGoodreads} {...props} />
export const IconGoodreadsG = props => <FontAwesomeIcon icon={faGoodreadsG} {...props} />
export const IconGoogle = props => <FontAwesomeIcon icon={faGoogle} {...props} />
export const IconGoogleDrive = props => <FontAwesomeIcon icon={faGoogleDrive} {...props} />
export const IconGooglePay = props => <FontAwesomeIcon icon={faGooglePay} {...props} />
export const IconGooglePlay = props => <FontAwesomeIcon icon={faGooglePlay} {...props} />
export const IconGooglePlus = props => <FontAwesomeIcon icon={faGooglePlus} {...props} />
export const IconGooglePlusG = props => <FontAwesomeIcon icon={faGooglePlusG} {...props} />
export const IconGooglePlusSquare = props => <FontAwesomeIcon icon={faGooglePlusSquare} {...props} />
export const IconGoogleWallet = props => <FontAwesomeIcon icon={faGoogleWallet} {...props} />
export const IconGratipay = props => <FontAwesomeIcon icon={faGratipay} {...props} />
export const IconGrav = props => <FontAwesomeIcon icon={faGrav} {...props} />
export const IconGripfire = props => <FontAwesomeIcon icon={faGripfire} {...props} />
export const IconGrunt = props => <FontAwesomeIcon icon={faGrunt} {...props} />
export const IconGuilded = props => <FontAwesomeIcon icon={faGuilded} {...props} />
export const IconGulp = props => <FontAwesomeIcon icon={faGulp} {...props} />
export const IconHackerNews = props => <FontAwesomeIcon icon={faHackerNews} {...props} />
export const IconHackerNewsSquare = props => <FontAwesomeIcon icon={faHackerNewsSquare} {...props} />
export const IconHackerrank = props => <FontAwesomeIcon icon={faHackerrank} {...props} />
export const IconHips = props => <FontAwesomeIcon icon={faHips} {...props} />
export const IconHireAHelper = props => <FontAwesomeIcon icon={faHireAHelper} {...props} />
export const IconHive = props => <FontAwesomeIcon icon={faHive} {...props} />
export const IconHooli = props => <FontAwesomeIcon icon={faHooli} {...props} />
export const IconHornbill = props => <FontAwesomeIcon icon={faHornbill} {...props} />
export const IconHotjar = props => <FontAwesomeIcon icon={faHotjar} {...props} />
export const IconHouzz = props => <FontAwesomeIcon icon={faHouzz} {...props} />
export const IconHtml5 = props => <FontAwesomeIcon icon={faHtml5} {...props} />
export const IconHubspot = props => <FontAwesomeIcon icon={faHubspot} {...props} />
export const IconIdeal = props => <FontAwesomeIcon icon={faIdeal} {...props} />
export const IconImdb = props => <FontAwesomeIcon icon={faImdb} {...props} />
export const IconInnosoft = props => <FontAwesomeIcon icon={faInnosoft} {...props} />
export const IconInstagram = props => <FontAwesomeIcon icon={faInstagram} {...props} />
export const IconInstagramSquare = props => <FontAwesomeIcon icon={faInstagramSquare} {...props} />
export const IconInstalod = props => <FontAwesomeIcon icon={faInstalod} {...props} />
export const IconIntercom = props => <FontAwesomeIcon icon={faIntercom} {...props} />
export const IconInternetExplorer = props => <FontAwesomeIcon icon={faInternetExplorer} {...props} />
export const IconInvision = props => <FontAwesomeIcon icon={faInvision} {...props} />
export const IconIoxhost = props => <FontAwesomeIcon icon={faIoxhost} {...props} />
export const IconItchIo = props => <FontAwesomeIcon icon={faItchIo} {...props} />
export const IconItunes = props => <FontAwesomeIcon icon={faItunes} {...props} />
export const IconItunesNote = props => <FontAwesomeIcon icon={faItunesNote} {...props} />
export const IconJava = props => <FontAwesomeIcon icon={faJava} {...props} />
export const IconJediOrder = props => <FontAwesomeIcon icon={faJediOrder} {...props} />
export const IconJenkins = props => <FontAwesomeIcon icon={faJenkins} {...props} />
export const IconJira = props => <FontAwesomeIcon icon={faJira} {...props} />
export const IconJoget = props => <FontAwesomeIcon icon={faJoget} {...props} />
export const IconJoomla = props => <FontAwesomeIcon icon={faJoomla} {...props} />
export const IconJs = props => <FontAwesomeIcon icon={faJs} {...props} />
export const IconJsSquare = props => <FontAwesomeIcon icon={faJsSquare} {...props} />
export const IconJsfiddle = props => <FontAwesomeIcon icon={faJsfiddle} {...props} />
export const IconKaggle = props => <FontAwesomeIcon icon={faKaggle} {...props} />
export const IconKeybase = props => <FontAwesomeIcon icon={faKeybase} {...props} />
export const IconKeycdn = props => <FontAwesomeIcon icon={faKeycdn} {...props} />
export const IconKickstarter = props => <FontAwesomeIcon icon={faKickstarter} {...props} />
export const IconKickstarterK = props => <FontAwesomeIcon icon={faKickstarterK} {...props} />
export const IconKorvue = props => <FontAwesomeIcon icon={faKorvue} {...props} />
export const IconLaravel = props => <FontAwesomeIcon icon={faLaravel} {...props} />
export const IconLastfm = props => <FontAwesomeIcon icon={faLastfm} {...props} />
export const IconLastfmSquare = props => <FontAwesomeIcon icon={faLastfmSquare} {...props} />
export const IconLeanpub = props => <FontAwesomeIcon icon={faLeanpub} {...props} />
export const IconLess = props => <FontAwesomeIcon icon={faLess} {...props} />
export const IconLine = props => <FontAwesomeIcon icon={faLine} {...props} />
export const IconLinkedin = props => <FontAwesomeIcon icon={faLinkedin} {...props} />
export const IconLinkedinIn = props => <FontAwesomeIcon icon={faLinkedinIn} {...props} />
export const IconLinode = props => <FontAwesomeIcon icon={faLinode} {...props} />
export const IconLinux = props => <FontAwesomeIcon icon={faLinux} {...props} />
export const IconLyft = props => <FontAwesomeIcon icon={faLyft} {...props} />
export const IconMagento = props => <FontAwesomeIcon icon={faMagento} {...props} />
export const IconMailchimp = props => <FontAwesomeIcon icon={faMailchimp} {...props} />
export const IconMandalorian = props => <FontAwesomeIcon icon={faMandalorian} {...props} />
export const IconMarkdown = props => <FontAwesomeIcon icon={faMarkdown} {...props} />
export const IconMastodon = props => <FontAwesomeIcon icon={faMastodon} {...props} />
export const IconMaxcdn = props => <FontAwesomeIcon icon={faMaxcdn} {...props} />
export const IconMdb = props => <FontAwesomeIcon icon={faMdb} {...props} />
export const IconMedapps = props => <FontAwesomeIcon icon={faMedapps} {...props} />
export const IconMedium = props => <FontAwesomeIcon icon={faMedium} {...props} />
export const IconMediumM = props => <FontAwesomeIcon icon={faMediumM} {...props} />
export const IconMedrt = props => <FontAwesomeIcon icon={faMedrt} {...props} />
export const IconMeetup = props => <FontAwesomeIcon icon={faMeetup} {...props} />
export const IconMegaport = props => <FontAwesomeIcon icon={faMegaport} {...props} />
export const IconMendeley = props => <FontAwesomeIcon icon={faMendeley} {...props} />
export const IconMicroblog = props => <FontAwesomeIcon icon={faMicroblog} {...props} />
export const IconMicrosoft = props => <FontAwesomeIcon icon={faMicrosoft} {...props} />
export const IconMix = props => <FontAwesomeIcon icon={faMix} {...props} />
export const IconMixcloud = props => <FontAwesomeIcon icon={faMixcloud} {...props} />
export const IconMixer = props => <FontAwesomeIcon icon={faMixer} {...props} />
export const IconMizuni = props => <FontAwesomeIcon icon={faMizuni} {...props} />
export const IconModx = props => <FontAwesomeIcon icon={faModx} {...props} />
export const IconMonero = props => <FontAwesomeIcon icon={faMonero} {...props} />
export const IconNapster = props => <FontAwesomeIcon icon={faNapster} {...props} />
export const IconNeos = props => <FontAwesomeIcon icon={faNeos} {...props} />
export const IconNimblr = props => <FontAwesomeIcon icon={faNimblr} {...props} />
export const IconNode = props => <FontAwesomeIcon icon={faNode} {...props} />
export const IconNodeJs = props => <FontAwesomeIcon icon={faNodeJs} {...props} />
export const IconNpm = props => <FontAwesomeIcon icon={faNpm} {...props} />
export const IconNs8 = props => <FontAwesomeIcon icon={faNs8} {...props} />
export const IconNutritionix = props => <FontAwesomeIcon icon={faNutritionix} {...props} />
export const IconOctopusDeploy = props => <FontAwesomeIcon icon={faOctopusDeploy} {...props} />
export const IconOdnoklassniki = props => <FontAwesomeIcon icon={faOdnoklassniki} {...props} />
export const IconOdnoklassnikiSqua = props => <FontAwesomeIcon icon={faOdnoklassnikiSquare} {...props} />
export const IconOldRepublic = props => <FontAwesomeIcon icon={faOldRepublic} {...props} />
export const IconOpencart = props => <FontAwesomeIcon icon={faOpencart} {...props} />
export const IconOpenid = props => <FontAwesomeIcon icon={faOpenid} {...props} />
export const IconOpera = props => <FontAwesomeIcon icon={faOpera} {...props} />
export const IconOptinMonster = props => <FontAwesomeIcon icon={faOptinMonster} {...props} />
export const IconOrcid = props => <FontAwesomeIcon icon={faOrcid} {...props} />
export const IconOsi = props => <FontAwesomeIcon icon={faOsi} {...props} />
export const IconPage4 = props => <FontAwesomeIcon icon={faPage4} {...props} />
export const IconPagelines = props => <FontAwesomeIcon icon={faPagelines} {...props} />
export const IconPalfed = props => <FontAwesomeIcon icon={faPalfed} {...props} />
export const IconPatreon = props => <FontAwesomeIcon icon={faPatreon} {...props} />
export const IconPaypal = props => <FontAwesomeIcon icon={faPaypal} {...props} />
export const IconPennyArcade = props => <FontAwesomeIcon icon={faPennyArcade} {...props} />
export const IconPerbyte = props => <FontAwesomeIcon icon={faPerbyte} {...props} />
export const IconPeriscope = props => <FontAwesomeIcon icon={faPeriscope} {...props} />
export const IconPhabricator = props => <FontAwesomeIcon icon={faPhabricator} {...props} />
export const IconPhoenixFramework = props => <FontAwesomeIcon icon={faPhoenixFramework} {...props} />
export const IconPhoenixSquadron = props => <FontAwesomeIcon icon={faPhoenixSquadron} {...props} />
export const IconPhp = props => <FontAwesomeIcon icon={faPhp} {...props} />
export const IconPiedPiper = props => <FontAwesomeIcon icon={faPiedPiper} {...props} />
export const IconPiedPiperAlt = props => <FontAwesomeIcon icon={faPiedPiperAlt} {...props} />
export const IconPiedPiperHat = props => <FontAwesomeIcon icon={faPiedPiperHat} {...props} />
export const IconPiedPiperPp = props => <FontAwesomeIcon icon={faPiedPiperPp} {...props} />
export const IconPiedPiperSquare = props => <FontAwesomeIcon icon={faPiedPiperSquare} {...props} />
export const IconPinterest = props => <FontAwesomeIcon icon={faPinterest} {...props} />
export const IconPinterestP = props => <FontAwesomeIcon icon={faPinterestP} {...props} />
export const IconPinterestSquare = props => <FontAwesomeIcon icon={faPinterestSquare} {...props} />
export const IconPlaystation = props => <FontAwesomeIcon icon={faPlaystation} {...props} />
export const IconProductHunt = props => <FontAwesomeIcon icon={faProductHunt} {...props} />
export const IconPushed = props => <FontAwesomeIcon icon={faPushed} {...props} />
export const IconPython = props => <FontAwesomeIcon icon={faPython} {...props} />
export const IconQq = props => <FontAwesomeIcon icon={faQq} {...props} />
export const IconQuinscape = props => <FontAwesomeIcon icon={faQuinscape} {...props} />
export const IconQuora = props => <FontAwesomeIcon icon={faQuora} {...props} />
export const IconRProject = props => <FontAwesomeIcon icon={faRProject} {...props} />
export const IconRaspberryPi = props => <FontAwesomeIcon icon={faRaspberryPi} {...props} />
export const IconRavelry = props => <FontAwesomeIcon icon={faRavelry} {...props} />
export const IconReact = props => <FontAwesomeIcon icon={faReact} {...props} />
export const IconReacteurope = props => <FontAwesomeIcon icon={faReacteurope} {...props} />
export const IconReadme = props => <FontAwesomeIcon icon={faReadme} {...props} />
export const IconRebel = props => <FontAwesomeIcon icon={faRebel} {...props} />
export const IconRedRiver = props => <FontAwesomeIcon icon={faRedRiver} {...props} />
export const IconReddit = props => <FontAwesomeIcon icon={faReddit} {...props} />
export const IconRedditAlien = props => <FontAwesomeIcon icon={faRedditAlien} {...props} />
export const IconRedditSquare = props => <FontAwesomeIcon icon={faRedditSquare} {...props} />
export const IconRedhat = props => <FontAwesomeIcon icon={faRedhat} {...props} />
export const IconRenren = props => <FontAwesomeIcon icon={faRenren} {...props} />
export const IconReplyd = props => <FontAwesomeIcon icon={faReplyd} {...props} />
export const IconResearchgate = props => <FontAwesomeIcon icon={faResearchgate} {...props} />
export const IconResolving = props => <FontAwesomeIcon icon={faResolving} {...props} />
export const IconRev = props => <FontAwesomeIcon icon={faRev} {...props} />
export const IconRocketchat = props => <FontAwesomeIcon icon={faRocketchat} {...props} />
export const IconRockrms = props => <FontAwesomeIcon icon={faRockrms} {...props} />
export const IconRust = props => <FontAwesomeIcon icon={faRust} {...props} />
export const IconSafari = props => <FontAwesomeIcon icon={faSafari} {...props} />
export const IconSalesforce = props => <FontAwesomeIcon icon={faSalesforce} {...props} />
export const IconSass = props => <FontAwesomeIcon icon={faSass} {...props} />
export const IconSchlix = props => <FontAwesomeIcon icon={faSchlix} {...props} />
export const IconScribd = props => <FontAwesomeIcon icon={faScribd} {...props} />
export const IconSearchengin = props => <FontAwesomeIcon icon={faSearchengin} {...props} />
export const IconSellcast = props => <FontAwesomeIcon icon={faSellcast} {...props} />
export const IconSellsy = props => <FontAwesomeIcon icon={faSellsy} {...props} />
export const IconServicestack = props => <FontAwesomeIcon icon={faServicestack} {...props} />
export const IconShirtsinbulk = props => <FontAwesomeIcon icon={faShirtsinbulk} {...props} />
export const IconShopify = props => <FontAwesomeIcon icon={faShopify} {...props} />
export const IconShopware = props => <FontAwesomeIcon icon={faShopware} {...props} />
export const IconSimplybuilt = props => <FontAwesomeIcon icon={faSimplybuilt} {...props} />
export const IconSistrix = props => <FontAwesomeIcon icon={faSistrix} {...props} />
export const IconSith = props => <FontAwesomeIcon icon={faSith} {...props} />
export const IconSketch = props => <FontAwesomeIcon icon={faSketch} {...props} />
export const IconSkyatlas = props => <FontAwesomeIcon icon={faSkyatlas} {...props} />
export const IconSkype = props => <FontAwesomeIcon icon={faSkype} {...props} />
export const IconSlack = props => <FontAwesomeIcon icon={faSlack} {...props} />
export const IconSlackHash = props => <FontAwesomeIcon icon={faSlackHash} {...props} />
export const IconSlideshare = props => <FontAwesomeIcon icon={faSlideshare} {...props} />
export const IconSnapchat = props => <FontAwesomeIcon icon={faSnapchat} {...props} />
export const IconSnapchatGhost = props => <FontAwesomeIcon icon={faSnapchatGhost} {...props} />
export const IconSnapchatSquare = props => <FontAwesomeIcon icon={faSnapchatSquare} {...props} />
export const IconSoundcloud = props => <FontAwesomeIcon icon={faSoundcloud} {...props} />
export const IconSourcetree = props => <FontAwesomeIcon icon={faSourcetree} {...props} />
export const IconSpeakap = props => <FontAwesomeIcon icon={faSpeakap} {...props} />
export const IconSpeakerDeck = props => <FontAwesomeIcon icon={faSpeakerDeck} {...props} />
export const IconSpotify = props => <FontAwesomeIcon icon={faSpotify} {...props} />
export const IconSquarespace = props => <FontAwesomeIcon icon={faSquarespace} {...props} />
export const IconStackExchange = props => <FontAwesomeIcon icon={faStackExchange} {...props} />
export const IconStackOverflow = props => <FontAwesomeIcon icon={faStackOverflow} {...props} />
export const IconStackpath = props => <FontAwesomeIcon icon={faStackpath} {...props} />
export const IconStaylinked = props => <FontAwesomeIcon icon={faStaylinked} {...props} />
export const IconSteam = props => <FontAwesomeIcon icon={faSteam} {...props} />
export const IconSteamSquare = props => <FontAwesomeIcon icon={faSteamSquare} {...props} />
export const IconSteamSymbol = props => <FontAwesomeIcon icon={faSteamSymbol} {...props} />
export const IconStickerMule = props => <FontAwesomeIcon icon={faStickerMule} {...props} />
export const IconStrava = props => <FontAwesomeIcon icon={faStrava} {...props} />
export const IconStripe = props => <FontAwesomeIcon icon={faStripe} {...props} />
export const IconStripeS = props => <FontAwesomeIcon icon={faStripeS} {...props} />
export const IconStudiovinari = props => <FontAwesomeIcon icon={faStudiovinari} {...props} />
export const IconStumbleupon = props => <FontAwesomeIcon icon={faStumbleupon} {...props} />
export const IconStumbleuponCircle = props => <FontAwesomeIcon icon={faStumbleuponCircle} {...props} />
export const IconSuperpowers = props => <FontAwesomeIcon icon={faSuperpowers} {...props} />
export const IconSupple = props => <FontAwesomeIcon icon={faSupple} {...props} />
export const IconSuse = props => <FontAwesomeIcon icon={faSuse} {...props} />
export const IconSwift = props => <FontAwesomeIcon icon={faSwift} {...props} />
export const IconSymfony = props => <FontAwesomeIcon icon={faSymfony} {...props} />
export const IconTeamspeak = props => <FontAwesomeIcon icon={faTeamspeak} {...props} />
export const IconTelegram = props => <FontAwesomeIcon icon={faTelegram} {...props} />
export const IconTelegramPlane = props => <FontAwesomeIcon icon={faTelegramPlane} {...props} />
export const IconTencentWeibo = props => <FontAwesomeIcon icon={faTencentWeibo} {...props} />
export const IconTheRedYeti = props => <FontAwesomeIcon icon={faTheRedYeti} {...props} />
export const IconThemeco = props => <FontAwesomeIcon icon={faThemeco} {...props} />
export const IconThemeisle = props => <FontAwesomeIcon icon={faThemeisle} {...props} />
export const IconThinkPeaks = props => <FontAwesomeIcon icon={faThinkPeaks} {...props} />
export const IconTiktok = props => <FontAwesomeIcon icon={faTiktok} {...props} />
export const IconTradeFederation = props => <FontAwesomeIcon icon={faTradeFederation} {...props} />
export const IconTrello = props => <FontAwesomeIcon icon={faTrello} {...props} />
export const IconTumblr = props => <FontAwesomeIcon icon={faTumblr} {...props} />
export const IconTumblrSquare = props => <FontAwesomeIcon icon={faTumblrSquare} {...props} />
export const IconTwitch = props => <FontAwesomeIcon icon={faTwitch} {...props} />
export const IconTwitter = props => <FontAwesomeIcon icon={faTwitter} {...props} />
export const IconTwitterSquare = props => <FontAwesomeIcon icon={faTwitterSquare} {...props} />
export const IconTypo3 = props => <FontAwesomeIcon icon={faTypo3} {...props} />
export const IconUber = props => <FontAwesomeIcon icon={faUber} {...props} />
export const IconUbuntu = props => <FontAwesomeIcon icon={faUbuntu} {...props} />
export const IconUikit = props => <FontAwesomeIcon icon={faUikit} {...props} />
export const IconUmbraco = props => <FontAwesomeIcon icon={faUmbraco} {...props} />
export const IconUncharted = props => <FontAwesomeIcon icon={faUncharted} {...props} />
export const IconUniregistry = props => <FontAwesomeIcon icon={faUniregistry} {...props} />
export const IconUnity = props => <FontAwesomeIcon icon={faUnity} {...props} />
export const IconUnsplash = props => <FontAwesomeIcon icon={faUnsplash} {...props} />
export const IconUntappd = props => <FontAwesomeIcon icon={faUntappd} {...props} />
export const IconUps = props => <FontAwesomeIcon icon={faUps} {...props} />
export const IconUsb = props => <FontAwesomeIcon icon={faUsb} {...props} />
export const IconUsps = props => <FontAwesomeIcon icon={faUsps} {...props} />
export const IconUssunnah = props => <FontAwesomeIcon icon={faUssunnah} {...props} />
export const IconVaadin = props => <FontAwesomeIcon icon={faVaadin} {...props} />
export const IconViacoin = props => <FontAwesomeIcon icon={faViacoin} {...props} />
export const IconViadeo = props => <FontAwesomeIcon icon={faViadeo} {...props} />
export const IconViadeoSquare = props => <FontAwesomeIcon icon={faViadeoSquare} {...props} />
export const IconViber = props => <FontAwesomeIcon icon={faViber} {...props} />
export const IconVimeo = props => <FontAwesomeIcon icon={faVimeo} {...props} />
export const IconVimeoSquare = props => <FontAwesomeIcon icon={faVimeoSquare} {...props} />
export const IconVimeoV = props => <FontAwesomeIcon icon={faVimeoV} {...props} />
export const IconVine = props => <FontAwesomeIcon icon={faVine} {...props} />
export const IconVk = props => <FontAwesomeIcon icon={faVk} {...props} />
export const IconVnv = props => <FontAwesomeIcon icon={faVnv} {...props} />
export const IconVuejs = props => <FontAwesomeIcon icon={faVuejs} {...props} />
export const IconWatchmanMonitorin = props => <FontAwesomeIcon icon={faWatchmanMonitoring} {...props} />
export const IconWaze = props => <FontAwesomeIcon icon={faWaze} {...props} />
export const IconWeebly = props => <FontAwesomeIcon icon={faWeebly} {...props} />
export const IconWeibo = props => <FontAwesomeIcon icon={faWeibo} {...props} />
export const IconWeixin = props => <FontAwesomeIcon icon={faWeixin} {...props} />
export const IconWhatsapp = props => <FontAwesomeIcon icon={faWhatsapp} {...props} />
export const IconWhatsappSquare = props => <FontAwesomeIcon icon={faWhatsappSquare} {...props} />
export const IconWhmcs = props => <FontAwesomeIcon icon={faWhmcs} {...props} />
export const IconWikipediaW = props => <FontAwesomeIcon icon={faWikipediaW} {...props} />
export const IconWindows = props => <FontAwesomeIcon icon={faWindows} {...props} />
export const IconWix = props => <FontAwesomeIcon icon={faWix} {...props} />
export const IconWizardsOfTheCoast = props => <FontAwesomeIcon icon={faWizardsOfTheCoast} {...props} />
export const IconWodu = props => <FontAwesomeIcon icon={faWodu} {...props} />
export const IconWolfPackBattalion = props => <FontAwesomeIcon icon={faWolfPackBattalion} {...props} />
export const IconWordpress = props => <FontAwesomeIcon icon={faWordpress} {...props} />
export const IconWordpressSimple = props => <FontAwesomeIcon icon={faWordpressSimple} {...props} />
export const IconWpbeginner = props => <FontAwesomeIcon icon={faWpbeginner} {...props} />
export const IconWpexplorer = props => <FontAwesomeIcon icon={faWpexplorer} {...props} />
export const IconWpforms = props => <FontAwesomeIcon icon={faWpforms} {...props} />
export const IconWpressr = props => <FontAwesomeIcon icon={faWpressr} {...props} />
export const IconXbox = props => <FontAwesomeIcon icon={faXbox} {...props} />
export const IconXing = props => <FontAwesomeIcon icon={faXing} {...props} />
export const IconXingSquare = props => <FontAwesomeIcon icon={faXingSquare} {...props} />
export const IconYCombinator = props => <FontAwesomeIcon icon={faYCombinator} {...props} />
export const IconYahoo = props => <FontAwesomeIcon icon={faYahoo} {...props} />
export const IconYammer = props => <FontAwesomeIcon icon={faYammer} {...props} />
export const IconYandex = props => <FontAwesomeIcon icon={faYandex} {...props} />
export const IconYandexInternation = props => <FontAwesomeIcon icon={faYandexInternational} {...props} />
export const IconYarn = props => <FontAwesomeIcon icon={faYarn} {...props} />
export const IconYelp = props => <FontAwesomeIcon icon={faYelp} {...props} />
export const IconYoast = props => <FontAwesomeIcon icon={faYoast} {...props} />
export const IconYoutube = props => <FontAwesomeIcon icon={faYoutube} {...props} />
export const IconYoutubeSquare = props => <FontAwesomeIcon icon={faYoutubeSquare} {...props} />
export const IconZhihu = props => <FontAwesomeIcon icon={faZhihu} {...props} />
export const IconAd = props => <FontAwesomeIcon icon={faAd} {...props} />
export const IconAddressBook = props => <FontAwesomeIcon icon={faAddressBook} {...props} />
export const IconAddressCard = props => <FontAwesomeIcon icon={faAddressCard} {...props} />
export const IconAdjust = props => <FontAwesomeIcon icon={faAdjust} {...props} />
export const IconAirFreshener = props => <FontAwesomeIcon icon={faAirFreshener} {...props} />
export const IconAlignCenter = props => <FontAwesomeIcon icon={faAlignCenter} {...props} />
export const IconAlignJustify = props => <FontAwesomeIcon icon={faAlignJustify} {...props} />
export const IconAlignLeft = props => <FontAwesomeIcon icon={faAlignLeft} {...props} />
export const IconAlignRight = props => <FontAwesomeIcon icon={faAlignRight} {...props} />
export const IconAllergies = props => <FontAwesomeIcon icon={faAllergies} {...props} />
export const IconAmbulance = props => <FontAwesomeIcon icon={faAmbulance} {...props} />
export const IconAmericanSignLanguageInterpreting = props => <FontAwesomeIcon
  icon={faAmericanSignLanguageInterpreting} {...props} />
export const IconAnchor = props => <FontAwesomeIcon icon={faAnchor} {...props} />
export const IconAngleDoubleDown = props => <FontAwesomeIcon icon={faAngleDoubleDown} {...props} />
export const IconAngleDoubleLeft = props => <FontAwesomeIcon icon={faAngleDoubleLeft} {...props} />
export const IconAngleDoubleRight = props => <FontAwesomeIcon icon={faAngleDoubleRight} {...props} />
export const IconAngleDoubleUp = props => <FontAwesomeIcon icon={faAngleDoubleUp} {...props} />
export const IconAngleDown = props => <FontAwesomeIcon icon={faAngleDown} {...props} />
export const IconAngleLeft = props => <FontAwesomeIcon icon={faAngleLeft} {...props} />
export const IconAngleRight = props => <FontAwesomeIcon icon={faAngleRight} {...props} />
export const IconAngleUp = props => <FontAwesomeIcon icon={faAngleUp} {...props} />
export const IconAngry = props => <FontAwesomeIcon icon={faAngry} {...props} />
export const IconAnkh = props => <FontAwesomeIcon icon={faAnkh} {...props} />
export const IconAppleAlt = props => <FontAwesomeIcon icon={faAppleAlt} {...props} />
export const IconArchive = props => <FontAwesomeIcon icon={faArchive} {...props} />
export const IconArchway = props => <FontAwesomeIcon icon={faArchway} {...props} />
export const IconArrowAltCircleDown = props => <FontAwesomeIcon icon={faArrowAltCircleDown} {...props} />
export const IconArrowAltCircleLeft = props => <FontAwesomeIcon icon={faArrowAltCircleLeft} {...props} />
export const IconArrowAltCircleRight = props => <FontAwesomeIcon icon={faArrowAltCircleRight} {...props} />
export const IconArrowAltCircleUp = props => <FontAwesomeIcon icon={faArrowAltCircleUp} {...props} />
export const IconArrowCircleDown = props => <FontAwesomeIcon icon={faArrowCircleDown} {...props} />
export const IconArrowCircleLeft = props => <FontAwesomeIcon icon={faArrowCircleLeft} {...props} />
export const IconArrowCircleRight = props => <FontAwesomeIcon icon={faArrowCircleRight} {...props} />
export const IconArrowCircleUp = props => <FontAwesomeIcon icon={faArrowCircleUp} {...props} />
export const IconArrowDown = props => <FontAwesomeIcon icon={faArrowDown} {...props} />
export const IconArrowLeft = props => <FontAwesomeIcon icon={faArrowLeft} {...props} />
export const IconArrowRight = props => <FontAwesomeIcon icon={faArrowRight} {...props} />
export const IconArrowUp = props => <FontAwesomeIcon icon={faArrowUp} {...props} />
export const IconArrowsAlt = props => <FontAwesomeIcon icon={faArrowsAlt} {...props} />
export const IconArrowsAltH = props => <FontAwesomeIcon icon={faArrowsAltH} {...props} />
export const IconArrowsAltV = props => <FontAwesomeIcon icon={faArrowsAltV} {...props} />
export const IconAssistiveListeningSystems = props => <FontAwesomeIcon icon={faAssistiveListeningSystems} {...props} />
export const IconAsterisk = props => <FontAwesomeIcon icon={faAsterisk} {...props} />
export const IconAt = props => <FontAwesomeIcon icon={faAt} {...props} />
export const IconAtlas = props => <FontAwesomeIcon icon={faAtlas} {...props} />
export const IconAtom = props => <FontAwesomeIcon icon={faAtom} {...props} />
export const IconAudioDescription = props => <FontAwesomeIcon icon={faAudioDescription} {...props} />
export const IconAward = props => <FontAwesomeIcon icon={faAward} {...props} />
export const IconBaby = props => <FontAwesomeIcon icon={faBaby} {...props} />
export const IconBabyCarriage = props => <FontAwesomeIcon icon={faBabyCarriage} {...props} />
export const IconBackspace = props => <FontAwesomeIcon icon={faBackspace} {...props} />
export const IconBackward = props => <FontAwesomeIcon icon={faBackward} {...props} />
export const IconBacon = props => <FontAwesomeIcon icon={faBacon} {...props} />
export const IconBacteria = props => <FontAwesomeIcon icon={faBacteria} {...props} />
export const IconBacterium = props => <FontAwesomeIcon icon={faBacterium} {...props} />
export const IconBahai = props => <FontAwesomeIcon icon={faBahai} {...props} />
export const IconBalanceScale = props => <FontAwesomeIcon icon={faBalanceScale} {...props} />
export const IconBalanceScaleLeft = props => <FontAwesomeIcon icon={faBalanceScaleLeft} {...props} />
export const IconBalanceScaleRight = props => <FontAwesomeIcon icon={faBalanceScaleRight} {...props} />
export const IconBan = props => <FontAwesomeIcon icon={faBan} {...props} />
export const IconBandAid = props => <FontAwesomeIcon icon={faBandAid} {...props} />
export const IconBarcode = props => <FontAwesomeIcon icon={faBarcode} {...props} />
export const IconBars = props => <FontAwesomeIcon icon={faBars} {...props} />
export const IconBaseballBall = props => <FontAwesomeIcon icon={faBaseballBall} {...props} />
export const IconBasketballBall = props => <FontAwesomeIcon icon={faBasketballBall} {...props} />
export const IconBath = props => <FontAwesomeIcon icon={faBath} {...props} />
export const IconBatteryEmpty = props => <FontAwesomeIcon icon={faBatteryEmpty} {...props} />
export const IconBatteryFull = props => <FontAwesomeIcon icon={faBatteryFull} {...props} />
export const IconBatteryHalf = props => <FontAwesomeIcon icon={faBatteryHalf} {...props} />
export const IconBatteryQuarter = props => <FontAwesomeIcon icon={faBatteryQuarter} {...props} />
export const IconBatteryThreeQuarters = props => <FontAwesomeIcon icon={faBatteryThreeQuarters} {...props} />
export const IconBed = props => <FontAwesomeIcon icon={faBed} {...props} />
export const IconBeer = props => <FontAwesomeIcon icon={faBeer} {...props} />
export const IconBell = props => <FontAwesomeIcon icon={faBell} {...props} />
export const IconBellSlash = props => <FontAwesomeIcon icon={faBellSlash} {...props} />
export const IconBezierCurve = props => <FontAwesomeIcon icon={faBezierCurve} {...props} />
export const IconBible = props => <FontAwesomeIcon icon={faBible} {...props} />
export const IconBicycle = props => <FontAwesomeIcon icon={faBicycle} {...props} />
export const IconBiking = props => <FontAwesomeIcon icon={faBiking} {...props} />
export const IconBinoculars = props => <FontAwesomeIcon icon={faBinoculars} {...props} />
export const IconBiohazard = props => <FontAwesomeIcon icon={faBiohazard} {...props} />
export const IconBirthdayCake = props => <FontAwesomeIcon icon={faBirthdayCake} {...props} />
export const IconBlender = props => <FontAwesomeIcon icon={faBlender} {...props} />
export const IconBlenderPhone = props => <FontAwesomeIcon icon={faBlenderPhone} {...props} />
export const IconBlind = props => <FontAwesomeIcon icon={faBlind} {...props} />
export const IconBlog = props => <FontAwesomeIcon icon={faBlog} {...props} />
export const IconBold = props => <FontAwesomeIcon icon={faBold} {...props} />
export const IconBolt = props => <FontAwesomeIcon icon={faBolt} {...props} />
export const IconBomb = props => <FontAwesomeIcon icon={faBomb} {...props} />
export const IconBone = props => <FontAwesomeIcon icon={faBone} {...props} />
export const IconBong = props => <FontAwesomeIcon icon={faBong} {...props} />
export const IconBook = props => <FontAwesomeIcon icon={faBook} {...props} />
export const IconBookDead = props => <FontAwesomeIcon icon={faBookDead} {...props} />
export const IconBookMedical = props => <FontAwesomeIcon icon={faBookMedical} {...props} />
export const IconBookOpen = props => <FontAwesomeIcon icon={faBookOpen} {...props} />
export const IconBookReader = props => <FontAwesomeIcon icon={faBookReader} {...props} />
export const IconBookmark = props => <FontAwesomeIcon icon={faBookmark} {...props} />
export const IconBorderAll = props => <FontAwesomeIcon icon={faBorderAll} {...props} />
export const IconBorderNone = props => <FontAwesomeIcon icon={faBorderNone} {...props} />
export const IconBorderStyle = props => <FontAwesomeIcon icon={faBorderStyle} {...props} />
export const IconBowlingBall = props => <FontAwesomeIcon icon={faBowlingBall} {...props} />
export const IconBox = props => <FontAwesomeIcon icon={faBox} {...props} />
export const IconBoxOpen = props => <FontAwesomeIcon icon={faBoxOpen} {...props} />
export const IconBoxTissue = props => <FontAwesomeIcon icon={faBoxTissue} {...props} />
export const IconBoxes = props => <FontAwesomeIcon icon={faBoxes} {...props} />
export const IconBraille = props => <FontAwesomeIcon icon={faBraille} {...props} />
export const IconBrain = props => <FontAwesomeIcon icon={faBrain} {...props} />
export const IconBreadSlice = props => <FontAwesomeIcon icon={faBreadSlice} {...props} />
export const IconBriefcase = props => <FontAwesomeIcon icon={faBriefcase} {...props} />
export const IconBriefcaseMedical = props => <FontAwesomeIcon icon={faBriefcaseMedical} {...props} />
export const IconBroadcastTower = props => <FontAwesomeIcon icon={faBroadcastTower} {...props} />
export const IconBroom = props => <FontAwesomeIcon icon={faBroom} {...props} />
export const IconBrush = props => <FontAwesomeIcon icon={faBrush} {...props} />
export const IconBug = props => <FontAwesomeIcon icon={faBug} {...props} />
export const IconBuilding = props => <FontAwesomeIcon icon={faBuilding} {...props} />
export const IconBullhorn = props => <FontAwesomeIcon icon={faBullhorn} {...props} />
export const IconBullseye = props => <FontAwesomeIcon icon={faBullseye} {...props} />
export const IconBurn = props => <FontAwesomeIcon icon={faBurn} {...props} />
export const IconBus = props => <FontAwesomeIcon icon={faBus} {...props} />
export const IconBusAlt = props => <FontAwesomeIcon icon={faBusAlt} {...props} />
export const IconBusinessTime = props => <FontAwesomeIcon icon={faBusinessTime} {...props} />
export const IconCalculator = props => <FontAwesomeIcon icon={faCalculator} {...props} />
export const IconCalendar = props => <FontAwesomeIcon icon={faCalendar} {...props} />
export const IconCalendarAlt = props => <FontAwesomeIcon icon={faCalendarAlt} {...props} />
export const IconCalendarCheck = props => <FontAwesomeIcon icon={faCalendarCheck} {...props} />
export const IconCalendarDay = props => <FontAwesomeIcon icon={faCalendarDay} {...props} />
export const IconCalendarMinus = props => <FontAwesomeIcon icon={faCalendarMinus} {...props} />
export const IconCalendarPlus = props => <FontAwesomeIcon icon={faCalendarPlus} {...props} />
export const IconCalendarTimes = props => <FontAwesomeIcon icon={faCalendarTimes} {...props} />
export const IconCalendarWeek = props => <FontAwesomeIcon icon={faCalendarWeek} {...props} />
export const IconCamera = props => <FontAwesomeIcon icon={faCamera} {...props} />
export const IconCameraRetro = props => <FontAwesomeIcon icon={faCameraRetro} {...props} />
export const IconCampground = props => <FontAwesomeIcon icon={faCampground} {...props} />
export const IconCandyCane = props => <FontAwesomeIcon icon={faCandyCane} {...props} />
export const IconCannabis = props => <FontAwesomeIcon icon={faCannabis} {...props} />
export const IconCapsules = props => <FontAwesomeIcon icon={faCapsules} {...props} />
export const IconCar = props => <FontAwesomeIcon icon={faCar} {...props} />
export const IconCarAlt = props => <FontAwesomeIcon icon={faCarAlt} {...props} />
export const IconCarBattery = props => <FontAwesomeIcon icon={faCarBattery} {...props} />
export const IconCarCrash = props => <FontAwesomeIcon icon={faCarCrash} {...props} />
export const IconCarSide = props => <FontAwesomeIcon icon={faCarSide} {...props} />
export const IconCaravan = props => <FontAwesomeIcon icon={faCaravan} {...props} />
export const IconCaretDown = props => <FontAwesomeIcon icon={faCaretDown} {...props} />
export const IconCaretLeft = props => <FontAwesomeIcon icon={faCaretLeft} {...props} />
export const IconCaretRight = props => <FontAwesomeIcon icon={faCaretRight} {...props} />
export const IconCaretSquareDown = props => <FontAwesomeIcon icon={faCaretSquareDown} {...props} />
export const IconCaretSquareLeft = props => <FontAwesomeIcon icon={faCaretSquareLeft} {...props} />
export const IconCaretSquareRight = props => <FontAwesomeIcon icon={faCaretSquareRight} {...props} />
export const IconCaretSquareUp = props => <FontAwesomeIcon icon={faCaretSquareUp} {...props} />
export const IconCaretUp = props => <FontAwesomeIcon icon={faCaretUp} {...props} />
export const IconCarrot = props => <FontAwesomeIcon icon={faCarrot} {...props} />
export const IconCartArrowDown = props => <FontAwesomeIcon icon={faCartArrowDown} {...props} />
export const IconCartPlus = props => <FontAwesomeIcon icon={faCartPlus} {...props} />
export const IconCashRegister = props => <FontAwesomeIcon icon={faCashRegister} {...props} />
export const IconCat = props => <FontAwesomeIcon icon={faCat} {...props} />
export const IconCertificate = props => <FontAwesomeIcon icon={faCertificate} {...props} />
export const IconChair = props => <FontAwesomeIcon icon={faChair} {...props} />
export const IconChalkboard = props => <FontAwesomeIcon icon={faChalkboard} {...props} />
export const IconChalkboardTeacher = props => <FontAwesomeIcon icon={faChalkboardTeacher} {...props} />
export const IconChargingStation = props => <FontAwesomeIcon icon={faChargingStation} {...props} />
export const IconChartArea = props => <FontAwesomeIcon icon={faChartArea} {...props} />
export const IconChartBar = props => <FontAwesomeIcon icon={faChartBar} {...props} />
export const IconChartLine = props => <FontAwesomeIcon icon={faChartLine} {...props} />
export const IconChartPie = props => <FontAwesomeIcon icon={faChartPie} {...props} />
export const IconCheck = props => <FontAwesomeIcon icon={faCheck} {...props} />
export const IconCheckCircle = props => <FontAwesomeIcon icon={faCheckCircle} {...props} />
export const IconCheckDouble = props => <FontAwesomeIcon icon={faCheckDouble} {...props} />
export const IconCheckSquare = props => <FontAwesomeIcon icon={faCheckSquare} {...props} />
export const IconCheese = props => <FontAwesomeIcon icon={faCheese} {...props} />
export const IconChess = props => <FontAwesomeIcon icon={faChess} {...props} />
export const IconChessBishop = props => <FontAwesomeIcon icon={faChessBishop} {...props} />
export const IconChessBoard = props => <FontAwesomeIcon icon={faChessBoard} {...props} />
export const IconChessKing = props => <FontAwesomeIcon icon={faChessKing} {...props} />
export const IconChessKnight = props => <FontAwesomeIcon icon={faChessKnight} {...props} />
export const IconChessPawn = props => <FontAwesomeIcon icon={faChessPawn} {...props} />
export const IconChessQueen = props => <FontAwesomeIcon icon={faChessQueen} {...props} />
export const IconChessRook = props => <FontAwesomeIcon icon={faChessRook} {...props} />
export const IconChevronCircleDown = props => <FontAwesomeIcon icon={faChevronCircleDown} {...props} />
export const IconChevronCircleLeft = props => <FontAwesomeIcon icon={faChevronCircleLeft} {...props} />
export const IconChevronCircleRight = props => <FontAwesomeIcon icon={faChevronCircleRight} {...props} />
export const IconChevronCircleUp = props => <FontAwesomeIcon icon={faChevronCircleUp} {...props} />
export const IconChevronDown = props => <FontAwesomeIcon icon={faChevronDown} {...props} />
export const IconChevronLeft = props => <FontAwesomeIcon icon={faChevronLeft} {...props} />
export const IconChevronRight = props => <FontAwesomeIcon icon={faChevronRight} {...props} />
export const IconChevronUp = props => <FontAwesomeIcon icon={faChevronUp} {...props} />
export const IconChild = props => <FontAwesomeIcon icon={faChild} {...props} />
export const IconChurch = props => <FontAwesomeIcon icon={faChurch} {...props} />
export const IconCircle = props => <FontAwesomeIcon icon={faCircle} {...props} />
export const IconCircleNotch = props => <FontAwesomeIcon icon={faCircleNotch} {...props} />
export const IconCity = props => <FontAwesomeIcon icon={faCity} {...props} />
export const IconClinicMedical = props => <FontAwesomeIcon icon={faClinicMedical} {...props} />
export const IconClipboard = props => <FontAwesomeIcon icon={faClipboard} {...props} />
export const IconClipboardCheck = props => <FontAwesomeIcon icon={faClipboardCheck} {...props} />
export const IconClipboardList = props => <FontAwesomeIcon icon={faClipboardList} {...props} />
export const IconClock = props => <FontAwesomeIcon icon={faClock} {...props} />
export const IconClone = props => <FontAwesomeIcon icon={faClone} {...props} />
export const IconClosedCaptioning = props => <FontAwesomeIcon icon={faClosedCaptioning} {...props} />
export const IconCloud = props => <FontAwesomeIcon icon={faCloud} {...props} />
export const IconCloudDownloadAlt = props => <FontAwesomeIcon icon={faCloudDownloadAlt} {...props} />
export const IconCloudMeatball = props => <FontAwesomeIcon icon={faCloudMeatball} {...props} />
export const IconCloudMoon = props => <FontAwesomeIcon icon={faCloudMoon} {...props} />
export const IconCloudMoonRain = props => <FontAwesomeIcon icon={faCloudMoonRain} {...props} />
export const IconCloudRain = props => <FontAwesomeIcon icon={faCloudRain} {...props} />
export const IconCloudShowersHeavy = props => <FontAwesomeIcon icon={faCloudShowersHeavy} {...props} />
export const IconCloudSun = props => <FontAwesomeIcon icon={faCloudSun} {...props} />
export const IconCloudSunRain = props => <FontAwesomeIcon icon={faCloudSunRain} {...props} />
export const IconCloudUploadAlt = props => <FontAwesomeIcon icon={faCloudUploadAlt} {...props} />
export const IconCocktail = props => <FontAwesomeIcon icon={faCocktail} {...props} />
export const IconCode = props => <FontAwesomeIcon icon={faCode} {...props} />
export const IconCodeBranch = props => <FontAwesomeIcon icon={faCodeBranch} {...props} />
export const IconCoffee = props => <FontAwesomeIcon icon={faCoffee} {...props} />
export const IconCog = props => <FontAwesomeIcon icon={faCog} {...props} />
export const IconCogs = props => <FontAwesomeIcon icon={faCogs} {...props} />
export const IconCoins = props => <FontAwesomeIcon icon={faCoins} {...props} />
export const IconColumns = props => <FontAwesomeIcon icon={faColumns} {...props} />
export const IconComment = props => <FontAwesomeIcon icon={faComment} {...props} />
export const IconCommentAlt = props => <FontAwesomeIcon icon={faCommentAlt} {...props} />
export const IconCommentDollar = props => <FontAwesomeIcon icon={faCommentDollar} {...props} />
export const IconCommentDots = props => <FontAwesomeIcon icon={faCommentDots} {...props} />
export const IconCommentMedical = props => <FontAwesomeIcon icon={faCommentMedical} {...props} />
export const IconCommentSlash = props => <FontAwesomeIcon icon={faCommentSlash} {...props} />
export const IconComments = props => <FontAwesomeIcon icon={faComments} {...props} />
export const IconCommentsDollar = props => <FontAwesomeIcon icon={faCommentsDollar} {...props} />
export const IconCompactDisc = props => <FontAwesomeIcon icon={faCompactDisc} {...props} />
export const IconCompass = props => <FontAwesomeIcon icon={faCompass} {...props} />
export const IconCompress = props => <FontAwesomeIcon icon={faCompress} {...props} />
export const IconCompressAlt = props => <FontAwesomeIcon icon={faCompressAlt} {...props} />
export const IconCompressArrowsAlt = props => <FontAwesomeIcon icon={faCompressArrowsAlt} {...props} />
export const IconConciergeBell = props => <FontAwesomeIcon icon={faConciergeBell} {...props} />
export const IconCookie = props => <FontAwesomeIcon icon={faCookie} {...props} />
export const IconCookieBite = props => <FontAwesomeIcon icon={faCookieBite} {...props} />
export const IconCopy = props => <FontAwesomeIcon icon={faCopy} {...props} />
export const IconCopyright = props => <FontAwesomeIcon icon={faCopyright} {...props} />
export const IconCouch = props => <FontAwesomeIcon icon={faCouch} {...props} />
export const IconCreditCard = props => <FontAwesomeIcon icon={faCreditCard} {...props} />
export const IconCrop = props => <FontAwesomeIcon icon={faCrop} {...props} />
export const IconCropAlt = props => <FontAwesomeIcon icon={faCropAlt} {...props} />
export const IconCross = props => <FontAwesomeIcon icon={faCross} {...props} />
export const IconCrosshairs = props => <FontAwesomeIcon icon={faCrosshairs} {...props} />
export const IconCrow = props => <FontAwesomeIcon icon={faCrow} {...props} />
export const IconCrown = props => <FontAwesomeIcon icon={faCrown} {...props} />
export const IconCrutch = props => <FontAwesomeIcon icon={faCrutch} {...props} />
export const IconCube = props => <FontAwesomeIcon icon={faCube} {...props} />
export const IconCubes = props => <FontAwesomeIcon icon={faCubes} {...props} />
export const IconCut = props => <FontAwesomeIcon icon={faCut} {...props} />
export const IconDatabase = props => <FontAwesomeIcon icon={faDatabase} {...props} />
export const IconDeaf = props => <FontAwesomeIcon icon={faDeaf} {...props} />
export const IconDemocrat = props => <FontAwesomeIcon icon={faDemocrat} {...props} />
export const IconDesktop = props => <FontAwesomeIcon icon={faDesktop} {...props} />
export const IconDharmachakra = props => <FontAwesomeIcon icon={faDharmachakra} {...props} />
export const IconDiagnoses = props => <FontAwesomeIcon icon={faDiagnoses} {...props} />
export const IconDice = props => <FontAwesomeIcon icon={faDice} {...props} />
export const IconDiceD20 = props => <FontAwesomeIcon icon={faDiceD20} {...props} />
export const IconDiceD6 = props => <FontAwesomeIcon icon={faDiceD6} {...props} />
export const IconDiceFive = props => <FontAwesomeIcon icon={faDiceFive} {...props} />
export const IconDiceFour = props => <FontAwesomeIcon icon={faDiceFour} {...props} />
export const IconDiceOne = props => <FontAwesomeIcon icon={faDiceOne} {...props} />
export const IconDiceSix = props => <FontAwesomeIcon icon={faDiceSix} {...props} />
export const IconDiceThree = props => <FontAwesomeIcon icon={faDiceThree} {...props} />
export const IconDiceTwo = props => <FontAwesomeIcon icon={faDiceTwo} {...props} />
export const IconDigitalTachograph = props => <FontAwesomeIcon icon={faDigitalTachograph} {...props} />
export const IconDirections = props => <FontAwesomeIcon icon={faDirections} {...props} />
export const IconDisease = props => <FontAwesomeIcon icon={faDisease} {...props} />
export const IconDivide = props => <FontAwesomeIcon icon={faDivide} {...props} />
export const IconDizzy = props => <FontAwesomeIcon icon={faDizzy} {...props} />
export const IconDna = props => <FontAwesomeIcon icon={faDna} {...props} />
export const IconDog = props => <FontAwesomeIcon icon={faDog} {...props} />
export const IconDollarSign = props => <FontAwesomeIcon icon={faDollarSign} {...props} />
export const IconDolly = props => <FontAwesomeIcon icon={faDolly} {...props} />
export const IconDollyFlatbed = props => <FontAwesomeIcon icon={faDollyFlatbed} {...props} />
export const IconDonate = props => <FontAwesomeIcon icon={faDonate} {...props} />
export const IconDoorClosed = props => <FontAwesomeIcon icon={faDoorClosed} {...props} />
export const IconDoorOpen = props => <FontAwesomeIcon icon={faDoorOpen} {...props} />
export const IconDotCircle = props => <FontAwesomeIcon icon={faDotCircle} {...props} />
export const IconDove = props => <FontAwesomeIcon icon={faDove} {...props} />
export const IconDownload = props => <FontAwesomeIcon icon={faDownload} {...props} />
export const IconDraftingCompass = props => <FontAwesomeIcon icon={faDraftingCompass} {...props} />
export const IconDragon = props => <FontAwesomeIcon icon={faDragon} {...props} />
export const IconDrawPolygon = props => <FontAwesomeIcon icon={faDrawPolygon} {...props} />
export const IconDrum = props => <FontAwesomeIcon icon={faDrum} {...props} />
export const IconDrumSteelpan = props => <FontAwesomeIcon icon={faDrumSteelpan} {...props} />
export const IconDrumstickBite = props => <FontAwesomeIcon icon={faDrumstickBite} {...props} />
export const IconDumbbell = props => <FontAwesomeIcon icon={faDumbbell} {...props} />
export const IconDumpster = props => <FontAwesomeIcon icon={faDumpster} {...props} />
export const IconDumpsterFire = props => <FontAwesomeIcon icon={faDumpsterFire} {...props} />
export const IconDungeon = props => <FontAwesomeIcon icon={faDungeon} {...props} />
export const IconEdit = props => <FontAwesomeIcon icon={faEdit} {...props} />
export const IconEgg = props => <FontAwesomeIcon icon={faEgg} {...props} />
export const IconEject = props => <FontAwesomeIcon icon={faEject} {...props} />
export const IconEllipsisH = props => <FontAwesomeIcon icon={faEllipsisH} {...props} />
export const IconEllipsisV = props => <FontAwesomeIcon icon={faEllipsisV} {...props} />
export const IconEnvelope = props => <FontAwesomeIcon icon={faEnvelope} {...props} />
export const IconEnvelopeOpen = props => <FontAwesomeIcon icon={faEnvelopeOpen} {...props} />
export const IconEnvelopeOpenText = props => <FontAwesomeIcon icon={faEnvelopeOpenText} {...props} />
export const IconEnvelopeSquare = props => <FontAwesomeIcon icon={faEnvelopeSquare} {...props} />
export const IconEquals = props => <FontAwesomeIcon icon={faEquals} {...props} />
export const IconEraser = props => <FontAwesomeIcon icon={faEraser} {...props} />
export const IconEthernet = props => <FontAwesomeIcon icon={faEthernet} {...props} />
export const IconEuroSign = props => <FontAwesomeIcon icon={faEuroSign} {...props} />
export const IconExchangeAlt = props => <FontAwesomeIcon icon={faExchangeAlt} {...props} />
export const IconExclamation = props => <FontAwesomeIcon icon={faExclamation} {...props} />
export const IconExclamationCircle = props => <FontAwesomeIcon icon={faExclamationCircle} {...props} />
export const IconExclamationTriangle = props => <FontAwesomeIcon icon={faExclamationTriangle} {...props} />
export const IconExpand = props => <FontAwesomeIcon icon={faExpand} {...props} />
export const IconExpandAlt = props => <FontAwesomeIcon icon={faExpandAlt} {...props} />
export const IconExpandArrowsAlt = props => <FontAwesomeIcon icon={faExpandArrowsAlt} {...props} />
export const IconExternalLinkAlt = props => <FontAwesomeIcon icon={faExternalLinkAlt} {...props} />
export const IconExternalLinkSquareAlt = props => <FontAwesomeIcon icon={faExternalLinkSquareAlt} {...props} />
export const IconEye = props => <FontAwesomeIcon icon={faEye} {...props} />
export const IconEyeDropper = props => <FontAwesomeIcon icon={faEyeDropper} {...props} />
export const IconEyeSlash = props => <FontAwesomeIcon icon={faEyeSlash} {...props} />
export const IconFan = props => <FontAwesomeIcon icon={faFan} {...props} />
export const IconFastBackward = props => <FontAwesomeIcon icon={faFastBackward} {...props} />
export const IconFastForward = props => <FontAwesomeIcon icon={faFastForward} {...props} />
export const IconFaucet = props => <FontAwesomeIcon icon={faFaucet} {...props} />
export const IconFax = props => <FontAwesomeIcon icon={faFax} {...props} />
export const IconFeather = props => <FontAwesomeIcon icon={faFeather} {...props} />
export const IconFeatherAlt = props => <FontAwesomeIcon icon={faFeatherAlt} {...props} />
export const IconFemale = props => <FontAwesomeIcon icon={faFemale} {...props} />
export const IconFighterJet = props => <FontAwesomeIcon icon={faFighterJet} {...props} />
export const IconFile = props => <FontAwesomeIcon icon={faFile} {...props} />
export const IconFileAlt = props => <FontAwesomeIcon icon={faFileAlt} {...props} />
export const IconFileArchive = props => <FontAwesomeIcon icon={faFileArchive} {...props} />
export const IconFileAudio = props => <FontAwesomeIcon icon={faFileAudio} {...props} />
export const IconFileCode = props => <FontAwesomeIcon icon={faFileCode} {...props} />
export const IconFileContract = props => <FontAwesomeIcon icon={faFileContract} {...props} />
export const IconFileCsv = props => <FontAwesomeIcon icon={faFileCsv} {...props} />
export const IconFileDownload = props => <FontAwesomeIcon icon={faFileDownload} {...props} />
export const IconFileExcel = props => <FontAwesomeIcon icon={faFileExcel} {...props} />
export const IconFileExport = props => <FontAwesomeIcon icon={faFileExport} {...props} />
export const IconFileImage = props => <FontAwesomeIcon icon={faFileImage} {...props} />
export const IconFileImport = props => <FontAwesomeIcon icon={faFileImport} {...props} />
export const IconFileInvoice = props => <FontAwesomeIcon icon={faFileInvoice} {...props} />
export const IconFileInvoiceDollar = props => <FontAwesomeIcon icon={faFileInvoiceDollar} {...props} />
export const IconFileMedical = props => <FontAwesomeIcon icon={faFileMedical} {...props} />
export const IconFileMedicalAlt = props => <FontAwesomeIcon icon={faFileMedicalAlt} {...props} />
export const IconFilePdf = props => <FontAwesomeIcon icon={faFilePdf} {...props} />
export const IconFilePowerpoint = props => <FontAwesomeIcon icon={faFilePowerpoint} {...props} />
export const IconFilePrescription = props => <FontAwesomeIcon icon={faFilePrescription} {...props} />
export const IconFileSignature = props => <FontAwesomeIcon icon={faFileSignature} {...props} />
export const IconFileUpload = props => <FontAwesomeIcon icon={faFileUpload} {...props} />
export const IconFileVideo = props => <FontAwesomeIcon icon={faFileVideo} {...props} />
export const IconFileWord = props => <FontAwesomeIcon icon={faFileWord} {...props} />
export const IconFill = props => <FontAwesomeIcon icon={faFill} {...props} />
export const IconFillDrip = props => <FontAwesomeIcon icon={faFillDrip} {...props} />
export const IconFilm = props => <FontAwesomeIcon icon={faFilm} {...props} />
export const IconFilter = props => <FontAwesomeIcon icon={faFilter} {...props} />
export const IconFingerprint = props => <FontAwesomeIcon icon={faFingerprint} {...props} />
export const IconFire = props => <FontAwesomeIcon icon={faFire} {...props} />
export const IconFireAlt = props => <FontAwesomeIcon icon={faFireAlt} {...props} />
export const IconFireExtinguisher = props => <FontAwesomeIcon icon={faFireExtinguisher} {...props} />
export const IconFirstAid = props => <FontAwesomeIcon icon={faFirstAid} {...props} />
export const IconFish = props => <FontAwesomeIcon icon={faFish} {...props} />
export const IconFistRaised = props => <FontAwesomeIcon icon={faFistRaised} {...props} />
export const IconFlag = props => <FontAwesomeIcon icon={faFlag} {...props} />
export const IconFlagCheckered = props => <FontAwesomeIcon icon={faFlagCheckered} {...props} />
export const IconFlagUsa = props => <FontAwesomeIcon icon={faFlagUsa} {...props} />
export const IconFlask = props => <FontAwesomeIcon icon={faFlask} {...props} />
export const IconFlushed = props => <FontAwesomeIcon icon={faFlushed} {...props} />
export const IconFolder = props => <FontAwesomeIcon icon={faFolder} {...props} />
export const IconFolderMinus = props => <FontAwesomeIcon icon={faFolderMinus} {...props} />
export const IconFolderOpen = props => <FontAwesomeIcon icon={faFolderOpen} {...props} />
export const IconFolderPlus = props => <FontAwesomeIcon icon={faFolderPlus} {...props} />
export const IconFont = props => <FontAwesomeIcon icon={faFont} {...props} />
export const IconFontAwesomeLogoFull = props => <FontAwesomeIcon icon={faFontAwesomeLogoFull} {...props} />
export const IconFootballBall = props => <FontAwesomeIcon icon={faFootballBall} {...props} />
export const IconForward = props => <FontAwesomeIcon icon={faForward} {...props} />
export const IconFrog = props => <FontAwesomeIcon icon={faFrog} {...props} />
export const IconFrown = props => <FontAwesomeIcon icon={faFrown} {...props} />
export const IconFrownOpen = props => <FontAwesomeIcon icon={faFrownOpen} {...props} />
export const IconFunnelDollar = props => <FontAwesomeIcon icon={faFunnelDollar} {...props} />
export const IconFutbol = props => <FontAwesomeIcon icon={faFutbol} {...props} />
export const IconGamepad = props => <FontAwesomeIcon icon={faGamepad} {...props} />
export const IconGasPump = props => <FontAwesomeIcon icon={faGasPump} {...props} />
export const IconGavel = props => <FontAwesomeIcon icon={faGavel} {...props} />
export const IconGem = props => <FontAwesomeIcon icon={faGem} {...props} />
export const IconGenderless = props => <FontAwesomeIcon icon={faGenderless} {...props} />
export const IconGhost = props => <FontAwesomeIcon icon={faGhost} {...props} />
export const IconGift = props => <FontAwesomeIcon icon={faGift} {...props} />
export const IconGifts = props => <FontAwesomeIcon icon={faGifts} {...props} />
export const IconGlassCheers = props => <FontAwesomeIcon icon={faGlassCheers} {...props} />
export const IconGlassMartini = props => <FontAwesomeIcon icon={faGlassMartini} {...props} />
export const IconGlassMartiniAlt = props => <FontAwesomeIcon icon={faGlassMartiniAlt} {...props} />
export const IconGlassWhiskey = props => <FontAwesomeIcon icon={faGlassWhiskey} {...props} />
export const IconGlasses = props => <FontAwesomeIcon icon={faGlasses} {...props} />
export const IconGlobe = props => <FontAwesomeIcon icon={faGlobe} {...props} />
export const IconGlobeAfrica = props => <FontAwesomeIcon icon={faGlobeAfrica} {...props} />
export const IconGlobeAmericas = props => <FontAwesomeIcon icon={faGlobeAmericas} {...props} />
export const IconGlobeAsia = props => <FontAwesomeIcon icon={faGlobeAsia} {...props} />
export const IconGlobeEurope = props => <FontAwesomeIcon icon={faGlobeEurope} {...props} />
export const IconGolfBall = props => <FontAwesomeIcon icon={faGolfBall} {...props} />
export const IconGopuram = props => <FontAwesomeIcon icon={faGopuram} {...props} />
export const IconGraduationCap = props => <FontAwesomeIcon icon={faGraduationCap} {...props} />
export const IconGreaterThan = props => <FontAwesomeIcon icon={faGreaterThan} {...props} />
export const IconGreaterThanEqual = props => <FontAwesomeIcon icon={faGreaterThanEqual} {...props} />
export const IconGrimace = props => <FontAwesomeIcon icon={faGrimace} {...props} />
export const IconGrin = props => <FontAwesomeIcon icon={faGrin} {...props} />
export const IconGrinAlt = props => <FontAwesomeIcon icon={faGrinAlt} {...props} />
export const IconGrinBeam = props => <FontAwesomeIcon icon={faGrinBeam} {...props} />
export const IconGrinBeamSweat = props => <FontAwesomeIcon icon={faGrinBeamSweat} {...props} />
export const IconGrinHearts = props => <FontAwesomeIcon icon={faGrinHearts} {...props} />
export const IconGrinSquint = props => <FontAwesomeIcon icon={faGrinSquint} {...props} />
export const IconGrinSquintTears = props => <FontAwesomeIcon icon={faGrinSquintTears} {...props} />
export const IconGrinStars = props => <FontAwesomeIcon icon={faGrinStars} {...props} />
export const IconGrinTears = props => <FontAwesomeIcon icon={faGrinTears} {...props} />
export const IconGrinTongue = props => <FontAwesomeIcon icon={faGrinTongue} {...props} />
export const IconGrinTongueSquint = props => <FontAwesomeIcon icon={faGrinTongueSquint} {...props} />
export const IconGrinTongueWink = props => <FontAwesomeIcon icon={faGrinTongueWink} {...props} />
export const IconGrinWink = props => <FontAwesomeIcon icon={faGrinWink} {...props} />
export const IconGripHorizontal = props => <FontAwesomeIcon icon={faGripHorizontal} {...props} />
export const IconGripLines = props => <FontAwesomeIcon icon={faGripLines} {...props} />
export const IconGripLinesVertical = props => <FontAwesomeIcon icon={faGripLinesVertical} {...props} />
export const IconGripVertical = props => <FontAwesomeIcon icon={faGripVertical} {...props} />
export const IconGuitar = props => <FontAwesomeIcon icon={faGuitar} {...props} />
export const IconHSquare = props => <FontAwesomeIcon icon={faHSquare} {...props} />
export const IconHamburger = props => <FontAwesomeIcon icon={faHamburger} {...props} />
export const IconHammer = props => <FontAwesomeIcon icon={faHammer} {...props} />
export const IconHamsa = props => <FontAwesomeIcon icon={faHamsa} {...props} />
export const IconHandHolding = props => <FontAwesomeIcon icon={faHandHolding} {...props} />
export const IconHandHoldingHeart = props => <FontAwesomeIcon icon={faHandHoldingHeart} {...props} />
export const IconHandHoldingMedical = props => <FontAwesomeIcon icon={faHandHoldingMedical} {...props} />
export const IconHandHoldingUsd = props => <FontAwesomeIcon icon={faHandHoldingUsd} {...props} />
export const IconHandHoldingWater = props => <FontAwesomeIcon icon={faHandHoldingWater} {...props} />
export const IconHandLizard = props => <FontAwesomeIcon icon={faHandLizard} {...props} />
export const IconHandMiddleFinger = props => <FontAwesomeIcon icon={faHandMiddleFinger} {...props} />
export const IconHandPaper = props => <FontAwesomeIcon icon={faHandPaper} {...props} />
export const IconHandPeace = props => <FontAwesomeIcon icon={faHandPeace} {...props} />
export const IconHandPointDown = props => <FontAwesomeIcon icon={faHandPointDown} {...props} />
export const IconHandPointLeft = props => <FontAwesomeIcon icon={faHandPointLeft} {...props} />
export const IconHandPointRight = props => <FontAwesomeIcon icon={faHandPointRight} {...props} />
export const IconHandPointUp = props => <FontAwesomeIcon icon={faHandPointUp} {...props} />
export const IconHandPointer = props => <FontAwesomeIcon icon={faHandPointer} {...props} />
export const IconHandRock = props => <FontAwesomeIcon icon={faHandRock} {...props} />
export const IconHandScissors = props => <FontAwesomeIcon icon={faHandScissors} {...props} />
export const IconHandSparkles = props => <FontAwesomeIcon icon={faHandSparkles} {...props} />
export const IconHandSpock = props => <FontAwesomeIcon icon={faHandSpock} {...props} />
export const IconHands = props => <FontAwesomeIcon icon={faHands} {...props} />
export const IconHandsHelping = props => <FontAwesomeIcon icon={faHandsHelping} {...props} />
export const IconHandsWash = props => <FontAwesomeIcon icon={faHandsWash} {...props} />
export const IconHandshake = props => <FontAwesomeIcon icon={faHandshake} {...props} />
export const IconHandshakeAltSlash = props => <FontAwesomeIcon icon={faHandshakeAltSlash} {...props} />
export const IconHandshakeSlash = props => <FontAwesomeIcon icon={faHandshakeSlash} {...props} />
export const IconHanukiah = props => <FontAwesomeIcon icon={faHanukiah} {...props} />
export const IconHardHat = props => <FontAwesomeIcon icon={faHardHat} {...props} />
export const IconHashtag = props => <FontAwesomeIcon icon={faHashtag} {...props} />
export const IconHatCowboy = props => <FontAwesomeIcon icon={faHatCowboy} {...props} />
export const IconHatCowboySide = props => <FontAwesomeIcon icon={faHatCowboySide} {...props} />
export const IconHatWizard = props => <FontAwesomeIcon icon={faHatWizard} {...props} />
export const IconHdd = props => <FontAwesomeIcon icon={faHdd} {...props} />
export const IconHeadSideCough = props => <FontAwesomeIcon icon={faHeadSideCough} {...props} />
export const IconHeadSideCoughSlash = props => <FontAwesomeIcon icon={faHeadSideCoughSlash} {...props} />
export const IconHeadSideMask = props => <FontAwesomeIcon icon={faHeadSideMask} {...props} />
export const IconHeadSideVirus = props => <FontAwesomeIcon icon={faHeadSideVirus} {...props} />
export const IconHeading = props => <FontAwesomeIcon icon={faHeading} {...props} />
export const IconHeadphones = props => <FontAwesomeIcon icon={faHeadphones} {...props} />
export const IconHeadphonesAlt = props => <FontAwesomeIcon icon={faHeadphonesAlt} {...props} />
export const IconHeadset = props => <FontAwesomeIcon icon={faHeadset} {...props} />
export const IconHeart = props => <FontAwesomeIcon icon={faHeart} {...props} />
export const IconHeartBroken = props => <FontAwesomeIcon icon={faHeartBroken} {...props} />
export const IconHeartbeat = props => <FontAwesomeIcon icon={faHeartbeat} {...props} />
export const IconHelicopter = props => <FontAwesomeIcon icon={faHelicopter} {...props} />
export const IconHighlighter = props => <FontAwesomeIcon icon={faHighlighter} {...props} />
export const IconHiking = props => <FontAwesomeIcon icon={faHiking} {...props} />
export const IconHippo = props => <FontAwesomeIcon icon={faHippo} {...props} />
export const IconHistory = props => <FontAwesomeIcon icon={faHistory} {...props} />
export const IconHockeyPuck = props => <FontAwesomeIcon icon={faHockeyPuck} {...props} />
export const IconHollyBerry = props => <FontAwesomeIcon icon={faHollyBerry} {...props} />
export const IconHome = props => <FontAwesomeIcon icon={faHome} {...props} />
export const IconHorse = props => <FontAwesomeIcon icon={faHorse} {...props} />
export const IconHorseHead = props => <FontAwesomeIcon icon={faHorseHead} {...props} />
export const IconHospital = props => <FontAwesomeIcon icon={faHospital} {...props} />
export const IconHospitalAlt = props => <FontAwesomeIcon icon={faHospitalAlt} {...props} />
export const IconHospitalSymbol = props => <FontAwesomeIcon icon={faHospitalSymbol} {...props} />
export const IconHospitalUser = props => <FontAwesomeIcon icon={faHospitalUser} {...props} />
export const IconHotTub = props => <FontAwesomeIcon icon={faHotTub} {...props} />
export const IconHotdog = props => <FontAwesomeIcon icon={faHotdog} {...props} />
export const IconHotel = props => <FontAwesomeIcon icon={faHotel} {...props} />
export const IconHourglass = props => <FontAwesomeIcon icon={faHourglass} {...props} />
export const IconHourglassEnd = props => <FontAwesomeIcon icon={faHourglassEnd} {...props} />
export const IconHourglassHalf = props => <FontAwesomeIcon icon={faHourglassHalf} {...props} />
export const IconHourglassStart = props => <FontAwesomeIcon icon={faHourglassStart} {...props} />
export const IconHouseDamage = props => <FontAwesomeIcon icon={faHouseDamage} {...props} />
export const IconHouseUser = props => <FontAwesomeIcon icon={faHouseUser} {...props} />
export const IconHryvnia = props => <FontAwesomeIcon icon={faHryvnia} {...props} />
export const IconICursor = props => <FontAwesomeIcon icon={faICursor} {...props} />
export const IconIceCream = props => <FontAwesomeIcon icon={faIceCream} {...props} />
export const IconIcicles = props => <FontAwesomeIcon icon={faIcicles} {...props} />
export const IconIcons = props => <FontAwesomeIcon icon={faIcons} {...props} />
export const IconIdBadge = props => <FontAwesomeIcon icon={faIdBadge} {...props} />
export const IconIdCard = props => <FontAwesomeIcon icon={faIdCard} {...props} />
export const IconIdCardAlt = props => <FontAwesomeIcon icon={faIdCardAlt} {...props} />
export const IconIgloo = props => <FontAwesomeIcon icon={faIgloo} {...props} />
export const IconImage = props => <FontAwesomeIcon icon={faImage} {...props} />
export const IconImages = props => <FontAwesomeIcon icon={faImages} {...props} />
export const IconInbox = props => <FontAwesomeIcon icon={faInbox} {...props} />
export const IconIndent = props => <FontAwesomeIcon icon={faIndent} {...props} />
export const IconIndustry = props => <FontAwesomeIcon icon={faIndustry} {...props} />
export const IconInfinity = props => <FontAwesomeIcon icon={faInfinity} {...props} />
export const IconInfo = props => <FontAwesomeIcon icon={faInfo} {...props} />
export const IconInfoCircle = props => <FontAwesomeIcon icon={faInfoCircle} {...props} />
export const IconItalic = props => <FontAwesomeIcon icon={faItalic} {...props} />
export const IconJedi = props => <FontAwesomeIcon icon={faJedi} {...props} />
export const IconJoint = props => <FontAwesomeIcon icon={faJoint} {...props} />
export const IconJournalWhills = props => <FontAwesomeIcon icon={faJournalWhills} {...props} />
export const IconKaaba = props => <FontAwesomeIcon icon={faKaaba} {...props} />
export const IconKey = props => <FontAwesomeIcon icon={faKey} {...props} />
export const IconKeyboard = props => <FontAwesomeIcon icon={faKeyboard} {...props} />
export const IconKhanda = props => <FontAwesomeIcon icon={faKhanda} {...props} />
export const IconKiss = props => <FontAwesomeIcon icon={faKiss} {...props} />
export const IconKissBeam = props => <FontAwesomeIcon icon={faKissBeam} {...props} />
export const IconKissWinkHeart = props => <FontAwesomeIcon icon={faKissWinkHeart} {...props} />
export const IconKiwiBird = props => <FontAwesomeIcon icon={faKiwiBird} {...props} />
export const IconLandmark = props => <FontAwesomeIcon icon={faLandmark} {...props} />
export const IconLanguage = props => <FontAwesomeIcon icon={faLanguage} {...props} />
export const IconLaptop = props => <FontAwesomeIcon icon={faLaptop} {...props} />
export const IconLaptopCode = props => <FontAwesomeIcon icon={faLaptopCode} {...props} />
export const IconLaptopHouse = props => <FontAwesomeIcon icon={faLaptopHouse} {...props} />
export const IconLaptopMedical = props => <FontAwesomeIcon icon={faLaptopMedical} {...props} />
export const IconLaugh = props => <FontAwesomeIcon icon={faLaugh} {...props} />
export const IconLaughBeam = props => <FontAwesomeIcon icon={faLaughBeam} {...props} />
export const IconLaughSquint = props => <FontAwesomeIcon icon={faLaughSquint} {...props} />
export const IconLaughWink = props => <FontAwesomeIcon icon={faLaughWink} {...props} />
export const IconLayerGroup = props => <FontAwesomeIcon icon={faLayerGroup} {...props} />
export const IconLeaf = props => <FontAwesomeIcon icon={faLeaf} {...props} />
export const IconLemon = props => <FontAwesomeIcon icon={faLemon} {...props} />
export const IconLessThan = props => <FontAwesomeIcon icon={faLessThan} {...props} />
export const IconLessThanEqual = props => <FontAwesomeIcon icon={faLessThanEqual} {...props} />
export const IconLevelDownAlt = props => <FontAwesomeIcon icon={faLevelDownAlt} {...props} />
export const IconLevelUpAlt = props => <FontAwesomeIcon icon={faLevelUpAlt} {...props} />
export const IconLifeRing = props => <FontAwesomeIcon icon={faLifeRing} {...props} />
export const IconLightbulb = props => <FontAwesomeIcon icon={faLightbulb} {...props} />
export const IconLink = props => <FontAwesomeIcon icon={faLink} {...props} />
export const IconLiraSign = props => <FontAwesomeIcon icon={faLiraSign} {...props} />
export const IconList = props => <FontAwesomeIcon icon={faList} {...props} />
export const IconListAlt = props => <FontAwesomeIcon icon={faListAlt} {...props} />
export const IconListOl = props => <FontAwesomeIcon icon={faListOl} {...props} />
export const IconListUl = props => <FontAwesomeIcon icon={faListUl} {...props} />
export const IconLocationArrow = props => <FontAwesomeIcon icon={faLocationArrow} {...props} />
export const IconLock = props => <FontAwesomeIcon icon={faLock} {...props} />
export const IconLockOpen = props => <FontAwesomeIcon icon={faLockOpen} {...props} />
export const IconLongArrowAltDown = props => <FontAwesomeIcon icon={faLongArrowAltDown} {...props} />
export const IconLongArrowAltLeft = props => <FontAwesomeIcon icon={faLongArrowAltLeft} {...props} />
export const IconLongArrowAltRight = props => <FontAwesomeIcon icon={faLongArrowAltRight} {...props} />
export const IconLongArrowAltUp = props => <FontAwesomeIcon icon={faLongArrowAltUp} {...props} />
export const IconLowVision = props => <FontAwesomeIcon icon={faLowVision} {...props} />
export const IconLuggageCart = props => <FontAwesomeIcon icon={faLuggageCart} {...props} />
export const IconLungs = props => <FontAwesomeIcon icon={faLungs} {...props} />
export const IconLungsVirus = props => <FontAwesomeIcon icon={faLungsVirus} {...props} />
export const IconMagic = props => <FontAwesomeIcon icon={faMagic} {...props} />
export const IconMagnet = props => <FontAwesomeIcon icon={faMagnet} {...props} />
export const IconMailBulk = props => <FontAwesomeIcon icon={faMailBulk} {...props} />
export const IconMale = props => <FontAwesomeIcon icon={faMale} {...props} />
export const IconMap = props => <FontAwesomeIcon icon={faMap} {...props} />
export const IconMapMarked = props => <FontAwesomeIcon icon={faMapMarked} {...props} />
export const IconMapMarkedAlt = props => <FontAwesomeIcon icon={faMapMarkedAlt} {...props} />
export const IconMapMarker = props => <FontAwesomeIcon icon={faMapMarker} {...props} />
export const IconMapMarkerAlt = props => <FontAwesomeIcon icon={faMapMarkerAlt} {...props} />
export const IconMapPin = props => <FontAwesomeIcon icon={faMapPin} {...props} />
export const IconMapSigns = props => <FontAwesomeIcon icon={faMapSigns} {...props} />
export const IconMarker = props => <FontAwesomeIcon icon={faMarker} {...props} />
export const IconMars = props => <FontAwesomeIcon icon={faMars} {...props} />
export const IconMarsDouble = props => <FontAwesomeIcon icon={faMarsDouble} {...props} />
export const IconMarsStroke = props => <FontAwesomeIcon icon={faMarsStroke} {...props} />
export const IconMarsStrokeH = props => <FontAwesomeIcon icon={faMarsStrokeH} {...props} />
export const IconMarsStrokeV = props => <FontAwesomeIcon icon={faMarsStrokeV} {...props} />
export const IconMask = props => <FontAwesomeIcon icon={faMask} {...props} />
export const IconMedal = props => <FontAwesomeIcon icon={faMedal} {...props} />
export const IconMedkit = props => <FontAwesomeIcon icon={faMedkit} {...props} />
export const IconMeh = props => <FontAwesomeIcon icon={faMeh} {...props} />
export const IconMehBlank = props => <FontAwesomeIcon icon={faMehBlank} {...props} />
export const IconMehRollingEyes = props => <FontAwesomeIcon icon={faMehRollingEyes} {...props} />
export const IconMemory = props => <FontAwesomeIcon icon={faMemory} {...props} />
export const IconMenorah = props => <FontAwesomeIcon icon={faMenorah} {...props} />
export const IconMercury = props => <FontAwesomeIcon icon={faMercury} {...props} />
export const IconMeteor = props => <FontAwesomeIcon icon={faMeteor} {...props} />
export const IconMicrochip = props => <FontAwesomeIcon icon={faMicrochip} {...props} />
export const IconMicrophone = props => <FontAwesomeIcon icon={faMicrophone} {...props} />
export const IconMicrophoneAlt = props => <FontAwesomeIcon icon={faMicrophoneAlt} {...props} />
export const IconMicrophoneAltSlash = props => <FontAwesomeIcon icon={faMicrophoneAltSlash} {...props} />
export const IconMicrophoneSlash = props => <FontAwesomeIcon icon={faMicrophoneSlash} {...props} />
export const IconMicroscope = props => <FontAwesomeIcon icon={faMicroscope} {...props} />
export const IconMinus = props => <FontAwesomeIcon icon={faMinus} {...props} />
export const IconMinusCircle = props => <FontAwesomeIcon icon={faMinusCircle} {...props} />
export const IconMinusSquare = props => <FontAwesomeIcon icon={faMinusSquare} {...props} />
export const IconMitten = props => <FontAwesomeIcon icon={faMitten} {...props} />
export const IconMobile = props => <FontAwesomeIcon icon={faMobile} {...props} />
export const IconMobileAlt = props => <FontAwesomeIcon icon={faMobileAlt} {...props} />
export const IconMoneyBill = props => <FontAwesomeIcon icon={faMoneyBill} {...props} />
export const IconMoneyBillAlt = props => <FontAwesomeIcon icon={faMoneyBillAlt} {...props} />
export const IconMoneyBillWave = props => <FontAwesomeIcon icon={faMoneyBillWave} {...props} />
export const IconMoneyBillWaveAlt = props => <FontAwesomeIcon icon={faMoneyBillWaveAlt} {...props} />
export const IconMoneyCheck = props => <FontAwesomeIcon icon={faMoneyCheck} {...props} />
export const IconMoneyCheckAlt = props => <FontAwesomeIcon icon={faMoneyCheckAlt} {...props} />
export const IconMonument = props => <FontAwesomeIcon icon={faMonument} {...props} />
export const IconMoon = props => <FontAwesomeIcon icon={faMoon} {...props} />
export const IconMortarPestle = props => <FontAwesomeIcon icon={faMortarPestle} {...props} />
export const IconMosque = props => <FontAwesomeIcon icon={faMosque} {...props} />
export const IconMotorcycle = props => <FontAwesomeIcon icon={faMotorcycle} {...props} />
export const IconMountain = props => <FontAwesomeIcon icon={faMountain} {...props} />
export const IconMouse = props => <FontAwesomeIcon icon={faMouse} {...props} />
export const IconMousePointer = props => <FontAwesomeIcon icon={faMousePointer} {...props} />
export const IconMugHot = props => <FontAwesomeIcon icon={faMugHot} {...props} />
export const IconMusic = props => <FontAwesomeIcon icon={faMusic} {...props} />
export const IconNetworkWired = props => <FontAwesomeIcon icon={faNetworkWired} {...props} />
export const IconNeuter = props => <FontAwesomeIcon icon={faNeuter} {...props} />
export const IconNewspaper = props => <FontAwesomeIcon icon={faNewspaper} {...props} />
export const IconNotEqual = props => <FontAwesomeIcon icon={faNotEqual} {...props} />
export const IconNotesMedical = props => <FontAwesomeIcon icon={faNotesMedical} {...props} />
export const IconObjectGroup = props => <FontAwesomeIcon icon={faObjectGroup} {...props} />
export const IconObjectUngroup = props => <FontAwesomeIcon icon={faObjectUngroup} {...props} />
export const IconOilCan = props => <FontAwesomeIcon icon={faOilCan} {...props} />
export const IconOm = props => <FontAwesomeIcon icon={faOm} {...props} />
export const IconOtter = props => <FontAwesomeIcon icon={faOtter} {...props} />
export const IconOutdent = props => <FontAwesomeIcon icon={faOutdent} {...props} />
export const IconPager = props => <FontAwesomeIcon icon={faPager} {...props} />
export const IconPaintBrush = props => <FontAwesomeIcon icon={faPaintBrush} {...props} />
export const IconPaintRoller = props => <FontAwesomeIcon icon={faPaintRoller} {...props} />
export const IconPalette = props => <FontAwesomeIcon icon={faPalette} {...props} />
export const IconPallet = props => <FontAwesomeIcon icon={faPallet} {...props} />
export const IconPaperPlane = props => <FontAwesomeIcon icon={faPaperPlane} {...props} />
export const IconPaperclip = props => <FontAwesomeIcon icon={faPaperclip} {...props} />
export const IconParachuteBox = props => <FontAwesomeIcon icon={faParachuteBox} {...props} />
export const IconParagraph = props => <FontAwesomeIcon icon={faParagraph} {...props} />
export const IconParking = props => <FontAwesomeIcon icon={faParking} {...props} />
export const IconPassport = props => <FontAwesomeIcon icon={faPassport} {...props} />
export const IconPastafarianism = props => <FontAwesomeIcon icon={faPastafarianism} {...props} />
export const IconPaste = props => <FontAwesomeIcon icon={faPaste} {...props} />
export const IconPause = props => <FontAwesomeIcon icon={faPause} {...props} />
export const IconPauseCircle = props => <FontAwesomeIcon icon={faPauseCircle} {...props} />
export const IconPaw = props => <FontAwesomeIcon icon={faPaw} {...props} />
export const IconPeace = props => <FontAwesomeIcon icon={faPeace} {...props} />
export const IconPen = props => <FontAwesomeIcon icon={faPen} {...props} />
export const IconPenAlt = props => <FontAwesomeIcon icon={faPenAlt} {...props} />
export const IconPenFancy = props => <FontAwesomeIcon icon={faPenFancy} {...props} />
export const IconPenNib = props => <FontAwesomeIcon icon={faPenNib} {...props} />
export const IconPenSquare = props => <FontAwesomeIcon icon={faPenSquare} {...props} />
export const IconPencilAlt = props => <FontAwesomeIcon icon={faPencilAlt} {...props} />
export const IconPencilRuler = props => <FontAwesomeIcon icon={faPencilRuler} {...props} />
export const IconPeopleArrows = props => <FontAwesomeIcon icon={faPeopleArrows} {...props} />
export const IconPeopleCarry = props => <FontAwesomeIcon icon={faPeopleCarry} {...props} />
export const IconPepperHot = props => <FontAwesomeIcon icon={faPepperHot} {...props} />
export const IconPercent = props => <FontAwesomeIcon icon={faPercent} {...props} />
export const IconPercentage = props => <FontAwesomeIcon icon={faPercentage} {...props} />
export const IconPersonBooth = props => <FontAwesomeIcon icon={faPersonBooth} {...props} />
export const IconPhone = props => <FontAwesomeIcon icon={faPhone} {...props} />
export const IconPhoneAlt = props => <FontAwesomeIcon icon={faPhoneAlt} {...props} />
export const IconPhoneSlash = props => <FontAwesomeIcon icon={faPhoneSlash} {...props} />
export const IconPhoneSquare = props => <FontAwesomeIcon icon={faPhoneSquare} {...props} />
export const IconPhoneSquareAlt = props => <FontAwesomeIcon icon={faPhoneSquareAlt} {...props} />
export const IconPhoneVolume = props => <FontAwesomeIcon icon={faPhoneVolume} {...props} />
export const IconPhotoVideo = props => <FontAwesomeIcon icon={faPhotoVideo} {...props} />
export const IconPiggyBank = props => <FontAwesomeIcon icon={faPiggyBank} {...props} />
export const IconPills = props => <FontAwesomeIcon icon={faPills} {...props} />
export const IconPizzaSlice = props => <FontAwesomeIcon icon={faPizzaSlice} {...props} />
export const IconPlaceOfWorship = props => <FontAwesomeIcon icon={faPlaceOfWorship} {...props} />
export const IconPlane = props => <FontAwesomeIcon icon={faPlane} {...props} />
export const IconPlaneArrival = props => <FontAwesomeIcon icon={faPlaneArrival} {...props} />
export const IconPlaneDeparture = props => <FontAwesomeIcon icon={faPlaneDeparture} {...props} />
export const IconPlaneSlash = props => <FontAwesomeIcon icon={faPlaneSlash} {...props} />
export const IconPlay = props => <FontAwesomeIcon icon={faPlay} {...props} />
export const IconPlayCircle = props => <FontAwesomeIcon icon={faPlayCircle} {...props} />
export const IconPlug = props => <FontAwesomeIcon icon={faPlug} {...props} />
export const IconPlus = props => <FontAwesomeIcon icon={faPlus} {...props} />
export const IconPlusCircle = props => <FontAwesomeIcon icon={faPlusCircle} {...props} />
export const IconPlusSquare = props => <FontAwesomeIcon icon={faPlusSquare} {...props} />
export const IconPodcast = props => <FontAwesomeIcon icon={faPodcast} {...props} />
export const IconPoll = props => <FontAwesomeIcon icon={faPoll} {...props} />
export const IconPollH = props => <FontAwesomeIcon icon={faPollH} {...props} />
export const IconPoo = props => <FontAwesomeIcon icon={faPoo} {...props} />
export const IconPooStorm = props => <FontAwesomeIcon icon={faPooStorm} {...props} />
export const IconPoop = props => <FontAwesomeIcon icon={faPoop} {...props} />
export const IconPortrait = props => <FontAwesomeIcon icon={faPortrait} {...props} />
export const IconPoundSign = props => <FontAwesomeIcon icon={faPoundSign} {...props} />
export const IconPowerOff = props => <FontAwesomeIcon icon={faPowerOff} {...props} />
export const IconPray = props => <FontAwesomeIcon icon={faPray} {...props} />
export const IconPrayingHands = props => <FontAwesomeIcon icon={faPrayingHands} {...props} />
export const IconPrescription = props => <FontAwesomeIcon icon={faPrescription} {...props} />
export const IconPrescriptionBottle = props => <FontAwesomeIcon icon={faPrescriptionBottle} {...props} />
export const IconPrescriptionBottleAlt = props => <FontAwesomeIcon icon={faPrescriptionBottleAlt} {...props} />
export const IconPrint = props => <FontAwesomeIcon icon={faPrint} {...props} />
export const IconProcedures = props => <FontAwesomeIcon icon={faProcedures} {...props} />
export const IconProjectDiagram = props => <FontAwesomeIcon icon={faProjectDiagram} {...props} />
export const IconPumpMedical = props => <FontAwesomeIcon icon={faPumpMedical} {...props} />
export const IconPumpSoap = props => <FontAwesomeIcon icon={faPumpSoap} {...props} />
export const IconPuzzlePiece = props => <FontAwesomeIcon icon={faPuzzlePiece} {...props} />
export const IconQrcode = props => <FontAwesomeIcon icon={faQrcode} {...props} />
export const IconQuestion = props => <FontAwesomeIcon icon={faQuestion} {...props} />
export const IconQuestionCircle = props => <FontAwesomeIcon icon={faQuestionCircle} {...props} />
export const IconQuidditch = props => <FontAwesomeIcon icon={faQuidditch} {...props} />
export const IconQuoteLeft = props => <FontAwesomeIcon icon={faQuoteLeft} {...props} />
export const IconQuoteRight = props => <FontAwesomeIcon icon={faQuoteRight} {...props} />
export const IconQuran = props => <FontAwesomeIcon icon={faQuran} {...props} />
export const IconRadiation = props => <FontAwesomeIcon icon={faRadiation} {...props} />
export const IconRadiationAlt = props => <FontAwesomeIcon icon={faRadiationAlt} {...props} />
export const IconRainbow = props => <FontAwesomeIcon icon={faRainbow} {...props} />
export const IconRandom = props => <FontAwesomeIcon icon={faRandom} {...props} />
export const IconReceipt = props => <FontAwesomeIcon icon={faReceipt} {...props} />
export const IconRecordVinyl = props => <FontAwesomeIcon icon={faRecordVinyl} {...props} />
export const IconRecycle = props => <FontAwesomeIcon icon={faRecycle} {...props} />
export const IconRedo = props => <FontAwesomeIcon icon={faRedo} {...props} />
export const IconRedoAlt = props => <FontAwesomeIcon icon={faRedoAlt} {...props} />
export const IconRegistered = props => <FontAwesomeIcon icon={faRegistered} {...props} />
export const IconRemoveFormat = props => <FontAwesomeIcon icon={faRemoveFormat} {...props} />
export const IconReply = props => <FontAwesomeIcon icon={faReply} {...props} />
export const IconReplyAll = props => <FontAwesomeIcon icon={faReplyAll} {...props} />
export const IconRepublican = props => <FontAwesomeIcon icon={faRepublican} {...props} />
export const IconRestroom = props => <FontAwesomeIcon icon={faRestroom} {...props} />
export const IconRetweet = props => <FontAwesomeIcon icon={faRetweet} {...props} />
export const IconRibbon = props => <FontAwesomeIcon icon={faRibbon} {...props} />
export const IconRing = props => <FontAwesomeIcon icon={faRing} {...props} />
export const IconRoad = props => <FontAwesomeIcon icon={faRoad} {...props} />
export const IconRobot = props => <FontAwesomeIcon icon={faRobot} {...props} />
export const IconRocket = props => <FontAwesomeIcon icon={faRocket} {...props} />
export const IconRoute = props => <FontAwesomeIcon icon={faRoute} {...props} />
export const IconRss = props => <FontAwesomeIcon icon={faRss} {...props} />
export const IconRssSquare = props => <FontAwesomeIcon icon={faRssSquare} {...props} />
export const IconRubleSign = props => <FontAwesomeIcon icon={faRubleSign} {...props} />
export const IconRuler = props => <FontAwesomeIcon icon={faRuler} {...props} />
export const IconRulerCombined = props => <FontAwesomeIcon icon={faRulerCombined} {...props} />
export const IconRulerHorizontal = props => <FontAwesomeIcon icon={faRulerHorizontal} {...props} />
export const IconRulerVertical = props => <FontAwesomeIcon icon={faRulerVertical} {...props} />
export const IconRunning = props => <FontAwesomeIcon icon={faRunning} {...props} />
export const IconRupeeSign = props => <FontAwesomeIcon icon={faRupeeSign} {...props} />
export const IconSadCry = props => <FontAwesomeIcon icon={faSadCry} {...props} />
export const IconSadTear = props => <FontAwesomeIcon icon={faSadTear} {...props} />
export const IconSatellite = props => <FontAwesomeIcon icon={faSatellite} {...props} />
export const IconSatelliteDish = props => <FontAwesomeIcon icon={faSatelliteDish} {...props} />
export const IconSave = props => <FontAwesomeIcon icon={faSave} {...props} />
export const IconSchool = props => <FontAwesomeIcon icon={faSchool} {...props} />
export const IconScrewdriver = props => <FontAwesomeIcon icon={faScrewdriver} {...props} />
export const IconScroll = props => <FontAwesomeIcon icon={faScroll} {...props} />
export const IconSdCard = props => <FontAwesomeIcon icon={faSdCard} {...props} />
export const IconSearch = props => <FontAwesomeIcon icon={faSearch} {...props} />
export const IconSearchDollar = props => <FontAwesomeIcon icon={faSearchDollar} {...props} />
export const IconSearchLocation = props => <FontAwesomeIcon icon={faSearchLocation} {...props} />
export const IconSearchMinus = props => <FontAwesomeIcon icon={faSearchMinus} {...props} />
export const IconSearchPlus = props => <FontAwesomeIcon icon={faSearchPlus} {...props} />
export const IconSeedling = props => <FontAwesomeIcon icon={faSeedling} {...props} />
export const IconServer = props => <FontAwesomeIcon icon={faServer} {...props} />
export const IconShapes = props => <FontAwesomeIcon icon={faShapes} {...props} />
export const IconShare = props => <FontAwesomeIcon icon={faShare} {...props} />
export const IconShareAlt = props => <FontAwesomeIcon icon={faShareAlt} {...props} />
export const IconShareAltSquare = props => <FontAwesomeIcon icon={faShareAltSquare} {...props} />
export const IconShareSquare = props => <FontAwesomeIcon icon={faShareSquare} {...props} />
export const IconShekelSign = props => <FontAwesomeIcon icon={faShekelSign} {...props} />
export const IconShieldAlt = props => <FontAwesomeIcon icon={faShieldAlt} {...props} />
export const IconShieldVirus = props => <FontAwesomeIcon icon={faShieldVirus} {...props} />
export const IconShip = props => <FontAwesomeIcon icon={faShip} {...props} />
export const IconShippingFast = props => <FontAwesomeIcon icon={faShippingFast} {...props} />
export const IconShoePrints = props => <FontAwesomeIcon icon={faShoePrints} {...props} />
export const IconShoppingBag = props => <FontAwesomeIcon icon={faShoppingBag} {...props} />
export const IconShoppingBasket = props => <FontAwesomeIcon icon={faShoppingBasket} {...props} />
export const IconShoppingCart = props => <FontAwesomeIcon icon={faShoppingCart} {...props} />
export const IconShower = props => <FontAwesomeIcon icon={faShower} {...props} />
export const IconShuttleVan = props => <FontAwesomeIcon icon={faShuttleVan} {...props} />
export const IconSign = props => <FontAwesomeIcon icon={faSign} {...props} />
export const IconSignInAlt = props => <FontAwesomeIcon icon={faSignInAlt} {...props} />
export const IconSignLanguage = props => <FontAwesomeIcon icon={faSignLanguage} {...props} />
export const IconSignOutAlt = props => <FontAwesomeIcon icon={faSignOutAlt} {...props} />
export const IconSignal = props => <FontAwesomeIcon icon={faSignal} {...props} />
export const IconSignature = props => <FontAwesomeIcon icon={faSignature} {...props} />
export const IconSimCard = props => <FontAwesomeIcon icon={faSimCard} {...props} />
export const IconSink = props => <FontAwesomeIcon icon={faSink} {...props} />
export const IconSitemap = props => <FontAwesomeIcon icon={faSitemap} {...props} />
export const IconSkating = props => <FontAwesomeIcon icon={faSkating} {...props} />
export const IconSkiing = props => <FontAwesomeIcon icon={faSkiing} {...props} />
export const IconSkiingNordic = props => <FontAwesomeIcon icon={faSkiingNordic} {...props} />
export const IconSkull = props => <FontAwesomeIcon icon={faSkull} {...props} />
export const IconSkullCrossbones = props => <FontAwesomeIcon icon={faSkullCrossbones} {...props} />
export const IconSlash = props => <FontAwesomeIcon icon={faSlash} {...props} />
export const IconSleigh = props => <FontAwesomeIcon icon={faSleigh} {...props} />
export const IconSlidersH = props => <FontAwesomeIcon icon={faSlidersH} {...props} />
export const IconSmile = props => <FontAwesomeIcon icon={faSmile} {...props} />
export const IconSmileBeam = props => <FontAwesomeIcon icon={faSmileBeam} {...props} />
export const IconSmileWink = props => <FontAwesomeIcon icon={faSmileWink} {...props} />
export const IconSmog = props => <FontAwesomeIcon icon={faSmog} {...props} />
export const IconSmoking = props => <FontAwesomeIcon icon={faSmoking} {...props} />
export const IconSmokingBan = props => <FontAwesomeIcon icon={faSmokingBan} {...props} />
export const IconSms = props => <FontAwesomeIcon icon={faSms} {...props} />
export const IconSnowboarding = props => <FontAwesomeIcon icon={faSnowboarding} {...props} />
export const IconSnowflake = props => <FontAwesomeIcon icon={faSnowflake} {...props} />
export const IconSnowman = props => <FontAwesomeIcon icon={faSnowman} {...props} />
export const IconSnowplow = props => <FontAwesomeIcon icon={faSnowplow} {...props} />
export const IconSoap = props => <FontAwesomeIcon icon={faSoap} {...props} />
export const IconSocks = props => <FontAwesomeIcon icon={faSocks} {...props} />
export const IconSolarPanel = props => <FontAwesomeIcon icon={faSolarPanel} {...props} />
export const IconSort = props => <FontAwesomeIcon icon={faSort} {...props} />
export const IconSortAlphaDown = props => <FontAwesomeIcon icon={faSortAlphaDown} {...props} />
export const IconSortAlphaDownAlt = props => <FontAwesomeIcon icon={faSortAlphaDownAlt} {...props} />
export const IconSortAlphaUp = props => <FontAwesomeIcon icon={faSortAlphaUp} {...props} />
export const IconSortAlphaUpAlt = props => <FontAwesomeIcon icon={faSortAlphaUpAlt} {...props} />
export const IconSortAmountDown = props => <FontAwesomeIcon icon={faSortAmountDown} {...props} />
export const IconSortAmountDownAlt = props => <FontAwesomeIcon icon={faSortAmountDownAlt} {...props} />
export const IconSortAmountUp = props => <FontAwesomeIcon icon={faSortAmountUp} {...props} />
export const IconSortAmountUpAlt = props => <FontAwesomeIcon icon={faSortAmountUpAlt} {...props} />
export const IconSortDown = props => <FontAwesomeIcon icon={faSortDown} {...props} />
export const IconSortNumericDown = props => <FontAwesomeIcon icon={faSortNumericDown} {...props} />
export const IconSortNumericDownAlt = props => <FontAwesomeIcon icon={faSortNumericDownAlt} {...props} />
export const IconSortNumericUp = props => <FontAwesomeIcon icon={faSortNumericUp} {...props} />
export const IconSortNumericUpAlt = props => <FontAwesomeIcon icon={faSortNumericUpAlt} {...props} />
export const IconSortUp = props => <FontAwesomeIcon icon={faSortUp} {...props} />
export const IconSpa = props => <FontAwesomeIcon icon={faSpa} {...props} />
export const IconSpaceShuttle = props => <FontAwesomeIcon icon={faSpaceShuttle} {...props} />
export const IconSpellCheck = props => <FontAwesomeIcon icon={faSpellCheck} {...props} />
export const IconSpider = props => <FontAwesomeIcon icon={faSpider} {...props} />
export const IconSpinner = props => <FontAwesomeIcon icon={faSpinner} {...props} />
export const IconSplotch = props => <FontAwesomeIcon icon={faSplotch} {...props} />
export const IconSprayCan = props => <FontAwesomeIcon icon={faSprayCan} {...props} />
export const IconSquare = props => <FontAwesomeIcon icon={faSquare} {...props} />
export const IconSquareFull = props => <FontAwesomeIcon icon={faSquareFull} {...props} />
export const IconSquareRootAlt = props => <FontAwesomeIcon icon={faSquareRootAlt} {...props} />
export const IconStamp = props => <FontAwesomeIcon icon={faStamp} {...props} />
export const IconStar = props => <FontAwesomeIcon icon={faStar} {...props} />
export const IconStarAndCrescent = props => <FontAwesomeIcon icon={faStarAndCrescent} {...props} />
export const IconStarHalf = props => <FontAwesomeIcon icon={faStarHalf} {...props} />
export const IconStarHalfAlt = props => <FontAwesomeIcon icon={faStarHalfAlt} {...props} />
export const IconStarOfDavid = props => <FontAwesomeIcon icon={faStarOfDavid} {...props} />
export const IconStarOfLife = props => <FontAwesomeIcon icon={faStarOfLife} {...props} />
export const IconStepBackward = props => <FontAwesomeIcon icon={faStepBackward} {...props} />
export const IconStepForward = props => <FontAwesomeIcon icon={faStepForward} {...props} />
export const IconStethoscope = props => <FontAwesomeIcon icon={faStethoscope} {...props} />
export const IconStickyNote = props => <FontAwesomeIcon icon={faStickyNote} {...props} />
export const IconStop = props => <FontAwesomeIcon icon={faStop} {...props} />
export const IconStopCircle = props => <FontAwesomeIcon icon={faStopCircle} {...props} />
export const IconStopwatch = props => <FontAwesomeIcon icon={faStopwatch} {...props} />
export const IconStopwatch20 = props => <FontAwesomeIcon icon={faStopwatch20} {...props} />
export const IconStore = props => <FontAwesomeIcon icon={faStore} {...props} />
export const IconStoreAlt = props => <FontAwesomeIcon icon={faStoreAlt} {...props} />
export const IconStoreAltSlash = props => <FontAwesomeIcon icon={faStoreAltSlash} {...props} />
export const IconStoreSlash = props => <FontAwesomeIcon icon={faStoreSlash} {...props} />
export const IconStream = props => <FontAwesomeIcon icon={faStream} {...props} />
export const IconStreetView = props => <FontAwesomeIcon icon={faStreetView} {...props} />
export const IconStrikethrough = props => <FontAwesomeIcon icon={faStrikethrough} {...props} />
export const IconStroopwafel = props => <FontAwesomeIcon icon={faStroopwafel} {...props} />
export const IconSubscript = props => <FontAwesomeIcon icon={faSubscript} {...props} />
export const IconSubway = props => <FontAwesomeIcon icon={faSubway} {...props} />
export const IconSuitcase = props => <FontAwesomeIcon icon={faSuitcase} {...props} />
export const IconSuitcaseRolling = props => <FontAwesomeIcon icon={faSuitcaseRolling} {...props} />
export const IconSun = props => <FontAwesomeIcon icon={faSun} {...props} />
export const IconSuperscript = props => <FontAwesomeIcon icon={faSuperscript} {...props} />
export const IconSurprise = props => <FontAwesomeIcon icon={faSurprise} {...props} />
export const IconSwatchbook = props => <FontAwesomeIcon icon={faSwatchbook} {...props} />
export const IconSwimmer = props => <FontAwesomeIcon icon={faSwimmer} {...props} />
export const IconSwimmingPool = props => <FontAwesomeIcon icon={faSwimmingPool} {...props} />
export const IconSynagogue = props => <FontAwesomeIcon icon={faSynagogue} {...props} />
export const IconSync = props => <FontAwesomeIcon icon={faSync} {...props} />
export const IconSyncAlt = props => <FontAwesomeIcon icon={faSyncAlt} {...props} />
export const IconSyringe = props => <FontAwesomeIcon icon={faSyringe} {...props} />
export const IconTable = props => <FontAwesomeIcon icon={faTable} {...props} />
export const IconTableTennis = props => <FontAwesomeIcon icon={faTableTennis} {...props} />
export const IconTablet = props => <FontAwesomeIcon icon={faTablet} {...props} />
export const IconTabletAlt = props => <FontAwesomeIcon icon={faTabletAlt} {...props} />
export const IconTablets = props => <FontAwesomeIcon icon={faTablets} {...props} />
export const IconTachometerAlt = props => <FontAwesomeIcon icon={faTachometerAlt} {...props} />
export const IconTag = props => <FontAwesomeIcon icon={faTag} {...props} />
export const IconTags = props => <FontAwesomeIcon icon={faTags} {...props} />
export const IconTape = props => <FontAwesomeIcon icon={faTape} {...props} />
export const IconTasks = props => <FontAwesomeIcon icon={faTasks} {...props} />
export const IconTaxi = props => <FontAwesomeIcon icon={faTaxi} {...props} />
export const IconTeeth = props => <FontAwesomeIcon icon={faTeeth} {...props} />
export const IconTeethOpen = props => <FontAwesomeIcon icon={faTeethOpen} {...props} />
export const IconTemperatureHigh = props => <FontAwesomeIcon icon={faTemperatureHigh} {...props} />
export const IconTemperatureLow = props => <FontAwesomeIcon icon={faTemperatureLow} {...props} />
export const IconTenge = props => <FontAwesomeIcon icon={faTenge} {...props} />
export const IconTerminal = props => <FontAwesomeIcon icon={faTerminal} {...props} />
export const IconTextHeight = props => <FontAwesomeIcon icon={faTextHeight} {...props} />
export const IconTextWidth = props => <FontAwesomeIcon icon={faTextWidth} {...props} />
export const IconTh = props => <FontAwesomeIcon icon={faTh} {...props} />
export const IconThLarge = props => <FontAwesomeIcon icon={faThLarge} {...props} />
export const IconThList = props => <FontAwesomeIcon icon={faThList} {...props} />
export const IconTheaterMasks = props => <FontAwesomeIcon icon={faTheaterMasks} {...props} />
export const IconThermometer = props => <FontAwesomeIcon icon={faThermometer} {...props} />
export const IconThermometerEmpty = props => <FontAwesomeIcon icon={faThermometerEmpty} {...props} />
export const IconThermometerFull = props => <FontAwesomeIcon icon={faThermometerFull} {...props} />
export const IconThermometerHalf = props => <FontAwesomeIcon icon={faThermometerHalf} {...props} />
export const IconThermometerQuarter = props => <FontAwesomeIcon icon={faThermometerQuarter} {...props} />
export const IconThermometerThreeQuarters = props => <FontAwesomeIcon icon={faThermometerThreeQuarters} {...props} />
export const IconThumbsDown = props => <FontAwesomeIcon icon={faThumbsDown} {...props} />
export const IconThumbsUp = props => <FontAwesomeIcon icon={faThumbsUp} {...props} />
export const IconThumbtack = props => <FontAwesomeIcon icon={faThumbtack} {...props} />
export const IconTicketAlt = props => <FontAwesomeIcon icon={faTicketAlt} {...props} />
export const IconTimes = props => <FontAwesomeIcon icon={faTimes} {...props} />
export const IconTimesCircle = props => <FontAwesomeIcon icon={faTimesCircle} {...props} />
export const IconTint = props => <FontAwesomeIcon icon={faTint} {...props} />
export const IconTintSlash = props => <FontAwesomeIcon icon={faTintSlash} {...props} />
export const IconTired = props => <FontAwesomeIcon icon={faTired} {...props} />
export const IconToggleOff = props => <FontAwesomeIcon icon={faToggleOff} {...props} />
export const IconToggleOn = props => <FontAwesomeIcon icon={faToggleOn} {...props} />
export const IconToilet = props => <FontAwesomeIcon icon={faToilet} {...props} />
export const IconToiletPaper = props => <FontAwesomeIcon icon={faToiletPaper} {...props} />
export const IconToiletPaperSlash = props => <FontAwesomeIcon icon={faToiletPaperSlash} {...props} />
export const IconToolbox = props => <FontAwesomeIcon icon={faToolbox} {...props} />
export const IconTools = props => <FontAwesomeIcon icon={faTools} {...props} />
export const IconTooth = props => <FontAwesomeIcon icon={faTooth} {...props} />
export const IconTorah = props => <FontAwesomeIcon icon={faTorah} {...props} />
export const IconToriiGate = props => <FontAwesomeIcon icon={faToriiGate} {...props} />
export const IconTractor = props => <FontAwesomeIcon icon={faTractor} {...props} />
export const IconTrademark = props => <FontAwesomeIcon icon={faTrademark} {...props} />
export const IconTrafficLight = props => <FontAwesomeIcon icon={faTrafficLight} {...props} />
export const IconTrailer = props => <FontAwesomeIcon icon={faTrailer} {...props} />
export const IconTrain = props => <FontAwesomeIcon icon={faTrain} {...props} />
export const IconTram = props => <FontAwesomeIcon icon={faTram} {...props} />
export const IconTransgender = props => <FontAwesomeIcon icon={faTransgender} {...props} />
export const IconTransgenderAlt = props => <FontAwesomeIcon icon={faTransgenderAlt} {...props} />
export const IconTrash = props => <FontAwesomeIcon icon={faTrash} {...props} />
export const IconTrashAlt = props => <FontAwesomeIcon icon={faTrashAlt} {...props} />
export const IconTrashRestore = props => <FontAwesomeIcon icon={faTrashRestore} {...props} />
export const IconTrashRestoreAlt = props => <FontAwesomeIcon icon={faTrashRestoreAlt} {...props} />
export const IconTree = props => <FontAwesomeIcon icon={faTree} {...props} />
export const IconTrophy = props => <FontAwesomeIcon icon={faTrophy} {...props} />
export const IconTruck = props => <FontAwesomeIcon icon={faTruck} {...props} />
export const IconTruckLoading = props => <FontAwesomeIcon icon={faTruckLoading} {...props} />
export const IconTruckMonster = props => <FontAwesomeIcon icon={faTruckMonster} {...props} />
export const IconTruckMoving = props => <FontAwesomeIcon icon={faTruckMoving} {...props} />
export const IconTruckPickup = props => <FontAwesomeIcon icon={faTruckPickup} {...props} />
export const IconTshirt = props => <FontAwesomeIcon icon={faTshirt} {...props} />
export const IconTty = props => <FontAwesomeIcon icon={faTty} {...props} />
export const IconTv = props => <FontAwesomeIcon icon={faTv} {...props} />
export const IconUmbrella = props => <FontAwesomeIcon icon={faUmbrella} {...props} />
export const IconUmbrellaBeach = props => <FontAwesomeIcon icon={faUmbrellaBeach} {...props} />
export const IconUnderline = props => <FontAwesomeIcon icon={faUnderline} {...props} />
export const IconUndo = props => <FontAwesomeIcon icon={faUndo} {...props} />
export const IconUndoAlt = props => <FontAwesomeIcon icon={faUndoAlt} {...props} />
export const IconUniversalAccess = props => <FontAwesomeIcon icon={faUniversalAccess} {...props} />
export const IconUniversity = props => <FontAwesomeIcon icon={faUniversity} {...props} />
export const IconUnlink = props => <FontAwesomeIcon icon={faUnlink} {...props} />
export const IconUnlock = props => <FontAwesomeIcon icon={faUnlock} {...props} />
export const IconUnlockAlt = props => <FontAwesomeIcon icon={faUnlockAlt} {...props} />
export const IconUpload = props => <FontAwesomeIcon icon={faUpload} {...props} />
export const IconUser = props => <FontAwesomeIcon icon={faUser} {...props} />
export const IconUserAlt = props => <FontAwesomeIcon icon={faUserAlt} {...props} />
export const IconUserAltSlash = props => <FontAwesomeIcon icon={faUserAltSlash} {...props} />
export const IconUserAstronaut = props => <FontAwesomeIcon icon={faUserAstronaut} {...props} />
export const IconUserCheck = props => <FontAwesomeIcon icon={faUserCheck} {...props} />
export const IconUserCircle = props => <FontAwesomeIcon icon={faUserCircle} {...props} />
export const IconUserClock = props => <FontAwesomeIcon icon={faUserClock} {...props} />
export const IconUserCog = props => <FontAwesomeIcon icon={faUserCog} {...props} />
export const IconUserEdit = props => <FontAwesomeIcon icon={faUserEdit} {...props} />
export const IconUserFriends = props => <FontAwesomeIcon icon={faUserFriends} {...props} />
export const IconUserGraduate = props => <FontAwesomeIcon icon={faUserGraduate} {...props} />
export const IconUserInjured = props => <FontAwesomeIcon icon={faUserInjured} {...props} />
export const IconUserLock = props => <FontAwesomeIcon icon={faUserLock} {...props} />
export const IconUserMd = props => <FontAwesomeIcon icon={faUserMd} {...props} />
export const IconUserMinus = props => <FontAwesomeIcon icon={faUserMinus} {...props} />
export const IconUserNinja = props => <FontAwesomeIcon icon={faUserNinja} {...props} />
export const IconUserNurse = props => <FontAwesomeIcon icon={faUserNurse} {...props} />
export const IconUserPlus = props => <FontAwesomeIcon icon={faUserPlus} {...props} />
export const IconUserSecret = props => <FontAwesomeIcon icon={faUserSecret} {...props} />
export const IconUserShield = props => <FontAwesomeIcon icon={faUserShield} {...props} />
export const IconUserSlash = props => <FontAwesomeIcon icon={faUserSlash} {...props} />
export const IconUserTag = props => <FontAwesomeIcon icon={faUserTag} {...props} />
export const IconUserTie = props => <FontAwesomeIcon icon={faUserTie} {...props} />
export const IconUserTimes = props => <FontAwesomeIcon icon={faUserTimes} {...props} />
export const IconUsers = props => <FontAwesomeIcon icon={faUsers} {...props} />
export const IconUsersCog = props => <FontAwesomeIcon icon={faUsersCog} {...props} />
export const IconUsersSlash = props => <FontAwesomeIcon icon={faUsersSlash} {...props} />
export const IconUtensilSpoon = props => <FontAwesomeIcon icon={faUtensilSpoon} {...props} />
export const IconUtensils = props => <FontAwesomeIcon icon={faUtensils} {...props} />
export const IconVectorSquare = props => <FontAwesomeIcon icon={faVectorSquare} {...props} />
export const IconVenus = props => <FontAwesomeIcon icon={faVenus} {...props} />
export const IconVenusDouble = props => <FontAwesomeIcon icon={faVenusDouble} {...props} />
export const IconVenusMars = props => <FontAwesomeIcon icon={faVenusMars} {...props} />
export const IconVest = props => <FontAwesomeIcon icon={faVest} {...props} />
export const IconVestPatches = props => <FontAwesomeIcon icon={faVestPatches} {...props} />
export const IconVial = props => <FontAwesomeIcon icon={faVial} {...props} />
export const IconVials = props => <FontAwesomeIcon icon={faVials} {...props} />
export const IconVideo = props => <FontAwesomeIcon icon={faVideo} {...props} />
export const IconVideoSlash = props => <FontAwesomeIcon icon={faVideoSlash} {...props} />
export const IconVihara = props => <FontAwesomeIcon icon={faVihara} {...props} />
export const IconVirus = props => <FontAwesomeIcon icon={faVirus} {...props} />
export const IconVirusSlash = props => <FontAwesomeIcon icon={faVirusSlash} {...props} />
export const IconViruses = props => <FontAwesomeIcon icon={faViruses} {...props} />
export const IconVoicemail = props => <FontAwesomeIcon icon={faVoicemail} {...props} />
export const IconVolleyballBall = props => <FontAwesomeIcon icon={faVolleyballBall} {...props} />
export const IconVolumeDown = props => <FontAwesomeIcon icon={faVolumeDown} {...props} />
export const IconVolumeMute = props => <FontAwesomeIcon icon={faVolumeMute} {...props} />
export const IconVolumeOff = props => <FontAwesomeIcon icon={faVolumeOff} {...props} />
export const IconVolumeUp = props => <FontAwesomeIcon icon={faVolumeUp} {...props} />
export const IconVoteYea = props => <FontAwesomeIcon icon={faVoteYea} {...props} />
export const IconVrCardboard = props => <FontAwesomeIcon icon={faVrCardboard} {...props} />
export const IconWalking = props => <FontAwesomeIcon icon={faWalking} {...props} />
export const IconWallet = props => <FontAwesomeIcon icon={faWallet} {...props} />
export const IconWarehouse = props => <FontAwesomeIcon icon={faWarehouse} {...props} />
export const IconWater = props => <FontAwesomeIcon icon={faWater} {...props} />
export const IconWaveSquare = props => <FontAwesomeIcon icon={faWaveSquare} {...props} />
export const IconWeight = props => <FontAwesomeIcon icon={faWeight} {...props} />
export const IconWeightHanging = props => <FontAwesomeIcon icon={faWeightHanging} {...props} />
export const IconWheelchair = props => <FontAwesomeIcon icon={faWheelchair} {...props} />
export const IconWifi = props => <FontAwesomeIcon icon={faWifi} {...props} />
export const IconWind = props => <FontAwesomeIcon icon={faWind} {...props} />
export const IconWindowClose = props => <FontAwesomeIcon icon={faWindowClose} {...props} />
export const IconWindowMaximize = props => <FontAwesomeIcon icon={faWindowMaximize} {...props} />
export const IconWindowMinimize = props => <FontAwesomeIcon icon={faWindowMinimize} {...props} />
export const IconWindowRestore = props => <FontAwesomeIcon icon={faWindowRestore} {...props} />
export const IconWineBottle = props => <FontAwesomeIcon icon={faWineBottle} {...props} />
export const IconWineGlass = props => <FontAwesomeIcon icon={faWineGlass} {...props} />
export const IconWineGlassAlt = props => <FontAwesomeIcon icon={faWineGlassAlt} {...props} />
export const IconWonSign = props => <FontAwesomeIcon icon={faWonSign} {...props} />
export const IconWrench = props => <FontAwesomeIcon icon={faWrench} {...props} />
export const IconXRay = props => <FontAwesomeIcon icon={faXRay} {...props} />
export const IconYenSign = props => <FontAwesomeIcon icon={faYenSign} {...props} />
export const IconYinYang = props => <FontAwesomeIcon icon={faYinYang} {...props} />