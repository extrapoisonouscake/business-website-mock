"use client";
import appleWalletImage from "@/assets/images/apple-wallet.png";
import vancouverConcert from "@/assets/images/vancouver-concert.png";
import liveImage from "@/assets/images/live.png";
import campaingsImage from "@/assets/images/campaigns.png";
import {
  ChartOutlineIcon,
  ChartSolidIcon,
  FireSolidIcon,
  RecordOutlineIcon,
  RecordSolidIcon,
  ShopOutlineIcon,
  ShopSolidIcon,
  TicketOutlineIcon,
  TicketSolidIcon,
  XMarkIcon,
} from "@/assets/icons";
import { Button } from "@nextui-org/button";
import { Tab, Tabs, Image, Card, CardBody, Chip, Checkbox } from "@nextui-org/react";

import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";

import TextTransition, { presets } from "react-text-transition";
import Link from "next/link";
const TEXTS: Array<{ text: string; gradient: string }> = [
  { text: "modern", gradient: "linear-gradient(to right, #ffedbc, #ff5577)" },
  {
    text: "secure",
    gradient:
      "linear-gradient(90deg, hsla(139, 72%, 83%, 1) 0%, hsla(229, 89%, 75%, 1) 100%)",
  },
  {
    text: "failproof",
    gradient:
      "linear-gradient(90deg, hsla(295, 100%, 84%, 1) 0%, hsla(238, 100%, 77%, 1) 100%)",
  },
];
function ChangingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setIndex((currentIndex) =>
          currentIndex + 1 === TEXTS.length ? 0 : currentIndex + 1
        ),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  const textObject = TEXTS[index];
  return (
    <TextTransition
      inline
      springConfig={presets.gentle}
      className="gradientChangingText"
      style={{ "--gradient": textObject.gradient }}
    >
      {textObject.text}
    </TextTransition>
  );
}
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-4 transition-all group-hover:ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
    />
  </svg>
);

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-[calc(100vh_-_88px_*_2)] min-h-72">
        <h1 className="text-5xl lg:text-6xl text-center max-w-[850px]">
          The <ChangingText /> management system you need.
        </h1>
        <p className="text-center lg:leading-8 lg:text-xl text-gray-400 max-w-3xl mt-4">
          Elevate your event management with streamlined digital solutions that
          enhance attendee experience and maximize engagement effortlessly.
        </p>
        <div className="flex gap-3 items-center mt-5">
          <Button data-cursor-scale size="lg" endContent={<ArrowIcon />}>
            Get started
          </Button>
          <Button
            as={Link}
            href="#pricing"
            data-cursor-scale
            size="lg"
            variant="flat"
          >
            Pricing
          </Button>
        </div>
      </section>
      <Features />
      <Pricing />
    </>
  );
}

enum TabsKeys {
  Ticketing = "ticketing",
  Marketing = "marketing",
  Recording = "recording",
  Integrations = "integrations",
}

const tabs = [
  {
    key: TabsKeys.Ticketing,
    icon: [<TicketOutlineIcon />, <TicketSolidIcon />],
    label: "Ticketing",
    color: "success",
  },
  {
    key: TabsKeys.Marketing,
    icon: [<ChartOutlineIcon />, <ChartSolidIcon />],
    label: "Marketing",
    color: "secondary",
  },
  {
    key: TabsKeys.Recording,
    icon: [<RecordOutlineIcon />, <RecordSolidIcon />],
    label: "Stream & Record",
    color: "danger",
  },
  {
    key: TabsKeys.Integrations,
    icon: [<ShopOutlineIcon />, <ShopSolidIcon />],
    label: "Integrations",
    color: "warning",
  },
];

const tabsContent: Record<
  number | string,
  { heading: string; description: string; imageSrc: string }
> = {
  [TabsKeys.Integrations]: {
    heading: "Go paperless",
    description:
      "Allow your listeners a seamless entry with Apple Wallet or Google Pay. They'll only need to bring their phone and excitement.",
    imageSrc: appleWalletImage.src,
  },
  [TabsKeys.Marketing]: {
    heading: "Let everybody know",
    description:
      "Easily launch ad campaigns for your events with just a click, simplifying your promotional efforts. Reach your audience quickly and effectively, ensuring maximum sales.",
    imageSrc: campaingsImage.src,
  },
  [TabsKeys.Recording]: {
    heading: "Culture never dies",
    description:
      "Easily capture and stream live events worldwide, connecting remote audiences and preserving content digitally for instant access and engagement.",
    imageSrc: liveImage.src,
  },
  [TabsKeys.Ticketing]: {
    heading: "Never been easier",
    description:
      "Transform your event planning with our advanced feature, offering customizable ticket options, seamless online purchasing, and robust revenue tracking. Effortlessly manage attendees and maximize event success with ease.",
    imageSrc: vancouverConcert.src,
  },
};

function Features() {
  const [selectedKey, setSelectedKey] = useState<number | string>(tabs[0].key);
  const tabContent = tabsContent[selectedKey];
  return (
    <>
      <div id="features" className="w-full h-1" />
      <section className="flex flex-col items-center justify-center mt-[calc(88px_*_2)]">
        <Tabs
          selectedKey={selectedKey}
          onSelectionChange={setSelectedKey}
          classNames={{ tabList: "bg-zinc-900 border-zinc-800 border-small flex-wrap justify-center lg:justify-start",tab:"w-fit" }}
          aria-label="Features Tabs"
          size="lg"
          className=""
          color={tabs.find((t) => t.key === selectedKey)?.color as any}
          radius="sm"
        >
          {tabs.map(({ key, icon, label, color }) => (
            <Tab
              key={key}
              title={
                <div className="flex items-center space-x-2 ">
                  <div className="size-5">
                    {icon[key === selectedKey ? 1 : 0]}
                  </div>
                  <span>{label}</span>
                </div>
              }
            />
          ))}
        </Tabs>
        <div className="mt-5 lg:mt-10">
          <Card className="p-4 lg:px-12 lg:py-6 rounded-3xl bg-zinc-900 border-zinc-800 border-small">
            <CardBody className="flex-row items-center justify-center gap-12">
              <div className="w-full lg:max-w-[600px] flex flex-col gap-2 lg:gap-4">
                <h2 className="text-4xl lg:text-6xl">{tabContent.heading}</h2>
                <p className="text-neutral-400 lg:text-lg">
                  {tabContent.description}
                </p>
              </div>
              <div className="hidden lg:block">
                <Image
                  src={tabContent.imageSrc}
                  className="rounded-2xl h-[500px]"
                  alt="Apple Wallet Integration"
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
}
const plans: Array<{name:string,chipStyle?:string,price:string,description:string,features:Array<{label:string,isPositive:boolean}>}> = [
  {
    name: "Basic",
    price: "Free",
    description: "",
    "features": [
      {"label": "Basic event management tools", "isPositive": true},
      {"label": "Access to essential analytics", "isPositive": true},
      {"label": "Standard customer support", "isPositive": true},
      {"label": "Limited attendee capacity", "isPositive": false},
      {"label": "No advanced tools", "isPositive": false},
      {"label": "No customizable branding", "isPositive": false}
    ]
  },
  {
    name: "Pro",
    chipStyle:"primary",
    price: "$129/mo",
    description: "",
    "features": [
      {"label": "All features in Free Plan", "isPositive": true},
      {"label": "Advanced event management tools", "isPositive": true},
      {"label": "Increased attendee capacity", "isPositive": true},
      {"label": "Priority customer support", "isPositive": true},
      {"label": "Enhanced analytics and reporting", "isPositive": true},
      {"label": "Customizable branding options", "isPositive": true},
      {"label": "Limited integration with third-party services", "isPositive": false}
    ]
  },
  {
    name: "Enterprise",
    chipStyle:"secondary",
    price: "Custom",
    description: "",
    "features": [
      {"label": "All features in Pro Plan", "isPositive": true},
      {"label": "Unlimited attendee capacity", "isPositive": true},
      {"label": "Dedicated account manager", "isPositive": true},
      {"label": "Comprehensive analytics and reporting", "isPositive": true},
      {"label": "Full customization options", "isPositive": true},
      {"label": "Integration with third-party services", "isPositive": true},
      {"label": "Premium customer support with 24/7 availability", "isPositive": true}
    ]
  },
];
function Pricing() {
  return (
    <><div id="pricing" className="w-full h-1" />
    <section className="flex flex-col items-center justify-center mt-24">
      <h3 className="text-4xl lg:text-7xl font-sans">Plans</h3>
      <div className="mt-7 gap-5 items-stretch flex justify-center flex-wrap">
        {plans.map((plan) => (
          <Card className="border-zinc-800 border-small p-3 w-full lg:w-fit">
            <CardBody className="flex align-top">
              <div className="flex gap-2"><Chip color={plan.chipStyle as any}>{plan.name}</Chip>{plan.name === 'Pro' && <Chip startContent={<div className="size-5"><FireSolidIcon /></div>}
        variant="faded"
        color="warning">Hot</Chip>}</div>
              <h4 className="mt-4 font-sans text-5xl">{plan.price}</h4>
              <ul className="mt-6 flex flex-col gap-2">
                {plan.features.map(feature => <li className="border-b-small border-b-zinc-800 pb-2 last-of-type:border-none">
                  <Checkbox isSelected radius="full" icon={!feature.isPositive ? <XMarkIcon/> : undefined} defaultSelected color={feature.isPositive ? "primary" : "default"} className="pointer-events-none">{feature.label}</Checkbox>
                </li>)}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
      <p className="text-center mt-5 text-zinc-500">
        All prices are in CAD. Taxes may apply.
      </p>
    </section></>
  );
}
